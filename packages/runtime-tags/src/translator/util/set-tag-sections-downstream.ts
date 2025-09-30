import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { type BindingPropTree, getBindingPropTree } from "./binding-prop-tree";
import { getTagName } from "./get-tag-name";
import type { Binding } from "./references";
import { getSectionForBody } from "./sections";
import { createProgramState } from "./state";

const [getTagDownstreams] = createProgramState(
  () => new Map<t.NodePath<t.MarkoTag>, false | Binding>(),
);

export function setTagDownstream(
  tag: t.NodePath<t.MarkoTag>,
  binding: undefined | false | Binding,
) {
  getTagDownstreams().set(tag, binding || false);
}

export function finalizeTagDownstreams() {
  for (const [tag, binding] of getTagDownstreams()) {
    crawlSectionsAndSetBinding(
      tag,
      binding,
      binding ? getBindingPropTree(binding) : undefined,
    );
  }
}

function crawlSectionsAndSetBinding(
  tag: t.NodePath<t.MarkoTag>,
  binding: false | Binding,
  tree: undefined | BindingPropTree,
  skip?: true,
) {
  const attrTags = tag.node.body.attributeTags
    ? tag.get("body").get("body")
    : tag.get("attributeTags");

  if (!skip) {
    const contentSection = getSectionForBody(tag.get("body"));
    if (contentSection) {
      contentSection.downstreamBinding =
        (tree && (tree.props?.["content"]?.binding || tree.binding)) || binding;
    }
  }

  for (const child of attrTags) {
    if (child.isMarkoTag()) {
      if (isAttributeTag(child)) {
        if (tree?.props) {
          const attrProp = tree.props[getTagName(child).slice(1)];
          if (attrProp) {
            crawlSectionsAndSetBinding(child, attrProp.binding, attrProp);
          } else {
            crawlSectionsAndSetBinding(child, false, undefined);
          }
        } else {
          crawlSectionsAndSetBinding(child, binding, undefined);
        }
      } else {
        crawlSectionsAndSetBinding(child, binding, tree, true);
      }
    }
  }
}
