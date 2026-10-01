import { types as t } from "@marko/compiler";

import { type Binding } from "./bindings";
import {
  getWriteReason,
  isStateReason,
  isUnconditionalReason,
  type Reasons,
} from "./reasons";
import { ContentType, type Section } from "./sections";
import { setSectionOwnerResumedByMarker } from "./signals";
import { findSectionSlot, findSlot, SlotKind } from "./slots";
import { createProgramState } from "./state";
import { getWriteGuard, getWriteGuardForAny } from "./write-guard";

// Shared wiring for control flow branches (and `<show>`'s end args), so the
// tags cannot drift apart one copy at a time.
export function initBranchSection(
  bodySection: Section,
  upstreamExpression: Section["upstreamExpression"],
  branch: NonNullable<Section["branch"]>,
) {
  bodySection.upstreamExpression = upstreamExpression;
  bodySection.branch = branch;
}

// The branch id rides the always-rendered resume marker and a state-fed
// upstream keeps the branch-visiting signal, so the owner links at
// resume instead of serializing.
export function resumeOwnerByMarkerWhenStatic(
  bodySection: Section,
  nodeBinding: Binding,
) {
  if (
    isStateReason(getWriteReason(findSlot(nodeBinding, SlotKind.BranchExpr))) &&
    isUnconditionalReason(
      getWriteReason(findSectionSlot(bodySection, SlotKind.Branch)),
    ) &&
    isUnconditionalReason(getWriteReason(findSlot(nodeBinding)))
  ) {
    setSectionOwnerResumedByMarker(bodySection);
  }
}

export function getBranchResumeArgs(
  tagSection: Section,
  nodeBinding: Binding,
  branchReasons: Reasons,
  onlyChildParentTagName: string | false | undefined,
  singleNode: boolean,
) {
  const endArgs = getBranchEndArgs(
    tagSection,
    nodeBinding,
    onlyChildParentTagName,
    singleNode,
  );
  const [markerGuard] = endArgs;
  return [
    getWriteGuardForAny(tagSection, branchReasons, !markerGuard),
    ...endArgs,
  ];
}

export function getBranchEndArgs(
  tagSection: Section,
  nodeBinding: Binding,
  onlyChildParentTagName: string | false | undefined,
  singleNode: boolean | undefined,
) {
  const branchExprReason = getWriteReason(
    findSlot(nodeBinding, SlotKind.BranchExpr),
  );
  const markerReason = getWriteReason(findSlot(nodeBinding));
  const skipParentEnd = onlyChildParentTagName && markerReason;
  if (skipParentEnd) {
    getBranchEndTags().add(nodeBinding);
  }

  const branchExprGuard = getWriteGuard(
    tagSection,
    branchExprReason,
    !(skipParentEnd || singleNode),
  );
  const markerGuard = getWriteGuard(tagSection, markerReason, !branchExprGuard);
  return [
    markerGuard,
    branchExprGuard,
    skipParentEnd
      ? t.stringLiteral(`</${onlyChildParentTagName}>`)
      : singleNode
        ? t.numericLiteral(0)
        : undefined,
    singleNode ? t.numericLiteral(1) : undefined,
  ];
}

// Elements whose only child branch writes their end tag, after its marker.
const [getBranchEndTags] = createProgramState(() => new Set<Binding>());
export function isEndTagWrittenByBranch(nodeBinding: Binding | undefined) {
  return !!nodeBinding && getBranchEndTags().has(nodeBinding);
}

// Resume adopts the element before a branch's resume comments, so only a
// body of one tag qualifies; a placeholder may write zero or many nodes.
export function isSingleNodeBranch(bodySection: Section | undefined) {
  return !!(
    bodySection?.content?.singleChild &&
    bodySection.content.startType === ContentType.Tag
  );
}
