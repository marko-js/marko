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
  isStateSourced,
  isDirectAlias,
  isParamBinding,
  type ParamBinding,
  type ReferencedBindings,
  someAlias,
  someUpToAliasRoot,
  someReadIn,
} from "../bindings";
import { createAnalysisMemo } from "../cyclic-memo";
import { readsValuesOnResume } from "../finalize-references";
import {
  derivesConstantInput,
  ensureKnownTagPatchGroups,
  getParamGroupSources,
  isKnownTagExtra,
  someCallPasses,
} from "../known-tag";
import { isPage, isPatch } from "../marko-config";
import {
  every,
  first,
  forEach,
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
  isReferencedExtra,
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
import {
  createsFromRenderer,
  shipsContentShell,
  shipsShellInits,
} from "../shell";
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
import { createAnalysisState } from "../state";
import { getWriteSources, isFilledHole, isStableExpr } from "./decisions";
import {
  catchSetupRenders,
  patchWrites,
  hasStructuralParam,
  someContentRead,
  isKnownChildNode,
  inStatefulBranch,
  isStatefulBranch,
  getCallerOwnedStructure,
  calleeKeepsInput,
  getStatefulConsumers,
  isStatefulLeaf,
} from "./structure";

// Stable wire/registry key for a fill: a register id for a template-wide fill
// ordinal, built once per analysis in section order, which every output reads.
const [getFillOrdinals] = createAnalysisState(() => {
  const ordinals = new Map<Binding, number>();
  forEachSection((section) => {
    forEach(section.bindings, (binding) => {
      const { fill, unpatchedJoins } = getPatchFill(binding);
      if (fill || unpatchedJoins) ordinals.set(binding, ordinals.size);
    });
  });
  return ordinals;
});

export function getPatchFillKey(
  binding: Binding,
  split?: "content" | "unpatched",
) {
  const ordinal = getFillOrdinals().get(binding);
  if (ordinal === undefined) {
    throw new Error("Marko: a patch fill binding is missing its ordinal.");
  }
  const { markoOpts, opts } = getFile();
  return getTemplateId(
    markoOpts,
    opts.filename as string,
    "fill" + ordinal + (split ? "/" + split : ""),
  );
}

// The template's fill bindings.
export function getPatchFillBindings(section: Section) {
  return bindingUtil.filter(section.bindings, isPatchFillBinding);
}

// A canonical root server value a patch sends to keep it current (aliases
// never get ordinals; `$global` readers re-read the re-shipped bag).
function isPatchSent(binding: Binding) {
  return (
    isPatch() &&
    getCanonicalBinding(binding) === binding &&
    hasParamOrGlobalSource(binding.sources) &&
    !binding.sources!.state &&
    (binding.type === BindingType.param ||
      binding.type === BindingType.derived ||
      (binding.type === BindingType.let && !binding.assignments)) &&
    !derivesLocals(binding.section)
  );
}

// Content a flush creates from its shell with no params or local closures
// derives its locals from its closures: a patch neither fills nor sends them.
function derivesLocals(section: Section) {
  return (
    !section.params && !section.localClosures && shipsContentShell(section)
  );
}

// A potential fill: a server-sourced value whose reads intersect client
// state; the server writes all, tree-shaking decides which apply.
function isPatchFillBinding(binding: Binding) {
  return !!getPatchFill(binding).fill;
}

// A value's fill, derived once per analysis (afresh each solve pass): what its reads
// need, how a patch fills them, and what deriving it needs of its inputs.
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
  joinWrites?: SortedOpt<Sources>;
  joinFill?: Intersection;
  unpatchedOnly?: boolean;
  unpatchedJoins?: Intersection[];
  unpatchedStructure?: true | FillConditions;
  unpatchedSections?: SortedOpt<Section>;
}

// The fill's conditions hold only where the structure is the client's (withheld
// content aside where it refreshes under a key of its own).
function holdsWithin(
  conditions: FillConditions | undefined,
  structure: SortedOpt<Sources>,
  splitsContent?: boolean,
) {
  return (
    !!conditions &&
    !conditions.fills &&
    (!conditions.contents || !!splitsContent) &&
    sourcesUtil.isSuperset(
      structure,
      sourcesUtil.union(
        sourcesUtil.union(conditions.structure, conditions.joins),
        conditions.writes,
      ),
    )
  );
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
export const [getPatchFill, resetPatchFills] = createAnalysisMemo(
  computePatchFill,
  UNREAD,
);

// Every patch memo a solve pass's reasons feed, so each pass asks afresh.
export function resetPatchPass() {
  resetPatchFills();
  resetFillReadKinds();
  resetJoinInits();
  resetWrittenJoins();
  resetBodyCalls();
  resetClosureInits();
}

export const [getPatchWrite] = createAnalysisMemo(computePatchWrite, UNREAD);

function computePatchFill(binding: Binding): PatchFill {
  const read = getFillReadKind(binding);
  const { kind } = read;
  const { unpatchedJoins, structureReads } = read;
  // A value only joins the patch writes call for rides its slot write; a fill
  // for other reads also goes where they run on the client.
  const writes = getJoinWrites(kind);
  const fillable = canPatchFill(binding);
  // A join the scope does not init takes join fills: each key ships only where
  // the join mixes, where the others are the client's.
  const join = writes && read.writtenJoins!.keys().next().value!;
  const joinFill = join && !initsWrittenJoin(join) ? join : undefined;
  const reasons = writes && !joinFill ? undefined : kind;
  const effectRead = someAlias(binding, hasPatchEffectRead, undefined, true);
  const fnCapture = someAlias(binding, isRegisteredFnCapture, undefined, true);
  // A rendered read (through any alias) the client must derive: joined
  // with state, or inside structure the client may own.
  const fill = fillable ? (binding.sources?.state ? true : reasons) : undefined;
  const conditions = fill === true ? undefined : fill;
  // A fill shipped for other reads too reaches calls in caller-owned structure
  // of its own only by its unpatched key, sent where that structure is the client's.
  const unpatchedSections =
    fill &&
    structureReads &&
    !binding.sources?.state &&
    !holdsWithin(conditions, structureReads)
      ? read.unpatchedSections
      : undefined;
  const unpatchedStructure = unpatchedSections
    ? mergeKinds(read.unpatchedStructure, { structure: structureReads })
    : read.unpatchedStructure;
  let derivedNeeds: PatchFill["derivedNeeds"];
  // The client derives a value no patch can fill from its sources, wherever
  // its reads, effects and functions (or a part's) need it.
  if (!fillable) {
    derivedNeeds = effectRead || fnCapture || reasons;
    for (const part of binding.propertyAliases.values()) {
      derivedNeeds = mergeKinds(derivedNeeds, getPatchFill(part).derivedNeeds);
    }
  }
  // Every client read stays current, through its declaration and closures;
  // a fill only client-sourced join members call for reaches its joins alone.
  const fillsReads =
    fill === true || !!(conditions?.structure || conditions?.contents);
  // Only the patch's key reaches the declaration: a `<let>` nothing assigns
  // (its seed), or a template input's value with reads its signal alone reaches.
  const ownRegistration =
    !!fill &&
    (binding.sources?.state
      ? !binding.assignments && bindingUtil.has(binding.sources.state, binding)
      : !binding.section.parent && hasDeclarationOnlyReads(binding));
  // A client join and withheld content both call for it: it refreshes the
  // content under a key of its own, which a patch writing the join sends.
  const splitsContent =
    !!conditions?.contents &&
    !!(conditions.joins || conditions.structure || conditions.fills);
  // The unpatched key ships wherever the fill's own guard holds, which leaves
  // the fill key only content that refreshes under a key of its own.
  const unpatchedOnly =
    !!fill &&
    !!unpatchedStructure &&
    (unpatchedStructure === true ||
      holdsWithin(conditions, unpatchedStructure.structure, splitsContent));
  return {
    kind,
    fill,
    fillsReads,
    // No caller-owned structure re-renders its reads: always, or for
    // withheld content alone.
    fillsWithoutStructure:
      fill === true || (!!conditions?.contents && !conditions.structure),
    splitsContent,
    derivedNeeds,
    effectRead,
    // A value a patch sends that effects or captures read: written where a
    // flush writes its scope.
    writeReads: isPatchSent(binding) && (effectRead || fnCapture),
    ownRegistration,
    joinWrites: joinFill ? undefined : writes,
    joinFill,
    unpatchedOnly,
    unpatchedJoins,
    unpatchedStructure,
    unpatchedSections,
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
    if (
      binding !== binding.section.params &&
      isSeedableLocal(binding) &&
      !derivesLocals(binding.section)
    ) {
      return true;
    }
  }
  return isPatchSent(binding) && patchWritesScope(binding.section);
}

// A scope a flush writes into: a known child, a branch or boundary body, a
// `@catch`, attribute tag `<for>` content, or content it creates from its shell.
export function patchWritesScope(section: Section) {
  return (
    patchWrites(section) &&
    (isKnownChild(section) ||
      !!section.branch ||
      section.boundaryContent === "catch" ||
      !!section.localClosures ||
      shipsContentShell(section))
  );
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
    binding.type !== BindingType.constant &&
    !binding.sources?.state &&
    // A branch's own params arrive with its structure.
    !(isSectionParam(binding) && !binding.localOf && !seedsParam(binding)) &&
    // No fill (it ships wherever client code reads the value) and no write.
    !getPatchFill(binding).fill &&
    !isPatchWritten(binding) &&
    !catchSetupRenders(section, binding.sources) &&
    // The client derives a constant a call passes from its module read.
    !derivesConstantInput(binding) &&
    // A value a created init's join derives takes no seed: one would leave
    // the join's first run unchanged, so what reads the value never runs.
    !derivesByCreatedInit(binding)
  );
}

// A value its expression's join (a call site's, for a known child's param)
// derives by its created init, which every created or composed scope names.
function derivesByCreatedInit(binding: Binding) {
  const { derivedFrom } = binding;
  if (
    !derivedFrom ||
    Array.isArray(derivedFrom) ||
    !isReferencedExtra(derivedFrom)
  ) {
    return false;
  }
  const join = getReferencedBindings(derivedFrom);
  return Array.isArray(join) && !!getJoinInit(derivedFrom.section, join)?.init;
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
  return shipsContentShell(section) && !createsFromRenderer(section);
}

// Why a binding fills: `true` unconditionally, or the run-time conditions
// its reads sit under (caller-owned structure, withholdable content).
export interface FillConditions {
  structure?: SortedOpt<Sources>;
  joins?: SortedOpt<Sources>;
  // A nested member's fill re-runs the join: it fills under that member's group.
  fills?: SortedOpt<Sources>;
  contents?: SortedOpt<Section>;
  // A join the patch writes reads it: its other members, where the client runs it.
  writes?: SortedOpt<Sources>;
}

// What a binding's reads (and its direct aliases') need of its fill, and the
// joins the patch writes that it reaches in structure the client may own.
const [getFillReadKind, resetFillReadKinds] = createAnalysisMemo(
  computeFillReadKind,
  {
    kind: undefined,
    unpatchedJoins: undefined,
    unpatchedStructure: undefined,
    unpatchedSections: undefined,
    structureReads: undefined,
    writtenJoins: undefined,
  },
);

function computeFillReadKind(binding: Binding) {
  let kind: true | FillConditions | undefined;
  let unpatchedJoins: Intersection[] | undefined;
  let unpatchedStructure: true | FillConditions | undefined;
  // Closure sections a patch rendering renders every read of, and their structure.
  const unpatchedSections = sectionUtil.filter(
    binding.closureSections,
    (section) => leavesToPatchAt(binding, section),
  );
  let structureReads: SortedOpt<Sources>;
  // Each written join its value is shipped for, by the section reading it.
  let writtenJoins: Map<Intersection, Section> | undefined;
  for (const alias of binding.aliases) {
    // A property alias or rest fills on its own; a direct alias reads this.
    if (isDirectAlias(alias)) {
      const aliasFill = getFillReadKind(alias);
      kind = mergeKinds(kind, aliasFill.kind);
      for (const [join, section] of aliasFill.writtenJoins || []) {
        (writtenJoins ||= new Map()).set(join, section);
      }
      if (aliasFill.unpatchedJoins) {
        unpatchedJoins = unpatchedJoins
          ? unpatchedJoins.concat(aliasFill.unpatchedJoins)
          : aliasFill.unpatchedJoins;
        unpatchedStructure = mergeKinds(
          unpatchedStructure,
          aliasFill.unpatchedStructure,
        );
      }
    }
  }
  // A known child that is itself stateful structure renders every read from
  // what its calls pass, on the client.
  if (isKnownChild(binding.section) && isStatefulBranch(binding.section)) {
    kind = true;
  }
  for (const read of binding.reads.keys()) {
    // A spread's attributes still render; any other effect read outside
    // unpatched structure refreshes through the owner slot write.
    const effect = readsValuesOnResume(read);
    // A handler reads the slot at call time: the owner write keeps it
    // current with no registration to shake.
    if (effect && read.invokeOnly) continue;
    const refs = getReferencedBindings(read);
    const written = Array.isArray(refs) && isPatchWrittenJoin(refs);
    if (written) {
      // Where the client may own the join's structure, the binding ships
      // there under its unpatched key, which also re-runs the join.
      const structure = getReadStructure(binding, read, effect);
      if (structure) {
        unpatchedStructure = mergeKinds(unpatchedStructure, structure);
        unpatchedJoins = unpatchedJoins
          ? unpatchedJoins.concat([refs])
          : [refs];
      }
    }
    const readKind = getReadKind(binding, read, effect, written);
    kind = mergeKinds(kind, readKind);
    if (
      !written &&
      !effect &&
      sectionUtil.has(unpatchedSections, read.section)
    ) {
      const structure = getReadStructure(binding, read, effect);
      if (structure && structure !== true) {
        structureReads = sourcesUtil.union(structureReads, structure.structure);
      }
    }
    if (written && readKind !== true && readKind?.writes) {
      (writtenJoins ||= new Map()).set(refs, read.section);
    }
  }
  return {
    kind,
    unpatchedJoins,
    unpatchedStructure,
    unpatchedSections,
    structureReads,
    writtenJoins,
  };
}

// Whether the binding's fill reaches `section` under its unpatched key alone.
export function dispatchesUnpatchedAt(binding: Binding, section: Section) {
  return sectionUtil.has(getPatchFill(binding).unpatchedSections, section);
}

// A section its fill reaches by branch hops, passing it to a call: a patch
// rendering it renders every read there itself.
function leavesToPatchAt(binding: Binding, section: Section) {
  return (
    section.enclosing.nonOptionalAncestor ===
      binding.section.enclosing.nonOptionalAncestor &&
    someReadIn(binding, section, isCallInput) &&
    !someReadIn(binding, section, isClientRenderedRead)
  );
}

function isCallInput(read: ReferencedExtra) {
  return some(read.derives, (derived) => isCalleeParam(derived, read.section));
}

// A known child's param a call in `section` passes.
function isCalleeParam(derived: Binding, section: Section) {
  return derived.section !== section && isKnownChild(derived.section);
}

function isClientRenderedRead(read: ReferencedExtra) {
  return !leavesReadToPatch(read);
}

// What one read needs of the binding's fill: `true` for every patch.
function getReadKind(
  binding: Binding,
  read: ReferencedExtra,
  effect: boolean,
  written: boolean,
): true | FillConditions | undefined {
  const knownChild = isKnownChild(binding.section);
  const refs = getReferencedBindings(read);
  let conditions: FillConditions | undefined;
  if (!effect) {
    const sources = getSourcesForRef(refs);
    if (sources?.state) return true;
    const derived = getDerivedNeeds(read);
    if (derived === true) return true;
    if (derived) conditions = mergeConditions(conditions, derived);
    if (written) {
      // The patch inits the join where it runs on the client, which needs
      // a caller's value of this binding.
      const writes =
        hasCallerParamSourceAt(binding.sources, binding.section) &&
        getOtherInputs(sources, binding);
      if (writes) conditions = mergeConditions(conditions, { writes });
    } else {
      // A join whose other members a caller may pass client state,
      // dispatched from this scope; an `<await>` value re-fires no promise.
      const others =
        knownChild &&
        !isBoundaryValueRead(read) &&
        getOtherInputs(sources, binding);
      if (others && hasTagCallerParamAt(others, binding.section)) {
        // A nested member's own fill (a loop row's, joined with state) also
        // re-runs the join, unless the join is a hole the flush fills itself.
        const fills = isFilledHole(read)
          ? undefined
          : reduce(refs, addNestedMemberFill);
        conditions = mergeConditions(conditions, { joins: others, fills });
      }
    }
    // A join with a param of a body outside the binding's is computed where
    // the body's calls pass it: on the client for state, else by their bits.
    const passed =
      receivesCallerParams(binding.section) &&
      getDefineCallSources(sources, binding.section);
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
  // A written join's structure ships the binding under its unpatched key.
  if (written) return conditions;
  return mergeKinds(conditions, getReadStructure(binding, read, effect));
}

// The structure a read sits in that the client may own, from the binding's
// section: `true` where client code always renders it.
function getReadStructure(
  binding: Binding,
  read: ReferencedExtra,
  effect: boolean,
): true | FillConditions | undefined {
  const knownChild = isKnownChild(binding.section);
  let found: FillConditions | undefined;
  // A `<define>` body reads as if at each tag rendering its var: a worklist
  // visits each call section once, so a recursive define reaches its own once.
  const readSections = new Set([read.section]);
  for (const readAt of readSections) {
    // No patch write reaches a skipped region: reads in stateful structure, a body
    // some consumer renders so, or boundary content the client renders take owner fills.
    let readSection: Section | undefined = readAt;
    let content: Section | undefined;
    while (readSection && readSection !== binding.section) {
      if (isStatefulBranch(readSection) || getStatefulConsumers(readSection)) {
        return true;
      }
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
    if (content && !isBoundaryValueRead(read) && consumerMayWithhold(content)) {
      found = mergeConditions(found, { contents: content });
    }
    if (!knownChild) continue;
    // Only other caller params' structure leaves this read unfilled, by their
    // ownership bits or what calls pass a `<define>` body outside the binding's.
    for (const chainSources of getCallerOwnedStructure(readAt) || []) {
      const passed = getDefineCallSources(chainSources, binding.section);
      if (passed?.state) return true;
      for (const sources of [chainSources, passed]) {
        if (
          hasCallerParamSourceAt(sources, binding.section) &&
          !sourcesInclude(sources!, binding)
        ) {
          found = mergeConditions(found, { structure: sources });
        }
      }
    }
  }
  return found;
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
// or another known child's param the client derives from it.
function hasDeclarationOnlyReads(binding: Binding) {
  for (const read of binding.reads.keys()) {
    if (
      readsValuesOnResume(read)
        ? !read.invokeOnly && read.section === binding.section
        : some(read.derives, (derived) =>
            isCalleeParam(derived, binding.section),
          ) &&
          (getDerivedNeeds(read) ||
            some(
              read.derives,
              (derived) =>
                isCalleeParam(derived, binding.section) &&
                isClientDerivedParam(derived),
            ))
    ) {
      return true;
    }
  }
  return false;
}

// A known child's param the client may derive from what its calls pass: a consumer
// renders the callee client-side, which reads it alone (nothing stored, no structure).
export function isClientDerivedParam(param: Binding) {
  return (
    !!getStatefulConsumers(param.section) &&
    !findSlot(param)?.reason &&
    !bindingUtil.has(param.section.structuralParams, param)
  );
}

// What client code needs of the values derived at the read that no patch can
// fill, which derive from it; a callee keeps its own copy of what a call passes.
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

// What a `<define>` body's direct calls pass for `params`, by their groups within
// it, which cover it: each stateless reason, a call slot's too, is one group.
function getBodyCallSources(body: Section, params: ParamReasonGroup) {
  let sources: Sources | undefined;
  for (const groups of getBodyCalls(body).values()) {
    for (const slot of groups) {
      if (bindingUtil.isSuperset(params, slot.group)) {
        sources = mergeSources(sources, slot.reason);
      }
    }
  }
  return sources;
}

// Each direct call of a body, by the scope it renders, with the param group
// slots it fills: the reasons it passes, which the solve sets.
const [getBodyCalls, resetBodyCalls] = createAnalysisMemo((body: Section) => {
  const calls = new Map<Binding, Slot[]>();
  forEach(body.callSections, (callSection) => {
    forEach(callSection.slots, (slot) => {
      if (
        slot.kind === SlotKind.ParamGroup &&
        first(slot.group!).section === body
      ) {
        const groups = calls.get(slot.owner);
        if (groups) groups.push(slot);
        else calls.set(slot.owner, [slot]);
      }
    });
  });
  return calls;
}, new Map<Binding, Slot[]>());

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
  return read.section.children.some(
    (child) => child.branchExpr === read && child.branch?.optional === false,
  );
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
    writes: sourcesUtil.union(a?.writes, b.writes),
  };
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

// How a scope runs what nothing it receives renders: a closure's value, or a
// join some members of which arrive seeded or not at all.
export interface CreatedInit {
  // Its init runs on every created scope, where the client contributes the
  // group (`mixed`: on any scope), or where a patch withholds these local fills.
  init?: "always" | "client" | "mixed" | { localFills: SortedOpt<Binding> };
  // Where it subscribes the closure so its owner's fills reach it: every created
  // scope, or where no patch fills it or the groups of a join of it here.
  subscribe?: "always" | { unfilled: SortedOpt<Sources> };
}

// The groups a created subscriber also subscribes in past its own: those of a
// join of it here a call may pass client state, which then needs its fill.
function getCreatedSubscribeStructure(section: Section, closure: Binding) {
  let structure: SortedOpt<Sources>;
  for (const join of getRenderedJoins(section)) {
    const sources = bindingUtil.has(join, closure) && getSourcesForRef(join);
    if (
      sources &&
      hasTagCallerParamAt(getOtherInputs(sources, closure), section)
    ) {
      structure = sourcesUtil.add(structure, sources);
    }
  }
  return structure;
}

// The joins the section's signals render, once ids allocate: one with a constant
// member records a read's constants beside its join.
const [getRenderedJoins] = createAnalysisMemo((section: Section) => {
  const joins: Intersection[] = [];
  for (const join of section.intersections!.keys()) {
    if (!some(join, (member) => member.type === BindingType.constant)) {
      joins.push(join);
    }
  }
  return joins;
}, []);

// Whether a join the section renders reads the closure.
export function isReadInJoin(section: Section, closure: Binding) {
  return getRenderedJoins(section).some((join) =>
    bindingUtil.has(join, closure),
  );
}

const NO_INITS = new Map<never, CreatedInit>();

// Each section's closure inits, from the fills of the moment (afresh each
// solve pass).
export const [getClosureInits, resetClosureInits] = createAnalysisMemo(
  computeClosureInits,
  NO_INITS,
);

// The inits the server names for the section's scopes, its closures' and
// joins', asked once ids allocate the joins.
export const [getCreatedInits] = createAnalysisMemo(
  computeCreatedInits,
  NO_INITS,
);

function computeClosureInits(section: Section): Map<Binding, CreatedInit> {
  // A filled binding of the section is a local fill of each closure it derives from.
  const localFills = new Map<Binding, SortedOpt<Binding>>();
  forEach(section.bindings, (fill) => {
    if (
      !fill.sources?.state &&
      some(fill.sources?.param, (param) =>
        bindingUtil.has(section.referencedClosures, param),
      ) &&
      getPatchFill(fill).fill
    ) {
      forEach(fill.sources!.param, (param) =>
        localFills.set(param, bindingUtil.add(localFills.get(param), fill)),
      );
    }
  });
  const inits = new Map<Binding, CreatedInit>();
  forEach(section.referencedClosures, (closure) => {
    const init = getClosureInit(section, closure, localFills.get(closure));
    if (init) inits.set(closure, { init });
  });
  return inits.size ? inits : NO_INITS;
}

function computeCreatedInits(section: Section) {
  const joinInits = new Map<Intersection, CreatedInit>();
  // A closure read here only by joins every created scope inits needs no init of
  // its own, unless it subscribes by it.
  const joinedClosures = new Set<Binding>();
  for (const join of getRenderedJoins(section)) {
    const init = getJoinInit(section, join);
    if (init) {
      joinInits.set(join, init);
      if (init.init === "always") {
        for (const member of join) joinedClosures.add(member);
      }
    }
  }
  const inits = new Map<Binding | Intersection, CreatedInit>();
  forEach(section.referencedClosures, (closure) => {
    const init = getClosureInits(section).get(closure)?.init;
    const subscribe = getClosureSubscribe(section, closure, init);
    const named =
      (init || subscribe) &&
      (isDynamicClosure(section, closure) ||
        !joinedClosures.has(closure) ||
        someReadIn(closure, section, (read) => {
          const join = getReferencedBindings(read);
          return !Array.isArray(join) || joinInits.get(join)?.init !== "always";
        })) &&
      getNamedInit(section, { init, subscribe }, false);
    if (named) inits.set(closure, named);
  });
  for (const [join, init] of joinInits) {
    const named = getNamedInit(section, init, true);
    if (named) inits.set(join, named);
  }
  return inits.size ? inits : NO_INITS;
}

// The part of an init the server names: what every created scope does, by its
// shell or a composing scope's setup, else what a flush writes.
function getNamedInit(
  section: Section,
  { init, subscribe }: CreatedInit,
  join: boolean,
): CreatedInit | undefined {
  const shellNames = patchComposes(section) || shipsShellInits(section);
  const flushNames =
    patchCreatesOrComposes(section) ||
    // A `@catch` sets up its closures; its error's joins wait on the seed.
    (join && section.boundaryContent === "catch");
  // A shell names every scope's init, a flush a client contribution's, and a
  // patch a written join's or a withheld local fill's on any scope.
  const namesInit =
    init === "always"
      ? shellNames
      : init === "client"
        ? flushNames
        : init === "mixed" || typeof init === "object";
  const named: CreatedInit = {
    init: namesInit ? init : undefined,
    subscribe: (subscribe === "always" ? shellNames : flushNames)
      ? subscribe
      : undefined,
  };
  return named.init || named.subscribe ? named : undefined;
}

// A join's created init: a state join inits itself unless every member arrives
// by its signal; one of caller params inits where the client passes them.
function getJoinInit(
  section: Section,
  join: Intersection,
): CreatedInit | undefined {
  if (section.intersections!.get(join)!.source) return;
  const sources = getSourcesForRef(join);
  if (sources?.state) {
    // The page itself is never created.
    return !every(join, (member) => arrivesBySignal(member, section)) &&
      (section.parent || !isPage())
      ? { init: "always" }
      : undefined;
  }
  if (!hasTagCallerParamAt(sources, section)) return;
  // A written join no member's fill re-runs: a patch names it on any scope.
  if (initsWrittenJoin(join)) return { init: "mixed" };
  // Closures a withheld local fill re-derives from complete it.
  if (
    !every(
      join,
      (member) =>
        typeof getClosureInits(section).get(member)?.init === "object",
    )
  ) {
    return { init: "client" };
  }
}

// A created scope gets the member by its signal, which runs a state join: state by
// its own init or seed, a value of the section with an unconditional fill by it.
function arrivesBySignal(member: Binding, section: Section) {
  const root = getCanonicalBinding(member);
  return (
    isStateSourced(root) ||
    (root.section === section && getPatchFill(root).fill === true)
  );
}

// A section its caller passes params: a known child's calls, or the flush for
// content it creates from its shell, whose tag's entry passes it no input.
function receivesCallerParams(section: Section) {
  return isKnownChild(section) || shipsContentShell(section);
}

// `isCallerParamAt` for what a created scope receives: shell content's params
// too, which a flush fills without the caller bits the other callers gate on.
function isReceivedParamAt(param: Binding, section: Section) {
  return (
    receivesCallerParams(param.section) &&
    isSameOrAncestorSection(param.section, section)
  );
}

function getClosureInit(
  section: Section,
  closure: Binding,
  localFills: SortedOpt<Binding>,
): CreatedInit["init"] {
  const { sources } = closure;
  if (closure.type === BindingType.constant) return;
  // Client state renders, and subscribes, by its own init.
  if (sources?.state) return "always";
  if (localFills) return { localFills };
  // A caller's other closures render where the client contributes them; a join
  // of them inits itself.
  if (
    hasTagCallerParamAt(sources, section) &&
    someReadIn(closure, section, isLoneRead)
  ) {
    return "client";
  }
}

// A caller's other dynamic closures subscribe: by the shell where no patch write
// keeps a read current, else per instance where no patch fills them.
function getClosureSubscribe(
  section: Section,
  closure: Binding,
  init: CreatedInit["init"],
): CreatedInit["subscribe"] {
  if (
    closure.type !== BindingType.constant &&
    init !== "always" &&
    typeof init !== "object" &&
    some(closure.sources?.param, (param) =>
      isReceivedParamAt(param, section),
    ) &&
    isDynamicClosure(section, closure)
  ) {
    return subscribesFill(closure, section)
      ? "always"
      : { unfilled: getCreatedSubscribeStructure(section, closure) };
  }
}

// The sources take a param a calling tag may pass client state: a template's
// other than a page's, whose input the request passes, or a `<define>` body's.
export function hasTagCallerParamAt(
  sources: Sources | undefined,
  section: Section,
) {
  return some(
    sources?.param,
    (param) => isCallerParamAt(param, section) && mayPassClientState(param),
  );
}

// A `<define>` body's calls are known: one passes a param client state where
// it passes state or such a param of its own (sources settle before solve).
const [mayPassClientState] = createAnalysisMemo(
  (param: ParamBinding): boolean =>
    param.section.parent
      ? someCallPasses(
          param.section,
          param,
          (passed) =>
            !!passed?.state || some(passed?.param, mayPassClientState),
        )
      : !isPage(),
  false,
);

// A created subscriber of the closure is reached only by subscribing: a read
// no patch write keeps current takes a fill its owner's subscribers carry.
function subscribesFill(closure: Binding, section: Section) {
  return (
    someReadIn(closure, section, isUnwrittenRead) &&
    (fillSubscribes(closure, section) ||
      (isReadInJoin(section, closure) &&
        joinsFillOverSubscribers(section, closure)))
  );
}

function isUnwrittenRead(read: ReferencedExtra) {
  return !isFilledHole(read);
}

// A join in `section` reading the closure runs as a fill join over its owner's
// subscribers, matching the position each stamped.
export function joinsFillOverSubscribers(section: Section, closure: Binding) {
  return (
    (registersJoinFill(closure) ||
      // or its unpatched key re-runs it
      !!getPatchFill(closure).unpatchedJoins?.some((join) =>
        section.intersections!.has(join),
      )) &&
    section.enclosing.nonOptionalAncestor !==
      closure.section.enclosing.nonOptionalAncestor &&
    !inStatefulBranch(section)
  );
}

// A join of params, one a caller passes, whose reads the patch leaves to holes
// and effect entries: where its group mixes, join fills or the init re-run it.
export const [isPatchWrittenJoin, resetWrittenJoins] = createAnalysisMemo(
  (join: Intersection) => {
    let section: Section | undefined;
    for (const read of join[0].reads.keys()) {
      if (getReferencedBindings(read) === join) {
        if (!leavesReadToPatch(read)) return false;
        section = read.section;
      }
    }
    const sources = getSourcesForRef(join);
    // Every caller asks for a join a read references, which sets `section`.
    return (
      Array.isArray(sources?.param) &&
      hasTagCallerParamAt(sources, section!) &&
      !(
        isPassedStateByEveryCall(sources) &&
        // A member another join reads keeps it written: its key would ship for both.
        every(join, (member) => !readsOtherJoin(member, join))
      )
    );
  },
  false,
);

// A read the patch leaves to the holes it writes, the effects its entries
// re-run and the calls whose callees keep their inputs, through derived values.
function leavesReadToPatch(read: ReferencedExtra): boolean {
  if (isFilledHole(read) || readsValuesOnResume(read)) return true;
  return (
    !!read.derives &&
    every(read.derives, (derived) => {
      if (isCalleeParam(derived, read.section)) {
        return calleeKeepsInput(read.section, getSourcesForExpr(read));
      }
      if (derived.type !== BindingType.derived) return false;
      for (const derivedRead of derived.reads.keys()) {
        if (!leavesReadToPatch(derivedRead)) return false;
      }
      return true;
    })
  );
}

function readsOtherJoin(binding: Binding, join: Intersection) {
  for (const read of binding.reads.keys()) {
    const refs = getReferencedBindings(read);
    if (Array.isArray(refs) && refs !== join) return true;
  }
  return false;
}

// Some `<define>` body's params of the sources, one of which each call passes
// client state: a join of them mixes on every instance, so the client runs it.
function isPassedStateByEveryCall(sources: Sources) {
  let always = false;
  forEachParamGroup(sources.param, (body, params) => {
    if (!body.parent || !isKnownChild(body)) return;
    const calls = getBodyCalls(body);
    let passes = calls.size > 0;
    for (const groups of calls.values()) {
      passes &&= groups.some(
        (slot) =>
          bindingUtil.isSuperset(params, slot.group) && !!slot.reason?.state,
      );
    }
    always ||= passes;
  });
  return always;
}

// A written join the scope inits: some shipped member has no fill to re-run it
// (below the root, reached over subscribers, in two joins, filled for others).
export const [initsWrittenJoin, resetJoinInits] = createAnalysisMemo(
  (join: Intersection) =>
    isPatchWrittenJoin(join) &&
    some(join, (ref) => {
      const member = getCanonicalBinding(ref);
      const { kind, writtenJoins } = getFillReadKind(member);
      const section = writtenJoins?.get(join);
      return (
        !!section &&
        !(
          getJoinWrites(kind) &&
          writtenJoins!.size === 1 &&
          !member.section.parent &&
          // Its key's hops reach every scope of the join, unlike a subscriber set.
          section.enclosing.nonOptionalAncestor ===
            member.section.enclosing.nonOptionalAncestor
        )
      );
    }),
  false,
);

// The other members' sources of the joins the patch writes, for a value only
// those joins call for.
function getJoinWrites(kind: true | FillConditions | undefined) {
  return kind !== true &&
    kind?.writes &&
    !(kind.structure || kind.joins || kind.fills || kind.contents)
    ? kind.writes
    : undefined;
}

// A fill its declaration registers (kept by its assignments or its own
// registration) reaches the join through what derives from it.
export function registersJoinFill(member: Binding) {
  const { fill, fillsReads, ownRegistration } = getPatchFill(member);
  return !!fill && !((member.assignments || ownRegistration) && fillsReads);
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
// derivation when it fills every server source (the client derives it).
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
export const [contentMayCreate] = createAnalysisMemo(
  (section: Section) =>
    sectionMayCreate(section) ||
    (!!section.parent && enclosingMayCreate(section.parent)),
  false,
);

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

// A consumer rendering the content client-side creates it on the client, and a
// read passing it on within the template leaves it to the reads of what it derives.
function readMayCreate(read: ReferencedExtra) {
  return (
    !isStatefulLeaf(read) &&
    (!!(read.rendersContent || read.nameOnly) ||
      !read.derives ||
      some(
        read.derives,
        (derived) => derived.section.program !== read.section.program,
      )) &&
    enclosingMayCreate(read.section, true)
  );
}

function enclosingMayCreate(section: Section, fromRead?: boolean): boolean {
  for (let cur: Section | undefined = section; cur; cur = cur.parent) {
    if (cur.branch?.optional) return patchWrites(cur);
    if (cur.branchExpr || cur.derives) {
      return contentMayCreate(cur);
    }
  }
  // A caller may compose a template (a lazy-loaded one under a layout, a child
  // in a branch), never the page template; a tag a read hands content to may.
  return fromRead || !isPage();
}

// A branch or boundary body that ships a shell, or content a patch may create.
export function patchCreates(section: Section) {
  return (
    isPatch() &&
    (!!section.branch || shipsContentShell(section)) &&
    patchWrites(section) &&
    !sectionHasServerEffect(section)
  );
}

// A section whose scopes a flush creates: from its shell, or composed into a
// created scope's.
export function patchCreatesOrComposes(section: Section): boolean {
  return patchCreates(section) || patchComposes(section);
}

// A known child a created scope's shell composes: a template a caller renders
// (no page), or a `<define>` body a created or composed scope calls.
export const [patchComposes] = createAnalysisMemo(
  (section: Section) =>
    isKnownChild(section) &&
    (section.parent
      ? some(section.callSections, patchCreatesOrComposes)
      : !isPage()),
  false,
);

// A `<define>` body reading what its owner holds, called below the section
// defining it where a flush may create the call: its patch link names its owner.
export function namesBodyOwner(section: Section, body: Section) {
  return (
    body.readsOwner &&
    body.parent !== section &&
    patchWrites(section) &&
    patchCreatesOrComposes(section)
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
    const refs = getReferencedBindings(read);
    // Content renders client side wherever its tag puts it, and a created scope
    // may init the closure from its owner, or its caller's.
    for (
      let section: Section | undefined = read.section;
      section && section !== binding.section;
      section = section.parent
    ) {
      const init = getClosureInits(section).get(binding);
      if (
        (!section.branch && !rendersWithOwner(section)) ||
        init?.init === "always" ||
        typeof init?.init === "object"
      ) {
        if (!throughCreated) return false;
        structure = sourcesUtil.union(structure, getSourcesForRef(refs));
        break;
      }
      if (init?.init === "client") {
        structure = sourcesUtil.union(structure, getSourcesForRef(refs));
      }
    }
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
          structure = sourcesUtil.add(structure, getSourcesForRef(refs)!);
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
    const { fill, writeReads, joinWrites } = getPatchFill(binding);
    if (
      fill ||
      joinWrites ||
      (writeReads && patchWritesScope(binding.section))
    ) {
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
    // A param the client derives is written by its own group's bits.
    if (derivesConstantInput(slot.owner)) {
      ensureCallerParamGroups(getSourcesForRef(slot.owner));
    }
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
  return fill !== true && !!writeReads && patchWritesScope(binding.section);
}
