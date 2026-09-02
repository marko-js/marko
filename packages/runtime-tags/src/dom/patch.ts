import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import {
  type Accessor,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import { abortRun, run, runEffects, runId } from "./queue";
import { abortPatch, beginPatch, init, patchers } from "./resume";
import type { RenderData } from "./resume";

type PendingReady = (
  render: RenderData,
  renderId: string,
  runtimeId: string,
) => Promise<boolean> | undefined;
type DiscardReady = (render: RenderData) => void;
let pendingReady: PendingReady | undefined;
let discardReady: DiscardReady | undefined;

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
  // Registered here so this module stays tree-shakable; a page with
  // `$global` joins installed its own (`patch-global.feat`).
  patchers[PatchKey.Globals] ||= applyGlobals;
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
    commitFrame(render);
    // A frame holding data for a not-yet-loaded lazy module settles once
    // every deferred channel drains (or a load fails).
    return pendingReady?.(render, renderId, runtimeId) || true;
  } catch (error) {
    // The frame did not apply faithfully, so the caller navigates; only an
    // intentional rejection (`failPatch`) throws 0. Deferred data from this
    // (or any earlier pending) frame is meaningless after the navigation.
    if (MARKO_DEBUG && error) console.error(error);
    discardReady?.(render);
    abortRun();
    return false;
  } finally {
    abortPatch();
  }
}

// A plain patched write; a changed value is marked with the frame's epoch
// (`patch-effect`, `patch-global`).
export function patchWrite(scope: Scope, accessor: Accessor, value: unknown) {
  if (scope[accessor] !== value || !(accessor in scope)) {
    scope[accessor] = value;
    (scope[AccessorProp.PatchChanged] ??= {})[accessor] = runId;
  }
}

// Re-shipped globals land as plain writes on the globals object (scope 0),
// so `$global` reads never go stale.
export function applyGlobals(live: Scope, _key: string, value: unknown) {
  for (const key in value as Record<string, unknown>) {
    patchWrite(
      live[AccessorProp.Global] as unknown as Scope,
      key as Accessor,
      (value as Record<string, unknown>)[key],
    );
  }
}

export function installPatchReady(
  pending: PendingReady,
  discard: DiscardReady,
) {
  pendingReady = pending;
  discardReady = discard;
}

// Commits deferred ready-channel data after its module loads: the wrapped
// partials already sit in the render's ready record, so an empty frame run
// applies them under the same commit sequence as `applyPatch`.
export function applyReadyPatch(renderId: string, runtimeId: string) {
  init(runtimeId);
  const render = beginPatch(renderId);
  try {
    commitFrame(render);
    return true;
  } catch (error) {
    if (MARKO_DEBUG && error) console.error(error);
    abortRun();
    return false;
  } finally {
    abortPatch();
  }
}

function commitFrame(render: RenderData) {
  runEffects(render.m!([]), 1);
  run();
  for (const check of frameChecks) check();
}
