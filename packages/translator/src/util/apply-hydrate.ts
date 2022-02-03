import { types as t } from "@marko/compiler";
import type { References } from "../util/references";
import { getSectionId, createSectionState } from "../util/sections";
import { Reserve, compareReserves } from "../util/reserve";
import * as sorted from "../util/sorted-arr";
import { currentProgramPath } from "../visitors/program";
import { callRuntime, callRead } from "./runtime";

interface ReferenceGroup {
  identifier: t.Identifier;
  references: References;
  statements: t.Statement[];
}

export type queueFactory = (
  binding: Reserve,
  functionIdentifier: t.Identifier,
  targetSectionId: number
) => t.Expression;

const [getApply] = createSectionState<ReferenceGroup[]>("apply", () => []);
const [getHydrate] = createSectionState<ReferenceGroup[]>("hydrate", () => []);
const [getQueueFactory, _setQueueFactory] =
  createSectionState<queueFactory>("queue");

export function setQueueFactory(tag: t.NodePath<t.MarkoTag>, fn: queueFactory) {
  _setQueueFactory(getSectionId(tag.get("body")), fn);
}

export function addStatement(
  type: "apply" | "hydrate",
  targetSectionId: number,
  references: References,
  statement: t.Statement | t.Statement[]
) {
  const { statements, identifier } = bindingToGroup(
    type,
    references,
    targetSectionId
  );
  const isFirstStatement = statements.length === 0;

  if (Array.isArray(statement)) {
    statements.push(...statement);
  } else {
    statements.push(statement);
  }

  if (isFirstStatement) {
    if (type === "hydrate") {
      addStatement(
        "apply",
        targetSectionId,
        references,
        crossGroupExpressionStatement(t.callExpression(identifier, []))
      );
    } else if (Array.isArray(references)) {
      for (const binding of references) {
        addStatement(
          type,
          targetSectionId,
          binding,
          crossGroupExpressionStatement(
            // TODO: might need to queue in a child scope
            callRuntime("queue", identifier, t.numericLiteral(binding.id))
          )
        );
      }
    } else if (references && references.sectionId !== targetSectionId) {
      const factory = getQueueFactory(targetSectionId);
      if (factory) {
        addStatement(
          type,
          references.sectionId,
          references,
          crossGroupExpressionStatement(
            factory(references, identifier, targetSectionId)
          )
        );
      }
    }
  }
}

function crossGroupExpressionStatement(expression: t.Expression) {
  const statement = t.expressionStatement(expression);
  statement.extra = {
    crossGroup: true,
  };
  return statement;
}

export function bindingToApplyId(binding: Reserve, sectionId: number) {
  return bindingToGroup("apply", binding, sectionId).identifier;
}

function bindingToGroup(
  type: "apply" | "hydrate",
  references: References,
  sectionId: number
) {
  const groups = type === "apply" ? getApply(sectionId) : getHydrate(sectionId);
  const groupIndex = sorted.findIndex(compareReferenceGroups, groups, {
    references,
  } as ReferenceGroup);

  if (groupIndex === -1) {
    const identifier = t.identifier(
      generateReferenceGroupName(type, references)
    );
    const group = {
      identifier,
      references,
      statements: [],
    };
    sorted.insert(compareReferenceGroups, groups, group);
    return group;
  } else {
    return groups[groupIndex];
  }
}

export function writeApplyGroups(sectionId: number) {
  const groups = getApply(sectionId);
  for (const { identifier, references, statements } of groups) {
    statements.sort((a, b) => {
      const aCrossGroup = a.extra && a.extra.crossGroup ? 1 : 0;
      const bCrossGroup = b.extra && b.extra.crossGroup ? 1 : 0;
      return aCrossGroup - bCrossGroup;
    });

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
      } else if (references.sectionId !== sectionId) {
        params = [
          t.assignmentPattern(
            t.identifier(references.name),
            callRead(references, sectionId)
          ),
        ];
        body = t.blockStatement(statements);
      } else {
        const param = t.identifier(references.name);
        params = [param];
        body = t.blockStatement([
          t.ifStatement(
            callRuntime("write", t.numericLiteral(references.id), param),
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

    const [result] = currentProgramPath.pushContainer(
      "body",
      t.functionDeclaration(identifier, params, body)
    );

    if (references) {
      // result.scope.crawl();
      result.traverse(bindFunctionsVisitor, { root: result, sectionId });
    }
  }
}

export function writeHydrateGroups(sectionId: number) {
  const groups = getHydrate(sectionId);
  for (const { identifier, references, statements } of groups) {
    const params = references
      ? (Array.isArray(references) ? references : [references]).map((binding) =>
          t.assignmentPattern(
            t.identifier(binding.name),
            callRead(binding, sectionId)
          )
        )
      : [];

    currentProgramPath.pushContainer(
      "body",
      t.functionDeclaration(identifier, params, t.blockStatement(statements))
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
  FunctionExpression: bindFunction,
  ArrowFunctionExpression: bindFunction,
};

function bindFunction(
  fn: t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>,
  { root, sectionId }: { root: t.NodePath<any>; sectionId: number }
) {
  const { node } = fn;
  const { extra } = node;
  const references = extra?.references;
  if (references) {
    const program = fn.hub.file.path;
    const id = program.scope.generateUidIdentifier(extra.name);

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

    root.insertBefore(
      t.variableDeclaration("const", [t.variableDeclarator(id, node)])
    );

    fn.replaceWith(callRuntime("bind", id));
  }
}

export function getDefaultApply(sectionId: number) {
  const [firstApply] = getApply(sectionId);
  const defaultApply =
    firstApply && !firstApply.references && firstApply.identifier;
  return defaultApply || t.nullLiteral();
}
