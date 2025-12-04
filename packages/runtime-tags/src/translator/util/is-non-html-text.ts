import { types as t } from "@marko/compiler";
import { getTagDef } from "@marko/compiler/babel-utils";

import { isCoreTag } from "./is-core-tag";

export function isNonHTMLText(
  placeholder: t.NodePath<t.MarkoPlaceholder | t.MarkoText>,
) {
  const parentTag =
    placeholder.parentPath.isMarkoTagBody() &&
    (placeholder.parentPath.parentPath as t.NodePath<t.MarkoTag>);
  if (parentTag) {
    if (isCoreTag(parentTag)) {
      switch (parentTag.node.name.value) {
        case "html-comment":
        case "html-script":
        case "html-style":
          return true;
      }
    } else if (isTextOnlyNativeTag(parentTag)) {
      return true;
    }
  }

  return false;
}

export function isTextOnlyNativeTag(tag: t.NodePath<t.MarkoTag>) {
  const def = getTagDef(tag);
  // Have to special case `title` here for the compat with v5 which does not treat title as a text only tag.
  return !!(
    def &&
    def.html &&
    (def.name === "title" || def.parseOptions?.text)
  );
}
