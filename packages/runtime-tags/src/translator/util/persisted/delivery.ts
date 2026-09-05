import type { types as t } from "@marko/compiler";
// Translate-side patch delivery: which bindings refresh over the wire, fill
// identity, and what a fresh scope can render. Analyze facts: ./structure.
import { getProgram, getFile } from "@marko/compiler/babel-utils";

import * as BindingType from "../constants/binding-type";
import { getParamGroupFeeds } from "../known-tag";
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
import { forEachSection, type Section } from "../sections";
import { getSerializeSourcesForRef } from "../serialize-reasons";
import { createProgramState } from "../state";
import { getChildPatchPlan } from "./decisions";
import {
  getParamSelectorChain,
  isBranchPathSection,
  isStatefulBranch,
} from "./structure";

// Stable wire/registry key for a fill: template id plus a program-wide fill
// ordinal built in section order so every output agrees.
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
  return every(params, (param) => isPatchFillBinding(getDeliveryRoot(param)));
}

// A canonical root server value a patch can keep current (aliases never
// get ordinals; `$global` readers recompute from the re-shipped bag).
function isPatchRefreshableBinding(binding: Binding) {
  return (
    isPersisted() &&
    getCanonicalBinding(binding) === binding &&
    isPatchWrittenSection(binding.section) &&
    !!binding.sources &&
    !!(binding.sources.param || binding.sources.global) &&
    !binding.sources.state &&
    (binding.type === BindingType.input ||
      binding.type === BindingType.param ||
      binding.type === BindingType.derived ||
      (binding.type === BindingType.let && !binding.assignmentSections))
  );
}

// A scope a frame writes into: the root, or a paired/constructed branch
// on the branch path (a stateful branch is the client's alone).
function isPatchWrittenSection(section: Section) {
  return (
    !section.parent ||
    (section.isBranch &&
      isBranchPathSection(section) &&
      !isStatefulBranch(section))
  );
}

// A potential fill: a server-sourced value whose reads intersect client
// state; the server writes all, tree-shaking decides which apply.
export function isPatchFillBinding(binding: Binding) {
  // State of a scope a construct may create (a branch body, a non-page
  // root) seeds through its fill signal — assigned state only (retention).
  if (
    isPersisted() &&
    ((!binding.section.parent && !getProgram().node.extra.page) ||
      (binding.section.isBranch && isBranchPathSection(binding.section))) &&
    // Stateful branches never construct from frames, so their
    // state needs no seed fill.
    !isStatefulBranch(binding.section) &&
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
  return isPatchRefreshableBinding(binding) && hasStateJoinedRead(binding);
}

// The root value an alias chain reads: aliases never fill or write on
// their own, their root does.
export function getDeliveryRoot(binding: Binding) {
  let root = binding;
  for (let cur = getCanonicalBinding(root); cur !== root;) {
    root = cur;
    cur = getCanonicalBinding(root);
  }
  return root;
}

// A rendered read (through any alias) the client must recompute: joined
// with state, or inside structure the client may own.
function hasStateJoinedRead(binding: Binding): boolean {
  return !!getFillReadKind(binding);
}

// Why a binding fills: `true` unconditionally, or the run-time conditions
// its reads sit under (param-selected structure, withholdable content).
export interface FillConditions {
  selectors?: Sources[];
  contents?: Section[];
}
export function getFillConditions(binding: Binding) {
  const kind = getFillReadKind(binding);
  return kind === true ? undefined : kind;
}

function getFillReadKind(binding: Binding): true | FillConditions | undefined {
  if (binding.feedsStateMixedGroup) return true;
  let conditions: FillConditions | undefined;
  for (const alias of binding.aliases) {
    // A property alias or rest fills on its own; a direct alias reads this.
    if (getCanonicalBinding(alias) === binding) {
      const kind = getFillReadKind(alias);
      if (kind === true) return true;
      if (kind) conditions = mergeConditions(conditions, kind);
    }
  }
  for (const read of binding.reads) {
    // A spread's attributes still render; any other effect read outside
    // client-owned structure refreshes through the owner slot write.
    const effect = read.isEffect && !read.nativeTagSpread;
    // A handler reads the slot at call time: the owner write keeps it
    // current with no registration to shake.
    if (effect && read.invokeOnly) continue;
    if (!effect && getSerializeSourcesForRef(read.referencedBindings)?.state) {
      return true;
    }
    // A `<define>` body reads as if at each direct site of its var; a
    // recursive define reaches its own sites once.
    const sites = [read.section];
    for (const site of sites) {
      // No patch write reaches a skipped region: reads inside stateful
      // structure (and interactive boundary content) promote to owner fills.
      let readSection: Section | undefined = site;
      let content: Section | undefined;
      while (readSection && readSection !== binding.section) {
        if (isStatefulBranch(readSection)) return true;
        if (
          readSection.boundaryContent &&
          getProgram().node.extra.isInteractive
        ) {
          return true;
        }
        // The nearest content a consumer renders (or withholds).
        if (
          !content &&
          !readSection.isBranch &&
          !readSection.isBoundary &&
          readSection.downstreamBinding !== undefined
        ) {
          content = readSection;
        }
        if (readSection.defineSites) {
          for (const defineSite of readSection.defineSites) {
            if (!sites.includes(defineSite)) sites.push(defineSite);
          }
          break;
        }
        readSection = readSection.parent;
      }
      if (effect || binding.section.parent) continue;
      // An `<await>` value re-fires no promise client-side: the boundary's
      // own frames deliver its settlement.
      if (content && !isBoundaryValueRead(read)) {
        const withholds = consumerMayWithhold(content);
        if (withholds === true) return true;
        if (withholds) {
          conditions = mergeConditions(conditions, { contents: [content] });
        }
      }
      // Only structure OTHER params select can leave this read client-owned;
      // a page's root params always come from the request.
      if (!getProgram().node.extra.page) {
        for (const sources of getParamSelectorChain(site) || []) {
          if (!selectsThrough(sources, binding)) {
            conditions = mergeConditions(conditions, { selectors: [sources] });
          }
        }
      }
    }
  }
  return conditions;
}

// Whether the selector's params include the binding or a value it is a
// property of (both reach the client together).
function selectsThrough(sources: Sources, binding: Binding) {
  for (let cur: Binding | undefined = binding; cur; cur = cur.upstreamAlias) {
    if (includes(sources.param, cur)) return true;
  }
  return false;
}

// `true`: a pure client consumer frames never render; `"selects"`: a
// client-fed selector, so the runtime decides; `false`: server-owned.
function consumerMayWithhold(content: Section) {
  const consumer = content.consumer;
  // A `<define>` var passed on (its direct sites classify on their own)
  // may reach any consumer, so the runtime decides.
  if (!consumer) {
    const defineVar = content.downstreamBinding || undefined;
    for (const read of defineVar?.binding.reads || []) {
      if (!(read as { defineBodySection?: Section }).defineBodySection) {
        return "selects";
      }
    }
    return false;
  }
  if (getChildPatchPlan(consumer).skipsPatchRender) return true;
  for (const group of getParamGroupFeeds(consumer) || []) {
    if (
      group.sources?.state &&
      some(group.params, (param) => param.selectsStructure)
    ) {
      return "selects";
    }
  }
  return false;
}

function isBoundaryValueRead(read: t.NodeExtra) {
  let boundaryValue = false;
  forEachSection((section) => {
    boundaryValue ||= section.isBoundary && section.upstreamExpression === read;
  });
  return boundaryValue;
}

function mergeConditions(
  a: FillConditions | undefined,
  b: FillConditions,
): FillConditions {
  if (!a)
    return { selectors: b.selectors?.slice(), contents: b.contents?.slice() };
  for (const sources of b.selectors || []) {
    if (!a.selectors?.includes(sources)) (a.selectors ??= []).push(sources);
  }
  for (const content of b.contents || []) {
    if (!a.contents?.includes(content)) (a.contents ??= []).push(content);
  }
  return a;
}

// A refreshable value the signal graph never renders (no fill registers):
// the wire writes its accessor (`w`) so live-slot reads stay current.
export function isPatchWriteBinding(binding: Binding) {
  return (
    isPatchRefreshableBinding(binding) &&
    !isPatchFillBinding(binding) &&
    (hasRegisteredFnCapture(binding) || hasPatchEffectReads(binding))
  );
}

// Effect reads of a written value (through any alias) re-run by register
// id when a patch changes what they saw.
export function hasPatchEffectReads(binding: Binding): boolean {
  for (const read of binding.reads) {
    // A serialized spread's set is its own delivery.
    if (read.isEffect && !read.attrSetSpread) return true;
  }
  for (const alias of binding.aliases) {
    if (getCanonicalBinding(alias) === binding && hasPatchEffectReads(alias)) {
      return true;
    }
  }
  return false;
}

function hasRegisteredFnCapture(binding: Binding): boolean {
  if (binding.registeredFnCapture) return true;
  for (const alias of binding.aliases) {
    if (
      getCanonicalBinding(alias) === binding &&
      hasRegisteredFnCapture(alias)
    ) {
      return true;
    }
  }
  return false;
}

// Closures whose construct INITs render a fresh scope; a lazy child's
// server-owned input arrives through its ready channel.
export function getConstructInitClosures(section: Section) {
  return filter(
    section.referencedClosures as Opt<Binding>,
    (closure) => !!closure.sources?.state || fillJoinsIn(closure, section),
  );
}

// A closure read in `section` that is a `tagNameLoad` tag's input.
export function feedsTagNameLoadIn(closure: Binding, section: Section) {
  for (const read of closure.reads) {
    if (read.section === section && read.tagNameLoadInput) return true;
  }
  return false;
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

// A local the server computes without client state; a `$global`
// contribution is fine since the shipped value is per-frame current.
function isSeedableLocal(binding: Binding) {
  return (
    !binding.sources?.state &&
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

// Keyed `$global` reads a root section renders itself; effect-only reads
// see the live bag and need no signal.
export function getRootGlobalReads(section: Section) {
  let globals: Opt<Binding>;
  if (isPersisted() && !section.parent) {
    forEach(section.bindings, (binding) => {
      if (binding.type !== BindingType.global || !binding.upstreamAlias) return;
      for (const read of binding.reads) {
        if (
          read.section === section &&
          (!read.isEffect || read.nativeTagSpread)
        ) {
          globals = push(globals, binding);
          break;
        }
      }
    });
  }
  return globals;
}

// Server-sourced reads a patch cannot keep current: param-sourced bindings
// that neither fill nor refresh over the wire read stale after any patch.
export function hasUnfillablePatchReads(refs: Opt<Binding>) {
  return some(refs, (binding) => {
    const sources = getSerializeSourcesForRef(binding);
    return !!sources?.param && !sources.global && !delivers(binding);
  });
}

// A root value delivers as a fill or write; a local derivation delivers
// when every server feed it derives from does (it recomputes client-side).
function delivers(binding: Binding, seen = new Set<Binding>()): boolean {
  const root = getDeliveryRoot(binding);
  if (seen.has(root)) return true;
  seen.add(root);
  if (!root.section.parent) {
    return isPatchFillBinding(root) || isPatchWriteBinding(root);
  }
  // A branch's own param (a loop item) arrives with the structure.
  if (isSectionParam(root)) return true;
  return every(root.sources?.param, (param) => delivers(param, seen));
}
