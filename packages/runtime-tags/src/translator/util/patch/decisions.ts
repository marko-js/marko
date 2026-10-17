// Per-tag patch decisions, from each expression's write sources and stability
// (derived from its resolved reads) and its section's place in a patch render.
import { types as t } from "@marko/compiler";

import {
  type Binding,
  BindingType,
  isStableBinding,
  isStateSourced,
} from "../bindings";
import { createAnalysisMemo } from "../cyclic-memo";
import { isPatch } from "../marko-config";
import { every, forEach, type Opt, push, some } from "../optional";
import { getSourcesForExpr, getSourcesForRef } from "../reasons";
import {
  getConstantBindings,
  getGlobalReads,
  getReferencedBindings,
  getReferencedBindingsInFunction,
  onFinalizeReferences,
  type ReferencedExtra,
} from "../references";
import { type DOMRuntimeFeature, linkRuntimeFeature } from "../runtime";
import { getLoopBody, type Section } from "../sections";
import { findSlot, SlotKind, type Slot } from "../slots";
import { mergeSources, type Sources } from "../sources";
import {
  catchSetupRenders,
  patchWrites,
  isKnownChildNode,
  patchesBranchesAt,
} from "./structure";

// A hole a patch writes (a value, a control's, a site it re-renders): in
// patch-written structure, not state-sourced, nor one a `@catch`'s setup renders.
export function writesPatchHole(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  const sources = getWriteSources(extra);
  return (
    patchWrites(section) &&
    !sources?.state &&
    !catchSetupRenders(section, sources)
  );
}

// A handler written inline merged its references with its control's, so
// only its own captures say whether it is client-sourced.
export function writesPatchHandler(tagSection: Section, value: t.Expression) {
  switch (value.type) {
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      return (
        patchWrites(tagSection) &&
        !capturesState(value.extra!) &&
        !catchSetupRenders(tagSection, getWriteSources(value.extra))
      );
    default:
      return writesPatchHole(tagSection, value.extra);
  }
}

// A read rendering a hole a patch fills: its value renders into its node in
// patch-written structure, with no state source.
export function isFilledHole(read: ReferencedExtra) {
  return !!read.rendersValue && writesPatchHole(read.section, read);
}

// A slot the writer keys a patch entry on, which its scope writes whatever its
// reason says: a node's, or a branch or loop row a patch pairs.
export function isPatchKeyedSlot(slot: Slot) {
  return isPatch() && !!getPatchKeying(slot);
}

// A node patch-keyed only for the values rendered into it, which nothing pairs
// through: what keys it is their groups'.
export function isPatchKeyedByValues(binding: Binding) {
  return isPatch() && getPatchKeying(findSlot(binding)!) === "values";
}

// A scope with a patch-keyed node is written, decided once per analysis as
// its slots' keying is.
export const [hasPatchKeyedNodes] = createAnalysisMemo(
  (section: Section) => some(section.slots, isPatchKeyedNode),
  false,
);

export function hasStateSource(extra: t.NodeExtra | undefined) {
  return (
    !!getWriteSources(extra)?.state ||
    (!!extra && capturesState(extra as t.FunctionExtra))
  );
}

// What a patch write of the expression follows: its reads' sources, `$global`'s
// for the keys it reads, and its loop keys' (a key changes with its collection).
export function getWriteSources(extra: t.NodeExtra | undefined) {
  return mergeSources(
    extra && getSourcesForExpr(extra),
    getSourcesForRef(getConstantBindings(extra)),
  );
}

// An expression with nothing request-derived behind it renders once, so no
// patch fills it again: it reads stable bindings alone and no `$global` key.
export function isStableExpr(extra: t.NodeExtra) {
  return (
    !getGlobalReads(extra) &&
    every(getReferencedBindings(extra), isStableBinding) &&
    every(getConstantBindings(extra), isStableBinding)
  );
}

// The write sources of each server value rendered into the node.
export function getRenderedValueSources(binding: Binding) {
  let sources: Opt<Sources>;
  forEach(findSlot(binding)!.reasonExprs, (expr) => {
    if (rendersServerValue(expr)) {
      const exprSources = getWriteSources(expr);
      if (exprSources) sources = push(sources, exprSources);
    }
  });
  return sources;
}

// The runtime features a hole's patch entries apply through (its patchers, and
// `controllable` a spread re-claims), linked by one finalizer where a patch writes it.
export function linkHolePatcher(
  section: Section,
  extra: t.NodeExtra,
  ...features: (DOMRuntimeFeature | false)[]
) {
  if (isPatch()) {
    onFinalizeReferences(() => {
      if (writesPatchHole(section, extra)) {
        for (const feature of features) {
          if (feature) linkRuntimeFeature(feature);
        }
      }
    });
  }
}

function isPatchKeyedNode(slot: Slot) {
  return slot.kind === SlotKind.Value && !!getPatchKeying(slot);
}

// Why a patch keys the slot, decided once per analysis: it reads sources and
// structure, which settle before reasons; being keyed is no reason.
const [getPatchKeying] = createAnalysisMemo(computePatchKeying, undefined);

function computePatchKeying(slot: Slot) {
  if (slot.kind === SlotKind.Branch) {
    // A branch or loop row a patch pairs (an `<if>` branch by index, even
    // under a constant test).
    const { branch } = slot.owner;
    if (branch?.optional && patchesBranchesAt(branch.nodeBinding)) {
      return "pairs";
    }
  } else if (
    slot.kind === SlotKind.Value &&
    slot.owner.type === BindingType.dom
  ) {
    const node = slot.owner;
    if (isKnownChildNode(node)) {
      // A known child's scope, which a patch pairs through.
      if (patchWrites(slot.section)) return "pairs";
    } else if (getLoopBody(node) && patchesBranchesAt(node)) {
      // The marker of loop rows a patch pairs.
      return "pairs";
    } else if (
      patchWrites(slot.section) &&
      some(slot.reasonExprs, rendersServerValue)
    ) {
      return "values";
    }
  }
}

function rendersServerValue(extra: t.NodeExtra) {
  return !!extra.rendersValue && !getWriteSources(extra)?.state;
}

// Whether a function's own captures read state.
function capturesState(extra: t.FunctionExtra) {
  return some(getReferencedBindingsInFunction(extra), isStateSourced);
}
