import { Conditional, Loop } from "./control-flow";
import { DOMMethods, staticNodeMethods } from "./dom";

const dirtyScopes: Set<Scope> = new Set();

export type Scope = unknown[] &
  DOMMethods & {
    ___startNode: Conditional | Loop | Node | undefined;
    ___endNode: Conditional | Loop | Node | undefined;
    ___dirty: Record<number, true> | true | undefined;
  };

export function createScope(size: number, methods: DOMMethods): Scope {
  const scope = new Array(size).fill(undefined) as Scope;
  scope.___startNode = scope.___endNode = undefined;
  scope.___dirty = true;
  dirtyScopes.add(Object.assign(scope, methods));
  return scope;
}

const emptyScope = createScope(0, staticNodeMethods);
export function getEmptyScope(marker?: Comment) {
  emptyScope.___startNode = emptyScope.___endNode = marker;
  return emptyScope;
}

export function set(scope: Scope, index: number, value: unknown) {
  if (scope[index] !== value) {
    if (!scope.___dirty) {
      scope.___dirty = {};
      dirtyScopes.add(scope);
    }

    scope[index] = value;
    if (scope.___dirty !== true) {
      scope.___dirty[index] = true;
    }
  }
}

export function checkDirty(scope: Scope, index: number) {
  const dirty = scope.___dirty;
  return dirty === true || (dirty && dirty[index]);
}

export function cleanScopes() {
  for (const scope of dirtyScopes) {
    scope.___dirty = undefined;
  }
  dirtyScopes.clear();
}
