import { types as t } from "@marko/compiler";

import { type Binding } from "./bindings";
import { getOnlyChildParentTagName } from "./is-only-child-in-parent";
import { push, some } from "./optional";
import {
  addReasonExprs,
  isGuardedReason,
  isStateReason,
  type Reasons,
} from "./reasons";
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
import { ensureSlot, findSlot, type Slot, SlotKind } from "./slots";
import { ALWAYS } from "./sources";
import { createAnalysisState, createOutputState } from "./state";
import {
  getBranchWriteReason,
  getWriteBit,
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
  const { nodeBinding } = branch.tag;
  nodeBinding.branchBodies = push(nodeBinding.branchBodies, bodySection);
}

// What a control flow tag branches on, which client code reads again as it
// changes; whether it can decides if the tag keeps its runtime.
export function addBranchExpr(nodeBinding: Binding, expr: t.NodeExtra) {
  const slot = ensureSlot(nodeBinding, SlotKind.BranchExpr);
  addReasonExprs(slot, expr);
  getBranchExprSlots().push(slot);
}

const [getBranchExprSlots] = createAnalysisState((): Slot[] => []);

// Resume decodes branch markers in a bundle that enables branches, as a template
// does once one of its branch expressions reads state a resumed instance assigns.
const [enablesBranches] = createAnalysisState(() =>
  getBranchExprSlots().some(isAssignedOnResume),
);

function isAssignedOnResume({ reason }: Slot) {
  return isStateReason(reason) && some(reason.state, hasResumableAssignment);
}

// The branch id rides its always-written branch marker, which resume decodes
// where the template enables branches.
export function resumeOwnerByMarkerWhenUnconditional(
  bodySection: Section,
  nodeBinding: Binding,
) {
  const branchReason = getBranchWriteReason(bodySection);
  const nodeReason = getWriteReason(nodeBinding);
  if (
    branchReason &&
    !isGuardedReason(branchReason) &&
    nodeReason &&
    !isGuardedReason(nodeReason) &&
    enablesBranches() &&
    getWriteBit(nodeBinding.section, getBranchMarkerReason(nodeBinding)) === 1
  ) {
    setSectionOwnerResumedByMarker(bodySection);
  }
}

// When an element's only child ends with its branch marker rather than the
// element's: as its expression changes, or for an `<if>` wherever resume decodes it.
function getBranchMarkerReason(nodeBinding: Binding) {
  return some(nodeBinding.branchBodies, isIfBranch) && enablesBranches()
    ? ALWAYS
    : findSlot(nodeBinding, SlotKind.BranchExpr)?.reason;
}

// An `<if>` marks one branch; a loop's markers carry every row's id, which over
// many rows compress worse than the payload's links to them.
function isIfBranch(body: Section) {
  return body.branch!.kind === "if";
}

export function getBranchResumeArgs(
  tag: t.NodePath<t.MarkoTag>,
  branchReasons: Reasons,
  singleNode: boolean,
) {
  const tagSection = getSection(tag);
  const nodeBinding = tag.node.extra!.nodeBinding!;
  const scopeId = getScopeIdIdentifier(tagSection);
  const accessor = getScopeAccessorLiteral(nodeBinding);
  const endArgs = buildBranchEndArgs(
    tagSection,
    nodeBinding,
    getOnlyChildParentTagName(tag),
    singleNode,
  );
  const [markerGuard] = endArgs;
  return [
    scopeId,
    accessor,
    getWriteGuardForAny(tagSection, branchReasons, !markerGuard),
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

// Elements whose only child branch writes their end tag, after its marker.
const [getBranchEndTags] = createOutputState(() => new Set<Binding>());
export function isEndTagWrittenByBranch(nodeBinding: Binding | undefined) {
  return !!nodeBinding && getBranchEndTags().has(nodeBinding);
}

// Resume adopts the element before a branch's resume comments, so only
// content of one tag qualifies; a placeholder may write zero or many nodes.
export function isSingleNodeContent(content: Section["content"] | undefined) {
  return !!(content?.singleChild && content.startType === ContentType.Tag);
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
