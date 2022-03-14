import type { Scope } from "../common/types";
import { schedule } from "./schedule";

type ExecFn = (scope: Scope, arg?: any) => void;

let queuedFns: unknown[] = [];
let queuedNext: unknown[] = [];

const enum QueueOffsets {
  FN = 0,
  SCOPE = 1,
  PRIORITY = 2,
  ARGUMENT = 3,
  TOTAL = 4,
}

export function queue<T extends ExecFn>(
  scope: Scope,
  fn: T,
  localPriority = 0,
  argument: Parameters<T>[1] = undefined
) {
  const priority = scope.___id + localPriority;
  const index = findQueueIndex(priority);

  // index is where the function should be in the queue
  // but if it already exists, we should not add it again
  if (queuedFns[index + QueueOffsets.PRIORITY] !== priority) {
    schedule();

    for (let i = queuedFns.length - 1; i >= index; i--) {
      queuedFns[i + QueueOffsets.TOTAL] = queuedFns[i];
    }

    queuedFns[index + QueueOffsets.FN] = fn;
    queuedFns[index + QueueOffsets.SCOPE] = scope;
    queuedFns[index + QueueOffsets.PRIORITY] = priority;
  }
  queuedFns[index + QueueOffsets.ARGUMENT] = argument;
}

export function withQueueNext(fn: () => unknown) {
  const current = queuedFns;
  queuedFns = queuedNext;
  const result = fn();
  queuedFns = current;
  return result;
}

export function run() {
  if (queuedFns.length) {
    for (let i = 0; i < queuedFns.length; i += QueueOffsets.TOTAL) {
      (queuedFns[i + QueueOffsets.FN] as ExecFn)(
        queuedFns[i + QueueOffsets.SCOPE] as Scope,
        queuedFns[i + QueueOffsets.ARGUMENT]
      );
    }
    queuedFns = queuedNext;
    queuedNext = [];
  }
}

function findQueueIndex(priority: number) {
  let index = 0;
  let max = queuedFns.length / QueueOffsets.TOTAL;

  while (index < max) {
    const mid = (index + max) >>> 1;
    const compareResult =
      (queuedFns[mid * QueueOffsets.TOTAL + QueueOffsets.PRIORITY] as number) -
      priority;
    if (compareResult > 0) {
      max = mid;
    } else if (compareResult < 0) {
      index = mid + 1;
    } else {
      return mid * QueueOffsets.TOTAL;
    }
  }

  return index * QueueOffsets.TOTAL;
}
