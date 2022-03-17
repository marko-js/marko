import { types as t } from "@marko/compiler";
import type { References } from "../util/references";
import {
  getSectionId,
  createSectionState,
  forEachSectionIdReverse,
} from "../util/sections";
import { Reserve, compareReserves } from "../util/reserve";
import * as sorted from "../util/sorted-arr";
import { currentProgramPath, scopeIdentifier } from "../visitors/program";
import { callRuntime, callRead } from "./runtime";

export interface ReferenceGroup {
  identifier: t.Identifier;
  references: References;
  statements: t.Statement[];
  queuePriority: t.NumericLiteral;
}

export type queueBuilder = (
  group: ReferenceGroup,
  closurePriority: t.NumericLiteral
) => t.Expression;

const [getApply] = createSectionState<ReferenceGroup[]>("apply", () => []);
const [getHydrate] = createSectionState<ReferenceGroup[]>("hydrate", () => []);
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
  references: References,
  statement: t.Statement | t.Statement[]
) {
  const groups =
    type === "apply" ? getApply(targetSectionId) : getHydrate(targetSectionId);
  const existingGroup = getGroupByReferences(groups, references);
  const isNew = !existingGroup;
  const { statements } = isNew
    ? createAndInsertGroup(type, groups, references)
    : existingGroup;

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }
  return isNew ? 1 : 0;
}

export function bindingToApplyGroup(binding: Reserve, sectionId: number) {
  const applyGroups = getApply(sectionId);
  const group =
    getGroupByReferences(applyGroups, binding) ??
    createAndInsertGroup("apply", applyGroups, binding);
  return group;
}

function createAndInsertGroup(
  type: "apply" | "hydrate",
  groups: ReferenceGroup[],
  references: References
) {
  const identifier = t.identifier(generateReferenceGroupName(type, references));
  const group: ReferenceGroup = {
    identifier,
    references,
    statements: [],
    queuePriority: t.numericLiteral(NaN),
  };
  sorted.insert(compareReferenceGroups, groups, group);
  return group;
}

function getGroupByReferences(
  groups: ReferenceGroup[],
  references: References
) {
  const groupIndex = sorted.findIndex(compareReferenceGroups, groups, {
    references,
  } as ReferenceGroup);
  return groups[groupIndex];
}

export function writeAllStatementGroups() {
  forEachSectionIdReverse((sectionId) => {
    writeHydrateGroups(sectionId);
    writeApplyGroups(sectionId);
  });
}

export function writeApplyGroups(sectionId: number) {
  const groups = getApply(sectionId);
  if (!groups.length) return;

  const closurePriorities = [];

  for (let i = groups.length; i--; ) {
    const group = groups[i];
    const { identifier, references, statements, queuePriority } = group;
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
          i += addStatement(
            "apply",
            sectionId,
            binding,
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
          closurePriorities.push(closurePriority);
          i += addStatement(
            "apply",
            references.sectionId,
            references,
            t.expressionStatement(factory(group, closurePriority))
          );
          i += addStatement(
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
            statements.length === 1
              ? statements[0]
              : t.blockStatement(statements)
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

  const offset = groups[0].references ? 0 : 1;
  for (let i = offset; i < groups.length; i++) {
    groups[i].queuePriority.value = i - offset;
  }
  for (let i = 0; i < closurePriorities.length; i++) {
    closurePriorities[i].value = i + groups.length - offset;
  }
}

export function writeHydrateGroups(sectionId: number) {
  const groups = getHydrate(sectionId);
  for (let i = groups.length; i--; ) {
    const { identifier, references, statements } = groups[i];
    const params: Parameters<typeof t.functionDeclaration>[1] = references
      ? (Array.isArray(references) ? references : [references]).map((binding) =>
          t.assignmentPattern(
            t.identifier(binding.name),
            callRead(binding, sectionId)
          )
        )
      : [];

    const [fnPath] = currentProgramPath.pushContainer(
      "body",
      t.functionDeclaration(
        identifier,
        [scopeIdentifier, ...params],
        t.blockStatement(statements)
      )
    );
    fnPath.traverse(bindFunctionsVisitor, { root: fnPath, sectionId });

    addStatement(
      "apply",
      sectionId,
      references,
      t.expressionStatement(
        callRuntime("queueHydrate", scopeIdentifier, identifier)
      )
    );
  }
}

/**
 * reference group priority is sorted by number of references,
 * then if needed by reference order.
 */
function compareReferenceGroups(
  { references: a }: ReferenceGroup,
  { references: b }: ReferenceGroup
) {
  if (a) {
    if (b) {
      if (Array.isArray(a)) {
        if (Array.isArray(b)) {
          const len = a.length;
          const lenDelta = len - b.length;
          if (lenDelta !== 0) {
            return lenDelta;
          }

          for (let i = 0; i < len; i++) {
            const compareResult = compareReserves(a[i], b[i]);
            if (compareResult !== 0) {
              return compareResult;
            }
          }

          return 0;
        } else {
          return 1;
        }
      } else if (Array.isArray(b)) {
        return -1;
      } else {
        return compareReserves(a, b);
      }
    } else {
      return 1;
    }
  } else {
    return b ? -1 : 0;
  }
}

function generateReferenceGroupName(
  type: "apply" | "hydrate",
  references: References
) {
  let name = type;

  if (references) {
    if (Array.isArray(references)) {
      name += "With";
      for (const ref of references) {
        name += `_${ref.name}`;
      }
    } else {
      name += `_${references.name}`;
    }
  }

  return currentProgramPath.scope.generateUid(name);
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
  const references = extra?.references;
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
  const [firstApply] = getApply(sectionId);
  const defaultApply =
    firstApply && !firstApply.references && firstApply.identifier;
  return defaultApply || t.nullLiteral();
}
