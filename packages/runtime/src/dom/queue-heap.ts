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
let queuedFnsMap: Map<number, unknown> = new Map();

let queuedNext: unknown[] = [];
let queuedNextMap: Map<number, unknown> = new Map();

const enum QueueOffsets {
  FN = 0,
  SCOPE = 1,
  OFFSET = 2,
  PRIORITY = 3,
  TOTAL = 4,
}

export function queue<T extends ExecFn>(
  fn: T,
  localPriority = 0,
  argument: Parameters<T>[0] = undefined,
  scope = currentScope,
  offset = currentOffset
) {
  const priority = scope.___id + offset + localPriority;
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
    queuedFns[currentIndex + QueueOffsets.OFFSET] = offset;
    queuedFns[currentIndex + QueueOffsets.PRIORITY] = priority;
  }
  queuedFnsMap.set(priority, argument);
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
  const currentMap = queuedFnsMap;
  queuedFns = queuedNext;
  queuedFnsMap = queuedNextMap;
  const result = fn();
  queuedFns = current;
  queuedFnsMap = currentMap;
  return result;
}

export function run() {
  if (queuedFns.length) {
    while (queuedFns.length) {
      const [fn, scope, offset, priority] = queuedFns as [
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
      runWithScope(fn, offset, scope, undefined, value);
    }
    queuedFns = queuedNext;
    queuedFnsMap = queuedNextMap;
    queuedNext = [];
    queuedNextMap = new Map();
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
