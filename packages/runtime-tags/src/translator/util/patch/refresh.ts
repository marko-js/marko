// Translate-side patch fills: which bindings a patch fills or writes, fill
// identity, and what a fresh scope can render. Analyze facts: ./structure.
import type { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
} from "@marko/compiler/babel-utils";

import {
  type Binding,
  bindingUtil,
  BindingType,
  getCanonicalBinding,
  type Intersection,
  isDirectAlias,
  someAlias,
  someAliased,
} from "../bindings";
import { createCyclicMemo } from "../cyclic-memo";
import { isTranslate } from "../get-compile-stage";
import { getParamGroupSources, isKnownTagExtra } from "../known-tag";
import { isPatch } from "../marko-config";
import {
  every,
  filter,
  forEach,
  type Opt,
  push,
  reduce,
  some,
  type SortedOpt,
} from "../optional";
import { getSourcesForRef, getSourcesForExpr, sourcesUtil } from "../reasons";
import { getReferencedBindings, type ReferencedExtra } from "../references";
import { linkRuntimeFeature } from "../runtime";
import {
  type Section,
  ensureReasonGroups,
  forEachSection,
  getRendererReason,
  isDynamicClosure,
  sectionUtil,
} from "../sections";
import { addSetupExpr } from "../setup-work";
import { findSlot, type Slot, SlotKind } from "../slots";
import { readsValuesOnResume } from "../solve-reasons";
import {
  hasRootParamSource,
  isInParams,
  isRootParam,
  mergeSources,
  type Sources,
} from "../sources";
import { createProgramState } from "../state";
import { isStableExpr } from "../write-guard";
import { isPatchedSite, getWriteSources } from "./decisions";
import {
  getBranchOf,
  getParamRebuildChain,
  inResumedStructure,
  isBranchPathSection,
  isBranchSectionChain,
  isStatefulBranch,
  isStructuralParam,
  someContentRead,
  isKnownChildNode,
} from "./structure";

// Stable wire/registry key for a fill: a register id for a program-wide fill
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
  const { markoOpts, opts } = getFile();
  return getTemplateId(markoOpts, opts.filename as string, "fill" + ordinal);
}

// The template's fill bindings.
export function getPatchFillBindings(section: { bindings: Opt<Binding> }) {
  return filter(section.bindings as Opt<Binding>, isPatchFillBinding);
}

// A canonical root server value a patch can keep current (aliases never
// get ordinals; `$global` readers recompute from the re-shipped bag).
function isPatchRefreshableBinding(binding: Binding) {
  return (
    isPatch() &&
    getCanonicalBinding(binding) === binding &&
    isPatchWrittenSection(binding.section) &&
    !!binding.sources &&
    !!(binding.sources.param || binding.sources.global) &&
    !binding.sources.state &&
    (binding.type === BindingType.param ||
      binding.type === BindingType.derived ||
      (binding.type === BindingType.let && !binding.assignments))
  );
}

// A scope a flush writes into: the root, a paired/created branch on the
// branch path (a stateful branch is the client's alone), or a boundary body.
function isPatchWrittenSection(section: Section) {
  return (
    !section.parent ||
    section.branch?.optional === false ||
    (!!section.branch?.optional &&
      isBranchPathSection(section) &&
      !isStatefulBranch(section))
  );
}

// A potential fill: a server-sourced value whose reads intersect client
// state; the server writes all, tree-shaking decides which apply.
export function isPatchFillBinding(binding: Binding) {
  // State of a scope a patch may create (a branch body, a template's
  // root) seeds through its fill signal — assigned state only (retention).
  if (
    isPatch() &&
    (!binding.section.parent ||
      isCreatableBody(binding.section) ||
      (!!binding.localOf && isBranchPathSection(binding.section))) &&
    // Flushes never create stateful branches, so their
    // state needs no seed fill.
    !isStatefulBranch(binding.section) &&
    getCanonicalBinding(binding) === binding &&
    (binding.sources?.state || binding.section.parent)
  ) {
    if (binding.sources?.state) {
      return binding.type === BindingType.let && !!binding.assignments;
    }
    // A local with no state source that a state join reads: its patch writes
    // it, refreshing a paired scope and seeding a fresh one.
    if (binding !== binding.section.params && isSeedableLocal(binding)) {
      return hasStateJoinedRead(binding);
    }
  }
  return isPatchRefreshableBinding(binding) && hasStateJoinedRead(binding);
}

// A branch or boundary body on the branch path: a flush may create its
// scopes (a boundary's when it settles or rebuilds after a catch).
export function isCreatableBody(section: Section) {
  return !!section.branch && isBranchPathSection(section);
}

// A value a created scope gets from no other channel (a resumed one reads it
// from the document), unlike state, fills, writes and loop params.
export function isCreatedScopeSeed(binding: Binding) {
  const { section } = binding;
  return (
    isPatch() &&
    (binding.localOf
      ? createsElidedContent(section)
      : isCreatableBody(section) || !section.parent) &&
    binding.type !== BindingType.dom &&
    binding.type !== BindingType.global &&
    binding.type !== BindingType.constant &&
    !binding.sources?.state &&
    !(section.parent && isSectionParam(binding) && !binding.localOf) &&
    (!isPatchFillBinding(binding) || isJoinFill(binding)) &&
    !isPatchWriteBinding(binding)
  );
}

// Content a patch creates from its shell alone: no registered renderer brings
// the attribute tag `<for>` params its call site would pass.
function createsElidedContent(section: Section) {
  return section.contentShell === true && !getRendererReason(section);
}

// The root value an alias chain reads: aliases never fill or write on
// their own, their root does.
export function getFillRoot(binding: Binding) {
  let root = binding;
  while (isDirectAlias(root)) root = root.aliasOf!;
  return root;
}

// A rendered read (through any alias) the client must recompute: joined
// with state, or inside structure the client may own.
function hasStateJoinedRead(binding: Binding): boolean {
  return !!getFillReadKind(binding);
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
  const kind = getFillReadKind(binding);
  return kind === true ? undefined : kind;
}

// Memoized at translate only: analyze asks while call sites still add
// sources, so its answers there must stay live.
const [getFillReadKinds] = createProgramState(
  () => new Map<Binding, true | FillConditions | undefined>(),
);
function getFillReadKind(binding: Binding): true | FillConditions | undefined {
  if (!isTranslate()) return computeFillReadKind(binding);
  const kinds = getFillReadKinds();
  if (!kinds.has(binding)) kinds.set(binding, computeFillReadKind(binding));
  return kinds.get(binding);
}

function computeFillReadKind(
  binding: Binding,
): true | FillConditions | undefined {
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
        !binding.section.parent &&
        isBranchSectionChain(read.section, binding.section) &&
        !isBoundaryValueRead(read) &&
        getOtherInputs(sources, binding);
      if (others) {
        // A nested member's own fill (a loop row's, joined with state) also
        // re-runs the join, with whatever value the scope holds.
        const fills = reduce(
          getReferencedBindings(read),
          (fills: SortedOpt<Sources>, member) =>
            member.section.parent && isPatchFillBinding(member)
              ? sourcesUtil.add(fills, getSourcesForRef(member)!)
              : fills,
        );
        conditions = mergeConditions(conditions, { joins: others, fills });
      }
    }
    // A `<define>` body reads as if at each tag rendering its var; a
    // recursive define reaches its own once.
    // A worklist: each call section once, visited as it is added.
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
      if (effect || binding.section.parent) continue;
      // An `<await>` value re-fires no promise client-side: the boundary's
      // own flushes carry its settlement.
      if (
        content &&
        !isBoundaryValueRead(read) &&
        consumerMayWithhold(content)
      ) {
        conditions = mergeConditions(conditions, { contents: content });
      }
      // Only structure rebuilt from OTHER template params can leave this
      // read unfilled, as a caller's ownership bits decide at render.
      for (const sources of getParamRebuildChain(readAt) || []) {
        if (hasRootParamSource(sources) && !sourcesInclude(sources, binding)) {
          conditions = mergeConditions(conditions, { rebuilds: sources });
        }
      }
    }
  }
  return conditions;
}

// Whether the sources' params include the binding or a value it is a
// property of (both reach the client together).
function sourcesInclude(sources: Sources, binding: Binding) {
  return someAliased(binding, isInParams, sources.param);
}

// The template params a read joins besides the binding's own: a caller
// passes each.
function getOtherInputs(sources: Sources | undefined, binding: Binding) {
  const own = getSourcesForRef(binding)?.param;
  const others = bindingUtil.filter(
    sources?.param,
    (param) => !param.section.parent && !bindingUtil.has(own, param),
  );
  return others && ({ param: others } as Sources);
}

// A fill only a join's client-sourced members call for: otherwise the value is
// a write, and a created scope seeds it for the join's init.
export function isJoinFill(binding: Binding) {
  const kind = getFillReadKind(binding);
  return !!kind && kind !== true && !kind.rebuilds && !kind.contents;
}

// A fill keeping every client read current, through its declaration and
// closures; a join fill reaches its joins alone.
export function fillsReads(binding: Binding) {
  return isPatchFillBinding(binding) && !isJoinFill(binding);
}

// Whether the consumer may withhold the content, which the runtime decides:
// client state may reach its structural params.
function consumerMayWithhold(content: Section) {
  const consumer = content.derives!.tag;
  // A `<define>` var passed on (its direct tags classify on their own)
  // may reach any consumer, so the runtime decides.
  if (!isKnownTagExtra(consumer)) {
    return some(content.derives!.binding, (binding) => {
      for (const read of binding.reads.keys()) {
        if (!(read as { defineBodySection?: Section }).defineBodySection) {
          return true;
        }
      }
      return false;
    });
  }
  for (const group of getParamGroupSources(consumer) || []) {
    if (group.sources?.state && some(group.params, isStructuralParam)) {
      return true;
    }
  }
  return false;
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
  return (
    isPatchRefreshableBinding(binding) &&
    (!isPatchFillBinding(binding) || !!getFillConditions(binding)) &&
    (someAlias(binding, isRegisteredFnCapture, undefined, true) ||
      someAlias(binding, hasPatchEffectRead, undefined, true))
  );
}

// A root join's params reach a created scope as seeds, never as arrivals:
// the flush runs each join whose output the client owns.
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
    !section.parent &&
    !sources?.state &&
    hasRootParamSource(sources)
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
  return hasPatchEffect(getFillRoot(binding));
}

function isRegisteredFnCapture(binding: Binding) {
  return !!binding.registeredFnCapture;
}

// Closures whose creation INITs render a fresh scope.
export function getCreateInitClosures(section: Section) {
  return filter(section.referencedClosures as Opt<Binding>, (closure) =>
    closureInitsCreated(closure, section),
  );
}

// Every member of a state join inits: the join fires once all arrive, and a
// created scope runs only registered inits. The reconciler sets constants.
export function closureInitsCreated(closure: Binding, section: Section) {
  return (
    closure.type !== BindingType.constant &&
    (!!closure.sources?.state || joinsStateIn(closure, section))
  );
}

// A closure joined with state in an intersection read in `section`.
export function joinsStateIn(closure: Binding, section: Section) {
  for (const read of closure.reads.keys()) {
    if (
      read.section === section &&
      Array.isArray(getReferencedBindings(read)) &&
      getSourcesForRef(getReferencedBindings(read))?.state
    ) {
      return true;
    }
  }
  return false;
}

// A fill closure a state join in `section` reads: its init registers on a
// `_fill_join_*` wrapper, unless the chain leaves the branch ladder.
export function fillJoinsIn(closure: Binding, section: Section) {
  return (
    !closure.sources?.state &&
    isPatchFillBinding(closure) &&
    isBranchSectionChain(section, closure.section) &&
    joinsStateIn(closure, section)
  );
}

// Closures a section's local fills with no state source derive from: when a
// flush withholds such a write, the fresh scope re-derives through their inits.
export function getLocalFillClosures(section: Section) {
  let closures: SortedOpt<Binding>;
  forEach(getPatchFillBindings(section), (fill) => {
    if (fill.section === section && !fill.sources?.state) {
      // Params sort by section, so this drops one contiguous run.
      closures = bindingUtil.union(
        closures,
        bindingUtil.filter(
          fill.sources?.param,
          (closure) => closure.section !== section,
        ),
      );
    }
  });
  return closures;
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

// A property alias of the section's own params (a loop item, its property).
function isSectionParam(binding: Binding) {
  return (
    binding.type === BindingType.param ||
    someAliased(binding, isSectionParams, binding.section.params)
  );
}

function isSectionParams(binding: Binding, params: Binding | undefined) {
  return binding === params;
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

// A `$global` join's unfillable reads but root params: the call site keeps
// those current wherever it hands them to the client.
export function hasUnfillableGlobalJoinReads(refs: Opt<Binding>) {
  return some(
    refs,
    (binding) =>
      isUnfillablePatchRead(binding) &&
      some(getSourcesForRef(binding)!.param, (param) => !isRootParam(param)),
  );
}

// The root params a `$global` join reads unfilled: a changed key re-runs it
// only where the client owns them.
export function getCallerHeldSources(refs: Opt<Binding>) {
  let held: Sources | undefined;
  forEach(refs, (binding) => {
    if (isUnfillablePatchRead(binding)) {
      held = mergeSources(held, getSourcesForRef(binding));
    }
  });
  return held;
}

function isUnfillablePatchRead(binding: Binding) {
  const sources = getSourcesForRef(binding);
  return !!sources?.param && !sources.global && !patchFills(binding);
}

// A patch fills a root value (a fill or a write) and a local derivation
// when every server source it derives from (it recomputes client-side).
function patchFills(binding: Binding): boolean {
  return rootFills(getFillRoot(binding));
}
const rootFills = createCyclicMemo((root: Binding): boolean => {
  if (isPatchFillBinding(root) || isPatchWriteBinding(root)) return true;
  if (!root.section.parent) return false;
  // A branch's own param (a loop item) arrives with the structure.
  if (isSectionParam(root)) return true;
  return every(root.sources?.param, patchFills);
}, true);

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
    someContentRead(
      derives.binding,
      derives.properties,
      (read) =>
        isPatchedSite(read) ||
        read.section.boundaryContent ||
        read.section.branch?.optional === false,
    )
  );
}, false);

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
    someContentRead(derives.binding, derives.properties, (read) =>
      enclosingMayCreate(read.section),
    )
  );
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

// The param groups a section's patch writes guard on, settled with its
// reasons: fills and writes, joins, and dynamic closures created scopes init.
export function finalizePatchReasonGroups(
  section: Section,
  intersections: Intersection[] | undefined,
) {
  forEach(section.bindings, (binding) => {
    const fills = isPatchFillBinding(binding);
    // A fill entry needs its patcher on every page this template renders
    // into; one only client-rebuilt structure or a join needs rides the call site's.
    if (fillsReads(binding) && !getFillConditions(binding)?.rebuilds) {
      linkRuntimeFeature("patch-value");
    }
    if (fills || isPatchWriteBinding(binding)) {
      ensureReasonGroups(getSourcesForRef(binding));
    }
    if (fills) forEach(getFillConditions(binding)?.joins, ensureReasonGroups);
  });
  // Created joins run by group, and a page ships a patch-filled join's
  // members by it.
  for (const join of intersections || []) {
    ensureReasonGroups(getSourcesForRef(join));
  }
  // A created content scope's subscribe init is gated on its group.
  forEach(section.referencedClosures, (closure) => {
    if (
      closure.type !== BindingType.constant &&
      isDynamicClosure(section, closure)
    ) {
      ensureReasonGroups(closure.sources);
    }
  });
  forEach(section.slots, ensureWriteGroups);
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
  if (!expr.consumed) ensureReasonGroups(getWriteSources(expr));
}

// Before reasons settle: setup renders a root's keyed `$global` reads, and the
// return's group is known before call sites map theirs.
export function finalizePatchRootReasons() {
  const rootSection = getProgram().node.extra.section!;
  forEachSection((section) => {
    if (getSectionGlobalReads(section)) addSetupExpr(section);
  });
  const { returnValueExpr } = rootSection;
  if (returnValueExpr) ensureReasonGroups(getSourcesForExpr(returnValueExpr));
}

// A created scope's seeds may carry registrations, which bind by id.
export function linkPatchSeedBinds() {
  forEachSection((section) => {
    forEach(section.bindings, (binding) => {
      if (isCreatedScopeSeed(binding) && findSlot(binding)?.reason) {
        linkRuntimeFeature("patch-bind");
      }
    });
  });
}
