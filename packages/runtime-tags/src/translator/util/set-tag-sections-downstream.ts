import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { getTagName } from "./get-tag-name";
import { analyzeAttributeTags, getAttrTagPaths } from "./nested-attribute-tags";
import { concat, forEach, includes, type Opt } from "./optional";
import type { Binding, KnownExprs } from "./references";
import { getSection, getSectionForBody, type Section } from "./sections";
import { createSectionState } from "./state";

const [getTagDownstreams] = createSectionState(
  "tag-downstreams",
  () =>
    new Map<
      t.NodePath<t.MarkoTag>,
      {
        binding: Binding;
        exprs: KnownExprs | undefined;
        consumer: t.MarkoTagExtra | undefined;
      }
    >(),
);

export function setTagDownstream(
  tag: t.NodePath<t.MarkoTag>,
  binding: undefined | Binding,
  exprs?: KnownExprs,
  consumer?: t.MarkoTagExtra,
) {
  if (binding) {
    getTagDownstreams(getSection(tag)).set(tag, { binding, exprs, consumer });
  }
}

export function finalizeTagDownstreams(section: Section) {
  for (const [tag, { binding, exprs, consumer }] of getTagDownstreams(
    section,
  )) {
    crawlSectionsAndSetBinding(tag, consumer, binding, exprs);
  }
}

function crawlSectionsAndSetBinding(
  tag: t.NodePath<t.MarkoTag>,
  consumer: t.MarkoTagExtra | undefined,
  binding: Binding,
  exprs: KnownExprs | undefined,
  properties?: Opt<string>,
  skip?: true,
) {
  if (!skip) {
    const contentSection = getSectionForBody(tag.get("body"));
    if (contentSection) {
      contentSection.consumer = consumer;
      let target: Binding | undefined = binding;
      forEach(properties, (property) => {
        target = target?.propertyAliases.get(property);
      });
      contentSection.downstreamBinding =
        target &&
        (target.noSerialize ||
          includes(target.noSerializeProperties, "content"))
          ? false
          : { binding, properties: concat(properties, "content"), exprs };
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
          consumer,
          binding,
          exprs,
          concat(properties, attrTagMeta.name),
        );
      } else {
        crawlSectionsAndSetBinding(
          child,
          consumer,
          binding,
          exprs,
          properties,
          true,
        );
      }
    }
  }
}
