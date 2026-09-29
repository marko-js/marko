import { types as t } from "@marko/compiler";

import { getParentTag } from "./get-parent-tag";
import { isPageElement } from "./insertion-context";
import { BindingType, createBinding } from "./references";
import type { Section } from "./sections";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

const kOnlyChildInParent = Symbol("only child in parent");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kOnlyChildInParent]?: false | string;
  }
}

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
    // Marko does not own every child of a page element.
    !isPageElement(parentTag.node.name.value) &&
    (tag.parent as t.MarkoTagBody).body.filter(
      (node) => node.type !== "MarkoComment",
    ).length === branchSize
      ? parentTag.node.name.value
      : false);
}

// A control flow tag that is its element's only child is addressed by that
// element, else by a marker of its own.
export function analyzeNodeBinding(
  tag: t.NodePath<t.MarkoTag>,
  section: Section,
  branchSize = 1,
) {
  const extra = (tag.node.extra ??= {});
  if (getOnlyChildParentTagName(tag, branchSize)) {
    const parentTag = getParentTag(tag)!.node;
    const parentTagName = (parentTag.name as t.StringLiteral).value;
    return (extra.nodeBinding = (parentTag.extra ??= {}).nodeBinding ??=
      createBinding(
        "#" + parentTagName.toLowerCase(),
        BindingType.dom,
        section,
      ));
  }

  return (extra.nodeBinding = createBinding("#text", BindingType.dom, section));
}
