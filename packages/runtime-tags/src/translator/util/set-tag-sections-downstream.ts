import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { createSectionFinalizeState, FinalizePhase } from "./finalize";
import { getTagName } from "./get-tag-name";
import { analyzeAttributeTags, getAttrTagPaths } from "./nested-attribute-tags";
import { concat, forEach, includes, type Opt } from "./optional";
import type { Binding } from "./references";
import { getSection, getSectionForBody, type Section } from "./sections";

const [getTagDownstreams] = createSectionFinalizeState(
  "tag-downstreams",
  FinalizePhase.Downstreams,
  () => new Map<t.NodePath<t.MarkoTag>, Binding>(),
  finalizeTagDownstreams,
);

export function setTagDownstream(
  tag: t.NodePath<t.MarkoTag>,
  binding: undefined | Binding,
) {
  if (binding) {
    getTagDownstreams(getSection(tag)).set(tag, binding);
  }
}

function finalizeTagDownstreams(section: Section) {
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
      let target: Binding | undefined = binding;
      forEach(properties, (property) => {
        target = target?.propertyAliases.get(property);
      });
      contentSection.downstreamBinding =
        target &&
        (target.noSerialize ||
          includes(target.noSerializeProperties, "content"))
          ? false
          : { binding, properties: concat(properties, "content") };
    }
  }

  const attrTagLookup = analyzeAttributeTags(tag);

  if (!attrTagLookup) return;

  const attrTags = getAttrTagPaths(tag);

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
