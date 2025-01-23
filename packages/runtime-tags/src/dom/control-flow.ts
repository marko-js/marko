import { forIn, forOf, forTo } from "../common/for";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  type BranchScope,
  type Scope,
} from "../common/types";
import { reconcile } from "./reconcile";
import {
  createBranchScopeWithRenderer,
  createBranchScopeWithTagNameOrRenderer,
  type Renderer,
} from "./renderer";
import {
  destroyBranch,
  getEmptyScope,
  insertBefore,
  removeAndDestroyBranch,
} from "./scope";
import { CLEAN, DIRTY, MARK, type Signal, type SignalOp } from "./signals";

export function patchConditionals(
  fn: <T extends typeof conditional | typeof conditionalOnlyChild>(
    cond: T,
  ) => T,
) {
  conditional = fn(conditional);
  conditionalOnlyChild = fn(conditionalOnlyChild);
}

export let conditional = function conditional(
  nodeAccessor: Accessor,
  fn?: ((scope: Scope) => void) | 0,
  getIntersection?: () => Signal<never>,
): Signal<Renderer | string | undefined> {
  const rendererAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  let intersection: Signal<never> | undefined =
    getIntersection &&
    ((scope, op) => (intersection = getIntersection!())(scope, op));

  return (scope, newRendererOrOp) => {
    if (newRendererOrOp === DIRTY) return;

    const currentRenderer = scope[rendererAccessor] as
      | Renderer
      | string
      | undefined;
    let op = newRendererOrOp as SignalOp;

    if (newRendererOrOp !== MARK && newRendererOrOp !== CLEAN) {
      const normalizedRenderer =
        normalizeDynamicRenderer<Renderer>(newRendererOrOp);
      if (isDifferentRenderer(normalizedRenderer, currentRenderer)) {
        setConditionalRenderer(scope, nodeAccessor, normalizedRenderer);
        fn && fn(scope);
        op = DIRTY;
      } else {
        op = CLEAN;
      }
    }
    intersection?.(scope, op);
  };
};

export function setConditionalRenderer(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: Renderer | string | undefined,
) {
  const newBranch = newRenderer
    ? createBranchScopeWithTagNameOrRenderer(newRenderer, scope.$global, scope)
    : undefined;

  const prevBranch =
    (scope[nodeAccessor + AccessorChar.ConditionalScope] as BranchScope) ||
    getEmptyScope(scope[nodeAccessor] as Comment);
  insertBefore(
    newBranch || (getEmptyScope(scope[nodeAccessor] as Comment) as BranchScope),
    prevBranch.___startNode.parentNode!,
    prevBranch.___startNode,
  );
  removeAndDestroyBranch(prevBranch);

  scope[nodeAccessor + AccessorChar.ConditionalRenderer] = newRenderer;
  scope[nodeAccessor + AccessorChar.ConditionalScope] = newBranch;
}

export let conditionalOnlyChild = function conditional(
  nodeAccessor: Accessor,
  fn?: ((scope: Scope) => void) | 0,
  getIntersection?: () => Signal<never>,
): Signal<Renderer | string | undefined> {
  const rendererAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  let intersection: Signal<never> | undefined =
    getIntersection &&
    ((scope, op) => (intersection = getIntersection!())(scope, op));

  return (scope, newRendererOrOp) => {
    if (newRendererOrOp === DIRTY) return;

    let currentRenderer = scope[rendererAccessor] as
      | Renderer
      | string
      | undefined;
    let op = newRendererOrOp as SignalOp;

    if (newRendererOrOp !== MARK && newRendererOrOp !== CLEAN) {
      const normalizedRenderer =
        normalizeDynamicRenderer<Renderer>(newRendererOrOp);
      if (isDifferentRenderer(normalizedRenderer, currentRenderer)) {
        currentRenderer = scope[rendererAccessor] = normalizedRenderer;
        setConditionalRendererOnlyChild(
          scope,
          nodeAccessor,
          normalizedRenderer,
        );
        fn && fn(scope);
        op = DIRTY;
      } else {
        op = CLEAN;
      }
    }
    intersection?.(scope, op);
  };
};

export function setConditionalRendererOnlyChild(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: Renderer | string | undefined,
) {
  const prevBranch = scope[
    nodeAccessor + AccessorChar.ConditionalScope
  ] as BranchScope;
  const referenceNode = scope[nodeAccessor] as Element;
  const newBranch = newRenderer
    ? createBranchScopeWithTagNameOrRenderer(newRenderer, scope.$global, scope)
    : undefined;

  referenceNode.textContent = "";

  if (newBranch) {
    insertBefore(newBranch, referenceNode, null);
  }

  prevBranch && destroyBranch(prevBranch);

  scope[nodeAccessor + AccessorChar.ConditionalScope] = newBranch;
}

const emptyMarkerMap = new Map([
  [Symbol(), getEmptyScope(undefined as any) as BranchScope],
]);
export const emptyMarkerArray = [
  /* @__PURE__ */ getEmptyScope(undefined as any) as BranchScope,
];
const emptyMap = new Map();
const emptyArray = [] as BranchScope[];

export function loopOf(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<[all: unknown[], by?: (item: unknown, index: number) => unknown]>(
    nodeAccessor,
    renderer,
    ([all, by = bySecondArg], cb) => {
      if (typeof by === "string") {
        forOf(all, (item, i) =>
          cb((item as Record<string, unknown>)[by], [item, i]),
        );
      } else {
        forOf(all, (item, i) => cb(by(item, i), [item, i]));
      }
    },
  );
}

export function loopIn(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<[obj: {}, by?: (key: string, v: unknown) => unknown]>(
    nodeAccessor,
    renderer,
    ([obj, by = byFirstArg], cb) =>
      forIn(obj, (key, value) => cb(by(key, value), [key, value])),
  );
}

export function loopTo(nodeAccessor: Accessor, renderer: Renderer) {
  return loop<
    [to: number, from: number, step: number, by?: (v: number) => unknown]
  >(nodeAccessor, renderer, ([to, from, step, by = byFirstArg], cb) =>
    forTo(to, from, step, (v) => cb(by(v), [v])),
  );
}

function loop<T extends unknown[] = unknown[]>(
  nodeAccessor: Accessor,
  renderer: Renderer,
  forEach: (value: T, cb: (key: unknown, args: unknown[]) => void) => void,
) {
  const loopScopeAccessor = nodeAccessor + AccessorChar.LoopScopeArray;
  const params = renderer.___args;
  return (scope: Scope, valueOrOp: T | SignalOp) => {
    if (valueOrOp === DIRTY) return;
    if (valueOrOp === MARK || valueOrOp === CLEAN) {
      const loopBranches =
        scope[loopScopeAccessor] ??
        scope[nodeAccessor + AccessorChar.LoopScopeMap]?.values() ??
        [];
      if (loopBranches !== emptyMarkerArray) {
        for (const branch of loopBranches) {
          params?.(branch, valueOrOp);
        }
      }

      return;
    }

    const referenceNode = scope[nodeAccessor] as Element | Comment | Text;
    // TODO: compiler should use only comment so the text check can be removed
    const referenceIsMarker =
      referenceNode.nodeType === 8 /* Comment */ ||
      referenceNode.nodeType === 3; /* Text */
    const oldMap =
      (scope[nodeAccessor + AccessorChar.LoopScopeMap] as Map<
        unknown,
        BranchScope
      >) || (referenceIsMarker ? emptyMarkerMap : emptyMap);
    const oldArray =
      (scope[nodeAccessor + AccessorChar.LoopScopeArray] as BranchScope[]) ||
      Array.from(oldMap.values());

    let newMap!: Map<unknown, BranchScope>;
    let newArray!: BranchScope[];
    let afterReference: Node | null;
    let parentNode: Node & ParentNode;
    let needsReconciliation = true;

    forEach(valueOrOp, (key, args) => {
      let branch = oldMap.get(key);
      if (!branch) {
        branch = createBranchScopeWithRenderer(renderer, scope.$global, scope);
        // TODO: once we can track moves
        // needsReconciliation = true;
      } else {
        // TODO: track if any childScope has changed index
        // needsReconciliation ||= oldArray[index] !== childScope;
      }
      if (params) {
        params(branch, args);
      }

      if (newMap) {
        newMap.set(key, branch);
        newArray.push(branch);
      } else {
        newMap = new Map([[key, branch]]);
        newArray = [branch];
      }
    });

    if (!newMap) {
      if (referenceIsMarker) {
        newMap = emptyMarkerMap;
        newArray = emptyMarkerArray;
        getEmptyScope(referenceNode as Comment);
      } else {
        // TODO: we should be able to use child template analysis (or runtime analysis?) to know if its unnecessary to destroy these scopes
        oldArray.forEach(destroyBranch);
        referenceNode.textContent = "";
        newMap = emptyMap;
        newArray = emptyArray;
        needsReconciliation = false;
      }
    }

    if (needsReconciliation) {
      if (referenceIsMarker) {
        if (oldMap === emptyMarkerMap) {
          getEmptyScope(referenceNode as Comment);
        }
        const oldLastChild = oldArray[oldArray.length - 1];
        afterReference = oldLastChild.___endNode.nextSibling;
        parentNode = oldLastChild.___startNode.parentNode!;
      } else {
        afterReference = null;
        parentNode = referenceNode as Element;
      }
      reconcile(parentNode, oldArray, newArray!, afterReference);
    }

    scope[nodeAccessor + AccessorChar.LoopScopeMap] = newMap;
    scope[nodeAccessor + AccessorChar.LoopScopeArray] = newArray;
  };
}

function bySecondArg(_item: unknown, index: unknown) {
  return index;
}

function byFirstArg(name: unknown) {
  return name;
}

function isDifferentRenderer(
  a: Renderer | string | undefined,
  b: Renderer | string | undefined,
) {
  return (
    a !== b &&
    ((a as Renderer | undefined)?.___id || 0) !==
      (b as Renderer | undefined)?.___id
  );
}
