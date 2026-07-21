import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  NodeType,
  type Scope,
} from "../common/types";
import { $signalReset } from "./abort-signal";
import { insertChildNodes, removeChildNodes } from "./dom";
import { runId } from "./queue";

let nextScopeId = 1e6; // Intentionally high to avoid conflict with server rendered ids.
let collectingScopes: Scope[] | undefined;

export function createScope(
  $global: Scope[AccessorProp.Global],
  closestBranch?: BranchScope,
  into?: Scope | 0 | false,
): Scope {
  let scope = {
    [AccessorProp.Id]: nextScopeId++,
    [AccessorProp.Gen]: runId,
    [AccessorProp.ClosestBranch]: closestBranch,
    [AccessorProp.Global]: $global,
  } as Scope;

  // A constructed branch binds into its patch scope, so fills, serialized
  // closures, and effects share one live identity (as resume binds scopes).
  if (into) scope = Object.assign(into, scope);
  collectingScopes?.push(scope);
  return scope;
}

/** While set, walked child scopes adopt the patch scope already linked at
 * their accessor (see `BeginChild` in `dom/walker.ts`). */
export let constructingBranch: 1 | undefined;
export function setConstructingBranch(on: 1 | undefined) {
  constructingBranch = on;
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

export function setConditionalRenderer<T>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: T,
  createBranch: (
    $global: Scope[AccessorProp.Global],
    renderer: NonNullable<T>,
    parentScope: Scope,
    parentNode: ParentNode,
  ) => BranchScope,
) {
  const referenceNode = scope[nodeAccessor] as Comment | Element;
  const prevBranch = scope[AccessorPrefix.BranchScopes + nodeAccessor] as
    BranchScope | undefined;
  const parentNode =
    referenceNode.nodeType > NodeType.Element
      ? (prevBranch?.[AccessorProp.StartNode] || referenceNode).parentNode!
      : (referenceNode as ParentNode);
  const newBranch = (scope[AccessorPrefix.BranchScopes + nodeAccessor] =
    newRenderer &&
    createBranch(scope[AccessorProp.Global], newRenderer, scope, parentNode));
  if (referenceNode === parentNode) {
    if (prevBranch) {
      destroyBranch(prevBranch);
      referenceNode.textContent = "";
    }

    if (newBranch) {
      insertBranchBefore(newBranch, parentNode, null);
    }
  } else if (prevBranch) {
    if (newBranch) {
      insertBranchBefore(
        newBranch,
        parentNode,
        prevBranch[AccessorProp.StartNode],
      );
    } else {
      parentNode.insertBefore(
        referenceNode,
        prevBranch[AccessorProp.StartNode],
      );
    }

    removeAndDestroyBranch(prevBranch);
  } else if (newBranch) {
    insertBranchBefore(newBranch, parentNode, referenceNode);
    referenceNode.remove();
  }
}
