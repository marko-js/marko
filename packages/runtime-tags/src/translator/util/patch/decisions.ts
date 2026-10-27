// Per-tag patch decisions, from each expression's write sources
// (derived from its resolved reads) and its section's place in a patch render.
import { types as t } from "@marko/compiler";

import { type Binding, BindingType, isStateSourced } from "../bindings";
import { createPassMemo } from "../cyclic-memo";
import { isPatch } from "../marko-config";
import { every, forEach, type Opt, push, some } from "../optional";
import { getSourcesForExpr, getSourcesForRef } from "../reasons";
import {
  getConstantBindings,
  getReferencedBindingsInFunction,
  type ReferencedExtra,
} from "../references";
import { type DOMRuntimeFeature, linkRuntimeFeature } from "../runtime";
import { getLoopBody, type Section } from "../sections";
import { findSlot, SlotKind, type Slot } from "../slots";
import { mergeSources, type Sources } from "../sources";
import { createAnalysisState } from "../state";
import { canPatchFill, patchCreatesOrComposes } from "./refresh";
import { patchWrites, isKnownChildNode, patchesBranchesAt } from "./structure";

// A hole a patch writes (a value, a control's, a site it renders): in
// patch-written structure, not state-sourced.
export function writesPatchHole(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  const sources = getWriteSources(extra);
  return (
    patchWrites(section) && (!sources?.state || seedsOnly(section, sources))
  );
}

// Read only from `<let>`s holding the first value their inputs give: the hole
// seeds a created scope alone.
export function seedsOnly(section: Section, sources: Sources | undefined) {
  return (
    patchCreatesOrComposes(section) &&
    !!sources?.state &&
    !sources.param &&
    !sources.global &&
    every(sources.state, (state) => holdsFirstValue(state, section))
  );
}

// A seed-only hole a `<let>` the client assigns sources: that `<let>`'s signal
// rewrites the node, so the page keeps its marker whatever the group.
export function keepsSeededMarker(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  const sources = getWriteSources(extra);
  return seedsOnly(section, sources) && some(sources!.state, isAssigned);
}

function isAssigned(state: Binding) {
  return !!state.assignments;
}

// An uncontrolled `<let>` nothing assigns, from inits that hold theirs: it keeps
// the first value its inputs give on the client, which the server renders.
export function keepsFirstValue(state: Binding) {
  return !state.assignments && holdsFirstValue(state, state.section);
}

// The sources take client state: a `<let>` that keeps its first value renders
// as the server does.
export function hasClientState(sources: Sources | undefined) {
  return !every(sources?.state, keepsFirstValue);
}

// An uncontrolled `<let>` the server renders where a flush creates its scope
// (or anywhere nothing assigns it), from inits that hold theirs too.
export function holdsFirstValue(state: Binding, section: Section): boolean {
  const init = state.derivedFrom as t.NodeExtra | undefined;
  return (
    state.type === BindingType.let &&
    !!init?.initialValue &&
    !canPatchFill(state) &&
    (state.section === section || !state.assignments) &&
    every(getSourcesForExpr(init)?.state, (initState) =>
      holdsFirstValue(initState, section),
    )
  );
}

// A handler written inline merged its references with its control's, so
// only its own captures say whether it is client-sourced.
export function writesPatchHandler(tagSection: Section, value: t.Expression) {
  switch (value.type) {
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      return patchWrites(tagSection) && !capturesState(value.extra!);
    default:
      return writesPatchHole(tagSection, value.extra);
  }
}

// A read rendering a hole a patch fills: its value or content renders into its
// node in patch-written structure, with no state source.
export function isFilledHole(read: ReferencedExtra) {
  return (
    !!(read.rendersValue || read.rendersContent) &&
    writesPatchHole(read.section, read)
  );
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

// A scope with a patch-keyed node is written.
export const hasPatchKeyedNodes = createPassMemo(
  (section: Section) => some(section.slots, isPatchKeyedNode),
  false,
);

// What a patch write of the expression follows: its reads' sources, `$global`'s
// for the keys it reads, and its loop keys' (a key changes with its collection).
export function getWriteSources(extra: t.NodeExtra | undefined) {
  return mergeSources(
    extra && getSourcesForExpr(extra),
    getSourcesForRef(getConstantBindings(extra)),
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
// `controllable` a spread re-claims), linked where a patch writes it.
export function linkHolePatcher(
  section: Section,
  extra: t.NodeExtra,
  ...features: (DOMRuntimeFeature | false)[]
) {
  if (isPatch()) {
    onReasonsSettled(() => {
      if (writesPatchHole(section, extra)) {
        for (const feature of features) {
          if (feature) linkRuntimeFeature(feature);
        }
      }
    });
  }
}

// A patch link reads reasons (through fills), so it runs once the solve settles
// them, still at analysis exit, where the page entry reads linked features.
const [getSettledFinalizers] = createAnalysisState(() => [] as (() => void)[]);

export function onReasonsSettled(finalize: () => void) {
  getSettledFinalizers().push(finalize);
}

export function finalizeReasonsSettled() {
  for (const finalize of getSettledFinalizers()) finalize();
}

function isPatchKeyedNode(slot: Slot) {
  return slot.kind === SlotKind.Value && !!getPatchKeying(slot);
}

// Why a patch keys the slot, from sources and structure; being keyed is no
// reason.
const getPatchKeying = createPassMemo(computePatchKeying, undefined);

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
