import { AccessorProp, type BranchScope, type Scope } from "../common/types";
import { $signalReset } from "./abort-signal";
import { insertChildNodes, removeChildNodes } from "./dom";
import { pendingScopes } from "./queue";

let nextScopeId = 1e6; // Intentionally high to avoid conflict with server rendered ids.

export function createScope(
  $global: Scope[AccessorProp.Global],
  closestBranch?: BranchScope,
): Scope {
  const scope = {
    [AccessorProp.Id]: nextScopeId++,
    [AccessorProp.Creating]: 1,
    [AccessorProp.ClosestBranch]: closestBranch,
    [AccessorProp.Global]: $global,
  } as Scope;

  pendingScopes.push(scope);
  return scope;
}

export function skipScope() {
  return nextScopeId++;
}

export function findBranchWithKey(
  scope: Scope,
  key: string,
): BranchScope | undefined {
  let branch = scope[AccessorProp.ClosestBranch];
  while (branch && !branch[key]) {
    branch = branch[AccessorProp.ParentBranch];
  }
  return branch;
}

export function destroyBranch(branch: BranchScope) {
  branch[AccessorProp.ParentBranch]?.[AccessorProp.BranchScopes]?.delete(
    branch,
  );
  destroyNestedBranches(branch);
}

function destroyNestedBranches(branch: BranchScope) {
  branch[AccessorProp.Destroyed] = 1;
  branch[AccessorProp.BranchScopes]?.forEach(destroyNestedBranches);
  branch[AccessorProp.AbortScopes]?.forEach((scope) => {
    for (const id in scope[AccessorProp.AbortControllers]) {
      $signalReset(scope, id);
    }
  });
}

export function removeAndDestroyBranch(branch: BranchScope) {
  destroyBranch(branch);
  removeChildNodes(
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
}

export function insertBranchBefore(
  branch: BranchScope,
  parentNode: ParentNode,
  nextSibling: Node | null,
) {
  insertChildNodes(
    parentNode,
    nextSibling,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
}

export function tempDetachBranch(branch: BranchScope) {
  // This is moves the branch contents to a document fragment (which will be
  // inserted again when we're ready to show the branch).
  // There is also a hack that sets `namespaceURI` on the detached fragment so
  // that any new branches created with this parent node get the correct namespace.
  const fragment = new DocumentFragment() as any;
  fragment.namespaceURI = (
    branch[AccessorProp.StartNode].parentNode as Element
  ).namespaceURI;
  insertChildNodes(
    fragment,
    null,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
}
