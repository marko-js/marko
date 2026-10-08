import { ROOT_SCOPE_ID } from "../common/meta";
import { type Opt, toArray } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  PatchKey,
  type Scope,
} from "../common/types";
import { abortRun, pendingEffects, run, runEffects, runId } from "./queue";
import {
  beginPatch,
  curRenders,
  patchers,
  patchScope,
  _resumed,
} from "./resume";
import type { RenderData, SerializeContext } from "./resume";

// Installed by `patch-ready`: every frame passes it, so a frame naming lazy
// modules (and every later one of its response) waits for them.
let holdFrame:
  | ((
      renderId: string,
      response: object,
      frame: string,
      apply: (frame: string) => Applied | Promise<unknown>,
    ) => Applied | Promise<unknown>)
  | undefined;
// Flush shells ahead of the scope tree (`id;walks;template` strings),
// registered by the patch feature that understands them.
let onPatchShell: ((entry: string) => void) | undefined;
export const installPatchShells = (handler: NonNullable<typeof onPatchShell>) =>
  (onPatchShell = handler);
/** Whether a flush applied: truthy when it did. */
export type Applied = 0 | 1;
// What the flush being applied left waiting (a module, a streaming body):
// its apply settles once every one has, truthy only if all applied.
let deferred: Promise<unknown> | 0;
export function deferApply(applied: Promise<unknown>) {
  deferred = deferred ? deferred.then((ok) => ok && applied) : applied;
}

// A scope's link from its parent: a child accessor, or a loop item's index
// with its key when that differs.
export type PatchHop = string | [accessor: string, at: LoopItemAt];
export type LoopItemAt = number | [index: number, key: unknown];

// `_(path, id, content?)` in a frame: a registration bound to the scope `path`
// reaches from the page root, resolved by `patch-bind`.
let bindRef:
  | ((root: Scope, path: PatchHop[], id: string, content?: 1) => unknown)
  | undefined;
export function installBindRef(resolve: NonNullable<typeof bindRef>) {
  bindRef = resolve;
}

// A loop's live item: the one where it rendered while its key still matches
// there (the reconciler's own check), else found by key.
export function getLoopItem(
  scope: Scope,
  accessor: string,
  at: LoopItemAt,
): Scope | undefined {
  const items = toArray(
    scope[(AccessorPrefix.BranchScopes + accessor) as Accessor] as Opt<Scope>,
  );
  let index = at as number;
  let key: unknown = at;
  if (typeof at === "object") [index, key] = at;
  const item = items[index];
  return item && (item[AccessorProp.LoopKey] ?? index) === key
    ? item
    : (items.find(
        (item, i) => ((item as Scope)[AccessorProp.LoopKey] ?? i) === key,
      ) as Scope | undefined);
}

/** The live page's `$global`: names its render. */
export type PatchGlobal = { renderId: string };

/** The live page's side of `template.patch`: `[headers, apply]`, the headers
 * a patch request sends (what the page holds) and the apply for each flush. */
export function patch($global: PatchGlobal) {
  // Indexed as the server counts trees, so a later flush can reference an
  // earlier one's; with an id, `data` is the path to a bound registration.
  const trees: unknown[] = [];
  let root: Scope;
  const responseCtx = ((data: number | PatchHop[], id?: string, content?: 1) =>
    id
      ? bindRef!(root, data as PatchHop[], id, content)
      : trees[data as number]) as SerializeContext;
  responseCtx._ = _resumed;
  const apply = (flush: string): Applied | Promise<unknown> => {
    // Registered here so this module stays tree-shakable; a page with
    // `$global` joins installed its own (`_fill_global_join`).
    patchers[PatchKey.Globals] ||= applyGlobals;
    // The response's context is its token: its frames share it, and a
    // later response supersedes what an earlier one left waiting.
    const render = curRenders[$global.renderId];
    render.q = responseCtx;
    deferred = 0;
    return (
      applyFlush(render, () => {
        // A flush is trusted executable resume data from the same server
        // that produced the document; `$` (the serializer's spelling of
        // `undefined`) is the unpassed last parameter.
        // eslint-disable-next-line no-new-func
        const fn = new Function("_", "$", "return " + flush);
        render.r = [
          (ctx: SerializeContext) => {
            root = ctx(ROOT_SCOPE_ID) as Scope;
            const value = fn(responseCtx);
            // `[...shells, tree]` or the bare tree, rooted at the page
            // root; a flush of only shells keys no tree.
            const flush = Array.isArray(value) ? value : [value];
            let i = 0;
            // A response ends with the token naming what the page now holds.
            if (typeof value === "string") {
              render.k = value;
              return;
            }
            while (typeof flush[i] === "string") onPatchShell!(flush[i++]);
            const tree = flush[i];
            if (tree && typeof tree === "object") {
              trees.push(tree);
              patchScope(tree, root);
            }
          },
        ] as typeof render.r;
      }) &&
      (deferred || 1)
    );
  };
  return [
    // The render's token, once a response has issued one; empty before (the
    // server reads it as holding nothing).
    { "x-marko-patch": curRenders?.[$global.renderId]?.k || "" },
    holdFrame
      ? (frame: string) =>
          holdFrame!($global.renderId, responseCtx, frame, apply)
      : apply,
  ] as const;
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

export function installPatchReady(hold: NonNullable<typeof holdFrame>) {
  holdFrame = hold;
}

// Applies flush data (a response's frame, or one left waiting on a module or a
// streaming body) as its own flush run.
export function applyFlush(render: RenderData, apply: () => void): Applied {
  let rendered: unknown;
  // First of the run's effects, so it runs once every render is done; queued
  // before the flush queues anything, the shift moves nothing.
  pendingEffects.unshift(() => (rendered = 1), 0);
  try {
    beginPatch(render);
    apply();
    runEffects(render.m!([]));
    run();
  } catch (error) {
    if (!rendered) {
      // The flush did not apply faithfully, so the caller navigates.
      if (MARKO_DEBUG) console.error(error);
      abortRun();
      return 0;
    }
    // An effect's error after every render is the app's, as on any client render.
    queueMicrotask(() => {
      throw error;
    });
  } finally {
    // A rejected flush must not read as page data on a later walk; the
    // array stays, a still-streaming page pushes into it.
    render.r!.length = 0;
  }
  return 1;
}
