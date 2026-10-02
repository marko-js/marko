import { types as t } from "@marko/compiler";

import { BindingType, createBinding } from "./bindings";
import { getParentTag } from "./get-parent-tag";
import { isCoreTag } from "./is-core-tag";
import { getNodeContentType, type Section } from "./sections";
import { getTagFacts } from "./tag-facts";
import analyzeTagNameType, { TagNameType } from "./tag-name-type";

const kOnlyChildInParent = Symbol("only child in parent");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
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
    // Marko does not own every child of a page element.
    !getTagFacts(parentTag).pageElement &&
    isOnlyChild(tag)
      ? parentTag.node.name.value
      : false);
}

// Siblings rendering nothing (a `<let>`, the rest of an `<if>` chain) leave the
// element to the tag; a child component's scope is still addressed before it.
function isOnlyChild(tag: t.NodePath<t.MarkoTag>) {
  for (const sibling of (tag.parentPath as t.NodePath<t.MarkoTagBody>).get(
    "body",
  )) {
    if (
      sibling.node !== tag.node &&
      ((sibling.isMarkoTag() && !isCoreTag(sibling)) ||
        getNodeContentType(sibling, "startType") !== null)
    ) {
      return false;
    }
  }
  return true;
}

// A control flow tag that is its element's only child is addressed by that
// element, else by a marker of its own.
export function analyzeNodeBinding(
  tag: t.NodePath<t.MarkoTag>,
  section: Section,
) {
  const extra = (tag.node.extra ??= {});
  if (getOnlyChildParentTagName(tag)) {
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
