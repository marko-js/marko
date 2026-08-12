import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import { type Accessor, AccessorProp, PatchKey } from "../common/types";
import { abortRun, run, runEffects, runId } from "./queue";
import {
  abortPatch,
  beginPatch,
  type Changed,
  init,
  kChanged,
  patchers,
  type RenderData,
} from "./resume";

// Applies re-shipped globals so event-time `$global` reads never go stale;
// a changed value marks the globals object itself with the frame's epoch
// (every scope shares it, so readers at any composition depth re-run).
// Marks land per key (`.`-prefixed: never collides with the whole-bag
// slot or `__proto__`) plus the whole-bag slot for opaque readers.
const patchGlobalsEntry = (live: Changed, _key: string, value: unknown) => {
  const globals = live[AccessorProp.Global];
  for (const key in value as Record<string, unknown>) {
    if (globals[key] !== (value as Record<string, unknown>)[key]) {
      globals[key] = (value as Record<string, unknown>)[key];
      const marks = ((globals as unknown as Changed)[kChanged] ??= {});
      marks[("." + key) as Accessor] = marks[AccessorProp.Global] = runId;
    }
  }
};

export function applyPatch(
  frame: unknown,
  renderId = DEFAULT_RENDER_ID,
  runtimeId = DEFAULT_RUNTIME_ID,
) {
  init(runtimeId);
  // Registered here so this module stays tree-shakable.
  patchers[PatchKey.Globals] = patchGlobalsEntry;
  const render = beginPatch(renderId);
  try {
    // A frame arrives pre-evaluated (its nonce'd script deposited the
    // thunk); a missing or malformed value rejects like any bad frame.
    if (typeof frame !== "function") {
      throw MARKO_DEBUG
        ? new Error("applyPatch expects an evaluated frame value.")
        : 0;
    }
    render.r = [frame] as typeof render.r;
    runEffects(render.m!([]), 1);
    run();
    return true;
  } catch (error) {
    // The frame did not apply faithfully, so the caller navigates; only an
    // intentional rejection (`failPatch`) throws 0.
    if (MARKO_DEBUG && error) console.error(error);
    abortRun();
    return false;
  } finally {
    abortPatch();
  }
}

// Takes (and clears) the thunk a frame script (`M._.a=(_,$)=>…`) deposited
// on the render, for a transport to hand straight to `applyPatch`.
export function takePatchFrame(
  renderId = DEFAULT_RENDER_ID,
  runtimeId = DEFAULT_RUNTIME_ID,
) {
  const render = (self as Record<string, any>)[runtimeId]?.[renderId] as
    | RenderData
    | undefined;
  const frame: unknown = render?.a;
  if (render) render.a = undefined;
  return frame;
}
