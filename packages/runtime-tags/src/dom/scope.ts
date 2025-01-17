import type { Scope } from "../common/types";

let pendingScopes: Scope[] = [];
let debugID = 0;

export function createScope($global: Scope["$global"]): Scope {
  const scope = {
    ___pending: 1,
    $global,
  } as Scope;

  if (MARKO_DEBUG) {
    scope.___debugId = debugID++;
  }

  pendingScopes.push(scope);

  return scope;
}

export function finishPendingScopes() {
  for (const scope of pendingScopes) {
    scope.___pending = 0;
  }

  pendingScopes = [];
}

const emptyScope = createScope({});
export function getEmptyScope(marker: Comment) {
  emptyScope.___startNode = emptyScope.___endNode = marker;
  return emptyScope;
}

export function destroyScope(scope: Scope) {
  _destroyScope(scope);

  scope.___cleanupOwner?.___cleanup?.delete(scope);

  return scope;
}

function _destroyScope(scope: Scope) {
  scope.___cleanup?.forEach(_destroyScope);
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
