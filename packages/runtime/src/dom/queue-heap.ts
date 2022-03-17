import type { Scope } from "../common/types";
import { schedule } from "./schedule";

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;

const queuedFns: unknown[] = [];
const queuedFnsMap: Map<number, unknown> = new Map();
let queuedFnsHydrate: Array<Scope | ExecFn> = [];

const enum QueueOffsets {
  FN = 0,
  SCOPE = 1,
  PRIORITY = 2,
  TOTAL = 3,
}

export function queue<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
  localPriority = 0,
  argument: Parameters<T>[1] = undefined
) {
  const priority = scope.___id + localPriority;
  if (!queuedFnsMap.has(priority)) {
    schedule();

    let currentIndex = queuedFns.length;

    while (currentIndex > 0) {
      const parentIndex = ((currentIndex - 1) >> 3) * QueueOffsets.TOTAL;
      if (priority > (queuedFns[parentIndex + QueueOffsets.PRIORITY] as number))
        break;
      move(parentIndex, currentIndex);
      currentIndex = parentIndex;
    }

    queuedFns[currentIndex + QueueOffsets.FN] = fn;
    queuedFns[currentIndex + QueueOffsets.SCOPE] = scope;
    queuedFns[currentIndex + QueueOffsets.PRIORITY] = priority;
  }
  queuedFnsMap.set(priority, argument);
}

export function queueHydrate<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T
) {
  queuedFnsHydrate.push(scope, fn as unknown as ExecFn);
}

export function run() {
  if (queuedFns.length) {
    while (queuedFns.length) {
      const [fn, scope, priority] = queuedFns as [
        ExecFn,
        Scope,
        number,
        number
      ];
      pop();
      // TODO: we should not have to delete from the map
      // but we're not currently using unique queue priorities
      // so this allows (some) things to work in the meantime
      const value = queuedFnsMap.get(priority);
      queuedFnsMap.delete(priority);
      fn(scope, value);
    }
    // TODO: determine if it's faster to delete from the map
    // or just create a new one after the above loop
  }
  if (queuedFnsHydrate.length) {
    for (let i = 0; i < queuedFnsHydrate.length; i += 2) {
      (queuedFnsHydrate[i + 1] as ExecFn)(queuedFnsHydrate[i] as Scope);
    }
    queuedFnsHydrate = [];
  }
}

function pop() {
  const last = queuedFns.length - QueueOffsets.TOTAL;
  const newLength = last;
  const halfLength = newLength >> 1;
  const lastPriority = queuedFns[last + QueueOffsets.PRIORITY] as number;
  let currentIndex = 0;

  while (currentIndex < halfLength) {
    let bestChildIndex = (currentIndex << 1) + QueueOffsets.TOTAL;
    const rightChildIndex = bestChildIndex + QueueOffsets.TOTAL;

    if (
      rightChildIndex < newLength &&
      (queuedFns[rightChildIndex + QueueOffsets.PRIORITY] as number) <
        (queuedFns[bestChildIndex + QueueOffsets.PRIORITY] as number)
    ) {
      bestChildIndex = rightChildIndex;
    }
    if (
      lastPriority <
      (queuedFns[bestChildIndex + QueueOffsets.PRIORITY] as number)
    )
      break;

    move(bestChildIndex, currentIndex);
    currentIndex = bestChildIndex;
  }

  move(last, currentIndex);
  queuedFns.length = newLength;
}

function move(sourceIndex: number, targetIndex: number) {
  for (let i = 0; i < QueueOffsets.TOTAL; i++) {
    queuedFns[targetIndex + i] = queuedFns[sourceIndex + i];
  }
}
