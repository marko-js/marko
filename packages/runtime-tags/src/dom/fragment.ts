import { type Scope } from "../common/types";
import { destroyScope } from "./scope";

export function removeAndDestroyScope(scope: Scope) {
  destroyScope(scope);
  let current = scope.___startNode as ChildNode;
  const stop = (scope.___endNode as ChildNode).nextSibling;
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
  const stop = (scope.___endNode as ChildNode).nextSibling;
  while (current !== stop) {
    const next = current.nextSibling;
    parent.insertBefore(current, nextSibling);
    current = next!;
  }
}
