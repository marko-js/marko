import {
  AccessorProp,
  PatchKey,
  RenderDataProp,
  type Scope,
} from "../../common/types";
import "./write.feat";
import { pendingEffects, queueEffect, runId } from "../queue";
import { _resumed } from "../resume";
import { readChanged, patchers, renderData } from "./apply";
import "./marked-write.feat";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Effect]: string;
    [PatchKey.QueuedEffect]: string;
  }
}

// Keyed by effect id, valued by the writes it depends on: a scope this flush created
// queues it as it mounts; a live one re-runs it once one of them changed.
patchers[PatchKey.Effect] = (scope, id, reads) => {
  if (scope[AccessorProp.Gen] === runId) {
    queueEffect(scope, _resumed[id] as (scope: Scope) => void);
  } else {
    patchers[PatchKey.QueuedEffect]!(scope, id, reads);
  }
};
// Checked as effects run, against the batch this flush's renders filled, so it runs
// at most once per patch: one they queued already runs.
patchers[PatchKey.QueuedEffect] = (scope, id, reads) => {
  if (scope[AccessorProp.Gen] !== runId) {
    const stop = renderData[RenderDataProp.PatchStop];
    const batch = pendingEffects as unknown[] & {
      [QueuedEffects]?: Map<unknown, Set<unknown>>;
    };
    let queued = batch[QueuedEffects];
    if (!queued) {
      // One pass indexes the checked effects ahead of the batch's first check,
      // by when the batch is complete.
      queued = batch[QueuedEffects] = new Map();
      queueEffect(scope, (_: Scope) => {
        for (let i = 0; i < batch.length; i += 2) {
          queued!.get(batch[i])?.add(batch[i + 1]);
        }
      });
    }
    const fn = _resumed[id] as (scope: Scope) => void;
    const scopes = queued.get(fn) || new Set();
    queued.set(fn, scopes);
    queueEffect(scope, (scope: Scope) => {
      if (readChanged(scope, reads, stop) && !scopes.has(scope)) {
        fn(scope);
      }
    });
  }
};

// The scopes each effect a check names was queued for in the batch, kept on the
// batch (released with it), so each check is constant time.
const QueuedEffects = "q";
