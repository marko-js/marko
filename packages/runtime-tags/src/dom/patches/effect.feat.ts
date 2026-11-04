import {
  AccessorProp,
  PatchKey,
  RenderDataProp,
  type Scope,
} from "../../common/types";
import "./write.feat";
import { pendingEffects, queueEffect, runId } from "../queue";
import { _resumed } from "../resume";
import { patchers, renderData } from "./apply";
import "./marked-write.feat";
import { filledReferences } from "./signals";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Effect]: string;
    [PatchKey.QueuedEffect]: string;
  }
}

// A scope's effects by id, or those its render queued: one this flush created queues
// each as it mounts; a live one re-runs each once one of its filled references changed.
patchers[PatchKey.Effect] = patchEffects;
patchers[PatchKey.QueuedEffect] = (scope, _, ids) =>
  patchEffects(scope, _, ids, 1);

// A live scope's are checked as effects run, against the batch this flush's renders
// filled, so each runs at most once per patch: one they queued already runs.
function patchEffects(scope: Scope, _: string, ids: string, queued?: 1) {
  const stop = renderData[RenderDataProp.PatchStop];
  for (let end = ids.length, start; ~end; end = start) {
    const id = ids.slice((start = ids.lastIndexOf(" ", end - 1)) + 1, end);
    const fn = _resumed[id] as (scope: Scope) => void;
    if (scope[AccessorProp.Gen] !== runId) {
      const batch = pendingEffects as unknown[] & {
        [QueuedEffects]?: Map<unknown, Set<unknown>>;
      };
      let index = batch[QueuedEffects];
      if (!index) {
        // One pass indexes the checked effects ahead of the batch's first check,
        // by when the batch is complete.
        index = batch[QueuedEffects] = new Map();
        queueEffect(scope, (_: Scope) => {
          for (let i = 0; i < batch.length; i += 2) {
            index!.get(batch[i])?.add(batch[i + 1]);
          }
        });
      }
      const scopes = index.get(fn) || new Set();
      index.set(fn, scopes);
      queueEffect(scope, (scope: Scope) => {
        if (!scopes.has(scope) && filledReferences[id]!(scope, stop)) {
          fn(scope);
        }
      });
    } else if (!queued) {
      queueEffect(scope, fn);
    }
  }
}

// The scopes each effect a check names was queued for in the batch, kept on the
// batch (released with it), so each check is constant time.
const QueuedEffects = "q";
