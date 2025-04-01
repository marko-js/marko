import { types as t } from "@marko/compiler";

import { isCoreTag } from "./is-core-tag";

export function isNonHTMLText(
  placeholder: t.NodePath<t.MarkoPlaceholder | t.MarkoText>,
) {
  const parentTag =
    placeholder.parentPath.isMarkoTagBody() &&
    placeholder.parentPath.parentPath;
  if (parentTag && isCoreTag(parentTag)) {
    switch (parentTag.node.name.value) {
      case "html-comment":
      case "html-script":
      case "html-style":
        return true;
    }
  }

  return false;
}
