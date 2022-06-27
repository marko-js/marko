import type { Scope } from "../common/types";
import { Context, setContext } from "../common/context";
import { reconcile } from "./reconcile";
import { Renderer, initRenderer } from "./renderer";
import { createScope, getEmptyScope, destroyScope } from "./scope";
import { DOMFragment, singleNodeFragment } from "./fragment";
import { derivation, destructureSources, inLoopScope, inRenderBody, Signal } from "./signals";

export const enum ConditionalIndex {
  REFERENCE_NODE = 0,
  SCOPE = 1,
  RENDERER = 2,
  RENDERER_MARK = 3,
  RENDERER_STALE = 4,
  CONTEXT = 5
}

export function conditional<S extends Scope>(nodeAccessor: number, defaultMark: number, computeRenderer: (scope: S) => Renderer | undefined, fragment?: DOMFragment) {
  const childScopeAccessor = nodeAccessor + ConditionalIndex.SCOPE;
  const rendererAccessor = nodeAccessor + ConditionalIndex.RENDERER;
  return derivation(rendererAccessor, defaultMark, [inRenderBody(rendererAccessor, childScopeAccessor)], computeRenderer, (scope: S, renderer?: Renderer) => {
    setConditionalRenderer(scope, nodeAccessor, renderer, fragment)
  });
}

export function conditionalOnlyChild<S extends Scope>(nodeAccessor: number, defaultMark: number, computeRenderer: (scope: S) => Renderer | undefined, fragment?: DOMFragment) {
  const childScopeAccessor = nodeAccessor + ConditionalIndex.SCOPE;
  const rendererAccessor = nodeAccessor + ConditionalIndex.RENDERER;
  return derivation(rendererAccessor, defaultMark, [inRenderBody(rendererAccessor, childScopeAccessor)], computeRenderer, (scope: S, renderer?: Renderer) => {
    setConditionalRendererOnlyChild(scope, nodeAccessor, renderer, fragment)
  });
}

export function setConditionalRenderer<ChildScope extends Scope>(
  scope: Scope,
  conditionalIndex: number,
  newRenderer: Renderer<ChildScope> | undefined,
  fragment: DOMFragment = singleNodeFragment
) {
  let newScope: ChildScope;
  let prevScope = scope[
    conditionalIndex + ConditionalIndex.SCOPE
  ] as ChildScope;

  if (newRenderer) {
    setContext(
      scope[conditionalIndex + ConditionalIndex.CONTEXT] as typeof Context
    );
    newScope = scope[conditionalIndex + ConditionalIndex.SCOPE] = createScope(
      scope
    ) as ChildScope;
    initRenderer(newRenderer, newScope);
    prevScope =
      prevScope ||
      getEmptyScope(
        scope[conditionalIndex + ConditionalIndex.REFERENCE_NODE] as Comment
      );
    setContext(null);
  } else {
    newScope = getEmptyScope(
      scope[conditionalIndex + ConditionalIndex.REFERENCE_NODE] as Comment
    ) as ChildScope;
    scope[conditionalIndex + ConditionalIndex.SCOPE] = undefined;
  }

  fragment.___insertBefore(
    newScope,
    fragment.___getParentNode(prevScope),
    fragment.___getFirstNode(prevScope)
  );
  fragment.___remove(prevScope);
}

export function setConditionalRendererOnlyChild(
  scope: Scope,
  conditionalIndex: number,
  newRenderer: Renderer | undefined,
  fragment: DOMFragment = singleNodeFragment
) {
  const referenceNode = scope[
    conditionalIndex + ConditionalIndex.REFERENCE_NODE
  ] as Element;
  referenceNode.textContent = "";

  if (newRenderer) {
    setContext(
      scope[conditionalIndex + ConditionalIndex.CONTEXT] as typeof Context
    );
    const newScope = (scope[conditionalIndex + ConditionalIndex.SCOPE] =
      createScope(scope));
    initRenderer(newRenderer, newScope);
    fragment.___insertBefore(newScope, referenceNode, null);
    setContext(null);
  }
}

const emptyMarkerMap = /* @__PURE__ */ (() =>
  new Map().set(Symbol("empty"), getEmptyScope()))();
export const emptyMarkerArray = [/* @__PURE__ */ getEmptyScope()];
const emptyMap = new Map();
const emptyArray = [] as Scope[];

export const enum LoopIndex {
  REFERENCE_NODE = 0,
  SCOPE_ARRAY = 1,
  SCOPE_MAP = 2,
  VALUE = 3,
  VALUE_MARK = 4,
  VALUE_STALE = 5,
  CONTEXT = 6,
}

export function loop<S extends Scope, C extends Scope, T>(
  nodeAccessor: number, 
  defaultMark: number, 
  renderer: Renderer, 
  paramSubscribers: Signal[],
  setParams: (scope: C, params: [T, number, T[]]) => void,
  compute: (scope: S) => [T[], (x: T) => unknown],
  fragment?: DOMFragment,
) {
  const params = destructureSources(paramSubscribers, setParams);
  const childScopesAccessor = nodeAccessor + LoopIndex.SCOPE_ARRAY;
  const valueAccessor = nodeAccessor + LoopIndex.VALUE;
  return derivation(
    valueAccessor, 
    defaultMark, 
    [
      ...renderer.___closureSignals.map(signal => inLoopScope(signal, (s) => s[childScopesAccessor])),
      inLoopScope(params, (s) => s[childScopesAccessor])
    ], 
    compute, 
    (scope, [newValues, keyFn]) => {
      setLoopOf(scope, nodeAccessor, newValues, renderer, keyFn, setParams, fragment)
    }
  );
}

export function setLoopOf<T, ChildScope extends Scope>(
  scope: Scope,
  loopIndex: number,
  newValues: T[],
  renderer: Renderer<ChildScope>,
  keyFn?: (item: T) => unknown,
  setParams?: (scope: ChildScope, params: [T, number, T[]]) => void,
  fragment: DOMFragment = singleNodeFragment
) {
  let newMap: Map<unknown, ChildScope>;
  let newArray: Scope[];
  const len = newValues.length;
  const referenceNode = scope[loopIndex + LoopIndex.REFERENCE_NODE] as
    | Element
    | Comment
    | Text;
  // TODO: compiler should use only comment so the text check can be removed
  const referenceIsMarker =
    referenceNode.nodeType === 8 /* Comment */ ||
    referenceNode.nodeType === 3; /* Text */
  const oldMap =
    (scope[loopIndex + LoopIndex.SCOPE_MAP] as Map<unknown, ChildScope>) ||
    (referenceIsMarker ? emptyMarkerMap : emptyMap);
  const oldArray =
    (scope[loopIndex + LoopIndex.SCOPE_ARRAY] as ChildScope[]) ||
    (referenceIsMarker ? emptyMarkerArray : (emptyArray as ChildScope[]));
  let afterReference: Node | null;
  let parentNode: Node & ParentNode;
  let needsReconciliation = true; // TODO: len !== oldArray.length;

  if (len > 0) {
    newMap = new Map();
    newArray = [];
    setContext(scope[loopIndex + LoopIndex.CONTEXT] as typeof Context);
    for (let index = 0; index < len; index++) {
      const item = newValues[index];
      const key = keyFn ? keyFn(item) : index;
      let childScope = oldMap.get(key);
      if (!childScope) {
        childScope = createScope(scope) as ChildScope;
        initRenderer<ChildScope>(renderer, childScope);
        // TODO: once we can track moves
        // needsReconciliation = true;
      } else {
        // TODO: track if any childScope has changed index
        // needsReconciliation ||= oldArray[index] !== childScope;
      }
      if (setParams) {
        setParams(childScope, [item, index, newValues]);
      }
      newMap.set(key, childScope);
      newArray.push(childScope);
    }
    setContext(null);
  } else {
    if (referenceIsMarker) {
      newMap = emptyMarkerMap;
      newArray = emptyMarkerArray;
      getEmptyScope(referenceNode as Comment);
    } else {
      // Fast path when loop is only child of parent
      if (renderer.___hasUserEffects) {
        for (let i = 0; i < oldArray.length; i++) {
          destroyScope(oldArray[i]);
        }
      }
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
      afterReference = fragment.___getAfterNode(oldLastChild);
      parentNode = fragment.___getParentNode(oldLastChild);
    } else {
      afterReference = null;
      parentNode = referenceNode as Element;
    }
    reconcile(parentNode, oldArray, newArray!, afterReference, fragment);
  }

  scope[loopIndex + LoopIndex.SCOPE_MAP] = newMap;
  scope[loopIndex + LoopIndex.SCOPE_ARRAY] = newArray;
}

export function computeLoopFromTo(from: number, to: number, step: number) {
  const range: number[] = [];

  for (let i = from; i <= to; i += step) {
    range.push(i);
  }

  return [range, keyFromTo] as [number[], typeof keyFromTo];
}

function keyFromTo(item: number) {
  return item;
}

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function computeLoopIn(object: Record<string, unknown>) {
  return [Object.entries(object), keyIn] as [Entries<typeof object>, typeof keyIn];
}

function keyIn(item: [string, unknown]) {
  return item[0];
}
