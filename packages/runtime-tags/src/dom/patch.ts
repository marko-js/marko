import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import { AccessorProp, PatchKey, type Scope } from "../common/types";
import { run, runEffects } from "./queue";
import { abortPatch, beginPatch, init, patchers } from "./resume";

// Applies re-shipped globals so event-time `$global` reads never go stale;
// registered inside `applyPatch` to keep this module tree-shakable.
const patchGlobalsEntry = (live: Scope, _key: string, value: unknown) => {
  Object.assign(live[AccessorProp.Global], value);
};

export function applyPatch(
  frame: string,
  renderId = DEFAULT_RENDER_ID,
  runtimeId = DEFAULT_RUNTIME_ID,
) {
  init(runtimeId);
  patchers[PatchKey.Globals] = patchGlobalsEntry;
  const render = beginPatch(renderId);
  try {
    // A frame is trusted executable resume data (an envelope holding the
    // partial tree) from the same server that produced the document.
    // eslint-disable-next-line no-new-func
    render.r = [new Function("_", "$", "return " + frame)] as typeof render.r;
    runEffects(render.m!([]), 1);
    run();
    return true;
  } catch (error) {
    // The frame did not apply faithfully, so the caller navigates; only an
    // intentional rejection (`failPatch`) throws 0.
    if (MARKO_DEBUG && error) console.error(error);
    return false;
  } finally {
    abortPatch();
  }
}
