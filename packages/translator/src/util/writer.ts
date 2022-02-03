import { types as t } from "@marko/compiler";
import type { References } from "../util/references";
import {
  Section,
  Reserve,
  getSectionId,
  createSectionState,
  compareReserves,
  getSectionById,
  getParentSectionId,
} from "../util/sections";
import * as sorted from "../util/sorted-arr";
import { isOutputHTML } from "./marko-config";
import { callRuntime, callRead } from "./runtime";
import toTemplateOrStringLiteral, {
  appendLiteral,
} from "./to-template-string-or-literal";
import { getWalkString } from "./walks";
interface ReferenceGroup {
  identifier: t.Identifier;
  references: References;
  statements: t.Statement[];
}

export type queueFactory = (
  binding: Reserve,
  functionIdentifier: t.Identifier,
  targetSection: SectionTranslate
) => t.Expression;

const [getApply] = createSectionState<ReferenceGroup[]>("apply", () => []);
const [getHydrate] = createSectionState<ReferenceGroup[]>("hydrate", () => []);
const [getQueueFactory, _setQueueFactory] =
  createSectionState<queueFactory>("queue");

export function setQueueFactory(tag: t.NodePath<t.MarkoTag>, fn: queueFactory) {
  _setQueueFactory(getSectionId(tag.get("body")), fn);
}

const [getRenderer] = createSectionState<t.Identifier>("renderer", () =>
  t.identifier("")
);

export { getRenderer };

const [getWrites] = createSectionState<(string | t.Expression)[]>(
  "writes",
  () => [""]
);

export type SectionTranslate = Section;

export function start(path: t.NodePath<any>) {
  const parentId = path.state.sectionId;
  if (parentId && isOutputHTML()) {
    flushBefore(path);
  }

  const section = getSectionById<SectionTranslate>(
    path,
    (t.isMarkoTag(path.node) ? path.node.body : path.node).extra
  );
  path.state.sectionId = section.id;
}

export function end(path: t.NodePath<any>) {
  const section = getSectionById<SectionTranslate>(path);
  const targetPath = path.isMarkoTag() ? path.get("body") : path;

  if (isOutputHTML()) {
    flushInto(path);
  } else {
    writeApplyGroups(targetPath, section);
    writeHydrateGroups(targetPath, section);
  }

  if (!path.isProgram()) {
    path.state.sectionId = getParentSectionId(path);
  }

  return section;
}

export function writeTo(path: t.NodePath<any>) {
  const sectionId = getSectionId(path);
  return (
    strs: TemplateStringsArray,
    ...exprs: Array<string | t.Expression>
  ): void => {
    const exprsLen = exprs.length;
    const writes = getWrites(sectionId);
    appendLiteral(writes, strs[0]);

    for (let i = 0; i < exprsLen; i++) {
      writes.push(exprs[i], strs[i + 1]);
    }
  };
}

export function consumeHTML(path: t.NodePath<any>) {
  const writes = getWrites(getSectionId(path));
  const result = toTemplateOrStringLiteral(writes);

  writes.length = 0;
  writes[0] = "";

  if (result) {
    return t.expressionStatement(callRuntime("write", result));
  }
}

export function hasPendingHTML(
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>
) {
  const writes = getWrites(getSectionId(path));
  return Boolean(writes.length > 1 || writes[0]);
}

export function flushBefore(path: t.NodePath<any>) {
  const expr = consumeHTML(path);
  if (expr) {
    path.insertBefore(expr)[0].skip();
  }
}

export function flushInto(
  path: t.NodePath<t.MarkoTag> | t.NodePath<t.Program>
) {
  const target = path.isProgram() ? path : path.get("body");
  const expr = consumeHTML(target);
  if (expr) {
    target.pushContainer("body", expr)[0].skip();
  }
}

export function addStatement(
  type: "apply" | "hydrate",
  path: t.NodePath<any>,
  references: References,
  statement: t.Statement | t.Statement[],
  targetSection: SectionTranslate = getSectionById<SectionTranslate>(path)
) {
  const { statements, identifier } = bindingToGroup(
    type,
    path,
    references,
    targetSection
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
        path,
        references,
        crossGroupExpressionStatement(t.callExpression(identifier, []))
      );
    } else if (Array.isArray(references)) {
      for (const binding of references) {
        addStatement(
          type,
          path,
          binding,
          crossGroupExpressionStatement(
            // TODO: might need to queue in a child scope
            callRuntime("queue", identifier, t.numericLiteral(binding.id))
          )
        );
      }
    } else if (references && references.sectionId !== targetSection.id) {
      const factory = getQueueFactory(targetSection.id);
      if (factory) {
        addStatement(
          type,
          path,
          references,
          crossGroupExpressionStatement(
            factory(references, identifier, targetSection)
          ),
          getSectionById<SectionTranslate>(path, references)
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

export function bindingToApplyId(
  path: t.NodePath<any>,
  binding: Reserve,
  section: SectionTranslate = getSectionById(path)
) {
  return bindingToGroup("apply", path, binding, section).identifier;
}

function bindingToGroup(
  type: "apply" | "hydrate",
  path: t.NodePath<any>,
  references: References,
  section: SectionTranslate = getSectionById(path)
) {
  const groups =
    type === "apply" ? getApply(section.id) : getHydrate(section.id);
  const groupIndex = sorted.findIndex(compareReferenceGroups, groups, {
    references,
  } as ReferenceGroup);

  if (groupIndex === -1) {
    const identifier = t.identifier(
      generateReferenceGroupName(type, path, references)
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

export function getSectionMeta(section: SectionTranslate) {
  const [firstApply] = getApply(section.id);
  const writes = getWrites(section.id);
  const defaultApply =
    firstApply && !firstApply.references && firstApply.identifier;
  return {
    apply: defaultApply || t.nullLiteral(),
    walks: getWalkString(section.id),
    writes: toTemplateOrStringLiteral(writes) || t.stringLiteral(""),
  };
}

export function getSectionDeclarator(
  path: t.NodePath,
  section: SectionTranslate,
  name: string
) {
  const dummyIdentifier = path.scope.generateUidIdentifier(name);
  const identifier = getRenderer(section.id);
  identifier.name = dummyIdentifier.name;
  const { writes, walks, apply } = getSectionMeta(section);
  return t.variableDeclarator(
    identifier,
    callRuntime("createRenderer", writes, walks, apply)
  );
}

function writeApplyGroups(path: t.NodePath<any>, section: SectionTranslate) {
  const groups = getApply(section.id);
  const program = path.hub.file.path;
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
            callRead(binding, section.id)
          )
        );
        body = t.blockStatement(statements);
      } else if (references.sectionId !== section.id) {
        params = [
          t.assignmentPattern(
            t.identifier(references.name),
            callRead(references, section.id)
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

    const [result] = program.pushContainer(
      "body",
      t.functionDeclaration(identifier, params, body)
    );

    if (references) {
      // result.scope.crawl();
      result.traverse(bindFunctionsVisitor, { root: result, source: path });
    }
  }
}

function writeHydrateGroups(path: t.NodePath<any>, section: SectionTranslate) {
  const groups = getHydrate(section.id);
  const program = path.hub.file.path;
  for (const { identifier, references, statements } of groups) {
    const params = references
      ? (Array.isArray(references) ? references : [references]).map((binding) =>
          t.assignmentPattern(
            t.identifier(binding.name),
            callRead(binding, section.id)
          )
        )
      : [];

    program.pushContainer(
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
  path: t.NodePath,
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

  return path.hub.file.path.scope.generateUid(name);
}

const bindFunctionsVisitor: t.Visitor<{
  root: t.NodePath<any>;
  source: t.NodePath<any>;
}> = {
  FunctionExpression: bindFunction,
  ArrowFunctionExpression: bindFunction,
};

function bindFunction(
  fn: t.NodePath<t.FunctionExpression | t.ArrowFunctionExpression>,
  state: { root: t.NodePath<any>; source: t.NodePath<any> }
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
            callRead(binding, getSectionId(state.source))
          )
        )
      )
    );

    state.root.insertBefore(
      t.variableDeclaration("const", [t.variableDeclarator(id, node)])
    );

    fn.replaceWith(callRuntime("bind", id));
  }
}
