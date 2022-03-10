import type { Scope } from "../common/types";
import {
  runWithScope,
  currentScope,
  currentOffset,
  getOwnerScope,
  ownerOffset,
} from "./scope";
import { schedule } from "./schedule";

type ExecFn = (arg?: any) => void;

let queuedFns: unknown[] = [];
let queuedNext: unknown[] = [];

const enum QueueOffsets {
  FN = 0,
  SCOPE = 1,
  OFFSET = 2,
  PRIORITY = 3,
  ARGUMENT = 4,
  TOTAL = 5,
}

export function queue<T extends ExecFn>(
  fn: T,
  localPriority = 0,
  argument: Parameters<T>[0] = undefined,
  scope = currentScope,
  offset = currentOffset
) {
  const priority = scope.___id + offset + localPriority;
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
    queuedFns[index + QueueOffsets.OFFSET] = offset;
    queuedFns[index + QueueOffsets.PRIORITY] = priority;
  }
  queuedFns[index + QueueOffsets.ARGUMENT] = argument;
}

export function queueInOwner<T extends ExecFn>(
  fn: T,
  localPriority?: number,
  argument?: Parameters<T>[0],
  ownerLevel?: number
) {
  queue(fn, localPriority, argument, getOwnerScope(ownerLevel), ownerOffset);
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
      runWithScope(
        queuedFns[i + QueueOffsets.FN] as ExecFn,
        queuedFns[i + QueueOffsets.OFFSET] as number,
        queuedFns[i + QueueOffsets.SCOPE] as Scope,
        undefined,
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
