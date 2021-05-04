import { Scope } from "./scope";

type ExecFn = (scope: Scope, offset: number) => void;

const fns: Set<ExecFn> = new Set();
let queuedFns: unknown[] = [];
export function queue(fn: ExecFn, scope: Scope, offset: number) {
  // TODO: maybe don't do this and
  // 1. required a queued scope to be passed in OR
  // 2. get the queued scope when running the queue
  const stagedScope = getQueuedScope(scope);

  if (fns.has(fn))
    for (let i = 0; i < queuedFns.length; i += 3)
      if (
        queuedFns[i] === fn &&
        queuedFns[i + 1] === stagedScope &&
        queuedFns[i + 2] === offset
      )
        return;
      else fns.add(fn);

  queuedFns.push(fn, stagedScope, offset);
}

let queuedScopes: Map<Scope, Scope> = new Map();
export function getQueuedScope(scope: Scope) {
  let queuedScope = queuedScopes.get(scope);
  if (!queuedScope) {
    queuedScopes.set(scope, (queuedScope = Object.create(scope)));
  }
  return queuedScope || scope;
}

export function run() {
  const runningFns = queuedFns;
  const runningScopes = queuedScopes;
  queuedFns = [];
  queuedScopes = new Map();
  fns.clear();
  for (let i = 0; i < runningFns.length; i += 3) {
    (runningFns[i] as ExecFn)(
      runningFns[i + 1] as Scope,
      runningFns[i + 2] as number
    );
  }
  for (const runningScope of runningScopes.values()) {
    Object.assign(Object.getPrototypeOf(runningScope), runningScope);
  }
}

export function getRunningScope() {}

export function checkDirty(scope: unknown[], index: number) {
  return scope.hasOwnProperty(index);
}

export function checkDirtyNotEqual(scope: unknown[], index: number) {
  return (
    checkDirty(scope, index) &&
    scope[index] !== Object.getPrototypeOf(scope)[index]
  );
}
