import { forIn, forOf, forTo } from "../common/for";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
  type Accessor,
  AccessorChar,
  type BranchScope,
  NodeType,
  type Scope,
} from "../common/types";
import { attrs } from "./dom";
import { reconcile } from "./reconcile";
import {
  createBranchScopeWithRenderer,
  createBranchScopeWithTagNameOrRenderer,
  type Renderer,
} from "./renderer";
import {
  destroyBranch,
  insertBranchBefore,
  removeAndDestroyBranch,
} from "./scope";
import {
  CLEAN,
  DIRTY,
  MARK,
  setTagVar,
  type Signal,
  type SignalOp,
} from "./signals";

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
      setConditionalRenderer(
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
  getContent?: ((scope: Scope) => Renderer) | 0,
  getTagVar?: (() => Signal<unknown>) | 0,
  inputIsArgs?: 1,
): Signal<Renderer | string | undefined> {
  const childScopeAccessor = nodeAccessor + AccessorChar.ConditionalScope;
  const rendererAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  return (scope, newRendererOrOp, getInput?: () => any) => {
    if (newRendererOrOp === DIRTY) return;
    if (newRendererOrOp === MARK || newRendererOrOp === CLEAN) {
      scope[rendererAccessor]?.___args?.(
        scope[childScopeAccessor],
        newRendererOrOp,
      );
    } else {
      const newRenderer = normalizeDynamicRenderer<Renderer>(newRendererOrOp);
      if (
        !(rendererAccessor in scope) ||
        isDifferentRenderer(scope[rendererAccessor], newRenderer)
      ) {
        scope[rendererAccessor] = newRenderer;
        setConditionalRenderer(
          scope,
          nodeAccessor,
          newRenderer || (getContent ? getContent(scope) : undefined),
          createBranchScopeWithTagNameOrRenderer,
        );

        if (getTagVar) {
          setTagVar(scope, childScopeAccessor, getTagVar());
        }

        if (getContent && typeof newRenderer === "string") {
          setConditionalRenderer(
            scope[childScopeAccessor],
            MARKO_DEBUG ? `#${newRenderer}/0` : 0,
            getContent(scope),
            createBranchScopeWithRenderer,
          );
        }
      }

      if (newRenderer) {
        const input = getInput?.();
        if (typeof newRenderer === "string") {
          attrs(
            scope[childScopeAccessor],
            MARKO_DEBUG ? `#${newRenderer}/0` : 0,
            (inputIsArgs ? input[0] : input) || {},
          );
        } else {
          newRenderer.___args?.(
            scope[childScopeAccessor],
            inputIsArgs
              ? input
              : [
                  getContent
                    ? {
                        ...input,
                        content: getContent(scope),
                      }
                    : input || {},
                ],
          );
        }
      }
    }
  };
};

export function setConditionalRenderer<T>(
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
  const referenceNode = scope[nodeAccessor] as Comment | Element;
  const prevBranch = scope[nodeAccessor + AccessorChar.ConditionalScope] as
    | BranchScope
    | undefined;
  const parentNode =
    referenceNode.nodeType > NodeType.Element
      ? (prevBranch?.___startNode || referenceNode).parentNode!
      : (referenceNode as ParentNode);
  const newBranch = (scope[nodeAccessor + AccessorChar.ConditionalScope] =
    newRenderer && createBranch(newRenderer, scope.$global, scope, parentNode));
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
      insertBranchBefore(newBranch, parentNode, prevBranch.___startNode);
    } else {
      parentNode.insertBefore(referenceNode, prevBranch.___startNode);
    }

    removeAndDestroyBranch(prevBranch);
  } else if (newBranch) {
    insertBranchBefore(newBranch, parentNode, referenceNode);
    referenceNode.remove();
  }
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
      const oldMap = scope[nodeAccessor + AccessorChar.LoopScopeMap] as
        | Map<unknown, BranchScope>
        | undefined;
      const oldArray = oldMap
        ? scope[nodeAccessor + AccessorChar.LoopScopeArray] || [
            ...oldMap.values(),
          ]
        : [];
      const parentNode = (
        referenceNode.nodeType > NodeType.Element
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
      if (referenceNode !== parentNode) {
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
