import { HeldFlushProp, RenderDataProp } from "../../common/types";
import { curRenders, installReady } from "../resume";
import { type Applied, type FlushDone, installHoldFlush } from "./apply";
import { isLoaded, startLoad } from "./load";

// A flush held for lazy modules, unevaluated (as a ready channel's thunk is),
// with the apply its response runs it by and the done its caller awaits.
type Held = {
  [HeldFlushProp.Deps]: string[];
  [HeldFlushProp.Flush]: string;
  [HeldFlushProp.Apply]: (flush: string, done: FlushDone) => void;
  [HeldFlushProp.Done]: FlushDone;
  [HeldFlushProp.Stop]: object;
};
// A render's held flushes, in order: once a flush waits, every later flush of
// its response waits behind it.
const held = new Map<string, Held[]>();

// Module evaluation is the enablement: a patch page's entry imports it once a
// template it reaches has a lazy load import.
installHoldFlush(holdFlush);
installReady(applyHeldFlushes, recordFailed);

// A flush led by ids (`_a,_b,{…}`) names the lazy modules its response first
// needs there; it applies once they are resident and every earlier flush has.
function holdFlush(
  renderId: string,
  stop: object,
  ledFlush: string,
  apply: Held[typeof HeldFlushProp.Apply],
  done: FlushDone,
) {
  const deps: string[] = [];
  let queue: Held[] | 0 | undefined = held.get(renderId);
  // A response re-ships full state: what an earlier one left waiting is
  // superseded, and its appliers settle as applied.
  if (queue && queue[0][HeldFlushProp.Stop] !== stop) {
    settle(renderId, queue, 1);
    queue = 0;
  }
  // Its leading elements, up to the tree (no other flush starts like one):
  // template ids, each a ready id without its `_`, or in debug the ids' strings.
  let start = 0;
  for (
    let end;
    MARKO_DEBUG
      ? ledFlush[start] === '"' && ~(end = ledFlush.indexOf('",', start))
      : /[\w$]/.test(ledFlush[start]) && ~(end = ledFlush.indexOf(",", start));
  ) {
    deps.push(
      MARKO_DEBUG
        ? ledFlush.slice(start + 1, end)
        : "_" + ledFlush.slice(start, end),
    );
    start = end! + (MARKO_DEBUG ? 2 : 1);
  }
  const flush = ledFlush.slice(start);
  // A lazy tag whose module died at page load stays inert: a flush naming
  // it could never apply, so it rejects (the caller navigates).
  for (const dep of deps) {
    if (failed.has(dep)) {
      if (queue) settle(renderId, queue, 0);
      return done(0);
    }
  }
  if (!queue && deps.every(isLoaded)) return apply(flush, done);
  if (!queue) held.set(renderId, (queue = []));
  queue.push({
    [HeldFlushProp.Deps]: deps,
    [HeldFlushProp.Flush]: flush,
    [HeldFlushProp.Apply]: apply,
    [HeldFlushProp.Done]: done,
    [HeldFlushProp.Stop]: stop,
  });
  for (const dep of deps) startLoad(dep, rejectHeldFlushes);
}

// A module landing applies the flushes it unblocks, oldest first.
function applyHeldFlushes(readyId: string) {
  for (const [renderId, queue] of held) {
    if (
      queue.some((heldFlush) => heldFlush[HeldFlushProp.Deps].includes(readyId))
    ) {
      if (
        queue[0][HeldFlushProp.Stop] !==
        curRenders[renderId][RenderDataProp.StopPatch]
      ) {
        // A later navigation started (`patch()`): this response is abandoned.
        settle(renderId, queue, 1);
      } else {
        let stopped: unknown;
        while (
          !stopped &&
          queue.length &&
          queue[0][HeldFlushProp.Deps].every(isLoaded)
        ) {
          const heldFlush = queue.shift()!;
          heldFlush[HeldFlushProp.Apply](
            heldFlush[HeldFlushProp.Flush],
            (applied) => {
              // A flush that fails fails the flushes behind it.
              if (!applied && !stopped) {
                stopped = 1;
                settle(renderId, queue, 0);
              }
              heldFlush[HeldFlushProp.Done](applied);
            },
          );
        }
        if (!queue.length) held.delete(renderId);
      }
    }
  }
}

// A module dead at page load can never make its server content whole: later
// flushes naming it reject too.
const failed = new Set<string>();
function recordFailed(readyId: string) {
  failed.add(readyId);
  rejectHeldFlushes(readyId);
}

// The flushes waiting on a module that failed to load reject (their caller
// navigates).
function rejectHeldFlushes(readyId: string) {
  for (const [renderId, queue] of held) {
    if (
      queue.some((heldFlush) => heldFlush[HeldFlushProp.Deps].includes(readyId))
    ) {
      settle(renderId, queue, 0);
    }
  }
}

function settle(renderId: string, queue: Held[], applied: Applied) {
  held.delete(renderId);
  for (const heldFlush of queue) heldFlush[HeldFlushProp.Done](applied);
}
