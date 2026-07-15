// Client runtime for persisted (single-page server-first) updates.
//
// `createUpdate` is the merge driver (consumed through `createPatch` in
// src/dom-persisted.ts): it deserializes a patch render's payload (plain
// resume-format fills, patch-local scope ids) through a patch-aware variant
// of resume's serialize context, merges the patch `$global` partial onto the
// live one, dispatches the page's compiled merge function (`?update` module
// default export) against the live root scope, and flushes the render queue
// so intersections/closures the merge triggered settle before the navigation
// completes. The compiled merges the dispatch runs -- the `_update_*` family
// -- live in ./update-merges.ts, along with the per-navigation applier
// context this module wires through `beginApply`/`endApply` and the parked
// tables it resets per navigation.
import { AccessorProp, type Scope } from "../common/types";
import { refreshEffects, run, runEffects, runId, setUpdating } from "./queue";
import {
  bumpNavEpoch,
  getRegisteredWithScope,
  getUpdateRoot,
  isReady,
  registeredValues,
} from "./resume";
import type { FragmentContext } from "./update-fragment";
import {
  beginApply,
  type BoundaryBodyEntry,
  drainBatchFills,
  endApply,
  FRAGMENT_PREFIX,
  type FragmentEntry,
  installReadyUpdates,
  type ParkedReadyBatch,
  parkedReadyBatches,
  PENDING_BODY_KEY,
  pendingDynamicUpdates,
  pendingLoadUpdates,
} from "./update-merges";

// A lazy module's resume batch, keyed by the module's asset/ready id
// (written by `writeReady`'s patch-mode branch in html/writer.ts; grammar in
// designs/persisted-pages-wire-format.md, "Ready batches"). Parked until the
// module declares ready, like a document's blocking `.b` channel; arrival
// also fires the module's registered load trigger (see `_load_ready` in
// ./update-merges.ts).
type ReadyBatchEntry = [readyId: string, ...fills: unknown[]];
type UpdateFill =
  | ((
      ctx: (data: number | (Scope | number)[], registryId?: string) => unknown,
    ) => unknown)
  // Effect entries ("registryId scopeId …", patch-local scope ids): executed
  // only against scopes freshly created during the apply — a matched live
  // scope's effects already ran at mount.
  | string
  // Fragment entries: the diverging branch at a site delivered as resumable
  // HTML (see designs/persisted-pages-wire-format.md, "Fragment entries").
  | FragmentEntry
  | BoundaryBodyEntry
  | ReadyBatchEntry;

/**
 * Applies a patch render's payload to a live (resumed) render, one serializer
 * frame at a time: patch responses are a stream of frames, and the returned
 * function applies one frame's fills against a shared patch-scope space, so
 * early frames settle before slow async boundaries resolve. Each call
 * re-dispatches the root merge: sparse presence checks pick up the keys the
 * new frame added (later frames extend earlier scopes, e.g. an `<await>`
 * body's branch link), while already-applied keys re-apply through value/DOM
 * primitives that no-op on unchanged input.
 *
 * `merge` is the page template's compiled merge function (the `?update`
 * module's default export) and `liveRoot` the live scope it pairs with
 * (defaults to the first render's root). The patch root is scope 1 by
 * convention (the first scope the patch render allocates -- the root
 * template's); patch scopes are plain objects in a patch-local id space, and
 * `_(id, registryId)` references resolve against them as resume fills do.
 * Scope 0 partials are the patch's `$global` values and merge onto the live
 * `$global`.
 */
export function createUpdate(
  merge: (patch: Scope, live: Scope) => void,
  liveRoot = getUpdateRoot(),
) {
  if (MARKO_DEBUG && !liveRoot) {
    throw new Error(
      "createUpdate could not pair a live root scope (is the page resumed?)",
    );
  }
  // Epoch-gate the navigated render's reorder runtime (see `bumpNavEpoch`)
  // before any frame applies, so a still-pending reorder chunk captured
  // before this navigation is dropped whole -- landing no pre-navigation
  // content in (and deleting no live DOM from) the post-navigation page.
  // Scoped by the live root's `$global`: an unrelated embedded render's
  // pending await swap must survive this navigation.
  bumpNavEpoch(liveRoot![AccessorProp.Global]);
  // Parked applier state is per navigation: a lazy module finishing after a
  // LATER navigation starts must not replay this navigation's parked patch
  // data (matched scopes survive navigations with truthy generations, so the
  // replay gates alone cannot catch it).
  pendingLoadUpdates.length =
    pendingDynamicUpdates.length =
    parkedReadyBatches.length =
      0;
  const liveGlobal = liveRoot![AccessorProp.Global] as unknown as Scope;
  const patchScopes: Record<number, Scope> = { 0: liveGlobal };
  const getScope = (id: number) => (patchScopes[id] ||= {} as Scope);
  const applyScopes = (partials: (Scope | number)[]) => {
    // Patch renders omit the fixed root id 1 as an array hole. Global
    // fills still carry 0, and sparse/delta slots retain the normal grammar.
    let scopeId = partials[0] === undefined ? 1 : (partials[0] as number);
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
          ? // Patch payloads may reference registrations the build
            // intentionally dropped: persisted builds ship no divergent content
            // renderers (divergence arrives as fragment entries), yet a matched
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
  const update: FragmentContext = {
    getScope,
    stamp,
    // Adopt a live scope AS a patch id (`applyBoundaryBody`'s matched path):
    // the walk then binds refs onto it and later frames' scope data merges
    // onto it directly -- the fragment-subtree model ("patch scope IS live
    // scope") applied to a boundary that matched.
    adopt: (id, scope) => (patchScopes[id] = scope),
  };

  // Applies one of a parked lazy-module batch's fills against THIS apply's
  // patch-scope space when `ready()` replays it. Replayed effect entries run
  // only against scopes with live identity (fragment/boundary-stamped
  // subtrees; matched patch scopes never get one, matching the main effect
  // loop's pairing gate) and skip destroyed subtrees (`Gen` zeroed).
  const applyBatchFill = (fill: unknown) => {
    if (typeof fill === "string") {
      const effects: unknown[] = [];
      collectEffects(fill, effects, (id) => {
        const scope = patchScopes[id];
        return scope && scope[AccessorProp.Gen] && scope;
      });
      runEffects(effects);
    } else {
      const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
      if (Array.isArray(scopes)) applyScopes(scopes);
    }
  };

  // A lazy module's keyed resume batch (see `ReadyBatchEntry`). Module already
  // ready: drain inline -- scope data lands before this frame's merge dispatch
  // reads it, and effect entries join the frame's ordinary gated effect path
  // (which runs after the merge walked any fragment markup and bound node
  // refs). Still loading: park the batch and fire the module's registered load
  // trigger (`_load_ready`).
  const processBatch = (entry: ReadyBatchEntry, effectEntries: string[]) => {
    const batch: ParkedReadyBatch = {
      id: entry[0],
      fills: entry.slice(1),
      apply: applyBatchFill,
    };
    if (isReady(batch.id)) {
      drainBatchFills(batch, (fill) => {
        if (typeof fill === "string") {
          effectEntries.push(fill);
        } else {
          applyBatchFill(fill);
        }
      });
      if (!batch.fills.length) return;
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
    // Boundary merges may flush mid-apply (`_update_branch`'s retry for
    // same-frame fresh creations), advancing `runId` -- "created during
    // this apply" means any run window from here on (`applyGen`, returned
    // as the floor for the effect gating below).
    const applyGen = beginApply(pairs, update);
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
          collectEffects(entry, effects, (id, fn) => {
            const live = pairs.get(patchScopes[id]);
            return (
              live &&
              (live[AccessorProp.Gen] >= applyGen ||
                // `$global`-referencing effects re-run on matched scopes
                // too: every apply refreshes their source (see
                // `_script_refresh` in ./queue).
                (live[AccessorProp.Gen] &&
                  refreshEffects.has(fn as (scope: Scope) => void))) &&
              live
            );
          });
        }
        runEffects(effects);
      }

      // Merges queue renders (intersections, closure fan-out, branch
      // setups); flush synchronously so each frame settles as one batch.
      run();
    } finally {
      setUpdating(0);
      endApply();
    }
  };
}

// The "registryId scopeId …" effect-token grammar shared with document
// resumes (`processResumes` in dom/resume.ts); `resolve` gates which live
// scope (if any) a patch-local id pairs with.
function collectEffects(
  entry: string,
  effects: unknown[],
  resolve: (id: number, fn: unknown) => Scope | undefined | 0 | false,
) {
  let fn: unknown;
  for (const token of entry.split(" ")) {
    if (/\D/.test(token)) {
      fn = registeredValues[token];
    } else if (fn) {
      const scope = resolve(+token, fn);
      if (scope) effects.push(fn, scope);
    }
  }
}
