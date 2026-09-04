// Per-tag patch decisions, all derived on demand from analyze facts
// (nothing is stored on the AST).
import { types as t } from "@marko/compiler";
import { getProgram, isAttributeTag } from "@marko/compiler/babel-utils";

import {
  getKnownTagSection,
  getParamGroupFeeds,
  hasServerFeed,
  kStaticBody,
  kTagVar,
} from "../known-tag";
import { some } from "../optional";
import { getCanonicalBinding } from "../references";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { inStatefulBranch } from "./structure";

// A dynamic tag rendering `input` content (a body or attribute tag) and
// nothing else: its name reads one property of the template's input, through
// any alias; resolved references are required, so call at finalize or later.
export function isContentRenderTag(tag: t.NodePath<t.MarkoTag>) {
  const program = getProgram();
  const { node } = tag;
  if (
    t.isStringLiteral(node.name) ||
    node.var ||
    node.attributes.length ||
    node.body.body.length ||
    node.attributeTags?.length ||
    node.arguments?.length
  ) {
    return false;
  }
  const binding = node.extra?.referencedBindings;
  return (
    !!binding &&
    !Array.isArray(binding) &&
    binding.property !== undefined &&
    !!binding.upstreamAlias &&
    getCanonicalBinding(binding.upstreamAlias) === getInputBinding(program)
  );
}
// A dynamic tag whose renderer and every input the server owns (any client
// state feed disqualifies); needs resolved references — call at finalize.
export function isServerOwnedDynamicTag(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  if (t.isStringLiteral(node.name)) return false;
  // Name, attribute, spread and argument reads all merge into the tag extra.
  if (hasStateFeed(node.extra)) return false;
  let attrTagState = false;
  const checkAttrTags = (body: t.NodePath<t.MarkoTagBody>) => {
    for (const child of body.get("body")) {
      if (child.isMarkoTag() && isAttributeTag(child)) {
        for (const attr of child.node.attributes) {
          if (attr.type === "MarkoAttribute") {
            attrTagState ||= hasStateFeed(attr.value.extra);
          }
        }
        attrTagState ||= hasStateFeed(child.node.extra);
        checkAttrTags(child.get("body"));
      }
    }
  };
  checkAttrTags(tag.get("body"));
  return !attrTagState;
}

export function hasStateFeed(extra: t.NodeExtra | undefined) {
  return (
    !!getSerializeSourcesForExpr(extra || {})?.state ||
    some(
      (extra as t.FunctionExtra | undefined)?.referencedBindingsInFunction,
      (binding) => !!getSerializeSourcesForRef(binding)?.state,
    )
  );
}

// The `input` param binding of the given template program.
function getInputBinding(program: t.NodePath<t.Program>) {
  return program.node.extra?.binding?.propertyAliases.get("0");
}

export interface ChildPatchPlan {
  /** Pure client instance: its render and child link skip in patches. */
  skipsPatchRender?: boolean;
}

const childPatchPlans = new WeakMap<t.MarkoTagExtra, ChildPatchPlan>();

// How a patch render treats a templated child call site: render it or
// skip it (pure client instance); derived from analyze facts on demand.
export function getChildPatchPlan(tagExtra: t.MarkoTagExtra) {
  let plan = childPatchPlans.get(tagExtra);
  if (!plan) {
    plan = computeChildPatchPlan(tagExtra);
    // Before known-tag finalize the groups are not yet stamped: no memo.
    if (getParamGroupFeeds(tagExtra)) childPatchPlans.set(tagExtra, plan);
  }
  return plan;
}

function computeChildPatchPlan(tagExtra: t.MarkoTagExtra): ChildPatchPlan {
  const feeds = getParamGroupFeeds(tagExtra);
  // No per-group analysis: a child that never reads its input renders
  // nothing from it, so the all-server default is exact.
  if (!feeds) return {};
  // Argument and spread reads merge into the tag extra; groups see the rest.
  let anyState = hasStateFeed(tagExtra as t.NodeExtra);
  let anyServerable = false;
  for (const group of feeds) {
    anyServerable ||= hasServerFeed(group.sources);
    anyState ||= !!group.sources?.state;
  }
  // Skip only when nothing could change server-side; a tag variable's
  // render must run for its return.
  if (
    anyState &&
    !anyServerable &&
    tagExtra[kStaticBody] &&
    !tagExtra[kTagVar] &&
    !inStatefulBranch(getKnownTagSection(tagExtra))
  ) {
    return { skipsPatchRender: true };
  }
  return {};
}
