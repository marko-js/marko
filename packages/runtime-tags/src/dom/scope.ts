import { AccessorProp, type BranchScope, type Scope } from "../common/types";
import { $signalReset } from "./abort-signal";
import { insertChildNodes, removeChildNodes } from "./dom";
import { runId } from "./queue";

let nextScopeId = 1e6; // Intentionally high to avoid conflict with server rendered ids.
let collectingScopes: Scope[] | undefined;

export function createScope(
  $global: Scope[typeof AccessorProp.Global],
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
    cleanupScope(scope);
  }
}

// TODO: turn into normal function declaration when resolved: https://github.com/oxc-project/oxc/issues/17364?issue=rolldown%7Crolldown%7C7666
const destroyNestedScopes = function destroyNestedScopes(scope: Scope) {
  scope[AccessorProp.Gen] = 0;
  scope[AccessorProp.BranchScopes]?.forEach(destroyNestedScopes);
  scope[AccessorProp.AbortScopes]?.forEach(cleanupScope);
};

function cleanupScope(scope: Scope) {
  scope[AccessorProp.Subscriptions]?.forEach(unsubscribe, scope);

  for (const id in scope[AccessorProp.AbortControllers]) {
    $signalReset(scope, id);
  }
}

function unsubscribe(this: Scope, subscribers: Set<Scope>) {
  subscribers.delete(this);
}

export function removeAndDestroyBranch(branch: BranchScope) {
  if (MARKO_DEBUG) assertBranchRange(branch);
  destroyBranch(branch);
  removeChildNodes(
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
}

// When a slot's DOM range changes (branch filled, swapped, emptied to its
// marker, or hidden), enclosing branches whose start/end landed on the old
// range's edges must adopt the new edges; without owned boundary nodes this
// replaces the padding markers that used to pin those edges.
//
// Start above the branch that already owns the new range: `ParentBranch` for a
// range that is itself a branch, `ClosestBranch` for one that is not (a
// `<show>` range, or content rendered into a plain child scope).
export function fixBranchEdges(
  branch: BranchScope | undefined,
  oldStart: ChildNode,
  oldEnd: ChildNode,
  newStart: ChildNode,
  newEnd: ChildNode,
) {
  for (; branch; branch = branch[AccessorProp.ParentBranch]) {
    if (branch[AccessorProp.StartNode] === oldStart) {
      branch[AccessorProp.StartNode] = newStart;
    } else if (branch[AccessorProp.EndNode] !== oldEnd) {
      // Sharing neither edge means this owner encloses the range outright, as
      // does every owner above it.
      return;
    }
    if (branch[AccessorProp.EndNode] === oldEnd) {
      branch[AccessorProp.EndNode] = newEnd;
    }
  }
}

export function insertBranchBefore(
  branch: BranchScope,
  parentNode: ParentNode,
  nextSibling: Node | null,
) {
  if (MARKO_DEBUG) assertBranchRange(branch);
  insertChildNodes(
    parentNode,
    nextSibling,
    branch[AccessorProp.StartNode],
    branch[AccessorProp.EndNode],
  );
}

function assertBranchRange(branch: BranchScope) {
  const startNode = branch[AccessorProp.StartNode];
  const endNode = branch[AccessorProp.EndNode];
  if (
    startNode !== endNode &&
    (startNode.parentNode !== endNode.parentNode ||
      !(
        startNode.compareDocumentPosition(endNode) &
        /* DOCUMENT_POSITION_FOLLOWING */ 4
      ))
  ) {
    throw new Error(
      "Invalid branch DOM range; a slot transition failed to repair an enclosing branch's edges.",
    );
  }
}

export function tempDetachBranch(branch: BranchScope) {
  if (MARKO_DEBUG) assertBranchRange(branch);
  // Park the range in a DocumentFragment; the namespaceURI shim preserves the
  // namespace for branches created while it is detached.
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
