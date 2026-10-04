import { types as t } from "@marko/compiler";

import { getParentTag } from "./get-parent-tag";
import { getNodeContentType } from "./sections";
import { getTagFacts } from "./tag-facts";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

const kOnlyChildInParent = Symbol("only child in parent");
declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    [kOnlyChildInParent]?: false | string;
  }
}

export function getOnlyChildParentTagName(tag: t.NodePath<t.MarkoTag>) {
  const extra = tag.node.extra!;
  if (extra[kOnlyChildInParent] !== undefined) {
    return extra[kOnlyChildInParent];
  }

  const parentTag = getParentTag(tag);
  return (extra[kOnlyChildInParent] =
    parentTag &&
    analyzeTagNameType(parentTag) === TagNameType.NativeTag &&
    parentTag.node.name.type === "StringLiteral" &&
    // Marko does not own every child of a page element, and a detached body's
    // children are not the element's.
    !getTagFacts(parentTag).pageElement &&
    !getTagFacts(parentTag).detachedBody &&
    isOnlyChild(tag)
      ? parentTag.node.name.value
      : false);
}

// Siblings rendering nothing (a `<let>`, the rest of an `<if>` chain, a
// component whose template renders nothing) leave the element to the tag.
function isOnlyChild(tag: t.NodePath<t.MarkoTag>) {
  for (const sibling of (tag.parentPath as t.NodePath<t.MarkoTagBody>).get(
    "body",
  )) {
    if (
      sibling.node !== tag.node &&
      getNodeContentType(sibling, "startType") !== null
    ) {
      return false;
    }
  }
  return true;
}
