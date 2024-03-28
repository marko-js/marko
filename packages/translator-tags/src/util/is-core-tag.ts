import { getTagDef } from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";
export const taglibId = "marko-core";
const interopTaglibId = "@marko/translator-interop-class-tags";

export function isCoreTag(
  tag: t.NodePath,
): tag is t.NodePath<t.MarkoTag & { name: t.StringLiteral }> {
  const id = tag.isMarkoTag() && getTagDef(tag)?.taglibId;
  return id === taglibId || id === interopTaglibId;
}

export function isCoreTagName(tag: t.NodePath, name: string) {
  return isCoreTag(tag) && tag.node.name.value === name;
}
