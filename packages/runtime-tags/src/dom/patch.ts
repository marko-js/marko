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
  registeredValues,
} from "./resume";
import type { RenderData, SerializeContext } from "./resume";

// Installed by `patch-ready`: commits a flush's guards, settles a flush
// holding data for a not-yet-loaded module, discards a rejected one.
let commitReady: (() => void) | undefined;
let pendingReady: (() => Promise<boolean> | undefined) | undefined;
let discardReady: (() => void) | undefined;

// Flush-scoped bindings patch features inject.
export const flushVars: Record<string, unknown> = {};

// The flush's bind table (`patch-value-bind`): a guard the flush left
// pending applies under it, so a source shipped with the flush serves the
// guard's reference.
export let flushBinds: Record<string, unknown> = {};

/** The live page's `$global`: names its render. */
export type PatchGlobal = { renderId: string };

/**
 * The live page's side of `template.patch`: `[headers, apply]`, the headers
 * a patch request sends (none yet) and the apply for each flush.
 */
export function patch($global: PatchGlobal) {
  // The response's own serialize context keeps every tree the response
  // applied, keyed as the server keys them (the k-th tree), so a later
  // flush references into an earlier one; anything else is the page's.
  let pageCtx: SerializeContext;
  const trees: unknown[] = [];
  const responseCtx = ((data: number | (Scope | number)[]) =>
    typeof data === "number" ? trees[data] : pageCtx(data)) as SerializeContext;
  responseCtx._ = registeredValues;
  // Every patch feature is evaluated by now: the flush text references each
  // binding as a free variable (`b(1)`), skipping registry indirection.
  const names = Object.keys(flushVars);
  const vars = Object.values(flushVars);
  const apply = (flush: string): boolean | Promise<boolean> => {
    // Registered here so this module stays tree-shakable; a page with
    // `$global` joins installed its own (`patch-global.feat`).
    patchers[PatchKey.Globals] ||= applyGlobals;
    flushBinds = {};
    beginPatch(curRenders[$global.renderId]);
    // A flush writes ready records as `R.b[id]=[...]`, into the bucket the
    // document's first record created (`writeReady`). A document that never
    // wrote one (no lazy site rendered) has no bucket, so the flush's first
    // record would throw; a flush cannot know, so the page ensures it.
    patchRender.b ||= {};
    try {
      // A flush is trusted executable resume data from the same server
      // that produced the document; `$` stays the serializer's `undefined`
      // and `R` the page render, where ready-channel records land as the
      // page's own (its flush vars are the only other free names).
      // eslint-disable-next-line no-new-func
      const fn = new Function("_", "$", "R", ...names, "return " + flush);
      patchRender.r = [
        (ctx: SerializeContext) => {
          pageCtx = ctx;
          const value = fn(responseCtx, undefined, patchRender, ...vars);
          // The tree is the flush's last value; a flush of only shells (or
          // nothing) ends in a string (`undefined`), and the server keys none.
          const tree = Array.isArray(value) ? value[value.length - 1] : value;
          if (typeof tree === "object") trees.push(tree);
          return value;
        },
      ] as typeof patchRender.r;
      commitFrame();
      return pendingReady?.() || true;
    } catch (error) {
      // The flush did not apply faithfully, so the caller navigates; only
      // an intentional rejection (`failPatch`) throws 0.
      if (MARKO_DEBUG && error) console.error(error);
      discardReady?.();
      abortRun();
      return false;
    } finally {
      // A rejected flush must not read as page data on a later walk; the
      // array stays, a still-streaming page pushes into it.
      patchRender.r!.length = 0;
      abortPatch();
    }
  };
  return [{}, apply] as const;
}

// A plain patched write; a changed value is marked with the flush's epoch
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
// flush run so it shares a flush's commit sequence and patch context.
export function applyReadyPatch(
  render: RenderData,
  binds: Record<string, unknown>,
  runAt: number,
  push: () => void,
) {
  flushBinds = binds;
  beginPatch(render, runAt);
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
}
