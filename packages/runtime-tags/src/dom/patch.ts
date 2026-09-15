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
  patchScope,
  curRenders,
  patchers,
  patchRender,
  registeredValues,
} from "./resume";
import type { RenderData, SerializeContext } from "./resume";

// Installed by `patch-ready`: commits a flush's guards, discards a
// rejected flush's.
let commitReady: (() => void) | undefined;
let discardReady: (() => void) | undefined;
/** Whether a flush applied: truthy when it did. */
export type Applied = 0 | 1;
// What the flush being applied left waiting (a module, a streaming body):
// its apply settles once every one has, truthy only if all applied.
let deferred: Promise<unknown> | 0;
export function deferApply(applied: Promise<unknown>) {
  deferred = deferred ? deferred.then((ok) => ok && applied) : applied;
}

// Flush-scoped bindings patch features inject.
export const flushVars: Record<string, unknown> = {};

// The flush's bind table (`patch-value-bind`): a guard the flush left
// pending applies under it, so a source shipped with the flush serves the
// guard's reference.
export let flushBinds: Record<string, unknown> = {};
export let patchResponse: object;

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
  const apply = (flush: string): Applied | Promise<unknown> => {
    // Registered here so this module stays tree-shakable; a page with
    // `$global` joins installed its own (`patch-global.feat`).
    patchers[PatchKey.Globals] ||= applyGlobals;
    // The response's context is its token: its flushes share it, and a
    // later response supersedes what an earlier one left waiting.
    patchResponse = responseCtx;
    flushBinds = {};
    deferred = 0;
    beginPatch(curRenders[$global.renderId]);
    try {
      // A flush is trusted executable resume data from the same server
      // that produced the document; `$` (the serializer's spelling of
      // `undefined`) is the unpassed last parameter.
      // eslint-disable-next-line no-new-func
      const fn = new Function("_", ...names, "$", "return " + flush);
      patchRender.r = [
        (ctx: SerializeContext) => {
          pageCtx = ctx;
          const value = fn(responseCtx, ...vars);
          // The tree is the flush's last value; a flush of only shells (or
          // nothing) ends in a shell string, which the server keys no tree for.
          const tree = Array.isArray(value) ? value[value.length - 1] : value;
          if (typeof tree === "object") trees.push(tree);
          return value;
        },
      ] as typeof patchRender.r;
      commitFlush();
      return deferred || 1;
    } catch (error) {
      // The flush did not apply faithfully, so the caller navigates; only
      // an intentional rejection (`failPatch`) throws 0.
      if (MARKO_DEBUG && error) console.error(error);
      discardReady?.();
      abortRun();
      return 0;
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
  discard: typeof discardReady,
) {
  commitReady = commit;
  discardReady = discard;
}

// Commits deferred ready-channel data after its module loads, as an empty
// flush run so it shares a flush's commit sequence and patch context.
// A channel's deferred entries with the live scope they apply to, and the
// bind table and run of the flush that shipped them.
export type ReadyGuard = [
  entries: Scope,
  scope: Scope,
  binds: Record<string, unknown>,
  run: number,
];
export function applyReadyPatch(render: RenderData, guards: ReadyGuard[]) {
  try {
    for (const [entries, scope, binds, runAt] of guards) {
      flushBinds = binds;
      beginPatch(render, runAt);
      patchScope(entries, scope);
    }
    commitFlush();
    return 1;
  } catch (error) {
    if (MARKO_DEBUG && error) console.error(error);
    abortRun();
    return 0;
  } finally {
    abortPatch();
  }
}

function commitFlush() {
  runEffects(patchRender.m!([]), 1);
  run();
  commitReady?.();
}
