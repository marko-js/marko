import { Context, setContext } from "../common/context";
import { reconcile } from "./reconcile";
import { Renderer, initRenderer } from "./renderer";
import { getQueuedScope } from "./queue";
import { Scope, createScope, getEmptyScope } from "./scope";
import { NodeType } from "./dom";
export class Conditional {
  private ___scope?: Scope;
  private ___parentScopeOrScopes?: Scope | Array<Scope | number>;
  private ___parentOffset?: number;
  private ___renderer?: Renderer;
  private ___referenceNode: Comment | Element;
  private ___context: typeof Context;

  constructor(
    referenceNode: Comment | Element,
    parentScopeOrScopes?: Scope | Array<Scope | number>,
    parentOffset?: number
  ) {
    this.___scope = this.___renderer = undefined;
    this.___referenceNode = referenceNode;
    this.___parentScopeOrScopes = parentScopeOrScopes;
    this.___parentOffset = parentOffset;
    this.___context = Context;
  }

  get renderer() {
    return this.___renderer;
  }

  set renderer(newRenderer: Renderer | undefined) {
    if (this.___renderer !== (this.___renderer = newRenderer)) {
      let newScope: Scope;
      let prevScope = this.___scope!;

      if (newRenderer) {
        setContext(this.___context);
        newScope = this.___scope = createScope(
          newRenderer.___size,
          newRenderer.___domMethods!
        );
        initRenderer(
          newRenderer,
          newScope,
          this.___parentScopeOrScopes,
          this.___parentOffset
        );
        prevScope =
          prevScope || getEmptyScope(this.___referenceNode as Comment);
        setContext(null);
      } else {
        newScope = getEmptyScope(this.___referenceNode as Comment);
        this.___scope = undefined;
      }

      newScope.___insertBefore(
        prevScope.___getParentNode(),
        prevScope.___getFirstNode()
      );
      prevScope.___remove();
    }
  }

  set rendererOnlyChild(newRenderer: Renderer | undefined) {
    if (this.___renderer !== (this.___renderer = newRenderer)) {
      (this.___referenceNode as Element).textContent = "";

      if (newRenderer) {
        setContext(this.___context);
        const newScope = (this.___scope = createScope(
          newRenderer.___size,
          newRenderer.___domMethods!
        ));
        initRenderer(
          newRenderer,
          newScope,
          this.___parentScopeOrScopes,
          this.___parentOffset
        );
        newScope.___insertBefore(this.___referenceNode as Element, null);
        setContext(null);
      }
    }
  }

  get scope() {
    return this.___scope!;
  }

  ___getFirstNode() {
    return this.___scope
      ? this.___scope.___getFirstNode()
      : (this.___referenceNode as Comment);
  }

  ___getLastNode() {
    return this.___scope
      ? this.___scope.___getLastNode()
      : (this.___referenceNode as Comment);
  }
}

const emptyMarkerScopes = new Map();
const emptyMarkerKeys = [Symbol("empty")];
emptyMarkerScopes.set(emptyMarkerKeys[0], getEmptyScope());
const emptyScopes = new Map();
const emptyKeys = [];
export class Loop {
  private ___referenceIsMarker: boolean;
  private ___scopes: Map<unknown, Scope>;
  private ___scopeKeys: unknown[];
  private ___parentScopeOrScopes?: Scope | Array<Scope | number>;
  private ___parentOffset?: number;
  private ___referenceNode?: Comment | Element;
  private ___renderer: Renderer;
  private ___keyFn: (item: unknown, index: number) => string;
  private ___execItem: (...args: unknown[]) => unknown;
  private ___execIndex: (...args: unknown[]) => unknown;
  private ___execArray: (...args: unknown[]) => unknown;
  private ___context: typeof Context;

  constructor(
    referenceNode: Comment | Element,
    renderer: Renderer,
    keyFn: (item: unknown) => string,
    execItem,
    execIndex,
    execArray,
    parentScopeOrScopes?: Scope | Array<Scope | number>,
    parentOffset?: number
  ) {
    const referenceIsMarker = referenceNode.nodeType === NodeType.Comment;
    this.___scopes = referenceIsMarker ? emptyMarkerScopes : emptyScopes;
    this.___scopeKeys = referenceIsMarker ? emptyMarkerKeys : emptyKeys;
    this.___referenceNode = referenceNode;
    this.___referenceIsMarker = referenceIsMarker;
    this.___renderer = renderer;
    this.___keyFn = keyFn;
    this.___parentScopeOrScopes = parentScopeOrScopes;
    this.___parentOffset = parentOffset;
    this.___execItem = execItem;
    this.___execIndex = execIndex;
    this.___execArray = execArray;
    this.___context = Context;
  }

  [Symbol.iterator]() {
    return this.___scopes.values();
  }

  ___execChildScope(childScope: Scope) {
    // TODO: these could all be the same function... in which case we shouldn't call it 3 times
    this.___execItem &&
      this.___execItem(
        childScope,
        this.___parentScopeOrScopes,
        this.___parentOffset
      );
    this.___execIndex &&
      this.___execIndex(
        childScope,
        this.___parentScopeOrScopes,
        this.___parentOffset
      );
    this.___execArray &&
      this.___execArray(
        childScope,
        this.___parentScopeOrScopes,
        this.___parentOffset
      );
  }

  ___getFirstNode() {
    return this.___scopes.get(this.___scopeKeys[0])!.___getFirstNode();
  }

  ___getLastNode() {
    return this.___scopes
      .get(this.___scopeKeys[this.___scopeKeys.length - 1])!
      .___getLastNode();
  }

  setOf(newArray: unknown[]) {
    let newScopes: Map<unknown, Scope>;
    let newKeys: unknown[];
    const len = newArray.length;
    const oldScopes = this.___scopes;
    const oldKeys = this.___scopeKeys;
    let newItems = 0;
    let moved = false;
    const referenceIsMarker = this.___referenceIsMarker;
    let afterReference: Node | null;
    let parentNode: Node & ParentNode;

    if (len > 0) {
      newScopes = new Map();
      setContext(this.___context);
      for (let index = 0; index < len; index++) {
        const item = newArray[index];
        const key = this.___keyFn ? this.___keyFn(item, index) : "" + index;
        let childScope = oldScopes.get(key);
        if (!childScope) {
          newItems++;
          childScope = createScope(
            this.___renderer.___size,
            this.___renderer.___domMethods!
          );
          childScope[0] = item;
          childScope[1] = index;
          childScope[2] = newArray;
          initRenderer(
            this.___renderer,
            childScope,
            this.___parentScopeOrScopes,
            this.___parentOffset
          );
          this.___execChildScope(childScope);
        } else {
          const queuedScope = getQueuedScope(childScope);
          queuedScope[0] = item;
          queuedScope[1] = index;
          queuedScope[2] = newArray;
          moved = moved || key !== oldKeys[index];
          this.___execChildScope(queuedScope);
        }
        newScopes.set(key, childScope);
      }
      setContext(null);
      newKeys = Array.from(newScopes.keys());
    }

    // TODO: if we have an empty scope with the empty marker as an item, these numbers are off by one
    // const removals = newScopes.size - oldScopes.size - newItems < 0;
    // if (removals) {
    //   for (const k of oldKeys) {
    //     if (!newScopes.has(k)) {
    //       // TODO: markScopeDestroyed(oldScopes.get(k)!);
    //     }
    //   }
    // } else if (!newItems && !moved) {
    //   return;
    // }

    if (referenceIsMarker) {
      if (oldScopes === emptyMarkerScopes) {
        getEmptyScope(this.___referenceNode as Comment);
      }
      const oldLastChild = oldScopes.get(oldKeys[oldKeys.length - 1])!;
      afterReference = oldLastChild.___getAfterNode();
      parentNode = oldLastChild.___getParentNode();
      if (len === 0) {
        newScopes = emptyMarkerScopes;
        newKeys = emptyMarkerKeys;
        getEmptyScope(this.___referenceNode as Comment);
      }
    } else {
      afterReference = null;
      parentNode = this.___referenceNode as Node & ParentNode;

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

    this.___scopeKeys = newKeys!;
    this.___scopes = newScopes!;
  }
}
