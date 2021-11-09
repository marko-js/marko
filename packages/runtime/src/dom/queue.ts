import type { Scope } from "../common/types";
import {
  runWithScope,
  currentScope,
  currentOffset,
  getOwnerScope,
  ownerOffset,
} from "./scope";

type ExecFn = (arg?: any) => void;

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

let queuedFns: unknown[] = [];
let queuedNext: unknown[] = [];

const enum QueueOffsets {
  FN = 0,
  SCOPE = 1,
  OFFSET = 2,
  SORT_VALUE = 3,
  ARGUMENT = 4,
  TOTAL = 5,
}

export function queue<T extends ExecFn>(
  fn: T,
  localIndex = 0,
  argument: Parameters<T>[0] = undefined,
  scope = currentScope,
  offset = currentOffset
) {
  const index = findQueueIndex(scope, offset + localIndex);

  // index is where the function should be in the queue
  // but if it already exists, we should not add it again
  if (
    queuedFns[index + QueueOffsets.FN] !== fn ||
    queuedFns[index + QueueOffsets.SCOPE] !== scope ||
    queuedFns[index + QueueOffsets.OFFSET] !== offset
  ) {
    if (!queued) {
      queued = true;
      queueMicrotask(flushAndWaitFrame);
    }

    for (let i = queuedFns.length - 1; i >= index; i--) {
      queuedFns[i + QueueOffsets.TOTAL] = queuedFns[i];
    }

    queuedFns[index + QueueOffsets.FN] = fn;
    queuedFns[index + QueueOffsets.SCOPE] = scope;
    queuedFns[index + QueueOffsets.OFFSET] = offset;
    queuedFns[index + QueueOffsets.SORT_VALUE] = offset + localIndex;
  }
  queuedFns[index + QueueOffsets.ARGUMENT] = argument;
}

export function queueInOwner<T extends ExecFn>(
  fn: T,
  localIndex?: number,
  argument?: Parameters<T>[0],
  ownerLevel?: number
) {
  queue(fn, localIndex, argument, getOwnerScope(ownerLevel), ownerOffset);
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
        [queuedFns[i + QueueOffsets.ARGUMENT]]
      );
    }
    queuedFns = queuedNext;
    queuedNext = [];
  }
}

function findQueueIndex(scope: Scope, sortValue: number) {
  let index = 0;
  let max = queuedFns.length / QueueOffsets.TOTAL;

  while (index < max) {
    const mid = (index + max) >>> 1;
    const compareResult = compareQueue(
      mid * QueueOffsets.TOTAL,
      scope,
      sortValue
    );
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

function compareQueue(index: number, scope: Scope, sortValue: number) {
  return (
    compare(
      (queuedFns[index + QueueOffsets.SCOPE] as Scope).___id,
      scope.___id
    ) || (queuedFns[index + QueueOffsets.SORT_VALUE] as number) - sortValue
  );
}

function compare(a: number | string, b: number | string) {
  return a < b ? -1 : a > b ? 1 : 0;
}
