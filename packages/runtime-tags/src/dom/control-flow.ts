import { forIn, forOf, forTo } from "../common/for";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  type BranchScope,
  NodeType,
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
  getEmptyBranch,
  insertBranchBefore,
  removeAndDestroyBranch,
} from "./scope";
import { CLEAN, DIRTY, MARK, type Signal, type SignalOp } from "./signals";

export function conditional(
  nodeAccessor: Accessor,
  ...branches: Renderer[]
): Signal<number> {
  const branchAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  return (scope, newBranchIndexOrOp) => {
    if (
      newBranchIndexOrOp !== (scope[branchAccessor] as number) &&
      newBranchIndexOrOp !== DIRTY &&
      newBranchIndexOrOp !== MARK &&
      newBranchIndexOrOp !== CLEAN
    ) {
      (scope[nodeAccessor].nodeType > NodeType.Element
        ? setConditionalRenderer
        : setConditionalRendererOnlyChild)(
        scope,
        nodeAccessor,
        branches[(scope[branchAccessor] = newBranchIndexOrOp)],
        createBranchScopeWithRenderer,
      );
    }
  };
}

export function patchDynamicTag(
  fn: <T extends typeof dynamicTag>(cond: T) => T,
) {
  // Injection point for compat layer.
  dynamicTag = fn(dynamicTag);
}
export let dynamicTag = function dynamicTag(
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
        scope[rendererAccessor] = normalizedRenderer;
        setConditionalRenderer(
          scope,
          nodeAccessor,
          normalizedRenderer,
          createBranchScopeWithTagNameOrRenderer,
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

function setConditionalRenderer<T>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: T,
  createBranch: (
    renderer: NonNullable<T>,
    $global: Scope["$global"],
    parentScope: Scope,
    parentNode: ParentNode,
  ) => BranchScope,
) {
  const prevBranch =
    (scope[nodeAccessor + AccessorChar.ConditionalScope] as BranchScope) ||
    getEmptyBranch(scope[nodeAccessor] as Comment);
  const newBranch = newRenderer
    ? createBranch(
        newRenderer,
        scope.$global,
        scope,
        prevBranch.___endNode.parentNode!,
      )
    : (getEmptyBranch(scope[nodeAccessor] as Comment) as BranchScope);

  if (prevBranch !== newBranch) {
    insertBranchBefore(
      newBranch,
      prevBranch.___endNode.parentNode!,
      prevBranch.___endNode.nextSibling,
    );
    removeAndDestroyBranch(prevBranch);
    scope[nodeAccessor + AccessorChar.ConditionalScope] =
      newRenderer && newBranch;
  }
}

export function setConditionalRendererOnlyChild<T>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: T,
  createBranch: (
    renderer: NonNullable<T>,
    $global: Scope["$global"],
    parentScope: Scope,
    parentNode: ParentNode,
  ) => BranchScope,
) {
  const prevBranch = scope[
    nodeAccessor + AccessorChar.ConditionalScope
  ] as BranchScope;
  const referenceNode = scope[nodeAccessor] as Element;
  const newBranch =
    newRenderer &&
    createBranch(newRenderer, scope.$global, scope, referenceNode);

  referenceNode.textContent = "";

  if (newBranch) {
    insertBranchBefore(newBranch, referenceNode, null);
  }

  prevBranch && destroyBranch(prevBranch);

  scope[nodeAccessor + AccessorChar.ConditionalScope] = newBranch;
}

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
    if (valueOrOp === DIRTY) {
      // ignore
    } else if (valueOrOp === MARK || valueOrOp === CLEAN) {
      if (params) {
        for (const branch of scope[loopScopeAccessor] ||
          scope[nodeAccessor + AccessorChar.LoopScopeMap]?.values() ||
          []) {
          params(branch, valueOrOp);
        }
      }
    } else {
      const referenceNode = scope[nodeAccessor] as Element | Comment | Text;
      const referenceIsMarker = referenceNode.nodeType > NodeType.Element;
      const oldMap = scope[nodeAccessor + AccessorChar.LoopScopeMap] as
        | Map<unknown, BranchScope>
        | undefined;
      const oldArray = oldMap
        ? scope[nodeAccessor + AccessorChar.LoopScopeArray] || [
            ...oldMap.values(),
          ]
        : [];
      const parentNode = (
        referenceIsMarker
          ? referenceNode.parentNode || oldArray[0].___startNode.parentNode
          : referenceNode
      ) as Element;
      const newMap: Map<unknown, BranchScope> = (scope[
        nodeAccessor + AccessorChar.LoopScopeMap
      ] = new Map());
      const newArray: BranchScope[] = (scope[
        nodeAccessor + AccessorChar.LoopScopeArray
      ] = []);
      forEach(valueOrOp, (key, args) => {
        const branch =
          oldMap?.get(key) ||
          createBranchScopeWithRenderer(
            renderer,
            scope.$global,
            scope,
            parentNode,
          );
        params?.(branch, args);
        newMap.set(key, branch);
        newArray.push(branch);
      });

      let afterReference: null | Node = null;
      if (referenceIsMarker) {
        if (oldArray.length) {
          afterReference = oldArray[oldArray.length - 1].___endNode.nextSibling;
          if (!newArray.length) {
            parentNode.insertBefore(referenceNode, afterReference);
          }
        } else if (newArray.length) {
          afterReference = referenceNode.nextSibling;
          referenceNode.remove();
        }
      }

      reconcile(parentNode, oldArray, newArray, afterReference);
    }
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
