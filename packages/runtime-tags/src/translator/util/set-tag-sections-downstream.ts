import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { getTagName } from "./get-tag-name";
import { analyzeAttributeTags, getAttrTagPaths } from "./nested-attribute-tags";
import { concat, filter, type Opt } from "./optional";
import {
  type Binding,
  type KnownExprs,
  propsUtil,
  getPropertyAlias,
} from "./references";
import { getSection, getSectionForBody, type Section } from "./sections";
import { createSectionState } from "./state";

const [getTagDownstreams] = createSectionState(
  "tag-downstreams",
  () =>
    new Map<
      t.NodePath<t.MarkoTag>,
      { binding: Opt<Binding>; exprs: KnownExprs | undefined }
    >(),
);

export function setTagDownstream(
  tag: t.NodePath<t.MarkoTag>,
  binding: Opt<Binding>,
  exprs?: KnownExprs,
) {
  if (binding) {
    getTagDownstreams(getSection(tag)).set(tag, { binding, exprs });
  }
}

export function finalizeTagDownstreams(section: Section) {
  for (const [tag, { binding, exprs }] of getTagDownstreams(section)) {
    crawlSectionsAndSetBinding(tag, tag.node.extra!, binding, exprs);
  }
}

function crawlSectionsAndSetBinding(
  tag: t.NodePath<t.MarkoTag>,
  downstreamTag: t.MarkoTagExtra,
  binding: Opt<Binding>,
  exprs: KnownExprs | undefined,
  properties?: Opt<string>,
  skip?: true,
) {
  if (!skip) {
    const contentSection = getSectionForBody(tag.get("body"));
    if (contentSection) {
      // Only the bindings that can serialize the content feed it.
      const serialized = filter(binding, (binding) => {
        const target = getPropertyAlias(binding, properties);
        return !(
          target &&
          (target.noSerialize ||
            propsUtil.has(target.noSerializeProperties, "content"))
        );
      });
      contentSection.downstream = {
        tag: downstreamTag,
        binding: serialized,
        properties: serialized ? concat(properties, "content") : undefined,
        exprs: serialized ? exprs : undefined,
      };
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
          downstreamTag,
          binding,
          exprs,
          concat(properties, attrTagMeta.name),
        );
      } else {
        crawlSectionsAndSetBinding(
          child,
          downstreamTag,
          binding,
          exprs,
          properties,
          true,
        );
      }
    }
  }
}
