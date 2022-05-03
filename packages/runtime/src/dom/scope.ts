import { queueHydrate } from "./queue";
import type { Scope } from "../common/types";

const CLIENT_SCOPE_ID_BIT = 2 ** 52;
const SCOPE_ID_MULTIPLIER = 2 ** 16;
let scopeId = 0;

export function createScope(owner?: Scope): Scope {
  const scope = {} as Scope;
  scope.___id = CLIENT_SCOPE_ID_BIT + SCOPE_ID_MULTIPLIER * scopeId++;
  scope._ = owner;
  return scope;
}

const emptyScope = createScope();
export function getEmptyScope(marker?: Comment) {
  emptyScope.___startNode = emptyScope.___endNode = marker;
  return emptyScope;
}

export function write<S extends Scope>(
  scope: S,
  localIndex: number,
  value: unknown
) {
  if (scope[localIndex] !== value) {
    scope[localIndex] = value;
    return 1;
  }
  return 0;
}

export function bind<S extends Scope>(
  boundScope: S,
  fn: (scope: S, ...args: unknown[]) => unknown
) {
  return fn.length
    ? (...args: unknown[]) => fn(boundScope, ...args)
    : () => fn(boundScope);
}

export function destroyScope(scope: Scope) {
  scope._?.___cleanup?.delete(scope);

  const cleanup = scope.___cleanup;
  if (cleanup) {
    for (const instance of cleanup) {
      if (typeof instance === "number") {
        queueHydrate(scope, scope[instance] as () => void);
      } else {
        destroyScope(instance);
      }
    }
  }
  return scope;
}

export function onDestroy(scope: Scope, localIndex: number) {
  const parentScope = scope._;
  if (parentScope) {
    (parentScope.___cleanup = parentScope.___cleanup || new Set()).add(scope);
  }
  (scope.___cleanup = scope.___cleanup || new Set()).add(localIndex);
}
