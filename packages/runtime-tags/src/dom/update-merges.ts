// Compiled persisted-merge dispatch and per-navigation apply state.
import { diverge } from "../common/errors";
import { decodeAccessor, isNotVoid } from "../common/helpers";
import { toArray } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type EncodedAccessor,
  type Scope,
} from "../common/types";
import { _for_keyed, attachAwaitBranch } from "./control-flow";
import { normalizeStrProp, setInputValue } from "./controllable";
import {
  _attr,
  _attr_class,
  _attr_style,
  _html,
  _text,
  _text_content,
} from "./dom";
import { pendingEffects, run, runId, setUpdating } from "./queue";
import {
  _resume,
  enableReadyUpdates,
  flushReadyUpdates,
  getRegisteredWithScope,
  isReady,
  readyPersisted,
  registeredValues,
} from "./resume";
import { removeAndDestroyBranch } from "./scope";
import {
  applyBoundaryBody,
  applyFragment,
  BOUNDARY_SITE_PREFIX,
  createFragmentBranch,
  type FragmentContext,
} from "./update-fragment";

type UpdateSignal = (scope: Scope, value: unknown) => void;
type UpdateMerge = (patch: Scope, live: Scope) => void;

export type FragmentEntry = [
  anchorScopeId: number,
  accessor: string,
  markerPrefix: string,
  html: string,
  // Ids of every scope the fragment serialized -- stamped into the live tree
  // so dom-less scopes (no marker reaches them) get live identity.
  scopeIds?: number[],
];
// Slot 1 discriminates boundary bodies from fragment entries.
export type BoundaryBodyEntry = [
  tryBranchId: number,
  kind: 0,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
];

/** Starts a persisted lazy child when its keyed resume batch arrives. */
export function _load_ready(readyId: string, load: () => Promise<unknown>) {
  _resume(readyId, () => {
    load().then(() => readyPersisted(readyId), failLoad);
  });
}

/** Registers a deferred `?persisted` entry import for an escaped template. */
export function _update_loader(
  rendererId: string,
  load: () => Promise<unknown>,
) {
  if (!(rendererId in updateLoaders)) updateLoaders[rendererId] = load;
}

// A module that cannot load never registers its merge; surface the failure so
// the transport can fall back to a document navigation instead of stalling.
function failLoad(error: unknown) {
  if (MARKO_DEBUG) {
    error = new Error(
      `A persisted update depends on a lazy module that failed to load, so the navigation cannot complete client-side: ${error}`,
    );
  }
  if (failUpdate) failUpdate(error);
  else throw error;
}

/** Registers the transport's post-apply failure sink for one navigation. */
export function setUpdateFail(fail?: (error: unknown) => void) {
  failUpdate = fail;
}

let failUpdate: ((error: unknown) => void) | undefined;

/** Records patch/live pairs for payload effects. */
export function _update_pair(patch: Scope, live: Scope) {
  activePairs!.set(patch, live);
}

// This suffix cannot occur in generated register ids.
const UPDATE_MERGE_SUFFIX = "!";

/** Applies an await or try body after resolving its live branch. */
export function _update_branch(
  patch: Scope,
  live: Scope,
  accessor: Accessor,
  bodyMerge: UpdateMerge | 0,
) {
  const branchKey = AccessorPrefix.BranchScopes + accessor;
  const patchBranch = patch[branchKey] as Scope;
  let liveBranch = live[branchKey] as BranchScope | undefined;
  if (!liveBranch) {
    // Flush a fresh parent branch before resolving its boundary.
    run();
    liveBranch = live[branchKey] as BranchScope | undefined;
    if (!liveBranch) return;
  }
  // Only pending placeholders and detached awaits accept body entries.
  const bodyPending =
    liveBranch[AccessorProp.DetachedAwait] ||
    liveBranch[AccessorProp.PlaceholderBranch] ||
    typeof live[BOUNDARY_SITE_PREFIX + (accessor as string)] === "string";
  if (liveBranch[AccessorProp.DetachedAwait]) {
    attachAwaitBranch(live, accessor as string, liveBranch);
  }
  const bodyEntry = ((patchBranch as BranchScope)[PENDING_BODY_KEY] ||
    liveBranch[PENDING_BODY_KEY]) as BoundaryBodyEntry | undefined;
  if (bodyEntry) {
    delete (patchBranch as BranchScope)[PENDING_BODY_KEY];
    delete liveBranch[PENDING_BODY_KEY];
    if (!bodyPending) {
      // A boundary may settle after its token was sent but before this apply.
      diverge(
        MARKO_DEBUG &&
          "A persisted update delivered a boundary body for a <try> that already settled; the update cannot re-apply it.",
      );
    }
    applyBoundaryBody(
      activeUpdate!,
      liveBranch,
      bodyEntry[2],
      bodyEntry[3],
      bodyEntry[4],
      bodyEntry[0],
    );
    // Tombstone the placeholder before the next navigation.
    live[BOUNDARY_SITE_PREFIX + (accessor as string)] = 0;
  } else if (bodyMerge) {
    bodyMerge(patchBranch, liveBranch);
  }
}

export function _update_content(contentId: string, merge: UpdateMerge) {
  _resume(contentId + UPDATE_MERGE_SUFFIX, merge);
}

/** Dispatches a lazy child or parks its newest patch until ready. */
export function _update_load(patch: Scope, live: Scope, mergeId: string) {
  const merge = registeredValues[mergeId] as UpdateMerge | undefined;
  if (merge) {
    merge(patch, live);
  } else {
    for (const pending of pendingLoadUpdates) {
      if (pending[1] === live) {
        pending[0] = patch;
        return;
      }
    }
    installReadyUpdates();
    pendingLoadUpdates.push([patch, live, mergeId]);
  }
}

export function _update_dynamic(
  patch: Scope,
  live: Scope,
  rendererKey: string,
  branchKey: string,
) {
  const rendererId = patch[rendererKey] ?? live[rendererKey];
  if (rendererId === 0) {
    const liveBranch = live[branchKey] as BranchScope | undefined;
    if (liveBranch) {
      removeAndDestroyBranch(liveBranch);
      live[branchKey] = undefined;
    }
    live[rendererKey] = 0;
    return;
  }
  const patchBranch = patch[branchKey] as Scope | undefined;
  const accessor = branchKey.slice(AccessorPrefix.BranchScopes.length);
  const fragment = patch[FRAGMENT_PREFIX + accessor] as
    FragmentEntry | undefined;

  if (fragment) {
    // Fragment HTML is authoritative even when the live renderer matches.
    // Its resume data initializes the replacement scopes.
    delete patch[FRAGMENT_PREFIX + accessor];
    applyFragment(
      activeUpdate!,
      live,
      accessor,
      patchBranch as BranchScope,
      fragment[2],
      fragment[3],
      fragment[4],
    );
    live[rendererKey] = rendererId;
    return;
  }

  const liveBranch = live[branchKey] as Scope | undefined;
  if (patchBranch && liveBranch) {
    if ((patchBranch as BranchScope)[AccessorProp.Renderer] === rendererId) {
      // Native branches apply typed captures, then recurse through content hops.
      updateNativeScope(patchBranch, liveBranch);
      for (const key in patchBranch) {
        if (
          key.length > AccessorPrefix.ConditionalRenderer.length &&
          key.slice(0, AccessorPrefix.ConditionalRenderer.length) ===
            AccessorPrefix.ConditionalRenderer &&
          (typeof patchBranch[key] === "string" || patchBranch[key] === 0)
        ) {
          _update_dynamic(
            patchBranch,
            liveBranch,
            key,
            AccessorPrefix.BranchScopes +
              key.slice(AccessorPrefix.ConditionalRenderer.length),
          );
        }
      }
      return;
    }
    const merge = getRegisteredWithScope(rendererId + UPDATE_MERGE_SUFFIX) as
      UpdateMerge | undefined;
    if (merge) {
      merge(patchBranch, liveBranch);
    } else if (
      rendererId === live[rendererKey] &&
      (rendererId as string) in updateLoaders
    ) {
      // An escaped template reference: start its `?persisted` entry once and
      // park -- registration drains the pair through the ready machinery.
      const loader = updateLoaders[rendererId as string];
      if (loader) {
        updateLoaders[rendererId as string] = 0;
        loader().then(() => flushReadyUpdates(), failLoad);
      }
      parkDynamicUpdate(patchBranch, liveBranch, rendererId as string);
    } else if (
      rendererId !== live[rendererKey] &&
      !((rendererId as string) in registeredValues)
    ) {
      // A renderer this page never loaded and has no loader for (deploy skew);
      // surface the failure for the transport's document-navigation fallback.
      const error = new Error(
        MARKO_DEBUG
          ? `A persisted update selected a renderer ("${rendererId}") with no registered update and no loader, so the navigation cannot complete client-side.`
          : rendererId + "",
      );
      if (failUpdate) failUpdate(error);
      else throw error;
    } else {
      parkDynamicUpdate(patchBranch, liveBranch, rendererId as string);
    }
  }
}

/** Applies a request-derived conditional using compiled merges/fragments. */
export function _update_if(
  patch: Scope,
  live: Scope,
  rendererKey: string,
  branchKey: string,
  branchMerges?: (UpdateMerge | 0)[],
) {
  const newBranch = patch[rendererKey] as number;
  const patchBranch = patch[branchKey] as Scope | undefined;
  const liveBranch = live[branchKey] as Scope | undefined;
  const liveBranchIndex =
    (live[rendererKey] as number) ?? (liveBranch ? 0 : -1);

  const accessor = branchKey.slice(AccessorPrefix.BranchScopes.length);
  const fragment = patch[FRAGMENT_PREFIX + accessor] as
    FragmentEntry | undefined;
  if (fragment) {
    // Fragment HTML is authoritative even when the live branch matches.
    // Its resume data initializes the replacement scopes.
    delete patch[FRAGMENT_PREFIX + accessor];
    applyFragment(
      activeUpdate!,
      live,
      accessor,
      patchBranch as BranchScope,
      fragment[2],
      fragment[3],
      fragment[4],
    );
    live[rendererKey] = newBranch;
    return;
  }

  if (liveBranchIndex !== newBranch && newBranch === -1) {
    if (liveBranch) {
      removeAndDestroyBranch(liveBranch as BranchScope);
      live[branchKey] = undefined;
    }
    live[rendererKey] = newBranch;
    return;
  }

  live[rendererKey] = newBranch;
  const merge = branchMerges?.[newBranch];
  if (patchBranch && liveBranch && merge) {
    merge(patchBranch, liveBranch);
  }
}

// Fragment entries are stashed on anchor scopes until compiled dispatch.
export const FRAGMENT_PREFIX = "P";

// Boundary bodies wait on the try's patch scope until pairing resolves.
export const PENDING_BODY_KEY = "!";

const HOLE_PREFIX = MARKO_DEBUG ? "PatchHole:" : "Q";
const HTML_PREFIX = MARKO_DEBUG ? "PatchHtml:" : "R";
const ATTR_PREFIX = MARKO_DEBUG ? "PatchAttr:" : "N";
type UpdateHandler = (patch: Scope, live: Scope, key: string) => void;

export function _update_scopes(handlers: Record<string, UpdateHandler>) {
  return (patch: Scope, live: Scope) => {
    for (const key in handlers) {
      if (key in patch) handlers[key](patch, live, key);
    }
  };
}

export function _update_text(accessor: Accessor): UpdateHandler {
  return (patch, live, key) => _text(live[accessor], patch[key]);
}

export function _update_html(accessor: Accessor): UpdateHandler {
  return (patch, live, key) => {
    _html(live, patch[key], accessor);
    delete patch[key];
  };
}

export function _update_attr(
  accessor: Accessor,
  update: (element: Element, value: unknown) => void,
): UpdateHandler {
  return (patch, live, key) => update(live[accessor] as Element, patch[key]);
}

export function _update_named_attr(
  accessor: Accessor,
  name: string,
): UpdateHandler {
  return (patch, live, key) =>
    _attr(live[accessor] as Element, name, patch[key]);
}

export function _update_controllable(
  accessor: Accessor,
  update: (scope: Scope, accessor: Accessor, value: unknown) => void,
): UpdateHandler {
  return (patch, live, key) => update(live, accessor, patch[key]);
}

// Captured controllable values assert only when they differ from what a patch
// previously asserted, so re-dispatched frames leave client edits alone.
const APPLIED_PREFIX = MARKO_DEBUG ? "PatchApplied:" : "S";

function shouldAssert(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  defaultChanged: boolean,
) {
  const key = APPLIED_PREFIX + nodeAccessor;
  const changed = key in scope ? scope[key] !== value : defaultChanged;
  scope[key] = value;
  return changed;
}

// Change handlers read their last rendered value back from the scope, so a
// winning assertion must move it with the element.
function setControlledValue(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  if (AccessorPrefix.ControlledHandler + nodeAccessor in scope) {
    scope[AccessorPrefix.ControlledValue + nodeAccessor] = value;
  }
}

export function _update_input_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedValue = normalizeStrProp(value);
  if (
    shouldAssert(
      scope,
      nodeAccessor,
      normalizedValue,
      el.defaultValue !== normalizedValue,
    )
  ) {
    el.defaultValue = normalizedValue;
    setInputValue(el, normalizedValue);
    setControlledValue(scope, nodeAccessor, normalizedValue);
  }
}

export function _update_input_value_dynamic(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  // Attribute-backed value types, matching `_attr_input_value_dynamic_default`.
  if (
    /i[ot]|e[cns]|^[bi]/.test((scope[nodeAccessor] as HTMLInputElement).type)
  ) {
    _attr(scope[nodeAccessor] as Element, "value", value);
  } else {
    _update_input_value(scope, nodeAccessor, value);
  }
}

export function _update_input_checked(
  scope: Scope,
  nodeAccessor: Accessor,
  checked: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedChecked = isNotVoid(checked);
  if (
    shouldAssert(
      scope,
      nodeAccessor,
      normalizedChecked,
      el.defaultChecked !== normalizedChecked,
    )
  ) {
    el.defaultChecked = el.checked = normalizedChecked;
  }
}

export function _update_input_checkedValue(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const multiple = Array.isArray(checkedValue);
  const normalizedCheckedValue = multiple
    ? checkedValue.map(normalizeStrProp)
    : normalizeStrProp(checkedValue);
  // Deferred past this frame's renders so a patched `value` attr lands first.
  pendingEffects.unshift(() => {
    const checked = multiple
      ? normalizedCheckedValue.includes(el.value)
      : normalizedCheckedValue === el.value;
    if (
      shouldAssert(
        scope,
        nodeAccessor,
        multiple
          ? (normalizedCheckedValue as string[]).join("\0")
          : normalizedCheckedValue,
        el.defaultChecked !== checked,
      )
    ) {
      el.defaultChecked = el.checked = checked;
      setControlledValue(scope, nodeAccessor, normalizedCheckedValue);
    }
  }, scope);
}

export function _update_select_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
) {
  const el = scope[nodeAccessor] as HTMLSelectElement;
  const multiple = Array.isArray(value);
  const normalizedValue = multiple
    ? value.map(normalizeStrProp)
    : normalizeStrProp(value);
  const isSelected = (opt: HTMLOptionElement) =>
    multiple
      ? (normalizedValue as string[]).includes(opt.value)
      : opt.value === normalizedValue;
  // Deferred past this frame's renders so patched `<option>` values and keyed
  // option reconciles land first.
  pendingEffects.unshift(() => {
    let defaultChanged = false;
    for (const opt of el.options) {
      if (opt.defaultSelected !== isSelected(opt)) {
        defaultChanged = true;
        break;
      }
    }
    if (
      shouldAssert(
        scope,
        nodeAccessor,
        multiple ? (normalizedValue as string[]).join("\0") : normalizedValue,
        defaultChanged,
      )
    ) {
      for (const opt of el.options) {
        opt.selected = opt.defaultSelected = isSelected(opt);
      }
      setControlledValue(scope, nodeAccessor, normalizedValue);
    }
  }, scope);
}

export function _update_details_or_dialog_open(
  scope: Scope,
  nodeAccessor: Accessor,
  open: unknown,
) {
  const el = scope[nodeAccessor] as HTMLDetailsElement;
  const normalizedOpen = isNotVoid(open);
  if (
    shouldAssert(
      scope,
      nodeAccessor,
      normalizedOpen,
      el.open !== normalizedOpen,
    )
  ) {
    el.open = normalizedOpen;
    setControlledValue(scope, nodeAccessor, normalizedOpen);
  }
}

function updateNativeScope(patch: Scope, live: Scope) {
  for (const key in patch) {
    if (key.length <= 1) {
      continue;
    } else if (key.startsWith(HOLE_PREFIX)) {
      _text(live[key.slice(HOLE_PREFIX.length)], patch[key]);
    } else if (key.startsWith(HTML_PREFIX)) {
      const accessor = key.slice(HTML_PREFIX.length);
      _html(live, patch[key], accessor);
      delete patch[key];
    } else if (key.startsWith(ATTR_PREFIX)) {
      const separator = key.indexOf(":", ATTR_PREFIX.length);
      const name = key.slice(ATTR_PREFIX.length, separator);
      const accessor = key.slice(separator + 1);
      const value = patch[key];
      const element = live[accessor] as Element;
      if (name === "class") {
        _attr_class(element, value);
      } else if (name === "style") {
        _attr_style(element, value);
      } else if (name === "textContent") {
        _text_content(element, value);
      } else if (
        name === "value" &&
        (element.tagName === "INPUT" || element.tagName === "TEXTAREA")
      ) {
        _update_input_value_dynamic(live, accessor, value);
      } else if (name === "value" && element.tagName === "SELECT") {
        _update_select_value(live, accessor, value);
      } else if (name === "checked" && element.tagName === "INPUT") {
        _update_input_checked(live, accessor, value);
      } else if (name === "checkedValue" && element.tagName === "INPUT") {
        _update_input_checkedValue(live, accessor, value);
      } else if (
        name === "open" &&
        (element.tagName === "DETAILS" || element.tagName === "DIALOG")
      ) {
        _update_details_or_dialog_open(live, accessor, value);
      } else {
        _attr(element, name, value);
      }
    }
  }
}

/** Seeds state only on scopes created during this apply. */
export function _update_seed(
  live: Scope,
  signal: UpdateSignal,
  value: unknown,
) {
  if (live[AccessorProp.Gen] >= applyGen) signal(live, value);
}

export function _update_signal(id: string): UpdateSignal {
  return (scope, value) =>
    (getRegisteredWithScope(id, scope) as (value: unknown) => void)(value);
}

/** Index-merges a compiler-proven stable loop. */
export function _update_for(
  patchBranches: BranchScope[] | BranchScope,
  liveBranches: BranchScope[] | BranchScope | undefined,
  merge: ((patchBranch: Scope, liveBranch: Scope) => void) | 0,
) {
  const patch = toArray(patchBranches);
  const live = toArray(liveBranches);
  // Walker-bound fragment scopes already contain their live branches.
  if (patch[0]?.[AccessorProp.StartNode]) {
    return;
  }
  if (merge) {
    for (let i = 0; i < patch.length; i++) {
      merge(patch[i], live[i]!);
    }
  }
}

/** Reconciles a request-derived keyed loop using server-rendered fragments. */
export function _update_for_keyed(
  nodeAccessor: EncodedAccessor,
  merge: ((patchBranch: Scope, liveBranch: Scope) => void) | 0,
): UpdateSignal {
  const accessor = (
    MARKO_DEBUG ? nodeAccessor : decodeAccessor(nodeAccessor as number)
  ) as string;
  const fragmentKey = FRAGMENT_PREFIX + accessor;
  const signal = _for_keyed(
    nodeAccessor,
    (patchBranch, liveBranch) => {
      const entry = (patchBranch as Scope)[fragmentKey] as
        FragmentEntry | undefined;
      if (entry) {
        // Fragment entries replace matched items as well as create fresh ones.
        delete (patchBranch as Scope)[fragmentKey];
        return createFragmentBranch(
          activeUpdate!,
          patchBranch as BranchScope,
          liveBranch[AccessorProp.Owner] as Scope,
          entry[2],
          entry[3],
          entry[4],
        );
      }
      if (merge) merge(patchBranch as Scope, liveBranch as Scope);
    },
    (_key, args, _global, parentScope) => {
      const patchItem = args[0] as Scope;
      const entry = patchItem[fragmentKey] as FragmentEntry;
      delete patchItem[fragmentKey];
      return createFragmentBranch(
        activeUpdate!,
        patchItem as BranchScope,
        parentScope,
        entry[2],
        entry[3],
        entry[4],
      );
    },
  );
  return (scope, value) => {
    // Skip fragment-built lists whose branches are already live.
    let branches = (value as unknown[])[0] as BranchScope[] | BranchScope;
    if (branches && !Array.isArray(branches)) {
      // Resume binds a lone branch bare; fills always carry arrays.
      branches = (value as unknown[])[0] = [branches] as BranchScope[];
    }
    if ((branches as BranchScope[])?.[0]?.[AccessorProp.StartNode]) {
      return;
    }
    signal(scope, value);
  };
}

/** Opens the apply context and records its generation floor. */
export function beginApply(pairs: Map<Scope, Scope>, update: FragmentContext) {
  navPairs = activePairs = pairs;
  navUpdate = activeUpdate = update;
  return (applyGen = runId);
}

export function endApply() {
  activePairs = activeUpdate = undefined;
}

let activePairs: Map<Scope, Scope> | undefined;
let activeUpdate: FragmentContext | undefined;
let applyGen = 0;
// Reinstalled while replaying lazy work for the newest navigation.
let navPairs: Map<Scope, Scope> | undefined;
let navUpdate: FragmentContext | undefined;

export const pendingLoadUpdates: [
  patch: Scope,
  live: Scope,
  mergeId: string,
][] = [];
const flushPendingLoadUpdates = () => {
  for (let i = pendingLoadUpdates.length; i--;) {
    const [patch, live, mergeId] = pendingLoadUpdates[i];
    const merge = registeredValues[mergeId] as UpdateMerge | undefined;
    // Skip destroyed scopes (a later navigation removed the subtree).
    if (merge && live[AccessorProp.Gen]) {
      pendingLoadUpdates.splice(i, 1);
      merge(patch, live);
    } else if (!live[AccessorProp.Gen]) {
      pendingLoadUpdates.splice(i, 1);
    }
  }
};

export const pendingDynamicUpdates: [
  patch: Scope,
  live: Scope,
  rendererId: string,
][] = [];
// Escape-site loaders are consumed (set 0) on first dispatch; later same-id
// dispatches only wait on the in-flight registration.
const updateLoaders: Record<string, (() => Promise<unknown>) | 0> = {};
/** Keeps only the newest patch until the matching lazy merge registers. */
function parkDynamicUpdate(patch: Scope, live: Scope, rendererId: string) {
  for (const pending of pendingDynamicUpdates) {
    if (pending[1] === live && pending[2] === rendererId) {
      pending[0] = patch;
      return;
    }
  }
  installReadyUpdates();
  pendingDynamicUpdates.push([patch, live, rendererId]);
}
const flushPendingDynamicUpdates = () => {
  for (let i = pendingDynamicUpdates.length; i--;) {
    const [patch, live, rendererId] = pendingDynamicUpdates[i];
    const merge = registeredValues[rendererId + UPDATE_MERGE_SUFFIX] as
      UpdateMerge | undefined;
    if (merge && live[AccessorProp.Gen]) {
      pendingDynamicUpdates.splice(i, 1);
      merge(patch, live);
    } else if (!live[AccessorProp.Gen]) {
      pendingDynamicUpdates.splice(i, 1);
    }
  }
};

// Lazy resume batches retain the apply callback that delivered them.
export type ParkedReadyBatch = [
  id: string,
  fills: unknown[],
  apply: (fill: unknown) => void,
];
export const parkedReadyBatches: ParkedReadyBatch[] = [];
const readyBatchDrained = (dep: string) =>
  isReady(dep) && !parkedReadyBatches.some((batch) => batch[0] === dep);
// Stop at dependency markers until every named module has drained.
export function drainBatchFills(
  batch: ParkedReadyBatch,
  apply: (fill: unknown) => void,
) {
  let count = 0;
  for (; count < batch[1].length; count++) {
    const fill = batch[1][count];
    if (Array.isArray(fill)) {
      if (!(fill as string[]).every(readyBatchDrained)) break;
    } else {
      apply(fill);
    }
  }
  batch[1].splice(0, count);
  return count;
}
const flushParkedReadyBatches = () => {
  // Draining one batch can unblock another.
  for (let progress: unknown = 1; progress;) {
    progress = 0;
    for (let i = 0; i < parkedReadyBatches.length; i++) {
      const batch = parkedReadyBatches[i];
      if (!isReady(batch[0])) continue;
      if (drainBatchFills(batch, batch[2])) progress = 1;
      if (!batch[1].length) parkedReadyBatches.splice(i--, 1);
    }
  }
};

// Install lazily so unused update paths remain side-effect free.
let readyUpdatesInstalled: undefined | 1;
export function installReadyUpdates() {
  if (!readyUpdatesInstalled) {
    readyUpdatesInstalled = 1;
    enableReadyUpdates(() => {
      setUpdating(1, runId);
      // Restore the owning navigation around lazy replay.
      activePairs = navPairs;
      activeUpdate = navUpdate;
      try {
        // Keyed batches first: parked lazy merges may read their patch data.
        flushParkedReadyBatches();
        flushPendingLoadUpdates();
        flushPendingDynamicUpdates();
        run();
      } finally {
        setUpdating(0);
        activePairs = activeUpdate = undefined;
      }
    });
  }
}
