import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import { PatchKey } from "../common/types";
import { patchGlobalsEntry } from "./patch-changed";
import { abortRun, run, runEffects } from "./queue";
import { abortPatch, beginPatch, init, patchers } from "./resume";
import type { RenderData } from "./resume";

type PrepareReady = (render: RenderData, result: unknown) => boolean;
type PendingReady = (render: RenderData) => Promise<void> | undefined;
let prepareReady: PrepareReady | undefined;
let pendingReady: PendingReady | undefined;

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
): boolean | Promise<boolean> {
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
      (ctx: unknown) => {
        const result = fn(
          ctx,
          undefined,
          ...names.map((name) => frameVars[name]),
        );
        if (!prepareReady?.(render, result)) return result;
      },
    ] as typeof render.r;
    runEffects(render.m!([]), 1);
    run();
    for (const check of frameChecks) check();
    const pending = pendingReady?.(render);
    return pending
      ? pending.then(() => applyReadyPatch(renderId, runtimeId))
      : true;
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

export function installPatchReady(
  prepare: PrepareReady,
  pending: PendingReady,
) {
  prepareReady = prepare;
  pendingReady = pending;
}

function applyReadyPatch(renderId: string, runtimeId: string) {
  init(runtimeId);
  const render = beginPatch(renderId);
  try {
    runEffects(render.m!([]), 1);
    run();
    for (const check of frameChecks) check();
    return true;
  } catch (error) {
    if (MARKO_DEBUG && error) console.error(error);
    abortRun();
    return false;
  } finally {
    abortPatch();
  }
}
