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

const emptyBranch = createScope({}) as BranchScope;
export function getEmptyBranch(marker: Comment) {
  emptyBranch.___startNode = emptyBranch.___endNode = marker;
  return emptyBranch;
}

export function destroyBranch(branch: BranchScope) {
  branch.___parentBranch?.___branchScopes?.delete(branch);
  destroyNestedBranches(branch);
}

function destroyNestedBranches(branch: BranchScope) {
  branch.___destroyed = 1;
  branch.___branchScopes?.forEach(destroyNestedBranches);
  branch.___abortScopes?.forEach((scope) => {
    for (const id in scope.___abortControllers) {
      scope.___abortControllers[id]?.abort();
    }
  });
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

export function insertBranchBefore(
  branch: BranchScope,
  parent: Node & ParentNode,
  nextSibling: Node | null,
) {
  let current = branch.___startNode as Node;
  const stop = branch.___endNode.nextSibling;
  while (current !== stop) {
    const next = current.nextSibling;
    parent.insertBefore(current, nextSibling);
    current = next!;
  }
}
