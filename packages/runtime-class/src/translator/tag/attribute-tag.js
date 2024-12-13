import { types as t } from "@marko/compiler";
import {
  assertNoArgs,
  findParentTag,
  getFullyResolvedTagName,
  getTagDef,
  importNamed,
  isAttributeTag,
  isTransparentTag,
} from "@marko/compiler/babel-utils";

import { getAttrs } from "./util";

const attributeTagsForTag = new WeakMap();
const contentTypeCache = new WeakMap();
const ContentType = {
  attribute: 0,
  render: 1,
  mixed: 2,
};

export function analyzeAttributeTags(rootTag) {
  const visit = [rootTag];
  const parentTags = [rootTag];
  let i = 0;
  let attributeTags;

  while (i < visit.length) {
    const tag = visit[i++];
    const attrTags = tag.node.body.attributeTags
      ? tag.get("body").get("body")
      : tag.get("attributeTags");
    for (const child of attrTags) {
      if (isAttributeTag(child)) {
        assertNoArgs(child);
        const tagDef = getTagDef(child) || {};
        const name = getFullyResolvedTagName(child);
        let {
          targetProperty = child.node.name.value.slice(1),
          isRepeated = false,
        } = tagDef;

        const preserveName =
          tagDef.preserveName === true || tagDef.removeDashes === false;

        if (!preserveName) {
          targetProperty = removeDashes(targetProperty);
        }

        const attrTagMeta = ((attributeTags ||= {})[name] ||= {
          targetProperty,
          isRepeated,
        });

        (child.node.extra ||= {}).attributeTag = attrTagMeta;

        const parentTag = findParentTag(child);
        const parentTagExtra = (parentTag.node.extra ||= {});
        const parentSeenAttributeTagProperties =
          attributeTagsForTag.get(parentTag);
        let hasAttributeTags = false;

        if (!parentSeenAttributeTagProperties) {
          parentTagExtra.hasAttributeTags = true;
          attributeTagsForTag.set(parentTag, new Set([targetProperty]));
        } else if (parentSeenAttributeTagProperties.has(targetProperty)) {
          hasAttributeTags = true;
        } else {
          parentSeenAttributeTagProperties.add(targetProperty);
        }

        if (!hasAttributeTags) {
          if (
            parentTag
              .get("attributes")
              .some(
                (attr) =>
                  attr.isMarkoSpreadAttribute() ||
                  attr.node.name === targetProperty,
              )
          ) {
            parentTag.pushContainer(
              "attributes",
              t.markoAttribute(
                targetProperty,
                t.unaryExpression("void", t.numericLiteral(0)),
              ),
            );
          }
        }

        parentTags.push(child);
        visit.push(child);
      } else if (isTransparentTag(child)) {
        visit.push(child);
      }
    }
  }

  if (attributeTags) {
    (rootTag.node.extra ??= {}).attributeTags = attributeTags;
  }
}

export default function translateAttributeTag(tag) {
  const { node } = tag;
  const meta = node.extra?.attributeTag;
  if (!meta) {
    throw tag
      .get("name")
      .buildCodeFrameError("@tags must be nested within another element.");
  }

  assertNoArgs(tag);

  tag.replaceWith(
    t.expressionStatement(
      t.callExpression(
        importNamed(
          tag.hub.file,
          "marko/src/runtime/helpers/attr-tag.js",
          meta.isRepeated ? "r" : "a",
          meta.isRepeated
            ? "marko_repeated_attr_tag"
            : "marko_repeatable_attr_tag",
        ),
        [t.stringLiteral(meta.targetProperty), getAttrTagObject(tag)],
      ),
    ),
  );
}

function getAttrTagObject(tag) {
  const attrs = getAttrs(tag, false, true);

  if (t.isNullLiteral(attrs)) {
    return t.objectExpression([]);
  }

  return attrs;
}

function removeDashes(str) {
  return str.replace(/-([a-z])/g, matchToUpperCase);
}

function matchToUpperCase(_match, lower) {
  return lower.toUpperCase();
}
