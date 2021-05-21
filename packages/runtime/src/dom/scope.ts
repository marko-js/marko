import { Conditional, Loop } from "./control-flow";
import { DOMMethods, staticNodeMethods } from "./dom";

const dirtyScopes: Set<Scope> = new Set();

export type Scope = unknown[] &
  DOMMethods & {
    ___parentScope: Scope | undefined;
    ___startNode: Conditional | Loop | Node | undefined;
    ___endNode: Conditional | Loop | Node | undefined;
    ___dirty: Record<number, true> | true | undefined;
    ___cleanup: Set<number | Scope> | undefined;
  };

export function createScope(
  size: number,
  methods: DOMMethods,
  parentScope?: Scope
): Scope {
  const scope = new Array(size) as Scope;
  scope.___startNode = scope.___endNode = undefined;
  scope.___dirty = true;
  scope.___parentScope = parentScope;
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

export function destroyScope(scope: Scope) {
  scope.___parentScope?.___cleanup?.delete(scope);

  const cleanup = scope.___cleanup;
  if (cleanup) {
    for (const instance of cleanup) {
      if (typeof instance === "number") {
        (scope[instance] as () => void)();
      } else {
        destroyScope(instance);
      }
    }
  }
  return scope;
}

export function onDestroy(scope: Scope, index: number) {
  const parentScope = scope.___parentScope;
  if (parentScope) {
    (parentScope.___cleanup = parentScope.___cleanup || new Set()).add(scope);
  }
  (scope.___cleanup = scope.___cleanup || new Set()).add(index);
}
