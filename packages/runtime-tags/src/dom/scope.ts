import type { BranchScope, Scope } from "../common/types";
import { insertChildNodes, removeChildNodes } from "./dom";

let pendingScopes: Scope[] = [];
let nextID = 1e6;

export function createScope(
  $global: Scope["$global"],
  closestBranch?: BranchScope,
): Scope {
  const scope = {
    ___id: nextID++,
    ___pending: 1,
    ___closestBranch: closestBranch,
    $global,
  } as Scope;

  pendingScopes.push(scope);

  return scope;
}

export function skipScope() {
  return nextID++;
}

export function finishPendingScopes() {
  for (const scope of pendingScopes) {
    scope.___pending = 0;
  }

  pendingScopes = [];
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
  removeChildNodes(branch.___startNode, branch.___endNode);
}

export function insertBranchBefore(
  branch: BranchScope,
  parentNode: ParentNode,
  nextSibling: Node | null,
) {
  insertChildNodes(
    parentNode,
    nextSibling,
    branch.___startNode,
    branch.___endNode,
  );
}
