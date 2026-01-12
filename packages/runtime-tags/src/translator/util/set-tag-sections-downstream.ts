import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { getTagName } from "./get-tag-name";
import { analyzeAttributeTags } from "./nested-attribute-tags";
import { concat, type Opt } from "./optional";
import type { Binding } from "./references";
import { getSection, getSectionForBody, type Section } from "./sections";
import { createSectionState } from "./state";

const [getTagDownstreams] = createSectionState(
  "tag-downstreams",
  () => new Map<t.NodePath<t.MarkoTag>, Binding>(),
);

export function setTagDownstream(
  tag: t.NodePath<t.MarkoTag>,
  binding: undefined | Binding,
) {
  if (binding) {
    getTagDownstreams(getSection(tag)).set(tag, binding);
  }
}

export function finalizeTagDownstreams(section: Section) {
  for (const [tag, binding] of getTagDownstreams(section)) {
    crawlSectionsAndSetBinding(tag, binding);
  }
}

function crawlSectionsAndSetBinding(
  tag: t.NodePath<t.MarkoTag>,
  binding: Binding,
  properties?: Opt<string>,
  skip?: true,
) {
  if (!skip) {
    const contentSection = getSectionForBody(tag.get("body"));
    if (contentSection) {
      contentSection.downstreamBinding = {
        binding,
        properties: concat(properties, "content"),
      };
    }
  }

  const attrTagLookup = analyzeAttributeTags(tag);

  if (!attrTagLookup) return;

  const attrTags = tag.node.body.attributeTags
    ? tag.get("body").get("body")
    : tag.get("attributeTags");

  for (const child of attrTags) {
    if (child.isMarkoTag()) {
      if (isAttributeTag(child)) {
        const attrTagMeta = attrTagLookup[getTagName(child)];
        crawlSectionsAndSetBinding(
          child,
          binding,
          concat(properties, attrTagMeta.name),
        );
      } else {
        crawlSectionsAndSetBinding(child, binding, properties, true);
      }
    }
  }
}
