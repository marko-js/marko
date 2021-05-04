import { Conditional, Loop } from "./control-flow";
import { DOMMethods, staticNodeMethods } from "./dom";

export type Scope = unknown[] &
  DOMMethods & {
    ___startNode: Conditional | Loop | Node | undefined;
    ___endNode: Conditional | Loop | Node | undefined;
  };

export function createScope(size: number, methods: DOMMethods): Scope {
  const scope = new Array(size).fill(undefined) as Scope;
  scope.___startNode = scope.___endNode = undefined;
  return Object.assign(scope, methods);
}

const emptyScope = createScope(0, staticNodeMethods);
export function getEmptyScope(marker?: Comment) {
  emptyScope.___startNode = emptyScope.___endNode = marker;
  return emptyScope;
}

export function attachDOMToScope(scope: Scope, dom: Node) {}
