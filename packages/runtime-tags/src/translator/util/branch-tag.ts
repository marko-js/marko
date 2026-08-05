import { getAccessorPrefix } from "./get-accessor-char";
import { type Binding, kBranchSerializeReason } from "./references";
import type { Section } from "./sections";
import {
  getSerializeReason,
  isStateSerializeReason,
  isStaticSerializeReason,
} from "./serialize-reasons";
import { setSectionOwnerResumedByMarker } from "./signals";

// Shared wiring for branch-owning tags (`<if>`/`<for>`): every branch body
// hangs off its owner through the same accessor and reason rules, so the
// two tags cannot drift apart one copy at a time.
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

// The branch id rides the always-rendered resume marker and the state
// driven selection keeps the branch-visiting signal, so the owner links at
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
    isStaticSerializeReason(getSerializeReason(tagSection, nodeBinding))
  ) {
    setSectionOwnerResumedByMarker(bodySection);
  }
}
