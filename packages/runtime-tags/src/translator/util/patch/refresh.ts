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
import { createAnalysisMemo, createPassMemo } from "../cyclic-memo";
import { differsPerRender, readsValuesOnResume } from "../finalize-references";
import {
  derivesConstantInput,
  ensureKnownTagPatchGroups,
  getCallSiteSources,
  getParamGroupSources,
  isKnownTagExtra,
  someCallPasses,
} from "../known-tag";
import { isPatch } from "../marko-config";
import { isTrackedFunction } from "../module-registrations";
import { every, forEach, reduce, some, type SortedOpt } from "../optional";
import {
  getSourcesForDerived,
  getSourcesForExpr,
  getSourcesForRef,
  isConditionalReason,
  isUnconditionalReason,
} from "../reasons";
import {
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
  type Section,
  ensureCallerParamGroups,
  getConditionalCallerGroupsAt,
  isContentRender,
  forEachSection,
  getRendererReason,
  isKnownChild,
  isCallerParamAt,
  isDynamicClosure,
  isSameOrAncestorSection,
  sectionUtil,
  isLoopBody,
} from "../sections";
import { inCreatedCatch, shipsContentShell } from "../shell";
import { findSlot, type Slot, SlotKind } from "../slots";
import {
  bindingReaders,
  extraReaders,
  getBranchExprReasonUntil,
  getDerivedReaders,
  READ_AS_INPUT,
  READ_BEFORE_CALL,
  someRead,
} from "../solve-reasons";
import {
  createSources,
  hasCallerParamSource,
  hasCallerParamSourceAt,
  hasParamOrGlobalSource,
  isInParams,
  mergeSources,
  type Sources,
  sourcesUtil,
  withSources,
} from "../sources";
import { createAnalysisState } from "../state";
import { getWriteReason } from "../write-guard";
import {
  getStateInitSources,
  getWriteSources,
  isFilledHole,
} from "./decisions";
import {
  patchWrites,
  hasStructuralParam,
  isKnownChildNode,
  inStatefulBranch,
  isStatefulBranch,
  getParamSelectedStructure,
  calleeKeepsInput,
  getStatefulConsumers,
  isPassedStateByEveryCall,
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
  const { markoOpts, opts } = getFile();
  return getTemplateId(
    markoOpts,
    opts.filename as string,
    "fill" + getFillOrdinals().get(binding)! + (split ? "/" + split : ""),
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
    ((hasParamOrGlobalSource(binding.sources) &&
      !binding.sources!.state &&
      (binding.type === BindingType.param ||
        binding.type === BindingType.derived ||
        (binding.type === BindingType.let && !binding.assignments))) ||
      // Read only by functions, it follows the server's value (sources
      // resolve before registration says whether client code reads it).
      (!binding.sources && differsPerRender(binding))) &&
    !derivesLocals(binding.section)
  );
}

// Content plain renders on the client derives its locals from its closures
// there: a patch neither fills nor sends them.
export function derivesLocals(section: Section) {
  return isContentScope(section) && !!getRendererReason(section);
}

// Inside content a flush reaches only by data.
function inContentReachedByData(section: Section) {
  return (
    section.enclosing.inContentSection && !inClientRenderedContent(section)
  );
}

// Inside content a flush can't reach by data alone: there its closures
// subscribe, and a flush sets them by fills.
function inClientRenderedContent(section: Section) {
  for (
    let cur: Section | undefined = section;
    cur?.enclosing.inContentSection;
    cur = cur.parent
  ) {
    if (
      !cur.branch &&
      (cur.derives || cur.branchExpr || cur.boundaryContent) &&
      !reachedByData(cur)
    ) {
      return true;
    }
  }
  return false;
}

// Content a known tag renders, passed from no state and called in place nowhere,
// that plain renders nowhere on the client: a flush reaches each instance by data.
function reachedByData(section: Section) {
  return (
    !!section.derives &&
    !section.callSections &&
    !getSourcesForDerived(section.derives)?.state &&
    !getRendererReason(section)
  );
}

// Content with no params or local closures.
function isContentScope(section: Section) {
  return (
    !section.params &&
    !section.localClosures &&
    !!section.parent &&
    !section.branch &&
    !section.boundaryContent &&
    !isKnownChild(section)
  );
}

// The flush fills the closure wherever a consumer withholds this content
// (`_content_withheld`), so the content's registration need not carry it.
export function fillsWithheldContent(closure: Binding, content: Section) {
  const { fill } = getPatchFill(closure);
  return (
    fill === true ||
    (!!fill &&
      (sectionUtil.has(fill.contents, content) ||
        sectionUtil.has(fill.awaitedContents, content)))
  );
}

// Every content around the reads a consumer may withhold, gated at the
// binding's section end or at an `<await>` body's.
export function hasContents(conditions: FillConditions | undefined) {
  return !!(conditions?.contents || conditions?.awaitedContents);
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
  contentKind?: true | FillConditions;
  keptInLet?: boolean;
  fill?: true | FillConditions;
  fillsReads?: boolean;
  fillsWithoutStructure?: boolean;
  splitsContent?: boolean;
  derivedNeeds?: true | FillConditions;
  effectRead?: boolean;
  /** A function client code reads, or a flush seeds, captures it. */
  fnCapture?: boolean;
  /** A built object an effect reads is built from it (`holdsBuiltObject`). */
  objectSource?: boolean;
  writeReads?: boolean;
  ownRegistration?: boolean;
  joinWrites?: SortedOpt<Sources>;
  joinFill?: Intersection;
  unpatchedOnly?: boolean;
  unpatchedJoins?: Intersection[];
  unpatchedStructure?: true | FillConditions;
  unpatchedSections?: SortedOpt<Section>;
}

// What a patch writes and seeds, asked once shells are built.
export interface PatchWrite {
  write?: boolean;
  effect?: boolean;
  seed?: boolean;
  unfillable?: boolean;
}

const UNREAD: PatchFill & PatchWrite = {};

// A value re-asked within its own answer (a recursive `<define>`) is unread.
export const getPatchFill = createPassMemo(computePatchFill, UNREAD);

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
  const effectRead = someAlias(binding, hasEffectRead, undefined, true);
  const fnCapture = someAlias(binding, isRegisteredFnCapture, undefined, true);
  const objectSource = someAlias(
    binding,
    buildsEffectReadObject,
    undefined,
    true,
  );
  // A rendered read (through any alias) the client must derive: joined
  // with state, or inside structure the client may own.
  const fill = fillable ? (binding.sources?.state ? true : reasons) : undefined;
  const conditions = fill === true ? undefined : fill;
  // A fill shipped for other reads too reaches calls in its own param-selected
  // structure only by its unpatched key, sent where the client renders it.
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
    fill === true || !!conditions?.structure || hasContents(conditions);
  // Only the patch's key reaches the declaration: a `<let>` nothing assigns, a template
  // input its signal alone reads, or an always-filled server value its own effects read.
  const ownRegistration =
    !!fill &&
    (binding.sources?.state
      ? !hasResumableAssignment(binding) &&
        bindingUtil.has(binding.sources.state, binding)
      : (!binding.section.parent && hasDeclarationOnlyReads(binding)) ||
        (fill === true && someAlias(binding, readsOwnEffect, undefined, true)));
  // A client join and withheld content both call for it: it refreshes the
  // content under a key of its own, which a patch writing the join sends.
  const splitsContent =
    !!conditions?.contents &&
    !!(conditions!.joins || conditions!.structure || conditions!.fills);
  // The unpatched key ships wherever the fill's own guard holds, which leaves
  // the fill key only content that refreshes under a key of its own.
  const unpatchedOnly =
    !!fill &&
    !!unpatchedStructure &&
    (unpatchedStructure === true ||
      holdsWithin(conditions, unpatchedStructure.structure, splitsContent));
  return {
    kind,
    contentKind: read.contentKind,
    keptInLet: read.keptInLet,
    fill,
    fillsReads,
    // No param-selected structure renders its reads: always, or for
    // withheld content alone.
    fillsWithoutStructure:
      fill === true || (hasContents(conditions) && !conditions!.structure),
    splitsContent,
    derivedNeeds,
    effectRead,
    fnCapture,
    objectSource,
    // A sent value effects, captures, built objects' readers or a join its
    // write inits read: written where a flush writes its scope.
    writeReads:
      isPatchSent(binding) &&
      (effectRead || fnCapture || objectSource || writesForJoinInit(binding)),
    ownRegistration,
    joinWrites: joinFill || !fillable ? undefined : writes,
    joinFill,
    unpatchedOnly,
    unpatchedJoins,
    unpatchedStructure,
    unpatchedSections,
  };
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

// A value a patch fills where its reads call for it: state or a local of a
// scope a patch may create, or a server value a patch keeps current.
export function canPatchFill(binding: Binding) {
  // State fills only where a server value keeps reaching it (a controlled `<let>`'s
  // controller, a per-render value); a created scope's arrives as resume values.
  if (
    patchWritesValues(binding.section) &&
    getCanonicalBinding(binding) === binding &&
    (binding.sources?.state || !isKnownChild(binding.section))
  ) {
    if (binding.sources?.state) {
      return (
        patchWritesScope(binding.section) &&
        (!!findSlot(binding, SlotKind.ChangeHandler) ||
          differsPerRender(binding) ||
          // The seed runs a `<let>`'s signal where a created scope renders or reads it,
          // and roots one no resumed assignment reaches wherever a created scope reads it.
          (binding.type === BindingType.let &&
            ((mayBeCreated(binding.section) && !!getWriteReason(binding)) ||
              (readsPastRenders(binding, binding.section) &&
                (mayBeCreated(binding.section) ||
                  !hasResumableAssignment(binding)))))) &&
        bindingUtil.has(binding.sources.state, binding)
      );
    }
    // A local a state join reads that the server's next render may change: its
    // patch writes it, refreshing a paired scope and seeding a fresh one.
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

// A `<let>` whose initial value client code computes where a patch creates its
// scope: a patch fills it, or state its init reads.
export const fillsInitialValue = createPassMemo(
  (state: Binding): boolean =>
    canPatchFill(state) || some(state.initSources?.state, canPatchFill),
  false,
);

// A scope a flush writes into: a known child, a branch, `<await>` or `<try>` body, a
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

// A scope a flush writes values into: also content plain renders nowhere on
// the client, which a paired consumer or the withheld entry reaches.
function patchWritesValues(section: Section) {
  return (
    patchWritesScope(section) ||
    (patchWrites(section) &&
      isContentScope(section) &&
      !getRendererReason(section))
  );
}

// A page's root is the document's, which neither a flush nor the client creates:
// a flush that would swap it (a route switching `<html>` layouts) is rejected.
function mayBeCreated(section: Section) {
  return !!section.parent || !section.template!.page;
}

// A value a created scope gets from no other channel (a resumed one reads it
// from the document), unlike fills, writes, a loop's sourced items and others' state.
function seedsCreatedScope(binding: Binding) {
  const { section } = binding;
  return (
    mayBeCreated(section) &&
    (binding.localOf
      ? shipsContentShell(section)
      : patchWritesScope(section)) &&
    binding.type !== BindingType.dom &&
    binding.type !== BindingType.constant &&
    every(binding.sources?.state, (state) => isFirstState(state, section)) &&
    // A branch's own params arrive with its structure.
    !(isSectionParam(binding) && !binding.localOf && !seedsParam(binding)) &&
    // No fill (it ships wherever client code reads the value) and no write.
    !getPatchFill(binding).fill &&
    !isPatchWritten(binding) &&
    // The client derives a constant a call passes from its module read.
    !derivesConstantInput(binding) &&
    // A value a created init's join derives takes no seed: one would leave
    // the join's first run unchanged, so what reads the value never runs.
    !derivesByCreatedInit(binding)
  );
}

// Read in `section` past renders, effects, inits and name-only dynamic tags:
// by control flow, a call, a child, join or return.
function readsPastRenders(
  binding: Binding,
  section: Section,
  seen = new Set<Binding>(),
): boolean {
  if (seen.has(binding)) return false;
  seen.add(binding);
  for (const read of binding.reads.keys()) {
    if (read.section !== section) return true;
    // A hole joining what a patch changes re-runs after the scope's renders.
    if (
      (read.rendersValue && !hasParamOrGlobalSource(getSourcesForExpr(read))) ||
      read.isEffect ||
      read.initialValue ||
      read.nameOnly
    ) {
      continue;
    }
    if (
      !read.derives ||
      some(
        read.derives,
        (derived) =>
          derived.section !== section ||
          readsPastRenders(derived, section, seen),
      )
    ) {
      return true;
    }
  }
  for (const alias of binding.propertyAliases.values()) {
    if (readsPastRenders(alias, section, seen)) return true;
  }
  return false;
}

// A `<let>` the created scope starts from its render's value, as a resumed
// one does: its own, with no server value reaching it or state its init reads.
export function isFirstState(state: Binding, section: Section) {
  return (
    state.type === BindingType.let &&
    state.section === section &&
    !fillsInitialValue(state)
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
// child's, a loop row's static one, or a `@catch` error member joined with a caller's.
function seedsParam(binding: Binding) {
  const { section } = binding;
  return (
    isKnownChild(section) ||
    (isLoopBody(section) && !binding.sources?.param) ||
    (section.boundaryContent === "catch" &&
      hasCallerParamSourceAt(findSlot(binding)?.reason, section))
  );
}

// Why a binding fills: `true` unconditionally, or the run-time conditions
// its reads sit under (param-selected structure, withholdable content).
export interface FillConditions {
  structure?: SortedOpt<Sources>;
  joins?: SortedOpt<Sources>;
  // A nested member's fill re-runs the join: it fills under that member's group.
  fills?: SortedOpt<Sources>;
  // What its section's end sees, apart from what an `<await>` body below it
  // holds, which a body in `awaits` gates at its end (a content may be both).
  contents?: SortedOpt<Section>;
  awaitedContents?: SortedOpt<Section>;
  awaits?: SortedOpt<Section>;
  // The `<await>` bodies a read crosses handing it on to what may keep it.
  passedUnder?: SortedOpt<Section>;
  // A join the patch writes reads it: its other members, where the client runs it.
  writes?: SortedOpt<Sources>;
}

// What a binding's reads (and its direct aliases') need of its fill, and the
// joins the patch writes that it reaches in structure the client may own.
const getFillReadKind = createPassMemo(computeFillReadKind, {
  kind: undefined,
  contentKind: undefined,
  unpatchedJoins: undefined,
  unpatchedStructure: undefined,
  unpatchedSections: undefined,
  structureReads: undefined,
  writtenJoins: undefined,
  keptInLet: false,
} as {
  kind: true | FillConditions | undefined;
  contentKind: true | FillConditions | undefined;
  unpatchedJoins: Intersection[] | undefined;
  unpatchedStructure: true | FillConditions | undefined;
  unpatchedSections: SortedOpt<Section>;
  structureReads: SortedOpt<Sources>;
  writtenJoins: Map<Intersection, Section> | undefined;
  keptInLet: boolean;
});

function computeFillReadKind(binding: Binding) {
  let kind: true | FillConditions | undefined;
  // What the reads rendering it as content need, its own, its aliases' and
  // its derived values': `{}` where they need nothing.
  let contentKind: true | FillConditions | undefined;
  // A `<let>` it gives itself to keeps it on the client, as content it renders.
  let keptInLet = false;
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
  for (const alias of binding.propertyAliases.values()) {
    contentKind = mergeKinds(contentKind, getFillReadKind(alias).contentKind);
  }
  for (const alias of binding.aliases) {
    const aliasFill = getFillReadKind(alias);
    contentKind = mergeKinds(contentKind, aliasFill.contentKind);
    // A property alias or rest fills on its own; a direct alias reads this.
    if (isDirectAlias(alias)) {
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
  for (const [read] of binding.reads) {
    // A spread's attributes still render; any other effect read outside
    // unpatched structure refreshes through the owner slot write.
    const effect = readsValuesOnResume(read);
    // A handler reads the slot at call time: the owner write keeps it
    // current with no registration to shake.
    if (readsAtCall(read, binding)) continue;
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
    // A derived value renders it by its own kind; passed to another template,
    // this read renders it, and the callee reports its own state.
    let rendersContent = isContentRender(read);
    forEach(read.derives, (derived) => {
      if (derived.section.program === binding.section.program) {
        const derivedKind = getFillReadKind(derived).contentKind;
        if (derivedKind) {
          contentKind = mergeKinds(contentKind, derivedKind);
          rendersContent = true;
          keptInLet ||= derived.type === BindingType.let;
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
        mergeKinds(readKind || {}, { passedUnder: handOff?.under }),
      );
    }
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
    contentKind,
    unpatchedJoins,
    unpatchedStructure,
    unpatchedSections,
    structureReads,
    writtenJoins,
    keptInLet,
  };
}

// A dynamic tag's body or attribute tag a consumer may withhold.
function isWithholdableContent(section: Section) {
  return (
    !section.branch &&
    !!(section.derives || section.branchExpr) &&
    consumerMayWithhold(section)
  );
}

// An `<await>` body handing on a value from above it may keep content after
// the gates around it ran: pending, they count it kept.
export function awaitMayWithhold(body: Section) {
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
  handOff?: { under?: SortedOpt<Section> },
): true | FillConditions | undefined {
  const knownChild = isKnownChild(binding.section);
  const refs = getReferencedBindings(read);
  let conditions: FillConditions | undefined;
  if (!effect) {
    const sources = getSourcesForRef(refs);
    // A live function's join of client state gets it by its bind and the join's init.
    if (
      Array.isArray(refs) &&
      holdsLiveFn(binding) &&
      initsJoinByWrite(refs, binding)
    ) {
      return;
    }
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
        !getExprBranch(read)?.await &&
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
  // A written join's structure ships the binding under its unpatched key; it
  // still hands the value on under the `<await>` bodies it crosses.
  if (written) {
    if (handOff) getReadStructure(binding, read, effect, handOff);
    return conditions;
  }
  return mergeKinds(
    conditions,
    getReadStructure(binding, read, effect, handOff),
  );
}

// What the client may own between the binding's section and the read (`true`:
// always), a path no per-section memo holds; `handOff` takes `<await>` bodies.
function getReadStructure(
  binding: Binding,
  read: ReferencedExtra,
  effect: boolean,
  handOff?: { under?: SortedOpt<Section> },
): true | FillConditions | undefined {
  const knownChild = isKnownChild(binding.section);
  let found: FillConditions | undefined;
  // A `<define>` body reads as if at each tag rendering its var, with the
  // contents no `<await>` holds yet: again only when those grow, so it ends.
  const carriedAt = new Map<Section, SortedOpt<Section>>([
    [read.section, undefined],
  ]);
  const pending: [Section, SortedOpt<Section>][] = [[read.section, undefined]];
  for (const [readAt, carried] of pending) {
    // No patch write reaches a skipped region: reads in stateful structure, a body
    // some consumer renders so, or boundary content the client renders take owner fills.
    let readSection: Section | undefined = readAt;
    let awaitedContents: SortedOpt<Section>;
    let awaits: SortedOpt<Section>;
    let unawaited = carried;
    while (readSection && readSection !== binding.section) {
      // Content whose kept instances take their holes as data is the patch's.
      const kept = keepsContent(readSection);
      if (
        !kept &&
        (isStatefulBranch(readSection) || getStatefulConsumers(readSection))
      ) {
        return true;
      }
      if (readSection.boundaryContent) return true;
      if (handOff && readSection.branch?.await) {
        handOff.under = sectionUtil.add(handOff.under, readSection);
      }
      if (unawaited && readSection.branch?.await) {
        awaitedContents = sectionUtil.union(awaitedContents, unawaited);
        awaits = sectionUtil.add(awaits, readSection);
        unawaited = undefined;
      }
      // Each content around the read a consumer may withhold: any of them the
      // client keeps renders what is inside.
      if (!kept && isWithholdableContent(readSection)) {
        unawaited = sectionUtil.add(unawaited, readSection);
      }
      if (readSection.callSections) {
        forEach(readSection.callSections, (callSection) => {
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
    if (contents || awaitedContents) {
      found = mergeConditions(found, { contents, awaitedContents, awaits });
    }
    // Withheld content's guard already holds what creates it on the client.
    if (!knownChild || contents) continue;
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
      if (
        hasTagCallerParamAt(sources, binding.section) &&
        !sourcesInclude(sources!, binding)
      ) {
        found = mergeConditions(found, { structure: sources });
      }
    }
  }
  return found;
}

// A closure's sources beside the params its reads here join it with that its section
// cannot gate on: where a call passes those, the client computes the join.
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

// Reads only the declaration's own signal reaches: an effect in its section, a
// capture another template reads, a kept closure, or a child's param from it.
function hasDeclarationOnlyReads(binding: Binding) {
  for (const read of binding.reads.keys()) {
    if (
      keepsClosureFills(read.section) ||
      some(getSourcesForExpr(read)?.state, isLetWithoutResumableAssignment) ||
      (readsValuesOnResume(read)
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
            )))
    ) {
      return true;
    }
  }
  return false;
}

// A `<let>` no resumed assignment reaches: only a patch's key reaches its signal.
function isLetWithoutResumableAssignment(state: Binding) {
  return state.type === BindingType.let && !hasResumableAssignment(state);
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

// What the direct calls of `<define>` bodies outside `section` pass for their
// params among the sources, through each body a call sits in.
function getDefineCallSources(sources: Sources | undefined, section: Section) {
  let passed: Sources | undefined;
  const pending = [sources];
  const seen = new Set<ParamBinding>();
  for (const sources of pending) {
    forEach(sources?.param, (param) => {
      const body = param.section;
      if (
        isKnownChild(body) &&
        !isSameOrAncestorSection(body, section) &&
        !seen.has(param)
      ) {
        seen.add(param);
        const callSources = getCallSiteSources(param);
        passed = mergeSources(passed, callSources);
        pending.push(callSources);
      }
    });
  }
  return passed;
}

function addNestedMemberFill(fills: SortedOpt<Sources>, member: Binding) {
  const { fill, effectRead, fnCapture, objectSource } = getPatchFill(member);
  // A member written only for the join's init re-runs it where its group mixes, which
  // the join's own arm covers; one an effect, capture or built object reads re-runs kept code.
  return !isKnownChild(member.section) &&
    (fill ||
      (writesForJoinInit(member) && (effectRead || fnCapture || objectSource)))
    ? sourcesUtil.add(fills, getSourcesForRef(member)!)
    : fills;
}

// Whether the sources' params include the binding or a value it is a
// property of (both reach the client together).
function sourcesInclude(sources: Sources, binding: Binding) {
  return someUpToAliasRoot(binding, isInParams, sources.param);
}

// A loop row's param (or a part of it) from what a caller passes.
function isCallerFedLoopParam(binding: Binding) {
  return (
    isLoopBody(binding.section) &&
    isSectionParam(binding) &&
    hasCallerParamSourceAt(binding.sources, binding.section)
  );
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
  const consumer = content.derives?.tag;
  // A dynamic tag's body, or a `<define>` var passed on (its direct tags
  // classify on their own), may reach any consumer, so the runtime decides.
  if (!consumer || !isKnownTagExtra(consumer)) {
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
    joins: sourcesUtil.union(a?.joins, b.joins),
    fills: sourcesUtil.union(a?.fills, b.fills),
    contents: sectionUtil.union(a?.contents, b.contents),
    awaitedContents: sectionUtil.union(a?.awaitedContents, b.awaitedContents),
    awaits: sectionUtil.union(a?.awaits, b.awaits),
    passedUnder: sectionUtil.union(a?.passedUnder, b.passedUnder),
    writes: sourcesUtil.union(a?.writes, b.writes),
  };
}

// An effect read of a written value re-runs by register id when a patch
// changes what it saw; ask through `someAlias` (direct aliases only).
export function hasEffectRead(binding: Binding) {
  for (const read of binding.reads.keys()) {
    if (readsValuesOnResume(read)) return true;
  }
  return false;
}

function readsOwnEffect(binding: Binding) {
  return someReadIn(binding, binding.section, isRenderEffectRead);
}

function isRenderEffectRead(read: ReferencedExtra, binding: Binding) {
  return readsValuesOnResume(read) && rerunsFromClosure(read, binding);
}

// Whether a patch re-runs an effect that reads `binding` (its fill root).
export function rerunsEffectOnPatch(binding: Binding) {
  return !!getPatchWrite(getCanonicalBinding(binding)).effect;
}

// What a value a call passes depends on (a built object's sources, else itself),
// as hops from `section`; the call records a built object's (`_patch_live`).
export function getPassedDeps(section: Section, extra: t.NodeExtra) {
  const captures = new Set<string>();
  for (const dep of reduce(
    getReferencedBindings(extra),
    addLiveDeps,
    new Set<Binding>(),
  )) {
    const hop = getSentHop(section, dep);
    if (hop) captures.add(hop);
  }
  return captures;
}

// A value a patch may send, as `>` hops from `section` up to its own (what the
// runtime's `depChanged` reads); client state and constants it never sends.
export function getSentHop(section: Section, binding: Binding) {
  const sources = getSourcesForRef(binding);
  if (sources?.param || sources?.global) {
    return (
      ">".repeat(section.depth - binding.section.depth) +
      getScopeAccessor(binding)
    );
  }
}

// An effect its entry re-runs on every member a patch sends: one it writes, or
// one it fills (whose fill marks its change), with no client state among them.
export function rerunsByEntry(refs: ReferencedBindings) {
  return some(refs, rerunsEffectOnPatch) && every(refs, isSentByEntry);
}

function isSentByEntry(ref: Binding) {
  const root = getCanonicalBinding(ref);
  return (
    rerunsEffectOnPatch(root) ||
    (!!getPatchFill(root).fill && !root.sources?.state)
  );
}

// A filled value such an effect's entry names, so its fill marks its change.
export function effectEntryNamesFill(binding: Binding) {
  return someAlias(binding, readsInEntryEffect, undefined, true);
}

function readsInEntryEffect(alias: Binding) {
  for (const expr of alias.reads.keys()) {
    if (expr.isEffect && rerunsByEntry(getReferencedBindings(expr))) {
      return true;
    }
  }
  return false;
}

// A binding holding only functions its template may register, each reading its
// captures from the live scope.
export function holdsLiveFn(binding: Binding) {
  const { derivedFrom } = getCanonicalBinding(binding);
  return !!derivedFrom && every(derivedFrom, isTrackedFunction);
}

// A join its scope inits by id once a write marks the member: client state over
// a bound live function, or a written caller-fed row param beside caller state.
function initsJoinByWrite(join: Intersection, member: Binding) {
  const sources = getSourcesForRef(join);
  if (holdsLiveFn(member)) return !!sources?.state;
  if (!isCallerFedLoopParam(member)) return false;
  const others = getOtherInputs(sources, member);
  return !!others && hasTagCallerParamAt(others, member.section);
}

// A member such a join reads, which the patch writes for the join's init (its
// sources settle before solve, so no pass resets it).
const [writesForJoinInit] = createAnalysisMemo((binding: Binding) => {
  for (const read of binding.reads.keys()) {
    const join = getReferencedBindings(read);
    if (Array.isArray(join) && initsJoinByWrite(join, binding)) return true;
  }
  return false;
}, false);

// A source of a built object an effect reads, here or as another template's input:
// the object's readers depend on its sources (`holdsBuiltObject`).
function buildsEffectReadObject(binding: Binding) {
  return someDerivedRead(binding, (derived, expr) => {
    const built = getBuiltObject(derived, binding, expr);
    return !!built && someReached(built, isFilledForEffect);
  });
}

function isFilledForEffect(held: Binding) {
  return !!getPatchFill(held).effectRead;
}

// An effect, outside a created `@catch`, references the value itself.
export function isEffectRead(root: Binding) {
  return someAlias(root, readsInEffect, undefined, true);
}

function readsInEffect(alias: Binding) {
  for (const expr of alias.reads.keys()) {
    if (
      expr.isEffect &&
      !inCreatedCatch(expr.section!) &&
      some(getReferencedBindings(expr), (ref) => ref === alias)
    ) {
      return true;
    }
  }
  return false;
}

// The object a value goes into that is built anew each time it runs: one its
// reading expression builds or derives here, or another template's call input.
export function getBuiltObject(
  derived: Binding,
  from: Binding,
  expr: t.NodeExtra,
) {
  if (expr.buildsObject || holdsBuiltObject(derived)) return derived;
  if (derived.section.program !== from.section.program) {
    // The input object (an alias of the template's params), where an effect's
    // entry depends on it whole.
    let input = derived;
    while (input.aliasOf?.aliasOf) input = input.aliasOf;
    if (isEffectRead(input)) return input;
  }
}

// A value built anew each time it runs, as a client render builds it on a change of
// what it is built from: its readers depend on that, never on its identity.
export function holdsBuiltObject(binding: Binding) {
  const { derivedFrom } = getCanonicalBinding(binding);
  return !!derivedFrom && every(derivedFrom, isBuiltObject);
}

function isBuiltObject(expr: t.NodeExtra) {
  return !!expr.buildsObject;
}

// Structure the client may render: content, unpatched structure, or
// param-selected structure a caller may hand the client.
export function clientMayRender(section: Section) {
  return (
    section.enclosing.inContentSection ||
    !patchWrites(section) ||
    !!getParamSelectedStructure(section)?.some((sources) =>
      hasTagCallerParamAt(sources, section),
    )
  );
}

// The captures of a live function a patch may write, as hops from its section,
// which its `_bind_resume` names. One reading client state is the client's.
export const [getLiveCaptures] = createAnalysisMemo(
  (fn: t.FunctionExtra & t.NodeExtra): string | undefined => {
    const captures: string[] = [];
    let clientState = false;
    forEach(getReferencedBindingsInFunction(fn), (ref) => {
      const capture = getCanonicalBinding(ref);
      clientState ||= !!getSourcesForRef(capture)?.state;
      const hop = getSentHop(fn.section!, capture);
      if (hop) captures.push(hop);
    });
    return captures.length && !clientState ? captures.join(" ") : undefined;
  },
  undefined,
);

// What an entry reading `binding` depends on: what an object is built from, else
// a value's own change (a live function's changes as its captures do).
export const [getLiveDeps] = createAnalysisMemo(
  (binding: Binding): Binding[] => {
    const root = getCanonicalBinding(binding);
    // What the object reads, even as a param's property a call passes.
    return holdsBuiltObject(root)
      ? Array.from(
          reduce(
            getValueReferences(root.derivedFrom || undefined),
            addLiveDeps,
            new Set<Binding>(),
          ),
        )
      : [root];
  },
  [] as Binding[],
);

export function addLiveDeps(deps: Set<Binding>, binding: Binding) {
  return getLiveDeps(binding).reduce(addLiveDep, deps);
}

function addLiveDep(deps: Set<Binding>, binding: Binding) {
  return deps.add(binding);
}

// Whether a function's value reaches a binding `test` accepts (with the read reaching it)
// from its holder (`expr` derives it): one choosing it, another template's input, and on.
export function someReached(
  holder: Binding,
  test: (held: Binding, expr?: t.NodeExtra) => boolean,
  expr?: t.NodeExtra,
  carries?: (binding: Binding, expr: ReferencedExtra) => boolean,
) {
  const seen = new Set<Binding>();
  const reaches = (held: Binding, expr?: t.NodeExtra): boolean => {
    if (seen.has(held)) return false;
    seen.add(held);
    return (
      test(held, expr) ||
      someAlias(
        held,
        (alias) =>
          someDerivedRead(
            alias,
            (derived, expr) =>
              (!carries || carries(alias, expr)) && reaches(derived, expr),
          ),
        undefined,
        true,
      )
    );
  };
  return reaches(holder, expr);
}

// A value a read of the binding derives passes `test`.
export function someDerivedRead(
  binding: Binding,
  test: (derived: Binding, expr: ReferencedExtra) => boolean,
) {
  for (const expr of binding.reads.keys()) {
    if (some(expr.derives, (derived) => test(derived, expr))) return true;
  }
  return false;
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

// A created scope's state that keeps a fill seeds whole, so its signal runs:
// a `<let>`, or a per-render value written or rendered whole.
export function seedsLetWhole(binding: Binding) {
  return (
    binding.type === BindingType.let ||
    !!getWriteReason(binding) ||
    hasRenderRead(binding)
  );
}

// An effect reads the slot its write sets; any other read renders.
export function hasRenderRead(binding: Binding) {
  for (const expr of binding.reads.keys()) {
    if (!expr.isEffect) return true;
  }
  return false;
}

// Kept content with nodes of its own: its instances take their holes as data.
export function keepsHoles(section: Section) {
  return !!section.bindings && keepsContent(section);
}

// Content a known child renders from its state, where plain renders it nowhere
// on the client: a patch creates its instances from their shells alone.
export function keepsContent(section: Section) {
  return (
    rendersFromChildState(section) &&
    !getRendererReason(section) &&
    !section.params &&
    patchWrites(section)
  );
}

// Content a known child renders from its state.
function rendersFromChildState(section: Section) {
  return isPatch() && !!getStatefulConsumers(section);
}

// Such content closing over what a flush fills, where none creates it and no
// renderer registers: its closures load by their fills' own registration.
export function keepsClosureFills(section: Section) {
  return (
    !!section.referencedClosures &&
    !getRendererReason(section) &&
    rendersFromChildState(section) &&
    !keepsContent(section) &&
    !patchMayCreateEnclosing(section.parent!, mayBeCreated(section.program))
  );
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

// Groups a created subscriber also subscribes in: a join's a call may pass
// client state; `false` where only its subscribers fill a client-state join.
function getCreatedSubscribeStructure(section: Section, closure: Binding) {
  let structure: SortedOpt<Sources>;
  for (const join of getRenderedJoins(section)) {
    const sources = bindingUtil.has(join, closure) && getSourcesForRef(join);
    if (!sources) continue;
    if (!isConditionalReason(sources)) {
      // A client-state join the closure's declaration fills (its fill replaces
      // the join's) needs its subscribers always.
      if (getPatchFill(closure).fillsReads) return false;
    } else if (hasTagCallerParamAt(getOtherInputs(sources, closure), section)) {
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
    if (!some(join, isConstant)) {
      joins.push(join);
    }
  }
  return joins;
}, []);

function isConstant(member: Binding) {
  return member.type === BindingType.constant;
}

// Whether a join the section renders reads the closure.
export function isReadInJoin(section: Section, closure: Binding) {
  return getRenderedJoins(section).some((join) =>
    bindingUtil.has(join, closure),
  );
}

const NO_INITS = new Map<never, CreatedInit>();

// Each section's closure inits, from the fills of the moment.
export const getClosureInits = createPassMemo(computeClosureInits, NO_INITS);

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
      getNamedInit(section, { init, subscribe });
    if (named) inits.set(closure, named);
  });
  for (const [join, init] of joinInits) {
    const named = getNamedInit(section, init);
    if (named) inits.set(join, named);
  }
  return inits.size ? inits : NO_INITS;
}

// The part of an init the server names: what every created scope does, by its
// shell or a composing scope's setup, else what a flush writes.
function getNamedInit(
  section: Section,
  { init, subscribe }: CreatedInit,
): CreatedInit | undefined {
  const flushNames = patchCreatesOrComposes(section);
  // A created scope's shell names its inits, a client contribution's included, and
  // a patch a written join's or a withheld local fill's on any scope.
  const namesInit =
    init === "always" || init === "client"
      ? flushNames
      : init === "mixed" || typeof init === "object";
  const named: CreatedInit = {
    init: namesInit ? init : undefined,
    subscribe: flushNames ? subscribe : undefined,
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
  if (some(join, (member) => initsJoinByWrite(join, member))) {
    return { init: "mixed" };
  }
  const sources = getSourcesForRef(join);
  if (sources?.state) {
    return !every(join, (member) => arrivesBySignal(member, section)) &&
      mayBeCreated(section)
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
// its own init or fill, never a seed a flush writes; a value with an unconditional fill.
function arrivesBySignal(member: Binding, section: Section) {
  const root = getCanonicalBinding(member);
  return (
    (isStateSourced(root) && !writesSeed(root)) ||
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
    isDynamicClosure(section, closure) &&
    // Content a flush reaches by data takes every value from its entries, but
    // for the joins with client state it computes itself.
    !(inContentReachedByData(section) && !isReadInJoin(section, closure))
  ) {
    const unfilled =
      !subscribesFill(closure, section) &&
      getCreatedSubscribeStructure(section, closure);
    return unfilled === false ? "always" : { unfilled };
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

// A created subscriber of the closure is reached only by subscribing: a read
// no patch write keeps current takes a fill its owner's subscribers carry.
export function subscribesFill(closure: Binding, section: Section) {
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
export const isPatchWrittenJoin = createPassMemo((join: Intersection) => {
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
      isPassedStateByEveryCall(sources, true) &&
      // A member another join reads keeps it written: its key would ship for both.
      every(join, (member) => !readsOtherJoin(member, join))
    )
  );
}, false);

// A read the patch leaves to the holes it writes, the effects its entries
// re-run and the calls whose callees keep their inputs, through derived values.
function leavesReadToPatch(read: ReferencedExtra): boolean {
  return (
    !rendersAtSite(read) && !someRead(extraReaders(read), rendersBeforeCall)
  );
}

// The client renders the read where it sits: it is no hole the patch fills nor a value
// resumed code reads, and it derives more than `derived` bindings and kept callee params.
function rendersAtSite(read: ReferencedExtra) {
  return (
    !isFilledHole(read) &&
    !readsValuesOnResume(read) &&
    (!read.derives ||
      !every(read.derives, (derived) =>
        isCalleeParam(derived, read.section)
          ? calleeKeepsInput(read.section, getSourcesForExpr(read))
          : derived.type === BindingType.derived,
      ))
  );
}

// A read the client renders where it sits, in the value's own derives: a call site
// answers for its callee's reads.
function rendersBeforeCall(read: ReferencedExtra, how: number) {
  return !!(how & READ_BEFORE_CALL) && rendersAtSite(read);
}

function readsOtherJoin(binding: Binding, join: Intersection) {
  for (const read of binding.reads.keys()) {
    const refs = getReferencedBindings(read);
    if (Array.isArray(refs) && refs !== join) return true;
  }
  return false;
}

// Whether a value is shipped for a written join its scope inits, which then depends
// on the value's fill (`_fill_mark`).
export function initedJoinDependsOn(binding: Binding) {
  if (writesForJoinInit(binding)) return true;
  for (const join of getFillReadKind(binding).writtenJoins?.keys() || []) {
    if (initsWrittenJoin(join)) return true;
  }
  return false;
}

// A written join the scope inits: some shipped member has no fill to re-run it
// (written for the join's init, below the root, over subscribers, in two joins, filled for others).
export const initsWrittenJoin = createPassMemo(
  (join: Intersection) =>
    isPatchWrittenJoin(join) &&
    some(join, (ref) => {
      const member = getCanonicalBinding(ref);
      if (initsJoinByWrite(join, member)) return true;
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

// A local the server's next render may change (a stable one only seeds): a `$global`
// source is current per flush; a constant (a loop key) the reconciler sets from keys.
function isSeedableLocal(binding: Binding) {
  return (
    binding.type !== BindingType.constant &&
    !binding.sources?.state &&
    hasParamOrGlobalSource(binding.sources) &&
    (isSectionParam(binding) ||
      !!binding.localOf ||
      binding.type === BindingType.derived)
  );
}

// A param by type (a template's or `<define>`'s), or what `isParamBinding` adds:
// the section's params and their aliases, a loop item's (typed `derived`) included.
export function isSectionParam(binding: Binding) {
  return binding.type === BindingType.param || isParamBinding(binding);
}

// The caller params a `$global` join reads unfilled: a changed key re-runs it
// only where the client owns them.
export function getUnfillableSources(refs: ReferencedBindings) {
  return getSourcesForRef(bindingUtil.filter(refs, isUnfillablePatchRead));
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
  if (section.branch) {
    // An `<await>` or `<try>` body is created with its parent.
    return section.branch.optional && patchWrites(section);
  }
  if (section.branchExpr) {
    // A dynamic tag body: the tag renders it whenever its branch expression changes.
    return !!getWriteSources(section.branchExpr) && patchWrites(section);
  }
  const { derives } = section;
  // A known consumer decides by where it renders the content; an unknown
  // one may do anything.
  if (!derives) return true;
  return someRead(getDerivedReaders(derives), (read, how) =>
    patchMayCreateAtRead(read, how, section),
  );
}, false);

// A consumer rendering the content client-side creates it on the client, and a
// read passing it on within the template leaves it to the reads of what it derives.
function patchMayCreateAtRead(
  read: ReferencedExtra,
  how: number,
  content: Section,
) {
  const rendersContent = isContentRender(read);
  const inTemplate = read.section.program === content.program;
  return (
    !isStatefulLeaf(read) &&
    (rendersContent ||
      !read.derives ||
      some(
        read.derives,
        (derived) => derived.section.program !== read.section.program,
      )) &&
    // A dynamic tag a patch switches creates what it renders; a child's read renders
    // what its call site hands it, unless the child picks it.
    ((inTemplate
      ? rendersContent &&
        switchesContent(read, how) &&
        patchWrites(read.section)
      : picksContent(read, how)) ||
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
function switchesContent(read: ReferencedExtra, how: number) {
  const name = getNameRead(read);
  return !name || !!name.binding.sources || !!(how & READ_AS_INPUT);
}

// A read choosing what it renders or passes on, unless handed on as is: a
// dynamic tag's name (its renderer may render its input anywhere), else itself.
function picksContent(read: ReferencedExtra, how: number) {
  const passed = getNameRead(read) || read.read;
  return !passed || !isSectionParam(passed.binding) || !!(how & READ_AS_INPUT);
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
    ? getSourcesForRef(name.binding)
    : undefined;
}

// Content a dynamic tag may keep (its name passing the content through) while
// handing it new input.
const [takesKeptInput] = createAnalysisMemo(
  (section: Section) =>
    !!section.derives &&
    someRead(getDerivedReaders(section.derives), keepsWithInput),
  false,
);

// Content whose own client code reads the params a dynamic tag may keep handing
// it: the tag's entry carries them there, as main's renderer params do.
export function readsKeptInputOnClient(section: Section) {
  return (
    isPatch() &&
    takesKeptInput(section) &&
    some(section.bindings, isClientReadParam)
  );
}

// A param the document writes for client code: rendered, an effect's, a function's.
function isClientReadParam(binding: Binding) {
  return isSectionParam(binding) && !!findSlot(binding)?.reason;
}

function keepsWithInput(read: ReferencedExtra) {
  return !read.nameOnly && !!getRendererRead(read);
}

// Whether a patch may create the section or one around it, where `root` says
// whether its template's root may be created.
function patchMayCreateEnclosing(section: Section, root: boolean): boolean {
  // A `@catch` or `@placeholder` a patch shows is created as a branch is.
  if (section.branch?.optional || section.boundaryContent) {
    return patchWrites(section);
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
    (!!section.branch ||
      section.boundaryContent === "catch" ||
      shipsContentShell(section)) &&
    patchWrites(section)
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
      ? some(section.callSections, patchCreatesOrComposes)
      : mayBeCreated(section)),
  false,
);

// A `<define>` body reading what its owner holds, called where a flush may
// create the call: its shell hop, or its patch link below its owner, names it.
export function namesBodyOwner(section: Section, body: Section) {
  return (
    body.readsOwner && patchWrites(section) && patchCreatesOrComposes(section)
  );
}

// A fill needs a subscriber where no join dispatch reaches the read, or in
// boundary content, which may resume after a patch render and must catch up.
export function fillSubscribes(closure: Binding, section: Section) {
  return (
    // Param-selected structure's own render code keeps the subscriber.
    getPatchFill(closure).fillsWithoutStructure &&
    (closureCarriesFill(closure, section) ||
      (section.enclosing.awaitOrTryBody !==
        closure.section.enclosing.awaitOrTryBody &&
        hasClosureSignalRead(closure, section)))
  );
}

// The closure's own signal carries a fill to the section's reads: a lone
// read, or a join inside stateful structure, which no join dispatch reaches.
export function closureCarriesFill(closure: Binding, section: Section) {
  return (
    hasLoneRead(closure, section) ||
    (inStatefulBranch(section) && hasClosureSignalRead(closure, section))
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
function hasClosureSignalRead(binding: Binding, section: Section) {
  return (
    hasLoneRead(binding, section) ||
    (section.enclosing.nonOptionalAncestor !==
      binding.section.enclosing.nonOptionalAncestor &&
      someAlias(
        binding,
        (alias) => someReadIn(alias, section, rerunsFromClosure),
        undefined,
        true,
      ))
  );
}

function isLoneRead(read: ReferencedExtra, binding: Binding) {
  return (
    rerunsFromClosure(read, binding) &&
    !Array.isArray(getReferencedBindings(read))
  );
}

// A script, or a handler reading it as it attaches, re-runs from the closure.
function rerunsFromClosure(read: ReferencedExtra, binding: Binding) {
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
        const { fill, joinWrites, joinFill } = getPatchFill(partner);
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
        // A caller param fills (or is written for a join's init) by its group;
        // one no patch sends re-runs the join only where the client calls it.
        if (hasCallerParamSource(partner.sources)) {
          structure = sourcesUtil.add(
            structure,
            getSourcesForRef(
              fill || joinWrites || joinFill || writesForJoinInit(partner)
                ? refs
                : partner,
            )!,
          );
        }
      }
    }
    // A callee keeps its copy of what a call passes, as an uncontrolled `<let>` does of
    // its init; a value a patch fills or writes reaches readers so, but through a function.
    if (
      !read.callSiteExprs &&
      !read.initialValue &&
      some(read.derives, (derived) => {
        if (
          !readInFunction &&
          (getPatchFill(derived).fillsReads || isPatchWritten(derived))
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

// A patch asks the sources of what it writes: each value it fills or writes, each
// join it runs and each expression a node renders.
export function ensurePatchReasonGroups(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  forEach(section.bindings, ensureBindingGroups);
  // Created joins run by group, and a page ships a patch-filled join's
  // members by it.
  for (const join of intersections || []) {
    ensureCallerParamGroups(getSourcesForRef(join));
  }
  forEach(section.slots, ensureSlotGroups);
  // A closure's init over a written slot gates on the structure callers own.
  getParamSelectedStructure(section)?.forEach(ensureCallerParamGroups);
  // An `<await>` asks whether a patch fills its promise (`_unfilled_if`).
  if (section.branch?.await) {
    ensureCallerParamGroups(getSourcesForExpr(section.branchExpr!));
  }
  ensureKnownTagPatchGroups(section);
}

function ensureSlotGroups(slot: Slot) {
  ensureWriteGroups(slot);
  ensureUnfilledWriteGroups(slot);
}

function ensureBindingGroups(binding: Binding) {
  const { fill, writeReads, joinWrites, contentKind, unpatchedStructure } =
    getPatchFill(binding);
  if (fill || joinWrites || (writeReads && patchWritesScope(binding.section))) {
    ensureCallerParamGroups(getSourcesForRef(binding));
  }
  // Its write in place gates on each written join's other members; its fill, a
  // withhold of its content and its unpatched arm on each set of their conditions.
  forEach(joinWrites, ensureCallerParamGroups);
  ensureConditionGroups(fill);
  ensureConditionGroups(contentKind);
  ensureConditionGroups(unpatchedStructure);
  // A created scope's `<let>` seeds by what its initial value reads.
  if (binding.type === BindingType.let) {
    ensureCallerParamGroups(getStateInitSources(binding));
  }
}

// Each set fill conditions gate on, as the guards built from them ask.
function ensureConditionGroups(kind: true | FillConditions | undefined) {
  if (kind && kind !== true) {
    forEach(kind.structure, ensureCallerParamGroups);
    forEach(kind.joins, ensureCallerParamGroups);
    forEach(kind.fills, ensureCallerParamGroups);
    forEach(kind.writes, ensureCallerParamGroups);
  }
}

// A page writes a value a patch fills (and its closure set) only where a client
// source leaves a read unfilled, by its param-selected structure's groups.
function ensureUnfilledWriteGroups(slot: Slot) {
  if (
    (slot.kind === SlotKind.Value || slot.kind === SlotKind.ClosureScopes) &&
    slot.owner.type !== BindingType.dom &&
    isConditionalReason(slot.reason)
  ) {
    forEach(
      (slot.kind === SlotKind.Value
        ? getUnfilledReadSources
        : getUnfilledSubscribedSources)(slot.owner) || undefined,
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
  const write = isPatchWritten(binding) && leavesReadUnfilled(binding);
  const sources = getSourcesForRef(binding);
  return {
    write,
    effect: write && getPatchFill(binding).effectRead,
    seed: seedsCreatedScope(binding),
    unfillable: !!sources?.param && !sources.global && !patchRefreshes(binding),
  };
}

// A client read the patch leaves unfilled: always, or under structure a caller
// group owns.
function leavesReadUnfilled(binding: Binding) {
  const structure =
    !getPatchFill(binding).objectSource &&
    getUnfilledSubscribedSources(binding);
  return (
    structure === false ||
    some(
      structure,
      (sources) =>
        getConditionalCallerGroupsAt(sources, binding.section).length > 0,
    )
  );
}

// A sent value effects, captures, built objects or a join its write inits read,
// in a scope a flush writes, that no fill always renders.
function isPatchWritten(binding: Binding) {
  const { fill, writeReads } = getPatchFill(binding);
  return fill !== true && !!writeReads && patchWritesValues(binding.section);
}
