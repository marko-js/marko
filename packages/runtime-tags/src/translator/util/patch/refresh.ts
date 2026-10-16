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
import { createCyclicMemo, createProgramCyclicMemo } from "../cyclic-memo";
import { readsValuesOnResume } from "../finalize-references";
import {
  ensureKnownTagPatchGroups,
  getParamGroupSources,
  isKnownTagExtra,
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
import {
  type Section,
  ensureCallerParamGroups,
  forEachParamGroup,
  forEachSection,
  getRendererReason,
  isKnownChild,
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
  catchSetupRenders,
  getBranchOf,
  patchWrites,
  patchWritesScope,
  hasStructuralParam,
  someContentRead,
  isKnownChildNode,
  inStatefulBranch,
  isStatefulBranch,
  getCallerOwnedStructure,
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

// The template's fill bindings.
export function getPatchFillBindings(section: Section) {
  return bindingUtil.filter(section.bindings, isPatchFillBinding);
}

// A canonical root server value a patch sends to keep it current (aliases
// never get ordinals; `$global` readers recompute from the re-shipped bag).
function isPatchSent(binding: Binding) {
  return (
    isPatch() &&
    getCanonicalBinding(binding) === binding &&
    hasParamOrGlobalSource(binding.sources) &&
    !binding.sources!.state &&
    (binding.type === BindingType.param ||
      binding.type === BindingType.derived ||
      (binding.type === BindingType.let && !binding.assignments))
  );
}

// A potential fill: a server-sourced value whose reads intersect client
// state; the server writes all, tree-shaking decides which apply.
function isPatchFillBinding(binding: Binding) {
  return !!getPatchFill(binding).fill;
}

// Content with params a flush creates from its shell, whose scope it writes
// too: `buildShells` decides which ship, once reasons settle.
function isWrittenContentShell(section: Section) {
  return (
    section.contentShell === true && !!section.params && patchWrites(section)
  );
}

// A value's fill, derived in each stage (afresh each solve pass): what its reads
// need, how a patch fills them, and what recomputing it needs of its inputs.
export interface PatchFill {
  kind?: true | FillConditions;
  fill?: true | FillConditions;
  fillsReads?: boolean;
  fillsWithoutStructure?: boolean;
  splitsContent?: boolean;
  derivedNeeds?: true | FillConditions;
  effectRead?: boolean;
  writeReads?: boolean;
  ownRegistration?: boolean;
}

// What a patch writes and seeds, asked once shells are built.
export interface PatchWrite {
  write?: boolean;
  effect?: boolean;
  seed?: boolean;
  unfillable?: boolean;
}

const UNREAD: PatchFill & PatchWrite = {};

// Fills read the reasons of the moment, so each solve pass asks afresh; a
// value re-asked within its own answer (a recursive `<define>`) is unread.
export const [getPatchFill, resetPatchFills] = createProgramCyclicMemo(
  computePatchFill,
  UNREAD,
);

export const [getPatchWrite] = createProgramCyclicMemo(
  computePatchWrite,
  UNREAD,
);

function computePatchFill(binding: Binding): PatchFill {
  const kind = computeFillReadKind(binding);
  const effectRead = someAlias(binding, hasPatchEffectRead, undefined, true);
  const fnCapture = someAlias(binding, isRegisteredFnCapture, undefined, true);
  const fillable = canPatchFill(binding);
  // A rendered read (through any alias) the client must recompute: joined
  // with state, or inside structure the client may own.
  const fill = fillable ? (binding.sources?.state ? true : kind) : undefined;
  const conditions = fill === true ? undefined : fill;
  let derivedNeeds: PatchFill["derivedNeeds"];
  // The client recomputes a value no patch can fill from what it derives
  // from, wherever its reads, effects and functions (or a part's) need it.
  if (!fillable) {
    derivedNeeds = effectRead || fnCapture || kind;
    for (const part of binding.propertyAliases.values()) {
      derivedNeeds = mergeKinds(derivedNeeds, getPatchFill(part).derivedNeeds);
    }
  }
  return {
    kind,
    fill,
    // Every client read stays current, through its declaration and closures;
    // a fill only client-sourced join members call for reaches its joins alone.
    fillsReads:
      fill === true || !!(conditions?.structure || conditions?.contents),
    // No caller-owned structure re-renders its reads: always, or for
    // withheld content alone.
    fillsWithoutStructure:
      fill === true || (!!conditions?.contents && !conditions.structure),
    // A client join and withheld content both call for it: it refreshes the
    // content under a key of its own, which a patch writing the join sends.
    splitsContent:
      !!conditions?.contents &&
      !!(conditions.joins || conditions.structure || conditions.fills),
    derivedNeeds,
    effectRead,
    // A value a patch sends that effects or captures read: written where a
    // flush writes its scope.
    writeReads: isPatchSent(binding) && (effectRead || fnCapture),
    // Only the patch's key reaches the declaration: a `<let>` nothing assigns
    // (its seed), or a template input's value with reads its signal alone reaches.
    ownRegistration:
      !!fill &&
      (binding.sources?.state
        ? !binding.assignments &&
          bindingUtil.has(binding.sources.state, binding)
        : !binding.section.parent && hasDeclarationOnlyReads(binding)),
  };
}

// A value a patch fills where its reads call for it: state or a local of a
// scope a patch may create, or a server value a patch keeps current.
export function canPatchFill(binding: Binding) {
  // State of a scope a flush writes, and so may create, seeds through its
  // fill signal — assigned state only (retention).
  if (
    patchWritesScope(binding.section) &&
    getCanonicalBinding(binding) === binding &&
    (binding.sources?.state || !isKnownChild(binding.section))
  ) {
    if (binding.sources?.state) {
      // A `<let>` is its own state when assigned or seeded from its value.
      return (
        binding.type === BindingType.let &&
        bindingUtil.has(binding.sources.state, binding)
      );
    }
    // A local with no state source that a state join reads: its patch writes
    // it, refreshing a paired scope and seeding a fresh one.
    if (binding !== binding.section.params && isSeedableLocal(binding)) {
      return true;
    }
  }
  return isPatchSent(binding) && patchWritesScope(binding.section);
}

// A value a created scope gets from no other channel (a resumed one reads it
// from the document), unlike state, fills, writes and loop params.
function seedsCreatedScope(binding: Binding) {
  const { section } = binding;
  return (
    (binding.localOf
      ? createsElidedContent(section)
      : patchWritesScope(section)) &&
    binding.type !== BindingType.dom &&
    binding.type !== BindingType.global &&
    binding.type !== BindingType.constant &&
    !binding.sources?.state &&
    // A branch's own params arrive with its structure.
    !(isSectionParam(binding) && !binding.localOf && !seedsParam(binding)) &&
    // Neither a fill reaching its reads nor a write: a join fill's value
    // seeds the join's init.
    !getPatchFill(binding).fillsReads &&
    !isPatchWritten(binding) &&
    !catchSetupRenders(section, binding.sources)
  );
}

// A param a created scope gets as a seed, as no structure brings it: a known
// child's, or a member of a `@catch`'s error its code joins with a caller's.
function seedsParam(binding: Binding) {
  const { section } = binding;
  return (
    isKnownChild(section) ||
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
// its reads sit under (caller-owned structure, withholdable content).
export interface FillConditions {
  structure?: SortedOpt<Sources>;
  joins?: SortedOpt<Sources>;
  // A nested member's fill re-runs the join: it fills under that member's group.
  fills?: SortedOpt<Sources>;
  contents?: SortedOpt<Section>;
}

function computeFillReadKind(
  binding: Binding,
): true | FillConditions | undefined {
  const knownChild = isKnownChild(binding.section);
  let conditions: FillConditions | undefined;
  for (const alias of binding.aliases) {
    // A property alias or rest fills on its own; a direct alias reads this.
    if (isDirectAlias(alias)) {
      const { kind } = getPatchFill(alias);
      if (kind === true) return true;
      if (kind) conditions = mergeConditions(conditions, kind);
    }
  }
  // A known child that is itself stateful structure renders every read from
  // what its calls pass, on the client.
  if (knownChild && isStatefulBranch(binding.section)) {
    return true;
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
      const derived = getDerivedNeeds(read);
      if (derived === true) return true;
      if (derived) conditions = mergeConditions(conditions, derived);
      // A join whose other members a caller may pass client state,
      // dispatched from this scope; an `<await>` value re-fires no promise.
      const others =
        knownChild &&
        read.section.enclosing.nonOptionalAncestor ===
          binding.section.enclosing.nonOptionalAncestor &&
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
        knownChild && getDefineCallSources(sources, binding.section);
      if (passed) {
        if (passed.state) return true;
        const passedOthers = getOtherInputs(
          mergeSources(passed, sources),
          binding,
        );
        if (passedOthers) {
          conditions = mergeConditions(conditions, { structure: passedOthers });
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
      if (!knownChild) continue;
      // Only caller-owned structure of OTHER caller params can leave this read
      // unfilled, as a caller's ownership bits decide at render; those of a
      // `<define>` body outside the binding's are what its calls pass.
      for (const chainSources of getCallerOwnedStructure(readAt) || []) {
        const passed = getDefineCallSources(chainSources, binding.section);
        if (passed?.state) return true;
        for (const sources of [chainSources, passed]) {
          if (
            hasCallerParamSourceAt(sources, binding.section) &&
            !sourcesInclude(sources!, binding)
          ) {
            conditions = mergeConditions(conditions, { structure: sources });
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

// Reads only the declaration's own signal reaches: an effect in its section,
// or another known child's param the client recomputes from it.
function hasDeclarationOnlyReads(binding: Binding) {
  for (const read of binding.reads.keys()) {
    if (
      readsValuesOnResume(read)
        ? !read.invokeOnly && read.section === binding.section
        : some(
            read.derives,
            (derived) =>
              derived.section !== binding.section &&
              isKnownChild(derived.section),
          ) && getDerivedNeeds(read)
    ) {
      return true;
    }
  }
  return false;
}

// What client code needs of the values derived at the read that no patch can
// fill, which recompute from it; a callee keeps its own copy of what a call passes.
function getDerivedNeeds(read: ReferencedExtra) {
  return reduce(read.derives, (kind: PatchFill["derivedNeeds"], derived) =>
    derived.section.program === read.section.program
      ? mergeKinds(kind, getPatchFill(derived).derivedNeeds)
      : kind,
  );
}

function mergeKinds(
  a: true | FillConditions | undefined,
  b: true | FillConditions | undefined,
) {
  return a === true || b === true
    ? true
    : a && b
      ? mergeConditions(a, b)
      : a || b;
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
        isKnownChild(body) &&
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
  return !isKnownChild(member.section) && getPatchFill(member).fill
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
    structure: sourcesUtil.union(a?.structure, b.structure),
    joins: sourcesUtil.union(a?.joins, b.joins),
    fills: sourcesUtil.union(a?.fills, b.fills),
    contents: sectionUtil.union(a?.contents, b.contents),
  };
}

// A known child's join params reach a created scope as seeds, never as
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
    (isKnownChild(section) || section.boundaryContent === "catch") &&
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

// Whether a patch re-runs an effect that reads `binding` (its fill root).
export function rerunsEffectOnPatch(binding: Binding) {
  return !!getPatchWrite(getCanonicalBinding(binding)).effect;
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
// `_fill_join_*` wrapper, unless the chain passes a non-optional section.
export function fillJoinsIn(closure: Binding, section: Section) {
  return (
    !closure.sources?.state &&
    !!getPatchFill(closure).fill &&
    section.enclosing.nonOptionalAncestor ===
      closure.section.enclosing.nonOptionalAncestor &&
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
        !!getPatchFill(fill).fill,
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

// Server-sourced reads a patch cannot keep current: param-sourced bindings
// a patch neither fills nor writes read stale after any patch render.
function isUnfillablePatchRead(binding: Binding) {
  return !!getPatchWrite(binding).unfillable;
}

// A patch fills a known child's value (a fill or a write), and a local
// derivation when it fills every server source (it recomputes client-side).
function patchFills(binding: Binding): boolean {
  const root = getCanonicalBinding(binding);
  if (getPatchFill(root).fill || isPatchWritten(root)) return true;
  if (isKnownChild(root.section)) return false;
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
      ? patchWrites(section)
      : enclosingMayCreate(section);
  }
  if (section.branchExpr) {
    // A dynamic tag body: the tag re-renders it when its branch expression changes.
    return !isStableExpr(section.branchExpr) && patchWrites(section);
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
    if (cur.branch?.optional) return patchWrites(cur);
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
    patchWrites(section) &&
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
    some(getReferencedBindings(read), isUnfillablePatchRead)
  );
}

// A fill needs a subscriber where no join dispatch reaches the read, or in
// boundary content, which may resume after a patch render and must catch up.
export function fillSubscribes(closure: Binding, section: Section) {
  return (
    // Caller-owned structure's own render code keeps the subscriber.
    getPatchFill(closure).fillsWithoutStructure &&
    (closureCarriesFill(closure, section) ||
      (section.enclosing.boundaryBody !==
        closure.section.enclosing.boundaryBody &&
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

// A lone read, or an intersection member whose chain passes a non-optional
// section, renders through the closure itself (over-counting is safe).
function hasFilledRead(binding: Binding, section: Section) {
  return (
    hasLoneRead(binding, section) ||
    (section.enclosing.nonOptionalAncestor !==
      binding.section.enclosing.nonOptionalAncestor &&
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

// On a server source change, `false` unless a patch fills every client read of
// `binding`, else the caller-owned structure leaving one unfilled (a fill partner's).
export function patchFillsClientReads(binding: Binding) {
  return findUnfilledStructure(binding, true, false, new Set());
}

// The same for a closure's subscribers: one in content or a created scope
// subscribes in its own render context, which its owner cannot test.
export function patchFillsSubscribedReads(binding: Binding) {
  return findUnfilledStructure(binding, false, false, new Set());
}

// `throughCreated` counts content and created scopes as reading the closure
// from their owner; `inFunction` marks a function reading the original value.
function findUnfilledStructure(
  binding: Binding,
  throughCreated: boolean,
  inFunction: boolean,
  seen: Set<Binding>,
): SortedOpt<Sources> | false {
  if (seen.has(binding)) return;
  seen.add(binding);
  let structure: SortedOpt<Sources>;
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
        structure = sourcesUtil.union(
          structure,
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
        const { fill } = getPatchFill(partner);
        if (fill) {
          // A partner's fill re-runs the join client side, unless the flush
          // fills the join's hole itself.
          if (!filledHole && (fill === true || fill.contents || fill.fills)) {
            return false;
          }
          if (fill !== true) {
            structure = sourcesUtil.union(
              sourcesUtil.union(structure, fill.structure),
              fill.joins,
            );
          }
        }
        // A caller param fills where its call's ownership bits say, at render.
        if (hasCallerParamSource(partner.sources)) {
          structure = sourcesUtil.add(
            structure,
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
          findUnfilledStructure(derived, throughCreated, readInFunction, seen);
        if (more === false) return true;
        structure = sourcesUtil.union(structure, more);
        return false;
      })
    ) {
      return false;
    }
  }
  for (const alias of binding.aliases) {
    const more = findUnfilledStructure(alias, throughCreated, inFunction, seen);
    if (more === false) return false;
    structure = sourcesUtil.union(structure, more);
  }
  for (const alias of binding.propertyAliases.values()) {
    const more = findUnfilledStructure(alias, throughCreated, inFunction, seen);
    if (more === false) return false;
    structure = sourcesUtil.union(structure, more);
  }
  return structure;
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
    !patchWrites(read.section) ||
    !!getDerivedNeeds(read)
  );
}

// A patch asks who feeds what it writes: each value it fills or writes, each
// join it runs and each expression a node renders.
export function ensurePatchReasonGroups(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  forEach(section.bindings, (binding) => {
    const { fill, writeReads } = getPatchFill(binding);
    if (fill || (writeReads && patchWritesScope(binding.section))) {
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
// client feed leaves a read unfilled, by the groups of its caller-owned structure.
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

// A created scope's seed a flush writes; a registration it carries binds by
// what its own module imports.
export function writesSeed(binding: Binding) {
  return !!getPatchWrite(binding).seed && !!findSlot(binding)?.reason;
}

// Each write (content's once its shell ships), seed and unfillable read, once
// shells are built.
function computePatchWrite(binding: Binding): PatchWrite {
  const write = isPatchWritten(binding);
  const sources = getSourcesForRef(binding);
  return {
    write,
    effect: write && getPatchFill(binding).effectRead,
    seed: seedsCreatedScope(binding),
    unfillable: !!sources?.param && !sources.global && !patchFills(binding),
  };
}

// A value a patch sends that effects or captures read, in a scope a flush
// writes, that no fill always renders.
function isPatchWritten(binding: Binding) {
  const { fill, writeReads } = getPatchFill(binding);
  return (
    fill !== true &&
    !!writeReads &&
    (patchWritesScope(binding.section) ||
      isWrittenContentShell(binding.section))
  );
}
