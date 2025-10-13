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
  body: t.NodePath<
    t.Program["body"][number] | t.MarkoTagBody["body"][number]
  >[],
) {
  for (const child of body) {
    if (child.isMarkoTag()) {
      normalizeTag(state, child);
    }
  }
}

function normalizeTag(state: State, tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  const { name, attributes } = node;

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

  normalizeBody(state, tag.get("body").get("body"));
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
  } else if (t.isMemberExpression(attr.value)) {
    const prop = attr.value.property;
    if (!t.isPrivateName(attr.value.property)) {
      return t.markoAttribute(
        changeAttrName,
        t.memberExpression(
          t.cloneNode(attr.value.object),
          prop.type === "Identifier"
            ? withPreviousLocation(t.identifier(prop.name + "Change"), prop)
            : t.binaryExpression(
                "+",
                t.cloneNode(prop),
                t.stringLiteral("Change"),
              ),
          prop.type !== "Identifier",
        ),
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
  return path.isStringLiteral() ? path.node.value : path.node.name;
}
