// Applies streamed persisted-page frames to resumed client scopes.
import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  type Scope,
} from "../common/types";
import { refreshEffects, replayRefresh, setUpdating } from "./persisted-queue";
import { run, runEffects, runId } from "./queue";
import {
  bumpNavEpoch,
  getRegisteredWithScope,
  getUpdateRoot,
  isReady,
  registeredValues,
} from "./resume";
import {
  beginApply,
  markHeldAnchor,
  registerGroupAnchor,
  drainBatchFills,
  endApply,
  drainConstructClears,
  installReadyUpdates,
  type ParkedReadyBatch,
  parkedReadyBatches,
  pendingBatchEffects,
  pendingDynamicUpdates,
  pendingLoadUpdates,
  failGroupResolution,
  markGroupDelivered,
  markParkedDiscarded,
  registerShell,
  latchUnwind,
  setApplying,
  updateDidFail,
  resolveGroupAnchor,
  resolveGroupDispatch,
  setUpdateFail,
} from "./update-merges";

// A lazy module's fills, parked until its ready id registers.
type ReadyBatchEntry = [readyId: string, ...fills: unknown[]];
// A missed value group's dispatch: merge its (already applied) fills into
// the live branch registered under its key.
type GroupEntry = [1, key: string, branchScopeId: number];
// Identity pairings for HIT (elided) groups this response references:
// response-local placeholder scope ids paired to live anchors by key.
type PairTableEntry = [2, ...(number | string)[]];
type UpdateFill =
  | ((
      ctx: (data: number | (Scope | number)[], registryId?: string) => unknown,
    ) => unknown)
  // Effects run only for scopes created by this apply.
  | string
  | ReadyBatchEntry
  | GroupEntry
  | PairTableEntry
  // A section's values-free shell.
  | [0, id: string, template: string, walks: string];

/** A branch-record fill whose conditional selection disagrees with the
 * live scope's: the server rendered one branch while the client shows
 * another. */
function selectionMismatch(
  key: string,
  patchScope: Scope,
  partial: Scope,
  live: Scope,
) {
  if (!key.startsWith(AccessorPrefix.BranchScopes)) return false;
  const rendererKey =
    AccessorPrefix.ConditionalRenderer +
    key.slice(AccessorPrefix.BranchScopes.length);
  const patchRenderer = (rendererKey in partial ? partial : patchScope)[
    rendererKey
  ];
  return (
    patchRenderer !== undefined && patchRenderer !== (live[rendererKey] ?? 0)
  );
}

// Patch content channels route to a paired live record: a settle frame's
// replay walk re-dispatches the live branch as its own patch side, so
// holes, attrs, and the group key must be readable there. Everything else
// stays in patch space — state props are seed-gated (client ownership)
// and structural fills gate the walk's dispatch decisions.
const isRoutedFill = (key: string) =>
  key.startsWith(AccessorPrefix.PatchHole) ||
  key.startsWith(AccessorPrefix.PatchAttr) ||
  key.startsWith(AccessorPrefix.PatchHtml) ||
  key.startsWith(AccessorPrefix.PatchApplied) ||
  key === AccessorProp.GroupKey;

/** Creates an applier sharing patch scopes across streamed frames. */
export function createUpdate(
  merge: (patch: Scope, live: Scope) => void,
  fail?: (error: unknown) => void,
) {
  const liveRoot = getUpdateRoot();
  if (MARKO_DEBUG && !liveRoot) {
    throw new Error(
      "createUpdate could not pair a live root scope (is the page resumed?)",
    );
  }
  // Invalidate pending reorders only for the navigated render.
  bumpNavEpoch(liveRoot![AccessorProp.Global]);
  // Discard lazy work parked by the previous navigation. Anything thrown
  // away here was claimed but never applied.
  markParkedDiscarded();
  pendingLoadUpdates.length =
    pendingDynamicUpdates.length =
    parkedReadyBatches.length =
      0;
  setUpdateFail(fail);
  const liveGlobal = liveRoot![AccessorProp.Global] as unknown as Scope;
  const patchScopes: Record<number, Scope> = { 0: liveGlobal };
  // Scope shells this navigation minted: a shell-valued fill is structural
  // under ANY key (child scopes ride plain accessors).
  const shells = new WeakSet<Scope>();
  const getScope = (id: number) => {
    let scope = patchScopes[id];
    if (!scope) shells.add((scope = patchScopes[id] = {} as Scope));
    return scope;
  };
  const applyScopes = (partials: (Scope | number)[]) => {
    let scopeId = partials[0] as number;
    for (let i = 1; i < partials.length; i++) {
      const partial = partials[i];
      if (typeof partial === "number") {
        scopeId += partial;
      } else {
        if (scopeId) {
          const existing = patchScopes[scopeId];
          const liveTarget =
            existing &&
            ((existing[AccessorProp.Gen] ? existing : pairs.get(existing)) as
              | Scope
              | undefined);
          let scope: Scope;
          if (liveTarget) {
            // Live (adopted or paired) target: patch content fills route
            // to the live record, and a structural ref to a plain patch
            // shell pairs to the live record it names instead of
            // replacing it.
            const adopted = existing === liveTarget;
            scope = existing;
            for (const key in partial as Scope) {
              const next = (partial as Scope)[key];
              // Patch space stays coherent: later fills read siblings
              // through `_(n)` references into the shell.
              if (!adopted) existing[key] = next;
              if (
                next &&
                typeof next === "object" &&
                shells.has(next as Scope) &&
                !(next as Scope)[AccessorProp.Gen]
              ) {
                const prev = liveTarget[key] as Scope | undefined;
                if (
                  prev &&
                  prev[AccessorProp.Gen] &&
                  // A stale record (its branch destroyed by an earlier
                  // update) is not a pairing target.
                  (prev as BranchScope)[AccessorProp.StartNode]?.isConnected !==
                    false
                ) {
                  // A branch record names a SELECTION, so pairing is only
                  // sound when both sides selected the same renderer: a
                  // client-owned conditional showing the other branch must
                  // not have the server's branch aliased onto its live
                  // record (fills would route through it, and its group
                  // anchor would rebind). Those fills stay in patch space
                  // for the branch merge to park or apply.
                  if (!selectionMismatch(key, existing, partial, liveTarget)) {
                    pairs.set(next as Scope, prev);
                  }
                } else if (adopted) {
                  // Adopted patch space records the shell ref itself; a
                  // paired live record never takes a bare shell.
                  liveTarget[key] = next;
                }
                continue;
              }
              if (adopted || isRoutedFill(key)) liveTarget[key] = next;
            }
          } else {
            scope = patchScopes[scopeId] = Object.assign(
              existing || (partial as Scope),
              partial,
            );
            shells.add(scope);
          }
          if (AccessorProp.GroupKey in (partial as Scope)) {
            // A key arriving on a paired plain shell names the LIVE
            // branch the shell stands for.
            registerGroupAnchor(liveTarget || scope);
          }
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
          ? (getRegisteredWithScope(registryId, getScope(data)) as unknown)
          : getScope(data)
        : applyScopes(data),
    // Fills reference registered values directly as `_._[id]`.
    { _: registeredValues },
  );

  const pairs = new Map<Scope, Scope>();
  // Effect entries whose scopes had not paired when their line applied:
  // under completion-line dispatch a scope can arrive (and run its
  // effects) lines before the dispatch that constructs or pairs it.
  const carriedEffects: string[] = [];
  // A failed group dispatch surfaced through the transport sink; the
  // carrier is replacing the document, so later lines must not apply.
  let failedNav: boolean | undefined;
  // While a line is being processed, batch group dispatches join its
  // dispatch phase (inside beginApply, after pair priming) instead of
  // running inline.
  let lineGroupEntries: GroupEntry[] | undefined;

  // The root scope's id is protocol-fixed at 1; every other reference
  // into a hit (elided) group pairs by identity through the response's
  // [2, …] anchor table.
  const primePairs = () => {
    const rootPatch = patchScopes[1];
    if (rootPatch && !rootPatch[AccessorProp.Gen] && !pairs.has(rootPatch)) {
      pairs.set(rootPatch, liveRoot!);
    }
  };

  // Replayed lazy fills retain this navigation's patch scope space. Effect
  // entries defer until parked dispatch pairs constructed branches.
  const applyBatchFill = (fill: unknown) => {
    if (typeof fill === "string") {
      const runBatchEffects = () => {
        const effects: unknown[] = [];
        collectEffects(fill, effects, (id) => {
          const scope = patchScopes[id];
          // Constructed (adopted) patch scopes are live; matched scopes
          // resolve to their paired live scope.
          const live =
            scope && (scope[AccessorProp.Gen] ? scope : pairs.get(scope));
          return live && live[AccessorProp.Gen] && live;
        });
        runEffects(effects);
      };
      if (pendingBatchEffects) pendingBatchEffects.push(runBatchEffects);
      else runBatchEffects();
    } else if (Array.isArray(fill) && fill[0] === 1) {
      if (lineGroupEntries) {
        // A ready batch draining inline joins its line's dispatch phase.
        lineGroupEntries.push(fill as GroupEntry);
      } else {
        // A lazy group's parked dispatch (running inside the ready-update
        // flush, which restores this navigation's pairs): its fills —
        // earlier in the batch — are already in patch space. The root
        // group dispatches through the navigation's own merge.
        const [, key, scopeId] = fill as GroupEntry;
        if (key === "0") {
          merge(getScope(1), liveRoot!);
        } else {
          const dispatch = resolveGroupDispatch(key);
          if (dispatch) dispatch[0](getScope(scopeId), dispatch[1]);
          else failedNav = true;
        }
      }
    } else {
      const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
      if (Array.isArray(scopes)) applyScopes(scopes);
    }
  };

  // Drain ready batches inline; otherwise park them and start their loader.
  const processBatch = (entry: ReadyBatchEntry, effectEntries: string[]) => {
    const batch: ParkedReadyBatch = [entry[0], entry.slice(1), applyBatchFill];
    if (isReady(batch[0])) {
      drainBatchFills(batch, (fill) => {
        if (typeof fill === "string") {
          effectEntries.push(fill);
        } else {
          applyBatchFill(fill);
        }
      });
      if (!batch[1].length) return;
      installReadyUpdates();
      parkedReadyBatches.push(batch);
    } else {
      installReadyUpdates();
      parkedReadyBatches.push(batch);
      (registeredValues[batch[0]] as undefined | (() => void))?.();
    }
  };

  // A bare (non-array) frame value can only be a merge fill or effect entry.
  return (fills: UpdateFill[] | Exclude<UpdateFill, ReadyBatchEntry>) => {
    // A failure latched anywhere in the applier (unknown renderer, dead
    // anchor, unbuildable boundary) ends this navigation: the transport is
    // replacing the document, and further frames must not mutate the page.
    if (failedNav || updateDidFail()) return;
    const effectEntries: string[] = [];
    const pairEntries: PairTableEntry[] = [];
    const groupEntries: GroupEntry[] = (lineGroupEntries = []);
    for (const fill of Array.isArray(fills) ? fills : [fills]) {
      if (updateDidFail()) break;
      if (typeof fill === "string") {
        effectEntries.push(fill);
      } else if (Array.isArray(fill)) {
        if (typeof fill[0] === "string") {
          // Keyed lazy resume batch.
          processBatch(fill as ReadyBatchEntry, effectEntries);
        } else if (fill[0] === 1) {
          groupEntries.push(fill as GroupEntry);
        } else if (fill[0] === 2) {
          pairEntries.push(fill as PairTableEntry);
        } else {
          // A section's values-free [template, walks] for client construction.
          registerShell(
            fill[1] as string,
            fill[2] as string,
            fill[3] as string,
          );
        }
      } else {
        const scopes = (fill as (ctx: unknown) => unknown)(serializeContext);
        if (Array.isArray(scopes)) applyScopes(scopes);
      }
    }

    // `runId` is also the apply-generation floor the queue's effect gate
    // reads (matched scopes carry older stamps).
    setUpdating(1, runId);
    // Boundary retries may advance `runId`, so retain this generation floor.
    const applyGen = beginApply(pairs);
    setApplying(1);
    try {
      // Identity pairings install before any dispatch: each table entry
      // pairs this response's placeholder for a hit group's anchor scope
      // to the live branch registered under its key. A dead anchor fails
      // the navigation whole — the claim promised content the page no
      // longer holds.
      for (const table of pairEntries) {
        for (let i = 1; i < table.length; i += 2) {
          const anchor = resolveGroupAnchor(table[i + 1] as string);
          if (!anchor) {
            failGroupResolution(table[i + 1] as string);
            failedNav = true;
            return;
          }
          pairs.set(getScope(table[i] as number), anchor);
          markHeldAnchor(anchor);
        }
      }
      if (groupEntries.length) {
        // A completion line replaces the root walk with its dispatch
        // list: every fill above is already in patch space, so each
        // missed group merges order-independently into its live anchor.
        // Resolve everything before dispatching anything — a missing
        // anchor or merge fails the navigation whole, never mid-line.
        const dispatches: [
          merge: (patch: Scope, live: Scope) => void,
          patch: Scope,
          live: Scope,
        ][] = [];
        for (const [, key, scopeId] of groupEntries) {
          markGroupDelivered(key);
          if (key === "0") {
            dispatches.push([merge, getScope(1), liveRoot!]);
          } else {
            const dispatch = resolveGroupDispatch(key);
            if (!dispatch) {
              failedNav = true;
              return;
            }
            dispatches.push([dispatch[0], getScope(scopeId), dispatch[1]]);
          }
        }
        primePairs();
        for (const dispatch of dispatches) {
          if (updateDidFail()) return void (failedNav = true);
          dispatch[0](dispatch[1], dispatch[2]);
        }
      } else {
        // A walk delivery reaches the root group and everything under it.
        markGroupDelivered("0");
        merge(getScope(1), liveRoot!);
      }

      // Only fresh live pairs run payload effects. An entry whose scope
      // has no live resolution yet is carried to the navigation's next
      // line — its dispatch may not have run yet.
      if (updateDidFail()) return;
      effectEntries.unshift(...carriedEffects.splice(0));
      {
        const effects: unknown[] = [];
        const executed = new Map<unknown, Set<Scope>>();
        const push = (fn: unknown, live: Scope) => {
          effects.push(fn, live);
          let scopes = executed.get(fn);
          if (!scopes) executed.set(fn, (scopes = new Set()));
          scopes.add(live);
        };
        for (const entry of effectEntries) {
          let fnToken: string | undefined;
          let fn: unknown;
          for (const token of entry.split(" ")) {
            if (/\D/.test(token)) {
              fnToken = token;
              fn = registeredValues[token];
            } else if (fn) {
              const scope = patchScopes[+token];
              const live =
                scope && (scope[AccessorProp.Gen] ? scope : pairs.get(scope));
              if (live) {
                if (
                  live[AccessorProp.Gen] >= applyGen ||
                  // Global effects refresh matched scopes on every apply;
                  // running one arms its page-lifetime replay binding.
                  (live[AccessorProp.Gen] &&
                    refreshEffects.has(fn as (scope: Scope) => void))
                ) {
                  push(fn, live);
                }
              } else {
                carriedEffects.push(fnToken + " " + token);
              }
            }
          }
        }
        replayRefresh(
          liveGlobal,
          (fn, scope) => !!executed.get(fn)?.has(scope),
          push,
        );
        runEffects(effects);
      }

      // Merges queue renders (intersections, closure fan-out, branch
      // setups); flush synchronously so each frame settles as one batch.
      run();
    } catch (error) {
      // A latch mid-merge unwinds the whole frame; anything else is real.
      if (error !== latchUnwind) throw error;
      failedNav = true;
    } finally {
      setApplying(0);
      lineGroupEntries = undefined;
      if (!updateDidFail()) drainConstructClears();
      setUpdating(0);
      endApply();
    }
  };
}

// Parses the effect-token grammar shared with document resumes.
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
