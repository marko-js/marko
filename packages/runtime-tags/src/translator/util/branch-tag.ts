import { types as t } from "@marko/compiler";

import { type Binding } from "./bindings";
import { getOnlyChildParentTagName } from "./is-only-child-in-parent";
import { push, some } from "./optional";
import { isGuardedReason, isStateReason, type Reasons } from "./reasons";
import { hasResumableWriter } from "./references";
import { callRuntime, type RuntimeHelpers } from "./runtime";
import { getScopeAccessorLiteral } from "./scope-accessor";
import {
  ContentType,
  getScopeIdIdentifier,
  getSection,
  isOptionalBranch,
  type Section,
} from "./sections";
import { findSlot, SlotKind } from "./slots";
import { createOutputState } from "./state";
import { toOnlyExpressionOrBlock } from "./to-only-or-block";
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
  const { nodeBinding } = branch.tag;
  nodeBinding.branchBodies = push(nodeBinding.branchBodies, bodySection);
}

// A branch section whose scope ids ride a resume marker carrying its owner's scope
// id when its scopes serialize, so the client links the owner and `_` is not serialized.
export function isOwnerResumedByMarker(section: Section) {
  // `_await` writes the branch marker whenever the body is written.
  if (section.branch?.kind === "await") return true;
  if (!isOptionalBranch(section)) return false;
  // Else the branch id rides the always-rendered marker, decoded in a bundle with
  // branches: a branch whose state has a resumable writer keeps that runtime.
  const { nodeBinding } = section.branch.tag;
  const branchExprReason = findSlot(nodeBinding, SlotKind.BranchExpr)?.reason;
  if (!isStateReason(branchExprReason)) return false;
  const branchReason = getBranchWriteReason(section);
  const nodeReason = getWriteReason(nodeBinding);
  return (
    !!branchReason &&
    !isGuardedReason(branchReason) &&
    !!nodeReason &&
    !isGuardedReason(nodeReason) &&
    some(branchExprReason.state, hasResumableWriter)
  );
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
const [getBranchEndTags] = createOutputState(() => new Set<Binding>());
export function isEndTagWrittenByBranch(nodeBinding: Binding | undefined) {
  return !!nodeBinding && getBranchEndTags().has(nodeBinding);
}

// Resume adopts the element before a branch's resume comments, so only
// content of one tag qualifies; a placeholder may write zero or many nodes.
export function isSingleNodeContent(content: Section["content"]) {
  return !!(content?.singleChild && content.startType === ContentType.Tag);
}

export type ForType = "in" | "of" | "to" | "until";

// The runtime loops by `<for>` type: the plain loop, the loop rendering branches,
// and that loop's unkeyed form, which `<for in>` has none of.
export const forRuntimes: Record<
  ForType,
  { loop: RuntimeHelpers; branch: RuntimeHelpers; unkeyed?: RuntimeHelpers }
> = {
  of: { loop: "forOf", branch: "_for_of", unkeyed: "_for_of_unkeyed" },
  in: { loop: "forIn", branch: "_for_in" },
  to: { loop: "forTo", branch: "_for_to", unkeyed: "_for_to_unkeyed" },
  until: {
    loop: "forUntil",
    branch: "_for_until",
    unkeyed: "_for_until_unkeyed",
  },
};

export function buildForRuntimeCall(
  type: ForType,
  attrs: Record<string, t.Expression>,
  params: t.ArrowFunctionExpression["params"],
  statements: t.Statement[],
) {
  return t.expressionStatement(
    callRuntime(
      forRuntimes[type].loop,
      ...getBaseArgsInForTag(type, attrs),
      t.arrowFunctionExpression(params, toOnlyExpressionOrBlock(statements)),
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

export function getBaseArgsInForTag(
  type: ForType,
  attrs: Record<string, t.Expression>,
) {
  return type === "of" || type === "in"
    ? [attrs[type]]
    : [
        attrs[type],
        attrs.from || t.numericLiteral(0),
        attrs.step || t.numericLiteral(1),
      ];
}
