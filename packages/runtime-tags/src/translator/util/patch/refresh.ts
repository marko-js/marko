// Patch fill decisions (which bindings a patch fills or writes, fill identity,
// what a created scope runs) and the finalizers recording what they need.
import type { types as t } from "@marko/compiler";
import { getFile, getTemplateId } from "@marko/compiler/babel-utils";

import {
  type Binding,
  bindingUtil,
  BindingType,
  getCanonicalBinding,
  type Intersection,
  isDirectAlias,
  isParamBinding,
  type ReferencedBindings,
  someAlias,
  someUpToAliasRoot,
  someReadIn,
} from "../bindings";
import { createCyclicMemo } from "../cyclic-memo";
import { readsValuesOnResume } from "../finalize-references";
import { isTranslate } from "../get-compile-stage";
import {
  ensureKnownTagPatchGroups,
  getParamGroupSources,
  isKnownTagExtra,
  recordKnownTagPatchFacts,
} from "../known-tag";
import { isPatch } from "../marko-config";
import {
  every,
  first,
  forEach,
  type Opt,
  push,
  reduce,
  some,
  type SortedOpt,
} from "../optional";
import {
  getSourcesForExpr,
  getSourcesForRef,
  isConditionalReason,
  isUnconditionalReason,
} from "../reasons";
import {
  getReferencedBindings,
  type Read,
  type ReferencedExtra,
} from "../references";
import { linkRuntimeFeature } from "../runtime";
import {
  type Section,
  ensureCallerParamGroups,
  forEachParamGroup,
  forEachSection,
  getRendererReason,
  isCalledBody,
  isCallerParamAt,
  isDynamicClosure,
  isSameOrAncestorSection,
  type ParamReasonGroup,
  sectionUtil,
} from "../sections";
import { addSetupWork } from "../setup-work";
import { findSlot, type Slot, SlotKind } from "../slots";
import {
  createSources,
  hasCallerParamSource,
  hasCallerParamSourceAt,
  hasParamOrGlobalSource,
  isInParams,
  mergeSources,
  type Sources,
  sourcesUtil,
} from "../sources";
import { createProgramState } from "../state";
import {
  getWriteSources,
  isFilledHole,
  isPatchedSite,
  isStableExpr,
} from "./decisions";
import {
  getBranchOf,
  getParamRebuildChain,
  inResumedStructure,
  inStatefulBranch,
  isBranchPathSection,
  isBranchSectionChain,
  isStatefulBranch,
  hasStructuralParam,
  someContentRead,
  isKnownChildNode,
} from "./structure";

// Stable wire/registry key for a fill: a register id for a program-wide fill
// ordinal built in section order so every output agrees.
const [getFillOrdinals] = createProgramState(() => {
  const ordinals = new Map<Binding, number>();
  forEachSection((section) => {
    forEach(getPatchFillBindings(section), (fill) => {
      ordinals.set(fill, ordinals.size);
    });
  });
  return ordinals;
});

export function getPatchFillKey(binding: Binding, content?: boolean) {
  const ordinal = getFillOrdinals().get(binding);
  if (ordinal === undefined) {
    throw new Error("Marko: a patch fill binding is missing its ordinal.");
  }
  const { markoOpts, opts } = getFile();
  return getTemplateId(
    markoOpts,
    opts.filename as string,
    "fill" + ordinal + (content ? "/content" : ""),
  );
}

// A fill that both a client join and withheld content call for refreshes the
// content under a key of its own: a patch writing the join's output sends that.
export function splitsContentFill(binding: Binding) {
  const conditions = getFillConditions(binding);
  return (
    !!conditions?.contents &&
    !!(conditions.joins || conditions.rebuilds || conditions.fills)
  );
}

// The template's fill bindings.
export function getPatchFillBindings(section: Section) {
  return bindingUtil.filter(section.bindings, isPatchFillBinding);
}

// A canonical root server value a patch can keep current (aliases never
// get ordinals; `$global` readers recompute from the re-shipped bag).
function isPatchRefreshableBinding(binding: Binding) {
  return (
    isPatch() &&
    getCanonicalBinding(binding) === binding &&
    isPatchWrittenSection(binding.section) &&
    hasParamOrGlobalSource(binding.sources) &&
    !binding.sources!.state &&
    (binding.type === BindingType.param ||
      binding.type === BindingType.derived ||
      (binding.type === BindingType.let && !binding.assignments))
  );
}

// A scope a flush writes into: a called body or content with params it creates from a shell,
// a boundary body, or branch or attribute tag `<for>` content outside stateful structure.
function isPatchWrittenSection(section: Section) {
  return (
    ((isCalledBody(section) ||
      (section.contentShell === true && !!section.params)) &&
      !inResumedStructure(section)) ||
    section.branch?.optional === false ||
    (section.boundaryContent === "catch" && !inResumedStructure(section)) ||
    ((!!section.branch?.optional || !!section.localClosures) &&
      isBranchPathSection(section) &&
      !isStatefulBranch(section))
  );
}

// A potential fill: a server-sourced value whose reads intersect client
// state; the server writes all, tree-shaking decides which apply.
export function isPatchFillBinding(binding: Binding) {
  return !!getPatchFill(binding);
}

// Why the binding fills: `true` unconditionally, the conditions its reads
// sit under, or unset when it is no fill.
function getPatchFill(binding: Binding): true | FillConditions | undefined {
  // State of a scope a patch may create (a branch body, a called body)
  // seeds through its fill signal — assigned state only (retention).
  if (
    isPatch() &&
    (isCalledBody(binding.section) ||
      isCreatableBody(binding.section) ||
      (!!binding.localOf && isBranchPathSection(binding.section))) &&
    // Flushes never create stateful branches, so their
    // state needs no seed fill.
    !isStatefulBranch(binding.section) &&
    getCanonicalBinding(binding) === binding &&
    (binding.sources?.state || !isCalledBody(binding.section))
  ) {
    if (binding.sources?.state) {
      // A `<let>` is its own state when assigned or seeded from its value.
      return binding.type === BindingType.let &&
        bindingUtil.has(binding.sources.state, binding)
        ? true
        : undefined;
    }
    // A local with no state source that a state join reads: its patch writes
    // it, refreshing a paired scope and seeding a fresh one.
    if (binding !== binding.section.params && isSeedableLocal(binding)) {
      return getFillReadKind(binding);
    }
  }
  // A rendered read (through any alias) the client must recompute: joined
  // with state, or inside structure the client may own.
  return isPatchRefreshableBinding(binding)
    ? getFillReadKind(binding)
    : undefined;
}

// A body a flush may create: a branch or boundary body on the branch path (a
// boundary's as it settles or rebuilds), or a `@catch` whose holes it writes.
export function isCreatableBody(section: Section) {
  return section.boundaryContent === "catch"
    ? !inResumedStructure(section)
    : !!section.branch && isBranchPathSection(section);
}

// A value a created scope gets from no other channel (a resumed one reads it
// from the document), unlike state, fills, writes and loop params.
export function isCreatedScopeSeed(binding: Binding) {
  const { section } = binding;
  return (
    isPatch() &&
    (binding.localOf
      ? createsElidedContent(section)
      : isCreatableBody(section) || isCalledBody(section)) &&
    binding.type !== BindingType.dom &&
    binding.type !== BindingType.global &&
    binding.type !== BindingType.constant &&
    !binding.sources?.state &&
    // A branch's own params arrive with its structure.
    !(isSectionParam(binding) && !binding.localOf && !seedsParam(binding)) &&
    // Neither a fill reaching its reads nor a write: a join fill's value
    // seeds the join's init.
    !fillsReads(binding) &&
    !hasPatchWriteReads(binding)
  );
}

// A param a created scope gets as a seed, as no structure brings it: a called
// body's, or a member of a `@catch`'s error its code joins with a caller's.
function seedsParam(binding: Binding) {
  const { section } = binding;
  return (
    isCalledBody(section) ||
    (section.boundaryContent === "catch" &&
      hasCallerParamSourceAt(findSlot(binding)?.reason, section))
  );
}

// Content a patch creates from its shell alone: no registered renderer brings
// the attribute tag `<for>` params its call site would pass.
function createsElidedContent(section: Section) {
  return section.contentShell === true && !getRendererReason(section);
}

// Why a binding fills: `true` unconditionally, or the run-time conditions
// its reads sit under (structure params rebuild, withholdable content).
export interface FillConditions {
  rebuilds?: SortedOpt<Sources>;
  joins?: SortedOpt<Sources>;
  // A nested member's fill re-runs the join: it fills under that member's group.
  fills?: SortedOpt<Sources>;
  contents?: SortedOpt<Section>;
}
export function getFillConditions(binding: Binding) {
  const fill = getPatchFill(binding);
  return fill === true ? undefined : fill;
}

// A kind reads reasons, so it is memoized only once they settle (after
// `solveReasons`, and at translate); a solve pass asks afresh.
const [getFillReadKinds] = createProgramState(() => ({
  memoized: isTranslate(),
  kinds: new Map<Binding, true | FillConditions | undefined>(),
}));

// Reasons have settled: each fill kind asked from here on holds.
export function memoizeFillReadKinds() {
  getFillReadKinds().memoized = true;
}

function getFillReadKind(binding: Binding): true | FillConditions | undefined {
  const { memoized, kinds } = getFillReadKinds();
  if (!memoized) return computeFillReadKind(binding);
  if (!kinds.has(binding)) kinds.set(binding, computeFillReadKind(binding));
  return kinds.get(binding);
}

function computeFillReadKind(
  binding: Binding,
): true | FillConditions | undefined {
  const calledBody = isCalledBody(binding.section);
  let conditions: FillConditions | undefined;
  for (const alias of binding.aliases) {
    // A property alias or rest fills on its own; a direct alias reads this.
    if (isDirectAlias(alias)) {
      const kind = getFillReadKind(alias);
      if (kind === true) return true;
      if (kind) conditions = mergeConditions(conditions, kind);
    }
  }
  for (const read of binding.reads.keys()) {
    // A spread's attributes still render; any other effect read outside
    // unpatched structure refreshes through the owner slot write.
    const effect = readsValuesOnResume(read);
    // A handler reads the slot at call time: the owner write keeps it
    // current with no registration to shake.
    if (effect && read.invokeOnly) continue;
    if (!effect) {
      const sources = getSourcesForRef(getReferencedBindings(read));
      if (sources?.state) return true;
      // A join whose other members a caller may pass client state,
      // dispatched from this scope; an `<await>` value re-fires no promise.
      const others =
        calledBody &&
        isBranchSectionChain(read.section, binding.section) &&
        !isBoundaryValueRead(read) &&
        getOtherInputs(sources, binding);
      if (others) {
        // A nested member's own fill (a loop row's, joined with state) also
        // re-runs the join, unless the join is a hole the flush fills itself.
        const fills = isFilledHole(read)
          ? undefined
          : reduce(getReferencedBindings(read), addNestedMemberFill);
        conditions = mergeConditions(conditions, { joins: others, fills });
      }
      // A join with a param of a body outside the binding's is computed where
      // the body's calls pass it: on the client for state, else by their bits.
      const passed =
        calledBody && getDefineCallSources(sources, binding.section);
      if (passed) {
        if (passed.state) return true;
        const passedOthers = getOtherInputs(
          mergeSources(passed, sources),
          binding,
        );
        if (passedOthers) {
          conditions = mergeConditions(conditions, { rebuilds: passedOthers });
        }
      }
    }
    // A `<define>` body reads as if at each tag rendering its var: a worklist
    // visits each call section once, so a recursive define reaches its own once.
    const readSections = new Set([read.section]);
    for (const readAt of readSections) {
      // No patch write reaches a skipped region: reads inside stateful
      // structure, or boundary content the client renders, promote to owner fills.
      let readSection: Section | undefined = readAt;
      let content: Section | undefined;
      while (readSection && readSection !== binding.section) {
        if (isStatefulBranch(readSection)) return true;
        if (readSection.boundaryContent) return true;
        // The nearest content a consumer renders (or withholds).
        if (!content && !readSection.branch && readSection.derives) {
          content = readSection;
        }
        if (readSection.callSections) {
          forEach(readSection.callSections, (callSection) => {
            readSections.add(callSection);
          });
          break;
        }
        readSection = readSection.parent;
      }
      if (effect) continue;
      // An `<await>` value re-fires no promise client-side: the boundary's
      // own flushes carry its settlement.
      if (
        content &&
        !isBoundaryValueRead(read) &&
        consumerMayWithhold(content)
      ) {
        conditions = mergeConditions(conditions, { contents: content });
      }
      if (!calledBody) continue;
      // Only structure rebuilt from OTHER caller params can leave this read
      // unfilled, as a caller's ownership bits decide at render; those of a
      // `<define>` body outside the binding's are what its calls pass.
      for (const chainSources of getParamRebuildChain(readAt) || []) {
        const passed = getDefineCallSources(chainSources, binding.section);
        if (passed?.state) return true;
        for (const sources of [chainSources, passed]) {
          if (
            hasCallerParamSourceAt(sources, binding.section) &&
            !sourcesInclude(sources!, binding)
          ) {
            conditions = mergeConditions(conditions, { rebuilds: sources });
          }
        }
      }
    }
  }
  return conditions;
}

// A closure's sources beside the params its reads in the section join it
// with that its own section cannot gate on: where a call passes those, the
// client computes the join.
export function getClosureReadSources(closure: Binding, section: Section) {
  let sources = closure.sources;
  for (const read of closure.reads.keys()) {
    if (read.section === section) {
      const params = bindingUtil.filter(
        getSourcesForRef(getReferencedBindings(read))?.param,
        (param) =>
          isCallerParamAt(param, section) &&
          !isSameOrAncestorSection(param.section, closure.section),
      );
      if (params) {
        sources = mergeSources(sources, createSources(undefined, params));
      }
    }
  }
  return sources;
}

// What the direct calls of `<define>` bodies outside `section` pass for their
// params among the sources, through each body a call sits in.
function getDefineCallSources(sources: Sources | undefined, section: Section) {
  let passed: Sources | undefined;
  // A worklist visits each body once, so a recursive define reaches its own once.
  const pending = [sources];
  const seen = new Set<Section>();
  for (let i = 0; i < pending.length; i++) {
    forEachParamGroup(pending[i]?.param, (body, params) => {
      if (
        isCalledBody(body) &&
        !isSameOrAncestorSection(body, section) &&
        !seen.has(body)
      ) {
        seen.add(body);
        const callSources = getBodyCallSources(body, params);
        passed = mergeSources(passed, callSources);
        pending.push(callSources);
      }
    });
  }
  return passed;
}

// What a `<define>` body's direct calls pass for `params`: the reasons of
// their param groups, which each call maps to its sources.
function getBodyCallSources(body: Section, params: ParamReasonGroup) {
  let sources: Sources | undefined;
  forEach(body.callSections, (callSection) => {
    forEach(callSection.slots, (slot) => {
      if (
        slot.kind === SlotKind.ParamGroup &&
        first(slot.group!).section === body &&
        bindingUtil.intersects(slot.group, params)
      ) {
        sources = mergeSources(sources, slot.reason);
      }
    });
  });
  return sources;
}

function addNestedMemberFill(fills: SortedOpt<Sources>, member: Binding) {
  return !isCalledBody(member.section) && isPatchFillBinding(member)
    ? sourcesUtil.add(fills, getSourcesForRef(member)!)
    : fills;
}

// Whether the sources' params include the binding or a value it is a
// property of (both reach the client together).
function sourcesInclude(sources: Sources, binding: Binding) {
  return someUpToAliasRoot(binding, isInParams, sources.param);
}

// The params a read joins besides the binding's own that a write in its
// section gates on: a caller passes each.
function getOtherInputs(sources: Sources | undefined, binding: Binding) {
  const others = bindingUtil.difference(
    bindingUtil.filter(sources?.param, (param) =>
      isCallerParamAt(param, binding.section),
    ),
    getSourcesForRef(binding)?.param,
  );
  return others && createSources(undefined, others);
}

// A fill keeping every client read current, through its declaration and
// closures; a join fill reaches its joins alone.
export function fillsReads(binding: Binding) {
  const fill = getPatchFill(binding);
  return fill === true || (!!fill && !isJoinFill(fill));
}

// A fill only a join's client-sourced members call for: otherwise the value is
// a write, and a created scope seeds it for the join's init.
function isJoinFill(conditions: FillConditions) {
  return !conditions.rebuilds && !conditions.contents;
}

// A fill reaching reads no client-rebuilt structure re-renders: always, or
// for withheld content alone.
function fillsUnrebuiltReads(binding: Binding) {
  const fill = getPatchFill(binding);
  return fill === true || (!!fill?.contents && !fill.rebuilds);
}

// Whether the consumer may withhold the content, as the runtime decides: client
// code renders it on its own, or client state reaches its structural params.
function consumerMayWithhold(content: Section) {
  const reason = getRendererReason(content);
  // Read unconditionally, its renderer renders wherever the consumer puts it
  // (a `@catch` on a client error, say), apart from any patch render.
  if (reason && isUnconditionalReason(reason)) return true;
  const consumer = content.derives!.tag;
  // A `<define>` var passed on (its direct tags classify on their own)
  // may reach any consumer, so the runtime decides.
  if (!isKnownTagExtra(consumer)) {
    return !!reason;
  }
  for (const { params, sources } of getParamGroupSources(consumer) || []) {
    if (
      hasStructuralParam(params) &&
      (sources?.state || getDefineCallSources(sources, content.program)?.state)
    ) {
      return true;
    }
  }
  return false;
}

// Content a known child renders only in its root, by a dynamic tag reading
// nothing else: it renders where its tag does, in its owner's patch context.
function rendersWithOwner(content: Section) {
  const { derives } = content;
  return (
    !!derives &&
    isKnownTagExtra(derives.tag) &&
    !isStatefulBranch(content) &&
    !someContentRead(derives.binding, derives.properties, rendersApart)
  );
}

// A read rendering the content in structure or beside other inputs, or using
// it any other way than passing it on.
function rendersApart(read: ReferencedExtra) {
  return read.rendersContent || read.nameOnly
    ? !!read.section.parent ||
        Array.isArray(getReferencedBindings(read.merged || read))
    : !read.derives;
}

// The read is an `<await>`'s value: its body is a boundary child of the
// read's section with the read as its branch expression.
function isBoundaryValueRead(read: ReferencedExtra) {
  return getBranchOf(read)?.branch?.optional === false;
}

function mergeConditions(
  a: FillConditions | undefined,
  b: FillConditions,
): FillConditions {
  return {
    rebuilds: sourcesUtil.union(a?.rebuilds, b.rebuilds),
    joins: sourcesUtil.union(a?.joins, b.joins),
    fills: sourcesUtil.union(a?.fills, b.fills),
    contents: sectionUtil.union(a?.contents, b.contents),
  };
}

// A refreshable value no fill always renders: a patch writes its accessor
// (`w`) so the effects and captures reading it stay current.
export function isPatchWriteBinding(binding: Binding) {
  return hasPatchWriteReads(binding) && getPatchFill(binding) !== true;
}

// A value a patch keeps current itself: a fill, or a write.
function isPatchFillOrWrite(binding: Binding) {
  return !!getPatchFill(binding) || hasPatchWriteReads(binding);
}

// A refreshable value effects or captures read.
function hasPatchWriteReads(binding: Binding) {
  return (
    isPatchRefreshableBinding(binding) &&
    (someAlias(binding, isRegisteredFnCapture, undefined, true) ||
      someAlias(binding, hasPatchEffectRead, undefined, true))
  );
}

// A called body's join params reach a created scope as seeds, never as
// arrivals: the flush runs each join whose output the client owns.
export function getCreatedJoins(section: Section) {
  let joins: Intersection[] | undefined;
  forEach(section.bindings, (binding) => {
    for (const read of binding.reads.keys()) {
      const refs = getReferencedBindings(read);
      if (
        read.section === section &&
        Array.isArray(refs) &&
        !joins?.includes(refs) &&
        section.intersections?.get(refs)?.id !== undefined &&
        initsCreatedJoin(section, refs)
      ) {
        (joins ||= []).push(refs);
      }
    }
  });
  return joins;
}

// State members arrive through their own fills, which run the join.
export function initsCreatedJoin(section: Section, intersection: Intersection) {
  const sources = getSourcesForRef(intersection);
  return (
    isPatch() &&
    (isCalledBody(section) || section.boundaryContent === "catch") &&
    !sources?.state &&
    hasCallerParamSourceAt(sources, section)
  );
}

// An effect read of a written value re-runs by register id when a patch
// changes what it saw; ask through `someAlias` (direct aliases only).
export function hasPatchEffectRead(binding: Binding) {
  for (const read of binding.reads.keys()) {
    if (readsValuesOnResume(read)) return true;
  }
  return false;
}

// A value a patch writes that an effect reads: the patch re-runs the effect.
export function hasPatchEffect(binding: Binding) {
  return (
    isPatchWriteBinding(binding) &&
    someAlias(binding, hasPatchEffectRead, undefined, true)
  );
}

// Whether a patch re-runs an effect that reads `binding` (its fill root).
export function rerunsEffectOnPatch(binding: Binding) {
  return hasPatchEffect(getCanonicalBinding(binding));
}

// Captured inside a function client code reads (registering it): its reads
// reach the live scope at any later invocation, so a patch keeps it fresh.
function isRegisteredFnCapture(binding: Binding) {
  for (const reads of binding.reads.values()) {
    if (some(reads, isRegisteredFnRead)) return true;
  }
  return false;
}

function isRegisteredFnRead(read: Read) {
  return !!read.fnRoot?.reason;
}

// Closures whose creation INITs render a fresh scope.
export function getCreateInitClosures(section: Section) {
  return bindingUtil.filter(section.referencedClosures, (closure) =>
    closureInitsCreated(closure, section),
  );
}

// Every member of a state join inits: the join fires once all arrive, and a
// created scope runs only registered inits. The reconciler sets constants.
export function closureInitsCreated(closure: Binding, section: Section) {
  return (
    closure.type !== BindingType.constant &&
    (!!closure.sources?.state || someReadIn(closure, section, isStateJoinRead))
  );
}

// An intersection joining the closure with state.
function isStateJoinRead(read: ReferencedExtra) {
  const refs = getReferencedBindings(read);
  return Array.isArray(refs) && !!getSourcesForRef(refs)?.state;
}

// A fill closure a state join in `section` reads: its init registers on a
// `_fill_join_*` wrapper, unless the chain leaves the branch ladder.
export function fillJoinsIn(closure: Binding, section: Section) {
  return (
    !closure.sources?.state &&
    isPatchFillBinding(closure) &&
    isBranchSectionChain(section, closure.section) &&
    someReadIn(closure, section, isStateJoinRead)
  );
}

// A closure one of the section's local fills with no state source derives
// from: when a flush withholds that write, a fresh scope re-derives by its init.
function isLocalFillClosure(section: Section, closure: Binding) {
  return (
    closure.section !== section &&
    some(
      section.bindings,
      (fill) =>
        !fill.sources?.state &&
        isInParams(closure, fill.sources?.param) &&
        isPatchFillBinding(fill),
    )
  );
}

// A `$global` source is fine, since the shipped value is current per flush;
// a constant (a loop key) is the reconciler's to set from the entry's keys.
function isSeedableLocal(binding: Binding) {
  return (
    binding.type !== BindingType.constant &&
    !binding.sources?.state &&
    (isSectionParam(binding) ||
      !!binding.localOf ||
      binding.type === BindingType.derived ||
      (binding.type === BindingType.let && !binding.assignments))
  );
}

// The section's own params or an alias of them: aliases take their root's
// type, which identifies only `param` ones (a loop item's is `derived`).
function isSectionParam(binding: Binding) {
  return binding.type === BindingType.param || isParamBinding(binding);
}

// Keyed `$global` reads a root section renders itself; effect-only reads
// see the live bag and need no signal.
export function getSectionGlobalReads(section: Section) {
  let globals: Opt<Binding>;
  if (isPatch()) {
    forEach(section.bindings, (binding) => {
      if (binding.type !== BindingType.global) return;
      // Setup renders the key's direct reads; intersections and functions
      // reading it join on their own.
      for (const read of binding.reads.keys()) {
        if (getReferencedBindings(read) === binding) {
          globals = push(globals, binding);
          break;
        }
      }
    });
  }
  return globals;
}

// Server-sourced reads a patch cannot keep current: param-sourced bindings
// a patch neither fills nor writes read stale after any patch render.
export function hasUnfillablePatchReads(refs: Opt<Binding>) {
  return some(refs, isUnfillablePatchRead);
}

// A `$global` join's unfillable reads in `section` but its caller params: the
// call site keeps those current wherever it hands them to the client.
export function hasUnfillableGlobalJoinReads(
  refs: Opt<Binding>,
  section: Section,
) {
  return some(
    refs,
    (binding) =>
      isUnfillablePatchRead(binding) &&
      !every(getSourcesForRef(binding)!.param, (param) =>
        isCallerParamAt(param, section),
      ),
  );
}

// The caller params a `$global` join reads unfilled: a changed key re-runs it
// only where the client owns them.
export function getCallerHeldSources(refs: ReferencedBindings) {
  return getSourcesForRef(bindingUtil.filter(refs, isUnfillablePatchRead));
}

function isUnfillablePatchRead(binding: Binding) {
  const sources = getSourcesForRef(binding);
  return !!sources?.param && !sources.global && !patchFills(binding);
}

// A patch fills a called body's value (a fill or a write), and a local
// derivation when it fills every server source (it recomputes client-side).
function patchFills(binding: Binding): boolean {
  const root = getCanonicalBinding(binding);
  if (isPatchFillOrWrite(root)) return true;
  if (isCalledBody(root.section)) return false;
  // A branch's own param (a loop item) arrives with the structure.
  if (isSectionParam(root)) return true;
  // Sources are params, which the checks above decide without recursing.
  return every(root.sources?.param, patchFills);
}

// Whether a patch may create this content: its tag can diverge, a consumer
// renders it in creatable structure, or an enclosing branch is created.
export const contentMayCreate = createCyclicMemo(
  (section: Section) =>
    sectionMayCreate(section) ||
    (!!section.parent && enclosingMayCreate(section.parent)),
  false,
);

// Whether any consumer's tag names this content in a patch entry (a
// boundary's shells name what they render); an unknown consumer may.
export const contentIsPatched = createCyclicMemo((section: Section) => {
  const { derives } = section;
  return (
    !derives ||
    someContentRead(derives.binding, derives.properties, isPatchedContentRead)
  );
}, false);

function isPatchedContentRead(read: ReferencedExtra) {
  return (
    isPatchedSite(read) ||
    !!read.section.boundaryContent ||
    read.section.branch?.optional === false
  );
}

function sectionMayCreate(section: Section): boolean {
  if (section.branch) {
    return section.branch.optional
      ? !inResumedStructure(section)
      : enclosingMayCreate(section);
  }
  if (section.branchExpr) {
    // A dynamic tag body: the tag re-renders it when its branch expression changes.
    return !isStableExpr(section.branchExpr) && !inResumedStructure(section);
  }
  const { derives } = section;
  // A known consumer decides by where it renders the content; an unknown
  // one may do anything.
  return (
    !derives ||
    someContentRead(derives.binding, derives.properties, readMayCreate)
  );
}

function readMayCreate(read: ReferencedExtra) {
  return enclosingMayCreate(read.section);
}

function enclosingMayCreate(section: Section): boolean {
  for (let cur: Section | undefined = section; cur; cur = cur.parent) {
    if (cur.branch?.optional) return !inResumedStructure(cur);
    if (cur.branchExpr || cur.derives) {
      return contentMayCreate(cur);
    }
  }
  // A caller may compose any template into its own shell (a lazy page
  // under a layout, a child in a branch), so its root may be created.
  return true;
}

// A branch or boundary body that ships a shell, or content whose shell a
// patch may create (a shell kept only for reference never creates).
export function patchCreates(section: Section) {
  return (
    isPatch() &&
    (!!section.branch ||
      (section.contentShell === true && contentMayCreate(section))) &&
    !inResumedStructure(section) &&
    !sectionHasServerEffect(section)
  );
}

// A closure whose init a created scope may run registers it on its closure
// get; a fill a state join reads registers on the join (`_shell_join`).
export function createsWithInit(section: Section, closure: Binding) {
  return (
    patchCreates(section) &&
    (keepsInit(section, closure) || subscribesCreated(section, closure))
  );
}

// Inits a flush may name whatever client code reaches their signal.
export function keepsInit(section: Section, closure: Binding) {
  return (
    (closureInitsCreated(closure, section) && !fillJoinsIn(closure, section)) ||
    isLocalFillClosure(section, closure)
  );
}

// A caller param a created content scope reads subscribes by its init, which
// the flush runs where the param is client-sourced; other inits own the id.
export function subscribesCreated(section: Section, closure: Binding) {
  return (
    isDynamicClosure(section, closure) &&
    closure.type !== BindingType.constant &&
    !closure.sources?.state &&
    !closureInitsCreated(closure, section) &&
    !isLocalFillClosure(section, closure) &&
    hasCallerParamSourceAt(closure.sources, section)
  );
}

// An effect read the wire cannot keep current blocks creation; fills,
// wire writes and direct `$global` reads stay current.
export function sectionHasServerEffect(section: Section) {
  const hasServerEffect = (binding: Binding) =>
    someReadIn(binding, section, isServerEffectRead);
  return (
    some(section.bindings, hasServerEffect) ||
    some(section.referencedClosures, hasServerEffect)
  );
}

function isServerEffectRead(read: ReferencedExtra) {
  return (
    readsValuesOnResume(read) &&
    hasUnfillablePatchReads(getReferencedBindings(read))
  );
}

// A fill needs a subscriber where no join dispatch reaches the read, or in
// boundary content, which may resume after a patch render and must catch up.
export function fillSubscribes(closure: Binding, section: Section) {
  return (
    // Client-rebuilt structure's own render code keeps the subscriber.
    fillsUnrebuiltReads(closure) &&
    (closureCarriesFill(closure, section) ||
      (inBoundaryBody(section, closure.section) &&
        hasFilledRead(closure, section)))
  );
}

// The closure's own signal carries a fill to the section's reads: a lone
// read, or a join inside stateful structure, which no join dispatch reaches.
export function closureCarriesFill(closure: Binding, section: Section) {
  return (
    hasLoneRead(closure, section) ||
    (inStatefulBranch(section) && hasFilledRead(closure, section))
  );
}

// A read of the binding (or a direct alias, as an alias never fills on its
// own) in the section that renders through the closure itself, not a join.
function hasLoneRead(binding: Binding, section: Section) {
  return someAlias(
    binding,
    (alias) => someReadIn(alias, section, isLoneRead),
    undefined,
    true,
  );
}

// A lone read, or an intersection member whose chain leaves the branch
// ladder, renders through the closure itself (over-counting is safe).
function hasFilledRead(binding: Binding, section: Section) {
  return (
    hasLoneRead(binding, section) ||
    (!isBranchSectionChain(section, binding.section) &&
      someAlias(
        binding,
        (alias) => someReadIn(alias, section, isClosureRead),
        undefined,
        true,
      ))
  );
}

function isLoneRead(read: ReferencedExtra) {
  return isClosureRead(read) && !Array.isArray(getReferencedBindings(read));
}

// A script (not a handler) inside the section re-runs from the closure.
function isClosureRead(read: ReferencedExtra) {
  return !readsValuesOnResume(read) || !read.invokeOnly;
}

function inBoundaryBody(section: Section, owner: Section) {
  for (let cur = section; cur !== owner; cur = cur.parent!) {
    if (cur.branch?.optional === false) return true;
  }
  return false;
}

// Whether every hop to `owner` dispatches from the owner scope: branches
// always; inside unpatched structure, content sections too (lexical owners).
export function isBranchChainTo(section: Section, owner: Section) {
  const stateful = inStatefulBranch(section) || inContentSection(section);
  for (let cur = section; cur !== owner; cur = cur.parent) {
    if ((!cur.branch && !cur.boundaryContent && !stateful) || !cur.parent) {
      return false;
    }
  }
  return true;
}

// Whether the section is content a consumer (or a `<try>`) renders, inclusive:
// the consumer may withhold it, so server values inside register their fills.
export function inContentSection(section: Section | undefined) {
  for (let cur = section; cur?.parent; cur = cur.parent) {
    if (!cur.branch && (cur.derives || cur.boundaryContent)) return true;
  }
  return false;
}

// When a server source changes, `false` unless a patch fills every client read
// of `binding`, else the rebuilds that leave one unfilled (a fill partner's).
export function patchFillsClientReads(binding: Binding) {
  return findUnfilledRebuilds(binding, true, false, new Set());
}

// The same for a closure's subscribers: one in content or a created scope
// subscribes in its own render context, which its owner cannot test.
export function patchFillsSubscribedReads(binding: Binding) {
  return findUnfilledRebuilds(binding, false, false, new Set());
}

// `throughCreated` counts content and created scopes as reading the closure
// from their owner; `inFunction` marks a function reading the original value.
function findUnfilledRebuilds(
  binding: Binding,
  throughCreated: boolean,
  inFunction: boolean,
  seen: Set<Binding>,
): SortedOpt<Sources> | false {
  if (seen.has(binding)) return;
  seen.add(binding);
  let rebuilds: SortedOpt<Sources>;
  for (const [read, reads] of binding.reads) {
    // Resumed code reads the slot whenever it runs, as does a function the
    // value holds wherever a tag retains it or a callee takes it.
    const readInFunction = inFunction || some(reads, isFnRead);
    if (
      isResumedRead(read) ||
      ((read.retained || read.callSiteExprs) && readInFunction)
    ) {
      return false;
    }
    // Content renders client side wherever its tag puts it, and a created
    // scope on the way may init the closure from its owner.
    for (
      let section: Section | undefined = read.section;
      section && section !== binding.section;
      section = section.parent
    ) {
      if (
        (!section.branch && !rendersWithOwner(section)) ||
        closureInitsCreated(binding, section) ||
        isLocalFillClosure(section, binding)
      ) {
        if (!throughCreated) return false;
        rebuilds = sourcesUtil.union(
          rebuilds,
          getSourcesForRef(getReferencedBindings(read)),
        );
        break;
      }
    }
    const refs = getReferencedBindings(read);
    if (Array.isArray(refs)) {
      const filledHole = isFilledHole(read);
      for (const ref of refs) {
        const partner = getCanonicalBinding(ref);
        if (partner === binding) continue;
        const fill = getPatchFill(partner);
        if (fill) {
          // A partner's fill re-runs the join client side, unless the flush
          // fills the join's hole itself.
          if (!filledHole && (fill === true || fill.contents || fill.fills)) {
            return false;
          }
          if (fill !== true) {
            rebuilds = sourcesUtil.union(
              sourcesUtil.union(rebuilds, fill.rebuilds),
              fill.joins,
            );
          }
        }
        // A caller param fills where its call's ownership bits say, at render.
        if (hasCallerParamSource(partner.sources)) {
          rebuilds = sourcesUtil.add(
            rebuilds,
            getSourcesForRef(getReferencedBindings(read))!,
          );
        }
      }
    }
    // A callee keeps its own copy of what a call site passes it.
    if (
      !read.callSiteExprs &&
      some(read.derives, (derived) => {
        const more =
          derived.section.program === binding.section.program &&
          findUnfilledRebuilds(derived, throughCreated, readInFunction, seen);
        if (more === false) return true;
        rebuilds = sourcesUtil.union(rebuilds, more);
        return false;
      })
    ) {
      return false;
    }
  }
  for (const alias of binding.aliases) {
    const more = findUnfilledRebuilds(alias, throughCreated, inFunction, seen);
    if (more === false) return false;
    rebuilds = sourcesUtil.union(rebuilds, more);
  }
  for (const alias of binding.propertyAliases.values()) {
    const more = findUnfilledRebuilds(alias, throughCreated, inFunction, seen);
    if (more === false) return false;
    rebuilds = sourcesUtil.union(rebuilds, more);
  }
  return rebuilds;
}

function isFnRead(read: Read) {
  return !!read.fnRoot;
}

// A read resumed code renders wherever its scope sits, so no patch fills it
// and a change to the owner value must dispatch to it.
export function isResumedRead(read: ReferencedExtra) {
  return (
    readsValuesOnResume(read) ||
    !!getSourcesForRef(getReferencedBindings(read))?.state ||
    inResumedStructure(read.section)
  );
}

// What a section's patch output needs as its reasons settle: the patchers its
// fills take, and what its known children make of its params.
export function recordPatchFacts(section: Section) {
  forEach(section.bindings, (binding) => {
    // A fill entry needs its patcher on every page this template renders
    // into; one only client-rebuilt structure or a join needs rides the call site's.
    if (fillsUnrebuiltReads(binding)) linkRuntimeFeature("patches/value");
  });
  recordKnownTagPatchFacts(section);
}

// A patch asks who feeds what it writes: each value it fills or writes, each
// join it runs and each expression a node renders.
export function ensurePatchReasonGroups(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  forEach(section.bindings, (binding) => {
    if (isPatchFillOrWrite(binding)) {
      ensureCallerParamGroups(getSourcesForRef(binding));
    }
    // A created scope's `<let>` seeds by who feeds its init.
    if (binding.type === BindingType.let && binding.derivedFrom) {
      ensureCallerParamGroups(
        getSourcesForExpr(binding.derivedFrom as t.NodeExtra),
      );
    }
  });
  // Created joins run by group, and a page ships a patch-filled join's
  // members by it.
  for (const join of intersections || []) {
    ensureCallerParamGroups(getSourcesForRef(join));
  }
  forEach(section.slots, ensureWriteGroups);
  forEach(section.slots, ensureUnfilledWriteGroups);
  ensureKnownTagPatchGroups(section);
}

// A page writes a value a patch fills (and its closure set) only where a
// client feed leaves a read unfilled, by the groups of the reads' rebuilds.
function ensureUnfilledWriteGroups(slot: Slot) {
  if (
    (slot.kind === SlotKind.Value || slot.kind === SlotKind.ClosureScopes) &&
    slot.owner.type !== BindingType.dom &&
    isConditionalReason(slot.reason)
  ) {
    forEach(
      (slot.kind === SlotKind.Value
        ? patchFillsClientReads
        : patchFillsSubscribedReads)(slot.owner) || undefined,
      ensureCallerParamGroups,
    );
  }
}

// A patch writes what a node renders or a branch expression picks; handlers
// are attached, and a known child's inputs are its own params.
function ensureWriteGroups(slot: Slot) {
  if (
    slot.kind === SlotKind.BranchExpr ||
    (slot.kind === SlotKind.Value &&
      slot.owner.type === BindingType.dom &&
      !isKnownChildNode(slot.owner))
  ) {
    forEach(slot.reasonExprs, ensureExprWriteGroups);
  }
}

function ensureExprWriteGroups(expr: t.NodeExtra) {
  if (!expr.consumed) ensureCallerParamGroups(getWriteSources(expr));
}

// Before reasons settle: setup renders a section's keyed `$global` reads.
export function finalizePatchRootReasons() {
  forEachSection((section) => {
    if (getSectionGlobalReads(section)) addSetupWork(section);
  });
}

// A created scope's seeds (content's once its shell is built) arrive as writes
// and may carry registrations, which bind by id: `patches/bind` brings both.
export function linkPatchSeedBinds() {
  forEachSection((section) => {
    forEach(section.bindings, (binding) => {
      if (isCreatedScopeSeed(binding) && findSlot(binding)?.reason) {
        linkRuntimeFeature("patches/bind");
      }
    });
  });
}
