import { types as t } from "@marko/compiler";
import { getTagDef } from "@marko/compiler/babel-utils";

import * as ContentType from "./constants/content-type";
import { isCoreTag } from "./is-core-tag";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

// What analysis knows of a tag before visiting it, for the tags around it.
export interface TagFacts {
  /** What renders at its edges, `null` for nothing. */
  content:
    | ContentType.Value
    | null
    | ((tag: t.MarkoTag) => ContentType.Value | null);
  /** Its body renders into the section holding the tag. */
  inlineBody?: true;
  /** Its body is text rather than markup. */
  textBody?: true;
  /** It renders its body in its own place, with no node of its own. */
  controlFlow?: true;
}

const noContentFacts: TagFacts = { content: null };

// Every core tag, so a new one decides what it renders.
const coreTagFacts: Record<string, TagFacts> = {
  attrs: noContentFacts,
  class: noContentFacts,
  client: noContentFacts,
  const: noContentFacts,
  debug: noContentFacts,
  define: noContentFacts,
  effect: noContentFacts,
  export: noContentFacts,
  id: noContentFacts,
  import: noContentFacts,
  let: noContentFacts,
  lifecycle: noContentFacts,
  log: noContentFacts,
  return: noContentFacts,
  script: noContentFacts,
  server: noContentFacts,
  static: noContentFacts,
  if: { content: ContentType.Dynamic, controlFlow: true },
  "else-if": { content: null, controlFlow: true },
  else: { content: null, controlFlow: true },
  for: { content: ContentType.Dynamic, controlFlow: true },
  await: { content: ContentType.Dynamic, controlFlow: true },
  try: { content: ContentType.Dynamic, controlFlow: true },
  // A redundant `<show=true>` would only save its placeholder, so every
  // `<show>` stays dynamic.
  show: { content: ContentType.Dynamic, controlFlow: true, inlineBody: true },
  "html-comment": {
    content: ContentType.Comment,
    inlineBody: true,
    textBody: true,
  },
  "html-script": { content: ContentType.Tag, inlineBody: true, textBody: true },
  "html-style": { content: ContentType.Tag, inlineBody: true, textBody: true },
  // Only a `<style>` with placeholders renders an element in place.
  style: {
    content: getStyleContentType,
    inlineBody: true,
    textBody: true,
  },
};
const dynamicContentFacts: TagFacts = { content: ContentType.Dynamic };
const nativeTagFacts: TagFacts = { content: ContentType.Tag, inlineBody: true };
const textOnlyNativeTagFacts: TagFacts = {
  content: ContentType.Tag,
  inlineBody: true,
  textBody: true,
};

export function getTagFacts(tag: t.NodePath<t.MarkoTag>): TagFacts {
  if (isCoreTag(tag)) {
    const facts = coreTagFacts[tag.node.name.value];
    if (MARKO_DEBUG && !facts) {
      throw new Error(`Core tag <${tag.node.name.value}> has no tag facts.`);
    }
    return facts;
  }

  switch (analyzeTagNameType(tag)) {
    case TagNameType.NativeTag:
      return isTextOnlyNativeTag(tag) ? textOnlyNativeTagFacts : nativeTagFacts;
    case TagNameType.AttributeTag:
      return noContentFacts;
    default:
      return dynamicContentFacts;
  }
}

export function getTagContentType(tag: t.NodePath<t.MarkoTag>) {
  const { content } = getTagFacts(tag);
  return typeof content === "function" ? content(tag.node) : content;
}

export function isNonHTMLText(
  child: t.NodePath<t.MarkoPlaceholder | t.MarkoText>,
) {
  const body = child.parentPath;
  return (
    body.isMarkoTagBody() &&
    !!getTagFacts(body.parentPath as t.NodePath<t.MarkoTag>).textBody
  );
}

export function isTextOnlyNativeTag(tag: t.NodePath<t.MarkoTag>) {
  if (analyzeTagNameType(tag) !== TagNameType.NativeTag) return false;

  const def = getTagDef(tag);
  // Have to special case `title` here for the compat with v5 which does not treat title as a text only tag.
  return !!(
    def &&
    def.html &&
    (def.name === "title" || def.parseOptions?.text)
  );
}

function getStyleContentType(tag: t.MarkoTag) {
  return tag.body.body.some(isMarkoPlaceholder) ? ContentType.Tag : null;
}

function isMarkoPlaceholder(node: t.Node) {
  return t.isMarkoPlaceholder(node);
}
