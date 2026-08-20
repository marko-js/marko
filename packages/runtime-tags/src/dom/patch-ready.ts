import { installPatchReady } from "./patch";
import { installReady, isReady, type RenderData } from "./resume";

const pending = new Map<RenderData, Map<string, unknown[]>>();
const resolves = new Map<RenderData, () => void>();
let installed: 0 | 1 = 0;

export function _patch_ready() {
  if (!installed) {
    installed = 1;
    installPatchReady(prepareReady, pendingReady);
    installReady(markReady);
  }
}

function prepareReady(render: RenderData, result: unknown) {
  if (!render.b || result !== render.b) return false;
  for (const readyId in render.b) {
    const batch = render.b[readyId];
    const deferred: unknown[] = [];
    for (let i = 0; i < batch.length; i++) {
      const partial = batch[i];
      if (typeof partial === "object") {
        if (isReady(readyId)) batch[i] = wrapPartial(partial);
        else deferred.push(partial);
      }
    }
    if (deferred.length) {
      batch.length = 0;
      let channels = pending.get(render);
      if (!channels) pending.set(render, (channels = new Map()));
      channels.set(readyId, deferred);
    }
  }
  return true;
}

function pendingReady(render: RenderData) {
  if (pending.has(render)) {
    return new Promise<void>((resolve) => resolves.set(render, resolve));
  }
}

function markReady(readyId: string) {
  for (const [render, channels] of pending) {
    const partials = channels.get(readyId);
    if (partials) {
      channels.delete(readyId);
      for (const partial of partials) {
        render.b![readyId].push(wrapPartial(partial));
      }
      if (!channels.size) {
        pending.delete(render);
        const resolve = resolves.get(render);
        resolves.delete(render);
        resolve?.();
      }
    }
  }
}

function wrapPartial(partial: unknown) {
  return ((ctx: (scopes: unknown[]) => unknown) => ctx([partial])) as never;
}
