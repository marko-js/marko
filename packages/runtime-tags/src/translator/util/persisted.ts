import type { types as t } from "@marko/compiler";
import { getFile } from "@marko/compiler/babel-utils";

import * as BindingType from "./constants/binding-type";
import { isPersisted } from "./marko-config";
import { filter, forEach, type Opt } from "./optional";
import {
  type Binding,
  bindingUtil,
  getCanonicalBinding,
  type Sources,
} from "./references";
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
declare module "@marko/compiler" {
  export interface MarkoMeta {
    /** This template (or one it renders) reads `$global`: skipping its
     * render in a patch could hide a global change. */
    persistedGlobals?: true;
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

// Params that must stay server-owned (structural tests, `$global` mixes):
// no client delivery path exists, so call sites reject state feeds.
const serverRequiredParamsBySection = new WeakMap<Section, Opt<Binding>>();

// Recorded from resolved sources (analyze-time callers defer through
// `onFinalizePersisted`), filtered to the template's own root params.
export function recordPersistedServerRequired(
  section: Section,
  sources: Sources | undefined,
) {
  while (section.parent) section = section.parent;
  const rootSection = section;
  forEach(sources?.param, (binding) => {
    if (binding.section === rootSection) {
      serverRequiredParamsBySection.set(
        rootSection,
        bindingUtil.add(
          serverRequiredParamsBySection.get(rootSection),
          binding,
        ),
      );
    }
  });
}

export function getPersistedServerRequiredParams(rootSection: Section) {
  return serverRequiredParamsBySection.get(rootSection);
}

// Analyze-time recording defers until sources resolve.
export function recordPersistedServerRequiredExpr(
  section: Section,
  extra: t.NodeExtra,
) {
  onFinalizePersisted(() => {
    recordPersistedServerRequired(section, getSerializeSourcesForExpr(extra));
  });
}

// Shared per-capture analyze hook: freezes the value's reason groups for
// translate-time ownership gates and records `$global`-mixed params.
export function ensurePersistedCaptureGroups(
  section: Section,
  getExtra: () => t.NodeExtra,
) {
  onFinalizePersisted(() => {
    const sources = getSerializeSourcesForExpr(getExtra());
    ensureReasonGroups(sources);
    // A `$global` mixed into a param-fed value cannot survive a withheld
    // capture: the params must stay server-owned.
    if (sources?.param && sources.global) {
      recordPersistedServerRequired(section, sources);
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
    getCanonicalBinding(binding) === binding
  ) {
    return !!binding.assignmentSections;
  }
  if (!isPatchRefreshableBinding(binding)) return false;

  for (const read of binding.reads) {
    if (
      !read.isEffect &&
      getSerializeSourcesForRef(read.referencedBindings)?.state
    ) {
      return true;
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
export function constructRendersReads(section: Section, refs: Opt<Binding>) {
  let ok = true;
  forEach(refs, (binding) => {
    ok &&= binding.sources?.state
      ? binding.section === section
        ? binding.type === BindingType.derived && !binding.sources.param
          ? // A param mix compiles to a join whose param side has no construct
            // delivery, so only pure state derivations construct with their feeds.
            constructRendersReads(section, binding.sources.state)
          : isPatchFillBinding(binding)
        : isDirectClosure(section, binding)
      : !(binding.section === section && binding.type === BindingType.param);
  });
  return ok;
}

// Composed dispatch delivers fills down any branch chain; a non-branch on
// the owner-to-reader path is the (defensive) undeliverable case.
export function hasUndeliverableFillReads(
  section: Section,
  refs: Opt<Binding>,
) {
  let undeliverable = false;
  forEach(refs, (binding) => {
    if (isPatchFillBinding(binding) && binding.section !== section) {
      let cur: Section | undefined = section;
      while (cur && cur !== binding.section) {
        if (!cur.isBranch) {
          undeliverable = true;
          break;
        }
        cur = cur.parent;
      }
      undeliverable ||= !cur;
    }
  });
  return undeliverable;
}

// Server-sourced reads a patch cannot keep current: param-sourced bindings
// that neither fill nor refresh over the wire read stale after any patch.
export function hasUnfillablePatchReads(refs: Opt<Binding>) {
  let unfillable = false;
  forEach(refs, (binding) => {
    unfillable ||=
      !!getSerializeSourcesForRef(binding)?.param &&
      !isPatchFillBinding(binding) &&
      !isPatchEffectBinding(binding);
  });
  return unfillable;
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
