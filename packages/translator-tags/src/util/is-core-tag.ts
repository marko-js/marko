import { getTagDef } from "@marko/babel-utils";
import type { types as t } from "@marko/compiler";

import { getTagName } from "./get-tag-name";
export const taglibId = "marko-core";
const interopTaglibId = "@marko/translator-interop-class-tags";

export function isCoreTag(
  tag: t.NodePath,
): tag is t.NodePath<t.MarkoTag & { name: t.StringLiteral }> {
  const id = tag.isMarkoTag() && getTagDef(tag)?.taglibId;
  return id === taglibId || id === interopTaglibId;
}

export function isCoreTagName(
  tag: t.NodePath,
  name: string,
): tag is t.NodePath<t.MarkoTag & { name: t.StringLiteral }> {
  return isCoreTag(tag) && getTagName(tag) === name;
}

export function isConditionTag(
  tag: t.NodePath,
): tag is t.NodePath<t.MarkoTag & { name: t.StringLiteral }> {
  if (isCoreTag(tag)) {
    switch (getTagName(tag)) {
      case "if":
      case "else-if":
      case "else":
        return true;
    }
  }

  return false;
}
