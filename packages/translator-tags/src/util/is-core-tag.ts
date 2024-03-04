import { getTagDef } from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";
export const taglibId = "marko-core";

export function isCoreTag(
  tag: t.NodePath,
): tag is t.NodePath<t.MarkoTag & { name: t.StringLiteral }> {
  return tag.isMarkoTag() && getTagDef(tag)?.taglibId === taglibId;
}

export function isCoreTagName(tag: t.NodePath, name: string) {
  return isCoreTag(tag) && tag.node.name.value === name;
}
