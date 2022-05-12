import type { Scope } from "../common/types";
import { schedule } from "./schedule";

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;

const queuedFns: unknown[] = [];
const queuedFnsMap: Map<number, number> = new Map();
const priorityHeap: number[] = [];
let queuedFnsHydrate: Array<Scope | ExecFn> = [];

const enum QueueOffsets {
  FN = 0,
  SCOPE = 1,
  ARGUMENT = 2,
}

export function queue<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
  localPriority = 0,
  argument: Parameters<T>[1] = undefined
) {
  const priority = scope.___id + localPriority;
  let index = queuedFnsMap.get(priority);
  if (index === undefined) {
    schedule();

    queuedFnsMap.set(priority, (index = queuedFns.length));
    queuedFns[index + QueueOffsets.FN] = fn;
    queuedFns[index + QueueOffsets.SCOPE] = scope;

    let heapIndex = priorityHeap.length;
    while (heapIndex > 0) {
      const parentIndex = (heapIndex - 1) >> 1;
      if (priority > priorityHeap[parentIndex]) break;
      priorityHeap[heapIndex] = priorityHeap[parentIndex];
      heapIndex = parentIndex;
    }
    priorityHeap[heapIndex] = priority;
  }
  queuedFns[index + QueueOffsets.ARGUMENT] = argument;
}

export function queueHydrate<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T
) {
  queuedFnsHydrate.push(scope, fn as unknown as ExecFn);
}

export function run() {
  try {
    try {
      if (priorityHeap.length) {
        while (priorityHeap.length) {
          const priority = priorityHeap[0];
          const index = queuedFnsMap.get(priority)!;
          const fn = queuedFns[index + QueueOffsets.FN] as ExecFn;
          const scope = queuedFns[index + QueueOffsets.SCOPE] as Scope;
          const argument = queuedFns[index + QueueOffsets.ARGUMENT];

          pop();

          // TODO: we should not have to delete from the map
          // but we're not currently using unique queue priorities
          // so this allows (some) things to work in the meantime
          queuedFnsMap.delete(priority);
          fn(scope, argument);
        }
        // TODO: determine if it's faster to delete from the map
        // or just create a new one after the above loop
      }
    } finally {
      queuedFnsMap.clear();
      queuedFns.length = 0;
      priorityHeap.length = 0;
    }
    if (queuedFnsHydrate.length) {
      for (let i = 0; i < queuedFnsHydrate.length; i += 2) {
        (queuedFnsHydrate[i + 1] as ExecFn)(queuedFnsHydrate[i] as Scope);
      }
    }
  } finally {
    queuedFnsHydrate = [];
  }
}

function pop() {
  const last = priorityHeap.length - 1;
  const newLength = last;
  const halfLength = newLength >> 1;
  const lastPriority = priorityHeap[last];
  let currentIndex = 0;

  while (currentIndex < halfLength) {
    let bestChildIndex = (currentIndex << 1) + 1;
    const rightChildIndex = bestChildIndex + 1;

    if (
      rightChildIndex < newLength &&
      priorityHeap[rightChildIndex] < priorityHeap[bestChildIndex]
    ) {
      bestChildIndex = rightChildIndex;
    }
    if (lastPriority < priorityHeap[bestChildIndex]) break;

    priorityHeap[currentIndex] = priorityHeap[bestChildIndex];
    currentIndex = bestChildIndex;
  }

  priorityHeap[currentIndex] = lastPriority;
  priorityHeap.length = newLength;
}
