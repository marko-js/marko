import type { Scope } from "../common/types";
import { ConditionalIndex, LoopIndex, emptyMarkerArray } from "./control-flow";

export type DOMFragment = {
  ___insertBefore: (
    scope: Scope,
    parent: Node & ParentNode,
    nextSibling: Node | null
  ) => void;
  ___remove: (scope: Scope) => void;
  ___getParentNode: (scope: Scope) => Node & ParentNode;
  ___getAfterNode: (scope: Scope) => Node | null;
  ___getFirstNode: (scope: Scope) => Node & ChildNode;
  ___getLastNode: (scope: Scope) => Node & ChildNode;
};

export const singleNodeFragment: DOMFragment = {
  ___insertBefore(scope: Scope, parent, nextSibling) {
    parent.insertBefore(scope.___startNode as Node, nextSibling);
  },
  ___remove(scope: Scope) {
    (scope.___startNode as ChildNode).remove();
  },
  ___getParentNode(scope: Scope) {
    return this.___getFirstNode(scope).parentNode!;
  },
  ___getAfterNode(scope: Scope) {
    return this.___getLastNode(scope).nextSibling;
  },
  ___getFirstNode(scope: Scope) {
    return scope.___startNode as ChildNode;
  },
  ___getLastNode(scope: Scope) {
    return scope.___endNode as ChildNode;
  },
};

export const staticNodesFragment: DOMFragment = {
  ...singleNodeFragment,
  ___insertBefore(scope, parent, nextSibling) {
    let current: Node = this.___getFirstNode(scope);
    const stop = this.___getAfterNode(scope);
    while (current !== stop) {
      const next = current.nextSibling;
      parent.insertBefore(current, nextSibling);
      current = next!;
    }
  },
  ___remove(scope) {
    let current = this.___getFirstNode(scope);
    const stop = this.___getAfterNode(scope);
    while (current !== stop) {
      const next = current.nextSibling;
      current.remove();
      current = next!;
    }
  },
} as DOMFragment;

export const dynamicFragment: DOMFragment = {
  ...staticNodesFragment,
  ___getFirstNode: getFirstNode,
  ___getLastNode: getLastNode,
};

function getFirstNode(
  currentScope: Scope,
  indexOrNode: (Node & ChildNode) | number = currentScope.___startNode!,
  last?: boolean
): Node & ChildNode {
  let scopeOrScopes: Scope | Scope[];

  if (MARKO_DEBUG) {
    if (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      ConditionalIndex.SCOPE !== LoopIndex.SCOPE_ARRAY ||
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Unreachable code error
      ConditionalIndex.REFERENCE_NODE !== LoopIndex.REFERENCE_NODE
    ) {
      throw new Error("Offset mismatch between conditionals and loops");
    }
  }

  return typeof indexOrNode === "number"
    ? !(scopeOrScopes = currentScope[indexOrNode + ConditionalIndex.SCOPE] as
        | Scope
        | Scope[]) || scopeOrScopes === emptyMarkerArray
      ? (currentScope[indexOrNode + ConditionalIndex.REFERENCE_NODE] as Comment)
      : (last ? getLastNode : getFirstNode)(
          (scopeOrScopes as Scope).___id
            ? (scopeOrScopes as Scope)
            : (scopeOrScopes[last ? scopeOrScopes.length - 1 : 0] as Scope)
        )
    : indexOrNode;
}

function getLastNode(currentScope: Scope) {
  return getFirstNode(currentScope, currentScope.___endNode, true);
}
