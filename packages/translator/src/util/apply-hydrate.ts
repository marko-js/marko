import { types as t } from "@marko/compiler";
import { getReferenceGroup, ReferenceGroup } from "../util/references";
import {
  getSectionId,
  createSectionState,
  forEachSectionIdReverse,
  getOrCreateSectionId,
} from "../util/sections";
import { Reserve, insertReserve } from "../util/reserve";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import { callRuntime, callRead } from "./runtime";
import { getTemplateId } from "@marko/babel-utils";

export type queueBuilder = (
  group: ReferenceGroup,
  closurePriority: t.NumericLiteral
) => t.Expression;

const [getApplyStatements] = createSectionState<
  Array<t.Statement[] | undefined>
>("applyStatements", () => []);
const [getHydrateStatements] = createSectionState<
  Array<t.Statement[] | undefined>
>("hydrateStatements", () => []);
const [getQueueBuilder, _setQueueBuilder] =
  createSectionState<queueBuilder>("queue");

export function setQueueBuilder(
  tag: t.NodePath<t.MarkoTag>,
  builder: queueBuilder
) {
  _setQueueBuilder(getSectionId(tag.get("body")), builder);
}

export function addStatement(
  type: "apply" | "hydrate",
  targetSectionId: number,
  references: ReferenceGroup | undefined,
  statement: t.Statement | t.Statement[]
) {
  const statementsIndex = references?.index ?? 0;
  const allStatements =
    type === "apply"
      ? getApplyStatements(targetSectionId)
      : getHydrateStatements(targetSectionId);
  const statements = (allStatements[statementsIndex] ??= []);

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }
}

function getHydrateRegisterId(
  sectionId: number,
  references: ReferenceGroup["references"]
) {
  const {
    markoOpts: { optimize },
    opts: { filename },
  } = currentProgramPath.hub.file;
  let name = "";
  if (references) {
    if (Array.isArray(references)) {
      for (const ref of references) {
        name += `_${ref.name}`;
      }
    } else {
      name += `_${references.name}`;
    }
  }
  return `${getTemplateId(optimize, filename as string)}_${sectionId}${name}`;
}

export function writeAllStatementGroups() {
  forEachSectionIdReverse((sectionId) => {
    writeHydrateGroups(sectionId);
    writeApplyGroups(sectionId);
  });
}

const [getClosurePriorities] = createSectionState<Array<t.NumericLiteral>>(
  "closurePriorities",
  () => []
);

export function writeApplyGroups(sectionId: number) {
  const allStatements = getApplyStatements(sectionId);
  const numReferenceGroups =
    currentProgramPath.node.extra!.referenceGroups![sectionId]!.length;
  if (!numReferenceGroups) return;

  for (let i = numReferenceGroups; i--; ) {
    const statements = allStatements[i] ?? [];

    if (i === 0 && !statements.length) continue;

    const referenceGroup = getReferenceGroup(sectionId, i);
    const { references, apply: identifier } = referenceGroup;
    const queuePriority = t.numericLiteral(i - 1);
    let params: (t.Identifier | t.RestElement | t.Pattern)[];
    let body: t.BlockStatement;

    if (references) {
      if (Array.isArray(references)) {
        params = references.map((binding) =>
          t.assignmentPattern(
            t.identifier(binding.name),
            callRead(binding, sectionId)
          )
        );
        body = t.blockStatement(statements);

        for (const binding of references) {
          addStatement(
            "apply",
            sectionId,
            getReferenceGroup(sectionId, binding),
            t.expressionStatement(
              // TODO: might need to queue in a child scope
              callRuntime("queue", scopeIdentifier, identifier, queuePriority)
            )
          );
        }
      } else if (references.sectionId !== sectionId) {
        params = [
          t.assignmentPattern(
            t.identifier(references.name),
            callRead(references, sectionId)
          ),
        ];
        body = t.blockStatement(statements);

        const factory = getQueueBuilder(sectionId);
        if (factory) {
          const closurePriority = t.numericLiteral(NaN);
          getClosurePriorities(references.sectionId).push(closurePriority);
          addStatement(
            "apply",
            references.sectionId,
            getReferenceGroup(references.sectionId, references),
            t.expressionStatement(factory(referenceGroup, closurePriority))
          );
          addStatement(
            "apply",
            sectionId,
            undefined,
            t.expressionStatement(
              callRuntime("queue", scopeIdentifier, identifier, queuePriority)
            )
          );
        }
      } else {
        const param = t.identifier(references.name);
        params = [param];
        body = t.blockStatement([
          t.ifStatement(
            callRuntime(
              "write",
              scopeIdentifier,
              t.numericLiteral(references.id),
              param
            ),
            t.blockStatement(statements)
          ),
        ]);
      }
    } else {
      params = [];
      body = t.blockStatement(statements);
    }

    const [fnPath] = currentProgramPath.pushContainer(
      "body",
      t.functionDeclaration(identifier, [scopeIdentifier, ...params], body)
    );
    fnPath.traverse(bindFunctionsVisitor, { root: fnPath, sectionId });
  }

  const closurePriorities = getClosurePriorities(sectionId);
  for (let i = 0; i < closurePriorities.length; i++) {
    closurePriorities[i].value = i + allStatements.length;
  }
}

export function writeHydrateGroups(sectionId: number) {
  const allStatements = getHydrateStatements(sectionId);
  for (let i = allStatements.length; i--; ) {
    const statements = allStatements[i];
    if (!statements?.length) continue;

    const referenceGroup = getReferenceGroup(sectionId, i)!;
    const { references, hydrate: identifier } = referenceGroup;
    const params: Parameters<typeof t.functionDeclaration>[1] = references
      ? (Array.isArray(references) ? references : [references]).map((binding) =>
          t.assignmentPattern(
            t.identifier(binding.name),
            callRead(binding, sectionId)
          )
        )
      : [];

    const [fnPath] = currentProgramPath.pushContainer("body", [
      t.functionDeclaration(
        identifier,
        [scopeIdentifier, ...params],
        t.blockStatement(statements)
      ),
      t.expressionStatement(
        callRuntime(
          "register",
          t.stringLiteral(getHydrateRegisterId(sectionId, references)),
          identifier
        )
      ),
    ]);
    fnPath.traverse(bindFunctionsVisitor, { root: fnPath, sectionId });

    addStatement(
      "apply",
      sectionId,
      getReferenceGroup(sectionId, references),
      t.expressionStatement(
        callRuntime("queueHydrate", scopeIdentifier, identifier)
      )
    );
  }
}

export function addHTMLHydrateCall(
  sectionId: number,
  references?: ReferenceGroup
) {
  addStatement("hydrate", sectionId, references, undefined as any);
}

export function writeHTMLHydrateStatements(
  path: t.NodePath<t.MarkoTagBody | t.Program>
) {
  const sectionId = getOrCreateSectionId(path);
  const allStatements = getHydrateStatements(sectionId);

  path.unshiftContainer(
    "body",
    t.variableDeclaration("const", [
      t.variableDeclarator(scopeIdentifier, callRuntime("nextScopeId")),
    ])
  );

  if (!allStatements.length) return;

  const refs: Reserve[] = [];

  for (let i = allStatements.length; i--; ) {
    if (allStatements[i]?.length) {
      const { references } = getReferenceGroup(sectionId, i)!;
      if (references) {
        if (Array.isArray(references)) {
          for (const ref of references) {
            insertReserve(refs, ref);
          }
        } else {
          insertReserve(refs, references);
        }
      }
      path.pushContainer(
        "body",
        t.expressionStatement(
          callRuntime(
            "writeHydrateCall",
            scopeIdentifier,
            t.stringLiteral(getHydrateRegisterId(sectionId, references))
          )
        )
      );
    }
  }

  path.pushContainer(
    "body",
    t.expressionStatement(
      callRuntime(
        "writeHydrateScope",
        scopeIdentifier,
        t.objectExpression(
          refs.reduce((acc, ref) => {
            acc.push(
              t.objectProperty(t.numericLiteral(ref.id), t.identifier(ref.name))
            );
            return acc;
          }, [] as Array<t.ObjectProperty>)
        )
      )
    )
  );
}

const bindFunctionsVisitor: t.Visitor<{
  root: t.NodePath<any>;
  sectionId: number;
}> = {
  FunctionExpression: { exit: bindFunction },
  ArrowFunctionExpression: { exit: bindFunction },
};

function bindFunction(
  fn: t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>,
  { root, sectionId }: { root: t.NodePath<any>; sectionId: number }
) {
  const { node } = fn;
  const { extra } = node;
  const references = extra?.references?.references;
  const program = fn.hub.file.path;
  const functionIdentifier = program.scope.generateUidIdentifier(extra?.name);

  if (references) {
    if (node.body.type !== "BlockStatement") {
      node.body = t.blockStatement([t.returnStatement(node.body)]);
    }

    node.body.body.unshift(
      t.variableDeclaration(
        "const",
        (Array.isArray(references) ? references : [references]).map((binding) =>
          t.variableDeclarator(
            t.identifier(binding.name),
            callRead(binding, sectionId)
          )
        )
      )
    );
  }

  root.insertBefore(
    t.variableDeclaration("const", [
      t.variableDeclarator(functionIdentifier, node),
    ])
  );

  node.params.unshift(scopeIdentifier);
  fn.replaceWith(callRuntime("bind", scopeIdentifier, functionIdentifier));
}

export function getDefaultApply(sectionId: number) {
  const [firstApplyStatements] = getApplyStatements(sectionId);
  return firstApplyStatements
    ? getReferenceGroup(sectionId, 0).apply
    : t.nullLiteral();
}
