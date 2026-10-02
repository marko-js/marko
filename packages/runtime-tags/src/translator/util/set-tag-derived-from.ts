import { types as t } from "@marko/compiler";
import { isAttributeTag } from "@marko/compiler/babel-utils";

import { type Binding } from "./bindings";
import { getTagName } from "./get-tag-name";
import { analyzeAttributeTags, getAttrTagPaths } from "./nested-attribute-tags";
import { concat, type OneMany, type Opt } from "./optional";
import { type KnownExprs } from "./references";
import { getSection, getSectionForBody, type Section } from "./sections";
import { createSectionState } from "./state";

const [getTagDerivations] = createSectionState(
  "tag-derivations",
  () =>
    new Map<
      t.NodePath<t.MarkoTag>,
      { binding: OneMany<Binding>; exprs: KnownExprs | undefined }
    >(),
);

export function setTagDerivedFrom(
  tag: t.NodePath<t.MarkoTag>,
  binding: Opt<Binding>,
  exprs?: KnownExprs,
) {
  if (binding) {
    getTagDerivations(getSection(tag)).set(tag, { binding, exprs });
  }
}

export function finalizeTagDerivations(section: Section) {
  for (const [tag, { binding, exprs }] of getTagDerivations(section)) {
    setContentDerives(tag, tag.node.extra!, binding, exprs);
  }
}

function setContentDerives(
  tag: t.NodePath<t.MarkoTag>,
  tagExtra: t.MarkoTagExtra,
  binding: OneMany<Binding>,
  exprs: KnownExprs | undefined,
  properties?: Opt<string>,
  skip?: true,
) {
  if (!skip) {
    const contentSection = getSectionForBody(tag.get("body"));
    if (contentSection) {
      contentSection.derives = {
        tag: tagExtra,
        binding,
        properties: concat(properties, "content"),
        exprs,
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
        setContentDerives(
          child,
          tagExtra,
          binding,
          exprs,
          concat(properties, attrTagMeta.name),
        );
      } else {
        setContentDerives(child, tagExtra, binding, exprs, properties, true);
      }
    }
  }
}
