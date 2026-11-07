// Per-tag patch decisions, from each expression's write sources
// (derived from its resolved reads) and its section's place in a patch render.
import { types as t } from "@marko/compiler";

import { UpdatesFrom } from "../../../common/types";
import {
  type Binding,
  BindingType,
  bindingUtil,
  compareReferences,
  getCanonicalBinding,
  isGlobalBinding,
  isStateSourced,
} from "../bindings";
import { createPassMemo } from "../cyclic-memo";
import { mergeInitialValueSources } from "../finalize-references";
import { isPatch } from "../marko-config";
import { every, forEach, type Opt, push, reduce, some } from "../optional";
import {
  getSourcesForExpr,
  getSourcesForReferencedBindings,
  isGuardedReason,
  mapParamReason,
} from "../reasons";
import {
  getConstantBindings,
  getReferencedBindingsInFunction,
  type ReferencedExtra,
} from "../references";
import { type DOMRuntimeFeature, linkRuntimeFeature } from "../runtime";
import {
  getCallerParamGroupsAt,
  getLoopBody,
  isLoopBody,
  isOptionalBranch,
  type ParamReasonGroup,
  type Section,
} from "../sections";
import { hasOwnSetupWork } from "../setup-work";
import { inCreatedCatch } from "../shell";
import { getSignals, type Signal } from "../signals";
import { findSlot, SlotKind, type Slot } from "../slots";
import { getContentSites } from "../solve-reasons";
import { mergeSources, type Sources, withSources } from "../sources";
import { createAnalysisState } from "../state";
import {
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
  settlesOnClient,
  patchesBranchesAt,
  patchFillsSection,
} from "./structure";

// A hole a patch writes (a value, a control's, a site it renders): in
// patch-written structure, not state-sourced.
export function fillsHole(section: Section, extra: t.NodeExtra | undefined) {
  const sources = getFillSources(extra);
  return (
    patchFillsSection(section) &&
    (!sources?.state || seedsOnly(section, sources))
  );
}

// Read only from `<let>`s at the initial value the server renders where the scope
// is created: the hole seeds a created scope alone.
export function seedsOnly(section: Section, sources: Sources | undefined) {
  return (
    patchCreatesOrComposes(section) &&
    !!sources?.state &&
    !sources.param &&
    !sources.global &&
    every(sources.state, (state) => holdsInitialValue(state, section))
  );
}

// A `<let>` at the initial value the server renders as the section's scope is created:
// created with it, and unfilled.
function holdsInitialValue(state: Binding, section: Section) {
  return isCreatedAtInitialValue(state, section) && !fillsInitialValue(state);
}

// A `<let>` from initial values only, created with the section's scope.
export function isCreatedAtInitialValue(state: Binding, section: Section) {
  return state.readsInitialValues && isCreatedWith(section, state.section);
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
        isCreatedWithCallee(section.derives) &&
        isCreatedWith(section.parent!, owner))
  );
}

function isCreatedWithCallee(derives: NonNullable<Section["derives"]>) {
  const { unseen, sites, deepSites } = getContentSites(derives);
  return (
    !unseen &&
    !deepSites &&
    !!sites &&
    every(sites, (site) => {
      const siteSection = site.nodeBinding!.section;
      const sources = getSourcesForExpr(site);
      return (
        (!sources ||
          !mapParamReason(siteSection.program, sources, derives.exprs, true)) &&
        isCreatedWith(siteSection, siteSection.program)
      );
    })
  );
}

// The sources take client state: every `<let>` is, assigned or not.
export function hasClientState(sources: Sources | undefined) {
  return !!sources?.state;
}

// A seed-only hole: its `<let>`s' signals rewrite the node, so the page keeps its
// marker whatever the group.
export function keepsSeededMarker(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  return seedsOnly(section, getFillSources(extra));
}

// A handler written inline merged its references with its control's, so
// only its own references say whether it is client-sourced.
export function fillsHandler(tagSection: Section, value: t.Expression) {
  switch (value.type) {
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      return patchFillsSection(tagSection) && !referencesState(value.extra!);
    default:
      return fillsHole(tagSection, value.extra);
  }
}

// A read rendering a hole a patch fills: its value or content renders into its node,
// or it picks its tag's branch, in patch-written structure with no state source.
export function isFilledHole(read: ReferencedExtra) {
  return (
    !!(read.rendersValue || read.rendersContent || picksBranch(read)) &&
    fillsHole(read.section, read)
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

// Which renders of a body its writers' guards leave unwritten where its promise's
// caller groups update from the client: all, the paired ones (setup work), or none.
export function getUnwrittenBodies(
  section: Section,
  groups: [Section, ParamReasonGroup][],
): "all" | "paired" | undefined {
  // `_peek_scope_id` links each known child's patch.
  if (section.knownTags) return;
  // An effect reading nothing rides its shell (`isEffectOutsideShell`), and a
  // `$global` member's subscription the client's own render of the body.
  let unwritten: "all" | "paired" = hasOwnSetupWork(
    section,
    isEffect,
    isGlobalBinding,
  )
    ? "paired"
    : "all";
  if (section.slots.some((slot) => isSlotWritten(slot, groups))) return;
  for (const signal of getSignals(section).values()) {
    const writes = signal.hasHTMLEffect && getEffectWrites(section, signal);
    // The client's render runs it, unless it reads a value the server's alone updates:
    // the server's render then writes its entry.
    if (
      writes &&
      writes.reads.some(
        (read) =>
          getSourcesUpdatesFrom(
            section,
            getSourcesForReferencedBindings(read),
            groups,
          ) === UpdatesFrom.Server,
      )
    ) {
      return;
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
      if (settlesOnClient(child)) continue;
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
    const childUnwritten = getUnwrittenBodies(child, groups);
    if (!childUnwritten) return;
    if (childUnwritten === "paired" && !clientRendered) unwritten = "paired";
  }
  return unwritten;
}

// What a write's group mask composes (`buildWriteGroupArgs` builds it): its caller
// groups, with the server's bit for `$global`, or (`seed`) only their client bit.
export interface WriteGroups {
  groups: [Section, ParamReasonGroup][];
  params?: Sources["param"];
  global?: boolean;
  seed?: boolean;
}

// The groups of a write in `section` gating on `sources` (none: no caller group
// gates it, read as the server's); `stable`: never changes, a mask of `0`.
export function getWriteGroups(
  section: Section,
  sources: Sources | undefined,
  stable?: boolean,
): WriteGroups | undefined {
  if (stable) return { groups: [] };
  // A state-mixed write has no caller group (`ensureCallerParamGroups`).
  if (!isGuardedReason(sources)) return;
  const groups = getCallerParamGroupsAt(sources.param, section);
  if (groups.length) {
    return { groups, params: sources.param, global: sources.global };
  }
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
// composes just them, with the server's for `$global`; else the server's, maybe alone.
function getMaskUpdatesFrom(
  write: WriteGroups | undefined,
  groups: [Section, ParamReasonGroup][],
) {
  if (!write) return UpdatesFrom.Server;
  if (!write.groups.length) return 0;
  // A seed drops the server's bit, so groups beyond theirs leave it the client's.
  if (write.seed) {
    return holdsGroups(write.groups, groups) ? UpdatesFrom.Client : 0;
  }
  // A group beyond theirs may add the server's bit, where a filled intersection's render writes.
  if (
    write.groups.length === groups.length &&
    groups.every(([section, group]) =>
      write.groups.some(
        ([writeSection, writeGroup]) =>
          writeSection === section && !compareReferences(writeGroup, group),
      ),
    )
  ) {
    return write.global
      ? UpdatesFrom.Client | UpdatesFrom.Server
      : UpdatesFrom.Client;
  }
  return UpdatesFrom.Server;
}

// What a patch render writes of an effect (`getEffectEntryArgs`): its entry, where it
// reads a value the patch writes, under the groups of `written` (none: every render).
export function getEffectWrites(section: Section, signal: Signal) {
  // Only a value the patch writes in place re-runs it: a server group's.
  let written: Opt<Sources>;
  let always = false;
  const reads: Binding[] = [];
  const byEntry = runsByEntry(signal.referencedBindings);
  forEach(signal.referencedBindings, (binding) => {
    const root = getCanonicalBinding(binding);
    // A function with filled references it may hold re-runs it as each reference a patch writes changes.
    for (const read of runsEffectOnPatch(root) ||
    (byEntry && getPatchFill(root).fill)
      ? [root]
      : getFilledReads(root).filter(
          (read) => read !== root && !!getPatchWrite(read).write,
        )) {
      reads.push(read);
      const sources = getSourcesForReferencedBindings(read);
      if (getWriteGroups(section, sources)) {
        written = push(written, sources!);
      } else {
        always = true;
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
  return groups.every(([section, group]) =>
    writeGroups.some(
      ([writeSection, writeGroup]) =>
        writeSection === section && bindingUtil.isSuperset(writeGroup, group),
    ),
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
      : (!node || (expr.rendersValue && fillsHole(slot.section, expr))) &&
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
    slot.owner.type === BindingType.dom
  ) {
    const node = slot.owner;
    if (isKnownChildNode(node)) {
      // A known child's scope, which a patch pairs through.
      if (patchFillsSection(slot.section)) return "pairs";
    } else if (getLoopBody(node) && patchesBranchesAt(node)) {
      // The marker of loop rows a patch pairs.
      return "pairs";
    } else if (
      patchFillsSection(slot.section) &&
      some(slot.reasonExprs, rendersServerValue)
    ) {
      return "values";
    }
  }
}

function rendersServerValue(extra: t.NodeExtra) {
  return !!extra.rendersValue && !getFillSources(extra)?.state;
}

// Whether a function's own references read state.
function referencesState(extra: t.FunctionExtra) {
  return some(getReferencedBindingsInFunction(extra), isStateSourced);
}
