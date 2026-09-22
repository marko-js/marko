import { PatchKey, type Scope } from "../common/types";
import {
  type Applied,
  applyDeferred,
  deferApply,
  flushBinds,
  installPatchReady,
  patchResponse,
} from "./patch";
import { isLoaded, startLoad } from "./patch-load";
import {
  installReady,
  patchers,
  patchRender,
  patchRun,
  patchScope,
  type RenderData,
} from "./resume";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Ready]: Scope;
  }
}

// A flush held for its lazy modules: the wrapped root partial, and the
// bind table and run of the flush, with every `applyPatch` promise awaiting.
type Held = [
  deps: string[],
  partial: Scope,
  scope: Scope,
  binds: Record<string, unknown>,
  run: number,
  resolvers: ((applied: Applied) => void)[],
  response: object,
];
// A render's held flushes, in order: every later flush of the response
// names the same modules, so it waits behind an earlier one.
const held = new Map<RenderData, Held[]>();

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a lazy load import in a patch build.
installPatchReady(discardHeld);
installReady(markReady, failReady);

// The root partial, wrapped: applies once every named module is resident
// and every earlier flush of the response has applied.
patchers[PatchKey.Ready] = (scope, key, partial) => {
  const deps: string[] = [];
  for (let i = PatchKey.Ready.length, n = 0, c: number; i < key.length;) {
    if ((c = key.charCodeAt(i) - 48) < 10) {
      n = n * 10 + c;
      i++;
    } else if (n) {
      deps.push(key.slice(i, (i += n)));
      n = 0;
    } else {
      deps.push(key.slice(i));
      break;
    }
  }
  // A lazy tag whose module died at page load stays inert: a flush naming
  // it could never apply, so it rejects (the caller navigates).
  for (const dep of deps) {
    if (failed.has(dep)) {
      if (MARKO_DEBUG) {
        console.warn(`A patch rejected: module "${dep}" failed to load.`);
      }
      throw 0;
    }
  }
  let queue = held.get(patchRender);
  // A response re-ships full state: what an earlier one left waiting is
  // superseded, and its appliers settle as applied.
  if (queue && queue[0][6] !== patchResponse) {
    settle(patchRender, queue, 1);
    queue = undefined;
  }
  if (!queue && deps.every(isLoaded)) {
    patchScope(partial, scope);
    return;
  }
  const resolvers: Held[5] = [];
  (queue || held.set(patchRender, (queue = [])).get(patchRender))!.push([
    deps,
    partial,
    scope,
    flushBinds,
    patchRun,
    resolvers,
    patchResponse,
  ]);
  deferApply(new Promise((resolve) => resolvers.push(resolve)));
  for (const dep of deps) startLoad(dep);
};

// A module landing applies the flushes it unblocks, oldest first.
function markReady(readyId: string) {
  for (const [render, queue] of held) {
    if (!queue.some(([deps]) => deps.includes(readyId))) continue;
    while (queue.length && queue[0][0].every(isLoaded)) {
      const [, partial, scope, binds, run, resolvers] = queue.shift()!;
      const applied = applyDeferred(render, binds, run, () =>
        patchScope(partial, scope),
      );
      for (const resolve of resolvers) resolve(applied);
      if (!applied) {
        settle(render, queue, 0);
        break;
      }
    }
    if (!queue.length) held.delete(render);
  }
}

// A dead module can never make its server content whole: pending appliers
// resolve rejected (their caller navigates) and later flushes naming it reject.
const failed = new Set<string>();
function failReady(readyId: string) {
  if (MARKO_DEBUG) {
    console.warn(`A patch rejected: module "${readyId}" failed to load.`);
  }
  failed.add(readyId);
  for (const [render, queue] of held) {
    if (queue.some(([deps]) => deps.includes(readyId))) {
      settle(render, queue, 0);
    }
  }
}

function discardHeld() {
  const queue = held.get(patchRender);
  if (queue) settle(patchRender, queue, 0);
}

function settle(render: RenderData, queue: Held[], applied: Applied) {
  held.delete(render);
  for (const [, , , , , resolvers] of queue) {
    for (const resolve of resolvers) resolve(applied);
  }
}
