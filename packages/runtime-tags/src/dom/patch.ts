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

// Frame-commit checks registered by patch features: one that throws
// (`failPatch`) rejects the frame like any patcher.
export const frameChecks: (() => void)[] = [];

// Frame-scoped bindings patch features inject: the frame text references
// each name as a free variable (`b(1)`), skipping registry indirection.
export const frameVars: Record<string, unknown> = {};

export function applyPatch(
  frame: string,
  renderId = DEFAULT_RENDER_ID,
  runtimeId = DEFAULT_RUNTIME_ID,
) {
  init(runtimeId);
  // Registered here so this module stays tree-shakable.
  patchers[PatchKey.Globals] = patchGlobalsEntry;
  const render = beginPatch(renderId);
  try {
    // A frame is trusted executable resume data (an envelope holding the
    // partial tree) from the same server that produced the document.
    // `$` stays the serializer's `undefined` sentinel (never passed).
    const names = Object.keys(frameVars);
    // eslint-disable-next-line no-new-func
    const fn = new Function("_", "$", ...names, "return " + frame);
    render.r = [
      (ctx: unknown) =>
        fn(ctx, undefined, ...names.map((name) => frameVars[name])),
    ] as typeof render.r;
    runEffects(render.m!([]), 1);
    run();
    for (const check of frameChecks) check();
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
