import type { Scope } from "../common/types";
import { schedule } from "./schedule";

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;
type QueueItem = {
  fn: (scope: Scope, argument?: unknown) => void;
  priority: number;
  scope: Scope;
  argument: unknown;
};

const queuedFns: QueueItem[] = [];
let queuedFnsHydrate: Array<Scope | ExecFn> = [];
let maxSafePriority = -1;

export function queue<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
  localPriority = 0,
  argument: Parameters<T>[1] = undefined
) {
  const priority = scope.___id + localPriority;
  if (priority < maxSafePriority) {
    maxSafePriority = priority;
  }
  queuedFns.push({ fn: fn as any, priority, scope, argument });
  schedule();
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
      if (queuedFns.length) {
        for (let i = 0; i < queuedFns.length; i++) {
          let current = queuedFns[i];
          if (current.priority > maxSafePriority) {
            queuedFns.sort(sortCompare);
            maxSafePriority = queuedFns[queuedFns.length - 1].priority;
            current = queuedFns[i];
          }
          if (current.priority !== queuedFns[i + 1]?.priority) {
            current.fn(current.scope, current.argument);
          }
        }
      }
    } finally {
      queuedFns.length = 0;
      maxSafePriority = -1;
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

function sortCompare(a: QueueItem, b: QueueItem) {
  return a.priority - b.priority;
}
