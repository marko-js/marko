import { types as t } from "@marko/compiler";
import { isAttributeTag, isLoopTag } from "@marko/compiler/babel-utils";

import { currentProgramPath } from "../visitors/program";
import { getParentTag } from "./get-parent-tag";
import { getTagName } from "./get-tag-name";
import { isConditionTag } from "./is-core-tag";

export type AttrTagLookup = Record<
  string,
  {
    name: string;
    dynamic: boolean;
    repeated: boolean;
    group: AttrTagNames;
  }
>;

type AttrTagNames = string[];

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    attributeTags?: AttrTagLookup;
    attributeTagGroup?: AttrTagLookup[string]["group"];
  }
}

const attrTagToIdentifierLookup = new WeakMap<AttrTagLookup[string], string>();
export function getAttrTagIdentifier(
  meta: AttrTagLookup[string],
): t.Identifier {
  let name = attrTagToIdentifierLookup.get(meta);
  if (!name) {
    name = currentProgramPath.scope.generateUid(meta.name);
    attrTagToIdentifierLookup.set(meta, name);
  }

  return t.identifier(name);
}

export function analyzeAttributeTags(tag: t.NodePath<t.MarkoTag>) {
  if (tag.node.extra?.attributeTags) return tag.node.extra.attributeTags;

  const attrTags = tag.node.body.attributeTags
    ? tag.get("body").get("body")
    : tag.get("attributeTags");
  if (!attrTags.length) return;

  const tagExtra = (tag.node.extra ??= {});
  const lookup: AttrTagLookup = (tagExtra.attributeTags = {});
  const attrTagNodesByName: Record<string, t.NodePath<t.MarkoTag>[]> = {};
  const sampleAttrTagsForControlFlow = new Map<
    t.NodePath<t.MarkoTag>,
    string
  >();

  for (const child of attrTags) {
    if (child.isMarkoTag()) {
      if (isAttributeTag(child)) {
        const name = getTagName(child);
        lookup[name] ||= createAttrTagMeta(name, [name]);
        (attrTagNodesByName[name] ||= []).push(child);
        analyzeAttributeTags(child);
      } else {
        const isRepeated = isLoopTag(child);
        let curGroup: (typeof lookup)[string]["group"] | undefined;
        for (const name of crawlAttrTags(child, attrTagNodesByName)) {
          const oldMeta = lookup[name];
          if (oldMeta) {
            if (!curGroup) {
              curGroup = oldMeta.group;
            } else if (curGroup !== oldMeta.group) {
              for (const name of oldMeta.group) {
                lookup[name].group = curGroup;
                curGroup.push(name);
              }
            }
          }

          let attrTagMeta = lookup[name];
          if (!attrTagMeta) {
            attrTagMeta = lookup[name] = createAttrTagMeta(name, []);
            curGroup = attrTagMeta.group;
            curGroup.push(name);
          }

          attrTagMeta.dynamic = true;
          if (isRepeated) {
            attrTagMeta.repeated = true;
          }

          sampleAttrTagsForControlFlow.set(child, name);
        }
      }
    }
  }

  for (const [controlFlowTag, sampleAttrName] of sampleAttrTagsForControlFlow) {
    (controlFlowTag.node.extra ??= {}).attributeTagGroup =
      lookup[sampleAttrName].group;
  }

  for (const name in attrTagNodesByName) {
    const attrTagMeta = lookup[name];
    if (!attrTagMeta.repeated) {
      const attrTagNodes = attrTagNodesByName[name];
      if (attrTagNodes.length > 1) {
        attrTagMeta.repeated =
          !attrTagMeta.dynamic || hasRepeatedDynamicAttrTags(attrTagNodes);
      }
    }
  }

  return lookup;
}

function createAttrTagMeta(
  name: string,
  group: AttrTagNames,
): AttrTagLookup[string] {
  return {
    name: name.slice(1),
    dynamic: false,
    repeated: false,
    group,
  };
}

function crawlAttrTags(
  tag: t.NodePath<t.MarkoTag>,
  attrTagNodesByName: Record<string, t.NodePath<t.MarkoTag>[]>,
  attrTagNames = new Set<string>(),
) {
  const attrTags = tag.node.body.attributeTags
    ? tag.get("body").get("body")
    : tag.get("attributeTags");
  for (const child of attrTags) {
    if (child.isMarkoTag()) {
      if (isAttributeTag(child)) {
        const tagName = getTagName(child);
        attrTagNames.add(tagName);
        (attrTagNodesByName[tagName] ||= []).push(child);
        analyzeAttributeTags(child);
      } else {
        crawlAttrTags(child, attrTagNodesByName, attrTagNames);
      }
    }
  }

  return attrTagNames;
}

function hasRepeatedDynamicAttrTags(attrTags: t.NodePath<t.MarkoTag>[]) {
  // If we have multiple nodes and we know they can be dynamic, we first check
  // if all nodes are apart of the same if/else chain and that there are no duplicates.
  let conditionRoot: t.NodePath<t.MarkoTag> | undefined;
  const seenBranches = new Set<t.NodePath<t.MarkoTag>>();
  for (const attrTag of attrTags) {
    const parentTag = getParentTag(attrTag)!;
    if (seenBranches.has(parentTag) || !isConditionTag(parentTag)) {
      return true;
    }

    const curConditionRoot = getConditionRoot(parentTag);
    if (
      curConditionRoot &&
      curConditionRoot !== (conditionRoot ||= curConditionRoot)
    ) {
      return true;
    }

    seenBranches.add(parentTag);
  }

  return false;
}

function getConditionRoot(tag: t.NodePath<t.MarkoTag>) {
  if (getTagName(tag) === "if") return tag;

  let prev = tag.getPrevSibling();
  while (prev.node) {
    if (prev.isMarkoTag() && getTagName(prev) === "if") {
      return prev;
    }

    prev = prev.getPrevSibling();
  }
}
