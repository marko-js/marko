// Applies streamed persisted-page frames to resumed client scopes.
import { AccessorProp, type Scope } from "../common/types";
import { refreshEffects, setUpdating } from "./persisted-queue";
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
  drainBatchFills,
  endApply,
  drainConstructClears,
  installReadyUpdates,
  type ParkedReadyBatch,
  parkedReadyBatches,
  pendingBatchEffects,
  pendingDynamicUpdates,
  pendingLoadUpdates,
  registerShell,
  setUpdateFail,
} from "./update-merges";

// A lazy module's fills, parked until its ready id registers.
type ReadyBatchEntry = [readyId: string, ...fills: unknown[]];
type UpdateFill =
  | ((
      ctx: (data: number | (Scope | number)[], registryId?: string) => unknown,
    ) => unknown)
  // Effects run only for scopes created by this apply.
  | string
  | ReadyBatchEntry
  // A section's values-free shell.
  | [0, id: string, template: string, walks: string];

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
  // Discard lazy work parked by the previous navigation.
  pendingLoadUpdates.length =
    pendingDynamicUpdates.length =
    parkedReadyBatches.length =
      0;
  setUpdateFail(fail);
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
          ? (getRegisteredWithScope(registryId, getScope(data)) as unknown)
          : getScope(data)
        : applyScopes(data),
    // Fills reference registered values directly as `_._[id]`.
    { _: registeredValues },
  );

  const pairs = new Map<Scope, Scope>();

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
    const effectEntries: string[] = [];
    for (const fill of Array.isArray(fills) ? fills : [fills]) {
      if (typeof fill === "string") {
        effectEntries.push(fill);
      } else if (Array.isArray(fill)) {
        if (typeof fill[0] === "string") {
          // Keyed lazy resume batch.
          processBatch(fill as ReadyBatchEntry, effectEntries);
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
    try {
      // Compiled dispatch applies bodies after resolving their live pairing.
      merge(getScope(1), liveRoot!);

      // Only fresh live pairs run payload effects.
      if (effectEntries.length) {
        const effects: unknown[] = [];
        for (const entry of effectEntries) {
          collectEffects(entry, effects, (id, fn) => {
            const live = pairs.get(patchScopes[id]);
            return (
              live &&
              (live[AccessorProp.Gen] >= applyGen ||
                // Global effects refresh matched scopes on every apply.
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
      drainConstructClears();
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
