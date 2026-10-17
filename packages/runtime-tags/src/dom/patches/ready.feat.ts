import { HeldFrameProp, RenderDataProp } from "../../common/types";
import { curRenders, installReady } from "../resume";
import { type Applied, type FrameDone, installPatchReady } from "./apply";
import { isLoaded, startLoad } from "./load";

// A frame held for lazy modules, unevaluated (as a ready channel's thunk is),
// with the apply its response runs it by and the done its caller awaits.
type Held = {
  [HeldFrameProp.Deps]: string[];
  [HeldFrameProp.Frame]: string;
  [HeldFrameProp.Apply]: (frame: string, done: FrameDone) => void;
  [HeldFrameProp.Done]: FrameDone;
  [HeldFrameProp.Response]: object;
};
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
  ledFrame: string,
  apply: Held[typeof HeldFrameProp.Apply],
  done: FrameDone,
) {
  const deps: string[] = [];
  let queue = held.get(renderId);
  // A response re-ships full state: what an earlier one left waiting is
  // superseded, and its appliers settle as applied.
  if (queue && queue[0][HeldFrameProp.Response] !== response) {
    settle(renderId, queue, 1);
    queue = undefined;
  }
  // Its leading elements, up to the tree (no other frame starts like one):
  // template ids, each a ready id without its `_`, or in debug the ids' strings.
  let start = 0;
  for (
    let end;
    MARKO_DEBUG
      ? ledFrame[start] === '"' && (end = ledFrame.indexOf('",', start)) > 0
      : /[\w$]/.test(ledFrame[start]) &&
        (end = ledFrame.indexOf(",", start)) > 0;
  ) {
    deps.push(
      MARKO_DEBUG
        ? ledFrame.slice(start + 1, end)
        : "_" + ledFrame.slice(start, end),
    );
    start = end! + (MARKO_DEBUG ? 2 : 1);
  }
  const frame = ledFrame.slice(start);
  // A lazy tag whose module died at page load stays inert: a frame naming
  // it could never apply, so it rejects (the caller navigates).
  for (const dep of deps) {
    if (failed.has(dep)) {
      if (queue) settle(renderId, queue, 0);
      return done(0);
    }
  }
  if (!queue && deps.every(isLoaded)) return apply(frame, done);
  if (!queue) held.set(renderId, (queue = []));
  queue.push({
    [HeldFrameProp.Deps]: deps,
    [HeldFrameProp.Frame]: frame,
    [HeldFrameProp.Apply]: apply,
    [HeldFrameProp.Done]: done,
    [HeldFrameProp.Response]: response,
  });
  for (const dep of deps) startLoad(dep, failLoad);
}

// A module landing applies the frames it unblocks, oldest first.
function markReady(readyId: string) {
  for (const [renderId, queue] of held) {
    if (
      !queue.some((heldFrame) =>
        heldFrame[HeldFrameProp.Deps].includes(readyId),
      )
    ) {
      continue;
    }
    // A later navigation started (`patch()`): this response is abandoned.
    if (
      queue[0][HeldFrameProp.Response] !==
      curRenders[renderId][RenderDataProp.PatchResponse]
    ) {
      settle(renderId, queue, 1);
      continue;
    }
    let stopped: unknown;
    while (
      !stopped &&
      queue.length &&
      queue[0][HeldFrameProp.Deps].every(isLoaded)
    ) {
      const heldFrame = queue.shift()!;
      heldFrame[HeldFrameProp.Apply](
        heldFrame[HeldFrameProp.Frame],
        (applied) => {
          // A frame that fails fails the frames behind it.
          if (!applied && !stopped) {
            stopped = 1;
            settle(renderId, queue, 0);
          }
          heldFrame[HeldFrameProp.Done](applied);
        },
      );
    }
    if (!queue.length) held.delete(renderId);
  }
}

// A module dead at page load can never make its server content whole: later
// frames naming it reject too.
const failed = new Set<string>();
function failReady(readyId: string) {
  failed.add(readyId);
  failLoad(readyId);
}

// The frames waiting on a module that failed to load reject (their caller
// navigates).
function failLoad(readyId: string) {
  for (const [renderId, queue] of held) {
    if (
      queue.some((heldFrame) => heldFrame[HeldFrameProp.Deps].includes(readyId))
    ) {
      settle(renderId, queue, 0);
    }
  }
}

function settle(renderId: string, queue: Held[], applied: Applied) {
  held.delete(renderId);
  for (const heldFrame of queue) heldFrame[HeldFrameProp.Done](applied);
}
