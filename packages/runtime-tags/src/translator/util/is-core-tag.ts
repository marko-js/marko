import type { types as t } from "@marko/compiler";
import { getTagDef } from "@marko/compiler/babel-utils";

import { getTagName } from "./get-tag-name";
import runtimeInfo from "./runtime-info";
const { taglibId } = runtimeInfo;
const htmlTaglibId = "marko-html";

export function isCoreTag(
  tag: t.NodePath,
): tag is t.NodePath<t.MarkoTag & { name: t.StringLiteral }> {
  if (tag.isMarkoTag()) {
    const tagDef = getTagDef(tag);
    if (tagDef) {
      switch (tagDef.taglibId) {
        case taglibId:
          return true;
        case htmlTaglibId:
          switch (tagDef.name) {
            case "script":
            case "style":
              return true;
          }
          break;
      }
    }
  }

  return false;
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

export function isControlFlowTag(
  tag: t.NodePath,
): tag is t.NodePath<t.MarkoTag & { name: t.StringLiteral }> {
  if (isCoreTag(tag)) {
    switch (getTagName(tag)) {
      case "if":
      case "else-if":
      case "else":
      case "for":
      case "await":
      case "try":
        return true;
    }
  }

  return false;
}
