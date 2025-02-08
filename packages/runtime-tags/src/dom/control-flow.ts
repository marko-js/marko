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

const emptyMarkerMap = new Map([
  [Symbol(), /* @__PURE__ */ getEmptyBranch(0 as any) as BranchScope],
]);
export const emptyMarkerArray = [
  /* @__PURE__ */ getEmptyBranch(0 as any) as BranchScope,
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
    const referenceIsMarker = referenceNode.nodeType > NodeType.Element;
    const oldMap =
      (scope[nodeAccessor + AccessorChar.LoopScopeMap] as Map<
        unknown,
        BranchScope
      >) || (referenceIsMarker ? emptyMarkerMap : emptyMap);
    const oldArray =
      (scope[nodeAccessor + AccessorChar.LoopScopeArray] as BranchScope[]) ||
      Array.from(oldMap.values());
    const parentNode = (
      referenceIsMarker
        ? referenceNode.parentNode || oldArray[0].___startNode.parentNode
        : referenceNode
    ) as Element;

    let newMap!: Map<unknown, BranchScope>;
    let newArray!: BranchScope[];
    let afterReference: Node | null;
    let needsReconciliation = true;
    forEach(valueOrOp, (key, args) => {
      let branch = oldMap.get(key);
      if (!branch) {
        branch = createBranchScopeWithRenderer(
          renderer,
          scope.$global,
          scope,
          parentNode,
        );
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
        getEmptyBranch(referenceNode as Comment);
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
          getEmptyBranch(referenceNode as Comment);
        }
        const oldLastChild = oldArray[oldArray.length - 1];
        afterReference = oldLastChild.___endNode.nextSibling;
      } else {
        afterReference = null;
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
