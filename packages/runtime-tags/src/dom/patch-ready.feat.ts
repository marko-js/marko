import { READY_FRAME_VAR } from "../common/meta";
import { applyReadyPatch, frameVars, installPatchReady } from "./patch";
import {
  installReady,
  isReady,
  patchRender,
  type RenderData,
  type ResumeFn,
} from "./resume";

interface Pending {
  // Deferred frame entries by ready channel, in frame arrival order.
  c: Map<string, unknown[]>;
  // Every `applyPatch` promise awaiting this render's channels.
  r: ((applied: boolean) => void)[];
  renderId: string;
  runtimeId: string;
}
const pending = new Map<RenderData, Pending>();

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a lazy load import in a persisted build.
frameVars[READY_FRAME_VAR] = acceptReady;
installPatchReady(pendingReady, discardReady);
installReady(markReady, failReady);

// Receives a frame's ready-channel record (an explicit call in the frame
// text): data for a loaded channel merges into the live render's ready
// record for this frame's run; the rest waits for its module.
// Live-record pushes of the frame being applied (alternating batch,
// prior length), undone if it rejects.
const framePushes: (unknown[] | number)[] = [];

function acceptReady(record: Record<string, unknown[]>) {
  const render = patchRender as RenderData;
  framePushes.length = 0;
  for (const readyId in record) {
    if (failed.has(readyId)) throw 0;
    if (isReady(readyId)) {
      pushBatch(render, readyId, record[readyId]);
    } else {
      let entry = pending.get(render);
      if (!entry) {
        pending.set(
          render,
          (entry = { c: new Map(), r: [], renderId: "", runtimeId: "" }),
        );
      }
      const deferred = entry.c.get(readyId);
      if (deferred) {
        // A later frame's entries append: they re-ship full state, so
        // in-order application leaves the newest frame's values live.
        deferred.push(...record[readyId]);
      } else {
        entry.c.set(readyId, record[readyId]);
      }
    }
  }
}

// Appends a frame batch to the live ready record without disturbing the
// initial page's still-pending resume data for that channel. Scope
// partials get the patch-apply wrapper; gates (arrays/numbers) and effect
// strings keep their native resume handling.
function pushBatch(render: RenderData, readyId: string, batch: unknown[]) {
  const target = ((render.b ??= {})[readyId] ??= []);
  framePushes.push(target, target.length);
  for (const partial of batch) {
    target.push(
      typeof partial === "object" && partial && !Array.isArray(partial)
        ? wrapPartial(partial)
        : (partial as (typeof target)[number]),
    );
  }
}

function pendingReady(render: RenderData, renderId: string, runtimeId: string) {
  const entry = pending.get(render);
  if (entry) {
    entry.renderId = renderId;
    entry.runtimeId = runtimeId;
    return new Promise<boolean>((resolve) => entry.r.push(resolve));
  }
}

function markReady(readyId: string) {
  for (const [render, entry] of pending) {
    if (entry.c.has(readyId) && [...entry.c.keys()].every(isReady)) {
      pending.delete(render);
      settle(
        entry,
        applyReadyPatch(entry.renderId, entry.runtimeId, (render) => {
          for (const [id, batch] of entry.c) pushBatch(render, id, batch);
        }),
      );
    }
  }
}

// A dead channel can never make its server content whole: pending appliers
// settle rejected (their caller navigates) and later frames naming it reject.
const failed = new Set<string>();
function failReady(readyId: string) {
  failed.add(readyId);
  for (const [render, entry] of pending) {
    if (entry.c.has(readyId)) {
      pending.delete(render);
      settle(entry, false);
    }
  }
}

function discardReady(render: RenderData) {
  // A rejected frame's channel pushes must not survive to a later run;
  // truncating is exact unless the batch was partially consumed mid-run —
  // then the caller is navigating anyway and dropping the rest is safe.
  while (framePushes.length) {
    const length = framePushes.pop() as number;
    const batch = framePushes.pop() as unknown[];
    if (batch.length > length) batch.length = length;
  }
  const entry = pending.get(render);
  if (entry) {
    pending.delete(render);
    settle(entry, false);
  }
}

function settle(entry: Pending, applied: boolean) {
  for (const resolve of entry.r) resolve(applied);
}

function wrapPartial(partial: unknown): ResumeFn {
  return (ctx) => ctx([partial as never]);
}
