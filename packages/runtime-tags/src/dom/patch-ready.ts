import { READY_FRAME_VAR } from "../common/meta";
import { applyReadyPatch, frameVars, installPatchReady } from "./patch";
import {
  getPatchRender,
  installReady,
  isReady,
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
let installed: 0 | 1 = 0;

export function _patch_ready() {
  if (!installed) {
    installed = 1;
    frameVars[READY_FRAME_VAR] = acceptReady;
    installPatchReady(pendingReady, discardReady);
    installReady(markReady, failReady);
  }
}

// Receives a frame's ready-channel record (an explicit call in the frame
// text): data for a loaded channel merges into the live render's ready
// record for this frame's run; the rest waits for its module.
function acceptReady(record: Record<string, unknown[]>) {
  const render = getPatchRender();
  for (const readyId in record) {
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
    const deferred = entry.c.get(readyId);
    if (deferred) {
      entry.c.delete(readyId);
      pushBatch(render, readyId, deferred);
      if (!entry.c.size) {
        pending.delete(render);
        settle(entry, applyReadyPatch(entry.renderId, entry.runtimeId));
      }
    }
  }
}

function failReady() {
  for (const entry of pending.values()) settle(entry, false);
  pending.clear();
}

function discardReady(render: RenderData) {
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
