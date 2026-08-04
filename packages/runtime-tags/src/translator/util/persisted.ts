import { getFile } from "@marko/compiler/babel-utils";

import * as BindingType from "./constants/binding-type";
import { isPersisted } from "./marko-config";
import { filter, forEach, type Opt } from "./optional";
import { type Binding, getCanonicalBinding } from "./references";
import type { Section } from "./sections";
import { getSerializeSourcesForRef } from "./serialize-reasons";
import { createProgramState } from "./state";

export function scopeReasonRuntime() {
  return isPersisted()
    ? ("_persisted_reason" as const)
    : ("_scope_reason" as const);
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
