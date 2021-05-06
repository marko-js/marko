import { Context, setContext } from "../common/context";
import { reconcile } from "./reconcile";
import { Renderer, initRenderer } from "./renderer";
import { Scope, createScope, getEmptyScope, set } from "./scope";
import { NodeType } from "./dom";

export type Conditional = {
  scope?: Scope;
  renderer?: Renderer;
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

const emptyMarkerScopes = new Map();
const emptyMarkerKeys = [Symbol("empty")];
emptyMarkerScopes.set(emptyMarkerKeys[0], getEmptyScope());
const emptyScopes = new Map();
const emptyKeys = [];

export type Loop = {
  ___scopes: Map<unknown, Scope>;
  ___scopeKeys: unknown[];
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
  keyFn: (item: unknown) => string,
  parentScopeOrScopes?: Scope | Array<Scope | number>,
  parentOffset?: number
): Loop {
  const referenceIsMarker = referenceNode.nodeType === NodeType.Comment;
  return {
    ___scopes: referenceIsMarker ? emptyMarkerScopes : emptyScopes,
    ___scopeKeys: referenceIsMarker ? emptyMarkerKeys : emptyKeys,
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
  return (this.___scopes === emptyMarkerScopes
    ? emptyScopes
    : this.___scopes
  ).values();
}

function getFirstNodeLoop(this: Loop) {
  return this.___scopes.get(this.___scopeKeys[0])!.___getFirstNode();
}

function getLastNodeLoop(this: Loop) {
  return this.___scopes
    .get(this.___scopeKeys[this.___scopeKeys.length - 1])!
    .___getLastNode();
}

export function setLoopOf(loop: Loop, newArray: unknown[]) {
  let newScopes: Map<unknown, Scope>;
  let newKeys: unknown[];
  const len = newArray.length;
  const oldScopes = loop.___scopes;
  const oldKeys = loop.___scopeKeys;
  const referenceIsMarker = loop.___referenceIsMarker;
  let afterReference: Node | null;
  let parentNode: Node & ParentNode;

  if (len > 0) {
    newScopes = new Map();
    setContext(loop.___context);
    for (let index = 0; index < len; index++) {
      const item = newArray[index];
      const key = loop.___keyFn ? loop.___keyFn(item, index) : "" + index;
      let childScope = oldScopes.get(key);
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
      } else {
        set(childScope, 0, item);
        set(childScope, 1, index);
      }
      newScopes.set(key, childScope);
    }
    setContext(null);
    newKeys = Array.from(newScopes.keys());
  }

  if (referenceIsMarker) {
    if (oldScopes === emptyMarkerScopes) {
      getEmptyScope(loop.___referenceNode as Comment);
    }
    const oldLastChild = oldScopes.get(oldKeys[oldKeys.length - 1])!;
    afterReference = oldLastChild.___getAfterNode();
    parentNode = oldLastChild.___getParentNode();
    if (len === 0) {
      newScopes = emptyMarkerScopes;
      newKeys = emptyMarkerKeys;
      getEmptyScope(loop.___referenceNode as Comment);
    }
  } else {
    afterReference = null;
    parentNode = loop.___referenceNode as Node & ParentNode;

    if (len === 0) {
      newScopes = emptyScopes;
      newKeys = emptyKeys;
    }
  }

  reconcile(
    parentNode,
    oldKeys,
    oldScopes,
    newKeys!,
    newScopes!,
    afterReference
  );

  loop.___scopeKeys = newKeys!;
  loop.___scopes = newScopes!;
}
