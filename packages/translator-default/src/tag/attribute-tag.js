import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  findParentTag,
  getTagDef,
  importDefault,
  isAttributeTag,
  isTransparentTag,
} from "@marko/babel-utils";
import { getAttrs } from "./util";
import withPreviousLocation from "../util/with-previous-location";

const EMPTY_OBJECT = {};
const parentIdentifierLookup = new WeakMap();

// TODO: optimize inline repeated @tags.

export default function (tag) {
  const { node } = tag;
  const namePath = tag.get("name");
  const tagName = namePath.node.value;
  const parentPath = findParentTag(tag);

  assertNoArgs(tag);

  if (!parentPath) {
    throw namePath.buildCodeFrameError(
      "@tags must be nested within another element."
    );
  }

  const parentAttributes = parentPath.get("attributes");
  const tagDef = getTagDef(tag);
  const { isRepeated, targetProperty = tagName.slice(1) } =
    tagDef || EMPTY_OBJECT;
  const isDynamic = isRepeated || parentPath !== tag.parentPath.parentPath;
  parentPath.node.exampleAttributeTag = node;

  if (isDynamic) {
    if (!parentPath.node.hasDynamicAttrTags) {
      const body = parentPath.get("body").get("body");
      parentPath.node.hasDynamicAttrTags = true;

      for (let i = body.length; i--; ) {
        const child = body[i];
        if (isAttributeTagChild(child)) {
          child.insertAfter(t.stringLiteral("END_ATTRIBUTE_TAGS"));
          break;
        }
      }
    }
  } else {
    const previousAttr = parentAttributes.find(
      (attr) => attr.get("name").node === targetProperty
    );

    if (previousAttr) {
      const previousValue = previousAttr.get("value").node;
      if (t.isObjectExpression(previousValue)) {
        previousAttr.set(
          "value",
          t.arrayExpression([previousValue, getAttrTagObject(tag)])
        );
      } else if (t.isArrayExpression(previousAttr)) {
        previousAttr.elements.push(getAttrTagObject(tag));
      } else {
        previousAttr.set(
          "value",
          t.callExpression(
            importDefault(
              tag.hub.file,
              "marko/src/runtime/helpers/repeatable.js",
              "marko_repeatable"
            ),
            [previousValue, getAttrTagObject(tag)]
          )
        );
      }
    } else {
      parentPath.pushContainer(
        "attributes",
        t.markoAttribute(targetProperty, getAttrTagObject(tag))
      );
    }

    tag.remove();
    return;
  }

  let identifiers = parentIdentifierLookup.get(parentPath);

  if (!identifiers) {
    parentIdentifierLookup.set(parentPath, (identifiers = {}));
  }

  let identifier = identifiers[targetProperty];

  if (!identifier) {
    identifier = identifiers[targetProperty] =
      tag.scope.generateUidIdentifier(targetProperty);
    parentPath
      .get("body")
      .unshiftContainer(
        "body",
        t.variableDeclaration(isRepeated ? "const" : "let", [
          t.variableDeclarator(
            identifier,
            isRepeated ? t.arrayExpression([]) : t.nullLiteral()
          ),
        ])
      );
    parentPath.pushContainer(
      "attributes",
      t.markoAttribute(targetProperty, identifier)
    );
  }

  if (isRepeated) {
    tag.replaceWith(
      withPreviousLocation(
        t.expressionStatement(
          t.callExpression(
            t.memberExpression(identifier, t.identifier("push")),
            [getAttrTagObject(tag)]
          )
        ),
        node
      )
    );
  } else {
    tag.replaceWith(
      withPreviousLocation(
        t.expressionStatement(
          t.assignmentExpression(
            "=",
            identifier,
            t.callExpression(
              importDefault(
                tag.hub.file,
                "marko/src/runtime/helpers/repeatable.js",
                "marko_repeatable"
              ),
              [identifier, getAttrTagObject(tag)]
            )
          )
        ),
        node
      )
    );
  }
}

function getAttrTagObject(tag) {
  const attrs = getAttrs(tag);
  const iteratorProp = t.objectProperty(
    t.memberExpression(t.identifier("Symbol"), t.identifier("iterator")),
    importDefault(
      tag.hub.file,
      "marko/src/runtime/helpers/self-iterator.js",
      "marko_self_iterator"
    ),
    true
  );

  if (t.isNullLiteral(attrs)) {
    return t.objectExpression([iteratorProp]);
  }

  if (t.isObjectExpression(attrs)) {
    attrs.properties.push(iteratorProp);
    return attrs;
  }

  return t.objectExpression([iteratorProp, t.spreadElement(attrs)]);
}

function isAttributeTagChild(tag) {
  if (isAttributeTag(tag)) {
    return true;
  }

  if (isTransparentTag(tag)) {
    const body = tag.get("body").get("body");
    return isAttributeTagChild(body[body.length - 1]);
  }

  return false;
}
