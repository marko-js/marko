import { type Accessor, AccessorChar, type Scope } from "../common/types";
import { reconcile } from "./reconcile";
import {
  type Renderer,
  type RendererOrElementName,
  createScopeWithRenderer,
} from "./renderer";
import {
  destroyScope,
  getEmptyScope,
  insertBefore,
  removeAndDestroyScope,
} from "./scope";
import {
  type IntersectionSignal,
  type ValueSignal,
  renderBodyClosures,
} from "./signals";
import type { ClientTemplate as Template } from "./template";

type LoopForEach = (
  value: unknown[],
  cb: (key: unknown, args: unknown[]) => void,
) => void;

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
  dynamicTagAttrs?: IntersectionSignal,
  intersection?: IntersectionSignal,
  valueWithIntersection?: ValueSignal,
): ValueSignal<RendererOrElementName | undefined> {
  const rendererAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  const childScopeAccessor = nodeAccessor + AccessorChar.ConditionalScope;
  return (scope, newRenderer, clean) => {
    newRenderer = newRenderer
      ? (newRenderer as any as Template)._ ||
        (newRenderer as any).renderBody ||
        newRenderer
      : undefined;
    let currentRenderer = scope[rendererAccessor] as
      | RendererOrElementName
      | undefined;
    if (!clean && !(clean = currentRenderer === newRenderer)) {
      currentRenderer = scope[rendererAccessor] = newRenderer;
      setConditionalRenderer(scope, nodeAccessor, newRenderer);
      dynamicTagAttrs?.(scope);
    } else {
      valueWithIntersection?.(scope, 0, clean);
    }
    intersection?.(scope, clean);
    renderBodyClosures(currentRenderer, scope[childScopeAccessor], clean);
  };
};

// TODO: remove this, use return from conditional instead
export function inConditionalScope<S extends Scope>(
  signal: IntersectionSignal,
  nodeAccessor: Accessor /* branch?: Renderer */,
): IntersectionSignal {
  const scopeAccessor = nodeAccessor + AccessorChar.ConditionalScope;
  const rendererAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  return (scope: Scope, clean?: boolean | 1) => {
    const conditionalScope = scope[scopeAccessor] as S;
    if (conditionalScope) {
      const conditionalRenderer = scope[rendererAccessor] as Renderer;
      if (
        !conditionalRenderer?.___closureSignals ||
        conditionalRenderer.___closureSignals.has(signal)
      ) {
        signal(conditionalScope, clean);
      }
    }
  };
}

export function setConditionalRenderer<ChildScope extends Scope>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: RendererOrElementName | undefined,
) {
  let newScope: ChildScope;
  let prevScope = scope[
    nodeAccessor + AccessorChar.ConditionalScope
  ] as ChildScope;

  if (newRenderer) {
    newScope = scope[nodeAccessor + AccessorChar.ConditionalScope] =
      createScopeWithRenderer(newRenderer, scope.$global, scope) as ChildScope;
    prevScope = prevScope || getEmptyScope(scope[nodeAccessor] as Comment);
  } else {
    newScope = getEmptyScope(scope[nodeAccessor] as Comment) as ChildScope;
    scope[nodeAccessor + AccessorChar.ConditionalScope] = undefined;
  }

  insertBefore(
    newScope,
    prevScope.___startNode.parentNode!,
    prevScope.___startNode,
  );
  removeAndDestroyScope(prevScope);
}

export let conditionalOnlyChild = function conditionalOnlyChild(
  nodeAccessor: Accessor,
  action?: ValueSignal<RendererOrElementName | undefined>,
): ValueSignal<RendererOrElementName | undefined> {
  const rendererAccessor = nodeAccessor + AccessorChar.ConditionalRenderer;
  const childScopeAccessor = nodeAccessor + AccessorChar.ConditionalScope;
  return (scope, newRenderer, clean) => {
    let currentRenderer = scope[rendererAccessor] as
      | RendererOrElementName
      | undefined;
    if (!clean && currentRenderer !== newRenderer) {
      currentRenderer = scope[rendererAccessor] = newRenderer;
      setConditionalRendererOnlyChild(scope, nodeAccessor, newRenderer);
    }
    renderBodyClosures(currentRenderer, scope[childScopeAccessor], clean);
    action?.(scope, currentRenderer, clean);
  };
};

export function setConditionalRendererOnlyChild(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: RendererOrElementName | undefined,
) {
  const prevScope = scope[
    nodeAccessor + AccessorChar.ConditionalScope
  ] as Scope;
  const referenceNode = scope[nodeAccessor] as Element;
  referenceNode.textContent = "";

  if (newRenderer) {
    const newScope = (scope[nodeAccessor + AccessorChar.ConditionalScope] =
      createScopeWithRenderer(newRenderer, scope.$global, scope));
    insertBefore(newScope, referenceNode, null);
  }

  prevScope && destroyScope(prevScope);
}

const emptyMarkerMap = new Map([[Symbol(), getEmptyScope(undefined as any)]]);
export const emptyMarkerArray = [
  /* @__PURE__ */ getEmptyScope(undefined as any),
];
const emptyMap = new Map();
const emptyArray = [] as Scope[];

export function loopOf(nodeAccessor: Accessor, renderer: Renderer) {
  return loop(nodeAccessor, renderer, (value, cb) => {
    const [all, getKey = keyBySecondArg] = value as typeof value &
      [all: unknown[], getKey?: (item: unknown, index: number) => unknown];
    let i = 0;
    for (const item of all) {
      cb(getKey(item, i), [item, i, all]);
      i++;
    }
  });
}

export function loopIn(nodeAccessor: Accessor, renderer: Renderer) {
  return loop(nodeAccessor, renderer, (value, cb) => {
    const [all, getKey = keyByFirstArg] = value as typeof value &
      [
        all: Record<string, unknown>,
        getKey?: (key: string, v: unknown) => unknown,
      ];
    for (const key in all) {
      const v = all[key];
      cb(getKey(key, v), [key, v, all]);
    }
  });
}

export function loopTo(nodeAccessor: Accessor, renderer: Renderer) {
  return loop(nodeAccessor, renderer, (value, cb) => {
    const [to, from = 0, step = 1, getKey = keyByFirstArg] = value as [
      to: number,
      from: number,
      step: number,
      getKey?: (v: number) => unknown,
    ];
    const steps = (to - from) / step;
    for (let i = 0; i <= steps; i++) {
      const v = from + i * step;
      cb(getKey(v), [v]);
    }
  });
}

function loop(
  nodeAccessor: Accessor,
  renderer: Renderer,
  forEach: LoopForEach,
) {
  const loopScopeAccessor = nodeAccessor + AccessorChar.LoopScopeArray;
  const closureSignals = renderer.___closureSignals;
  const params = renderer.___args;
  return (
    scope: Scope,
    value: [unknown, (...args: unknown[]) => unknown],
    clean: boolean | 1,
  ) => {
    if (clean) {
      for (const childScope of scope[loopScopeAccessor]) {
        params?.(childScope, null, clean);
        for (const signal of closureSignals) {
          signal(childScope, clean);
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
        Scope
      >) || (referenceIsMarker ? emptyMarkerMap : emptyMap);
    const oldArray =
      (scope[nodeAccessor + AccessorChar.LoopScopeArray] as Scope[]) ||
      Array.from(oldMap.values());

    let newMap!: Map<unknown, Scope>;
    let newArray!: Scope[];
    let afterReference: Node | null;
    let parentNode: Node & ParentNode;
    let needsReconciliation = true;

    forEach(value, (key, args) => {
      let childScope = oldMap.get(key);
      const isNew = !childScope;
      if (!childScope) {
        childScope = createScopeWithRenderer(renderer, scope.$global, scope);
        // TODO: once we can track moves
        // needsReconciliation = true;
      } else {
        // TODO: track if any childScope has changed index
        // needsReconciliation ||= oldArray[index] !== childScope;
      }
      if (params) {
        params(childScope, args);
      }
      if (closureSignals) {
        for (const signal of closureSignals) {
          signal(childScope, isNew);
        }
      }

      if (newMap) {
        newMap.set(key, childScope);
        newArray.push(childScope);
      } else {
        newMap = new Map([[key, childScope]]);
        newArray = [childScope];
      }
    });

    if (!newMap) {
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

// TODO: remove this, use return from loop instead
export function inLoopScope(
  signal: IntersectionSignal,
  loopNodeAccessor: Accessor,
) {
  const loopScopeAccessor = loopNodeAccessor + AccessorChar.LoopScopeArray;
  return (scope: Scope, clean?: boolean | 1) => {
    const loopScopes =
      scope[loopScopeAccessor] ??
      scope[loopNodeAccessor + AccessorChar.LoopScopeMap]?.values() ??
      [];
    for (const scope of loopScopes) {
      signal(scope, clean);
    }
  };
}

function keyBySecondArg(_item: unknown, index: unknown) {
  return index;
}

function keyByFirstArg(name: unknown) {
  return name;
}
