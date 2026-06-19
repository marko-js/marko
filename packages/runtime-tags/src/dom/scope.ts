import { AccessorProp, type BranchScope, type Scope } from "../common/types";
import { $signalReset } from "./abort-signal";
import { insertChildNodes, removeChildNodes } from "./dom";
import { runId } from "./queue";

let nextScopeId = 1e6; // Intentionally high to avoid conflict with server rendered ids.
let collectingScopes: Scope[] | undefined;

export function createScope(
  $global: Scope[AccessorProp.Global],
  closestBranch?: BranchScope,
): Scope {
  const scope = {
    [AccessorProp.Id]: nextScopeId++,
    [AccessorProp.Gen]: runId,
    [AccessorProp.ClosestBranch]: closestBranch,
    [AccessorProp.Global]: $global,
  } as Scope;

  collectingScopes?.push(scope);
  return scope;
}

export function syncGen(scope: Scope) {
  scope[AccessorProp.Gen] = runId;
}

export function _assert_init(scope: Scope, accessor: string) {
  if (
    MARKO_DEBUG &&
    (scope[AccessorProp.Gen] === runId || !(accessor in scope))
  ) {
    try {
      // @ts-expect-error create a browser uninitialized variable error, and then update the message.
      __UNINITIALIZED__;
      const __UNINITIALIZED__ = 1;
    } catch (err: any) {
      err.message = err.message.replaceAll("__UNINITIALIZED__", accessor);
      throw err;
    }
    throw new ReferenceError(
      `Cannot access '${accessor}' before initialization`,
    );
  }
  return scope[accessor];
}

export function collectScopes(fn: () => void) {
  const prev = collectingScopes;
  collectingScopes = [];
  try {
    fn();
    return collectingScopes;
  } finally {
    collectingScopes = prev;
  }
}

export function skipScope() {
  return nextScopeId++;
}

export function findBranchWithKey(
  scope: Scope,
  key: string,
): BranchScope | undefined {
  let branch = scope[AccessorProp.ClosestBranch];
  while (branch && branch[key] == null) {
    branch = branch[AccessorProp.ParentBranch];
  }
  return branch;
}

export function destroyBranch(branch: BranchScope) {
  branch[AccessorProp.ParentBranch]?.[AccessorProp.BranchScopes]?.delete(
    branch,
  );
  destroyNestedScopes(branch);
}

export function destroyScope(scope: Scope) {
  if (scope[AccessorProp.Gen]) {
    destroyNestedScopes(scope);
    resetControllers(scope);
  }
}

// TODO: turn into normal function declaration when resolved: https://github.com/oxc-project/oxc/issues/17364?issue=rolldown%7Crolldown%7C7666
const destroyNestedScopes = function destroyNestedScopes(scope: Scope) {
  scope[AccessorProp.Gen] = 0;
  scope[AccessorProp.BranchScopes]?.forEach(destroyNestedScopes);
  scope[AccessorProp.AbortScopes]?.forEach(resetControllers);
};

function resetControllers(scope: Scope) {
  for (const id in scope[AccessorProp.AbortControllers]) {
    $signalReset(scope, id);
  }
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
