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
import { DOMFragment, singleNodeFragment } from "./fragment";

export const enum ConditionalIndex {
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

export function setConditionalRenderer(
  conditionalIndex: number,
  newRenderer: Renderer | undefined,
  fragment: DOMFragment = singleNodeFragment
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
        (newScope = createScope(newRenderer.___size))
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

    fragment.___insertBefore(
      newScope,
      fragment.___getParentNode(prevScope),
      fragment.___getFirstNode(prevScope)
    );
    fragment.___remove(prevScope);
  }
}

export function setConditionalRendererOnlyChild(
  conditionalIndex: number,
  newRenderer: Renderer | undefined,
  fragment: DOMFragment = singleNodeFragment
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
        (newScope = createScope(newRenderer.___size))
      );
      initRenderer(newRenderer, newScope);
      fragment.___insertBefore(newScope, referenceNode, null);
      setContext(null);
    }
  }
}

const emptyMarkerMap = new Map();
export const emptyMarkerArray = [getEmptyScope()];
emptyMarkerMap.set(Symbol("empty"), getEmptyScope());
const emptyMap = new Map();
const emptyArray = [] as Scope[];

export const enum LoopIndex {
  REFERENCE_NODE = 0,
  SCOPE_ARRAY = 1,
  SCOPE_MAP = 2,
  CONTEXT = 3,
}

type Loop = {
  [LoopIndex.REFERENCE_NODE]: Element | Comment;
  [LoopIndex.SCOPE_ARRAY]: Scope[];
  [LoopIndex.SCOPE_MAP]: Map<unknown, Scope>;
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

export function setLoopOf<T>(
  loopIndex: number,
  newValues: T[],
  renderer: Renderer,
  keyFn?: (item: T) => unknown,
  applyFn?: (item: T, index: number, array: T[]) => void,
  fragment: DOMFragment = singleNodeFragment
) {
  let newMap: Map<unknown, Scope>;
  let newArray: Scope[];
  const len = newValues.length;
  const referenceNode = read<Loop, LoopIndex.REFERENCE_NODE>(
    loopIndex + LoopIndex.REFERENCE_NODE
  );
  // TODO: compiler should use only comment so the text check can be removed
  const referenceIsMarker =
    referenceNode.nodeType === 8 /* Comment */ ||
    referenceNode.nodeType === 3; /* Text */
  const oldMap =
    read<Loop, LoopIndex.SCOPE_MAP>(loopIndex + LoopIndex.SCOPE_MAP) ||
    (referenceIsMarker ? emptyMarkerMap : emptyMap);
  const oldArray =
    read<Loop, LoopIndex.SCOPE_ARRAY>(loopIndex + LoopIndex.SCOPE_ARRAY) ||
    (referenceIsMarker ? emptyMarkerArray : (emptyArray as Scope[]));
  let afterReference: Node | null;
  let parentNode: Node & ParentNode;
  let needsReconciliation = true; // TODO: len !== oldArray.length;

  if (len > 0) {
    newMap = new Map();
    newArray = [];
    setContext(read(loopIndex + LoopIndex.CONTEXT) as typeof Context);
    for (let index = 0; index < len; index++) {
      const item = newValues[index];
      const key = keyFn ? keyFn(item) : index;
      let childScope = oldMap.get(key);
      if (!childScope) {
        childScope = createScope(renderer.___size);
        initRenderer(renderer, childScope);
        // TODO: once we can track moves
        // needsReconciliation = true;
      } else {
        // TODO: track if any childScope has changed index
        // needsReconciliation ||= oldIndexMap.get(key) !== index;
      }
      if (applyFn) {
        runWithScope(applyFn as any, ScopeOffsets.BEGIN_DATA, childScope, [
          item,
          index,
          newArray,
        ]);
      }
      newMap.set(key, childScope);
      newArray.push(childScope);
      // newIndexMap.set(key, index);
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

  write(loopIndex + LoopIndex.SCOPE_MAP, newMap);
  write(loopIndex + LoopIndex.SCOPE_ARRAY, newArray);
}

export function setLoopFromTo(
  loopIndex: number,
  from: number,
  to: number,
  step: number,
  renderer: Renderer,
  applyFn?: (item: number, index: number, array: number[]) => void
) {
  const range: number[] = [];

  for (let i = from; i <= to; i += step) {
    range.push(i);
  }

  setLoopOf(loopIndex, range, renderer, keyFromTo, applyFn);
}

function keyFromTo(item: number) {
  return item;
}

export function setLoopIn(
  loopIndex: number,
  object: Record<string, unknown>,
  renderer: Renderer,
  applyFn?: (item: [key: string, value: unknown], index: number) => void
) {
  setLoopOf(loopIndex, Object.entries(object), renderer, keyIn, applyFn);
}

function keyIn(item: [string, unknown]) {
  return item[0];
}
