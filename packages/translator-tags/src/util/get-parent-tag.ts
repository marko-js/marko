import type { types as t } from "@marko/compiler";

export function getParentTag(tag: t.NodePath<t.MarkoTag>) {
  const parent =
    tag.parent.type === "MarkoTagBody"
      ? tag.parentPath.parentPath
      : tag.parentPath;

  if (parent!.type === "MarkoTag") {
    return parent as t.NodePath<t.MarkoTag>;
  }
}
