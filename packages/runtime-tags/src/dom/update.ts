// Client runtime for persisted (single-page server-first) updates.
//
// `applyUpdate` is the merge driver: it deserializes an update-render payload
// (plain resume-format fills, patch-local scope ids) through a patch-aware
// variant of resume's serialize context, merges the patch `$global` partial
// onto the live one, dispatches the page's compiled merge function
// (`?update` module default export) against the live root scope, and flushes
// the render queue so intersections/closures the merge triggered settle
// before the navigation completes.
//
// Update entries are compiled merge functions that share the main template
// module's compiled pieces through the resume registry rather than
// duplicating them:
// - value/conditional signals are registered with `_var_resume` by persisted
//   dom builds and invoked here via `_update_signal`.
// - loop branch content (`[template, walks, setup]`) is registered with
//   `_resume` so `_update_for` can build a `_for_of` whose params signal is
//   the update entry's own body merge (the main loop signal's params render
//   from real items, which a patch scope is not).
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type Scope,
} from "../common/types";
import { _for_of, attachAwaitBranch } from "./control-flow";
import {
  _attr_details_or_dialog_open_default,
  _attr_input_checked_default,
  _attr_input_value_default,
  _attr_select_value_default,
} from "./controllable";
import {
  _attr,
  _attr_class,
  _attr_style,
  _html,
  _text,
  _text_content,
} from "./dom";
import { refreshEffects, run, runEffects, runId, setUpdating } from "./queue";
import {
  _resume,
  bumpNavEpoch,
  enableReadyUpdates,
  getRegisteredWithScope,
  getUpdateRoot,
  isReady,
  readyPersisted,
  registeredValues,
} from "./resume";
import { removeAndDestroyBranch } from "./scope";
import {
  applyBoundaryBody,
  applyFragment,
  BOUNDARY_SITE_PREFIX,
  type FragmentContext,
} from "./update-fragment";

type UpdateSignal = (scope: Scope, value: unknown) => void;

/** Starts a persisted lazy child when its keyed resume batch arrives. */
export function _load_ready(readyId: string, load: () => Promise<unknown>) {
  _resume(readyId, () => {
    load().then(
      () => readyPersisted(readyId),
      () => 0,
    );
  });
}

type FragmentEntry = [
  anchorScopeId: number,
  accessor: string,
  markerPrefix: string,
  html: string,
  // Ids of every scope the fragment serialized -- stamped into the live tree
  // so dom-less scopes (no marker reaches them) get live identity.
  scopeIds?: number[],
];
// A `<try>` placeholder boundary's body, resolved after its fragment
// frame shipped the placeholder: swapped in where the placeholder branch
// sits (the 0 in the accessor slot discriminates from FragmentEntry).
type BoundaryBodyEntry = [
  tryBranchId: number,
  kind: 0,
  markerPrefix: string,
  html: string,
  scopeIds?: number[],
];
// A lazy module's resume batch, keyed by the module's asset/ready id (a
// string in slot 0 -- fragment and boundary-body entries start with a
// number). Parked until the module declares ready, like a document's blocking
// `.b` channel; arrival also fires the module's registered load trigger (see
// `_load_ready` in dom/load.ts). Inner fills are the standard shapes plus deps
// markers (string arrays naming other lazy modules whose batches must drain
// first).
type ReadyBatchEntry = [readyId: string, ...fills: unknown[]];
type UpdateFill =
  | ((
      ctx: (data: number | (Scope | number)[], registryId?: string) => unknown,
    ) => unknown)
  // Effect entries ("registryId scopeId …", patch-local scope ids): executed
  // only against scopes freshly created during the apply — a matched live
  // scope's effects already ran at mount.
  | string
  // Fragment frame entries: a content-hop branch delivered as resumable
  // HTML (see designs/persisted-pages-architecture.md, "Fragment frames").
  | FragmentEntry
  | BoundaryBodyEntry
  | ReadyBatchEntry;

/**
 * Applies an update-render payload to a live (resumed) render.
 *
 * `merge` is the page template's compiled merge function (the `?update`
 * module's default export) and `liveRoot` the live scope it pairs with
 * (defaults to the first render's root). The patch root is scope 1 by
 * convention (the first scope the update render allocates -- the root
 * template's); patch scopes are plain objects in a patch-local id space, and
 * `_(id, registryId)` references resolve against them as resume fills do.
 * Scope 0 partials are the update's `$global` values and merge onto the live
 * `$global`.
 */
export function applyUpdate(
  merge: (patch: Scope, live: Scope) => void,
  fills:
    | UpdateFill[]
    | Exclude<UpdateFill, FragmentEntry | BoundaryBodyEntry | ReadyBatchEntry>,
  liveRoot = getUpdateRoot(),
) {
  createUpdate(merge, liveRoot)(fills);
}

/**
 * The per-navigation form of `applyUpdate`: update responses are a stream of
 * serializer frames, and the returned function applies one frame's fills at a
 * time against a shared patch-scope space, so early frames settle before slow
 * async boundaries resolve. Each call re-dispatches the root merge: sparse
 * presence checks pick up the keys the new frame added (later frames extend
 * earlier scopes, e.g. an `<await>` body's branch link), while already-applied
 * keys re-apply through value/DOM primitives that no-op on unchanged input.
 */
export function createUpdate(
  merge: (patch: Scope, live: Scope) => void,
  liveRoot = getUpdateRoot(),
) {
  if (MARKO_DEBUG && !liveRoot) {
    throw new Error(
      "applyUpdate could not pair a live root scope (is the page resumed?)",
    );
  }
  // Epoch-gate the document's reorder runtime (see `bumpNavEpoch`) before any
  // frame applies, so a still-pending reorder chunk captured before this
  // navigation no-ops instead of landing pre-navigation content in the
  // post-navigation page.
  bumpNavEpoch();
  const liveGlobal = liveRoot![AccessorProp.Global] as unknown as Scope;
  const patchScopes: Record<number, Scope> = { 0: liveGlobal };
  const getScope = (id: number) => (patchScopes[id] ||= {} as Scope);
  const applyScopes = (partials: (Scope | number)[]) => {
    let scopeId = partials[0] as number;
    for (let i = 1; i < partials.length; i++) {
      const partial = partials[i];
      if (typeof partial === "number") {
        scopeId += partial;
      } else {
        if (scopeId) {
          patchScopes[scopeId] = Object.assign(
            patchScopes[scopeId] || (partial as Scope),
            partial,
          );
        } else {
          Object.assign(liveGlobal, partial);
        }
        scopeId++;
      }
    }
  };
  const serializeContext = Object.assign(
    (data: number | (Scope | number)[], registryId?: string) =>
      typeof data === "number"
        ? registryId
          ? // Update payloads may reference registrations the build
            // intentionally dropped: persisted builds ship no divergent content
            // renderers (divergence arrives as fragment frames), yet a matched
            // scope's spine still serializes renderer values by registry id.
            // Resolve to undefined -- nothing construction-related reads them
            // in those builds -- instead of invoking a missing registration.
            registryId in registeredValues
            ? (getRegisteredWithScope(registryId, getScope(data)) as unknown)
            : undefined
          : getScope(data)
        : applyScopes(data),
    // Fills reference registered values directly as `_._[id]`.
    { _: registeredValues },
  );

  const pairs = new Map<Scope, Scope>();
  // Fragment scopes ARE their live scopes: the walker binds DOM refs onto
  // the patch scope objects and they join the live scope tree, so stamping
  // gives them live-scope identity (generation, global, self-pairing for
  // payload effect entries).
  const stamp = (scope: Scope, id: number) => {
    if (scope[AccessorProp.Gen]) return false;
    scope[AccessorProp.Id] = id;
    scope[AccessorProp.Gen] = runId;
    scope[AccessorProp.Global] = liveGlobal as Scope[AccessorProp.Global];
    pairs.set(scope, scope);
    return true;
  };

  // A lazy module's keyed resume batch (see `ReadyBatchEntry`). Module already
  // ready: drain inline -- scope data lands before this frame's merge dispatch
  // reads it, and effect entries join the frame's ordinary gated effect path
  // (which runs after the merge walked any fragment markup and bound node
  // refs). Still loading: park the batch and fire the module's registered load
  // trigger (`_load_ready`); the parked closure carries THIS apply's
  // patch-scope space, so fills resolve against it when `ready()` replays them.
  // Replayed effect entries run only against scopes with live identity
  // (fragment/boundary-stamped subtrees; matched patch scopes never get one,
  // matching the main effect loop's pairing gate) and skip destroyed subtrees
  // (`Gen` zeroed).
  const processBatch = (entry: ReadyBatchEntry, effectEntries: string[]) => {
    const batch: ParkedReadyBatch = {
      id: entry[0],
      fills: entry.slice(1),
      apply: (fill) => {
        if (typeof fill === "string") {
          const effects: unknown[] = [];
          let fn: unknown;
          for (const token of fill.split(" ")) {
            if (/\D/.test(token)) {
              fn = registeredValues[token];
            } else {
              const scope = patchScopes[+token];
              if (fn && scope && scope[AccessorProp.Gen]) {
                effects.push(fn, scope);
              }
            }
          }
          runEffects(effects);
        } else {
          const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
          if (Array.isArray(scopes)) applyScopes(scopes);
        }
      },
    };
    if (isReady(batch.id)) {
      let count = 0;
      for (; count < batch.fills.length; count++) {
        const fill = batch.fills[count];
        if (Array.isArray(fill)) {
          // An unmet deps marker (another lazy module's batch must drain
          // first): the remainder parks and replays through `ready()`.
          if (!(fill as string[]).every(readyBatchDrained)) break;
        } else if (typeof fill === "string") {
          effectEntries.push(fill);
        } else {
          const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
          if (Array.isArray(scopes)) applyScopes(scopes);
        }
      }
      if (count === batch.fills.length) return;
      batch.fills.splice(0, count);
      installReadyUpdates();
      parkedReadyBatches.push(batch);
    } else {
      installReadyUpdates();
      parkedReadyBatches.push(batch);
      (registeredValues[batch.id] as undefined | (() => void))?.();
    }
  };

  // A bare (non-array) frame value can only be a merge fill or effect entry;
  // fragment entries always arrive inside a frame array off the wire.
  return (
    fills:
      | UpdateFill[]
      | Exclude<
          UpdateFill,
          FragmentEntry | BoundaryBodyEntry | ReadyBatchEntry
        >,
  ) => {
    const effectEntries: string[] = [];
    for (const fill of Array.isArray(fills) ? fills : [fills]) {
      if (typeof fill === "string") {
        effectEntries.push(fill);
      } else if (Array.isArray(fill)) {
        if (typeof fill[0] === "string") {
          // A lazy module's keyed resume batch: drained inline when the
          // module is ready, parked until it declares ready otherwise (its
          // markup, if any, rides this same frame's fragment/boundary-body
          // entry).
          processBatch(fill as ReadyBatchEntry, effectEntries);
        } else if (fill[1] === 0) {
          // Stash the boundary body on the try's own patch scope (the object
          // `_update_branch`'s `patchBranch` resolves to), which applies it
          // once top-down pairing (fresh or matched) resolves the live branch.
          // Applying here -- before that pairing exists -- would silently
          // no-op; deferring to the compiled dispatch lets a same-frame or
          // later-frame entry apply identically.
          getScope(fill[0])[PENDING_BODY_KEY] = fill;
        } else {
          // Stash the fragment on its anchor's patch scope under the
          // reserved "P" prefix; the hop's merge consumes it (see
          // `_update_dynamic`).
          getScope(fill[0])[FRAGMENT_PREFIX + fill[1]] = fill;
        }
      } else {
        const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
        if (Array.isArray(scopes)) applyScopes(scopes);
      }
    }

    // `runId` is also the apply-generation floor the queue's effect gate
    // reads (matched scopes carry older stamps).
    setUpdating(1, runId);
    activePairs = pairs;
    activeUpdate = {
      getScope,
      stamp,
      // Adopt a live scope AS a patch id (`applyBoundaryBody`'s matched path):
      // the walk then binds refs onto it and later frames' scope data merges
      // onto it directly -- the fragment-subtree model ("patch scope IS live
      // scope") applied to a boundary that matched.
      adopt: (id, scope) => (patchScopes[id] = scope),
    };
    // Boundary merges may flush mid-apply (`_update_branch`'s retry for
    // same-frame fresh creations), advancing `runId` -- "created during
    // this apply" means any run window from here on.
    applyGen = runId;
    try {
      // Boundary bodies apply from inside the compiled branch dispatch
      // (`_update_branch`) once it resolves this frame's pairing --
      // fragment-created boundaries are already self-paired from an earlier
      // frame, and matched boundaries pair through this top-down walk like any
      // other matched scope.
      merge(getScope(1), liveRoot!);

      // Fresh-subtree effects: merges paired patch scopes to live scopes
      // (`_update_pair`); an entry runs iff its scope's live pair was
      // created during this apply (resumed/pre-existing scopes carry older
      // generation stamps, destroyed scopes `0`). Matched scopes never
      // replay.
      if (effectEntries.length) {
        const effects: unknown[] = [];
        for (const entry of effectEntries) {
          let fn: unknown;
          for (const token of entry.split(" ")) {
            if (/\D/.test(token)) {
              fn = registeredValues[token];
            } else {
              const live = pairs.get(patchScopes[+token]);
              if (
                fn &&
                live &&
                (live[AccessorProp.Gen] >= applyGen ||
                  // `$global`-referencing effects re-run on matched scopes
                  // too: every apply refreshes their source (see
                  // `_script_refresh` in ./queue).
                  (live[AccessorProp.Gen] &&
                    refreshEffects.has(fn as (scope: Scope) => void)))
              ) {
                effects.push(fn, live);
              }
            }
          }
        }
        runEffects(effects);
      }

      // Merges queue renders (intersections, closure fan-out, branch
      // setups); flush synchronously so each frame settles as one batch.
      run();
    } finally {
      setUpdating(0);
      activePairs = undefined;
      activeUpdate = undefined;
    }
  };
}

let activePairs: Map<Scope, Scope> | undefined;
let activeUpdate: FragmentContext | undefined;

/**
 * Emitted at the top of compiled merge functions for sections with effects:
 * records the patch → live scope pairing so payload effect entries (which
 * carry patch-local scope ids) can resolve their live scope.
 */
export function _update_pair(patch: Scope, live: Scope) {
  activePairs?.set(patch, live);
}

let applyGen = 0;

// Content-section merges register under the section's content id plus this
// suffix (a character that cannot appear in generated register ids), so
// dynamic tags can dispatch a merge from the renderer id the server
// serialized (`ConditionalRenderer:<accessor>` in the patch).
const UPDATE_MERGE_SUFFIX = "!";
type UpdateMerge = (patch: Scope, live: Scope) => void;

/**
 * Single-branch boundary (`<await>`/`<try>` body) dispatch. When the live
 * branch is a detached await -- a fresh subtree's await whose promise compute
 * was skipped while updating -- the body's frame is the resolution: attach it
 * at its anchor, then fill it. A stashed boundary-body entry (see
 * `createUpdate`/`PENDING_BODY_KEY`) applies instead of `bodyMerge` and is
 * consumed so a re-dispatch (a streamed frame re-applying, or this function's
 * own same-frame retry) never double-applies it. Otherwise attached (or
 * non-await) branches just fill; an absent live branch sparse-skips.
 */
export function _update_branch(
  patch: Scope,
  live: Scope,
  accessor: Accessor,
  bodyMerge: UpdateMerge | 0,
) {
  const branchKey = AccessorPrefix.BranchScopes + accessor;
  const patchBranch = patch[branchKey] as Scope | undefined;
  if (!patchBranch) return;
  let liveBranch = live[branchKey] as BranchScope | undefined;
  if (!liveBranch) {
    // The boundary may sit in a subtree created earlier in this same
    // apply whose structural renders are still queued (a same-frame fresh
    // creation) -- flush and retry once.
    run();
    liveBranch = live[branchKey] as BranchScope | undefined;
    if (!liveBranch) return;
  }
  if (liveBranch[AccessorProp.DetachedAwait]) {
    attachAwaitBranch(live, accessor as string, liveBranch);
  }
  const bodyEntry = ((patchBranch as BranchScope)[PENDING_BODY_KEY] ||
    liveBranch[PENDING_BODY_KEY]) as BoundaryBodyEntry | undefined;
  if (bodyEntry) {
    delete (patchBranch as BranchScope)[PENDING_BODY_KEY];
    delete liveBranch[PENDING_BODY_KEY];
    applyBoundaryBody(
      activeUpdate!,
      liveBranch,
      bodyEntry[2],
      bodyEntry[3],
      bodyEntry[4],
      bodyEntry[0],
    );
    // The boundary is no longer pending: flip the "still showing its
    // placeholder" stash falsy so the next navigation's echo skips this site
    // and the update goes back to ordinary fills (mirrors the server tombstone
    // a document render writes when its own body resolves).
    live[BOUNDARY_SITE_PREFIX + (accessor as string)] = 0;
  } else if (bodyMerge) {
    bodyMerge(patchBranch, liveBranch);
  }
}

export function _update_content(contentId: string, merge: UpdateMerge) {
  _resume(contentId + UPDATE_MERGE_SUFFIX, merge);
}

/**
 * `load=` lazy-child dispatch. The child's `?update` merge module rides its
 * lazy chunk, registered under a register id both sides compute
 * (`<childTemplateId>` + its root `update` key, a compile constant). Loaded
 * child: dispatch directly. Still loading: park the (patch, live, id) triple
 * and replay when a load completes (the `enableReadyUpdates` hook, installed
 * on first park) -- request-derived values ride every update, so the newest
 * parked patch per live scope is complete and supersedes earlier ones.
 */
export function _update_load(patch: Scope, live: Scope, mergeId: string) {
  // A fragment-constructed lazy child (patch IS live -- fragment subtree
  // scopes are shared objects) has nothing to merge: the fragment baked its
  // rendered values into the markup. Same suppression the typed `UpdateChild:`
  // link applies inside fragment subtrees -- without it, a registered child
  // merge runs against a scope that is not a patch (undefined node-ref reads).
  if (patch === live) return;
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

const pendingLoadUpdates: [patch: Scope, live: Scope, mergeId: string][] = [];
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

const pendingDynamicUpdates: [patch: Scope, live: Scope, rendererId: string][] =
  [];
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

// Keyed resume batches parked until their lazy module declares ready (see
// `parkBatch` in `createUpdate` -- each batch's fills replay through the
// apply that delivered it).
interface ParkedReadyBatch {
  id: string;
  fills: unknown[];
  apply: (fill: unknown) => void;
}
const parkedReadyBatches: ParkedReadyBatch[] = [];
const readyBatchDrained = (dep: string) =>
  isReady(dep) && !parkedReadyBatches.some((batch) => batch.id === dep);
const flushParkedReadyBatches = () => {
  // Fixed point: draining one module's batch may unblock another's deps
  // marker (nested lazy modules), mirroring the document walker's ready
  // loop (`render.m` in dom/resume.ts).
  for (let progress: unknown = 1; progress;) {
    progress = 0;
    for (let i = 0; i < parkedReadyBatches.length; i++) {
      const batch = parkedReadyBatches[i];
      if (!isReady(batch.id)) continue;
      let count = 0;
      for (; count < batch.fills.length; count++) {
        const fill = batch.fills[count];
        if (Array.isArray(fill)) {
          // Deps marker: every named module must be ready with its own
          // batches drained (a dep's data always flushes before an entry
          // that names it, so drained means present).
          if (!(fill as string[]).every(readyBatchDrained)) break;
        } else {
          batch.apply(fill);
        }
      }
      if (count) {
        progress = 1;
        batch.fills.splice(0, count);
      }
      if (!batch.fills.length) parkedReadyBatches.splice(i--, 1);
    }
  }
};

// Installed on the first park, never at import time -- this module must stay
// free of import-time side effects so tree-shaking of the dom runtime is
// honest. A `ready()` that fires before anything parks has nothing to flush.
let readyUpdatesInstalled: undefined | 1;
function installReadyUpdates() {
  if (!readyUpdatesInstalled) {
    readyUpdatesInstalled = 1;
    enableReadyUpdates(() => {
      setUpdating(1, runId);
      try {
        // Keyed batches first: parked lazy merges may read their patch data.
        flushParkedReadyBatches();
        flushPendingLoadUpdates();
        flushPendingDynamicUpdates();
        run();
      } finally {
        setUpdating(0);
      }
    });
  }
}

export function _update_dynamic(
  patch: Scope,
  live: Scope,
  rendererKey: string,
  branchKey: string,
) {
  const rendererId = patch[rendererKey];
  if (typeof rendererId !== "string") return;
  const patchBranch = patch[branchKey] as Scope | undefined;
  const accessor = branchKey.slice(AccessorPrefix.BranchScopes.length);
  const fragment = patch[FRAGMENT_PREFIX + accessor] as
    FragmentEntry | undefined;

  if (fragment && patchBranch && live[rendererKey] !== rendererId) {
    // The divergence point arrived as a fragment frame: swap the branch by
    // inserting the server-rendered subtree instead of client-constructing it
    // from a registered renderer graph. Consume the entry and stop: its values
    // are already baked into the HTML and its resume data has initialized the
    // new scopes. Replaying the route merge against those intentionally sparse
    // scopes can manufacture invalid inputs. Later async frames contain no
    // fragment entry and take the ordinary merge path below.
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
  } else if (live[rendererKey] !== rendererId) {
    // Divergence is fragment-delivered, so a mismatch without a fragment
    // entry (eg a same-route
    // navigation changed a dynamic tag's renderer) cannot apply. Fail loudly
    // -- the router falls back to a full navigation -- rather than dispatching
    // the new content's merge against the stale branch. A mismatch with no
    // live branch has nothing to go stale: sparse-skip.
    if (live[branchKey]) {
      throw new Error(
        MARKO_DEBUG
          ? `A persisted update changed a dynamic tag's renderer (${rendererId}) without a fragment entry; persisted pages do not construct divergent content client-side.`
          : "update diverged",
      );
    }
    return;
  }

  const merge = getRegisteredWithScope(rendererId + UPDATE_MERGE_SUFFIX) as
    UpdateMerge | undefined;
  const liveBranch = live[branchKey] as Scope | undefined;
  if (patchBranch && liveBranch) {
    if (merge) {
      merge(patchBranch, liveBranch);
    } else if (isNativeDynamicBranch(liveBranch, rendererId)) {
      // A tag-name renderer (native-tag branch) registers no merge, and its
      // body's content hop is runtime-created by the native wrapper
      // (html/dynamic-tag.ts), so no compiled merge line exists at any level.
      // Descend generically: place the branch scope's typed captures (dynamic
      // attrs on the element), then recurse into the nested hop through the
      // same renderer-id-keyed link. A component renderer whose lazy module is
      // not registered yet is parked below instead of being mistaken for a
      // native branch.
      _update_scope(patchBranch, liveBranch);
      for (const key in patchBranch) {
        if (
          key.length > AccessorPrefix.ConditionalRenderer.length &&
          key.slice(0, AccessorPrefix.ConditionalRenderer.length) ===
            AccessorPrefix.ConditionalRenderer &&
          typeof patchBranch[key] === "string"
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
    } else {
      // The matching renderer is a lazy component whose update merge has not
      // registered yet. Keep only the newest patch for this live branch and
      // replay it when the module declares ready.
      for (const pending of pendingDynamicUpdates) {
        if (pending[1] === liveBranch && pending[2] === rendererId) {
          pending[0] = patchBranch;
          return;
        }
      }
      installReadyUpdates();
      pendingDynamicUpdates.push([patchBranch, liveBranch, rendererId]);
    }
  }
}

/**
 * A request-derived `<if>`'s update dispatch (compiled from `core/if.ts`'s
 * "if" update merge): the branch outcome itself never client-constructs.
 * The SAME branch as the live scope's dispatches its content merge by
 * index -- an ordinary sparse patch, no user code. A CHANGED branch applies
 * a resumable fragment (see `applyFragment`) instead of building it from a
 * client-registered renderer graph, mirroring `_update_dynamic`'s hop
 * handling; a mismatch with no fragment entry fails loudly rather than
 * replaying content against the stale branch.
 */
export function _update_if(
  patch: Scope,
  live: Scope,
  rendererKey: string,
  branchKey: string,
  branchMerges?: (UpdateMerge | 0)[],
) {
  const newBranch = patch[rendererKey] as number;
  if (typeof newBranch !== "number") return;
  const patchBranch = patch[branchKey] as Scope | undefined;
  const liveBranch = live[branchKey] as Scope | undefined;
  const liveBranchIndex =
    (live[rendererKey] as number) ?? (liveBranch ? 0 : -1);

  if (liveBranchIndex !== newBranch) {
    if (newBranch === -1) {
      // The outcome went from a real branch to none: nothing to deliver
      // (no fragment ever ships for a removal), so just tear down the
      // stale live branch -- the same effect `setConditionalRenderer`'s
      // client-driven path has for a state-owned conditional.
      if (liveBranch) {
        removeAndDestroyBranch(liveBranch as BranchScope);
        live[branchKey] = undefined;
      }
      live[rendererKey] = newBranch;
      return;
    }

    const accessor = branchKey.slice(AccessorPrefix.BranchScopes.length);
    const fragment = patch[FRAGMENT_PREFIX + accessor] as
      FragmentEntry | undefined;
    if (fragment && patchBranch) {
      // The divergence point arrived as a fragment frame: swap the branch by
      // inserting the server-rendered subtree instead of client-constructing
      // it from a registered renderer graph. Consume the entry and stop --
      // its values are already baked into the html and its resume data has
      // initialized the new scopes.
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
    // Divergence is fragment-delivered, so a mismatch without a fragment
    // entry cannot apply -- fail loudly (the router falls back to a full
    // navigation) rather than dispatching the new content's merge against
    // the stale branch. A mismatch with no live branch has nothing to go
    // stale: adopt the new outcome so a later navigation compares right.
    if (liveBranch) {
      throw new Error(
        MARKO_DEBUG
          ? "A persisted update changed an <if> branch without a fragment entry; persisted pages do not construct divergent content client-side."
          : "update diverged",
      );
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

function isNativeDynamicBranch(branch: Scope, rendererId: string) {
  const start = branch[AccessorProp.StartNode];
  const end = branch[AccessorProp.EndNode];
  const element =
    start === end
      ? start
      : start?.nextSibling?.nextSibling === end
        ? start.nextSibling
        : undefined;
  return (
    element?.nodeType === 1 && (element as Element).localName === rendererId
  );
}

// ---- Fragment frames --------------------------------------------------
// (see designs/persisted-pages-architecture.md, "Fragment frames"). A fragment delivers a
// content-hop branch as resumable HTML -- values baked into the markup, resume
// markers and branch brackets included -- while its scope data rides the
// ordinary fills in the same patch id space. Applying is therefore: parse,
// walk the markers binding DOM refs onto the patch scopes (which join the live
// scope tree as-is), insert at the hop's anchor, swap the branch bookkeeping.
// Reserved accessor prefix "P" carries the entry on the anchor's patch scope.
const FRAGMENT_PREFIX = "P";

// A boundary-body entry stashed on the try's own patch scope (the object
// `_update_branch`'s `patchBranch` resolves to) so the compiled branch
// dispatch can apply it once pairing resolves the live branch -- see
// `applyBoundaryBody`. Bare reserved token (not a letter, so it never collides
// with an `AccessorProp`/`AccessorPrefix` key regardless of key length).
const PENDING_BODY_KEY = "!";

// The typed patch-key prefixes hole captures serialize under (mirrors of the
// translator's `getUpdateHolePrefix`/`getUpdateHtmlPrefix`/`getUpdateAttrPrefix`).
// Optimized keys are one char + accessor, so the bare single-char scope props
// that share those letters (`Q`/`R`/`N` in `AccessorProp`) are excluded by key
// length.
const HOLE_PREFIX = MARKO_DEBUG ? "UpdateHole:" : "Q";
const HTML_PREFIX = MARKO_DEBUG ? "UpdateHtml:" : "R";
const ATTR_PREFIX = MARKO_DEBUG ? "UpdateAttr:" : "N";
const CHILD_PREFIX = MARKO_DEBUG ? "UpdateChild:" : "S";

/**
 * The generic hole applier: places every typed hole capture a patch scope
 * carries against its paired live scope -- text holes (`UpdateHole:`),
 * unsafe-html holes (`UpdateHtml:`), attr holes/controllables
 * (`UpdateAttr:<name>:<accessor>`) -- and descends into update-generic child
 * scopes through their typed links (`UpdateChild:<accessor>`, serialized by
 * `_update_child` in update renders only), so server-only compositions need no
 * compiled dispatch at any level. Controllable semantics are recovered from
 * the live element: on their tags the controllable names always route through
 * the controllable carve-out, so `value` on an input is never a plain attr
 * hole. Fragment subtrees are inert here: their captures and child links are
 * suppressed server-side (values baked into the markup), so the shared
 * patch/live object carries no prefixed keys.
 */
export function _update_scope(patch: Scope, live: Scope) {
  for (const key in patch) {
    if (key.length > 1) {
      if (key.startsWith(HOLE_PREFIX)) {
        _text(live[key.slice(HOLE_PREFIX.length)], patch[key]);
      } else if (key.startsWith(HTML_PREFIX)) {
        _update_html(live, patch, key, key.slice(HTML_PREFIX.length));
      } else if (key.startsWith(CHILD_PREFIX)) {
        // The key only exists for children whose whole update module is
        // this interpreter, so recursing IS the child's merge (the live
        // link rides the plain accessor, from resume or the child's dom
        // setup).
        _update_scope(
          patch[key] as Scope,
          live[key.slice(CHILD_PREFIX.length)] as Scope,
        );
      } else if (key.startsWith(ATTR_PREFIX)) {
        const sep = key.indexOf(":", ATTR_PREFIX.length);
        const name = key.slice(ATTR_PREFIX.length, sep);
        const accessor = key.slice(sep + 1);
        const value = patch[key];
        if (name === "class") {
          _attr_class(live[accessor] as Element, value);
        } else if (name === "style") {
          _attr_style(live[accessor] as Element, value);
        } else if (name === "textContent") {
          _text_content(live[accessor] as Element, value);
        } else {
          const tag = (live[accessor] as Element).tagName;
          if (name === "value" && (tag === "INPUT" || tag === "TEXTAREA")) {
            const input = live[accessor] as HTMLInputElement;
            if (tag === "INPUT" && isFormMetadataInput(input)) {
              // This generic path applies a captured attr hole directly.
              // Metadata/button inputs are not user-editable state, so their
              // live value must follow the server-rendered attribute.
              _attr(input, "value", value);
            } else {
              _attr_input_value_default(live, accessor, value);
            }
          } else if (name === "value" && tag === "SELECT") {
            _attr_select_value_default(live, accessor, value);
          } else if (name === "checked" && tag === "INPUT") {
            _attr_input_checked_default(live, accessor, value);
          } else if (
            name === "open" &&
            (tag === "DETAILS" || tag === "DIALOG")
          ) {
            _attr_details_or_dialog_open_default(live, accessor, value);
          } else {
            _attr(live[accessor] as Element, name, value);
          }
        }
      }
    }
  }
}

function isFormMetadataInput(el: HTMLInputElement) {
  switch (el.type) {
    case "button":
    case "checkbox":
    case "hidden":
    case "image":
    case "radio":
    case "reset":
    case "submit":
      return true;
    default:
      return false;
  }
}

// Unsafe-html holes replace their DOM range unconditionally, so a streamed
// re-dispatch (each frame re-runs the root merge) must consume the patch key
// after applying. The patch key (`UpdateHtml:<accessor>`) is distinct from the
// node accessor the DOM range lives under.
export function _update_html(
  live: Scope,
  patch: Scope,
  key: string,
  accessor: string | number,
) {
  _html(live, patch[key], accessor as Accessor);
  delete patch[key];
}

/**
 * Applies a seed-mode state value, only into scopes created during this apply
 * (fresh subtrees cannot compute state whose initializers live behind
 * server-only expressions -- the seed IS the initial value), through the
 * binding's registered signal so downstream derivations recompute. Matched
 * (pre-existing) scopes keep their live state untouched.
 */
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

export function _update_for(
  nodeAccessor: string | number,
  contentId: string,
  merge: (branchScope: Scope, args: unknown[]) => void,
): UpdateSignal {
  let signal: UpdateSignal | undefined;
  return (scope, value) => {
    if (!signal) {
      const content = getRegisteredWithScope(contentId) as [any, any, any];
      signal = _for_of(
        nodeAccessor as string,
        content[0],
        content[1],
        content[2],
        merge as any,
      ) as UpdateSignal;
    }
    // Fragment subtrees share one object between patch and live scopes, so a
    // fragment-built loop's self-dispatch hands us the walker-bound live
    // branches as the "patch" list. There is nothing to reconcile -- and
    // reconciling is destructive for positional loops, whose walker branches
    // carry no keys (it would rebuild every branch from the registered template
    // against patch scopes). A live branch is recognizable by its bound start
    // node; fills-path patch branches are plain data objects.
    let branches = (value as unknown[])[0] as BranchScope[] | BranchScope;
    if (branches && !Array.isArray(branches)) {
      // A fragment-walked lone branch binds bare (resume-form, which the
      // shared scope must keep for the live loop signal); the fills path
      // always serializes arrays.
      branches = (value as unknown[])[0] = [branches] as BranchScope[];
    }
    if ((branches as BranchScope[])?.[0]?.[AccessorProp.StartNode]) {
      return;
    }
    signal(scope, value);
  };
}
