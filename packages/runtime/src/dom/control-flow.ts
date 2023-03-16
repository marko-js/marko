import { AccessorChars, Scope, Accessor } from "../common/types";
import { reconcile } from "./reconcile";
import {
  Renderer,
  createScopeWithRenderer,
  RendererOrElementName,
} from "./renderer";
import { getEmptyScope, destroyScope } from "./scope";
import { defaultFragment } from "./fragment";
import {
  derivation,
  destructureSources,
  inRenderBody,
  Signal,
  wrapSignal,
} from "./signals";

export function conditional<S extends Scope>(
  nodeAccessor: Accessor,
  defaultMark: number,
  computeRenderer: (scope: S) => RendererOrElementName | undefined,
  subscriber?: Signal,
  action?: (scope: Scope, renderer?: RendererOrElementName) => void
) {
  const childScopeAccessor = nodeAccessor + AccessorChars.COND_SCOPE;
  const rendererAccessor = nodeAccessor + AccessorChars.COND_RENDERER;
  return derivation(
    rendererAccessor,
    defaultMark,
    [inRenderBody(rendererAccessor, childScopeAccessor)].concat(
      subscriber ?? []
    ),
    computeRenderer,
    (scope: S, renderer?: RendererOrElementName) => {
      setConditionalRenderer(scope, nodeAccessor, renderer);
      action?.(scope, renderer);
    }
  );
}

export function conditionalOnlyChild<S extends Scope>(
  nodeAccessor: Accessor,
  defaultMark: number,
  computeRenderer: (scope: S) => RendererOrElementName | undefined
) {
  const childScopeAccessor = nodeAccessor + AccessorChars.COND_SCOPE;
  const rendererAccessor = nodeAccessor + AccessorChars.COND_RENDERER;
  return derivation(
    rendererAccessor,
    defaultMark,
    [inRenderBody(rendererAccessor, childScopeAccessor)],
    computeRenderer,
    (scope: S, renderer?: RendererOrElementName) => {
      setConditionalRendererOnlyChild(scope, nodeAccessor, renderer);
    }
  );
}

export function inConditionalScope<S extends Scope>(
  subscriber: Signal,
  nodeAccessor: Accessor /* branch?: Renderer */
): Signal {
  const scopeAccessor = (nodeAccessor as number) + AccessorChars.COND_SCOPE;
  // const rendererAccessor = nodeAccessor as number + AccessorChars.COND_RENDERER;
  return wrapSignal((methodName) => (scope, extraArg) => {
    const conditionalScope = scope[scopeAccessor] as S;
    // const conditionalRenderer = scope[rendererAccessor] as Renderer;
    if (conditionalScope /* && conditionalRenderer === branch */) {
      subscriber[methodName](conditionalScope, extraArg);
    }
  });
}

export function setConditionalRenderer<ChildScope extends Scope>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: RendererOrElementName<ChildScope> | undefined
) {
  let newScope: ChildScope;
  let prevScope = scope[nodeAccessor + AccessorChars.COND_SCOPE] as ChildScope;
  const newFragment = newRenderer?.___fragment ?? defaultFragment;
  const prevFragment = prevScope?.___renderer?.___fragment ?? defaultFragment;

  if (newRenderer) {
    newScope = scope[nodeAccessor + AccessorChars.COND_SCOPE] =
      createScopeWithRenderer(
        newRenderer,
        (scope[nodeAccessor + AccessorChars.COND_CONTEXT] ||= scope.___context),
        scope
      ) as ChildScope;
    prevScope = prevScope || getEmptyScope(scope[nodeAccessor] as Comment);
  } else {
    newScope = getEmptyScope(scope[nodeAccessor] as Comment) as ChildScope;
    scope[nodeAccessor + AccessorChars.COND_SCOPE] = undefined;
  }

  newFragment.___insertBefore(
    newScope,
    prevFragment.___getParentNode(prevScope),
    prevFragment.___getFirstNode(prevScope)
  );
  prevFragment.___remove(destroyScope(prevScope));
}

export function setConditionalRendererOnlyChild(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: RendererOrElementName | undefined
) {
  const prevScope = scope[nodeAccessor + AccessorChars.COND_SCOPE] as Scope;
  const referenceNode = scope[nodeAccessor] as Element;
  referenceNode.textContent = "";

  if (newRenderer) {
    const newScope = (scope[nodeAccessor + AccessorChars.COND_SCOPE] =
      createScopeWithRenderer(
        newRenderer,
        (scope[nodeAccessor + AccessorChars.COND_CONTEXT] ||= scope.___context),
        scope
      ));
    (newRenderer.___fragment ?? defaultFragment).___insertBefore(
      newScope,
      referenceNode,
      null
    );
  }

  prevScope && destroyScope(prevScope);
}

const emptyMarkerMap = /* @__PURE__ */ (() =>
  new Map().set(Symbol("empty"), getEmptyScope()))();
export const emptyMarkerArray = [/* @__PURE__ */ getEmptyScope()];
const emptyMap = new Map();
const emptyArray = [] as Scope[];

export function loop<S extends Scope, C extends Scope, T>(
  nodeAccessor: Accessor,
  defaultMark: number,
  renderer: Renderer,
  paramSubscribers: Signal[],
  setParams: (scope: C, params: [T, number, T[]]) => void,
  compute: (scope: S) => [T[], (x: T) => unknown]
) {
  const params = destructureSources(paramSubscribers, setParams);
  const valueAccessor = nodeAccessor + AccessorChars.LOOP_VALUE;
  return derivation(
    valueAccessor,
    defaultMark,
    [
      ...renderer.___closureSignals.map((signal) =>
        inLoopScope(signal, nodeAccessor)
      ),
      inLoopScope(params, nodeAccessor),
    ],
    compute,
    (scope, [newValues, keyFn]) => {
      setLoopOf(scope, nodeAccessor, newValues, renderer, keyFn, setParams);
    }
  );
}

export function inLoopScope<S extends Scope>(
  subscriber: Signal,
  loopNodeAccessor: Accessor
): Signal {
  const loopScopeAccessor = loopNodeAccessor + AccessorChars.LOOP_SCOPE_ARRAY;
  return wrapSignal((methodName) => (scope, extraArg) => {
    const loopScopes = (scope as S)[loopScopeAccessor] ?? [];
    for (const loopScope of loopScopes) {
      subscriber[methodName](loopScope, extraArg);
    }
  });
}

export function setLoopOf<T, ChildScope extends Scope>(
  scope: Scope,
  nodeAccessor: Accessor,
  newValues: T[],
  renderer: Renderer<ChildScope>,
  keyFn?: (item: T) => unknown,
  setParams?: (scope: ChildScope, params: [T, number, T[]]) => void
) {
  let newMap: Map<unknown, ChildScope>;
  let newArray: Scope[];
  const len = newValues.length;
  const referenceNode = scope[nodeAccessor] as Element | Comment | Text;
  // TODO: compiler should use only comment so the text check can be removed
  const referenceIsMarker =
    referenceNode.nodeType === 8 /* Comment */ ||
    referenceNode.nodeType === 3; /* Text */
  const oldMap =
    (scope[nodeAccessor + AccessorChars.LOOP_SCOPE_MAP] as Map<
      unknown,
      ChildScope
    >) || (referenceIsMarker ? emptyMarkerMap : emptyMap);
  const oldArray =
    (scope[nodeAccessor + AccessorChars.LOOP_SCOPE_ARRAY] as ChildScope[]) ||
    (referenceIsMarker ? emptyMarkerArray : (emptyArray as ChildScope[]));
  let afterReference: Node | null;
  let parentNode: Node & ParentNode;
  let needsReconciliation = true; // TODO: len !== oldArray.length;

  if (len > 0) {
    newMap = new Map();
    newArray = [];
    for (let index = 0; index < len; index++) {
      const item = newValues[index];
      const key = keyFn ? keyFn(item) : index;
      let childScope = oldMap.get(key);
      if (!childScope) {
        childScope = createScopeWithRenderer(
          renderer,
          (scope[nodeAccessor + AccessorChars.LOOP_CONTEXT] ||=
            scope.___context),
          scope
        ) as ChildScope;
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
      const fragment = renderer.___fragment ?? defaultFragment;
      afterReference = fragment.___getAfterNode(oldLastChild);
      parentNode = fragment.___getParentNode(oldLastChild);
    } else {
      afterReference = null;
      parentNode = referenceNode as Element;
    }
    reconcile(
      parentNode,
      oldArray,
      newArray!,
      afterReference,
      renderer.___fragment
    );
  }

  scope[nodeAccessor + AccessorChars.LOOP_SCOPE_MAP] = newMap;
  scope[nodeAccessor + AccessorChars.LOOP_SCOPE_ARRAY] = newArray;
}

export function computeLoopToFrom(to: number, from = 0, step = 1) {
  const range: number[] = [];
  for (let _steps = (to - from) / step, i = 0; i <= _steps; i++) {
    range.push(from + i * step);
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
  return [Object.entries(object), keyIn] as [
    Entries<typeof object>,
    typeof keyIn
  ];
}

function keyIn(item: [string, unknown]) {
  return item[0];
}
