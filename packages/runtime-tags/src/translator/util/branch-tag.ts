import { types as t } from "@marko/compiler";

import { kSkipEndTag } from "../visitors/tag/native-tag";
import { getAccessorPrefix } from "./get-accessor-enums";
import { getParentTag } from "./get-parent-tag";
import { getWriteReason } from "./patch/structure";
import { type Binding, kBranchSerializeReason } from "./references";
import { ContentType, type Section } from "./sections";
import { getSerializeGuard, getSerializeGuardForAny } from "./serialize-guard";
import {
  getSerializeReason,
  isStateSerializeReason,
  isStaticSerializeReason,
  type SerializeReason,
  type SerializeReasons,
} from "./serialize-reasons";
import { setSectionOwnerResumedByMarker } from "./signals";

// Shared wiring for `<if>`/`<for>` branches (and `<show>`'s end args), so
// the tags cannot drift apart one copy at a time.
export function getBranchSectionAccessor(
  nodeBinding: Binding,
): NonNullable<Section["sectionAccessor"]> {
  return {
    binding: nodeBinding,
    prefix: getAccessorPrefix().BranchScopes,
  };
}

export function initBranchSection(
  bodySection: Section,
  upstreamExpression: Section["upstreamExpression"],
  sectionAccessor: Section["sectionAccessor"],
) {
  bodySection.isBranch = true;
  bodySection.upstreamExpression = upstreamExpression;
  bodySection.sectionAccessor = sectionAccessor;
}

// The branch id rides the always-rendered resume marker and a state-fed
// upstream keeps the branch-visiting signal, so the owner links at
// resume instead of serializing.
export function resumeOwnerByMarkerWhenStatic(
  tagSection: Section,
  bodySection: Section,
  nodeBinding: Binding,
  statefulReasonKey: symbol,
) {
  if (
    isStateSerializeReason(getSerializeReason(tagSection, statefulReasonKey)) &&
    isStaticSerializeReason(
      getSerializeReason(bodySection, kBranchSerializeReason),
    ) &&
    isStaticSerializeReason(getWriteReason(tagSection, nodeBinding))
  ) {
    setSectionOwnerResumedByMarker(bodySection);
  }
}

export function getBranchResumeArgs(
  tag: t.NodePath<t.MarkoTag>,
  tagSection: Section,
  nodeBinding: Binding,
  branchReasons: SerializeReasons,
  statefulReasonKey: symbol,
  onlyChildParentTagName: string | false | undefined,
  singleNode: boolean,
  // A patched branch keeps its markers and pairs statically: patches anchor
  // at the markers, and interior writes reach it through the pairing.
  patchChain?: boolean,
) {
  const endArgs = getBranchEndArgs(
    tag,
    tagSection,
    nodeBinding,
    getSerializeReason(tagSection, statefulReasonKey),
    !patchChain && onlyChildParentTagName,
    !patchChain && singleNode,
  );
  const [serializeMarker] = endArgs;
  return [
    patchChain
      ? t.numericLiteral(1)
      : getSerializeGuardForAny(tagSection, branchReasons, !serializeMarker),
    ...endArgs,
  ];
}

export function getBranchEndArgs(
  tag: t.NodePath<t.MarkoTag>,
  tagSection: Section,
  nodeBinding: Binding,
  statefulReason: SerializeReason | undefined,
  onlyChildParentTagName: string | false | undefined,
  singleNode: boolean | undefined,
) {
  const markerSerializeReason = getWriteReason(tagSection, nodeBinding);
  const skipParentEnd = onlyChildParentTagName && markerSerializeReason;
  if (skipParentEnd) {
    getParentTag(tag)!.node.extra![kSkipEndTag] = true;
  }

  const serializeStateful = getSerializeGuard(
    tagSection,
    statefulReason,
    !(skipParentEnd || singleNode),
  );
  const serializeMarker = getSerializeGuard(
    tagSection,
    markerSerializeReason,
    !serializeStateful,
  );
  return [
    serializeMarker,
    serializeStateful,
    skipParentEnd
      ? t.stringLiteral(`</${onlyChildParentTagName}>`)
      : singleNode
        ? t.numericLiteral(0)
        : undefined,
    singleNode ? t.numericLiteral(1) : undefined,
  ];
}

export function isSingleNodeBranch(bodySection: Section | undefined) {
  return !!(
    bodySection?.content?.singleChild &&
    bodySection.content.startType !== ContentType.Text
  );
}
