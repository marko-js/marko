import {
  Fragment,
  insertFragmentBefore,
  removeFragment,
  referenceStart
} from "./fragments";

// based off https://github.com/luwes/sinuous/blob/master/packages/sinuous/map/src/diff.js
// naive implementation(optimizes swap over sort) but it sure is small ~1kb minified smaller
export function reconcile(
  parent: Node & ParentNode,
  oldKeys: string[],
  oldNodes: Map<string, Fragment>,
  newKeys: string[],
  newNodes: Map<string, Fragment>,
  afterReference: Node | null
): void {
  let i: number;
  let j: number;

  if (!newKeys.length && !afterReference) {
    for (i = 0; i < oldKeys.length; i++)
      oldNodes.get(oldKeys[i])!.___cleanup(true);
    parent.textContent = "";
    return;
  }

  const aIdx = new Map();
  const bIdx = new Map();

  // Create a mapping from keys to their position in the old list
  for (i = 0; i < oldKeys.length; i++) {
    aIdx.set(oldKeys[i], i);
  }

  // Create a mapping from keys to their position in the new list
  for (i = 0; i < newKeys.length; i++) {
    bIdx.set(newKeys[i], i);
  }

  for (i = j = 0; i !== oldKeys.length || j !== newKeys.length;) {
    var a = oldKeys[i], b = newKeys[j];
    if (a === null) {
      // This is a element that has been moved to earlier in the list
      i++;
    } else if (newKeys.length <= j) {
      // No more elements in new, this is a delete
      removeFragment(oldNodes.get(a)!);
      i++;
    } else if (oldKeys.length <= i) {
      // No more elements in old, this is an addition
      insertFragmentBefore(
        parent,
        newNodes.get(b)!,
        a ? referenceStart(oldNodes.get(a)!) : afterReference
      );
      j++;
    } else if (a === b) {
      // No difference, we move on
      i++; j++;
    } else {
      // This gives us the idx of where this element should be
      var curElmInNew = bIdx.get(a);
      // This gives us the idx of where the wanted element is now
      var wantedElmInOld = aIdx.get(b);
      if (curElmInNew === undefined) {
        // Current element is not in new list, it has been removed
        removeFragment(oldNodes.get(a)!);
        i++;
      } else if (wantedElmInOld === undefined) {
        // New element is not in old list, it has been added
        insertFragmentBefore(
          parent,
          newNodes.get(b)!,
          a ? referenceStart(oldNodes.get(a)!) : afterReference
        );
        j++;
      } else {
        // Element is in both lists, it has been moved
        insertFragmentBefore(
          parent,
          oldNodes.get(oldKeys[wantedElmInOld])!,
          a ? referenceStart(oldNodes.get(a)!) : afterReference
        );
        aIdx.delete(wantedElmInOld);
        oldKeys[wantedElmInOld] = null as unknown as string;
        if (wantedElmInOld > i + 1) i++;
        j++;
      }
    }
  }
}