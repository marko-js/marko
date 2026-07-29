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
import { DIGEST_WIDTH } from "../common/value-claims";
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
  _style_rule_item,
  _text,
  _text_content,
} from "./dom";
import { setConstructingLazy, setUpdating } from "./persisted-queue";
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
  failUpdateNav(
    MARKO_DEBUG
      ? new Error(
          `A persisted update depends on a lazy module that failed to load, so the navigation cannot complete client-side: ${error}`,
        )
      : (error as Error),
  );
}

/** Registers the transport's post-apply failure sink for one navigation. */
export function setUpdateFail(fail?: (error: unknown) => void) {
  failUpdate = fail;
  updateFailed = undefined;
  updateGeneration++;
  dropNavShells();
  sweepGroupAnchors();
}

// Anchors self-evict at read, which never happens for a key the page
// stops dispatching; a per-navigation sweep keeps destroyed branches
// (and their scopes, closures, and DOM) from being retained for the
// lifetime of a long session.
function sweepGroupAnchors() {
  for (const key in groupAnchors) {
    if (!anchorLiveNode(groupAnchors[key])?.isConnected) {
      delete groupAnchors[key];
    }
  }
}

/** The node whose connectivity proves an anchor live. A plain-scope
 * anchor (a stable-loop row owns no branch range) lives and dies with
 * its enclosing branch — plain scopes never zero their generation, and
 * their DOM leaves the document only when that branch's does. A scope
 * with no branch chain has no death signal and stays unresolvable. */
function anchorLiveNode(anchor: Scope | undefined) {
  while (anchor) {
    // Destroyed branches zero their generation; a destroy that leaves
    // nodes momentarily connected (wholesale replace) must not win.
    if (!anchor[AccessorProp.Gen]) return;
    const startNode = (anchor as BranchScope)[AccessorProp.StartNode];
    if (startNode) return startNode;
    anchor = anchor[AccessorProp.ClosestBranch];
  }
}

/** True once this navigation failed: the transport is replacing the
 * document, so no further work may touch the page. The sink is
 * asynchronous (it schedules a document load), which is exactly the
 * window this latch covers. */
export function updateDidFail() {
  return updateFailed;
}

/** Surfaces a failure through the transport sink and latches the
 * navigation dead. Every apply-time failure funnels through here so a
 * partially applied page cannot keep mutating while the fallback lands. */
/** Thrown to unwind an in-progress apply once the fallback latches — the
 * transport is replacing the document, so NOTHING later in the merge, the
 * frame, or the flush may mutate the page. Caught (and swallowed) only at
 * the apply/flush boundaries that set `applying`. */
export const latchUnwind = {};
// Nonzero while a frame apply or parked-work flush runs synchronously —
// the only contexts where unwinding is catchable; async settlements
// (loader failures) latch without throwing.
let applying = 0;
export function setApplying(state: 0 | 1) {
  applying = state;
}

function failUpdateNav(error: Error) {
  // Latched: the first failure owns the fallback; later ones only unwind.
  if (!updateFailed) {
    updateFailed = 1;
    if (failUpdate) failUpdate(error);
    else throw error;
  }
  if (applying) throw latchUnwind;
}

// A renderer this page never loaded and has no loader for (deploy skew);
// surface the failure for the transport's document-navigation fallback.
function failUnknownRenderer(rendererId: string) {
  failUpdateNav(
    new Error(
      MARKO_DEBUG
        ? `A persisted update selected a renderer ("${rendererId}") with no registered update and no loader, so the navigation cannot complete client-side.`
        : rendererId + "",
    ),
  );
}

let failUpdate: ((error: unknown) => void) | undefined;
let updateFailed: undefined | 1;
let updateGeneration = 0;
// Unresolved lazy module loads, whatever navigation started them: their
// registrations are monotonic facts, so any one may still deliver the merge
// a loader-less dynamic dispatch waits on. Generation gates only failure
// delivery, never the count.
let loadsInFlight = 0;

// Success always continues (registration and readiness are monotonic facts;
// parked state is per navigation), but a settled failure belongs to the
// navigation that started the load — a superseded one must not fail the live
// navigation into a document fallback.
function continueLoad(load: () => Promise<unknown>, ready: () => void) {
  const generation = updateGeneration;
  loadsInFlight++;
  load().then(
    () => {
      loadsInFlight--;
      ready();
    },
    (error) => {
      loadsInFlight--;
      if (generation === updateGeneration) failLoad(error);
      // A superseded load's channel is spent either way: wake the live
      // parked queue so loader-less parks re-decide with the new count.
      else flushReadyUpdates();
    },
  );
}

/** Records patch/live pairs for payload effects. Constructed branches bind
 * into their patch scopes, so patch and live are one object there and
 * fills need no transfer. */
export function _update_pair(patch: Scope, live: Scope) {
  activePairs!.set(patch, live);
  // A group-keyed branch registers (or refreshes) its dispatch anchor:
  // a later navigation's completion line reaches the branch through the
  // key when a hit parent's walk no longer does.
  const groupKey = patch[AccessorProp.GroupKey] as string | undefined;
  if (groupKey) groupAnchors[groupKey] = live as BranchScope;
}

// Group dispatch anchors by stable key. Liveness is checked at read, so
// destroyed branches self-evict without a destroy hook.
const groupAnchors: Record<string, BranchScope> = {};

// Groups whose committed claim is no longer backed by the DOM: a
// navigation discarded the parked work that would have delivered them.
// A key leaves the set once a response actually delivers it.
const unbacked = new Set<string>();

/** Groups whose delivery is parked right now. Undefined when nothing is
 * parked — the common case pays three length checks. */
function parkedGroups() {
  if (
    !parkedReadyBatches.length &&
    !pendingLoadUpdates.length &&
    !pendingDynamicUpdates.length
  ) {
    return;
  }
  const keys = new Set<string>();
  for (const batch of parkedReadyBatches) {
    for (const fill of batch[1]) {
      if (Array.isArray(fill) && fill[0] === 1) keys.add(fill[1] as string);
    }
  }
  for (const pending of [...pendingLoadUpdates, ...pendingDynamicUpdates]) {
    // A parked update whose target scope is gone can never deliver, so it
    // is not a reason to withhold a claim — and it would otherwise
    // withhold one forever.
    if (pending[1][AccessorProp.Gen]) {
      keys.add((pending[0][AccessorProp.GroupKey] as string) ?? "0");
    }
  }
  return keys;
}

/** Records the groups a discarded parked payload would have delivered.
 * A ready batch names its groups directly (its `[1, key, …]` dispatch
 * entries ride the same batch as their fills); a parked load or dynamic
 * update carries its key on the patch scope, and lazy content that owns
 * no group of its own belongs to the root group. */
export function markParkedDiscarded() {
  for (const batch of parkedReadyBatches) {
    for (const fill of batch[1]) {
      if (Array.isArray(fill) && fill[0] === 1) unbacked.add(fill[1] as string);
    }
  }
  for (const pending of [...pendingLoadUpdates, ...pendingDynamicUpdates]) {
    unbacked.add((pending[0][AccessorProp.GroupKey] as string) ?? "0");
  }
}

/** A group this response delivered is backed again. */
export function markGroupDelivered(key: string) {
  unbacked.delete(key);
}

/** Fill-time anchor registration: an adopted (already live) scope may
 * receive its `#GroupKey` in a LATER frame than the construct that
 * bound it, after every pair/self-pair already ran — boundary bodies
 * built pending and filled at settle are the canonical case. Plain
 * (non-branch) scopes are legitimate anchors: `anchorLiveNode` checks
 * their liveness through the branch chain, and one with no chain is
 * swept as dead — unclaimable, exactly as if never registered. */
export function registerGroupAnchor(scope: Scope) {
  const key = scope[AccessorProp.GroupKey] as string | undefined;
  if (key) unbacked.delete(key);
  if (key && scope[AccessorProp.Gen]) {
    groupAnchors[key] = scope as BranchScope;
  }
}

/** Resolves a completion-line group dispatch: the live branch registered
 * under the key, and the update merge registered under the key's compile
 * site. Anything missing — a destroyed anchor, an unloaded or unknown
 * site — surfaces through the transport sink; a group frame never
 * half-applies. */
export function resolveGroupDispatch(key: string) {
  const anchor = resolveGroupAnchor(key);
  if (anchor) {
    const merge = registeredValues[
      key
        .slice(0, (key + "|").indexOf("|"))
        // Sibling instances of one site disambiguate with an occurrence
        // suffix; the merge registration is per site.
        .replace(/~\d+$/, "") + UPDATE_MERGE_SUFFIX
    ] as UpdateMerge | undefined;
    if (merge) return [merge, anchor] as const;
  }
  failUnknownRenderer(key);
}

/** Surfaces an unresolvable group (dead anchor, unknown site) through
 * the transport sink — the document-navigation fallback. */
export function failGroupResolution(key: string) {
  failUnknownRenderer(key);
}

/** The live branch registered under a group key, liveness-checked; a
 * dead or unknown anchor surfaces through the transport sink. */
export function resolveGroupAnchor(key: string) {
  const anchor = groupAnchors[key];
  if (anchor) {
    if (anchorLiveNode(anchor)?.isConnected) return anchor;
    delete groupAnchors[key];
  }
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
    _update_pair(patchBranch, patchBranch);
    if (bodyMerge) bodyMerge(patchBranch, patchBranch);
    // The constructing dispatch recorded the anchor as it stood THEN (a
    // pending construct records the pending marker); commit today's.
    live[branchAccessor] = patchBranch;
    live[boundaryAnchorAccessor] = patch[boundaryAnchorAccessor] ?? 0;
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
      // The pair also registers the body's group anchor: a later
      // navigation whose parent chain fully holds reaches this branch
      // only through a bare group dispatch.
      _update_pair(patchBranch, liveBranch);
      if (bodyMerge) bodyMerge(patchBranch, liveBranch);
      return;
    }
    if (
      !liveBranch[AccessorProp.PlaceholderBranch] &&
      typeof live[boundaryAnchorAccessor] !== "string"
    ) {
      _update_pair(patchBranch, liveBranch);
      if (bodyMerge) bodyMerge(patchBranch, liveBranch);
      return;
    }
    // The live boundary never received its body; replace it wholesale with
    // a constructed branch (a pending-capable body seeds fully from fills).
    if (!hasShell(constructId)) {
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
    // The pair registers the body's group anchor (constructBranch ran
    // before the fills' GroupKey could) so later navigations' bare
    // dispatches resolve.
    _update_pair(patchBranch, branch);
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
  if (hasShell(constructId)) {
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
    _update_pair(patchBranch, branch);
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
  } else {
    // The response shipped a boundary body this page cannot build (deploy
    // skew, or a shell the drain never emitted): settling here would leave
    // the boundary permanently empty, so fail into document navigation.
    failUnknownRenderer(constructId + "");
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

/** Owner-wires an adopted child scope and recurses into the child
 * template's construct pass. The compile-known owner deliberately
 * OVERWRITES a serialized `_`: that ref points into patch scope space
 * (only correct while it stays inside the adopted subtree), while the
 * compiled expression resolves through the constructed branch's already
 * live-wired chain. */
export function _construct_child(
  scope: Scope,
  childAccessor: Accessor,
  constructId: string,
  owner?: Scope,
) {
  const child = scope[childAccessor] as Scope | undefined;
  if (child) {
    child[AccessorProp.Owner] = owner || scope;
    (
      registeredValues[constructId + CONSTRUCT_SUFFIX] as
        | ((scope: Scope) => void)
        | undefined
    )?.(child);
  }
}

/** Applies a statically known same-template child (a locally invoked
 * `<define>` body) through its registered content merge. */
export function _update_child(
  patchChild: Scope,
  liveChild: Scope | undefined,
  contentId: string,
) {
  _update_pair(patchChild, liveChild || patchChild);
  (registeredValues[contentId + UPDATE_MERGE_SUFFIX] as UpdateMerge)(
    patchChild,
    liveChild || patchChild,
  );
}

export function _update_content(
  contentId: string,
  merge: UpdateMerge,
  construct?: (scope: Scope) => void,
) {
  _resume(contentId + UPDATE_MERGE_SUFFIX, merge);
  // The construct pass: declared fills/wiring rendering a values-free
  // constructed scope's DOM from its adopted values; `constructBranch` and
  // `_construct_child` invoke it through this registration.
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
    hasShell(constructId)
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
    // A lazy child's effects ride its keyed ready batch; suppress the
    // construct pass's effect queueing across its delivery.
    setConstructingLazy(1);
    try {
      if ((live as BranchScope)[AccessorProp.NeedsConstruct]) {
        invokeConstruct(constructId, live);
        pendingConstructClears.push(live as BranchScope);
      }
      merge(patch, live);
    } finally {
      setConstructingLazy(0);
    }
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
      hasShell(rendererId as string)
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
    if (regionTarget) {
      // A HELD region ships its id alone: the client's recorded range for
      // that identity is the content, so possession — not a shell — is what
      // resolves it. Verified like `_update_region`'s held path: the same
      // live branch, byte-identical, still in the document. Anything else
      // completes as a document load rather than a silent stale range.
      const regionId = rendererId as string;
      const digestAt = regionId.lastIndexOf("|") + 1;
      const entry = regionBranches[regionId.slice(1, digestAt - 1)];
      if (
        entry &&
        entry[1] === live[branchAccessor] &&
        (entry[2] === updateGeneration ||
          (!constructed &&
            entry[0] === regionId.slice(digestAt) &&
            entry[1][AccessorProp.StartNode]?.isConnected))
      ) {
        entry[2] = updateGeneration;
        live[rendererAccessor] = regionId;
      } else {
        failUnknownRenderer(regionId);
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
      _update_pair(patchBranch, liveBranch);
      merge(patchBranch, liveBranch);
    } else if ((rendererId as string) in updateLoaders) {
      // An escaped template reference: start its `?persisted` entry once and
      // park -- registration re-dispatches through the ready machinery.
      startUpdateLoader(rendererId as string);
      parkDynamicUpdate(patch, live, rendererAccessor, branchAccessor);
    } else if (loadsInFlight) {
      // Any unresolved load may still register this id; parked entries
      // re-dispatch on every flush and re-decide with what arrived.
      parkDynamicUpdate(patch, live, rendererAccessor, branchAccessor);
    } else {
      // Nothing pending can ever deliver a merge or loader for this id;
      // parking would hang the navigation. Complete as a document load.
      failUnknownRenderer(rendererId as string);
    }
  }
}

/** Applies a client-state-driven conditional's CONTENT on patches: the
 * selection belongs to the client and never changes here, but the branch
 * the server rendered still carries request-derived fills (regions,
 * boundaries, nested merges) that must dispatch — and pairing registers
 * the branch's group anchor for later bare dispatches. Fills for a branch
 * the client has since toggled away from stay in patch space; the
 * branch's closure chain re-renders from assigned values on re-entry. */
export function _update_if_state(
  patch: Scope,
  live: Scope,
  rendererAccessor: string,
  branchAccessor: string,
  branchMerges: (UpdateMerge | 0)[],
) {
  const patchBranch = patch[branchAccessor] as Scope | undefined;
  if (!patchBranch) return;
  const serialized = (patch[rendererAccessor] as number) || 0;
  const constructed = patch === live;
  const liveBranch = constructed
    ? patchBranch
    : (live[branchAccessor] as Scope | undefined);
  if (
    liveBranch &&
    (constructed || ((live[rendererAccessor] as number) || 0) === serialized)
  ) {
    _update_pair(patchBranch, liveBranch);
    const merge = branchMerges[serialized];
    if (merge) merge(patchBranch, liveBranch);
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
    if (hasShell(constructId)) {
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
    } else if (constructId) {
      // A construct-capable branch without its shell (a held-shell claim the
      // client cannot honor) must fail into a document navigation, never
      // settle silently on the old branch.
      failUnknownRenderer(constructId + "");
    }
    // A nucleus-free branch (no construct id) arrives as region markup.
    return;
  }

  live[rendererAccessor] = newBranch;
  if (patchBranch && liveBranch) {
    _update_pair(patchBranch, liveBranch);
    if (merge) merge(patchBranch, liveBranch);
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

/** Materializes native `content=` inside a freshly constructed scope from
 * its adopted renderer + branch linkage (values-free shells hold an empty
 * host element). */
export function _construct_attr_content(
  scope: Scope,
  rendererAccessor: string,
  branchAccessor: string,
) {
  const rendererId = scope[rendererAccessor] as string | undefined;
  const branch = scope[branchAccessor] as BranchScope | undefined;
  if (rendererId && branch && !branch[AccessorProp.StartNode]) {
    if (!hasShell(rendererId)) {
      // Construction is required here; a silent no-op would leave an empty
      // host behind a "successful" patch. Same bar as the branch merges.
      failUnknownRenderer(rendererId);
      return;
    }
    // A `;`-region target carries complete rendered markup (nothing inside
    // binds); a live target's values-free shell runs its construct pass.
    const regionTarget = rendererId[0] === ";";
    const host = scope[
      branchAccessor.slice(AccessorPrefix.BranchScopes.length)
    ] as Element;
    const built = constructBranch(
      scope[AccessorProp.Global],
      getShellRenderer(rendererId),
      scope,
      host,
      branch,
      regionTarget ? 1 : undefined,
      regionTarget ? undefined : rendererId,
    );
    insertBranchBefore(built, host, null);
    scope[branchAccessor] = built;
    if (!regionTarget) {
      (
        registeredValues[rendererId + UPDATE_MERGE_SUFFIX] as
          | UpdateMerge
          | undefined
      )?.(branch, built);
    }
  }
}

export function _update_style_item(
  accessor: Accessor,
  name: string,
): UpdateHandler {
  return (patch, live, patchAccessor) =>
    _style_rule_item(
      live[accessor] as HTMLStyleElement,
      name,
      patch[patchAccessor],
    );
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
  if (
    live &&
    liveList.length < patch.length &&
    constructId &&
    !hasShell(constructId)
  ) {
    // Growth requires construction; a missing shell (a held-shell claim the
    // client cannot honor) must fail into a document navigation instead of
    // merging into branches that do not exist.
    failUnknownRenderer(constructId + "");
    return;
  }
  if (live && liveList.length < patch.length && hasShell(constructId)) {
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
  for (let i = 0; i < patch.length; i++) {
    // Index-matched items pair like keyed hits: the pair registers each
    // row's group anchor, which an effect-free row's merge never would —
    // unregistered rows can never be claimed or bare-dispatched.
    _update_pair(patch[i], liveList[i]!);
    if (merge) merge(patch[i], liveList[i]!);
  }
}

/** Registers a section's wire [template, walks] for client construction. */
export function registerShell(id: string, template: string, walks: string) {
  shells[id] = [template, walks];
  navShells.push(id);
  // Per-response region shells reuse ids across navigations; drop any
  // memoized renderer so fresh content wins.
  delete shellRenderers[id];
}

// Wire shells belong to the navigation that shipped them: region ids
// carry a content digest, so every changed version would otherwise
// accumulate a template and a memoized renderer for the page's lifetime.
// Static shells (registered by the build's modules) are unaffected.
const navShells: string[] = [];
function dropNavShells() {
  for (const id of navShells) {
    delete shells[id];
    delete shellRenderers[id];
  }
  navShells.length = 0;
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
      } else if (typeof regionId === "string" && regionId.indexOf("|") > 0) {
        // A held region ships its fill alone: possession means THIS
        // accessor's live branch is the recorded range for the identity,
        // byte-identical and still in the document. Anything else — an
        // adopted (freshly constructing) scope, a destroyed or overwritten
        // range, a stale echo — completes the navigation as a document
        // load, never a silent stale range. A generation stamp keeps later
        // frames of the same navigation from re-verifying a range another
        // frame legitimately (and temporarily) detached.
        const digestAt = regionId.lastIndexOf("|") + 1;
        const entry = regionBranches[regionId.slice(1, digestAt - 1)];
        if (
          entry &&
          entry[1] === live[branchAccessor] &&
          (entry[2] === updateGeneration ||
            (patch !== live &&
              entry[0] === regionId.slice(digestAt) &&
              entry[1][AccessorProp.StartNode]?.isConnected))
        ) {
          entry[2] = updateGeneration;
        } else {
          failUnknownRenderer(regionId);
        }
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
    // An identity-keyed region (`;site|instance|digest`) records its applied
    // range for the echo; a `;N` region (fresh-construct content) does not.
    const digestAt = regionId.lastIndexOf("|") + 1;
    if (digestAt > 1) {
      regionBranches[regionId.slice(1, digestAt - 1)] = [
        regionId.slice(digestAt),
        branch,
        updateGeneration,
        shells[regionId][0].length,
        live,
        accessor as string,
      ];
    }
  };
}

// Applied region ranges by identity: digest, owning branch, and the
// navigation generation that last proved possession. Possession is checked
// against live DOM at read time, so destroyed branches self-evict without a
// destroy hook (and cost the eager runtime nothing).
const regionBranches: Record<
  string,
  [
    digest: string,
    branch: BranchScope,
    generation: number,
    size: number,
    owner?: Scope,
    accessor?: string,
  ]
> = {};

/** The provable-possession snapshot a persisted entry exports as `echo`:
 * everything this runtime can assert the page holds, keyed by protocol
 * section. Regions today; compiler value groups join with track C. */
export function _echo_snapshot(values?: string) {
  return {
    regions: regionDigests(),
    values: values && liveValueClaims(values),
  };
}

// Committed value feedback names groups whose branches may since have
// left the document; a claim the applier could no longer dispatch into
// is dropped at read rather than echoed (the region model, applied to
// the value section). Root always dispatches through the root merge.
function liveValueClaims(values: string) {
  // A claim is a possession statement. Pending deliveries are still fine
  // to claim — they will apply. The unsafe moment is a navigation
  // DISCARDING parked work: those groups were committed but never
  // reached the DOM, so they stop being claimable until something
  // delivers them again. Suppressing every claim while anything is
  // merely parked would cost a lazy-bearing page its elision on every
  // navigation, which is most of the feature.
  // Taking an echo means a navigation is starting, and starting one
  // DISCARDS whatever is parked — so a group whose delivery is parked
  // right now cannot be claimed: the request would elide content this
  // page is about to throw away. Lazy content that owns no group of its
  // own belongs to the root group, so a parked load stands the root
  // claim down; giving lazy subtrees their own group would make this
  // surgical (see agent-feedback).
  const parked = parkedGroups();
  const kept: string[] = [];
  for (const entry of values.split(".")) {
    const key = entry
      .slice(0, -DIGEST_WIDTH)
      .replace(/%2E/g, ".")
      .replace(/%25/g, "%");
    if (unbacked.has(key) || parked?.has(key)) continue;
    // Root and per-global groups are root-class: they apply by walk or
    // plain assignment and never register (or need) a branch anchor.
    if (
      key === "0" ||
      key[0] === "$" ||
      anchorLiveNode(groupAnchors[key])?.isConnected
    ) {
      kept.push(entry);
    }
  }
  return kept.join(".");
}

// Live region possessions (`site|instance` → digest) in benefit order —
// largest markup first, so a capped echo keeps its most valuable claims.
// Pruned as read: a disconnected range self-evicts.
function regionDigests() {
  const live: [key: string, entry: (typeof regionBranches)[string]][] = [];
  for (const key in regionBranches) {
    const entry = regionBranches[key];
    // Claim only what the apply-time verify would accept: connected AND
    // still the branch recorded at its owner's accessor. Claiming a range
    // the page has since replaced makes the server hold content the client
    // cannot resolve, and the navigation completes as a document load —
    // possession must be provable by the same predicate that consumes it.
    if (
      entry[1][AccessorProp.StartNode]?.isConnected &&
      (!entry[4] ||
        entry[4][AccessorPrefix.BranchScopes + entry[5]!] === entry[1])
    ) {
      live.push([key, entry]);
    } else {
      delete regionBranches[key];
    }
  }
  live.sort((a, b) => b[1][3] - a[1][3]);
  const out: Record<string, string> = {};
  for (const [key, entry] of live) out[key] = entry[0];
  return out;
}

/** Constructs a branch that adopts its patch scope through the walk. */
function constructBranch(
  $global: Scope[typeof AccessorProp.Global],
  renderer: Renderer,
  parentScope: Scope | undefined,
  parentNode: ParentNode,
  into: Scope,
  complete?: 1,
  constructId?: string,
) {
  setConstructingBranch(1);
  try {
    // The serialized owner names the content's definition site (which may
    // sit above the constructing parent); resolve it out of patch scope
    // space — adopted scopes are live, matched scopes pair.
    const serializedOwner = into[AccessorProp.Owner] as Scope | undefined;
    const branch = createBranchInto(
      $global,
      renderer,
      parentScope,
      parentNode,
      into,
    );
    const liveOwner =
      serializedOwner &&
      (serializedOwner[AccessorProp.Gen]
        ? serializedOwner
        : activePairs?.get(serializedOwner));
    if (liveOwner) branch[AccessorProp.Owner] = liveOwner;
    // Constructed branches never pass through _update_pair (adopted
    // scopes are live), so the anchor registry learns their group key
    // here — region-delivered content included.
    const groupKey = into[AccessorProp.GroupKey] as string | undefined;
    if (groupKey) groupAnchors[groupKey] = branch as BranchScope;
    // A values-free shell clone has never rendered its fills; the stamp is
    // per-scope state (not an apply time window: parked lazy dispatches run
    // after the apply). Region shells and native rebuilds are complete
    // markup — no stamp. Invariant: the compiled construct pass invoked
    // below renders the stamped scope's fills, and the frame-end drain
    // clears the stamp — from then on the persisted signals'
    // equality-elision is CORRECT; do not "fix" the elision back.
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
const staticShells: Record<string, [string, string]> = {};
const shellRenderers: Record<string, ReturnType<typeof _content>> = {};

/** Registers the shells a loaded persisted chunk already holds. The server
 * omits their wire entries for a client that provably evaluated this chunk;
 * an unregistered id stays a wire shell, and a missing one fails to a
 * document navigation. */
export function _static_shells(entries: Record<string, [string, string]>) {
  Object.assign(staticShells, entries);
  // A re-evaluated chunk (dev/HMR) must not leave a memoized renderer built
  // from a superseded source.
  for (const id in entries) delete shellRenderers[id];
}

/** A wire shell outranks the static registration of the same id. */
function hasShell(id: string | undefined | 0): id is string {
  return !!id && (id in shells || id in staticShells);
}

// Values arrive as ordinary fills; the shell is values-free by construction.
function getShellRenderer(id: string) {
  const source = shells[id] || staticShells[id];
  return (shellRenderers[id] ||= _content(id, source[0], source[1], 0))();
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
      _update_pair(patchBranch as Scope, liveBranch as Scope);
      // A held item arrives as its own live branch, substituted for the
      // [2, …] table's hit placeholder: it moves, but merging live-onto-
      // live would replay the branch's accessors as patch fills — a
      // region-targeted conditional would rebuild from this response's
      // shells, destroying held state and stranding the recorded branch.
      // Anything else that self-matches (an adopted branch re-matched by
      // a later settle frame) still merges.
      if (
        merge &&
        !(
          patchBranch === liveBranch &&
          heldItems.get(patchBranch as Scope) === updateGeneration
        )
      ) {
        merge(patchBranch as Scope, liveBranch as Scope);
      }
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
    // A hit item's placeholder pairs to its live branch by identity;
    // hand the alignment the branch itself — it carries the loop key the
    // elided placeholder does not.
    if (Array.isArray(branches) && activePairs) {
      for (let i = 0; i < (branches as Scope[]).length; i++) {
        const live = activePairs.get((branches as Scope[])[i]);
        if (live) (branches as Scope[])[i] = live;
      }
    }
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
// Anchors a response's [2, …] table resolved for HIT (elided) groups:
// their fills never ship, so keyed alignment moves them without merging.
// Generation-stamped so a tag can never outlive its navigation.
const heldItems = new WeakMap<Scope, number>();

/** Tags a pair-table anchor: its group's fills are elided this response. */
export function markHeldAnchor(anchor: Scope) {
  heldItems.set(anchor, updateGeneration);
}
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
    if (updateFailed) return;
    const [patch, live, mergeId, constructId] = pendingLoadUpdates[i];
    const merge = registeredValues[mergeId] as UpdateMerge | undefined;
    // Skip destroyed scopes (a later navigation removed the subtree).
    if (merge && live[AccessorProp.Gen]) {
      pendingLoadUpdates.splice(i, 1);
      const needsConstruct = (live as BranchScope)[AccessorProp.NeedsConstruct];
      // Effects ride the keyed ready batch; see `_update_load`.
      setConstructingLazy(1);
      try {
        if (needsConstruct) invokeConstruct(constructId, live);
        merge(patch, live);
      } finally {
        setConstructingLazy(0);
      }
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
    loadsInFlight++;
    // Read the live binding on settle: the flush hook installs after parking.
    loader().then(
      () => {
        loadsInFlight--;
        flushReadyUpdates();
      },
      (error) => {
        loadsInFlight--;
        if (generation === updateGeneration) failLoad(error);
        else {
          // Restore so a later navigation retries a load its starter lost —
          // and wake the live parked queue: a park waiting on this consumed
          // loader must retry it (or fail closed) rather than hang.
          updateLoaders[rendererId] = loader;
          flushReadyUpdates();
        }
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
    // Once a re-dispatch latches the fallback, nothing may touch the page.
    if (updateFailed) return;
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
    // A group dispatch ([1, key, scopeId]) applies like any fill; every
    // other array is a ready-id dependency gate.
    if (Array.isArray(fill) && fill[0] !== 1) {
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
      if (updateFailed) return;
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
      applying = 1;
      // Restore the owning navigation around lazy replay.
      activePairs = navPairs;
      const effects: (() => void)[] = (pendingBatchEffects = []);
      try {
        // Keyed batches first: parked lazy merges may read their patch data.
        // A failure anywhere latches and unwinds here — the transport is
        // replacing the document, so nothing later may mutate the page.
        if (!updateFailed) flushParkedReadyBatches();
        if (!updateFailed) flushPendingLoadUpdates();
        if (!updateFailed) flushPendingDynamicUpdates();
        pendingBatchEffects = undefined;
        if (!updateFailed) {
          for (const runBatchEffects of effects) runBatchEffects();
          run();
        }
      } catch (error) {
        if (error !== latchUnwind) throw error;
      } finally {
        applying = 0;
        pendingBatchEffects = undefined;
        if (!updateFailed) drainConstructClears();
        setUpdating(0);
        activePairs = undefined;
      }
    });
  }
}
