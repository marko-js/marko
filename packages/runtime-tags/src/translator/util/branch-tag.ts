import { types as t } from "@marko/compiler";

import { type Binding } from "./bindings";
import { getOnlyChildParentTagName } from "./is-only-child-in-parent";
import { some } from "./optional";
import { isStateReason, isUnconditionalReason, type Reasons } from "./reasons";
import { hasResumableAssignment } from "./references";
import { callRuntime } from "./runtime";
import { getScopeAccessorLiteral } from "./scope-accessor";
import {
  ContentType,
  getScopeIdIdentifier,
  getSection,
  type Section,
} from "./sections";
import { setSectionOwnerResumedByMarker } from "./signals";
import { findSlot, SlotKind } from "./slots";
import { createProgramState } from "./state";
import {
  getBranchWriteReason,
  getWriteGuard,
  getWriteGuardForAny,
  getWriteReason,
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

// The branch id rides the always-rendered resume marker, which resume decodes
// in a bundle with branches: a branch whose state has a resumable writer keeps
// its runtime there.
export function resumeOwnerByMarkerWhenUnconditional(
  bodySection: Section,
  nodeBinding: Binding,
) {
  const branchExprReason = findSlot(nodeBinding, SlotKind.BranchExpr)?.reason;
  if (
    isStateReason(branchExprReason) &&
    some(branchExprReason.state, hasResumableAssignment) &&
    isUnconditionalReason(getBranchWriteReason(bodySection)) &&
    isUnconditionalReason(getWriteReason(nodeBinding))
  ) {
    setSectionOwnerResumedByMarker(bodySection);
  }
}

export function getBranchResumeArgs(
  tag: t.NodePath<t.MarkoTag>,
  branchReasons: Reasons,
  singleNode: boolean,
  // A patched branch keeps its markers and pairs statically: patches address
  // it at the markers, and interior writes reach it through the pairing.
  patchChain?: boolean,
) {
  const tagSection = getSection(tag);
  const nodeBinding = tag.node.extra!.nodeBinding!;
  const scopeId = getScopeIdIdentifier(tagSection);
  const accessor = getScopeAccessorLiteral(nodeBinding);
  const endArgs = buildBranchEndArgs(
    tagSection,
    nodeBinding,
    !patchChain && getOnlyChildParentTagName(tag),
    !patchChain && singleNode,
  );
  const [markerGuard] = endArgs;
  // A patched chain's shells follow, so its guard is never left off.
  return [
    scopeId,
    accessor,
    getWriteGuardForAny(tagSection, branchReasons, !patchChain && !markerGuard),
    ...endArgs,
  ];
}

export function buildBranchEndArgs(
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

export type ForType = "in" | "of" | "to" | "until";

export function buildForRuntimeCall(
  type: ForType,
  attrs: Record<string, t.Expression>,
  params: t.ArrowFunctionExpression["params"],
  statements: t.Statement[],
) {
  return t.expressionStatement(
    callRuntime(
      forTypeToRuntime(type),
      ...getBaseArgsInForTag(type, attrs),
      t.arrowFunctionExpression(params, t.blockStatement(statements)),
    ),
  );
}

export function getForType(tag: t.MarkoTag): ForType | undefined {
  for (const attr of tag.attributes) {
    if (attr.type === "MarkoAttribute") {
      switch (attr.name) {
        case "of":
        case "in":
        case "to":
        case "until":
          return attr.name;
      }
    }
  }
}

export function forTypeToRuntime(type: ForType) {
  switch (type) {
    case "of":
      return "forOf";
    case "in":
      return "forIn";
    case "to":
      return "forTo";
    case "until":
      return "forUntil";
  }
}

export function forTypeToBranchRuntime(type: ForType) {
  switch (type) {
    case "of":
      return "_for_of";
    case "in":
      return "_for_in";
    case "to":
      return "_for_to";
    case "until":
      return "_for_until";
  }
}

export function forTypeToUnkeyedBranchRuntime(type: ForType) {
  switch (type) {
    case "to":
      return "_for_to_unkeyed";
    case "until":
      return "_for_until_unkeyed";
    default:
      return "_for_of_unkeyed";
  }
}

export function getBaseArgsInForTag(
  type: ForType,
  attrs: Record<string, t.Expression>,
) {
  switch (type) {
    case "in":
      return [attrs.in];
    case "of":
      return [attrs.of];
    case "to":
      return [
        attrs.to,
        attrs.from || t.numericLiteral(0),
        attrs.step || t.numericLiteral(1),
      ];
    case "until":
      return [
        attrs.until,
        attrs.from || t.numericLiteral(0),
        attrs.step || t.numericLiteral(1),
      ];
  }
}
