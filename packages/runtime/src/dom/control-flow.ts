import { Context, setContext } from "../common/context";
import { reconcile } from "./reconcile";
import { Renderer, initRenderer } from "./renderer";
import { Scope, createScope, getEmptyScope, set } from "./scope";
import { NodeType } from "./dom";

export type Conditional = (
  | {
      scope: Scope;
      renderer: Renderer;
    }
  | {
      scope: undefined;
      renderer: undefined;
    }
) & {
  ___parentScopeOrScopes?: Scope | Array<Scope | number>;
  ___parentOffset?: number;
  ___referenceNode: Comment | Element;
  ___context: typeof Context;
  ___getFirstNode: () => Node;
  ___getLastNode: () => Node;
};

export function conditional(
  referenceNode: Comment | Element,
  parentScopeOrScopes?: Scope | Array<Scope | number>,
  parentOffset?: number
): Conditional {
  return {
    scope: undefined,
    renderer: undefined,
    ___referenceNode: referenceNode,
    ___parentScopeOrScopes: parentScopeOrScopes,
    ___parentOffset: parentOffset,
    ___context: Context,
    ___getFirstNode: getFirstNodeConditional,
    ___getLastNode: getLastNodeConditional
  };
}

export function setConditionalRenderer(
  conditonal: Conditional,
  newRenderer: Renderer | undefined
) {
  if (conditonal.renderer !== (conditonal.renderer = newRenderer)) {
    let newScope: Scope;
    let prevScope = conditonal.scope!;

    if (newRenderer) {
      setContext(conditonal.___context);
      newScope = conditonal.scope = createScope(
        newRenderer.___size,
        newRenderer.___domMethods!
      );
      initRenderer(
        newRenderer,
        newScope,
        conditonal.___parentScopeOrScopes,
        conditonal.___parentOffset
      );
      prevScope =
        prevScope || getEmptyScope(conditonal.___referenceNode as Comment);
      setContext(null);
    } else {
      newScope = getEmptyScope(conditonal.___referenceNode as Comment);
      conditonal.scope = undefined;
    }

    newScope.___insertBefore(
      prevScope.___getParentNode(),
      prevScope.___getFirstNode()
    );
    prevScope.___remove();
  }
}

export function setConditionalRendererOnlyChild(
  conditonal: Conditional,
  newRenderer: Renderer | undefined
) {
  if (conditonal.renderer !== (conditonal.renderer = newRenderer)) {
    (conditonal.___referenceNode as Element).textContent = "";

    if (newRenderer) {
      setContext(conditonal.___context);
      const newScope = (conditonal.scope = createScope(
        newRenderer.___size,
        newRenderer.___domMethods!
      ));
      initRenderer(
        newRenderer,
        newScope,
        conditonal.___parentScopeOrScopes,
        conditonal.___parentOffset
      );
      newScope.___insertBefore(conditonal.___referenceNode as Element, null);
      setContext(null);
    }
  }
}

function getFirstNodeConditional(this: Conditional) {
  return this.scope
    ? this.scope.___getFirstNode()
    : (this.___referenceNode as Comment);
}

function getLastNodeConditional(this: Conditional) {
  return this.scope
    ? this.scope.___getLastNode()
    : (this.___referenceNode as Comment);
}

const emptyMarkerMap = new Map();
const emptyMarkerArray = [getEmptyScope()];
emptyMarkerMap.set(Symbol("empty"), getEmptyScope());
const emptyMap = new Map();
const emptyArray = [];

export type Loop = {
  ___scopeMap: Map<unknown, Scope>;
  ___scopeArray: Scope[];
  ___referenceNode: Comment | Element;
  ___referenceIsMarker: boolean;
  ___renderer: Renderer;
  ___keyFn: undefined | ((item: unknown, index: number) => unknown);
  ___parentScopeOrScopes: Scope | Array<Scope | number> | undefined;
  ___parentOffset: number | undefined;
  ___context: typeof Context;
  ___getFirstNode: () => Node;
  ___getLastNode: () => Node;
  [Symbol.iterator]: () => IterableIterator<Scope>;
};

export function loop(
  referenceNode: Comment | Element,
  renderer: Renderer,
  keyFn: (item: unknown) => unknown,
  parentScopeOrScopes?: Scope | Array<Scope | number>,
  parentOffset?: number
): Loop {
  const referenceIsMarker = referenceNode.nodeType === NodeType.Comment;
  return {
    ___scopeMap: referenceIsMarker ? emptyMarkerMap : emptyMap,
    ___scopeArray: referenceIsMarker ? emptyMarkerArray : emptyArray,
    ___referenceNode: referenceNode,
    ___referenceIsMarker: referenceIsMarker,
    ___renderer: renderer,
    ___keyFn: keyFn,
    ___parentScopeOrScopes: parentScopeOrScopes,
    ___parentOffset: parentOffset,
    ___context: Context,
    ___getFirstNode: getFirstNodeLoop,
    ___getLastNode: getLastNodeLoop,
    [Symbol.iterator]: loopIterator
  };
}

function loopIterator(this: Loop) {
  return (this.___scopeArray === emptyMarkerArray
    ? emptyArray
    : this.___scopeArray
  ).values();
}

function getFirstNodeLoop(this: Loop) {
  return this.___scopeArray[0].___getFirstNode();
}

function getLastNodeLoop(this: Loop) {
  return this.___scopeArray[this.___scopeArray.length - 1].___getLastNode();
}

export function setLoopOf(loop: Loop, newValues: unknown[]) {
  let newMap: Map<unknown, Scope>;
  let newArray: Scope[];
  const len = newValues.length;
  const oldMap = loop.___scopeMap;
  const oldArray = loop.___scopeArray;
  let inserts = 0;
  let moves = 0;
  const referenceIsMarker = loop.___referenceIsMarker;
  let afterReference: Node | null;
  let parentNode: Node & ParentNode;

  if (len > 0) {
    newMap = new Map();
    setContext(loop.___context);
    for (let index = 0; index < len; index++) {
      const item = newValues[index];
      const key = loop.___keyFn ? loop.___keyFn(item, index) : "" + index;
      let childScope = oldMap.get(key);
      if (!childScope) {
        childScope = createScope(
          loop.___renderer.___size,
          loop.___renderer.___domMethods!
        );
        childScope[0] = item;
        childScope[1] = index;
        initRenderer(
          loop.___renderer,
          childScope,
          loop.___parentScopeOrScopes,
          loop.___parentOffset
        );
        inserts++;
      } else {
        set(childScope, 0, item);
        set(childScope, 1, index);
        if (childScope[1] !== index) moves++;
      }
      newMap.set(key, childScope);
    }
    setContext(null);
    newArray = Array.from(newMap.values());
  } else {
    if (referenceIsMarker) {
      newMap = emptyMarkerMap;
      newArray = emptyMarkerArray;
      getEmptyScope(loop.___referenceNode as Comment);
    } else {
      newMap = emptyMap;
      newArray = emptyArray;
    }
  }

  if (inserts || moves || len !== oldArray.length) {
    if (referenceIsMarker) {
      if (oldMap === emptyMarkerMap) {
        getEmptyScope(loop.___referenceNode as Comment);
      }
      const oldLastChild = oldArray[oldArray.length - 1];
      afterReference = oldLastChild.___getAfterNode();
      parentNode = oldLastChild.___getParentNode();
    } else {
      afterReference = null;
      parentNode = loop.___referenceNode as Node & ParentNode;
    }

    reconcile(parentNode, oldArray, newArray!, afterReference);
  }

  loop.___scopeArray = newArray!;
  loop.___scopeMap = newMap!;
}

export function setLoopFromTo(
  loop: Loop,
  from: number,
  to: number,
  step: number
) {
  const range: number[] = [];

  for (let i = from; i <= to; i += step) {
    range.push(i);
  }

  setLoopOf(loop, range);
}

export function setLoopIn(loop: Loop, object: Record<string, unknown>) {
  setLoopOf(loop, Object.entries(object));
}
