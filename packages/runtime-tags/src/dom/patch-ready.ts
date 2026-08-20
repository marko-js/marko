import { installPatchReady } from "./patch";
import type { RenderData } from "./resume";

export function _patch_ready() {
  installPatchReady(prepareReady, pendingReady);
}

function prepareReady(render: RenderData, result: unknown) {
  if (!render.b || result !== render.b) return false;
  for (const readyId in render.b) {
    const batch = render.b[readyId];
    for (let i = 0; i < batch.length; i++) {
      const partial = batch[i];
      if (typeof partial === "object") {
        batch[i] = ((ctx: (scopes: unknown[]) => unknown) =>
          ctx([partial])) as (typeof batch)[number];
      }
    }
  }
  return true;
}

function pendingReady(render: RenderData) {
  if (hasPendingReady(render)) {
    return new Promise<void>((resolve) => waitReady(resolve, render));
  }
}

function waitReady(resolve: () => void, render: RenderData) {
  if (hasPendingReady(render)) setTimeout(waitReady, 0, resolve, render);
  else resolve();
}

function hasPendingReady(render: RenderData) {
  if (render.b) {
    for (const readyId in render.b) {
      if (render.b[readyId].length) return true;
    }
  }
  return false;
}
