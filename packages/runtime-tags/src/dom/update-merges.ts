// Compiled persisted-merge dispatch and per-navigation apply state.
import { decodeAccessor, isNotVoid } from "../common/helpers";
import { toArray } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type EncodedAccessor,
  RendererProp,
  type Scope,
} from "../common/types";
import {
  _for_keyed,
  attachAwaitBranch,
  dismissPlaceholder,
} from "./control-flow";
import { normalizeStrProp, setInputValue } from "./controllable";
import {
  _attr,
  _attr_class,
  _attr_style,
  _html,
  _text,
  _text_content,
} from "./dom";
import { setUpdating } from "./persisted-queue";
import { pendingEffects, run, runId } from "./queue";
import {
  _content,
  createAndSetupBranch,
  createBranchInto,
  type Renderer,
} from "./renderer";
import {
  _resume,
  enableReadyUpdates,
  flushReadyUpdates,
  getRegisteredWithScope,
  isReady,
  readyPersisted,
  registeredValues,
} from "./resume";
import {
  destroyBranch,
  insertBranchBefore,
  removeAndDestroyBranch,
  setConstructingBranch,
  tempDetachBranch,
} from "./scope";

type UpdateSignal = (scope: Scope, value: unknown) => void;
type UpdateMerge = (patch: Scope, live: Scope) => void;

/** Starts a persisted lazy child when its keyed resume batch arrives. */
export function _load_ready(readyId: string, load: () => Promise<unknown>) {
  _resume(readyId, () => {
    continueLoad(load, () => readyPersisted(readyId));
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
  updateGeneration++;
}

// A renderer this page never loaded and has no loader for (deploy skew);
// surface the failure for the transport's document-navigation fallback.
function failUnknownRenderer(rendererId: string) {
  const error = new Error(
    MARKO_DEBUG
      ? `A persisted update selected a renderer ("${rendererId}") with no registered update and no loader, so the navigation cannot complete client-side.`
      : rendererId + "",
  );
  if (failUpdate) failUpdate(error);
  else throw error;
}

let failUpdate: ((error: unknown) => void) | undefined;
let updateGeneration = 0;

// Success always continues (registration and readiness are monotonic facts;
// parked state is per navigation), but a settled failure belongs to the
// navigation that started the load — a superseded one must not fail the live
// navigation into a document fallback.
function continueLoad(load: () => Promise<unknown>, ready: () => void) {
  const generation = updateGeneration;
  load().then(ready, (error) => {
    if (generation === updateGeneration) failLoad(error);
  });
}

/** Records patch/live pairs for payload effects. Constructed branches bind
 * into their patch scopes, so patch and live are one object there and
 * fills need no transfer. */
export function _update_pair(patch: Scope, live: Scope) {
  activePairs!.set(patch, live);
}

// This suffix cannot occur in generated register ids.
const UPDATE_MERGE_SUFFIX = "!";
const CONSTRUCT_SUFFIX = "^";

/** Applies an await or try body after resolving its live branch. */
export function _update_branch(
  patch: Scope,
  live: Scope,
  accessor: Accessor,
  bodyMerge: UpdateMerge | 0,
  constructId?: string,
  placeholderId?: string,
) {
  const branchAccessor = AccessorPrefix.BranchScopes + accessor;
  const patchBranch = patch[branchAccessor] as Scope;
  // A constructed parent adopted its patch scope (patch === live), so the
  // live accessors hold the fills themselves: there is no prior branch.
  const constructed = patch === live;
  let liveBranch = constructed
    ? undefined
    : (live[branchAccessor] as BranchScope | undefined);
  if (!liveBranch && !constructed) {
    // Flush a fresh parent branch before resolving its boundary.
    run();
    liveBranch = live[branchAccessor] as BranchScope | undefined;
  }
  const boundaryAnchorAccessor =
    AccessorPrefix.BoundaryAnchor + (accessor as string);
  if (!patchBranch) return;

  if ((patchBranch as BranchScope)[AccessorProp.StartNode]) {
    // A prior dispatch of this navigation already constructed the branch.
    if (bodyMerge) bodyMerge(patchBranch, patchBranch);
    // The body's settle frame tombstones the pending fact.
    if (
      patch[boundaryAnchorAccessor] === 0 &&
      (patchBranch as BranchScope)[AccessorProp.PlaceholderBranch]
    ) {
      dismissPlaceholder(patchBranch as BranchScope);
    }
    return;
  }

  if (liveBranch) {
    if (liveBranch[AccessorProp.DetachedAwait]) {
      // A client-computed await whose compute was skipped during an update.
      attachAwaitBranch(live, accessor as string, liveBranch);
      if (bodyMerge) bodyMerge(patchBranch, liveBranch);
      return;
    }
    if (
      !liveBranch[AccessorProp.PlaceholderBranch] &&
      typeof live[boundaryAnchorAccessor] !== "string"
    ) {
      if (bodyMerge) bodyMerge(patchBranch, liveBranch);
      return;
    }
    // The live boundary never received its body; replace it wholesale with
    // a constructed branch (a pending-capable body seeds fully from fills).
    if (!(constructId && shells[constructId])) {
      failUnknownRenderer(constructId + "");
      return;
    }
    const placeholderBranch = liveBranch[
      AccessorProp.PlaceholderBranch
    ] as BranchScope;
    const anchorBranch = placeholderBranch || liveBranch;
    const anchorNode = anchorBranch[AccessorProp.StartNode];
    const parentNode = anchorNode.parentNode!;
    const branch = constructBranch(
      live[AccessorProp.Global],
      getShellRenderer(constructId),
      live,
      parentNode,
      patchBranch,
      undefined,
      constructId,
    ) as BranchScope;
    insertBranchBefore(branch, parentNode, anchorNode);
    if (placeholderBranch) {
      liveBranch[AccessorProp.PlaceholderBranch] = 0;
      removeAndDestroyBranch(placeholderBranch);
      destroyBranch(liveBranch);
    } else {
      removeAndDestroyBranch(liveBranch);
    }
    live[branchAccessor] = branch;
    live[boundaryAnchorAccessor] = patch[boundaryAnchorAccessor] ?? 0;
    showConstructedPlaceholder(
      live,
      branch,
      parentNode,
      boundaryAnchorAccessor,
      placeholderId,
    );
    if (bodyMerge) bodyMerge(patchBranch, branch);
    return;
  }

  // A constructed parent builds the boundary branch from its wire shell.
  if (constructId && shells[constructId]) {
    const anchorNode = live[accessor] as ChildNode | undefined;
    if (!anchorNode) {
      // A matched parent without the boundary's live branch or marker has
      // nothing to anchor construction to; fail into document navigation
      // rather than corrupting the page.
      failUnknownRenderer(constructId + "");
      return;
    }
    const parentNode = anchorNode.parentNode!;
    const branch = constructBranch(
      live[AccessorProp.Global],
      getShellRenderer(constructId),
      live,
      parentNode,
      patchBranch,
      undefined,
      constructId,
    ) as BranchScope;
    insertBranchBefore(branch, parentNode, anchorNode);
    live[branchAccessor] = branch;
    showConstructedPlaceholder(
      live,
      branch,
      parentNode,
      boundaryAnchorAccessor,
      placeholderId,
    );
    if (bodyMerge) bodyMerge(patchBranch, branch);
  }
}

/** A pending boundary shows its placeholder (a real setup render from the
 * page-registered renderer) until the settle frame tombstones it. */
function showConstructedPlaceholder(
  live: Scope,
  branch: BranchScope,
  parentNode: ParentNode,
  boundaryAnchorAccessor: string,
  placeholderId?: string,
) {
  if (typeof live[boundaryAnchorAccessor] === "string" && placeholderId) {
    const placeholderBranch = (branch[AccessorProp.PlaceholderBranch] =
      createAndSetupBranch(
        live[AccessorProp.Global],
        getRegisteredWithScope(
          placeholderId,
          branch[AccessorProp.Owner],
        ) as Renderer,
        branch[AccessorProp.Owner]!,
        parentNode,
      ));
    insertBranchBefore(
      placeholderBranch,
      parentNode,
      branch[AccessorProp.StartNode],
    );
    tempDetachBranch(branch);
  }
}

/** Registers a section's construct pass under its shell id, so whatever id
 * a scope was constructed from also locates its fills/wiring. */
export function _construct(id: string, construct: (scope: Scope) => void) {
  _resume(id + CONSTRUCT_SUFFIX, construct);
}

// Constructed branches awaiting the frame-end clear: the outer dispatcher
// owns check-and-clear (nested construct fns never clear the shared stamp);
// lazy pre-built roots are excluded and clear independently at ready.
const pendingConstructClears: BranchScope[] = [];

function invokeConstruct(id: string | undefined, scope: Scope) {
  if (id) {
    (
      registeredValues[id + CONSTRUCT_SUFFIX] as
        | ((scope: Scope) => void)
        | undefined
    )?.(scope);
  }
}

/** Frame-end clear: after complete delivery (merges + queued renders) a
 * constructed branch settles into matched semantics — equality elision and
 * skipped construct captures are CORRECT from here on; do not "fix" back. */
export function drainConstructClears() {
  for (const branch of pendingConstructClears) {
    branch[AccessorProp.NeedsConstruct] = undefined;
  }
  pendingConstructClears.length = 0;
}

/** Owner-wires an adopted child scope (never clobbering a serialized `_`)
 * and recurses into the child template's construct pass. */
export function _construct_child(
  scope: Scope,
  childAccessor: Accessor,
  constructId: string,
) {
  const child = scope[childAccessor] as Scope | undefined;
  if (child) {
    child[AccessorProp.Owner] ||= scope;
    (
      registeredValues[constructId + CONSTRUCT_SUFFIX] as
        | ((scope: Scope) => void)
        | undefined
    )?.(child);
  }
}

export function _update_content(
  contentId: string,
  merge: UpdateMerge,
  construct?: (scope: Scope) => void,
) {
  _resume(contentId + UPDATE_MERGE_SUFFIX, merge);
  // The construct pass: declared fills/wiring rendering a values-free
  // constructed scope's DOM from its adopted values (invocation lands with
  // the dispatcher; registration establishes the compile contract).
  if (construct) _resume(contentId + CONSTRUCT_SUFFIX, construct);
}

/** Dispatches a lazy child or parks its newest patch until ready. */
export function _update_load(
  patch: Scope,
  live: Scope,
  mergeId: string,
  parentLive?: Scope,
  markerAccessor?: EncodedAccessor,
  constructId?: string,
) {
  // A constructed parent adopted the child fill scope; build its DOM now
  // from the child's root wire shell so the page is complete before the
  // module loads (as with CSR `insertLoaded`, the scope stays a non-branch).
  if (
    patch === live &&
    constructId &&
    !(live as BranchScope)[AccessorProp.StartNode] &&
    shells[constructId]
  ) {
    const marker = parentLive![
      MARKO_DEBUG
        ? (markerAccessor as string)
        : decodeAccessor(markerAccessor as number)
    ] as ChildNode;
    const parentNode = marker.parentNode!;
    const renderer = getShellRenderer(constructId);
    setConstructingBranch(1);
    try {
      renderer[RendererProp.Clone]!(
        live as BranchScope,
        (parentNode as Element).namespaceURI!,
      );
    } finally {
      setConstructingBranch(undefined);
    }
    (live as BranchScope)[AccessorProp.NeedsConstruct] = 1;
    insertBranchBefore(live as BranchScope, parentNode, marker);
  }
  const merge = registeredValues[mergeId] as UpdateMerge | undefined;
  if (merge) {
    if ((live as BranchScope)[AccessorProp.NeedsConstruct]) {
      invokeConstruct(constructId, live);
      pendingConstructClears.push(live as BranchScope);
    }
    merge(patch, live);
  } else {
    for (const pending of pendingLoadUpdates) {
      if (pending[1] === live) {
        pending[0] = patch;
        return;
      }
    }
    installReadyUpdates();
    pendingLoadUpdates.push([patch, live, mergeId, constructId]);
  }
}

export function _update_dynamic(
  patch: Scope,
  live: Scope,
  rendererAccessor: string,
  branchAccessor: string,
) {
  const rendererId = patch[rendererAccessor] ?? live[rendererAccessor];
  if (rendererId === 0) {
    const liveBranch = live[branchAccessor] as BranchScope | undefined;
    if (liveBranch) {
      removeAndDestroyBranch(liveBranch);
      live[branchAccessor] = undefined;
    }
    live[rendererAccessor] = 0;
    return;
  }
  const patchBranch = patch[branchAccessor] as Scope | undefined;
  const accessor = branchAccessor.slice(AccessorPrefix.BranchScopes.length);
  // A constructed parent adopted its patch scope (patch === live), so the
  // live accessors hold the fills themselves: there is no prior branch —
  // until a prior frame of this navigation constructs it (adoption stamps
  // the branch, and later settle frames re-assert the same linkage).
  const constructed =
    patch === live &&
    !(patchBranch as BranchScope | undefined)?.[AccessorProp.StartNode];
  const liveBranch = constructed
    ? undefined
    : (live[branchAccessor] as Scope | undefined);
  if (patchBranch) {
    // A diverged hop constructs the target renderer's branch from its wire
    // shell; under a freshly constructed parent every nested branch
    // diverges. Values, seeds, and nested structure apply through the
    // target's merge, whose registration proves the renderer id is known
    // (every dispatchable section registers one, if only a noop).
    const regionTarget = (rendererId as string)[0] === ";";
    if (
      (constructed || regionTarget || rendererId !== live[rendererAccessor]) &&
      shells[rendererId as string]
    ) {
      // Region shells carry complete rendered markup: nothing inside binds,
      // so no registered target merge is required (or consulted).
      if (
        !regionTarget &&
        !(rendererId + UPDATE_MERGE_SUFFIX in registeredValues)
      ) {
        if ((rendererId as string) in updateLoaders) {
          // The target's persisted module carries its effects and merge;
          // load it and re-dispatch once registration flushes.
          startUpdateLoader(rendererId as string);
          parkDynamicUpdate(patch, live, rendererAccessor, branchAccessor);
        } else {
          // Deploy skew: this page cannot know the renderer.
          failUnknownRenderer(rendererId as string);
        }
        return;
      }
      const anchorNode = live[accessor] as ChildNode;
      const parentNode = anchorNode.parentNode!;
      const branch = constructBranch(
        live[AccessorProp.Global],
        getShellRenderer(rendererId as string),
        live,
        parentNode,
        patchBranch,
        regionTarget ? 1 : undefined,
        regionTarget ? undefined : (rendererId as string),
      );
      insertBranchBefore(branch, parentNode, anchorNode);
      if (liveBranch) removeAndDestroyBranch(liveBranch as BranchScope);
      live[branchAccessor] = branch;
      live[rendererAccessor] = rendererId;
      const targetMerge = regionTarget
        ? undefined
        : (getRegisteredWithScope(rendererId + UPDATE_MERGE_SUFFIX) as
            | UpdateMerge
            | undefined);
      if (targetMerge) targetMerge(patchBranch, branch);
      return;
    }
    if ((patchBranch as BranchScope)[AccessorProp.Renderer] === rendererId) {
      let nativeBranch = liveBranch;
      if (constructed || rendererId !== live[rendererAccessor]) {
        if (!(patchBranch as BranchScope)[AccessorProp.BranchAccessor]) {
          // A content-bearing native hop cannot rebuild from captures;
          // complete the navigation as a document load.
          failUnknownRenderer(rendererId as string);
          return;
        }
        // A contentless native hop rebuilds its element in place.
        const anchorNode = live[accessor] as ChildNode;
        const parentNode = anchorNode.parentNode!;
        nativeBranch = constructBranch(
          live[AccessorProp.Global],
          _content(rendererId as string, "<" + rendererId + ">", " ", 0)(),
          live,
          parentNode,
          patchBranch,
          1,
        );
        insertBranchBefore(nativeBranch as BranchScope, parentNode, anchorNode);
        if (liveBranch) removeAndDestroyBranch(liveBranch as BranchScope);
        live[branchAccessor] = nativeBranch;
        live[rendererAccessor] = rendererId;
      } else if (!nativeBranch) {
        return;
      }
      // Native branches apply typed captures, then recurse through content hops.
      updateNativeScope(patchBranch, nativeBranch);
      for (const patchAccessor in patchBranch) {
        if (
          patchAccessor.length > AccessorPrefix.ConditionalRenderer.length &&
          patchAccessor.slice(0, AccessorPrefix.ConditionalRenderer.length) ===
            AccessorPrefix.ConditionalRenderer &&
          (typeof patchBranch[patchAccessor] === "string" ||
            patchBranch[patchAccessor] === 0)
        ) {
          _update_dynamic(
            patchBranch,
            nativeBranch,
            patchAccessor,
            AccessorPrefix.BranchScopes +
              patchAccessor.slice(AccessorPrefix.ConditionalRenderer.length),
          );
        }
      }
      return;
    }
    if (!liveBranch) {
      // A fresh hop whose target has no wire shell cannot construct; load
      // its module if a loader exists, else complete as a document load.
      if (constructed || rendererId !== live[rendererAccessor]) {
        if ((rendererId as string) in updateLoaders) {
          startUpdateLoader(rendererId as string);
          parkDynamicUpdate(patch, live, rendererAccessor, branchAccessor);
        } else {
          failUnknownRenderer(rendererId as string);
        }
      }
      return;
    }
    const merge = getRegisteredWithScope(rendererId + UPDATE_MERGE_SUFFIX) as
      | UpdateMerge
      | undefined;
    if (merge) {
      merge(patchBranch, liveBranch);
    } else if ((rendererId as string) in updateLoaders) {
      // An escaped template reference: start its `?persisted` entry once and
      // park -- registration re-dispatches through the ready machinery.
      startUpdateLoader(rendererId as string);
      parkDynamicUpdate(patch, live, rendererAccessor, branchAccessor);
    } else if (
      rendererId !== live[rendererAccessor] &&
      !((rendererId as string) in registeredValues)
    ) {
      failUnknownRenderer(rendererId as string);
    } else {
      parkDynamicUpdate(patch, live, rendererAccessor, branchAccessor);
    }
  }
}

/** Applies a request-derived conditional using compiled merges. */
export function _update_if(
  patch: Scope,
  live: Scope,
  rendererAccessor: string,
  branchAccessor: string,
  branchMerges?: (UpdateMerge | 0)[] | 0,
  branchIds?: (string | 0)[],
) {
  const newBranch = patch[rendererAccessor] as number;
  const patchBranch = patch[branchAccessor] as Scope | undefined;
  // A constructed parent adopted its patch scope (patch === live), so the
  // live accessors hold the fills themselves: there is no prior branch —
  // until a prior frame of this navigation constructs it (adoption stamps
  // the branch, and later settle frames re-assert the same linkage).
  const constructed =
    patch === live &&
    !(patchBranch as BranchScope | undefined)?.[AccessorProp.StartNode];
  const liveBranch = constructed
    ? undefined
    : (live[branchAccessor] as Scope | undefined);
  const liveBranchIndex = constructed
    ? -1
    : ((live[rendererAccessor] as number) ?? (liveBranch ? 0 : -1));

  const accessor = branchAccessor.slice(AccessorPrefix.BranchScopes.length);

  if (liveBranchIndex !== newBranch && newBranch === -1) {
    if (liveBranch) {
      removeAndDestroyBranch(liveBranch as BranchScope);
      live[branchAccessor] = undefined;
    }
    live[rendererAccessor] = newBranch;
    return;
  }

  const merge = branchMerges ? branchMerges[newBranch] : 0;
  if (patchBranch && liveBranchIndex !== newBranch) {
    // A diverged branch constructs from its wire shell; under a freshly
    // constructed parent every branch diverges.
    const constructId = branchIds?.[newBranch];
    if (constructId && shells[constructId]) {
      const anchorNode = live[accessor] as ChildNode;
      const parentNode = anchorNode.parentNode!;
      const branch = constructBranch(
        live[AccessorProp.Global],
        getShellRenderer(constructId),
        live,
        parentNode,
        patchBranch,
        undefined,
        constructId,
      );
      insertBranchBefore(branch, parentNode, anchorNode);
      if (liveBranch) removeAndDestroyBranch(liveBranch as BranchScope);
      live[branchAccessor] = branch;
      live[rendererAccessor] = newBranch;
      if (merge) merge(patchBranch, branch);
    }
    // Without a shell the client completes the navigation as a document load.
    return;
  }

  live[rendererAccessor] = newBranch;
  if (patchBranch && liveBranch && merge) {
    merge(patchBranch, liveBranch);
  }
}

type UpdateHandler = (patch: Scope, live: Scope, patchAccessor: string) => void;

/** Applies a state-computed capture only while its scope still needs its
 * construct pass (values-free DOM): matched scopes own newer client state
 * and must never be clobbered by the server's fresh-branch value. */
export function _update_construct(handler: UpdateHandler): UpdateHandler {
  return (patch, live, accessor) => {
    if (
      live[AccessorProp.NeedsConstruct] ||
      (live[AccessorProp.ClosestBranch] as BranchScope | undefined)?.[
        AccessorProp.NeedsConstruct
      ]
    ) {
      handler(patch, live, accessor);
    }
  };
}

export function _update_scopes(handlers: Record<string, UpdateHandler>) {
  return (patch: Scope, live: Scope) => {
    for (const accessor in handlers) {
      if (accessor in patch) handlers[accessor](patch, live, accessor);
    }
  };
}

export function _update_text(accessor: Accessor): UpdateHandler {
  return (patch, live, patchAccessor) =>
    _text(live[accessor], patch[patchAccessor]);
}

export function _update_html(accessor: Accessor): UpdateHandler {
  return (patch, live, patchAccessor) => {
    _html(live, patch[patchAccessor], accessor);
    delete patch[patchAccessor];
  };
}

export function _update_attr(
  accessor: Accessor,
  update: (element: Element, value: unknown) => void,
): UpdateHandler {
  return (patch, live, patchAccessor) =>
    update(live[accessor] as Element, patch[patchAccessor]);
}

export function _update_named_attr(
  accessor: Accessor,
  name: string,
): UpdateHandler {
  return (patch, live, patchAccessor) =>
    _attr(live[accessor] as Element, name, patch[patchAccessor]);
}

export function _update_controllable(
  accessor: Accessor,
  update: (scope: Scope, accessor: Accessor, value: unknown) => void,
): UpdateHandler {
  return (patch, live, patchAccessor) =>
    update(live, accessor, patch[patchAccessor]);
}

// Captured controllable values assert only when they differ from what a patch
// previously asserted, so re-dispatched frames leave client edits alone.

function shouldAssert(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  defaultChanged: boolean,
) {
  const appliedAccessor = AccessorPrefix.PatchApplied + nodeAccessor;
  const changed =
    appliedAccessor in scope
      ? scope[appliedAccessor] !== value
      : defaultChanged;
  scope[appliedAccessor] = value;
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
  for (const accessor in patch) {
    if (accessor.length <= 1) {
      continue;
    } else if (accessor.startsWith(AccessorPrefix.PatchHole)) {
      _text(
        live[accessor.slice(AccessorPrefix.PatchHole.length)],
        patch[accessor],
      );
    } else if (accessor.startsWith(AccessorPrefix.PatchHtml)) {
      const nodeAccessor = accessor.slice(AccessorPrefix.PatchHtml.length);
      _html(live, patch[accessor], nodeAccessor);
      delete patch[accessor];
    } else if (accessor.startsWith(AccessorPrefix.PatchAttr)) {
      const separator = accessor.indexOf(":", AccessorPrefix.PatchAttr.length);
      const name = accessor.slice(AccessorPrefix.PatchAttr.length, separator);
      const nodeAccessor = accessor.slice(separator + 1);
      const value = patch[accessor];
      const element = live[nodeAccessor] as Element;
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
        _update_input_value_dynamic(live, nodeAccessor, value);
      } else if (name === "value" && element.tagName === "SELECT") {
        _update_select_value(live, nodeAccessor, value);
      } else if (name === "checked" && element.tagName === "INPUT") {
        _update_input_checked(live, nodeAccessor, value);
      } else if (name === "checkedValue" && element.tagName === "INPUT") {
        _update_input_checkedValue(live, nodeAccessor, value);
      } else if (
        name === "open" &&
        (element.tagName === "DETAILS" || element.tagName === "DIALOG")
      ) {
        _update_details_or_dialog_open(live, nodeAccessor, value);
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
  live?: Scope,
  branchAccessor?: string,
  constructId?: string,
) {
  const patch = toArray(patchBranches);
  // A constructed parent adopted its patch scope, so the "live" list read
  // from it is the fill itself: there are no prior branches.
  const liveList =
    liveBranches === patchBranches
      ? ([] as BranchScope[])
      : toArray(liveBranches);
  // Already-live lists come from a replayed frame re-dispatching this merge.
  if (patch[0]?.[AccessorProp.StartNode]) {
    return;
  }
  // A freshly constructed parent has no live branches yet; build them from
  // the body section's wire shell.
  if (live && liveList.length < patch.length && shells[constructId!]) {
    const anchorNode = live[
      branchAccessor!.slice(AccessorPrefix.BranchScopes.length)
    ] as ChildNode | undefined;
    if (!anchorNode) {
      // A matched parent without live branches or the loop's marker node
      // (a resumed stable loop whose linkage was not serialized) cannot
      // anchor construction; fail into document navigation.
      failUnknownRenderer(constructId + "");
      return;
    }
    // An only-child loop anchors on its container element; others insert
    // before their marker node.
    const container = anchorNode.nodeType === 1; /* Element */
    const parentNode = container
      ? (anchorNode as unknown as ParentNode)
      : anchorNode.parentNode!;
    const nextSibling = container ? null : anchorNode;
    for (let i = liveList.length; i < patch.length; i++) {
      const branch = constructBranch(
        live[AccessorProp.Global],
        getShellRenderer(constructId!),
        live,
        parentNode,
        patch[i],
        undefined,
        constructId,
      );
      insertBranchBefore(branch, parentNode, nextSibling);
      liveList.push(branch);
    }
    live[branchAccessor!] = liveList;
  }
  if (merge) {
    for (let i = 0; i < patch.length; i++) {
      merge(patch[i], liveList[i]!);
    }
  }
}

/** Registers a section's wire [template, walks] for client construction. */
export function registerShell(id: string, template: string, walks: string) {
  shells[id] = [template, walks];
  // Per-response region shells reuse ids across navigations; drop any
  // memoized renderer so fresh content wins.
  delete shellRenderers[id];
}

/**
 * Swaps a membrane region: the patch scope names a per-response shell
 * holding the region's complete fresh markup; the live branch (tracked by
 * the document's branch markers, or a prior swap) is replaced wholesale.
 * Regions are nucleus-free by construction, so nothing inside binds.
 */
export function _update_region(accessor: Accessor) {
  const branchAccessor = AccessorPrefix.BranchScopes + accessor;
  const rendererAccessor = AccessorPrefix.ConditionalRenderer + accessor;
  return (patch: Scope, live: Scope) => {
    const regionId = patch[rendererAccessor] as string | number | undefined;
    if (typeof regionId !== "string" || !shells[regionId]) {
      // An explicit no-branch outcome removes the live region in place;
      // absence of the fill means the anchor was untouched.
      if (regionId === -1 || regionId === 0) {
        const liveBranch = live[branchAccessor] as BranchScope | undefined;
        if (liveBranch && liveBranch[AccessorProp.StartNode]?.parentNode) {
          removeAndDestroyBranch(liveBranch);
        }
        live[branchAccessor] = undefined;
      }
      return;
    }
    const patchBranch = (patch[branchAccessor] as Scope) || patch;
    const liveBranch = live[branchAccessor] as BranchScope | undefined;
    // Later frames of the same response re-dispatch the merge; the applied
    // region stamps the registered shell tuple on the branch it constructed.
    // Reference identity distinguishes responses (ids restart per response,
    // but every response re-registers a fresh tuple), and the stamp never
    // sits on the live scope itself — under adoption that is the patch
    // scope, and the check would read its own serialized fill.
    if (liveBranch && liveBranch[rendererAccessor] === shells[regionId]) {
      return;
    }
    let anchorNode = liveBranch && liveBranch[AccessorProp.StartNode];
    let container: ParentNode | undefined;
    if (!anchorNode || !anchorNode.parentNode) {
      // No tracked prior region (or a boundary swap stranded it): fall back
      // to the walk/marker-bound node. An element there is the only-child
      // container itself (the loop's node binding optimizes to its parent)
      // and the region fills it; other nodes anchor as a preceding sibling.
      // A dispatch whose DOM is not live yet is a no-op: the frame that
      // owns the live DOM applies the region.
      const bound = live[accessor] as ChildNode | undefined;
      if (!bound) return;
      if ((bound as Node).nodeType === 1) {
        container = bound as unknown as ParentNode;
        anchorNode = undefined;
      } else if (bound.parentNode) {
        anchorNode = bound;
      } else {
        return;
      }
    }
    const parentNode = container || anchorNode!.parentNode!;
    const branch = constructBranch(
      live[AccessorProp.Global],
      getShellRenderer(regionId),
      live,
      parentNode,
      patchBranch,
      1,
    ) as BranchScope;
    const destroyPrior =
      liveBranch &&
      liveBranch !== (branch as Scope) &&
      liveBranch[AccessorProp.StartNode]?.parentNode
        ? liveBranch
        : undefined;
    if (!destroyPrior && container) {
      // First fill of a freshly constructed container: nothing tracked to
      // destroy, but the shell may have left placeholder children.
      (container as unknown as Element).textContent = "";
    }
    insertBranchBefore(branch, parentNode, anchorNode ?? null);
    if (destroyPrior) removeAndDestroyBranch(destroyPrior);
    branch[rendererAccessor] = shells[regionId];
    live[branchAccessor] = branch;
  };
}

/** Constructs a branch that adopts its patch scope through the walk. */
function constructBranch(
  $global: Scope[AccessorProp.Global],
  renderer: Renderer,
  parentScope: Scope | undefined,
  parentNode: ParentNode,
  into: Scope,
  complete?: 1,
  constructId?: string,
) {
  setConstructingBranch(1);
  try {
    const branch = createBranchInto(
      $global,
      renderer,
      parentScope,
      parentNode,
      into,
    );
    // A values-free shell clone has never rendered its fills; the stamp is
    // per-scope state (not an apply time window: parked lazy dispatches run
    // after the apply). Region shells and native rebuilds are complete
    // markup — no stamp. Invariant: once a stamped scope's initial render
    // has happened and the stamp is cleared, the persisted signals'
    // equality-elision is CORRECT — do not "fix" the elision back. Until
    // the compiled construct pass lands (it will clear the stamp), the
    // stamp stays set and stamped scopes re-render equal values; that
    // over-render is idempotent and deliberate.
    if (!complete) {
      (branch as BranchScope)[AccessorProp.NeedsConstruct] = 1;
      pendingConstructClears.push(branch as BranchScope);
      invokeConstruct(constructId, branch);
    }
    return branch;
  } finally {
    setConstructingBranch(undefined);
  }
}

const shells: Record<string, [string, string]> = {};
const shellRenderers: Record<string, ReturnType<typeof _content>> = {};

// Values arrive as ordinary fills; the shell is values-free by construction.
function getShellRenderer(id: string) {
  return (shellRenderers[id] ||= _content(
    id,
    shells[id][0],
    shells[id][1],
    0,
  ))();
}

/** Reconciles a request-derived keyed loop: matched keys merge sparsely,
 * fresh keys construct from the section's wire shell. */
export function _update_for_keyed(
  nodeAccessor: EncodedAccessor,
  merge: ((patchBranch: Scope, liveBranch: Scope) => void) | 0,
  constructId?: string,
): UpdateSignal {
  const accessor = (
    MARKO_DEBUG ? nodeAccessor : decodeAccessor(nodeAccessor as number)
  ) as string;
  const signal = _for_keyed(
    nodeAccessor,
    (patchBranch, liveBranch) => {
      if (merge) merge(patchBranch as Scope, liveBranch as Scope);
    },
    (_key, args, global, parentScope, parentNode) => {
      const patchItem = args[0] as Scope;
      // Construct through the ordinary branch machinery; the compiled merge
      // then fills holes, applies seeds, and dispatches nested structure.
      const branch = constructBranch(
        global,
        getShellRenderer(constructId!),
        parentScope,
        parentNode,
        patchItem,
        undefined,
        constructId,
      );
      if (merge) merge(patchItem, branch);
      return branch;
    },
  );
  const scopesKey = AccessorPrefix.BranchScopes + accessor;
  return (scope, value) => {
    const original = (value as unknown[])[0];
    let branches = original as BranchScope[] | BranchScope;
    if (branches && !Array.isArray(branches)) {
      // Resume binds a lone branch bare; fills always carry arrays.
      branches = (value as unknown[])[0] = [branches] as BranchScope[];
    }
    // Skip already-live lists (a replayed frame re-dispatching this merge).
    if ((branches as BranchScope[])?.[0]?.[AccessorProp.StartNode]) {
      return;
    }
    // A constructed parent adopted its patch scope, so the fill occupies the
    // live accessor; clear it so every item constructs fresh.
    if (scope[scopesKey] === original) scope[scopesKey] = undefined;
    signal(scope, value);
  };
}

/** Opens the apply context and records its generation floor. */
export function beginApply(pairs: Map<Scope, Scope>) {
  navPairs = activePairs = pairs;
  return (applyGen = runId);
}

export function endApply() {
  activePairs = undefined;
}

let activePairs: Map<Scope, Scope> | undefined;
let applyGen = 0;
// Reinstalled while replaying lazy work for the newest navigation.
let navPairs: Map<Scope, Scope> | undefined;

export const pendingLoadUpdates: [
  patch: Scope,
  live: Scope,
  mergeId: string,
  constructId?: string,
][] = [];
const flushPendingLoadUpdates = () => {
  for (let i = pendingLoadUpdates.length; i--;) {
    const [patch, live, mergeId, constructId] = pendingLoadUpdates[i];
    const merge = registeredValues[mergeId] as UpdateMerge | undefined;
    // Skip destroyed scopes (a later navigation removed the subtree).
    if (merge && live[AccessorProp.Gen]) {
      pendingLoadUpdates.splice(i, 1);
      const needsConstruct = (live as BranchScope)[AccessorProp.NeedsConstruct];
      if (needsConstruct) invokeConstruct(constructId, live);
      merge(patch, live);
      // A lazy pre-built root clears independently, after its delivery.
      if (needsConstruct) {
        (live as BranchScope)[AccessorProp.NeedsConstruct] = undefined;
      }
    } else if (!live[AccessorProp.Gen]) {
      pendingLoadUpdates.splice(i, 1);
    }
  }
};

export const pendingDynamicUpdates: [
  patch: Scope,
  live: Scope,
  rendererAccessor: string,
  branchAccessor: string,
][] = [];
// Escape-site loaders are consumed (set 0) on first dispatch; later same-id
// dispatches only wait on the in-flight registration.
const updateLoaders: Record<string, (() => Promise<unknown>) | 0> = {};
function startUpdateLoader(rendererId: string) {
  const loader = updateLoaders[rendererId];
  if (loader) {
    updateLoaders[rendererId] = 0;
    const generation = updateGeneration;
    // Read the live binding on settle: the flush hook installs after parking.
    loader().then(
      () => flushReadyUpdates(),
      (error) => {
        if (generation === updateGeneration) failLoad(error);
        // Restore so a later navigation retries a load its starter lost.
        else updateLoaders[rendererId] = loader;
      },
    );
  }
}
/** Keeps only the newest patch until the matching lazy module registers. */
function parkDynamicUpdate(
  patch: Scope,
  live: Scope,
  rendererAccessor: string,
  branchAccessor: string,
) {
  for (const pending of pendingDynamicUpdates) {
    if (pending[1] === live && pending[2] === rendererAccessor) {
      pending[0] = patch;
      return;
    }
  }
  installReadyUpdates();
  pendingDynamicUpdates.push([patch, live, rendererAccessor, branchAccessor]);
}
const flushPendingDynamicUpdates = () => {
  // Re-dispatch decides merge vs construct vs re-park with what registered.
  const parked = pendingDynamicUpdates.splice(0);
  for (const [patch, live, rendererAccessor, branchAccessor] of parked) {
    // Skip destroyed scopes (a later navigation removed the subtree).
    if (live[AccessorProp.Gen]) {
      _update_dynamic(patch, live, rendererAccessor, branchAccessor);
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

// Replayed batch effects wait here until parked dispatch pairs the branches
// they resolve against (constructed branches pair during dispatch).
export let pendingBatchEffects: (() => void)[] | undefined;

// Install lazily so unused update paths remain side-effect free.
let readyUpdatesInstalled: undefined | 1;
export function installReadyUpdates() {
  if (!readyUpdatesInstalled) {
    readyUpdatesInstalled = 1;
    enableReadyUpdates(() => {
      setUpdating(1, runId);
      // Restore the owning navigation around lazy replay.
      activePairs = navPairs;
      const effects: (() => void)[] = (pendingBatchEffects = []);
      try {
        // Keyed batches first: parked lazy merges may read their patch data.
        flushParkedReadyBatches();
        flushPendingLoadUpdates();
        flushPendingDynamicUpdates();
        pendingBatchEffects = undefined;
        for (const runBatchEffects of effects) runBatchEffects();
        run();
      } finally {
        pendingBatchEffects = undefined;
        drainConstructClears();
        setUpdating(0);
        activePairs = undefined;
      }
    });
  }
}
