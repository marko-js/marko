import type { BranchScope, Scope } from "../common/types";
import { $signalReset } from "./abort-signal";
import { insertChildNodes, removeChildNodes } from "./dom";
import { pendingScopes } from "./queue";

export function createScope(
  $global: Scope["$global"],
  closestBranch?: BranchScope,
): Scope {
  const scope = {
    ___id: $global.___nextScopeId++,
    ___creating: 1,
    ___closestBranch: closestBranch,
    $global,
  } as Scope;

  pendingScopes.push(scope);
  return scope;
}

export function skipScope(scope: Scope) {
  return scope.$global.___nextScopeId++;
}

export function findBranchWithKey(
  scope: Scope,
  key: string,
): BranchScope | undefined {
  let branch = scope.___closestBranch;
  while (branch && !branch[key]) {
    branch = branch.___parentBranch;
  }
  return branch;
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
      $signalReset(scope, id);
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

export function tempDetachBranch(branch: BranchScope) {
  // This is moves the branch contents to a document fragment (which will be
  // inserted again when we're ready to show the branch).
  // There is also a hack that sets `namespaceURI` on the detached fragment so
  // that any new branches created with this parent node get the correct namespace.
  const fragment = new DocumentFragment() as any;
  fragment.namespaceURI = (
    branch.___startNode.parentNode as Element
  ).namespaceURI;
  insertChildNodes(fragment, null, branch.___startNode, branch.___endNode);
}
