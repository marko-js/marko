import type { types as t } from "@marko/compiler";
import { isAttributeTag, isTransparentTag } from "@marko/compiler/babel-utils";

export function getParentTag(tag: t.NodePath<t.MarkoTag>) {
  const parent =
    tag.parent.type === "MarkoTagBody"
      ? tag.parentPath.parentPath
      : tag.parentPath;

  if (parent!.type === "MarkoTag") {
    return parent as t.NodePath<t.MarkoTag>;
  }
}

export function getAttributeTagParent(
  tag: t.NodePath<t.MarkoTag>,
): t.NodePath<t.MarkoTag> {
  let cur: t.NodePath<t.MarkoTag> = tag;
  while (isAttributeTag(cur) || isTransparentTag(cur)) {
    cur = getParentTag(cur)!;
  }

  return cur;
}
