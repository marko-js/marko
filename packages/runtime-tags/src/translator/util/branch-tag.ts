import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import { type Binding } from "./bindings";
import { some } from "./optional";
import { isStateReason, isUnconditionalReason, type Reasons } from "./reasons";
import { hasResumableWriter } from "./references";
import { ContentType, type Section } from "./sections";
import { setSectionOwnerResumedByMarker } from "./signals";
import { findSectionSlot, findSlot, type Slot, SlotKind } from "./slots";
import { ALWAYS } from "./sources";
import { createProgramState } from "./state";
import {
  getWriteGuard,
  getWriteGuardForAny,
  isSameReason,
} from "./write-guard";

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

// The branch id rides the always-rendered resume marker, which a bundle that
// visits branches decodes, so the owner links at resume instead of serializing.
export function resumeOwnerByMarkerWhenStatic(
  bodySection: Section,
  nodeBinding: Binding,
) {
  if (
    branchesEnabled() &&
    isUnconditionalReason(
      findSectionSlot(bodySection, SlotKind.Branch)?.reason,
    ) &&
    isUnconditionalReason(findSlot(nodeBinding)?.reason)
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
  const markerReason = findSlot(nodeBinding)?.reason;
  const skipParentEnd = !!onlyChildParentTagName && !!markerReason;
  if (skipParentEnd) {
    getBranchEndTags().add(nodeBinding);
  }

  // Only an element's only child reads it: otherwise the end always writes
  // its branch marker when it writes one at all.
  const branchExprGuard = skipParentEnd
    ? getWriteGuard(tagSection, getBranchMarkerReason(nodeBinding), false)
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

// A range's start pairs with its end: an only child's end writes its branch
// marker, so the start is written under that guard too.
export function getBranchStartGuard(
  tagSection: Section,
  nodeBinding: Binding,
  onlyChildParentTagName: string | false | undefined,
) {
  const markerReason = findSlot(nodeBinding)?.reason;
  const startGuard = getWriteGuard(tagSection, markerReason, false)!;
  if (onlyChildParentTagName && markerReason) {
    const branchMarkerReason = getBranchMarkerReason(nodeBinding);
    if (
      !branchMarkerReason?.always &&
      !isSameReason(branchMarkerReason, markerReason)
    ) {
      return t.logicalExpression(
        "&&",
        startGuard,
        getWriteGuard(tagSection, branchMarkerReason, false)!,
      );
    }
  }
  return startGuard;
}

// When a branch ending its element writes its branch marker, which a bundle
// that enables branches decodes: it links the element, branches and owner at once.
function getBranchMarkerReason(nodeBinding: Binding) {
  return branchesEnabled()
    ? ALWAYS
    : findSlot(nodeBinding, SlotKind.BranchExpr)?.reason;
}

// The bundle enables branches (`withBranches`) when client code changes a
// branch here, and resume then visits branch markers.
function branchesEnabled() {
  return !!getProgram().node.extra.hasClientChangedBranch;
}

export function hasClientChangedBranch(section: Section) {
  return !section.pruned && some(section.slots, isClientChangedBranch);
}

// Only a resumed effect or registered function writes state on the client.
function isClientChangedBranch(slot: Slot) {
  const reason = slot?.reason;
  return (
    slot.kind === SlotKind.BranchExpr &&
    isStateReason(reason) &&
    some(reason.state, hasResumableWriter)
  );
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
