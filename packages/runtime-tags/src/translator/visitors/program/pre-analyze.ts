import { types as t } from "@marko/compiler";

import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import { getMarkoRoot, isMarko } from "../../util/get-root";
import withPreviousLocation from "../../util/with-previous-location";

type StringOrIdPath = t.NodePath<t.StringLiteral> | t.NodePath<t.Identifier>;
interface State {
  crawl: boolean;
}

const TAG_NAME_IDENTIFIER_REG = /^[A-Z][a-zA-Z0-9_$]*$/;
const BINDING_CHANGE_HANDLER = new WeakMap<
  t.Identifier,
  t.MarkoAttribute | t.Identifier
>();

export function preAnalyze(program: t.NodePath<t.Program>) {
  const state: State = { crawl: false };
  normalizeBody(state, program.get("body"));
  if (state.crawl) {
    program.scope.crawl();
  }
}

function normalizeBody(
  state: State,
  body:
    | undefined
    | t.NodePath<
        | t.Program["body"][number]
        | t.MarkoTagBody["body"][number]
        | t.MarkoTag["attributeTags"]
      >[],
) {
  if (body?.length) {
    for (const child of body) {
      if (child.isMarkoTag()) {
        normalizeTag(state, child);
      }
    }
  }
}

function normalizeTag(state: State, tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const { name, attributes } = node;
  normalizeBody(state, tag.get("body").get("body"));
  normalizeBody(state, tag.get("attributeTags"));

  if (node.var) {
    const insertions = getAssignmentInsertions(node.var);
    if (insertions) {
      state.crawl = true;
      tag.insertAfter(insertions);
    }
  }

  if (node.body.params.length) {
    let insertions: t.MarkoTag[] | undefined;
    for (const param of node.body.params) {
      insertions = getAssignmentInsertions(param, insertions);
    }

    if (insertions) {
      state.crawl = true;
      node.body.body = [...insertions, ...node.body.body];
    }
  }

  if (name.type === "StringLiteral") {
    const tagName = name.value;
    if (
      tag.scope.getBinding(tagName) &&
      TAG_NAME_IDENTIFIER_REG.test(tagName)
    ) {
      // Convert tags which have an associated binding to an identifier.
      // <MyTag> --> <${MyTag}>
      state.crawl = true;
      node.name = withPreviousLocation(t.identifier(tagName), name);
    }
  }

  for (let i = 0; i < attributes.length; i++) {
    const attr = attributes[i];
    if (t.isMarkoAttribute(attr) && attr.bound) {
      // Inject change handler functions from the binding shorthand.
      state.crawl = true;
      attr.bound = false;
      attributes.splice(++i, 0, getChangeHandler(tag, attr));
    }
  }
}

function getChangeHandler(
  tag: t.NodePath<t.MarkoTag>,
  attr: t.MarkoAttribute,
): t.MarkoAttribute {
  const attrName = attr.name;
  const changeAttrName = attrName + "Change";

  if (t.isIdentifier(attr.value)) {
    const binding = tag.scope.getBinding(attr.value.name);
    if (!binding)
      return t.markoAttribute(
        changeAttrName,
        buildChangeHandlerFunction(attr.value),
      );

    const existingChangedAttr = BINDING_CHANGE_HANDLER.get(binding.identifier);
    if (!existingChangedAttr) {
      const bindingIdentifierPath =
        binding.path.getOuterBindingIdentifierPaths()[binding.identifier.name];
      const changeAttrExpr = bindingIdentifierPath
        ? bindingIdentifierPath.parentPath === binding.path
          ? buildChangeHandlerFunction(attr.value)
          : bindingIdentifierPath.parentPath!.isObjectProperty()
            ? getChangeHandlerFromObjectPattern(
                bindingIdentifierPath.parentPath!,
              )
            : undefined
        : undefined;

      if (!changeAttrExpr) {
        throw tag.hub.buildError(attr.value, "Unable to bind to value.");
      }

      const changeHandlerAttr = t.markoAttribute(
        changeAttrName,
        changeAttrExpr,
      );
      BINDING_CHANGE_HANDLER.set(binding.identifier, changeHandlerAttr);
      return changeHandlerAttr;
    }

    if (existingChangedAttr.type === "Identifier") {
      return t.markoAttribute(
        changeAttrName,
        withPreviousLocation(
          t.identifier(existingChangedAttr.name),
          attr.value,
        ),
      );
    }

    const markoRoot = isMarko(binding.path)
      ? binding.path
      : getMarkoRoot(binding.path);

    if (!(markoRoot?.isMarkoTag() || markoRoot?.isMarkoTagBody())) {
      throw tag.hub.buildError(attr.value, "Unable to bind to value.");
    }

    const changeHandlerId = generateUid(changeAttrName);
    const changeHandlerConst = t.markoTag(
      t.stringLiteral("const"),
      [t.markoAttribute("value", existingChangedAttr.value, null, null, true)],
      t.markoTagBody([]),
      null,
      t.identifier(changeHandlerId),
    );
    BINDING_CHANGE_HANDLER.set(
      binding.identifier,
      (existingChangedAttr.value = t.identifier(changeHandlerId)),
    );

    if (markoRoot.isMarkoTag()) {
      markoRoot.insertAfter(changeHandlerConst);
    } else {
      markoRoot.unshiftContainer("body", changeHandlerConst);
    }

    markoRoot.scope.crawl();

    return t.markoAttribute(
      changeAttrName,
      withPreviousLocation(t.identifier(changeHandlerId), attr.value),
    );
  } else if (
    t.isMemberExpression(attr.value) ||
    t.isOptionalMemberExpression(attr.value)
  ) {
    const prop = attr.value.property;
    if (!t.isPrivateName(attr.value.property)) {
      const memberObj = t.cloneNode(attr.value.object);
      const memberProp =
        prop.type === "Identifier"
          ? withPreviousLocation(t.identifier(prop.name + "Change"), prop)
          : t.binaryExpression(
              "+",
              t.cloneNode(prop),
              t.stringLiteral("Change"),
            );
      const computed = memberProp.type !== "Identifier";

      return t.markoAttribute(
        changeAttrName,
        attr.value.optional
          ? t.optionalMemberExpression(memberObj, memberProp, computed, true)
          : t.memberExpression(memberObj, memberProp, computed),
      );
    }
  }

  throw tag.hub.buildError(
    attr.value,
    "Attributes may only be bound to identifiers or member expressions",
  );
}

function buildChangeHandlerFunction(id: t.Identifier) {
  const newId = "_new_" + id.name;
  return t.arrowFunctionExpression(
    [withPreviousLocation(t.identifier(newId), id)],
    t.blockStatement([
      t.expressionStatement(
        t.assignmentExpression(
          "=",
          withPreviousLocation(t.identifier(id.name), id),
          withPreviousLocation(t.identifier(newId), id),
        ),
      ),
    ]),
  );
}

function getChangeHandlerFromObjectPattern(
  parent: t.NodePath<t.ObjectProperty>,
) {
  let changeKey: t.Identifier;
  const pattern = parent.parentPath as t.NodePath<t.ObjectPattern>;
  if (parent.node.computed) {
    changeKey = generateUidIdentifier("dynamicChange");
    pattern.pushContainer(
      "properties",
      t.objectProperty(
        t.binaryExpression(
          "+",
          parent.get("key").node,
          t.stringLiteral("Change"),
        ),
        changeKey,
        true,
      ),
    );
  } else {
    const key = parent.get("key") as StringOrIdPath;
    const searchKey = `${getStringOrIdentifierValue(key)}Change`;
    for (const prop of pattern.get("properties")) {
      if (prop.isObjectProperty()) {
        const propKey = prop.get("key");
        const propValue = prop.get("value");
        if (
          !prop.node.computed &&
          getStringOrIdentifierValue(propKey as StringOrIdPath) === searchKey &&
          propValue.isIdentifier()
        ) {
          changeKey = propValue.node;
          break;
        }
      }
    }

    if (!changeKey!) {
      pattern.unshiftContainer(
        "properties",
        t.objectProperty(
          t.stringLiteral(searchKey),
          (changeKey = generateUidIdentifier(searchKey)),
        ),
      );
    }
  }

  return changeKey;
}

function getStringOrIdentifierValue(path: StringOrIdPath) {
  return getLiteralName(path.node);
}

function getLiteralName(node: t.Node) {
  switch (node.type) {
    case "Identifier":
      return node.name;
    case "StringLiteral":
      return node.value;
  }
}

export function getAssignmentInsertions(
  node: t.Node,
  insertions?: t.MarkoTag[] | undefined,
) {
  switch (node.type) {
    case "ObjectPattern":
      for (const prop of node.properties) {
        if (prop.type === "ObjectProperty") {
          if (prop.value.type === "AssignmentPattern") {
            const { left, right } = prop.value;
            const sourceName = generateUid(
              getLiteralName(left) || getLiteralName(prop.key) || "pattern",
            );
            prop.shorthand = false;
            prop.value = t.identifier(sourceName);
            (insertions ||= []).push(
              toConstTag(left as any, toFallbackExpr(sourceName, right)),
            );
            getAssignmentInsertions(left, insertions);
          } else {
            insertions = getAssignmentInsertions(prop.value, insertions);
          }
        }
      }
      break;
    case "ArrayPattern":
      for (let i = 0, len = node.elements.length; i < len; i++) {
        const el = node.elements[i];
        if (el != null) {
          if (el.type === "AssignmentPattern") {
            const { left, right } = el;
            const sourceName = generateUid(getLiteralName(left) || "pattern");
            node.elements[i] = t.identifier(sourceName);
            (insertions ||= []).push(
              toConstTag(left as any, toFallbackExpr(sourceName, right)),
            );
            getAssignmentInsertions(left, insertions);
          } else {
            insertions = getAssignmentInsertions(el, insertions);
          }
        }
      }
      break;
  }

  return insertions;
}

function toFallbackExpr(id: string, fallback: t.Expression) {
  return t.conditionalExpression(
    t.binaryExpression("!==", buildUndefined(), t.identifier(id)),
    t.identifier(id),
    fallback,
  );
}

function toConstTag(id: t.Identifier, expr: t.Expression) {
  return t.markoTag(
    t.stringLiteral("const"),
    [t.markoAttribute("value", expr, null, null, true)],
    t.markoTagBody(),
    null,
    id,
  );
}

function buildUndefined() {
  return t.unaryExpression("void", t.numericLiteral(0));
}
