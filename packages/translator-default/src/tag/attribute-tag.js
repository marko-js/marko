import {
  assertNoArgs,
  findParentTag,
  getFullyResolvedTagName,
  getTagDef,
  importNamed,
  isAttributeTag,
  isTransparentTag,
} from "@marko/babel-utils";
import { types as t } from "@marko/compiler";
import { getAttrs } from "./util";

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
    for (const child of tag.get("body").get("body")) {
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
        parentTagExtra.hasAttributeTags = true;
        parentTags.push(child);
        visit.push(child);
      } else if (isTransparentTag(child)) {
        switch (getContentType(child)) {
          case ContentType.mixed:
            throw child.buildCodeFrameError(
              "Cannot mix @tags with other content when under a control flow.",
            );
          case ContentType.attribute:
            visit.push(child);
            break;
          case ContentType.render:
            break;
        }
      }
    }
  }

  if (attributeTags) {
    (rootTag.node.extra ??= {}).attributeTags = attributeTags;

    for (const parentTag of parentTags) {
      if (getContentType(parentTag) === ContentType.mixed) {
        // move all non scriptlet / attribute tag children to the end of the renderbody
        const renderBody = [
          t.expressionStatement(t.stringLiteral("END_ATTRIBUTE_TAGS")),
        ];
        const body = parentTag.get("body");
        for (const child of body.get("body")) {
          if (
            child.isMarkoScriptlet() ||
            isAttributeTag(child) ||
            (isTransparentTag(child) &&
              getContentType(child) === ContentType.attribute)
          ) {
            continue;
          }

          renderBody.push(child.node);
          child.remove();
        }

        body.node.body = body.node.body.concat(renderBody);
      }
    }
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
  const attrs = getAttrs(tag);

  if (t.isNullLiteral(attrs)) {
    return t.objectExpression([]);
  }

  return attrs;
}

function getContentType(tag) {
  const { node } = tag;
  const cached = contentTypeCache.get(node);
  if (cached !== undefined) return cached;

  const body = tag.get("body").get("body");
  let hasAttributeTag = false;
  let hasRenderBody = false;

  for (const child of body) {
    if (isAttributeTag(child)) {
      hasAttributeTag = true;
    } else if (isTransparentTag(child)) {
      switch (getContentType(child)) {
        case ContentType.mixed:
          contentTypeCache.set(node, ContentType.mixed);
          return ContentType.mixed;
        case ContentType.attribute:
          hasAttributeTag = true;
          break;
        case ContentType.render:
          hasRenderBody = true;
          break;
      }
    } else if (!child.isMarkoScriptlet()) {
      hasRenderBody = true;
    }

    if (hasAttributeTag && hasRenderBody) {
      contentTypeCache.set(node, ContentType.mixed);
      return ContentType.mixed;
    }
  }

  const result = hasAttributeTag ? ContentType.attribute : ContentType.render;
  contentTypeCache.set(node, result);
  return result;
}

function removeDashes(str) {
  return str.replace(/-([a-z])/g, matchToUpperCase);
}

function matchToUpperCase(_match, lower) {
  return lower.toUpperCase();
}
