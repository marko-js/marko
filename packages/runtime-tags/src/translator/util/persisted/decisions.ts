// Per-tag patch decisions, all derived on demand from analyze facts
// (nothing is stored on the AST).
import { types as t } from "@marko/compiler";
import { getProgram } from "@marko/compiler/babel-utils";

import {
  getKnownTagSection,
  getParamGroupSources,
  hasParamSource,
  kStaticBody,
  kChildOffsetScopeBinding,
} from "../known-tag";
import { some } from "../optional";
import { getCanonicalBinding, type ReferencedExtra } from "../references";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "../serialize-reasons";
import { TagNameType } from "../tag-name-type";
import { inResumedStructure, inStatefulBranch } from "./structure";

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    /** The value of a native tag's `content=` attribute. */
    contentAttr?: true;
  }
}

// Whether the read's tag writes patch entries naming what it renders: a
// server-owned dynamic tag, `content=` or a content spread, unless resumed.
export function isPatchedSite(read: ReferencedExtra) {
  const tagExtra = read.merged || read;
  if (inResumedStructure(read.section)) return false;
  // A dynamic tag's extra merges its name, attrs, args and attr tags.
  if (tagExtra.tagNameType === TagNameType.DynamicTag) {
    return !hasStateSource(tagExtra);
  }
  return (!!read.contentAttr && !hasStateSource(read)) || !!read.attrSetSpread;
}

// A dynamic tag rendering only `input` content, named by one input property
// through any alias; needs resolved references (finalize or later).
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
// A dynamic tag with no state source upstream of its renderer, inputs or
// attr tags, so a patch fills it whole; needs resolved references (finalize).
export function isServerOwnedDynamicTag(tag: t.NodePath<t.MarkoTag>) {
  const { node } = tag;
  if (t.isStringLiteral(node.name)) return false;
  // Name, attribute, spread and argument reads all merge into the tag extra.
  return !hasStateSource(node.extra);
}

export function hasStateSource(extra: t.NodeExtra | undefined) {
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
    if (getParamGroupSources(tagExtra)) childPatchPlans.set(tagExtra, plan);
  }
  return plan;
}

function computeChildPatchPlan(tagExtra: t.MarkoTagExtra): ChildPatchPlan {
  const groups = getParamGroupSources(tagExtra);
  // No per-group analysis: a child that never reads its input renders
  // nothing from it, so the all-server default is exact.
  if (!groups) return {};
  // Argument and spread reads merge into the tag extra; groups see the rest.
  let anyState = hasStateSource(tagExtra as t.NodeExtra);
  let anyServerable = false;
  for (const group of groups) {
    anyServerable ||= hasParamSource(group.sources);
    anyState ||= !!group.sources?.state;
  }
  // Skip only when nothing could change server-side; a tag variable's
  // render must run for its return.
  if (
    anyState &&
    !anyServerable &&
    tagExtra[kStaticBody] &&
    !tagExtra[kChildOffsetScopeBinding] &&
    !inStatefulBranch(getKnownTagSection(tagExtra))
  ) {
    return { skipsPatchRender: true };
  }
  return {};
}
