import { type Applied, installPatchReady } from "./patch";
import { isLoaded, startLoad } from "./patch-load";
import { installReady } from "./resume";

// A frame held for lazy modules, unevaluated (as a ready channel's thunk is),
// with the apply its response runs it by and the promise its caller awaits.
type Held = [
  deps: string[],
  frame: string,
  apply: (frame: string) => Applied | Promise<unknown>,
  resolve: (applied: Applied | Promise<unknown>) => void,
  response: object,
];
// A render's held frames, in order: once a frame waits, every later frame of
// its response waits behind it.
const held = new Map<string, Held[]>();

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program with a lazy load import in a patch build.
installPatchReady(holdFrame);
installReady(markReady, failReady);

// A frame led by ids (`_a,_b,{…}`) names the lazy modules its response first
// needs there; it applies once they are resident and every earlier frame has.
function holdFrame(
  renderId: string,
  response: object,
  frame: string,
  apply: Held[2],
): Applied | Promise<unknown> {
  const deps: string[] = [];
  let queue = held.get(renderId);
  // A response re-ships full state: what an earlier one left waiting is
  // superseded, and its appliers settle as applied.
  if (queue && queue[0][4] !== response) {
    settle(renderId, queue, 1);
    queue = undefined;
  }
  // Its leading elements, up to the tree (no other frame starts like one):
  // template ids, each a ready id without its `_`, or in debug the ids' strings.
  let start = 0;
  for (
    let end;
    MARKO_DEBUG
      ? frame[start] === '"' && (end = frame.indexOf('",', start)) > 0
      : /[\w$]/.test(frame[start]) && (end = frame.indexOf(",", start));
  ) {
    deps.push(
      MARKO_DEBUG ? frame.slice(start + 1, end) : "_" + frame.slice(start, end),
    );
    start = end! + (MARKO_DEBUG ? 2 : 1);
  }
  if (start) frame = frame.slice(start);
  // A lazy tag whose module died at page load stays inert: a frame naming
  // it could never apply, so it rejects (the caller navigates).
  for (const dep of deps) {
    if (failed.has(dep)) {
      if (MARKO_DEBUG) {
        console.warn(`A patch rejected: module "${dep}" failed to load.`);
      }
      if (queue) settle(renderId, queue, 0);
      return 0;
    }
  }
  if (!queue && deps.every(isLoaded)) return apply(frame);
  if (!queue) held.set(renderId, (queue = []));
  const applied = new Promise<unknown>((resolve) =>
    queue.push([deps, frame, apply, resolve, response]),
  );
  for (const dep of deps) startLoad(dep);
  return applied;
}

// A module landing applies the frames it unblocks, oldest first.
function markReady(readyId: string) {
  for (const [renderId, queue] of held) {
    if (!queue.some(([deps]) => deps.includes(readyId))) continue;
    while (queue.length && queue[0][0].every(isLoaded)) {
      const [, frame, apply, resolve] = queue.shift()!;
      const applied = apply(frame);
      resolve(applied);
      if (!applied) {
        settle(renderId, queue, 0);
        break;
      }
    }
    if (!queue.length) held.delete(renderId);
  }
}

// A dead module can never make its server content whole: pending appliers
// resolve rejected (their caller navigates) and later frames naming it reject.
const failed = new Set<string>();
function failReady(readyId: string) {
  failed.add(readyId);
  for (const [renderId, queue] of held) {
    if (queue.some(([deps]) => deps.includes(readyId))) {
      if (MARKO_DEBUG) {
        console.warn(`A patch rejected: module "${readyId}" failed to load.`);
      }
      settle(renderId, queue, 0);
    }
  }
}

function settle(renderId: string, queue: Held[], applied: Applied) {
  held.delete(renderId);
  for (const [, , , resolve] of queue) resolve(applied);
}
