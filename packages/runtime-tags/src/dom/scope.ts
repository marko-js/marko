import type { BranchScope, Scope } from "../common/types";

let pendingScopes: Scope[] = [];
let debugID = 0;

export function createScope($global: Scope["$global"]): Scope {
  const scope = {
    ___pending: 1,
    $global,
  } as Scope;

  if (MARKO_DEBUG) {
    scope.___debugId = "client-" + debugID++;
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

export function destroyBranch(branch: BranchScope) {
  branch.___destroyed = 1;
  branch.___branchScopes?.forEach(destroyBranch);

  if (branch.___abortScopes) {
    for (const scope of branch.___abortScopes) {
      for (const id in scope.___abortControllers) {
        scope.___abortControllers[id]?.abort();
      }
    }
  }
}

export function removeAndDestroyBranch(branch: BranchScope) {
  destroyBranch(branch);
  let current = branch.___startNode;
  const stop = branch.___endNode.nextSibling;
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
