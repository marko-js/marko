// Per-tag patch decisions, all derived on demand from analyze facts
// (nothing is stored on the AST).
import { types as t } from "@marko/compiler";

import {
  type Binding,
  BindingType,
  isStableBinding,
  isStateSourced,
} from "../bindings";
import { isPatch } from "../marko-config";
import { every, some } from "../optional";
import { getSourcesForExpr, getSourcesForRef } from "../reasons";
import {
  getCanonicalExtra,
  getConstantBindings,
  getReferencedBindings,
  getReferencedBindingsInFunction,
  isReferencedExtra,
  onFinalizeReferences,
  type ReferencedExtra,
} from "../references";
import { type DOMRuntimeFeature, linkRuntimeFeature } from "../runtime";
import { type Section, getLoopBody } from "../sections";
import { findSlot, SlotKind, type Slot } from "../slots";
import { hasCallerParamSource, mergeSources, type Sources } from "../sources";
import { TagNameType } from "../tag-name-type";
import {
  isBranchPathSection,
  writesPatchIn,
  isKnownChildNode,
  isPatchRendered,
  patchesBranchesAt,
} from "./structure";

// Whether the read's tag writes patch entries naming what it renders: a
// dynamic tag, `content=` or content spread with no state source, if unresumed.
export function isPatchedSite(read: ReferencedExtra) {
  const tagExtra = read.merged || read;
  // A dynamic tag's extra merges its name, attrs, args and attr tags.
  if (tagExtra.tagNameType === TagNameType.DynamicTag) {
    return writesPatchSite(read.section, tagExtra);
  }
  return read.attrSetSpread
    ? writesPatchHole(read.section, read)
    : !!read.contentAttr && writesPatchSite(read.section, read);
}

// A site a patch entry re-renders from the server's value (a dynamic tag, or
// `content=`): in patch-written structure, with no state source.
export function writesPatchSite(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  return writesPatchIn(section) && !hasStateSource(extra);
}

// The patcher applying a hole's entry, linked where a patch writes the hole
// (known once sources resolve).
export function linkHolePatcher(
  section: Section,
  extra: t.NodeExtra,
  feature: DOMRuntimeFeature,
) {
  if (isPatch() && isBranchPathSection(section)) {
    onFinalizeReferences(() => {
      if (writesPatchHole(section, extra)) linkRuntimeFeature(feature);
    });
  }
}

// A tag whose dynamic tag entry re-renders it from the server's value: a
// renderer and input (`input` content included) with no state source.
export function writesPatchDynamicTag(
  tag: t.NodePath<t.MarkoTag>,
  section: Section,
) {
  return (
    tag.node.name.type !== "StringLiteral" &&
    writesPatchSite(section, tag.node.extra)
  );
}

// A state-sourced control value is the client's: no entry re-writes it.
export function writesPatchControl(section: Section, extras: t.NodeExtra[]) {
  return writesPatchIn(section) && !extras.some(isStateSourcedExpr);
}

// A handler written inline merged its references with its control's, so
// only its own captures say whether it is client-sourced.
export function writesPatchHandler(tagSection: Section, value: t.Expression) {
  switch (value.type) {
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      return writesPatchIn(tagSection) && !capturesState(value.extra!);
    default:
      return writesPatchHole(tagSection, value.extra);
  }
}

// A spread patches as the attribute set (content rides a dynamic tag
// entry); an `<option>` spread renders through its select's value.
export function isAttrSetSpread(tagName: string) {
  return tagName !== "option";
}

// A hole a patch writes: in patch-written structure and not state-sourced.
export function writesPatchHole(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  return writesPatchIn(section) && !isStateSourcedExpr(extra);
}

// A read rendering a hole a patch fills: its value renders into its node in
// patch-written structure, with no state source.
export function isFilledHole(read: ReferencedExtra) {
  return !!read.rendersValue && writesPatchHole(read.section, read);
}

// A state-sourced value recomputes through the signal graph, not a patch:
// its reads or its loop keys have a state source.
export function isStateSourcedExpr(extra: t.NodeExtra | undefined) {
  if (!extra) return false;
  const canonical = getCanonicalExtra(extra);
  return (
    (isReferencedExtra(canonical) &&
      some(getReferencedBindings(canonical), isStateSourced)) ||
    some(getConstantBindings(canonical), isStateSourced)
  );
}

// What a patch write of the expression follows: its reads' sources and its
// loop keys' (a key changes with the collection it keys).
export function getWriteSources(extra: t.NodeExtra | undefined) {
  return (
    extra &&
    mergeSources(
      getSourcesForExpr(extra),
      getSourcesForRef(getConstantBindings(extra)),
    )
  );
}

export function mergeWriteSources(
  sources: Sources | undefined,
  extra: t.NodeExtra | undefined,
) {
  return mergeSources(sources, getWriteSources(extra));
}

// An expression with nothing request-derived behind it renders once, so no
// patch fills it again; a `$global` read changes per request.
export function isStableExpr(extra: t.NodeExtra | undefined) {
  return !!extra && isStableWrite(extra, getWriteSources(extra));
}

// `isStableExpr` given the expression's write sources.
export function isStableWrite(
  extra: t.NodeExtra,
  sources: Sources | undefined,
) {
  if (sources?.global) return false;
  // A merged expression's references live on its canonical extra.
  const canonical = getCanonicalExtra(extra);
  return (
    (!isReferencedExtra(canonical) ||
      every(getReferencedBindings(canonical), isStableBinding)) &&
    every(getConstantBindings(canonical), isStableBinding)
  );
}

// Whether a patch write's value reads a param a caller passes, deciding at
// runtime who feeds it (`getPatchWriteOwnership` gates on its group).
export function readsCallerParam(extra: t.NodeExtra | undefined) {
  const sources = getWriteSources(extra);
  return hasCallerParamSource(sources) && !isStableWrite(extra!, sources);
}

export function hasStateSource(extra: t.NodeExtra | undefined) {
  return (
    isStateSourcedExpr(extra) ||
    (!!extra && capturesState(extra as t.FunctionExtra))
  );
}

// Whether a function's own captures read state.
export function capturesState(extra: t.FunctionExtra) {
  return some(getReferencedBindingsInFunction(extra), isStateSourced);
}

// The writer emits a patch entry keyed on the node: a hole a flush writes, a
// known child's scope it pairs through, or the marker of rows it pairs.
export function isPatchKeyed(section: Section, binding: Binding) {
  // Every node binding is a dom binding.
  if (
    !isPatch() ||
    binding.type !== BindingType.dom ||
    binding.section !== section
  ) {
    return false;
  }
  if (isKnownChildNode(binding)) return isPatchRendered(section);
  if (getLoopBody(binding) && patchesBranchesAt(binding)) return true;
  return (
    writesPatchIn(section) &&
    some(findSlot(binding)?.reasonExprs, rendersServerValue)
  );
}

// A slot a patch keys an entry on: a node's, or the body of a branch or loop
// row it pairs (an `<if>` branch by index, even under a constant test).
export function isPatchKeyedSlot(slot: Slot) {
  if (slot.kind === SlotKind.Value) {
    return isPatchKeyed(slot.section, slot.owner);
  }
  if (slot.kind !== SlotKind.Branch) return false;
  const { branch } = slot.owner;
  return !!branch?.optional && patchesBranchesAt(branch.nodeBinding);
}

export function hasPatchKeyedNodes(section: Section) {
  return (
    isPatch() &&
    some(section.bindings, (binding) => isPatchKeyed(section, binding))
  );
}

function rendersServerValue(extra: t.NodeExtra) {
  return !!extra.rendersValue && !isStateSourcedExpr(extra);
}
