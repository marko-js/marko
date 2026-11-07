import { WaitingFlushProp, RenderDataProp } from "../../common/types";
import { curRenders, installReady, isReady } from "../resume";
import { type Applied, type FlushDone, installWaitFlush } from "./apply";
import { isLoaded, startLoad } from "./load";

// A flush waiting for lazy modules, unevaluated (as a ready channel's thunk is),
// with the apply its response runs it by and the done its caller awaits.
type Waiting = {
  [WaitingFlushProp.ReadyIds]: string[];
  [WaitingFlushProp.Flush]: string;
  [WaitingFlushProp.Apply]: (flush: string, done: FlushDone) => void;
  [WaitingFlushProp.Done]: FlushDone;
  [WaitingFlushProp.Stop]: object;
};
// A render's waiting flushes, in order: once a flush waits, every later flush of
// its response waits behind it.
const waiting = new Map<string, Waiting[]>();

// Module evaluation is the enablement: a patch page's entry imports it once a
// template it reaches has a lazy load import.
installWaitFlush(waitFlush);
installReady(applyWaitingFlushes, recordFailed);

// A flush led by ids (`_a,_b,{…}`) names the lazy modules its response first
// needs there; it applies once they are resident and every earlier flush has.
function waitFlush(
  renderId: string,
  stop: object,
  ledFlush: string,
  apply: Waiting[typeof WaitingFlushProp.Apply],
  done: FlushDone,
) {
  const readyIds: string[] = [];
  let queue: Waiting[] | 0 | undefined = waiting.get(renderId);
  // A response re-ships full state: what an earlier one left waiting is
  // superseded, and its appliers settle as applied.
  if (queue && queue[0][WaitingFlushProp.Stop] !== stop) {
    settle(renderId, queue, 1);
    queue = 0;
  }
  // Its leading elements, up to its shells or tree (no other flush starts like one):
  // template ids, each a ready id without its `_`, or in debug the ids' strings.
  let start = 0;
  for (
    let end;
    MARKO_DEBUG
      ? ledFlush[start] === '"' && ~(end = ledFlush.indexOf('",', start))
      : /[\w$]/.test(ledFlush[start]) && ~(end = ledFlush.indexOf(",", start));
  ) {
    readyIds.push(
      MARKO_DEBUG
        ? ledFlush.slice(start + 1, end)
        : "_" + ledFlush.slice(start, end),
    );
    start = end! + (MARKO_DEBUG ? 2 : 1);
  }
  const flush = ledFlush.slice(start);
  // A lazy tag whose module died at page load stays inert: a flush naming
  // it could never apply, so it rejects (the caller navigates).
  for (const readyId of readyIds) {
    if (failed.has(readyId)) {
      if (queue) settle(renderId, queue, 0);
      return done(0);
    }
  }
  if (!queue && readyIds.every(isLoaded)) return apply(flush, done);
  if (!queue) waiting.set(renderId, (queue = []));
  queue.push({
    [WaitingFlushProp.ReadyIds]: readyIds,
    [WaitingFlushProp.Flush]: flush,
    [WaitingFlushProp.Apply]: apply,
    [WaitingFlushProp.Done]: done,
    [WaitingFlushProp.Stop]: stop,
  });
  for (const readyId of readyIds) startLoad(readyId, rejectWaitingFlushes);
}

// A module landing applies the flushes it unblocks, oldest first.
function applyWaitingFlushes(readyId: string) {
  for (const [renderId, queue] of waiting) {
    if (
      queue.some((waitingFlush) =>
        waitingFlush[WaitingFlushProp.ReadyIds].includes(readyId),
      )
    ) {
      if (
        queue[0][WaitingFlushProp.Stop] !==
        curRenders[renderId][RenderDataProp.PatchStop]
      ) {
        // A later navigation started (`patch()`): this response is abandoned.
        settle(renderId, queue, 1);
      } else {
        let stopped: unknown;
        while (
          !stopped &&
          queue.length &&
          queue[0][WaitingFlushProp.ReadyIds].every(isLoaded)
        ) {
          const waitingFlush = queue.shift()!;
          waitingFlush[WaitingFlushProp.Apply](
            waitingFlush[WaitingFlushProp.Flush],
            (applied) => {
              // A flush that fails fails the flushes behind it.
              if (!applied && !stopped) {
                stopped = 1;
                settle(renderId, queue, 0);
              }
              waitingFlush[WaitingFlushProp.Done](applied);
            },
          );
        }
        if (!queue.length) waiting.delete(renderId);
      }
    }
  }
}

// A module dead at page load can never make its server content whole: later
// flushes naming it reject too.
const failed = new Set<string>();
// A module a patch loaded itself outlives its document loader's failure.
function recordFailed(readyId: string) {
  if (!isReady(readyId)) {
    failed.add(readyId);
    rejectWaitingFlushes(readyId);
  }
}

// The flushes waiting on a module that failed to load reject (their caller
// navigates).
function rejectWaitingFlushes(readyId: string) {
  for (const [renderId, queue] of waiting) {
    if (
      queue.some((waitingFlush) =>
        waitingFlush[WaitingFlushProp.ReadyIds].includes(readyId),
      )
    ) {
      settle(renderId, queue, 0);
    }
  }
}

function settle(renderId: string, queue: Waiting[], applied: Applied) {
  waiting.delete(renderId);
  for (const waitingFlush of queue)
    waitingFlush[WaitingFlushProp.Done](applied);
}
