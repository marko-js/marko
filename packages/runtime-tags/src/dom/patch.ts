import {
  type Accessor,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import { abortRun, run, runEffects, runId } from "./queue";
import {
  abortPatch,
  beginPatch,
  curRenders,
  patchers,
  patchRender,
} from "./resume";
import type { RenderData } from "./resume";

// Installed by `patch-ready`: commits a frame's ready record, settles a
// frame holding data for a not-yet-loaded module, discards a rejected one.
let commitReady: (() => void) | undefined;
let pendingReady: (() => Promise<boolean> | undefined) | undefined;
let discardReady: (() => void) | undefined;

// Frame-commit checks registered by patch features: one that throws
// (`failPatch`) rejects the frame like any patcher.
export const frameChecks: (() => void)[] = [];

// Frame-scoped bindings patch features inject: the frame text references
// each name as a free variable (`b(1)`), skipping registry indirection.
export const frameVars: Record<string, unknown> = {};

// A frame and the deferred batches it drains later share one epoch, so a
// bind source applied with the frame still serves a batch's reference.
export let frameEpoch: object = {};

/** The live page's `$global`: names its render. */
export type PatchGlobal = { renderId: string };

/**
 * The live page's side of `template.patch`: `[headers, apply]`, the headers
 * a patch request sends (none yet) and the apply for each frame.
 */
export function patch($global: PatchGlobal) {
  return [
    {},
    (frame: string): boolean | Promise<boolean> => {
      // Registered here so this module stays tree-shakable; a page with
      // `$global` joins installed its own (`patch-global.feat`).
      patchers[PatchKey.Globals] ||= applyGlobals;
      frameEpoch = {};
      beginPatch(curRenders[$global.renderId]);
      try {
        // A frame is trusted executable resume data from the same server
        // that produced the document; `$` stays the serializer's `undefined`.
        const names = Object.keys(frameVars);
        // eslint-disable-next-line no-new-func
        const fn = new Function("_", "$", ...names, "return " + frame);
        patchRender.r = [
          (ctx: unknown) =>
            fn(ctx, undefined, ...names.map((name) => frameVars[name])),
        ] as typeof patchRender.r;
        commitFrame();
        return pendingReady?.() || true;
      } catch (error) {
        // The frame did not apply faithfully, so the caller navigates; only
        // an intentional rejection (`failPatch`) throws 0.
        if (MARKO_DEBUG && error) console.error(error);
        discardReady?.();
        abortRun();
        return false;
      } finally {
        // A rejected frame must not read as page data on a later walk; the
        // array stays, a still-streaming page pushes into it.
        patchRender.r!.length = 0;
        abortPatch();
      }
    },
  ] as const;
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
  commit: typeof commitReady,
  pending: typeof pendingReady,
  discard: typeof discardReady,
) {
  commitReady = commit;
  pendingReady = pending;
  discardReady = discard;
}

// Commits deferred ready-channel data after its module loads, as an empty
// frame run so it shares a frame's commit sequence and patch context.
export function applyReadyPatch(
  render: RenderData,
  epoch: object,
  push: () => void,
) {
  frameEpoch = epoch;
  beginPatch(render);
  try {
    push();
    commitFrame();
    return true;
  } catch (error) {
    if (MARKO_DEBUG && error) console.error(error);
    abortRun();
    return false;
  } finally {
    abortPatch();
  }
}

function commitFrame() {
  runEffects(patchRender.m!([]), 1);
  run();
  commitReady?.();
  for (const check of frameChecks) check();
}
