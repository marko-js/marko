import { destroyScope, Scope } from "./scope";

// based off https://github.com/luwes/sinuous/blob/master/packages/sinuous/map/src/diff.js
// naive implementation(optimizes swap over sort) but it sure is small ~1kb minified smaller
export function reconcile(
  parent: Node & ParentNode,
  oldScopes: Scope[],
  newScopes: Scope[],
  afterReference: Node | null
): void {
  let i: number;
  let j: number;

  const aIdx = new Map();
  const bIdx = new Map();

  // Create a mapping from keys to their position in the old list
  for (i = 0; i < oldScopes.length; i++) {
    aIdx.set(oldScopes[i], i);
  }

  // Create a mapping from keys to their position in the new list
  for (i = 0; i < newScopes.length; i++) {
    bIdx.set(newScopes[i], i);
  }

  for (i = j = 0; i !== oldScopes.length || j !== newScopes.length; ) {
    const a = oldScopes[i],
      b = newScopes[j];
    if (a === null) {
      // This is a element that has been moved to earlier in the list
      i++;
    } else if (newScopes.length <= j) {
      // No more elements in new, this is a delete
      destroyScope(a).___remove();
      i++;
    } else if (oldScopes.length <= i) {
      // No more elements in old, this is an addition
      b.___insertBefore(parent, a ? a.___getFirstNode() : afterReference);
      j++;
    } else if (a === b) {
      // No difference, we move on
      i++;
      j++;
    } else {
      // This gives us the idx of where this element should be
      const curElmInNew = bIdx.get(a);
      // This gives us the idx of where the wanted element is now
      const wantedElmInOld = aIdx.get(b);
      if (curElmInNew === undefined) {
        // Current element is not in new list, it has been removed
        destroyScope(a).___remove();
        i++;
      } else if (wantedElmInOld === undefined) {
        // New element is not in old list, it has been added
        b.___insertBefore(parent, a ? a.___getFirstNode() : afterReference);
        j++;
      } else {
        // Element is in both lists, it has been moved
        oldScopes[wantedElmInOld].___insertBefore(
          parent,
          a ? a.___getFirstNode() : afterReference
        );
        aIdx.delete(wantedElmInOld);
        oldScopes[wantedElmInOld] = (null as unknown) as Scope;
        if (wantedElmInOld > i + 1) i++;
        j++;
      }
    }
  }
}
