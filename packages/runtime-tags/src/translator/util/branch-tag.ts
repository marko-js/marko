import { types as t } from "@marko/compiler";

import { type Binding } from "./bindings";
import { some } from "./optional";
import { getBranchWriteReason, getWriteReason } from "./patch/structure";
import { isStateReason, isUnconditionalReason, type Reasons } from "./reasons";
import { hasResumableWriter } from "./references";
import { ContentType, type Section } from "./sections";
import { setSectionOwnerResumedByMarker } from "./signals";
import { findSlot, SlotKind } from "./slots";
import { createProgramState } from "./state";
import { getWriteGuard, getWriteGuardForAny } from "./write-guard";

// Shared wiring for control flow branches (and `<show>`'s end args), so the
// tags cannot drift apart one copy at a time.
export function initBranchSection(
  bodySection: Section,
  branchExpr: Section["branchExpr"],
  branch: NonNullable<Section["branch"]>,
) {
  bodySection.branchExpr = branchExpr;
  bodySection.branch = branch;
}

// The branch id rides the always-rendered resume marker, which resume decodes
// in a bundle with branches: a branch whose state has a resumable writer keeps
// its runtime there.
export function resumeOwnerByMarkerWhenStatic(
  bodySection: Section,
  nodeBinding: Binding,
) {
  const branchExprReason = findSlot(nodeBinding, SlotKind.BranchExpr)?.reason;
  if (
    isStateReason(branchExprReason) &&
    some(branchExprReason.state, hasResumableWriter) &&
    isUnconditionalReason(getBranchWriteReason(bodySection)) &&
    isUnconditionalReason(getWriteReason(nodeBinding))
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
  // A patched branch keeps its markers and pairs statically: patches address
  // it at the markers, and interior writes reach it through the pairing.
  patchChain?: boolean,
) {
  const endArgs = getBranchEndArgs(
    tagSection,
    nodeBinding,
    !patchChain && onlyChildParentTagName,
    !patchChain && singleNode,
  );
  const [markerGuard] = endArgs;
  return [
    patchChain
      ? t.numericLiteral(1)
      : getWriteGuardForAny(tagSection, branchReasons, !markerGuard),
    ...endArgs,
  ];
}

export function getBranchEndArgs(
  tagSection: Section,
  nodeBinding: Binding,
  onlyChildParentTagName: string | false | undefined,
  singleNode: boolean | undefined,
) {
  const markerReason = getWriteReason(nodeBinding);
  const skipParentEnd = !!onlyChildParentTagName && !!markerReason;
  if (skipParentEnd) {
    getBranchEndTags().add(nodeBinding);
  }

  // Only an element's only child reads it: otherwise the end always writes
  // its branch marker when it writes one at all.
  const branchExprGuard = skipParentEnd
    ? getWriteGuard(
        tagSection,
        findSlot(nodeBinding, SlotKind.BranchExpr)?.reason,
        false,
      )
    : singleNode
      ? t.numericLiteral(0)
      : undefined;
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
