// Translate-side patch delivery: which bindings refresh over the wire
// (fills and wire writes), fill identity, and what a freshly constructed
// scope can render. Analyze facts these derive from live in ./structure.
import { getProgram, getFile } from "@marko/compiler/babel-utils";

import * as BindingType from "../constants/binding-type";
import { isPersisted } from "../marko-config";
import { every, filter, forEach, type Opt, some } from "../optional";
import { type Binding, getCanonicalBinding, type Sources } from "../references";
import { type Section } from "../sections";
import { getSerializeSourcesForRef } from "../serialize-reasons";
import { createProgramState } from "../state";
import {
  inStateSelectedStructure,
  isBranchPathSection,
  isStateSelected,
} from "./structure";

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
    for (const section of getProgram().node.extra.sections!) {
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
  return every(params, isPatchFillBinding);
}

// Only a named property delivers as a fill: the whole bag (a positional
// program param) and rest grains carry shapes the wire cannot write.
function isFillableGrain(binding: Binding) {
  return (
    binding.upstreamAlias !== binding.section.params &&
    binding.excludeProperties === undefined
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
    isBranchPathSection(binding.section) &&
    // State-selected branches never construct from frames, so their
    // state needs no seed fill.
    !isStateSelected(binding.section) &&
    getCanonicalBinding(binding) === binding
  ) {
    return !!binding.assignmentSections;
  }
  if (!isFillableGrain(binding) || !isPatchRefreshableBinding(binding)) {
    return false;
  }

  for (const read of binding.reads) {
    if (read.isEffect) continue;
    // A dynamic tag name is a hole only the client can paint (a re-render,
    // not a server-written entry): it fills without a state intersection.
    if (read.isDynamicTagName) return true;
    if (getSerializeSourcesForRef(read.referencedBindings)?.state) {
      return true;
    }
    // A rendered read inside state-selected structure promotes to an owner
    // fill (no patch-write channel); effect reads use the owner slot write.
    let readSection: Section | undefined = read.section;
    while (readSection && readSection !== binding.section) {
      if (isStateSelected(readSection)) return true;
      readSection = readSection.parent;
    }
  }

  return false;
}

// A refreshable value the signal graph never renders (no fill registers):
// the wire writes its accessor (`w`) so live-slot reads stay current.
export function isPatchWriteBinding(binding: Binding) {
  return (
    isPatchRefreshableBinding(binding) &&
    !isPatchFillBinding(binding) &&
    (binding.registeredFnCapture || hasPatchEffectReads(binding))
  );
}

// Effect reads of a written value re-run by register id when a patch
// changes what they saw.
export function hasPatchEffectReads(binding: Binding) {
  for (const read of binding.reads) {
    if (read.isEffect) return true;
  }
  return false;
}

// State closures whose registered construct INITs paint state-fed holes
// from live owner values (see `constructsWithInit`).
export function getConstructInitClosures(section: Section) {
  return filter(
    section.referencedClosures as Opt<Binding>,
    (closure) => !!closure.sources?.state,
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
        : // Parent state paints through a registered construct INIT: the
          // direct scan or the dynamic closure's self-subscribing signal.
          true
      : !(binding.section === section && binding.type === BindingType.param),
  );
}

// Composed dispatch delivers fills down any branch chain; a non-branch on
// the owner-to-reader path is the (defensive) undeliverable case.
export function hasUndeliverableFillReads(
  section: Section,
  refs: Opt<Binding>,
) {
  // Inside state-selected structure content sections keep lexical owners, so
  // reads hop soundly: lone reads and dynamic-chain intersection members
  // deliver through their self-registering closure signals.
  const stateSelected = inStateSelectedStructure(section);
  return some(refs, (binding) => {
    if (isPatchFillBinding(binding) && binding.section !== section) {
      let cur: Section | undefined = section;
      while (cur && cur !== binding.section) {
        if (!cur.isBranch && !stateSelected) return true;
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
      !isPatchWriteBinding(binding),
  );
}
