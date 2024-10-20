import type { Scope } from "../common/types";
import type { Renderer } from "./renderer";

let debugID = 0;

export function createScope($global: Scope["$global"]): Scope {
  const scope = {
    ___client: 1,
    $global,
  } as Scope;

  if (MARKO_DEBUG) {
    scope.___debugId = debugID++;
  }
  return scope;
}

const emptyScope = createScope({});
export function getEmptyScope(marker: Comment) {
  emptyScope.___startNode = emptyScope.___endNode = marker;
  return emptyScope;
}

function binder<T, U = T>(bind: (scope: Scope, value: T) => U) {
  return (scope: Scope, value: T): U => {
    scope.___bound ||= new Map();
    let bound = scope.___bound.get(value) as U;
    if (!bound) {
      bound = bind(scope, value);
      scope.___bound.set(value, bound);
    }
    return bound;
  };
}

export const bindRenderer = binder(
  (ownerScope, renderer: Renderer): Renderer =>
    renderer && {
      ...renderer,
      ___owner: ownerScope,
    },
);

type BindableFunction = (
  this: unknown,
  scope: Scope,
  ...args: any[]
) => unknown;
export const bindFunction = binder(
  <T extends BindableFunction>(boundScope: Scope, fn: T) =>
    fn.length
      ? function bound(this: unknown, ...args: any[]) {
          return fn.call(this, boundScope, ...args);
        }
      : function bound(this: unknown) {
          return fn.call(this, boundScope);
        },
);

export function destroyScope(scope: Scope) {
  _destroyScope(scope);

  scope.___cleanupOwner?.___cleanup?.delete(scope);

  const closureSignals = scope.___renderer?.___closureSignals;
  if (closureSignals) {
    for (const signal of closureSignals) {
      signal.___unsubscribe?.(scope);
    }
  }
  return scope;
}

function _destroyScope(scope: Scope) {
  const cleanup = scope.___cleanup;
  if (cleanup) {
    for (const instance of cleanup) {
      _destroyScope(instance);
    }
  }

  const controllers = scope.___abortControllers;
  if (controllers) {
    for (const ctrl of controllers.values()) {
      ctrl.abort();
    }
  }
}

export function onDestroy(scope: Scope) {
  let parentScope = scope.___cleanupOwner;
  while (parentScope && !parentScope.___cleanup?.has(scope)) {
    (parentScope.___cleanup ||= new Set()).add(scope);
    scope = parentScope;
    parentScope = scope.___cleanupOwner;
  }
}

export function removeAndDestroyScope(scope: Scope) {
  destroyScope(scope);
  let current = scope.___startNode;
  const stop = scope.___endNode.nextSibling;
  while (current !== stop) {
    const next = current.nextSibling;
    current.remove();
    current = next!;
  }
}

export function insertBefore(
  scope: Scope,
  parent: Node & ParentNode,
  nextSibling: Node | null,
) {
  let current = scope.___startNode as Node;
  const stop = scope.___endNode.nextSibling;
  while (current !== stop) {
    const next = current.nextSibling;
    parent.insertBefore(current, nextSibling);
    current = next!;
  }
}
