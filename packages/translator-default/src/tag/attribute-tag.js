import { types as t } from "@marko/babel-types";
import {
  findParentTag,
  assertNoArgs,
  getTagDef,
  isTransparentTag,
  isAttributeTag
} from "@marko/babel-utils";
import { getAttrs } from "./util";
import withPreviousLocation from "../util/with-previous-location";

const EMPTY_OBJECT = {};
const parentIdentifierLookup = new WeakMap();

// TODO: optimize inline repeated @tags.

export default function(path) {
  const { node } = path;
  const namePath = path.get("name");
  const tagName = namePath.node.value;
  const parentPath = findParentTag(path);

  assertNoArgs(path);

  if (!parentPath) {
    throw namePath.buildCodeFrameError(
      "@tags must be nested within another element."
    );
  }

  const parentAttributes = parentPath.get("attributes");
  const tagDef = getTagDef(path);
  const { isRepeated, targetProperty = tagName.slice(1) } =
    tagDef || EMPTY_OBJECT;
  const isDynamic = isRepeated || parentPath !== path.parentPath.parentPath;
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
    if (
      parentAttributes.some(attr => attr.get("name").node === targetProperty)
    ) {
      throw namePath.buildCodeFrameError(
        `Only one "${tagName}" tag is allowed here.`
      );
    }

    let attrs = getAttrs(path);

    if (t.isNullLiteral(attrs)) {
      // TODO: this could be left as a null literal, but would require changes in the
      // await tag runtime to handle `<@catch/>`. (this would be a breaking change though)
      attrs = t.objectExpression([]);
    }

    parentPath.pushContainer(
      "attributes",
      t.markoAttribute(targetProperty, attrs)
    );

    path.remove();
    return;
  }

  let identifier = parentIdentifierLookup.get(parentPath);

  if (!identifier) {
    identifier = path.scope.generateUidIdentifier(targetProperty);
    parentIdentifierLookup.set(parentPath, identifier);
    parentPath
      .get("body")
      .unshiftContainer(
        "body",
        t.variableDeclaration(isRepeated ? "const" : "let", [
          t.variableDeclarator(
            identifier,
            isRepeated ? t.arrayExpression([]) : t.nullLiteral()
          )
        ])
      );
    parentPath.pushContainer(
      "attributes",
      t.markoAttribute(targetProperty, identifier)
    );
  }

  if (isRepeated) {
    path.replaceWith(
      withPreviousLocation(
        t.expressionStatement(
          t.callExpression(
            t.memberExpression(identifier, t.identifier("push")),
            [getAttrs(path)]
          )
        ),
        node
      )
    );
  } else {
    path.replaceWith(
      withPreviousLocation(
        t.expressionStatement(
          t.assignmentExpression("=", identifier, getAttrs(path))
        ),
        node
      )
    );
  }
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
