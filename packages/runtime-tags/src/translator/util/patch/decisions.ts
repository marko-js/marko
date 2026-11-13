// Per-tag patch decisions, from each expression's write sources
// (derived from its resolved reads) and its section's place in a patch render.
import { types as t } from "@marko/compiler";

import { UpdatesFrom } from "../../../common/types";
import {
  type Binding,
  BindingType,
  bindingUtil,
  getCanonicalBinding,
  type ParamBinding,
} from "../bindings";
import { createPassMemo } from "../cyclic-memo";
import { mergeInitialValueSources } from "../finalize-references";
import { isPatch } from "../marko-config";
import {
  every,
  forEach,
  type Opt,
  push,
  reduce,
  some,
  type SortedOpt,
} from "../optional";
import {
  getSourcesForExpr,
  getSourcesForReferencedBindings,
  isGuardedReason,
  mapParamReason,
} from "../reasons";
import {
  getCanonicalExpr,
  getConstantBindings,
  type ReferencedExtra,
} from "../references";
import { type DOMRuntimeFeature, linkRuntimeFeature } from "../runtime";
import {
  getCallerParamGroupsAt,
  getLoopBody,
  isCallerParamAt,
  isKnownChild,
  isLoopBody,
  isOptionalBranch,
  type ParamReasonGroup,
  type Section,
} from "../sections";
import { hasSetupWorkReadingNothing } from "../setup-work";
import { inCreatedCatch } from "../shell";
import { getSignals, type Signal } from "../signals";
import { findSlot, SlotKind, type Slot } from "../slots";
import { getContentSites } from "../solve-reasons";
import {
  mergeSources,
  type Sources,
  sourcesUtil,
  withSources,
} from "../sources";
import { createAnalysisState } from "../state";
import {
  getCreatedSetup,
  getFilledReads,
  getPatchWrite,
  fillsInitialValue,
  getPatchFill,
  patchCreatesOrComposes,
  runsByEntry,
  runsEffectOnPatch,
} from "./refresh";
import {
  isKnownChildNode,
  hasStatefulBranchExpr,
  patchesBranchesAt,
  patchFillsSection,
} from "./structure";

// A hole a patch writes: a value or content its tag recorded in analyze as rendering
// into its node, so translate writes no hole analysis did not link.
export function fillsHole(section: Section, extra: t.NodeExtra | undefined) {
  return (
    !!extra &&
    rendersHole(getCanonicalExpr(extra)) &&
    patchFillsExpr(section, extra)
  );
}

// A write of the expression a patch fills (a hole's, or a dynamic tag's it renders): in
// patch-written structure, not state-sourced unless it only seeds a created scope.
export function patchFillsExpr(section: Section, extra: t.NodeExtra) {
  if (!patchFillsSection(section)) return false;
  const sources = getFillSources(extra);
  return !sources?.state || seedsOnly(section, sources);
}

function rendersHole(extra: t.NodeExtra) {
  return !!(extra.rendersValue || extra.rendersContent);
}

// Read only from `<let>`s at the initial value the server renders where the scope
// is created: the hole seeds a created scope alone.
function seedsOnly(section: Section, sources: Sources | undefined) {
  return (
    !!sources?.state &&
    !sources.param &&
    !sources.global &&
    patchCreatesOrComposes(section) &&
    every(sources.state, (state) => holdsInitialValue(state, section))
  );
}

// A `<let>` at the initial value the server renders as the section's scope is created:
// created with it, and unfilled.
function holdsInitialValue(state: Binding, section: Section) {
  return (
    state.readsInitialValues &&
    isCreatedWith(section, state.section) &&
    !fillsInitialValue(state)
  );
}

// The section's scope exists only as `owner`'s is created: the owner's own, a body
// every call renders in such a scope, or content its callee renders as it is created.
function isCreatedWith(section: Section, owner: Section): boolean {
  return (
    section === owner ||
    (section.renderedBy
      ? every(section.renderedBy, (call) =>
          isCreatedWith(call.childScopeBinding.section, owner),
        )
      : !!section.derives &&
        isCreatedWithCallee(section) &&
        isCreatedWith(section.parent!, owner))
  );
}

function isCreatedWithCallee(content: Section) {
  const { unseen, sites, deepSites } = getContentSites(content);
  return (
    !unseen &&
    !deepSites &&
    !!sites &&
    every(sites, (site) => {
      const siteSection = site.nodeBinding!.section;
      const sources = getSourcesForExpr(site);
      return (
        (!sources ||
          !mapParamReason(
            siteSection.program,
            sources,
            content.derives!.exprs,
            true,
          )) &&
        isCreatedWith(siteSection, siteSection.program)
      );
    })
  );
}

// The sources take client state: every `<let>` is, assigned or not.
export function hasClientState(sources: Sources | undefined) {
  return !!sources?.state;
}

// Whether the sources read a param a caller passes (`isKnownChild`).
export function hasCallerParamSource(sources: Sources | undefined) {
  return some(sources?.param, isCallerParam);
}

// Whether a write in `section` gates on a group of the sources' params.
export function hasCallerParamSourceAt(
  sources: Sources | undefined,
  section: Section,
) {
  return some(sources?.param, (param) => isCallerParamAt(param, section));
}

// A source only the server changes that no caller group gates: `$global`, or a param of a
// section no known caller renders (a patch renders that section only with server input).
function hasUngatedSource(sources: Sources) {
  return !!sources.global || !every(sources.param, isCallerParam);
}

function isCallerParam(binding: ParamBinding) {
  return isKnownChild(binding.section);
}

// Whether the sources read what the server supplies: params or `$global`.
export function hasParamOrGlobalSource(sources: Sources | undefined) {
  return !!(sources?.param || sources?.global);
}

// A seed-only hole: its `<let>`s' signals rewrite the node, so the page keeps its
// marker whatever the group.
export function keepsSeededMarker(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  return seedsOnly(section, getFillSources(extra));
}

// A read rendering a hole a patch fills (`fillsHole`): its value or content renders
// into its node, or it picks its tag's branch.
export function isFilledHole(read: ReferencedExtra) {
  return (
    (rendersHole(read) || picksBranch(read)) &&
    patchFillsExpr(read.section, read)
  );
}

// A control flow tag's own expression, which its branch expression slot records.
function picksBranch(read: ReferencedExtra) {
  return (
    !!read.nodeBinding && !!findSlot(read.nodeBinding, SlotKind.BranchExpr)
  );
}

// A slot the writer keys a patch entry on, which its scope writes whatever its
// reason says: a node's, or a branch or loop row a patch pairs.
export function isPatchKeyedSlot(slot: Slot) {
  return isPatch() && !!getPatchKeying(slot);
}

// A node patch-keyed only for the values rendered into it, which nothing pairs
// through: what keys it is their groups'.
export function isPatchKeyedByValues(binding: Binding) {
  return isPatch() && getPatchKeying(findSlot(binding)!) === "values";
}

// A scope with a patch-keyed node is written.
export const hasPatchKeyedNodes = createPassMemo(
  (section: Section) => section.slots.some(isPatchKeyedNode),
  false,
);

// Which renders of an `<await>` body write a value where its promise's caller groups
// update from the client (all, the paired ones, none); a `nested` section's entries count.
export function getUnwrittenBodies(
  section: Section,
  groups: [Section, ParamReasonGroup][],
  nested?: true,
): "all" | "paired" | undefined {
  // `_peek_scope_id` links each known child's patch.
  if (section.knownTags) return;
  // An effect reading nothing rides its shell (`isEffectOutsideShell`), and closure
  // setup writes no value.
  let unwritten: "all" | "paired" = hasSetupWorkReadingNothing(
    section,
    isEffect,
  )
    ? "paired"
    : "all";
  if (section.slots.some((slot) => isSlotWritten(slot, groups))) return;
  if (nested) {
    // A filled intersection's render entry rides the copy on every render.
    for (const [ref, setup] of getCreatedSetup(section)) {
      if (Array.isArray(ref) && setup.setup === "mixed") return;
    }
    for (const signal of getSignals(section).values()) {
      const writes = signal.hasHTMLEffect && getEffectWrites(section, signal);
      // The client's render runs it, unless it reads a value the server's alone updates:
      // the server's render then writes its entry.
      if (
        writes &&
        writes.reads.some(
          (read) =>
            getSourcesUpdatesFrom(section, read.sources, groups) ===
            UpdatesFrom.Server,
        )
      ) {
        return;
      }
    }
  }
  for (const child of section.children) {
    const { branch } = child;
    // `writeBranch` and a dynamic tag's entry skip content whose mask holds the
    // client's bit, and `writeLoop` keeps such a loop's rows (a paired one's writes).
    const clientRendered =
      (!branch || isOptionalBranch(child)) &&
      !!(
        getWriteUpdatesFrom(section, child.branchExpr, groups) &
        UpdatesFrom.Client
      );
    if (clientRendered && !isLoopBody(child)) continue;
    if (branch?.kind === "await") {
      // `_await` writes nothing for a body that settles by `_await_promise`, and
      // its Pending entry where a patch fills its promise.
      if (hasStatefulBranchExpr(child)) continue;
      if (
        !(
          getSourcesUpdatesFrom(
            section,
            getFillSources(child.branchExpr),
            groups,
          ) & UpdatesFrom.Client
        )
      ) {
        return;
      }
    }
    const childUnwritten = getUnwrittenBodies(child, groups, true);
    if (!childUnwritten) return;
    if (childUnwritten === "paired" && !clientRendered) unwritten = "paired";
  }
  return unwritten;
}

// What a write's group mask composes (`buildWriteGroupArgs` builds it): its caller
// groups, with the server's bit for an ungated source, or (`seed`) only their client bit.
export interface WriteGroups {
  groups: [Section, ParamReasonGroup][];
  params?: Sources["param"];
  /** Client state or `always`: written unconditionally, no caller group gates it. */
  unconditional?: boolean;
  ungated?: boolean;
  seed?: boolean;
}

// The groups of a write in `section` gating on `sources`, none for no sources;
// `stable`: never changes, a mask of `0`.
export function getWriteGroups(section: Section, sources: Sources): WriteGroups;
export function getWriteGroups(
  section: Section,
  sources: Sources | undefined,
  stable?: boolean,
): WriteGroups | undefined;
export function getWriteGroups(
  section: Section,
  sources: Sources | undefined,
  stable?: boolean,
): WriteGroups | undefined {
  if (stable) return { groups: [] };
  if (!sources) return;
  // A state-mixed write has no caller group (`ensureCallerParamGroups`).
  if (!isGuardedReason(sources)) {
    return { groups: [], params: sources.param, unconditional: true };
  }
  return {
    groups: getCallerParamGroupsAt(sources.param, section),
    params: sources.param,
    ungated: hasUngatedSource(sources),
  };
}

// The value a mask of `write` holds, its caller groups' bits `combine`d: client state's
// (the server's too beside a param), an ungated source's server bit, else `0`.
export function getWriteGroupsValue<R>(
  write: WriteGroups | undefined,
  combine: (groups: [Section, ParamReasonGroup][], bits: number) => R,
) {
  if (!write) return 0;
  if (write.unconditional) {
    return write.params
      ? UpdatesFrom.Client | UpdatesFrom.Server
      : UpdatesFrom.Client;
  }
  const bits = write.ungated ? UpdatesFrom.Server : 0;
  return write.groups.length ? combine(write.groups, bits) : bits;
}

// A write no caller group gates passes no mask, read as the server's, unless it is
// constant (a mask of `0`).
export function passesNoMask(write: WriteGroups) {
  return !!(write.unconditional || write.ungated);
}

// An expression's; a value fixed for the scope's lifetime (constant, `<id>`,
// `<define>`) only seeds a created scope.
export function getExprWriteGroups(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  const sources = getFillSources(extra);
  return seedsOnly(section, sources)
    ? getSeedWriteGroups(section, sources!.state)
    : getWriteGroups(section, sources, !sources);
}

// A seed of the states' initial values: the client's bit of the groups they read.
export function getSeedWriteGroups(
  section: Section,
  states: Sources["state"],
): WriteGroups {
  const params = getStateInitialValueSources(states)?.param;
  return {
    groups: getCallerParamGroupsAt(params, section),
    params,
    seed: true,
  };
}

// What a mask of `write` reads where `groups` hold the client's bit: that bit where it
// composes them (a seed drops the server's); else the server's, but for a seed.
function getMaskUpdatesFrom(
  write: WriteGroups | undefined,
  groups: [Section, ParamReasonGroup][],
) {
  if (!write) return UpdatesFrom.Server;
  if (!write.groups.length) return passesNoMask(write) ? UpdatesFrom.Server : 0;
  return holdsGroups(write.groups, groups)
    ? write.seed
      ? UpdatesFrom.Client
      : UpdatesFrom.Client | UpdatesFrom.Server
    : write.seed
      ? 0
      : UpdatesFrom.Server;
}

// What a patch render writes of an effect (`getEffectEntryArgs`): its entry, where it
// reads a value the patch writes, under the groups of `written` (none: every render).
export function getEffectWrites(section: Section, signal: Signal) {
  // Only a value the patch writes in place re-runs it: a server group's.
  let written: SortedOpt<Sources>;
  let always = false;
  const reads: Binding[] = [];
  const byEntry = runsByEntry(signal.referencedBindings);
  forEach(signal.referencedBindings, (binding) => {
    const root = getCanonicalBinding(binding);
    const own = runsEffectOnPatch(root) || (byEntry && getPatchFill(root).fill);
    // A function with filled references it may hold re-runs it as each reference a patch writes changes.
    for (const read of own ? [root] : getFilledReads(root)) {
      if (own || (read !== root && getPatchWrite(read).write)) {
        reads.push(read);
        const sources = getSourcesForReferencedBindings(read);
        if (getWriteGroups(section, sources)?.groups.length) {
          written = sourcesUtil.add(written, sources!);
        } else {
          always = true;
        }
      }
    }
  });
  // No patch pairs what a created `@catch` holds, so their shells mount their effects.
  if (reads.length && !inCreatedCatch(section)) {
    return { reads, written: always ? undefined : written };
  }
}

// The params and `$global` each state's initial value reads, through other states.
// A controlled `<let>` that is no state root has no initial-value fact, so it answers none.
export function getStateInitialValueSources(states: Sources["state"]) {
  const sources = reduce(states, mergeInitialValueSources);
  return sources && withSources(sources, undefined, sources.param);
}

// Whether a mask composing `writeGroups` holds the bits of each of `groups`.
function holdsGroups(
  writeGroups: [Section, ParamReasonGroup][],
  groups: [Section, ParamReasonGroup][],
) {
  // With none, no write's mask composes the promise's client bit.
  return (
    !!groups.length &&
    groups.every(([section, group]) =>
      writeGroups.some(
        ([writeSection, writeGroup]) =>
          writeSection === section && bindingUtil.isSuperset(writeGroup, group),
      ),
    )
  );
}

function isEffect(extra: t.NodeExtra) {
  return extra.isEffect;
}

// Whether the slot's writers write where `groups` update from the client: a `<let>`'s
// change handler binds by its reason (none: unread), else by what it holds.
function isSlotWritten(slot: Slot, groups: [Section, ParamReasonGroup][]) {
  if (slot.kind === SlotKind.ChangeHandler) {
    return (
      !!slot.reason &&
      getSourcesUpdatesFrom(slot.section, slot.reason, groups) ===
        UpdatesFrom.Server
    );
  }
  // A node's writers are its holes and content.
  const node =
    slot.kind === SlotKind.Value && slot.owner.type === BindingType.dom;
  return some(slot.reasonExprs, (expr) =>
    expr.rendersContent
      ? !(getWriteUpdatesFrom(slot.section, expr, groups) & UpdatesFrom.Client)
      : (!node || fillsHole(slot.section, expr)) &&
        getWriteUpdatesFrom(slot.section, expr, groups) === UpdatesFrom.Server,
  );
}

// What an expression's write mask (`getExprRootGroupArgs`) reads where `groups` hold
// the client's bit.
function getWriteUpdatesFrom(
  section: Section,
  extra: t.NodeExtra | undefined,
  groups: [Section, ParamReasonGroup][],
) {
  return getMaskUpdatesFrom(getExprWriteGroups(section, extra), groups);
}

// The same for a write gating on `sources` (`getRootGroupArgs`).
function getSourcesUpdatesFrom(
  section: Section,
  sources: Sources | undefined,
  groups: [Section, ParamReasonGroup][],
) {
  return getMaskUpdatesFrom(getWriteGroups(section, sources), groups);
}

// What a patch write of the expression follows: its reads' sources, `$global`'s
// for the keys it reads, and its loop keys' (a key changes with its collection).
export function getFillSources(extra: t.NodeExtra | undefined) {
  return mergeSources(
    extra && getSourcesForExpr(extra),
    getSourcesForReferencedBindings(getConstantBindings(extra)),
  );
}

// The write sources of each server value rendered into the node.
export function getRenderedValueSources(binding: Binding) {
  let sources: Opt<Sources>;
  forEach(findSlot(binding)!.reasonExprs, (expr) => {
    if (rendersServerValue(expr)) {
      const exprSources = getFillSources(expr);
      if (exprSources) sources = push(sources, exprSources);
    }
  });
  return sources;
}

// The runtime features a hole's patch entries apply through (its patchers, and
// `controllable` a spread re-claims), linked where a patch writes it.
export function linkHolePatcher(
  section: Section,
  extra: t.NodeExtra,
  ...features: (DOMRuntimeFeature | false)[]
) {
  if (isPatch()) {
    onReasonsSettled(() => {
      if (fillsHole(section, extra)) {
        for (const feature of features) {
          if (feature) linkRuntimeFeature(feature);
        }
      }
    });
  }
}

// By a control's server helper: the feature applying its entries, which loads
// `patches/control`.
export const controlPatchers = {
  _attr_input_checked: "patches/control-input",
  _attr_input_checkedValue: "patches/control-checked-value",
  _attr_details_open: "patches/control-open",
  _attr_dialog_open: "patches/control-open",
  _attr_select_value: "patches/control-select",
  _attr_textarea_value: "patches/control-input",
  _attr_input_value: "patches/control-input",
} as const satisfies Record<string, DOMRuntimeFeature>;

// A patch link reads reasons (through fills), so it runs once the solve settles
// them, still at analysis exit, where the page entry reads linked features.
const [getSettledFinalizers] = createAnalysisState(() => [] as (() => void)[]);

export function onReasonsSettled(finalize: () => void) {
  getSettledFinalizers().push(finalize);
}

export function finalizeReasonsSettled() {
  for (const finalize of getSettledFinalizers()) finalize();
}

function isPatchKeyedNode(slot: Slot) {
  return slot.kind === SlotKind.Value && !!getPatchKeying(slot);
}

// Why a patch keys the slot, from sources and structure; being keyed is no
// reason.
const getPatchKeying = createPassMemo(computePatchKeying, undefined);

function computePatchKeying(slot: Slot) {
  if (slot.kind === SlotKind.Branch) {
    // A branch or loop row a patch pairs (an `<if>` branch by index, even
    // under a constant test).
    const section = slot.owner;
    if (
      isOptionalBranch(section) &&
      patchesBranchesAt(section.branch.tag.nodeBinding)
    ) {
      return "pairs";
    }
  } else if (
    slot.kind === SlotKind.Value &&
    slot.owner.type === BindingType.dom &&
    patchFillsSection(slot.section)
  ) {
    const node = slot.owner;
    if (isKnownChildNode(node)) {
      // A known child's scope, which a patch pairs through.
      return "pairs";
    } else if (getLoopBody(node) && patchesBranchesAt(node)) {
      // The marker of loop rows a patch pairs.
      return "pairs";
    } else if (some(slot.reasonExprs, rendersServerValue)) {
      return "values";
    }
  }
}

function rendersServerValue(extra: t.NodeExtra) {
  return !!extra.rendersValue && !getFillSources(extra)?.state;
}
