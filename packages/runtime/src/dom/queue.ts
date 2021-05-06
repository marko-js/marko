import { set, cleanScopes, Scope } from "./scope";

type ExecFn = (scope: Scope, offset: number) => void;

const { port1, port2 } = new MessageChannel();
let queued: boolean;

port1.onmessage = () => {
  queued = false;
  run();
};

function flushAndWaitFrame() {
  run();
  requestAnimationFrame(triggerMacroTask);
}

function triggerMacroTask() {
  port2.postMessage(0);
}

const fns: Set<ExecFn> = new Set();
let queuedFns: unknown[] = [];

export function queue(fn: ExecFn, scope: Scope, offset: number) {
  if (fns.has(fn))
    for (let i = 0; i < queuedFns.length; i += 3)
      if (
        queuedFns[i] === fn &&
        queuedFns[i + 1] === scope &&
        queuedFns[i + 2] === offset
      )
        return;
      else fns.add(fn);

  if (!queued) {
    queued = true;
    queueMicrotask(flushAndWaitFrame);
  }

  queuedFns.push(fn, scope, offset);
}

let queuedValues: unknown[] = [];
export function setQueued(scope: Scope, index: number, value: unknown) {
  // TODO: if the same index is set twice for a scope,
  // the first one should be removed from the queue
  queuedValues.push(scope, index, value);
}

export function run() {
  if (queuedFns.length) {
    const runningFns = queuedFns;
    const runningValues = queuedValues;
    queuedFns = [];
    queuedValues = [];
    fns.clear();
    for (let i = 0; i < runningValues.length; i += 3) {
      set(
        runningValues[i] as Scope,
        runningValues[i + 1] as number,
        runningValues[i + 2] as unknown
      );
    }
    for (let i = 0; i < runningFns.length; i += 3) {
      (runningFns[i] as ExecFn)(
        runningFns[i + 1] as Scope,
        runningFns[i + 2] as number
      );
    }
    cleanScopes();
  }
}
