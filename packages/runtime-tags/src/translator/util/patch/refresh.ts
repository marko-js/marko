// Patch fill decisions: which bindings a patch fills or writes, fill identity,
// and what a created scope runs.
import type { types as t } from "@marko/compiler";

import {
  type Binding,
  bindingUtil,
  BindingType,
  getCanonicalBinding,
  type Intersection,
  isStateSourced,
  isDirectAlias,
  isSectionParam,
  type ParamBinding,
  type ReferencedBindings,
  someAlias,
  someBindingRead,
  someReadIn,
} from "../bindings";
import { createAnalysisMemo, createPassMemo } from "../cyclic-memo";
import { readsValuesOnResume } from "../finalize-references";
import {
  derivesConstantInput,
  ensureKnownTagPatchGroups,
  getParamGroupSources,
  isKnownTagExtra,
  type KnownTagExtra,
  someCallPasses,
} from "../known-tag";
import { isPatch } from "../marko-config";
import { isTrackedFunction } from "../module-registrations";
import {
  every,
  forEach,
  type Opt,
  reduce,
  reduceWhile,
  some,
  type SortedOpt,
} from "../optional";
import {
  getSourcesForDerived,
  getSourcesForExpr,
  getSourcesForReferencedBindings,
  isGuardedReason,
  mapBodyParams,
} from "../reasons";
import {
  getGlobalReads,
  getLazyBindings,
  getNameRead,
  getReferencedBindingsInFunction,
  getReferencedBindings,
  getValueReferences,
  hasResumableAssignment,
  isReferencedExtra,
  type Read,
  type ReferencedExtra,
} from "../references";
import { getScopeAccessor } from "../scope-accessor";
import {
  ensureCallerParamGroups,
  getRendererReason,
  isCallerParamAt,
  isContentRender,
  isContentSection,
  isDynamicClosure,
  isKnownChild,
  isOptionalBranch,
  isSameOrAncestorSection,
  type Section,
  sectionUtil,
} from "../sections";
import { shipsContentShell } from "../shell";
import { getResumeRegistryId, shipsClosureScopes } from "../signals";
import { findSlot, type Slot, SlotKind } from "../slots";
import {
  bindingReaders,
  exprReaders,
  getBranchExprReasonUntil,
  getDerivedReaders,
  someRead,
} from "../solve-reasons";
import {
  createSources,
  hasCallerParamSource,
  hasCallerParamSourceAt,
  hasParamOrGlobalSource,
  isCoveredParam,
  mergeSources,
  type Sources,
  sourcesUtil,
  withSources,
} from "../sources";
import { getWriteReason, isEverWritten } from "../write-guard";
import {
  getStateInitialValueSources,
  getFillSources,
  fillsHole,
  isFilledHole,
} from "./decisions";
import {
  patchFillsSection,
  hasStructuralParam,
  isKnownChildNode,
  inStatefulStructure,
  isStatefulStructure,
  getParamSelectedStructure,
  calleeKeepsInput,
  isPassedStateByEveryCall,
  isStatefulRead,
  derivesRenderedContent,
} from "./structure";

// A value's fill, derived once per analysis (afresh each solve pass): what its reads
// need, how a patch fills them, and what deriving it needs of its inputs.
interface PatchFill {
  contentKind?: true | FillConditions;
  /** A `<let>` a patch fills. */
  fill?: boolean;
  derivedNeeds?: true | FillConditions;
  effectRead?: boolean;
  /** A function client code reads, or a flush seeds, references it. */
  fnReference?: boolean;
  writeReads?: boolean;
  ownRegistration?: boolean;
  filledMembers?: SortedOpt<Sources>;
}

// What a patch writes, derived afresh each solve pass.
interface PatchWrite {
  write?: boolean;
  effect?: boolean;
  unfillable?: boolean;
}

const UNREAD: PatchFill & PatchWrite = {};

// A value re-asked within its own answer (a recursive `<define>`) is unread.
export const getPatchFill = createPassMemo(computePatchFill, UNREAD);

export const getPatchWrite = createPassMemo(computePatchWrite, UNREAD);

function computePatchFill(binding: Binding): PatchFill {
  const { kind, contentKind } = getFillReadKind(binding);
  // A value only intersections the patch writes call for rides its slot write.
  const members = getFilledMembers(kind);
  const reasons = members ? undefined : kind;
  const fill = canPatchFill(binding);
  const effectRead = someAlias(binding, hasEffectRead, undefined, true);
  const fnReference = someAlias(
    binding,
    isRegisteredFnReference,
    undefined,
    true,
  );
  let derivedNeeds: PatchFill["derivedNeeds"];
  // The client derives a value no patch can fill from its sources, wherever its reads,
  // effects and functions (or a part's) need it; one it writes, for functions and client callers.
  if (!fill) {
    derivedNeeds = isServerSourced(binding)
      ? fnReference || undefined
      : effectRead || fnReference || reasons;
    for (const part of binding.propertyAliases.values()) {
      derivedNeeds = mergeKinds(derivedNeeds, getPatchFill(part).derivedNeeds);
    }
  }
  return {
    contentKind,
    fill,
    derivedNeeds,
    effectRead,
    fnReference,
    // A filled value effects, function references or an intersection a write's
    // render reads: written where a flush writes its scope.
    writeReads:
      isPatchFilled(binding) &&
      (effectRead ||
        fnReference ||
        hasServerFillReads(binding) ||
        writesForIntersectionRender(binding)),
    // Only the patch's key reaches the declaration: a `<let>` no shipped code assigns.
    ownRegistration: fill && !hasResumableAssignment(binding),
    filledMembers: fill ? members : undefined,
  };
}

// Each write (content's once its shell ships) and unfillable read.
function computePatchWrite(binding: Binding): PatchWrite {
  const write = isPatchWritten(binding) && leavesReadUnfilled(binding);
  const { sources } = binding;
  return {
    write,
    effect: getPatchFill(binding).effectRead && write,
    unfillable: !!sources?.param && !sources.global && !patchRefreshes(binding),
  };
}

// A client read the patch leaves unfilled: always, or under structure a caller
// group updates from the client.
function leavesReadUnfilled(binding: Binding) {
  const structure = getUnfilledSubscribedSources(binding);
  return (
    structure === false ||
    some(structure, (sources) =>
      hasCallerParamSourceAt(sources, binding.section),
    )
  );
}

// A filled value effects, function references or an intersection a write's render reads,
// in a section a flush reaches.
function isPatchWritten(binding: Binding) {
  return (
    !!getPatchFill(binding).writeReads && patchFillsSection(binding.section)
  );
}

// A fill's wire and registry key: its `<let>`'s register id, as the patch's other
// registrations are named.
export function getPatchFillKey(binding: Binding) {
  return getResumeRegistryId(binding.section, binding, "fill");
}

// The section's `<let>`s a patch fills.
export function getPatchFillBindings(section: Section) {
  return bindingUtil.filter(section.bindings, isPatchFillBinding);
}

// A `<let>` a patch fills (`canPatchFill`).
function isPatchFillBinding(binding: Binding) {
  return !!getPatchFill(binding).fill;
}

// A patch asks the sources of what it writes: each value it fills or writes, each
// intersection it runs and each expression a node renders.
export function ensurePatchReasonGroups(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  forEach(section.bindings, ensureBindingGroups);
  // Created intersections run by group, and a page ships a patch-filled intersection's
  // members by it.
  for (const intersection of intersections || []) {
    ensureCallerParamGroups(getSourcesForReferencedBindings(intersection));
  }
  for (const slot of section.slots) ensureSlotGroups(slot);
  // A closure's render over a written slot gates on the structure callers select.
  getParamSelectedStructure(section)?.forEach(ensureCallerParamGroups);
  // An `<await>` asks whether a patch fills its promise (`_unfilled_if`).
  if (section.branch?.kind === "await") {
    ensureCallerParamGroups(getSourcesForExpr(section.branchExpr!));
  }
  // A scope subscribes to a closure, and resumes that subscriber, by its reads' sources.
  forEach(section.referencedClosures, (closure) => {
    if (shipsClosureScopes(closure)) {
      ensureCallerParamGroups(getClosureReadSources(closure, section));
    }
  });
  ensureKnownTagPatchGroups(section);
}

function ensureSlotGroups(slot: Slot) {
  ensureWriteGroups(slot);
  ensureUnfilledWriteGroups(slot);
}

function ensureBindingGroups(binding: Binding) {
  const { writeReads, filledMembers } = getPatchFill(binding);
  if (writeReads && patchFillsScope(binding.section)) {
    ensureCallerParamGroups(binding.sources);
  }
  // Its write in place gates on each filled intersection's other members.
  forEach(filledMembers, ensureCallerParamGroups);
  // A created scope's `<let>` seeds by what its initial value reads.
  ensureCallerParamGroups(getStateInitialValueSources(binding));
}

// A page writes a value a patch fills (and its closure set) only where a client
// source leaves a read unfilled, by its param-selected structure's groups.
function ensureUnfilledWriteGroups(slot: Slot) {
  if (
    (slot.kind === SlotKind.Value || slot.kind === SlotKind.ClosureScopes) &&
    slot.owner.type !== BindingType.dom &&
    isGuardedReason(slot.reason)
  ) {
    forEach(
      (slot.kind === SlotKind.Value
        ? getUnfilledReadSources
        : getUnfilledSubscribedSources)(slot.owner) || undefined,
      ensureCallerParamGroups,
    );
    // A param the client derives is written by its own group's bits.
    if (derivesConstantInput(slot.owner)) {
      ensureCallerParamGroups(slot.owner.sources);
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
  if (!expr.consumed) ensureCallerParamGroups(getFillSources(expr));
}

// A canonical root server value a patch fills to keep it current (`$global`
// readers re-read the re-shipped bag).
function isPatchFilled(binding: Binding) {
  return (
    isPatch() &&
    getCanonicalBinding(binding) === binding &&
    hasParamOrGlobalSource(binding.sources) &&
    !binding.sources!.state &&
    (binding.type === BindingType.param || binding.type === BindingType.derived)
  );
}

// Inside content a flush reaches only by data.
function inContentReachedByData(section: Section) {
  return (
    section.enclosing.inContentSection && !getClientRenderedContents(section)
  );
}

// The content around `section` (below `upTo`) a flush can't reach by data alone:
// there its closures subscribe, and the server reports each instance the client renders.
function getClientRenderedContents(section: Section, upTo?: Section) {
  let contents: SortedOpt<Section>;
  for (
    let cur = section;
    cur !== upTo && cur.enclosing.inContentSection;
    cur = cur.parent!
  ) {
    if (isContentSection(cur) && !reachedByData(cur)) {
      contents = sectionUtil.add(contents, cur);
    }
  }
  return contents;
}

// Content no shipped code renders: no registered renderer, no state passing it, no
// call the client renders whatever callers pass. A flush reaches it by data.
const reachedByData = createPassMemo(
  (section: Section): boolean =>
    !getRendererReason(section) &&
    !(section.derives && getSourcesForDerived(section.derives)?.state) &&
    !some(section.renderedBy, isClientRenderedCall),
  true,
);

function isClientRenderedCall(call: KnownTagExtra) {
  return clientMayRenderInAnyCall(call.childScopeBinding.section);
}

// A `<let>` a patch fills: where a server value keeps reaching it (a controlled
// `<let>`'s controller); a created scope's arrives as resume values.
function canPatchFill(binding: Binding) {
  return (
    !!binding.sources?.state &&
    getCanonicalBinding(binding) === binding &&
    patchFillsScope(binding.section) &&
    (!!findSlot(binding, SlotKind.ChangeHandler) ||
      // The seed runs a `<let>`'s signal where plain keeps it and client code holds the value, or
      // takes it past the scope's renders and effects (a child, an intersection, an unfilled hole).
      (binding.type === BindingType.let &&
        mayBeCreated(binding.section) &&
        // Only from `<let>`s created with it: the page holds any other's value.
        binding.readsInitialValues &&
        !initialValueRunsFromFills(binding) &&
        (!!getWriteReason(binding) ||
          readsPastRenders(binding) ||
          initialValueQueuesEffect(binding) ||
          hasUnfilledRead(binding)))) &&
    bindingUtil.has(binding.sources.state, binding)
  );
}

// A caller's client render of the initial value runs the `<let>`'s signal and the effects
// it queues in its scope: filled, it runs in every created scope, whose shell then mounts none.
function initialValueQueuesEffect(binding: Binding) {
  return (
    hasTagCallerParamAt(binding.initialValueSources, binding.section) &&
    someRead(bindingReaders(binding, true), (read) =>
      queuesEffectOn(read, binding),
    )
  );
}

// An effect in the state's scope whose signal its value reaches.
function queuesEffectOn(read: ReferencedExtra, state: Binding) {
  return (
    read.section === state.section &&
    readsValuesOnResume(read) &&
    bindingUtil.has(
      getSourcesForReferencedBindings(getReferencedBindings(read))?.state,
      state,
    )
  );
}

// A `<let>` whose initial value reads `<let>`s that are filled or read filled ones:
// their fills compute it on the client, so it takes none.
function initialValueRunsFromFills(binding: Binding): boolean {
  const sources = binding.initialValueSources;
  return !!sources?.state && every(sources.state, isFilledOrReadsState);
}

function isFilledOrReadsState(state: Binding) {
  return !!state.initialValueSources?.state || canPatchFill(state);
}

// A `<let>` whose initial value client code computes where a patch creates its scope:
// it reads a `<let>` not created with it, or a patch fills it or state it reads.
export const fillsInitialValue = createPassMemo(
  (state: Binding): boolean =>
    !state.readsInitialValues ||
    canPatchFill(state) ||
    some(state.initialValueSources?.state, canPatchFill),
  false,
);

// A scope a flush writes into: a known child, attribute tag `<for>` content, or one
// it creates.
export function patchFillsScope(section: Section) {
  return (
    (patchFillsSection(section) &&
      (isKnownChild(section) || !!section.localClosures)) ||
    patchCreates(section)
  );
}

// A page's root is the document's, which neither a flush nor the client creates:
// a flush that would swap it (a route switching `<html>` layouts) is rejected.
function mayBeCreated(section: Section) {
  return !!section.parent || !section.template!.page;
}

// A constant client code in `section` reads from an enclosing scope, which a page
// ships only where it renders unfilled: a scope created there gets it from no other channel.
export function seedsOwnerConstant(section: Section, closure: Binding) {
  return (
    !closure.sources &&
    closure.type !== BindingType.dom &&
    mayBeCreated(section) &&
    isEverWritten(closure.section, getWriteReason(closure))
  );
}

// A value a created scope gets from no other channel (a resumed one reads it from the document),
// unlike fills, writes, a loop's sourced items and others' state; asked once ids allocate.
export const [seedsCreatedScope] = createAnalysisMemo((binding: Binding) => {
  const { section } = binding;
  return (
    binding.type !== BindingType.dom &&
    binding.type !== BindingType.constant &&
    mayBeCreated(section) &&
    (binding.localOf ? shipsContentShell(section) : patchFillsScope(section)) &&
    every(binding.sources?.state, (state) => isFirstState(state, section)) &&
    // A branch's own params arrive with its structure.
    !(isSectionParam(binding) && !binding.localOf && !seedsParam(binding)) &&
    // No fill (it ships wherever client code reads the value) and no write.
    !getPatchFill(binding).fill &&
    !isPatchWritten(binding) &&
    // The client derives a constant a call passes from its module read.
    !derivesConstantInput(binding) &&
    // A value a created setup's intersection derives takes no seed: one would leave
    // the intersection's first run unchanged, so what reads the value never runs.
    !derivesByCreatedSetup(binding)
  );
}, false);

// A created scope's seed a flush writes, where plain writes it or an unfilled hole reads it;
// a registration it carries binds by what its own module imports.
export function writesSeed(binding: Binding) {
  return (
    seedsCreatedScope(binding) &&
    (isEverWritten(binding.section, getWriteReason(binding)) ||
      hasUnfilledRead(binding))
  );
}

// Read in `section` past renders, effects, setup, name-only dynamic tags and (never
// assigned) control flow and call arguments: by a child, intersection or return.
function readsPastRenders(binding: Binding) {
  return someRead(
    bindingReaders(binding, true),
    (read) =>
      !(read.rendersValue || read.isEffect || read.nameOnly) &&
      (!read.derives ||
        some(read.derives, (derived) => derived.section !== binding.section)),
  );
}

// Read by a hole no patch fills (itself or by an alias), in a scope a flush creates: structure
// created with it reads the value then, which a client render's setup computes first.
function hasUnfilledRead(binding: Binding) {
  return (
    patchCreatesOrComposes(binding.section) &&
    someAlias(binding, rendersUnfilled, undefined)
  );
}

function rendersUnfilled(alias: Binding) {
  for (const read of alias.reads.keys()) {
    if (read.rendersValue && !fillsHole(read.section, read)) return true;
  }
  return false;
}

// A `<let>` the created scope starts from its render's value, as a resumed
// one does: its own, with no server value reaching it or state its initial value reads.
function isFirstState(state: Binding, section: Section) {
  return (
    state.type === BindingType.let &&
    state.section === section &&
    !fillsInitialValue(state)
  );
}

// A value its expression's intersection (a call site's, for a known child's param)
// derives by its created setup, which every created or composed scope names.
function derivesByCreatedSetup(binding: Binding) {
  const { derivedFrom } = binding;
  if (
    !derivedFrom ||
    Array.isArray(derivedFrom) ||
    !isReferencedExtra(derivedFrom)
  ) {
    return false;
  }
  const intersection = getReferencedBindings(derivedFrom);
  return (
    Array.isArray(intersection) &&
    !!getIntersectionSetup(derivedFrom.section, intersection)?.setup
  );
}

// A param a created scope gets as a seed, as no structure brings it: a known child's, a branch's
// static one (a loop item, an `<await>` value), or a `@catch` error member read with a caller's or `$global`.
function seedsParam(binding: Binding) {
  const { section } = binding;
  return (
    isKnownChild(section) ||
    (!!section.branch && !binding.sources?.param) ||
    (section.boundaryContent === "catch" &&
      (hasCallerParamSourceAt(getWriteReason(binding), section) ||
        someBindingRead(binding, getGlobalReads)))
  );
}

// Why a binding fills: `true` unconditionally, or the run-time conditions
// its reads sit under (param-selected structure, client branch content).
interface FillConditions {
  structure?: SortedOpt<Sources>;
  intersections?: SortedOpt<Sources>;
  // What its section's end sees.
  contents?: SortedOpt<Section>;
  // The `<await>` bodies a read crosses handing it on to what may keep it.
  passedUnder?: SortedOpt<Section>;
  // An intersection the patch writes reads it: its other members, where the client runs it.
  members?: SortedOpt<Sources>;
}

// What a binding's reads (and its direct aliases') need of its fill, and the
// intersections the patch writes that it reaches in structure that may update from the client.
const getFillReadKind = createPassMemo(computeFillReadKind, {
  kind: undefined,
  contentKind: undefined,
  filledIntersections: undefined,
});

function computeFillReadKind(binding: Binding) {
  let kind: true | FillConditions | undefined;
  // What the reads rendering it as content need, its own, its aliases' and
  // its derived values': `{}` where they need nothing.
  let contentKind: true | FillConditions | undefined;
  // Each filled intersection its value is shipped for, by the section reading it.
  let filledIntersections: Map<Intersection, Section> | undefined;
  for (const alias of binding.propertyAliases.values()) {
    contentKind = mergeKinds(contentKind, getFillReadKind(alias).contentKind);
  }
  for (const alias of binding.aliases) {
    const aliasFill = getFillReadKind(alias);
    contentKind = mergeKinds(contentKind, aliasFill.contentKind);
    // A property alias or rest fills on its own; a direct alias reads this.
    if (isDirectAlias(alias)) {
      kind = mergeKinds(kind, aliasFill.kind);
      for (const [intersection, section] of aliasFill.filledIntersections ||
        []) {
        (filledIntersections ||= new Map()).set(intersection, section);
      }
    }
  }
  // A known child that is itself stateful structure renders every read from
  // what its calls pass, on the client.
  if (isKnownChild(binding.section) && isStatefulStructure(binding.section)) {
    kind = true;
  }
  for (const [read] of binding.reads) {
    // A spread's attributes still render; any other effect read outside
    // unpatched structure refreshes through the owner slot write.
    const effect = readsValuesOnResume(read);
    // A handler reads the slot at call time: the owner write keeps it
    // current with no registration to shake.
    if (readsAtCall(read, binding)) continue;
    const refs = getReferencedBindings(read);
    const written = Array.isArray(refs) && isFilledIntersection(refs);
    // A derived value renders it by its own kind; passed to another template,
    // this read renders it, and the callee reports its own state.
    let rendersContent = isContentRender(read);
    forEach(read.derives, (derived) => {
      if (derived.section.program === binding.section.program) {
        const derivedKind = getFillReadKind(derived).contentKind;
        if (derivedKind) {
          contentKind = mergeKinds(contentKind, derivedKind);
          rendersContent = true;
        }
      } else if (someRead(bindingReaders(derived, true), isContentRender)) {
        rendersContent = true;
      }
    });
    const handOff: { under?: SortedOpt<Section> } | undefined = rendersContent
      ? {}
      : undefined;
    // A `<let>`'s initial value is read again only where the client creates its scope.
    const readKind = read.initialValue
      ? getReadStructure(binding, read, effect)
      : getReadKind(binding, read, effect, written, handOff);
    kind = mergeKinds(kind, readKind);
    if (rendersContent) {
      contentKind = mergeKinds(
        contentKind,
        mergeKinds(readKind || {}, { passedUnder: handOff!.under }),
      );
    }
    if (written && readKind !== true && readKind?.members) {
      (filledIntersections ||= new Map()).set(refs, read.section);
    }
  }
  return {
    kind,
    contentKind,
    filledIntersections,
  };
}

// A dynamic tag's body or attribute tag a consumer may render as a client branch.
function isClientBranchContent(section: Section) {
  return !section.branch && consumerMayRenderClientBranch(section);
}

// An `<await>` body handing on a value from above it may keep content after
// the gates around it ran: pending, they count it kept.
export function awaitMayRenderClientBranch(body: Section) {
  for (let above = body.parent; above; above = above.parent) {
    if (
      some(above.bindings, (binding) => {
        const kind = getPatchFill(binding).contentKind;
        return kind !== true && sectionUtil.has(kind?.passedUnder, body);
      })
    ) {
      return true;
    }
  }
  return false;
}

// A known child's param a call in `section` passes.
function isCalleeParam(derived: Binding, section: Section) {
  return derived.section !== section && isKnownChild(derived.section);
}

// What one read needs of the binding's fill: `true` for every patch.
function getReadKind(
  binding: Binding,
  read: ReferencedExtra,
  effect: boolean,
  written: boolean,
  handOff?: { under?: SortedOpt<Section> },
): true | FillConditions | undefined {
  const knownChild = isKnownChild(binding.section);
  const refs = getReferencedBindings(read);
  let conditions: FillConditions | undefined;
  if (!effect) {
    const sources = getSourcesForReferencedBindings(refs);
    // A function with filled references' intersection with client state gets it by its bind and render.
    if (
      Array.isArray(refs) &&
      holdsRegisteredFn(binding) &&
      rendersIntersectionByWrite(refs, binding)
    ) {
      return;
    }
    if (sources?.state) return true;
    const derived = getDerivedNeeds(read);
    if (derived === true) return true;
    if (derived) conditions = mergeConditions(conditions, derived);
    if (written) {
      // The patch renders the intersection where it runs on the client, which needs
      // a caller's value of this binding.
      const members =
        hasCallerParamSourceAt(binding.sources, binding.section) &&
        getOtherInputs(sources, binding);
      if (members) conditions = mergeConditions(conditions, { members });
    } else {
      // An intersection whose other members a caller may pass client state,
      // dispatched from this scope; an `<await>` value re-fires no promise.
      const others =
        knownChild &&
        getExprBranch(read)?.kind !== "await" &&
        getOtherInputs(sources, binding);
      if (others && hasTagCallerParamAt(others, binding.section)) {
        conditions = mergeConditions(conditions, { intersections: others });
      }
    }
    // An intersection with a param of a body outside the binding's is computed where
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
  // A filled intersection's read needs the binding wherever the intersection runs on the
  // client, whatever structure it sits in; it still hands the value on under `<await>` bodies.
  if (written) {
    if (handOff) getReadStructure(binding, read, effect, handOff);
    return conditions;
  }
  return mergeKinds(
    conditions,
    getReadStructure(binding, read, effect, handOff),
  );
}

// The structure between the binding's section and the read that may update from the client
// (`true`: always), a path no per-section memo holds; `handOff` takes `<await>` bodies.
function getReadStructure(
  binding: Binding,
  read: ReferencedExtra,
  effect: boolean,
  handOff?: { under?: SortedOpt<Section> },
): true | FillConditions | undefined {
  let found: FillConditions | undefined;
  // A `<define>` body reads as if at each tag rendering its var, with the
  // contents no `<await>` holds yet: again only when those grow, so it ends.
  const carriedAt = new Map<Section, SortedOpt<Section>>([
    [read.section, undefined],
  ]);
  const pending: [Section, SortedOpt<Section>][] = [[read.section, undefined]];
  for (const [readAt, carried] of pending) {
    // No patch write reaches a skipped region: reads in stateful structure or
    // boundary content the client renders take owner fills.
    let readSection: Section | undefined = readAt;
    let unawaited = carried;
    while (readSection && readSection !== binding.section) {
      if (isStatefulStructure(readSection) || readSection.boundaryContent) {
        return true;
      }
      if (handOff && readSection.branch?.kind === "await") {
        handOff.under = sectionUtil.add(handOff.under, readSection);
      }
      // Each content around the read a consumer may render as a client branch: any of them the
      // client keeps renders what is inside.
      if (isClientBranchContent(readSection)) {
        unawaited = sectionUtil.add(unawaited, readSection);
      }
      if (readSection.renderedBy) {
        forEach(readSection.renderedBy, (call) => {
          const callSection = call.childScopeBinding.section;
          const prev = carriedAt.get(callSection);
          if (
            !carriedAt.has(callSection) ||
            !sectionUtil.isSuperset(prev, unawaited)
          ) {
            const next = sectionUtil.union(prev, unawaited);
            carriedAt.set(callSection, next);
            pending.push([callSection, next]);
          }
        });
        unawaited = undefined;
        break;
      }
      readSection = readSection.parent;
    }
    // What no `<await>` body holds its section's end sees.
    const contents = unawaited;
    if (effect) continue;
    // An `<await>` in content the client keeps takes its promise by the fill,
    // as the patch pairs no boundary there to carry its settlement.
    if (contents) found = mergeConditions(found, { contents });
    // A hoisted read sits in no structure below the binding.
    if (!isSameOrAncestorSection(binding.section, readAt)) continue;
    // What creates the read's section anew on the client (main's reason): a
    // caller's group there, or a `<define>` body's calls, leave it unfilled.
    const reason = getBranchExprReasonUntil(readAt, binding.section);
    // State here can only be a `<let>` keeping its initial value: it never re-creates it.
    const created = reason?.state
      ? withSources(reason, undefined, reason.param)
      : reason;
    const passed = getDefineCallSources(created, binding.section);
    if (passed?.state) return true;
    for (const sources of [created, passed]) {
      const others = getOtherInputs(sources, binding);
      if (
        hasTagCallerParamAt(others, binding.section) &&
        !isCoveredParam(binding, others!.param)
      ) {
        found = mergeConditions(found, { structure: others });
      }
    }
  }
  return found;
}

// A closure's sources beside the params its reads here intersect it with that its section
// cannot gate on: where a call passes those, the client computes the intersection.
export function getClosureReadSources(closure: Binding, section: Section) {
  let sources = closure.sources;
  for (const read of closure.reads.keys()) {
    if (read.section === section) {
      const params = bindingUtil.filter(
        getSourcesForExpr(read)?.param,
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

// What deriving the read's values needs of it: an uncontrolled `<let>` derives once,
// as its scope renders, and a callee keeps its own copy of what a call passes.
function getDerivedNeeds(read: ReferencedExtra) {
  if (read.initialValue) return;
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

// What the calls of `<define>` bodies outside `section` pass for their params among
// the sources, as `section` guards it.
function getDefineCallSources(sources: Sources | undefined, section: Section) {
  const params = bindingUtil.filter(
    sources?.param,
    (param) => !isSameOrAncestorSection(param.section, section),
  );
  return params && mapBodyParams(section, createSources(undefined, params));
}

// The params a read intersects (or the structure around it selects by) besides the
// binding's own that a write in its section gates on: a caller passes each.
function getOtherInputs(sources: Sources | undefined, binding: Binding) {
  const others = bindingUtil.difference(
    bindingUtil.filter(sources?.param, (param) =>
      isCallerParamAt(param, binding.section),
    ),
    binding.sources?.param,
  );
  return others && createSources(undefined, others);
}

// Whether the consumer may render the content as a client branch, as the runtime decides: client
// code renders it on its own, or client state reaches its structural params.
function consumerMayRenderClientBranch(content: Section) {
  const reason = getRendererReason(content);
  // Read unconditionally, its renderer renders wherever the consumer puts it
  // (a `@catch` on a client error, say), apart from any patch render.
  if (reason && !isGuardedReason(reason)) return true;
  const consumer = content.derives?.tag;
  // A dynamic tag's body, or a `<define>` var passed on (its direct tags
  // classify on their own), may reach any consumer, so the runtime decides.
  if (!consumer || !isKnownTagExtra(consumer)) {
    return !!reason;
  }
  for (const { params, sources } of getParamGroupSources(consumer) || []) {
    if (hasStructuralParam(params) && sources?.state) {
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
    !isStatefulStructure(content) &&
    !someRead(getDerivedReaders(derives), rendersApart)
  );
}

// A read rendering the content in structure or beside other inputs, or using
// it any other way than passing it on.
function rendersApart(read: ReferencedExtra) {
  return isContentRender(read)
    ? !!read.section.parent ||
        Array.isArray(getReferencedBindings(read.merged || read))
    : !read.derives;
}

// The branch of the control flow tag whose expression the read is.
function getExprBranch(read: ReferencedExtra) {
  return read.section.children.find(
    (child) => child.branchExpr === read && child.branch,
  )?.branch;
}

function mergeConditions(
  a: FillConditions | undefined,
  b: FillConditions,
): FillConditions {
  return {
    structure: sourcesUtil.union(a?.structure, b.structure),
    intersections: sourcesUtil.union(a?.intersections, b.intersections),
    contents: sectionUtil.union(a?.contents, b.contents),
    passedUnder: sectionUtil.union(a?.passedUnder, b.passedUnder),
    members: sourcesUtil.union(a?.members, b.members),
  };
}

// An effect read of a written value re-runs by register id when a patch
// changes what it saw; ask through `someAlias` (direct aliases only).
function hasEffectRead(binding: Binding) {
  return someBindingRead(binding, readsValuesOnResume);
}

// Whether a patch re-runs an effect that reads `binding` (its fill root).
export function runsEffectOnPatch(binding: Binding) {
  return !!getPatchWrite(getCanonicalBinding(binding)).effect;
}

// A value a patch may fill, as `>` hops from `section` up to its own (what the
// runtime's `readChanged` reads); client state and constants it never fills.
export function getWriteHop(section: Section, binding: Binding) {
  if (hasParamOrGlobalSource(binding.sources)) {
    return (
      ">".repeat(section.depth - binding.section.depth) +
      getScopeAccessor(binding)
    );
  }
}

// An effect its entry re-runs on every member a patch fills: one it writes, or
// one it fills (whose fill marks its change), with no client state among them.
export function runsByEntry(refs: ReferencedBindings) {
  return !!refs && every(refs, runsEffectOnPatch);
}

// A binding holding only functions its template may register, each reading its
// references from the live scope.
export function holdsRegisteredFn(binding: Binding) {
  const { derivedFrom } = getCanonicalBinding(binding);
  return !!derivedFrom && every(derivedFrom, isTrackedFunction);
}

// An intersection its scope renders by id once a write marks the member: client state over
// a bound function with filled references, or a written caller-fed row param beside caller state.
function rendersIntersectionByWrite(
  intersection: Intersection,
  member: Binding,
) {
  if (!hasGuardedSources(member)) return false;
  const sources = getSourcesForReferencedBindings(intersection);
  // One the client runs beside a server value: with client state, where its group mixes,
  // where another member a caller may pass client state, or not deriving only what the patch writes.
  return (
    !!sources?.state ||
    isFilledIntersection(intersection) ||
    hasTagCallerParamAt(getOtherInputs(sources, member), member.section) ||
    someBindingRead(
      member,
      (read) =>
        getReferencedBindings(read) === intersection &&
        patchFillsSection(read.section) &&
        !leavesReadToPatch(read) &&
        !(read.derives && every(read.derives, isServerSourced)),
    )
  );
}

// A member such an intersection reads, which the patch writes for the intersection's render.
const writesForIntersectionRender = createPassMemo(
  (binding: Binding) =>
    someAlias(binding, hasRenderByWriteRead, undefined, true),
  false,
);

function hasRenderByWriteRead(alias: Binding) {
  return someBindingRead(alias, rendersByWriteRead);
}

function rendersByWriteRead(read: ReferencedExtra, binding: Binding) {
  const intersection = getReferencedBindings(read);
  return (
    Array.isArray(intersection) &&
    rendersIntersectionByWrite(intersection, binding)
  );
}

// A server value with reads that need its fill: client code renders them from a patch's write.
function hasServerFillReads(binding: Binding) {
  return !!getFillReadKind(binding).kind && hasGuardedSources(binding);
}

// Structure the client may render: content, unpatched structure, or
// param-selected structure a caller may hand the client.
function clientMayRender(section: Section) {
  return (
    clientMayRenderInAnyCall(section) ||
    !!getParamSelectedStructure(section)?.some((sources) =>
      hasTagCallerParamAt(sources, section),
    )
  );
}

// Content a flush can't reach by data (below `upTo`), or unpatched structure: no
// caller's params decide.
export function clientMayRenderInAnyCall(section: Section, upTo?: Section) {
  return (
    !!getClientRenderedContents(section, upTo) || !patchFillsSection(section)
  );
}

// The references of a function a patch may write, as hops from its section,
// which its `_bind_resume` names. One reading client state is the client's.
export const [getFilledReferences] = createAnalysisMemo(
  (fn: t.FunctionExtra & t.NodeExtra): string | undefined =>
    getFilledReferenceBindings(fn)
      ?.map((reference) => getWriteHop(fn.section!, reference))
      .join(" "),
  undefined,
);

export function hasFilledReferences(
  expr: t.NodeExtra,
): expr is t.FunctionExtra & t.NodeExtra {
  return !!getFilledReferenceBindings(expr);
}

// The canonical references of a function a patch may write: none where one is
// client state.
const [getFilledReferenceBindings] = createAnalysisMemo(
  (fn: t.FunctionExtra & t.NodeExtra): Binding[] | undefined => {
    const references = reduceWhile(
      getReferencedBindingsInFunction(fn),
      addFilledReference,
      [],
    );
    return references?.length ? references : undefined;
  },
  undefined,
);

function addFilledReference(references: Binding[], ref: Binding) {
  const reference = getCanonicalBinding(ref);
  if (isStateSourced(reference)) return;
  if (hasParamOrGlobalSource(reference.sources)) references.push(reference);
  return references;
}

// A function a value the expressions may evaluate to passes `test`, following each
// value to what it derives from in this template.
export function someFnValue(
  exprs: Opt<t.NodeExtra>,
  test: (expr: t.NodeExtra) => boolean,
  seen = new Set<Binding>(),
): boolean {
  return some(
    exprs,
    (expr) =>
      test(expr) ||
      some(getReferencedBindings(expr), (ref) =>
        someFnValueOf(getCanonicalBinding(ref), test, seen),
      ),
  );
}

function someFnValueOf(
  binding: Binding,
  test: (expr: t.NodeExtra) => boolean,
  seen = new Set<Binding>(),
): boolean {
  if (seen.has(binding)) return false;
  seen.add(binding);
  return someFnValue(binding.derivedFrom || undefined, test, seen);
}

// A function a known child's `<return>` gives a value the expressions may evaluate
// to passes `test`, as the child returns it or past a `<return>` of its own.
export function someReturnedFnValue(
  exprs: Opt<t.NodeExtra>,
  test: (expr: t.NodeExtra) => boolean,
  seen = new Set<Binding>(),
): boolean {
  return some(exprs, (expr) =>
    some(getReferencedBindings(expr), (ref) =>
      someReturnedFnValueOf(getCanonicalBinding(ref), test, seen),
    ),
  );
}

export function someReturnedFnValueOf(
  binding: Binding,
  test: (expr: t.NodeExtra) => boolean,
  seen = new Set<Binding>(),
): boolean {
  if (seen.has(binding)) return false;
  seen.add(binding);
  const { returnedBy } = binding;
  if (!returnedBy) {
    return someReturnedFnValue(binding.derivedFrom || undefined, test, seen);
  }
  const returned = returnedBy.section?.returnValueExpr;
  return someFnValue(returned, test) || someReturnedFnValue(returned, test);
}

const NO_READS = new Set<never>();

// What an entry reading `binding` depends on: a value's own change and the filled
// references of the functions it may hold.
export const [getFilledReads] = createAnalysisMemo(
  (binding: Binding): Set<Binding> => {
    const root = getCanonicalBinding(binding);
    const reads = new Set<Binding>().add(root);
    for (const reference of getFnValueReferences(root)) reads.add(reference);
    // A value client state derives changes as what it derives from in scope does.
    if (root.sources?.state) {
      forEach(getValueReferences(root.derivedFrom || undefined), (ref) => {
        for (const read of getFilledReads(ref)) {
          if (isSameOrAncestorSection(read.section, root.section)) {
            reads.add(read);
          }
        }
      });
    }
    return reads;
  },
  NO_READS,
);

// What the functions with filled references a value may hold read from the scope when called, where a
// patch writes it: a call sees each change with no new function.
const [getFnValueReferences] = createAnalysisMemo(
  (holder: Binding): Set<Binding> => {
    const references = new Set<Binding>();
    // Visits every function it may hold.
    someFnValueOf(holder, (fn) => {
      for (const reference of getFilledReferenceBindings(fn) || []) {
        references.add(reference);
      }
      return false;
    });
    return references;
  },
  NO_READS,
);

export function addFilledReads(reads: Set<Binding>, binding: Binding) {
  for (const read of getFilledReads(binding)) reads.add(read);
  return reads;
}

// Referenced inside a function client code reads (registering it): its reads
// reach the live scope at any later invocation, so a patch keeps it current.
function isRegisteredFnReference(binding: Binding) {
  for (const reads of binding.reads.values()) {
    if (some(reads, isRegisteredFnRead)) return true;
  }
  return false;
}

function isRegisteredFnRead(read: Read) {
  return !!read.fnRoot?.reason;
}

// How a scope runs what nothing it receives renders: a closure's value, or a
// intersection some members of which arrive seeded or not at all.
export interface CreatedSetup {
  // Its setup runs on every created scope, or where the client contributes the
  // group (`mixed`: a render on any scope).
  setup?: "always" | "client" | "mixed";
  // It subscribes the closure where no patch fills it: resuming, or rendering at once
  // where the client contributes it (`client`) or wherever an `<await>` settles from it.
  subscribe?: "resume" | "client" | "render";
}

// The intersections the section's signals render, once ids allocate: one with a constant
// member records a read's constants beside its intersection.
const [getRenderedIntersections] = createAnalysisMemo((section: Section) => {
  const intersections: Intersection[] = [];
  for (const intersection of section.intersections!.keys()) {
    if (!some(intersection, isConstant)) {
      intersections.push(intersection);
    }
  }
  return intersections;
}, []);

function isConstant(member: Binding) {
  return member.type === BindingType.constant;
}

// Whether an intersection the section renders reads the closure.
function isReadInIntersection(section: Section, closure: Binding) {
  return getRenderedIntersections(section).some((intersection) =>
    bindingUtil.has(intersection, closure),
  );
}

const NO_SETUP = new Map<never, never>();

// Each section's closure setups, from the fills of the moment.
const getClosureSetups = createPassMemo(computeClosureSetups, NO_SETUP);

// The setup the server names for the section's scopes, its closures' and
// intersections', asked once ids allocate the intersections.
export const [getCreatedSetup] = createAnalysisMemo(
  computeCreatedSetup,
  NO_SETUP,
);

function computeClosureSetups(
  section: Section,
): Map<Binding, CreatedSetup["setup"]> {
  const setups = new Map<Binding, CreatedSetup["setup"]>();
  forEach(section.referencedClosures, (closure) => {
    const setup = getClosureSetup(section, closure);
    if (setup) setups.set(closure, setup);
  });
  return setups.size ? setups : NO_SETUP;
}

function computeCreatedSetup(section: Section) {
  const intersectionSetups = new Map<Intersection, CreatedSetup>();
  // A closure read here only by intersections every created scope sets up needs no setup
  // of its own, unless it subscribes by it.
  const intersectionClosures = new Set<Binding>();
  for (const intersection of getRenderedIntersections(section)) {
    const setup = getIntersectionSetup(section, intersection);
    if (setup) {
      intersectionSetups.set(intersection, setup);
      if (setup.setup === "always") {
        for (const member of intersection) intersectionClosures.add(member);
      }
    }
  }
  const setups = new Map<Binding | Intersection, CreatedSetup>();
  forEach(section.referencedClosures, (closure) => {
    const setup = getClosureSetups(section).get(closure);
    const subscribe = getClosureSubscribe(section, closure, setup);
    const named =
      (setup || subscribe) &&
      (setup === "mixed" ||
        isDynamicClosure(section, closure) ||
        !intersectionClosures.has(closure) ||
        someReadIn(closure, section, (read) => {
          const intersection = getReferencedBindings(read);
          return (
            !Array.isArray(intersection) ||
            intersectionSetups.get(intersection)?.setup !== "always"
          );
        })) &&
      getNamedSetup(section, { setup, subscribe });
    if (named) setups.set(closure, named);
  });
  for (const [intersection, setup] of intersectionSetups) {
    const named = getNamedSetup(section, setup);
    if (named) setups.set(intersection, named);
  }
  return setups.size ? setups : NO_SETUP;
}

// The part of a setup the server names: what every created scope does, by its
// shell or a composing scope's setup, else what a flush writes.
function getNamedSetup(
  section: Section,
  { setup, subscribe }: CreatedSetup,
): CreatedSetup | undefined {
  const flushNames = patchCreatesOrComposes(section);
  // A created scope's shell names its setup, a client contribution's included, and
  // a patch a mixed one's render on any scope.
  const namesSetup =
    setup === "always" || setup === "client" ? flushNames : setup === "mixed";
  const named: CreatedSetup = {
    setup: namesSetup ? setup : undefined,
    subscribe: flushNames ? subscribe : undefined,
  };
  return named.setup || named.subscribe ? named : undefined;
}

// An intersection's created setup: a state one's unless each member arrives by its signal (only
// where the client sets its states, if the patch seeds its reads); caller params' where passed.
function getIntersectionSetup(
  section: Section,
  intersection: Intersection,
): CreatedSetup | undefined {
  if (section.intersections!.get(intersection)!.source) return;
  if (
    some(intersection, (member) =>
      rendersIntersectionByWrite(intersection, member),
    )
  ) {
    return { setup: "mixed" };
  }
  const sources = getSourcesForReferencedBindings(intersection);
  if (sources?.state) {
    if (
      every(intersection, (member) => arrivesBySignal(member, section)) ||
      !mayBeCreated(section)
    ) {
      return;
    }
    const setup = getStateSetup(section, intersection);
    return setup && { setup };
  }
  if (!hasTagCallerParamAt(sources, section)) return;
  // A filled intersection no member's fill re-runs: a patch names it on any scope.
  if (rendersFilledIntersection(intersection)) return { setup: "mixed" };
  return { setup: "client" };
}

// Client state renders, and subscribes, by its own setup; where the patch seeds its
// reads, only where a caller sets its initial values.
function getStateSetup(
  section: Section,
  ref: Binding | Intersection,
): CreatedSetup["setup"] {
  if (!seedsReads(section, ref)) return "always";
  if (hasTagCallerParamAt(getSetupSources(ref), section)) return "client";
}

// The sources a client contributes a setup by: client state's initial values,
// as a created scope seeds what it computes from them.
export function getSetupSources(ref: Binding | Intersection) {
  const sources = getSourcesForReferencedBindings(ref);
  return sources?.state ? getStateInitialValueSources(sources.state) : sources;
}

// Client state only holes a patch writes and initial values of `<let>`s it fills read
// in the section, through its aliases too: a created scope takes those from the patch.
function seedsReads(section: Section, ref: Binding | Intersection) {
  const intersection = Array.isArray(ref);
  return !someAlias(
    intersection ? ref[0] : ref,
    (alias) =>
      someReadIn(
        alias,
        section,
        (read) =>
          (!intersection || getReferencedBindings(read) === ref) &&
          !isFilledHole(read) &&
          !(read.initialValue && every(read.derives, canPatchFill)),
      ),
    undefined,
  );
}

// A created scope gets the member by its signal, which runs a state intersection: state by
// its own setup or fill, never a seed a flush writes; a value with an unconditional fill.
function arrivesBySignal(member: Binding, section: Section) {
  const root = getCanonicalBinding(member);
  return (
    (isStateSourced(root) && !writesSeed(root)) ||
    (root.section === section && !!getPatchFill(root).fill)
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

function getClosureSetup(
  section: Section,
  closure: Binding,
): CreatedSetup["setup"] {
  if (closure.sources?.state) return getStateSetup(section, closure);
  if (hasGuardedSources(closure) && clientMayRender(section)) return "mixed";
  if (isClientRenderedClosure(closure, section)) return "client";
}

// A caller's other closures render where the client contributes them; an intersection
// of them sets itself up.
function isClientRenderedClosure(closure: Binding, section: Section) {
  return (
    hasTagCallerParamAt(closure.sources, section) &&
    someReadIn(closure, section, isLoneRead)
  );
}

// A closure an `<await>` here takes its promise from.
function settlesAwaitFrom(section: Section, closure: Binding) {
  return section.children.some(
    (body) =>
      body.branch?.kind === "await" &&
      some(
        getReferencedBindings(body.branchExpr!),
        (ref) => getCanonicalBinding(ref) === closure,
      ),
  );
}

// A created scope's closure sets up from the value a caller's client contributes,
// a mixed one's too where the server's own value renders it otherwise.
export function setupFromClient(
  section: Section,
  closure: Binding,
  setup: CreatedSetup["setup"],
) {
  return (
    setup === "client" ||
    (setup === "mixed" && isClientRenderedClosure(closure, section))
  );
}

// A caller's other dynamic closures subscribe, per instance where no patch fills them.
function getClosureSubscribe(
  section: Section,
  closure: Binding,
  setup: CreatedSetup["setup"],
): CreatedSetup["subscribe"] {
  if (
    setup !== "always" &&
    isDynamicClosure(section, closure) &&
    some(closure.sources?.param, (param) =>
      isReceivedParamAt(param, section),
    ) &&
    // Content a flush reaches by data takes every value from its entries, but
    // for the intersections with client state it computes itself.
    !(
      inContentReachedByData(section) && !isReadInIntersection(section, closure)
    )
  ) {
    return settlesAwaitFrom(section, closure)
      ? "render"
      : setupFromClient(section, closure, setup)
        ? "client"
        : "resume";
  }
}

// The sources take a param a calling tag may pass client state: a template's, or
// a `<define>` body's.
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
    !param.section.parent ||
    someCallPasses(param.section, param, passesClientState),
  false,
);

function passesClientState(passed: Sources | undefined) {
  return !!passed?.state || some(passed?.param, mayPassClientState);
}

// An intersection of params, one a caller passes, whose reads the patch leaves to holes
// and effect entries: where its group mixes, a member's fill or the render re-runs it.
export const isFilledIntersection = createPassMemo(
  (intersection: Intersection) => {
    const sources = getSourcesForReferencedBindings(intersection);
    if (!Array.isArray(sources?.param)) return false;
    let section: Section | undefined;
    for (const read of intersection[0].reads.keys()) {
      if (getReferencedBindings(read) === intersection) {
        if (!leavesReadToPatch(read)) return false;
        section = read.section;
      }
    }
    // Every caller asks for an intersection a read references, which sets `section`.
    return (
      hasTagCallerParamAt(sources, section!) &&
      !(
        isPassedStateByEveryCall(sources, true) &&
        // A member another intersection reads keeps it written: its key would ship for both.
        every(
          intersection,
          (member) => !readsOtherIntersection(member, intersection),
        )
      )
    );
  },
  false,
);

// A read the patch leaves to the holes it writes, the effects its entries
// re-run and the calls whose callees keep their inputs, through derived values.
export function leavesReadToPatch(read: ReferencedExtra): boolean {
  return (
    !rendersAtSite(read) && !some(exprReaders(read).directReads, rendersAtSite)
  );
}

// The client renders the read where it sits: it is no hole the patch fills nor a value
// resumed code reads, and it derives more than `derived` bindings and kept callee params.
function rendersAtSite(read: ReferencedExtra) {
  return (
    !isFilledHole(read) &&
    !(read.isEffect && runsByEntry(getReferencedBindings(read))) &&
    (!read.derives ||
      !every(read.derives, (derived) =>
        isCalleeParam(derived, read.section)
          ? calleeKeepsInput(read.section, getSourcesForExpr(read))
          : derived.type === BindingType.derived,
      ))
  );
}

function readsOtherIntersection(binding: Binding, intersection: Intersection) {
  return someBindingRead(binding, (read) => {
    const refs = getReferencedBindings(read);
    return Array.isArray(refs) && refs !== intersection;
  });
}

// A filled intersection the scope renders: some shipped member has no fill to re-run it
// (written for its render, below the root, over subscribers, in two, filled for others).
const rendersFilledIntersection = createPassMemo(
  (intersection: Intersection) =>
    isFilledIntersection(intersection) &&
    some(intersection, (ref) => {
      const member = getCanonicalBinding(ref);
      if (rendersIntersectionByWrite(intersection, member)) return true;
      const { kind, filledIntersections } = getFillReadKind(member);
      const section = filledIntersections?.get(intersection);
      return (
        !!section &&
        !(
          getFilledMembers(kind) &&
          filledIntersections!.size === 1 &&
          !member.section.parent &&
          // Its key's hops reach every scope of the intersection, unlike a subscriber set.
          section.enclosing.nonOptionalAncestor ===
            member.section.enclosing.nonOptionalAncestor
        )
      );
    }),
  false,
);

// The other members' sources of the intersections the patch writes, for a value only
// those intersections call for.
function getFilledMembers(kind: true | FillConditions | undefined) {
  return kind !== true &&
    kind?.members &&
    !(kind.structure || kind.intersections || kind.contents)
    ? kind.members
    : undefined;
}

// The caller params a `$global` signal reads unfilled: a changed key re-runs it
// only where they update from the client.
export function getUnfillableSources(refs: ReferencedBindings) {
  return getSourcesForReferencedBindings(
    bindingUtil.filter(refs, isUnfillablePatchRead),
  );
}

// Server-sourced reads a patch cannot keep current: param-sourced bindings
// a patch neither fills nor writes read stale after any patch render.
function isUnfillablePatchRead(binding: Binding) {
  return !!getPatchWrite(binding).unfillable;
}

// A patch fills a known child's value (a fill or a write), and a local
// derivation when it fills every server source (the client derives it).
function patchRefreshes(binding: Binding): boolean {
  const root = getCanonicalBinding(binding);
  if (getPatchFill(root).fill || isPatchWritten(root)) return true;
  if (isKnownChild(root.section)) return false;
  // A param arrives with its section, unless a branch derives it from its
  // expression (a loop item, an `<await>` value): then its sources decide.
  if (isSectionParam(root) && !derivesFromBranch(root)) return true;
  // Sources are params, which the checks above decide without recursing.
  return every(root.sources?.param, patchRefreshes);
}

// A branch's param its expression gives; one passed to its body (an attribute
// tag loop's item) is its own source.
function derivesFromBranch(param: Binding) {
  return (
    !!param.section.branchExpr && !bindingUtil.has(param.sources?.param, param)
  );
}

// Whether a patch may create this content: its tag can diverge, a consumer
// renders it in creatable structure, or an enclosing branch is created.
export function patchMayCreate(section: Section) {
  return (
    patchMayCreateOwn(section) ||
    (!!section.parent &&
      patchMayCreateEnclosing(section.parent, mayBeCreated(section.program)))
  );
}

const patchMayCreateOwn = createPassMemo((section: Section): boolean => {
  // A branch body is created with its parent; `patchMayCreateEnclosing` answers
  // for an optional one.
  if (section.branch) return false;
  if (section.branchExpr) {
    // A dynamic tag body: the tag renders it whenever its branch expression changes.
    return !!getFillSources(section.branchExpr) && patchFillsSection(section);
  }
  const { derives } = section;
  // A known consumer decides by where it renders the content; an unknown
  // one may do anything.
  if (!derives) return true;
  return someRead(getDerivedReaders(derives), (read, asInput) =>
    patchMayCreateAtRead(read, asInput, section),
  );
}, false);

// A consumer rendering the content client-side creates it on the client, and a
// read passing it on within the template leaves it to the reads of what it derives.
function patchMayCreateAtRead(
  read: ReferencedExtra,
  asInput: boolean,
  content: Section,
) {
  const rendersContent = isContentRender(read);
  const inTemplate = read.section.program === content.program;
  return (
    !isStatefulRead(read) &&
    (rendersContent ||
      !read.derives ||
      some(
        read.derives,
        (derived) => derived.section.program !== read.section.program,
      )) &&
    // A dynamic tag or call a patch switches creates what it renders or hands a child to
    // render; a child's read renders what its call site hands it, unless the child picks it.
    ((inTemplate
      ? (rendersContent
          ? switchesContent(read, asInput)
          : !!getFillSources(read) && derivesRenderedContent(read)) &&
        patchFillsSection(read.section)
      : picksContent(read, asInput)) ||
      // A callee's root renders where its call site does, which the content's
      // own sections answer.
      patchMayCreateEnclosing(
        read.section,
        inTemplate && mayBeCreated(read.section.program),
      ))
  );
}

// A read that may switch the content it renders: its input, or by a name with
// sources (one with none renders the same content for its scope's life).
function switchesContent(read: ReferencedExtra, asInput: boolean) {
  const name = getNameRead(read);
  return !name || !!name.binding.sources || asInput;
}

// A read choosing what it renders or passes on, unless handed on as is: a
// dynamic tag's name (its renderer may render its input anywhere), else itself.
function picksContent(read: ReferencedExtra, asInput: boolean) {
  const name = getNameRead(read);
  const passed = name || read.read;
  return !passed || !isSectionParam(passed.binding) || (!!name && asInput);
}

// The read a dynamic tag's name renders unchanged by the tag: a param its caller
// hands, or a binding with no source, which never changes.
export function getRendererRead(extra: t.NodeExtra) {
  const name = getNameRead(extra);
  return name && (!name.binding.sources || isSectionParam(name.binding))
    ? name
    : undefined;
}

// The param a dynamic tag's renderer changes by, as its caller passes it.
export function getRendererCallerSources(extra: t.NodeExtra) {
  const name = getNameRead(extra);
  return name && isSectionParam(name.binding)
    ? name.binding.sources
    : undefined;
}

// Whether a patch may create the section or one around it, where `root` says
// whether its template's root may be created.
function patchMayCreateEnclosing(section: Section, root: boolean): boolean {
  // A `@catch` or `@placeholder` a patch shows is created as a branch is.
  if (isOptionalBranch(section) || section.boundaryContent) {
    return patchFillsSection(section);
  }
  return section.parent
    ? patchMayCreateOwn(section) ||
        patchMayCreateEnclosing(section.parent, root)
    : root;
}

// A section whose scopes a flush creates from its shell: a branch, `<await>` or
// `<try>` body, a `@catch`, or content a patch may create.
export function patchCreates(section: Section) {
  return (
    patchFillsSection(section) &&
    (!!section.branch ||
      section.boundaryContent === "catch" ||
      shipsContentShell(section))
  );
}

// A section whose scopes a flush creates, from its shell or composed into a
// created scope's.
export function patchCreatesOrComposes(section: Section): boolean {
  return patchCreates(section) || patchComposes(section);
}

// A known child a created scope's shell composes: a template a caller renders
// (no page), or a `<define>` body a created or composed scope calls.
export const patchComposes = createPassMemo(
  (section: Section) =>
    isKnownChild(section) &&
    (section.parent
      ? some(section.renderedBy, isCreatedOrComposedCall)
      : mayBeCreated(section)),
  false,
);

function isCreatedOrComposedCall(call: KnownTagExtra) {
  return patchCreatesOrComposes(call.childScopeBinding.section);
}

// A `<define>` body reading what its owner holds, called where a flush may
// create the call: its shell hop, or its patch link below its owner, names it.
export function namesBodyOwner(section: Section, body: Section) {
  return (
    body.readsOwner &&
    patchFillsSection(section) &&
    patchCreatesOrComposes(section)
  );
}

// A fill needs a subscriber where no intersection dispatch reaches the read, or in
// boundary content, which may resume after a patch render and must catch up.
export function fillSubscribes(closure: Binding, section: Section) {
  return (
    // Param-selected structure's own render code keeps the subscriber.
    getPatchFill(closure).fill &&
    (closureCarriesFill(closure, section) ||
      (section.enclosing.awaitOrTryBody !==
        closure.section.enclosing.awaitOrTryBody &&
        hasClosureSignalRead(closure, section)))
  );
}

// The closure's own signal carries a fill to the section's reads: a lone
// read, or an intersection inside stateful structure, which no intersection dispatch reaches.
function closureCarriesFill(closure: Binding, section: Section) {
  return (
    hasLoneRead(closure, section) ||
    (inStatefulStructure(section) && hasClosureSignalRead(closure, section))
  );
}

// A read of the binding (or a direct alias, as an alias never fills on its
// own) in the section that renders through the closure itself, not an intersection.
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
function hasClosureSignalRead(binding: Binding, section: Section) {
  return (
    hasLoneRead(binding, section) ||
    (section.enclosing.nonOptionalAncestor !==
      binding.section.enclosing.nonOptionalAncestor &&
      someAlias(
        binding,
        (alias) => someReadIn(alias, section, runsFromClosure),
        undefined,
        true,
      ))
  );
}

function isLoneRead(read: ReferencedExtra, binding: Binding) {
  return (
    runsFromClosure(read, binding) &&
    !Array.isArray(getReferencedBindings(read))
  );
}

// A script, or a handler reading it as it attaches, re-runs from the closure.
function runsFromClosure(read: ReferencedExtra, binding: Binding) {
  return !readsAtCall(read, binding);
}

// A handler's lazy read: it reads the binding's slot only when invoked.
function readsAtCall(read: ReferencedExtra, binding: Binding) {
  return (
    readsValuesOnResume(read) && bindingUtil.has(getLazyBindings(read), binding)
  );
}

// On a server source change: `false` unless a patch fills every client read,
// else the param-selected structure leaving one unfilled (a fill partner's).
export const getUnfilledReadSources = createPassMemo(
  (binding: Binding) => findUnfilledStructure(binding, true, false, new Set()),
  false,
);

// The same for a closure's subscribers: one in content or a created scope
// subscribes in its own render context, which its owner cannot test.
export const getUnfilledSubscribedSources = createPassMemo(
  (binding: Binding) => findUnfilledStructure(binding, false, false, new Set()),
  false,
);

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
    // value holds wherever a tag retains it, a callee takes it or a caller.
    const readInFunction = inFunction || some(reads, isFnRead);
    if (
      isResumedRead(read) ||
      ((read.retained ||
        read.callSiteExprs ||
        read === read.section.program.returnValueExpr) &&
        readInFunction)
    ) {
      return false;
    }
    const refs = getReferencedBindings(read);
    // A server value a patch writes reaches closures in structure the client may render.
    if (
      !throughCreated &&
      read.section !== binding.section &&
      hasGuardedSources(binding) &&
      clientMayRender(read.section)
    ) {
      if (
        !patchFillsSection(read.section) ||
        getClientRenderedContents(read.section, binding.section)
      ) {
        return false;
      }
      // Content may sit in structure a caller selects too.
      structure =
        getParamSelectedStructure(read.section)?.reduce(
          addSources,
          structure,
        ) ?? structure;
    }
    // Content renders client side wherever its tag puts it, and a created scope
    // may set the closure up from its owner, or its caller's.
    for (
      let section: Section | undefined = read.section;
      section && section !== binding.section;
      section = section.parent
    ) {
      const setup = getClosureSetups(section).get(binding);
      if (
        (!section.branch && !rendersWithOwner(section)) ||
        setup === "always"
      ) {
        if (!throughCreated) return false;
        structure = sourcesUtil.union(
          structure,
          getSourcesForReferencedBindings(refs),
        );
        break;
      }
      // The owner keeps what a mixed one sets up from too; its write never reaches the client's.
      if (
        throughCreated
          ? setupFromClient(section, binding, setup)
          : setup === "client"
      ) {
        structure = sourcesUtil.union(
          structure,
          getSourcesForReferencedBindings(refs),
        );
      }
    }
    if (Array.isArray(refs)) {
      // One a member of which every call passes client state runs on the client.
      if (
        isPassedStateByEveryCall(getSourcesForReferencedBindings(refs), true)
      ) {
        return false;
      }
      // An intersection of a closure a caller's client contributes sets itself up on a
      // created scope, reading the closure from its owner.
      if (
        read.section !== binding.section &&
        hasTagCallerParamAt(binding.sources, read.section)
      ) {
        structure = sourcesUtil.union(
          structure,
          getSourcesForReferencedBindings(refs),
        );
      }
      const filledHole = isFilledHole(read);
      for (const ref of refs) {
        const partner = getCanonicalBinding(ref);
        if (partner === binding) continue;
        const { fill } = getPatchFill(partner);
        // A partner's fill re-runs the intersection client side, unless the flush
        // fills the intersection's hole itself.
        if (fill && !filledHole) return false;
        // A caller param fills (or is written for an intersection's render) by its group;
        // one no patch fills re-runs the intersection only where the client calls it.
        if (hasCallerParamSource(partner.sources)) {
          structure = sourcesUtil.add(
            structure,
            (fill || writesForIntersectionRender(partner)
              ? getSourcesForReferencedBindings(refs)
              : partner.sources)!,
          );
        }
      }
    }
    // A callee keeps its copy of what a call passes, as an uncontrolled `<let>` does of
    // its initial value; a value a patch fills or writes reaches readers so, but through a function.
    if (
      !read.callSiteExprs &&
      !read.initialValue &&
      some(read.derives, (derived) => {
        if (
          !readInFunction &&
          (getPatchFill(derived).fill || isPatchWritten(derived))
        ) {
          return false;
        }
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

function addSources(all: SortedOpt<Sources>, sources: Sources) {
  return sourcesUtil.add(all, sources);
}

// A read resumed code renders wherever its scope sits, so no patch fills it: also one
// no patch pairs, or deriving what no patch fills (one it writes reaches its readers).
export function isResumedRead(read: ReferencedExtra) {
  return (
    readsValuesOnResume(read) ||
    !!getSourcesForExpr(read)?.state ||
    !patchFillsSection(read.section) ||
    (!!getDerivedNeeds(read) && !every(read.derives, isPatchWritten))
  );
}

// Its group is the server's on every instance: guarded sources (a page's input,
// `$global`, a caller's params) no caller may pass client state, which the client never derives.
function isServerSourced(binding: Binding) {
  return (
    hasGuardedSources(binding) &&
    !hasTagCallerParamAt(binding.sources, binding.section)
  );
}

// Only a caller's params or `$global` change the value: the patch writes it and
// names its readers.
export function hasGuardedSources(binding: Binding) {
  return isGuardedReason(binding.sources);
}

// Subscribers of a server value's closure that its owner's entry runs by id, where a
// patch writes the value and the client may render them below its owner.
export function runsSubscribersByWrite(closure: Binding, section: Section) {
  if (
    !isDynamicClosure(section, closure) ||
    !getPatchWrite(getCanonicalBinding(closure)).write
  ) {
    return false;
  }
  return mayHandStructureToClient(closure, section);
}

// A call may hand the client the structure between a closure and its reader.
export function mayHandStructureToClient(closure: Binding, section: Section) {
  const structure = getCallerSelectedStructure(closure, section);
  return (
    !structure ||
    structure.some((sources) => hasTagCallerParamAt(sources, section))
  );
}

// The param-selected structure between a closure and its reader that a call passing client state
// hands the client, by params besides the closure's own; none where it may render below it.
export function getCallerSelectedStructure(closure: Binding, section: Section) {
  if (clientMayRenderInAnyCall(section, closure.section)) return;
  const above = getParamSelectedStructure(closure.section);
  const structure: Sources[] = [];
  for (const sources of getParamSelectedStructure(section) || []) {
    if (!above?.includes(sources)) {
      const passed = mapBodyParams(closure.section, sources);
      if (passed?.state) return;
      const others = getOtherInputs(passed, closure);
      if (others) structure.push(others);
    }
  }
  return structure;
}
