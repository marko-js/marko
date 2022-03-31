import type { Scope } from "../common/types";
import { schedule } from "./schedule";

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;

let queuedFns: unknown[] = [];
let queuedFnsHydrate: Array<Scope | ExecFn> = [];

const enum QueueOffsets {
  FN = 0,
  SCOPE = 1,
  OFFSET = 2,
  PRIORITY = 3,
  ARGUMENT = 4,
  TOTAL = 5,
}

export function queue<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
  localPriority = 0,
  argument: Parameters<T>[1] = undefined
) {
  const priority = scope.___id + localPriority;
  const index = queuedFns.length;

  schedule();
  for (let i = queuedFns.length - 1; i >= index; i--) {
    queuedFns[i + QueueOffsets.TOTAL] = queuedFns[i];
  }

  queuedFns[index + QueueOffsets.FN] = fn;
  queuedFns[index + QueueOffsets.SCOPE] = scope;
  queuedFns[index + QueueOffsets.PRIORITY] = priority;
  queuedFns[index + QueueOffsets.ARGUMENT] = argument;
}

export function queueHydrate<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T
) {
  queuedFnsHydrate.push(scope, fn as unknown as ExecFn);
}

export function run() {
  if (queuedFns.length) {
    for (let i = 0; i < queuedFns.length; i += QueueOffsets.TOTAL) {
      (queuedFns[i + QueueOffsets.FN] as ExecFn)(
        queuedFns[i + QueueOffsets.SCOPE] as Scope,
        queuedFns[i + QueueOffsets.ARGUMENT]
      );
    }
    queuedFns = [];
  }
  if (queuedFnsHydrate.length) {
    for (let i = 0; i < queuedFnsHydrate.length; i += 2) {
      (queuedFnsHydrate[i + 1] as ExecFn)(queuedFnsHydrate[i] as Scope);
    }
    queuedFnsHydrate = [];
  }
}
