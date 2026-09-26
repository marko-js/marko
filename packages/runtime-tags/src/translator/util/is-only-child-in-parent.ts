import { types as t } from "@marko/compiler";

import { kNativeTagBinding } from "../visitors/tag/native-tag";
import { getParentTag } from "./get-parent-tag";
import { type Binding, BindingType, createBinding } from "./references";
import type { Section } from "./sections";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

const kOnlyChildInParent = Symbol("only child in parent");
const kNodeRef = Symbol("potential only child node ref");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kOnlyChildInParent]?: false | string;
    [kNodeRef]?: Binding;
  }
}

// Memoized per tag: the first call must be in analyze, since translate rewrites the
// siblings this counts, and every call for a tag must pass the same `branchSize`.
export function getOnlyChildParentTagName(
  tag: t.NodePath<t.MarkoTag>,
  branchSize = 1,
) {
  const extra = tag.node.extra!;
  if (extra[kOnlyChildInParent] !== undefined) {
    return extra[kOnlyChildInParent];
  }

  const parentTag = getParentTag(tag);
  return (extra[kOnlyChildInParent] =
    parentTag &&
    analyzeTagNameType(parentTag) === TagNameType.NativeTag &&
    parentTag.node.name.type === "StringLiteral" &&
    (tag.parent as t.MarkoTagBody).body.filter(
      (node) => node.type !== "MarkoComment",
    ).length === branchSize
      ? parentTag.node.name.value
      : false);
}

export function getOptimizedOnlyChildNodeBinding(
  tag: t.NodePath<t.MarkoTag>,
  section: Section,
  branchSize = 1,
) {
  if (getOnlyChildParentTagName(tag, branchSize)) {
    const parentTag = getParentTag(tag)!.node;
    const parentTagName = (parentTag.name as t.StringLiteral)?.value;
    return ((parentTag.extra ??= {})[kNativeTagBinding] ??= createBinding(
      "#" + parentTagName.toLowerCase(),
      BindingType.dom,
      section,
    ));
  } else {
    return ((tag.node.extra ??= {})[kNodeRef] ??= createBinding(
      "#text",
      BindingType.dom,
      section,
    ));
  }
}
