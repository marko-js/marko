import { types as t } from "@marko/compiler";
import { getTagDef } from "@marko/compiler/babel-utils";

import { kNativeTagBinding } from "../visitors/tag/native-tag";
import { getParentTag } from "./get-parent-tag";
import { type Binding, BindingType, createBinding } from "./references";
import type { Section } from "./sections";

const kOnlyChildInParent = Symbol("only child in parent");
const kNodeRef = Symbol("potential only child node ref");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kOnlyChildInParent]?: boolean;
    [kNodeRef]?: Binding;
  }
}

export function isOnlyChildInParent(
  tag: t.NodePath<t.MarkoTag>,
  branchSize = 1,
) {
  const extra = tag.node.extra!;
  if (extra[kOnlyChildInParent] !== undefined) {
    return extra[kOnlyChildInParent];
  }

  const parentTag = getParentTag(tag);
  if (parentTag && getTagDef(parentTag)?.html) {
    return (extra[kOnlyChildInParent] =
      (tag.parent as t.MarkoTagBody).body.length === branchSize);
  }
  return (extra[kOnlyChildInParent] = false);
}

export function getOptimizedOnlyChildNodeRef(
  tag: t.NodePath<t.MarkoTag>,
  section: Section,
  branchSize = 1,
) {
  if (isOnlyChildInParent(tag, branchSize)) {
    const parentTag = getParentTag(tag)!.node;
    const parentTagName = (parentTag.name as t.StringLiteral)?.value;
    return ((parentTag.extra ??= {})[kNativeTagBinding] ??= createBinding(
      "#" + parentTagName,
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
