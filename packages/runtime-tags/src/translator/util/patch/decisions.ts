// Per-tag patch decisions, from each expression's write sources
// (derived from its resolved reads) and its section's place in a patch render.
import { types as t } from "@marko/compiler";

import { UpdatesFrom } from "../../../common/types";
import {
  type Binding,
  BindingType,
  bindingUtil,
  compareReferences,
  getAliasRoot,
  getCanonicalBinding,
  isStateSourced,
} from "../bindings";
import { createPassMemo } from "../cyclic-memo";
import { mergeInitSources } from "../finalize-references";
import { isClientAtEveryCall } from "../known-tag";
import { isPatch } from "../marko-config";
import { isTrackedFunction } from "../module-registrations";
import { every, forEach, type Opt, push, reduce, some } from "../optional";
import {
  getSourcesForExpr,
  getSourcesForRef,
  isConditionalReason,
  isUnconditionalReason,
} from "../reasons";
import {
  getCanonicalExtra,
  getConstantBindings,
  getNameRead,
  getReferencedBindings,
  getReferencedBindingsInFunction,
  type ReferencedExtra,
} from "../references";
import { type DOMRuntimeFeature, linkRuntimeFeature } from "../runtime";
import { getScopeAccessor } from "../scope-accessor";
import { getScopeExpression } from "../scope-read";
import {
  getCallerParamGroupsAt,
  getLoopBody,
  isLoopBody,
  isSameOrAncestorSection,
  type ParamReasonGroup,
  type Section,
} from "../sections";
import { hasOwnSetupWork } from "../setup-work";
import { inCreatedCatch } from "../shell";
import { getSignals, type Signal } from "../signals";
import { findSlot, SlotKind, type Slot } from "../slots";
import { bindingReaders, someRead } from "../solve-reasons";
import { mergeSources, type Sources, withSources } from "../sources";
import { createAnalysisState } from "../state";
import {
  atInitialValueAsCreated,
  fillsInitialValue,
  getPatchFill,
  patchCreatesOrComposes,
  rerunsByEntry,
  rerunsEffectOnPatch,
} from "./refresh";
import {
  isKnownChildNode,
  isStatefulBranch,
  patchesBranchesAt,
  patchWrites,
} from "./structure";

// A hole a patch writes (a value, a control's, a site it renders): in
// patch-written structure, not state-sourced.
export function writesPatchHole(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  const sources = getWriteSources(extra);
  return (
    patchWrites(section) &&
    (!sources?.state || seedsOnly(section, sources, extra))
  );
}

// The server writes the hole's value into a patch: a patch hole, or a
// first-value hole while its `<let>` holds that value.
export function serverWritesHole(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  return (
    writesPatchHole(section, extra) || !!(extra && getFirstValueLet(extra))
  );
}

// Read only from `<let>`s at the initial value the server renders where the scope
// is created: the hole seeds a created scope alone.
export function seedsOnly(
  section: Section,
  sources: Sources | undefined,
  read?: t.NodeExtra,
) {
  return (
    patchCreatesOrComposes(section) &&
    !!sources?.state &&
    !sources.param &&
    !sources.global &&
    every(sources.state, (state) => holdsInitialValue(state, section)) &&
    !readsHeldData(read)
  );
}

// A read of first-value `<let>` members only as data (`v.n` beside the tag
// `v.content`): the page holds them, so client code renders it.
export function readsHeldData(read: t.NodeExtra | undefined) {
  const bindings = getReferencedBindings(read);
  return !!bindings && every(bindings, isHeldData);
}

// A member of a first-value `<let>` no read takes as the held value (`v.n`
// beside the tag `v.content`): data the page holds.
export function isHeldData(binding: Binding) {
  const root = getAliasRoot(binding);
  return (
    root !== binding && !!getFirstValueRoot(root) && !getFirstValueRoot(binding)
  );
}

// A `<let>` at the initial value the server renders as the section's scope is created:
// from initial values only, at its own (`atInitialValueAsCreated`), and unfilled.
export function holdsInitialValue(state: Binding, section: Section) {
  return (
    state.initReadsInitialValues &&
    atInitialValueAsCreated(state, section) &&
    !fillsInitialValue(state)
  );
}

// The server-initialized `<let>` (here or enclosing) whose code the hole runs:
// a tag it names, or a function a value hole calls with server input.
export const getFirstValueLet = createPassMemo(computeFirstValueLet, undefined);

function computeFirstValueLet(expr: t.NodeExtra): Binding | undefined {
  const extra = getCanonicalExtra(expr);
  if (!isPatch() || !extra.section || !patchWrites(extra.section)) return;
  const sources = getWriteSources(extra);
  const state = sources?.state;
  if (
    !sources ||
    sources.global ||
    Array.isArray(state) ||
    state?.type !== BindingType.let ||
    !isSameOrAncestorSection(state.section, extra.section)
  ) {
    return;
  }
  // A function the template defines is client code the page can register.
  if (isTrackedFunction(state.derivedFrom as t.NodeExtra)) return;
  const init = getSourcesForExpr(state.derivedFrom as t.NodeExtra);
  // Plain writes it on every render (client code reads it): the page holds it.
  if (
    init?.state ||
    init?.global ||
    isUnconditionalReason(findSlot(state)?.reason)
  ) {
    return;
  }
  const name = getNameRead(extra)?.binding;
  if (
    (name && getAliasRoot(name) === state) ||
    (extra.rendersValue &&
      sources.param &&
      some(extra.invokes, (called) => holdsLet(called, state)))
  ) {
    return state;
  }
}

// The callee is the `<let>`, a member of it, or a `<const>` of it alone.
function holdsLet(called: Binding, state: Binding) {
  if (getAliasRoot(called) === state) return true;
  const sources = getSourcesForRef(called);
  return sources?.state === state && !sources.param && !sources.global;
}

// The entries' key on the hole's scope: a `^` per owner up to the `<let>`'s.
export function getFirstValueKey(section: Section, state: Binding) {
  return t.stringLiteral(
    "^".repeat(section.depth - state.section.depth) + getScopeAccessor(state),
  );
}

// Client code renders the hole only once it set the `<let>`.
export function getFirstValueGuard(section: Section, state: Binding) {
  return t.binaryExpression(
    "in",
    t.stringLiteral(getScopeAccessor(state)),
    getScopeExpression(section, state.section),
  );
}

// The first-value `<let>` the binding is or belongs to, where a read takes it as
// the held value (`v.tag`, not the data `v.n`): no fill or seed carries it.
export const getFirstValueRoot = createPassMemo((binding: Binding) => {
  const root = getAliasRoot(binding);
  return someRead(
    bindingReaders(binding, true),
    (read) => getFirstValueLet(read) === root,
  )
    ? root
    : undefined;
}, undefined);

// A seed-only hole a `<let>` the client assigns sources: that `<let>`'s signal
// rewrites the node, so the page keeps its marker whatever the group.
export function keepsSeededMarker(
  section: Section,
  extra: t.NodeExtra | undefined,
) {
  const sources = getWriteSources(extra);
  return seedsOnly(section, sources) && some(sources!.state, isAssigned);
}

function isAssigned(state: Binding) {
  return !!state.assignments;
}

// The sources include client state: their own (an unassigned `<let>`'s too), or
// through params every call of their body gives it.
export function hasClientState(sources: Sources | undefined) {
  return !!sources?.state || isClientAtEveryCall(sources?.param);
}

// A handler written inline merged its references with its control's, so
// only its own captures say whether it is client-sourced.
export function writesPatchHandler(tagSection: Section, value: t.Expression) {
  switch (value.type) {
    case "ArrowFunctionExpression":
    case "FunctionExpression":
      return patchWrites(tagSection) && !capturesState(value.extra!);
    default:
      return writesPatchHole(tagSection, value.extra);
  }
}

// A read rendering a hole a patch fills: its value or content renders into its
// node in patch-written structure, with no state source.
export function isFilledHole(read: ReferencedExtra) {
  return (
    !!(read.rendersValue || read.rendersContent) &&
    writesPatchHole(read.section, read)
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
  (section: Section) => some(section.slots, isPatchKeyedNode),
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
  // An effect reading nothing rides its shell (`isEffectOutsideShell`).
  let unwritten: "all" | "paired" = hasOwnSetupWork(section, isEffect)
    ? "paired"
    : "all";
  if (some(section.slots, (slot) => isSlotWritten(slot, groups))) return;
  for (const signal of getSignals(section).values()) {
    const writes = signal.hasHTMLEffect && getEffectWrites(section, signal);
    // The client's render runs it, unless it reads a value the server's alone updates:
    // the server's render then writes its entry.
    if (
      writes &&
      writes.deps.some(
        (dep) =>
          getSourcesUpdatesFrom(section, getSourcesForRef(dep), groups) ===
          UpdatesFrom.Server,
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
      branch?.optional !== false &&
      !!(
        getWriteUpdatesFrom(section, child.branchExpr, groups) &
        UpdatesFrom.Client
      );
    if (clientRendered && !isLoopBody(child)) continue;
    if (branch?.await) {
      // `_await` writes nothing for a body that settles by `_await_promise`, and
      // its Pending entry where a patch fills its promise.
      if (isStatefulBranch(child)) continue;
      if (
        !(
          getSourcesUpdatesFrom(
            section,
            getWriteSources(child.branchExpr),
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
  if (!isConditionalReason(sources)) return;
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
  const sources = getWriteSources(extra);
  return seedsOnly(section, sources)
    ? getSeedWriteGroups(section, sources!.state)
    : getWriteGroups(section, sources, !sources);
}

// A seed of the states' initial values: the client's bit of the groups they read.
export function getSeedWriteGroups(
  section: Section,
  states: Sources["state"],
): WriteGroups {
  const params = getStateInitSources(states)?.param;
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
  // A group beyond theirs may add the server's bit, where a written join's init writes.
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
  const deps: Binding[] = [];
  const byEntry = rerunsByEntry(signal.referencedBindings);
  forEach(signal.referencedBindings, (binding) => {
    const root = getCanonicalBinding(binding);
    if (rerunsEffectOnPatch(root) || (byEntry && getPatchFill(root).fill)) {
      deps.push(root);
      const sources = getSourcesForRef(root);
      if (getWriteGroups(section, sources)) {
        written = push(written, sources!);
      } else {
        always = true;
      }
    }
  });
  // No patch pairs what a created `@catch` holds, so their shells mount their effects.
  if (deps.length && !inCreatedCatch(section)) {
    return { deps, written: always ? undefined : written };
  }
}

// The params and `$global` each state's initial value reads, through other states.
// A controlled `<let>` that is no state root has no init fact, so it answers none.
export function getStateInitSources(states: Sources["state"]) {
  const inits = reduce(states, mergeInitSources);
  return inits && withSources(inits, undefined, inits.param);
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
      : (!node || (expr.rendersValue && writesPatchHole(slot.section, expr))) &&
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
export function getWriteSources(extra: t.NodeExtra | undefined) {
  return mergeSources(
    extra && getSourcesForExpr(extra),
    getSourcesForRef(getConstantBindings(extra)),
  );
}

// The write sources of each server value rendered into the node.
export function getRenderedValueSources(binding: Binding) {
  let sources: Opt<Sources>;
  forEach(findSlot(binding)!.reasonExprs, (expr) => {
    if (rendersServerValue(expr)) {
      const exprSources = getWriteSources(expr);
      if (exprSources) sources = push(sources, exprSources);
    }
  });
  return sources;
}

// The runtime features a hole's patch entries apply through (its patchers, and
// `controllable` a spread re-claims), linked where a patch writes it; a
// first-value hole's entries apply through `patches/first-value` too.
export function linkHolePatcher(
  section: Section,
  extra: t.NodeExtra,
  ...features: (DOMRuntimeFeature | false)[]
) {
  if (isPatch()) {
    onReasonsSettled(() => {
      const firstValue = !!getFirstValueLet(extra);
      if (firstValue || writesPatchHole(section, extra)) {
        if (firstValue) linkRuntimeFeature("patches/first-value");
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
    const { branch } = slot.owner;
    if (branch?.optional && patchesBranchesAt(branch.nodeBinding)) {
      return "pairs";
    }
  } else if (
    slot.kind === SlotKind.Value &&
    slot.owner.type === BindingType.dom
  ) {
    const node = slot.owner;
    if (isKnownChildNode(node)) {
      // A known child's scope, which a patch pairs through.
      if (patchWrites(slot.section)) return "pairs";
    } else if (getLoopBody(node) && patchesBranchesAt(node)) {
      // The marker of loop rows a patch pairs.
      return "pairs";
    } else if (
      patchWrites(slot.section) &&
      some(slot.reasonExprs, rendersServerValue)
    ) {
      return "values";
    }
  }
}

// A server value, or a first-value `<let>`'s, which the server renders until
// client code sets it.
function rendersServerValue(extra: t.NodeExtra) {
  return (
    !!extra.rendersValue &&
    (!getWriteSources(extra)?.state || !!getFirstValueLet(extra))
  );
}

// Whether a function's own captures read state.
function capturesState(extra: t.FunctionExtra) {
  return some(getReferencedBindingsInFunction(extra), isStateSourced);
}
