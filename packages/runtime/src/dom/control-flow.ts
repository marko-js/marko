import { AccessorChars, type Scope, type Accessor } from "../common/types";
import { reconcile } from "./reconcile";
import {
  type Renderer,
  createScopeWithRenderer,
  type RendererOrElementName,
} from "./renderer";
import { getEmptyScope, destroyScope } from "./scope";
import { defaultFragment } from "./fragment";
import {
  type IntersectionSignal,
  renderBodyClosures,
  type ValueSignal,
} from "./signals";

type LoopForEach = (
  value: unknown[],
  cb: (key: unknown, args: unknown[]) => void
) => void;

export function conditional(
  nodeAccessor: Accessor,
  dynamicTagAttrs?: IntersectionSignal,
  intersection?: IntersectionSignal,
  valueWithIntersection?: ValueSignal
): ValueSignal<RendererOrElementName | undefined> {
  const rendererAccessor = nodeAccessor + AccessorChars.COND_RENDERER;
  const childScopeAccessor = nodeAccessor + AccessorChars.COND_SCOPE;
  return (scope, newRenderer, clean) => {
    newRenderer ||= undefined;
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
}

// TODO: remove this, use return from conditional instead
export function inConditionalScope<S extends Scope>(
  signal: IntersectionSignal,
  nodeAccessor: Accessor /* branch?: Renderer */
): IntersectionSignal {
  const scopeAccessor = nodeAccessor + AccessorChars.COND_SCOPE;
  // const rendererAccessor = nodeAccessor + AccessorChars.COND_RENDERER;
  return (scope: Scope, clean?: boolean | 1) => {
    const conditionalScope = scope[scopeAccessor] as S;
    // const conditionalRenderer = scope[rendererAccessor] as Renderer;
    if (conditionalScope /* && conditionalRenderer === branch */) {
      signal(conditionalScope, clean);
    }
  };
}

export function setConditionalRenderer<ChildScope extends Scope>(
  scope: Scope,
  nodeAccessor: Accessor,
  newRenderer: RendererOrElementName | undefined
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

export function conditionalOnlyChild(
  nodeAccessor: Accessor,
  action?: ValueSignal<RendererOrElementName | undefined>
): ValueSignal<RendererOrElementName | undefined> {
  const rendererAccessor = nodeAccessor + AccessorChars.COND_RENDERER;
  const childScopeAccessor = nodeAccessor + AccessorChars.COND_SCOPE;
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
        getKey?: (key: string, v: unknown) => unknown
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
      getKey?: (v: number) => unknown
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
  forEach: LoopForEach
) {
  const loopScopeAccessor = nodeAccessor + AccessorChars.LOOP_SCOPE_ARRAY;
  const closureSignals = renderer.___closureSignals;
  const params = renderer.___attrs;
  return (
    scope: Scope,
    value: [unknown, (...args: unknown[]) => unknown],
    clean: boolean | 1
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
      (scope[nodeAccessor + AccessorChars.LOOP_SCOPE_MAP] as Map<
        unknown,
        Scope
      >) || (referenceIsMarker ? emptyMarkerMap : emptyMap);
    const oldArray =
      (scope[nodeAccessor + AccessorChars.LOOP_SCOPE_ARRAY] as Scope[]) ||
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
        childScope = createScopeWithRenderer(
          renderer,
          (scope[nodeAccessor + AccessorChars.LOOP_CONTEXT] ||=
            scope.___context),
          scope
        );
        // TODO: once we can track moves
        // needsReconciliation = true;
      } else {
        // TODO: track if any childScope has changed index
        // needsReconciliation ||= oldArray[index] !== childScope;
      }
      if (params) {
        params(childScope, { value: args });
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
  };
}

// TODO: remove this, use return from loop instead
export function inLoopScope(
  signal: IntersectionSignal,
  loopNodeAccessor: Accessor
) {
  const loopScopeAccessor = loopNodeAccessor + AccessorChars.LOOP_SCOPE_ARRAY;
  return (scope: Scope, clean?: boolean | 1) => {
    const loopScopes = scope[loopScopeAccessor] ?? [];
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
