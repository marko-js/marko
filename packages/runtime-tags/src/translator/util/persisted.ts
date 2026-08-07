import type { types as t } from "@marko/compiler";
import { getFile } from "@marko/compiler/babel-utils";

import * as BindingType from "./constants/binding-type";
import { isPersisted } from "./marko-config";
import { every, filter, forEach, type Opt, some } from "./optional";
import { type Binding, getCanonicalBinding, type Sources } from "./references";
import { ensureReasonGroups, isDirectClosure, type Section } from "./sections";
import {
  getSerializeSourcesForExpr,
  getSerializeSourcesForRef,
} from "./serialize-reasons";
import { createProgramState } from "./state";

// A custom tag instance whose attrs carry only client state and constants
// is client-owned: patches skip its render, so nothing inside goes stale.
export const kPatchClientOwned = Symbol("patch client owned");
declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    [kPatchClientOwned]?: true;
  }
}

// Whether the section renders inside client-owned structure (inclusive):
// patch renders skip those bodies, so nothing inside may rely on a capture.
export function inClientOwnedStructure(section: Section | undefined) {
  while (section) {
    if (section.isClientOwnedStructure) return true;
    section = section.parent;
  }
  return false;
}
// The template's child renderers, collected at translate for the runtime
// intrinsics export: transitive global knowledge composes at RENDER time
// (exact under module cycles and dynamic dispatch), never at compile.
const [getPersistedChildRenderers] = createProgramState(() => ({
  names: new Set<string>(),
  opaque: false,
}));

export function addPersistedChildRenderer(expr: t.Node) {
  const state = getPersistedChildRenderers();
  if (expr.type === "Identifier") {
    state.names.add(expr.name);
  } else {
    // An unaddressable renderer cannot join the union: the template goes
    // opaque so parents always render through it.
    state.opaque = true;
  }
}

export function getPersistedIntrinsics() {
  return getPersistedChildRenderers();
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    /** This template ITSELF reads `$global` (local, no roll-up): exported
     * as the html template's intrinsics for render-time composition. */
    readsGlobals?: true;
  }
}

export function scopeReasonRuntime() {
  return isPersisted()
    ? ("_persisted_reason" as const)
    : ("_scope_reason" as const);
}

// Persisted analyze work needing resolved sources: runs inside reference
// finalization but BEFORE reason groups freeze and call sites classify.
const [getPersistedFinalizers] = createProgramState<(() => void)[]>(() => []);
export function onFinalizePersisted(finalize: () => void) {
  getPersistedFinalizers().push(finalize);
}
export function finalizePersisted() {
  for (const finalize of getPersistedFinalizers()) finalize();
}

// Root-param facts for call sites, recorded once sources resolve; a
// child's flagged param marks the parent params feeding it in turn.
export function recordStructuralParams(sources: Sources | undefined) {
  forEach(sources?.param, (binding) => {
    if (!binding.section.parent) binding.selectsStructure = true;
  });
}

export function recordGlobalMixedParams(sources: Sources | undefined) {
  forEach(sources?.param, (binding) => {
    if (!binding.section.parent) binding.globalMixed = true;
  });
}

// The persisted policy over those facts: neither leaves a client
// channel, so the param must stay server-owned.
export function hasServerRequiredParam(params: Opt<Binding>) {
  return some(
    params,
    (binding) => binding.selectsStructure || binding.globalMixed,
  );
}

// Analyze-time recording defers until sources resolve.
export function recordStructuralParamsExpr(extra: t.NodeExtra) {
  onFinalizePersisted(() => {
    recordStructuralParams(getSerializeSourcesForExpr(extra));
  });
}

// Shared per-capture analyze hook: freezes the value's reason groups for
// translate-time ownership gates and records `$global`-mixed params.
export function ensurePersistedCaptureGroups(getExtra: () => t.NodeExtra) {
  onFinalizePersisted(() => {
    const sources = getSerializeSourcesForExpr(getExtra());
    ensureReasonGroups(sources);
    // A `$global` mixed into a param-fed value cannot survive a withheld
    // capture: call sites derive server-required-ness from the fact.
    if (sources?.param && sources.global) {
      recordGlobalMixedParams(sources);
    }
  });
}

// The stable wire/registry key for a fill: template id plus a program-wide
// fill ordinal (built in section order, so every compile output agrees and
// fills in different sections can never collide).
const [getFillOrdinals] = createProgramState<{ m?: Map<Binding, number> }>(
  () => ({}),
);

export function getPatchFillKey(binding: Binding) {
  const ordinals = getFillOrdinals();
  if (!ordinals.m) {
    const m = (ordinals.m = new Map());
    for (const section of getFile().path.node.extra!.sections!) {
      forEach(getPatchFillBindings(section), (fill) => {
        m.set(fill, m.size);
      });
    }
  }
  const ordinal = ordinals.m.get(binding);
  if (ordinal === undefined) {
    throw new Error("Marko: a patch fill binding is missing its ordinal.");
  }
  return getFile().metadata.marko.id + ordinal;
}

// The template's fill bindings.
export function getPatchFillBindings(section: { bindings: Opt<Binding> }) {
  return filter(section.bindings as Opt<Binding>, isPatchFillBinding);
}

// Whether every param source promotes to a fill: the client can then
// re-evaluate an expression mixing them with state at any time.
export function paramsDeliverAsFills(params: Sources["param"]) {
  // Only a named property delivers: the whole bag (a positional program
  // param) and rest grains carry shapes the wire cannot write faithfully.
  return every(
    params,
    (binding) =>
      binding.upstreamAlias !== binding.section.params &&
      binding.excludeProperties === undefined &&
      isPatchFillBinding(binding),
  );
}

// The shape a patch can keep current: a canonical root server value (only
// canonical bindings get ordinals and server writes — an alias never
// qualifies, so its reads reject rather than going silently stale).
function isPatchRefreshableBinding(binding: Binding) {
  return (
    isPersisted() &&
    getCanonicalBinding(binding) === binding &&
    !binding.section.parent &&
    !!binding.sources?.param &&
    !binding.sources.state &&
    (binding.type === BindingType.input ||
      binding.type === BindingType.param ||
      binding.type === BindingType.derived)
  );
}

// A potential fill: a server-sourced value whose reads intersect client
// state. The server writes every potential fill; the client registration
// rides the intersection itself, so tree-shaking decides which apply.
export function isPatchFillBinding(binding: Binding) {
  // Branch-local state seeds freshly constructed scopes through its fill
  // signal — but only ASSIGNED state: an unwritten let's signal graph is
  // shaken from non-persisted bundles, and a fill registration (a side
  // effect) must never retain userland code hydration would drop.
  if (
    isPersisted() &&
    binding.type === BindingType.let &&
    binding.section.isBranch &&
    isPatchCaptureSection(binding.section) &&
    // Client-owned branches never construct from frames, so their state
    // needs no seed fill.
    !binding.section.isClientOwnedStructure &&
    getCanonicalBinding(binding) === binding
  ) {
    return !!binding.assignmentSections;
  }
  if (!isPatchRefreshableBinding(binding)) return false;

  for (const read of binding.reads) {
    if (read.isEffect) continue;
    if (getSerializeSourcesForRef(read.referencedBindings)?.state) {
      return true;
    }
    // A rendered read inside client-owned structure promotes to an owner
    // fill (no capture channel); effect reads use the owner slot write.
    let readSection: Section | undefined = read.section;
    while (readSection && readSection !== binding.section) {
      if (readSection.isClientOwnedStructure) return true;
      readSection = readSection.parent;
    }
  }

  return false;
}

// An effect-read value with no client-state intersection: nothing in the
// signal graph consumes it, so no fill registers — the wire writes the
// accessor (`w`) and re-runs readers by register id (`e`) instead.
export function isPatchEffectBinding(binding: Binding) {
  if (!isPatchRefreshableBinding(binding) || isPatchFillBinding(binding)) {
    return false;
  }
  for (const read of binding.reads) {
    if (read.isEffect) return true;
  }
  return false;
}

// Direct (scan-based) closures over client state: their per-branch render
// fns compose the section's registered construct INIT, so a freshly
// constructed scope renders state-fed holes from the owner's live values.
export function getConstructInitClosures(section: Section) {
  return filter(
    section.referencedClosures as Opt<Binding>,
    (closure) => !!closure.sources?.state && isDirectClosure(section, closure),
  );
}

// A state-fed hole (or attribute) constructs faithfully when every read is
// available at construct time: section-local seedable state, parent state
// reached through a direct closure the INIT renders, and owner values the
// walk keeps current. Section-local params (loop items) are never seeded.
export function constructRendersReads(
  section: Section,
  refs: Opt<Binding>,
): boolean {
  return every(refs, (binding) =>
    binding.sources?.state
      ? binding.section === section
        ? binding.type === BindingType.derived && !binding.sources.param
          ? // A param mix compiles to a join whose param side has no construct
            // delivery, so only pure state derivations construct with their feeds.
            constructRendersReads(section, binding.sources.state)
          : isPatchFillBinding(binding)
        : isDirectClosure(section, binding)
      : !(binding.section === section && binding.type === BindingType.param),
  );
}

// Composed dispatch delivers fills down any branch chain; a non-branch on
// the owner-to-reader path is the (defensive) undeliverable case.
export function hasUndeliverableFillReads(
  section: Section,
  refs: Opt<Binding>,
) {
  return some(refs, (binding) => {
    if (isPatchFillBinding(binding) && binding.section !== section) {
      let cur: Section | undefined = section;
      while (cur && cur !== binding.section) {
        if (!cur.isBranch) return true;
        cur = cur.parent;
      }
      return !cur;
    }
    return false;
  });
}

// Server-sourced reads a patch cannot keep current: param-sourced bindings
// that neither fill nor refresh over the wire read stale after any patch.
export function hasUnfillablePatchReads(refs: Opt<Binding>) {
  return some(
    refs,
    (binding) =>
      !!getSerializeSourcesForRef(binding)?.param &&
      !isPatchFillBinding(binding) &&
      !isPatchEffectBinding(binding),
  );
}

// Sections whose text/attr holes emit direct patch captures: the root and
// any branch body reachable through branches alone — the walk pairs (or
// constructs) every level structurally, so depth does not matter.
export function isPatchCaptureSection(section: Section) {
  while (section.parent) {
    if (!section.isBranch) return false;
    section = section.parent;
  }
  return true;
}
