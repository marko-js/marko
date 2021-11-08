import { Scope, ScopeOffsets } from "../common/types";
import { Context, setContext } from "../common/context";
import { queue } from "./queue";
import { reconcile } from "./reconcile";
import { Renderer, initRenderer } from "./renderer";
import {
  createScope,
  getEmptyScope,
  destroyScope,
  read,
  runWithScope,
  write,
} from "./scope";

const enum ConditionalIndex {
  REFERENCE_NODE = 0,
  SCOPE = 1,
  RENDERER = 2,
  CONTEXT = 3,
}

type Conditional = {
  [ConditionalIndex.REFERENCE_NODE]: Element | Comment;
  [ConditionalIndex.SCOPE]: Scope;
  [ConditionalIndex.RENDERER]: Renderer;
  [ConditionalIndex.CONTEXT]: typeof Context;
};

export function queueInBranch(
  conditionalIndex: number,
  branch: Renderer,
  fn: () => void,
  sortValue: number
) {
  if (read(conditionalIndex + ConditionalIndex.RENDERER) === branch) {
    queue(
      fn,
      sortValue,
      undefined,
      read(conditionalIndex + ConditionalIndex.SCOPE) as Scope,
      ScopeOffsets.BEGIN_DATA
    );
    return 1;
  }
}

export function getConditionalFirstNode(
  this: Scope,
  conditionalIndex: number = this.___startNode as number,
  last?: boolean
) {
  const scope = this[
    conditionalIndex + ConditionalIndex.SCOPE + ScopeOffsets.BEGIN_DATA
  ] as Scope;
  return scope
    ? scope[last ? "___getLastNode" : "___getFirstNode"]()
    : (this[
        conditionalIndex +
          ConditionalIndex.REFERENCE_NODE +
          ScopeOffsets.BEGIN_DATA
      ] as Comment);
}

export function getConditionalLastNode(this: Scope) {
  return getConditionalFirstNode.call(this, this.___endNode as number, true);
}

export function setConditionalRenderer(
  conditionalIndex: number,
  newRenderer: Renderer | undefined
) {
  if (write(conditionalIndex + ConditionalIndex.RENDERER, newRenderer)) {
    let newScope: Scope;
    let prevScope = read<Conditional, ConditionalIndex.SCOPE>(
      conditionalIndex + ConditionalIndex.SCOPE
    );

    if (newRenderer) {
      setContext(
        read(conditionalIndex + ConditionalIndex.CONTEXT) as typeof Context
      );
      write(
        conditionalIndex + ConditionalIndex.SCOPE,
        (newScope = createScope(
          newRenderer.___size,
          newRenderer.___domMethods!
        ))
      );
      initRenderer(newRenderer, newScope);
      prevScope =
        prevScope ||
        getEmptyScope(
          read<Conditional, ConditionalIndex.REFERENCE_NODE>(
            conditionalIndex + ConditionalIndex.REFERENCE_NODE
          ) as Comment
        );
      setContext(null);
    } else {
      newScope = getEmptyScope(
        read<Conditional, ConditionalIndex.REFERENCE_NODE>(
          conditionalIndex + ConditionalIndex.REFERENCE_NODE
        ) as Comment
      );
      write(conditionalIndex + ConditionalIndex.SCOPE, undefined);
    }

    newScope.___insertBefore(
      prevScope.___getParentNode(),
      prevScope.___getFirstNode()
    );
    prevScope.___remove();
  }
}

export function setConditionalRendererOnlyChild(
  conditionalIndex: number,
  newRenderer: Renderer | undefined
) {
  if (write(conditionalIndex + ConditionalIndex.RENDERER, newRenderer)) {
    const referenceNode = read<Conditional, ConditionalIndex.REFERENCE_NODE>(
      conditionalIndex + ConditionalIndex.REFERENCE_NODE
    ) as Element;
    referenceNode.textContent = "";

    if (newRenderer) {
      setContext(
        read(conditionalIndex + ConditionalIndex.CONTEXT) as typeof Context
      );
      let newScope: Scope;
      write(
        conditionalIndex + ConditionalIndex.SCOPE,
        (newScope = createScope(
          newRenderer.___size,
          newRenderer.___domMethods!
        ))
      );
      initRenderer(newRenderer, newScope);
      newScope.___insertBefore(referenceNode, null);
      setContext(null);
    }
  }
}

const emptyMarkerMap = new Map();
const emptyMarkerArray = [getEmptyScope()];
emptyMarkerMap.set(Symbol("empty"), getEmptyScope());
const emptyMap = new Map();
const emptyArray = [] as unknown[];

const enum LoopIndex {
  REFERENCE_NODE = 0,
  SCOPE_MAP = 1,
  SCOPE_ARRAY = 2,
  CONTEXT = 3,
}

type Loop = {
  [LoopIndex.REFERENCE_NODE]: Element | Comment;
  [LoopIndex.SCOPE_MAP]: Map<unknown, Scope>;
  [LoopIndex.SCOPE_ARRAY]: Scope[];
  [LoopIndex.CONTEXT]: typeof Context;
};

export function queueForEach(
  loopIndex: number,
  fn: () => void,
  sortValue: number
) {
  for (const scope of read<Loop, LoopIndex.SCOPE_ARRAY>(
    loopIndex + LoopIndex.SCOPE_ARRAY
  )) {
    queue(fn, sortValue, undefined, scope, ScopeOffsets.BEGIN_DATA);
  }
}

export function getLoopFirstNode(
  this: Scope,
  loopIndex: number = this.___startNode as number,
  last?: boolean
) {
  const scopes = this[
    loopIndex + LoopIndex.SCOPE_ARRAY + ScopeOffsets.BEGIN_DATA
  ] as Scope[];
  return scopes === emptyMarkerArray
    ? (this[
        loopIndex + LoopIndex.REFERENCE_NODE + ScopeOffsets.BEGIN_DATA
      ] as Comment)
    : scopes[last ? scopes.length - 1 : 0][
        last ? "___getLastNode" : "___getFirstNode"
      ]();
}

export function getLoopLastNode(this: Scope) {
  return getLoopFirstNode.call(this, this.___endNode as number, true);
}

export function setLoopOf<T>(
  loopIndex: number,
  newValues: T[],
  renderer: Renderer,
  keyFn?: (item: T) => unknown,
  itemFn?: () => void,
  indexFn?: () => void
) {
  let newMap: Map<unknown, Scope>;
  let newArray: Scope[];
  const len = newValues.length;
  const referenceNode = read<Loop, LoopIndex.REFERENCE_NODE>(
    loopIndex + LoopIndex.REFERENCE_NODE
  );
  const referenceIsMarker = referenceNode.nodeType === 8; /* Comment */
  const oldMap =
    read<Loop, LoopIndex.SCOPE_MAP>(loopIndex + LoopIndex.SCOPE_MAP) ||
    (referenceIsMarker ? emptyMarkerMap : emptyMap);
  const oldArray =
    read<Loop, LoopIndex.SCOPE_ARRAY>(loopIndex + LoopIndex.SCOPE_ARRAY) ||
    (referenceIsMarker ? emptyMarkerArray : (emptyArray as Scope[]));
  let inserts = 0;
  let moves = 0;
  let afterReference: Node | null;
  let parentNode: Node & ParentNode;

  if (len > 0) {
    newMap = new Map();
    newArray = [];
    setContext(read(loopIndex + LoopIndex.CONTEXT) as typeof Context);
    for (let index = 0; index < len; index++) {
      const item = newValues[index];
      const key = keyFn ? keyFn(item) : index;
      let childScope = oldMap.get(key);
      if (!childScope) {
        childScope = createScope(renderer.___size, renderer.___domMethods!);
        childScope[ScopeOffsets.BEGIN_DATA] = item;
        childScope[ScopeOffsets.BEGIN_DATA + 1] = index;
        initRenderer(renderer, childScope);
        if (itemFn) {
          runWithScope(itemFn, ScopeOffsets.BEGIN_DATA, childScope);
        }
        if (indexFn) {
          runWithScope(indexFn, ScopeOffsets.BEGIN_DATA, childScope);
        }
        inserts++;
      } else {
        if (itemFn && write(0, item, childScope, ScopeOffsets.BEGIN_DATA)) {
          runWithScope(itemFn, ScopeOffsets.BEGIN_DATA, childScope);
        }
        if (write(1, index, childScope, ScopeOffsets.BEGIN_DATA)) {
          moves++;
          if (indexFn) {
            runWithScope(indexFn, ScopeOffsets.BEGIN_DATA, childScope);
          }
        }
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
      if (renderer.___hasUserEffects) {
        for (let i = 0; i < oldArray.length; i++) {
          destroyScope(oldArray[i]);
        }
      }
      referenceNode.textContent = "";
      write(loopIndex + LoopIndex.SCOPE_MAP, emptyMap);
      write(loopIndex + LoopIndex.SCOPE_ARRAY, emptyArray);
      return;
    }
  }

  if (inserts || moves || len !== oldArray.length) {
    if (referenceIsMarker) {
      if (oldMap === emptyMarkerMap) {
        getEmptyScope(referenceNode as Comment);
      }
      const oldLastChild = oldArray[oldArray.length - 1];
      afterReference = oldLastChild.___getAfterNode();
      parentNode = oldLastChild.___getParentNode();
    } else {
      afterReference = null;
      parentNode = referenceNode as Element;
    }
    reconcile(parentNode, oldArray, newArray!, afterReference);
  }

  write(loopIndex + LoopIndex.SCOPE_MAP, newMap);
  write(loopIndex + LoopIndex.SCOPE_ARRAY, newArray);
}

export function setLoopFromTo(
  loopIndex: number,
  from: number,
  to: number,
  step: number,
  renderer: Renderer,
  itemFn?: () => void,
  indexFn?: () => void
) {
  const range: number[] = [];

  for (let i = from; i <= to; i += step) {
    range.push(i);
  }

  setLoopOf(loopIndex, range, renderer, keyFromTo, itemFn, indexFn);
}

function keyFromTo(item: number) {
  return item;
}

export function setLoopIn(
  loopIndex: number,
  object: Record<string, unknown>,
  renderer: Renderer,
  itemFn?: () => void
) {
  setLoopOf(loopIndex, Object.entries(object), renderer, keyIn, itemFn);
}

function keyIn(item: [string, unknown]) {
  return item[0];
}
