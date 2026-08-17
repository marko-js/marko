// Translate-side patch delivery: which bindings refresh over the wire
// (fills and wire writes), fill identity, and what a freshly constructed
// scope can render. Analyze facts these derive from live in ./structure.
import { getProgram, getFile } from "@marko/compiler/babel-utils";

import * as BindingType from "../constants/binding-type";
import { isPersisted } from "../marko-config";
import {
  every,
  filter,
  forEach,
  includes,
  type Opt,
  push,
  some,
} from "../optional";
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
// program param) and rests carry shapes the wire cannot write.
function hasWritableShape(binding: Binding) {
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
      binding.type === BindingType.derived ||
      (binding.type === BindingType.let && !binding.assignmentSections))
  );
}

// A potential fill: a server-sourced value whose reads intersect client
// state. The server writes every potential fill; the client registration
// rides the intersection itself, so tree-shaking decides which apply.
export function isPatchFillBinding(binding: Binding) {
  // State of a scope a construct may create (a branch body, a non-page
  // root) seeds through its fill signal — assigned state only (retention).
  if (
    isPersisted() &&
    ((!binding.section.parent && !getProgram().node.extra.page) ||
      (binding.section.isBranch && isBranchPathSection(binding.section))) &&
    // State-selected branches never construct from frames, so their
    // state needs no seed fill.
    !isStateSelected(binding.section) &&
    getCanonicalBinding(binding) === binding &&
    (binding.sources?.state || binding.section.parent)
  ) {
    if (binding.sources?.state) {
      return binding.type === BindingType.let && !!binding.assignmentSections;
    }
    // A server-owned local a state join reads: its partial writes it,
    // refreshing a paired scope and seeding a fresh one.
    if (binding !== binding.section.params && isSeedableLocal(binding)) {
      return hasStateJoinedRead(binding);
    }
  }
  return (
    hasWritableShape(binding) &&
    isPatchRefreshableBinding(binding) &&
    hasStateJoinedRead(binding)
  );
}

// A rendered read (through any alias) the client must recompute:
// intersecting state, a dynamic tag name, or inside state-selected structure.
function hasStateJoinedRead(binding: Binding): boolean {
  for (const alias of binding.aliases) {
    // A property alias or rest fills on its own; a direct alias reads this.
    if (getCanonicalBinding(alias) === binding && hasStateJoinedRead(alias)) {
      return true;
    }
  }
  for (const read of binding.reads) {
    // A native tag spread is an effect read (its handlers attach lazily)
    // whose attributes still render.
    if (read.isEffect && !read.nativeTagSpread) continue;
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
    // A serialized spread's set is its own delivery.
    if (read.isEffect && !read.serializedSpread) return true;
  }
  return false;
}

// Closures whose construct INITs render a fresh scope: state closures
// through their own signal, fill closures as arrivals at the joins they feed.
export function getConstructInitClosures(section: Section) {
  return filter(
    section.referencedClosures as Opt<Binding>,
    (closure) => !!closure.sources?.state || fillJoinsIn(closure, section),
  );
}

// A fill closure feeding a state intersection read in `section` (which
// then rides a `_fill_join_*` wrapper registering the closure's init).
function fillJoinsIn(closure: Binding, section: Section) {
  if (closure.sources?.state || !isPatchFillBinding(closure)) return false;
  for (const read of closure.reads) {
    if (
      read.section === section &&
      Array.isArray(read.referencedBindings) &&
      getSerializeSourcesForRef(read.referencedBindings)?.state
    ) {
      return true;
    }
  }
  return false;
}

// Closures a section's server-owned local fills derive from: when a frame
// withholds such a write, the fresh scope re-derives through their inits.
export function getLocalFillFeeds(section: Section) {
  let feeds: Opt<Binding>;
  forEach(getPatchFillBindings(section), (fill) => {
    if (fill.section === section && !fill.sources?.state) {
      forEach(fill.sources?.param, (feed) => {
        if (feed.section !== section && !includes(feeds, feed)) {
          feeds = push(feeds, feed);
        }
      });
    }
  });
  return feeds;
}

// A local the server computes without client state: a param property
// (or rest, a declared object), or a derivation/never-assigned let.
function isSeedableLocal(binding: Binding) {
  return (
    !binding.sources?.state &&
    !binding.sources?.global &&
    (isSectionParam(binding) ||
      binding.type === BindingType.derived ||
      (binding.type === BindingType.let && !binding.assignmentSections))
  );
}

// A property alias of the section's own params (a loop item, its property).
function isSectionParam(binding: Binding) {
  const { params } = binding.section;
  for (let alias = binding.upstreamAlias; alias; alias = alias.upstreamAlias) {
    if (alias === params) return true;
  }
  return binding === params || binding.type === BindingType.param;
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
    // Seeded state is client-owned after its seed: no frame delivers it.
    if (
      !binding.sources?.state &&
      isPatchFillBinding(binding) &&
      binding.section !== section
    ) {
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
