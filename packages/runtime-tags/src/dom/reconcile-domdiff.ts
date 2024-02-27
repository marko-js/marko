import type { Scope } from "../common/types";
import { insertBefore, removeAndDestroyScope } from "./scope";

// based off https://github.com/WebReflection/udomdiff/blob/master/esm/index.js
// middle sized ~.6kb minified smaller
export function reconcile(
  parent: Node & ParentNode,
  oldScopes: Scope[],
  newScopes: Scope[],
  afterReference: Node | null,
): void {
  const bLength = newScopes.length;
  let aEnd = oldScopes.length;
  let bEnd = bLength;
  let aStart = 0;
  let bStart = 0;
  let map: Map<Scope, number> | null = null;

  while (aStart < aEnd || bStart < bEnd) {
    // append head, tail, or nodes in between: fast path
    if (aEnd === aStart) {
      // we could be in a situation where the rest of nodes that
      // need to be added are not at the end, and in such case
      // the node to `insertBefore`, if the index is more than 0
      // must be retrieved, otherwise it's gonna be the first item.
      const node =
        bEnd < bLength
          ? bStart
            ? newScopes[bStart - 1].___endNode.nextSibling
            : newScopes[bEnd - bStart].___startNode
          : afterReference;
      while (bStart < bEnd)
        insertBefore(newScopes[bStart++], parent, node as Node | null);
    }
    // remove head or tail: fast path
    else if (bEnd === bStart) {
      while (aStart < aEnd) {
        // remove the node only if it's unknown or not live
        if (!map || !map.has(oldScopes[aStart]))
          removeAndDestroyScope(oldScopes[aStart]);
        aStart++;
      }
    }
    // same node: fast path
    else if (oldScopes[aStart] === newScopes[bStart]) {
      aStart++;
      bStart++;
    }
    // same tail: fast path
    else if (oldScopes[aEnd - 1] === newScopes[bEnd - 1]) {
      aEnd--;
      bEnd--;
    }
    // reverse swap: also fast path
    else if (
      oldScopes[aStart] === newScopes[bEnd - 1] &&
      newScopes[bStart] === oldScopes[aEnd - 1]
    ) {
      // this is oldKeys "shrink" operation that could happen in these cases:
      // [1, 2, 3, 4, 5]
      // [1, 4, 3, 2, 5]
      // or asymmetric too
      // [1, 2, 3, 4, 5]
      // [1, 2, 3, 5, 6, 4]
      const node = oldScopes[--aEnd].___endNode.nextSibling;
      insertBefore(
        newScopes[bStart++],
        parent,
        oldScopes[aStart++].___endNode.nextSibling,
      );
      insertBefore(newScopes[--bEnd], parent, node);
      // mark the future index as identical (yeah, it's dirty, but cheap 👍)
      // The main reason to do this, is that when oldKeys[aEnd] will be reached,
      // the loop will likely be on the fast path, as identical to newKeys[bEnd].
      // In the best case scenario, the next loop will skip the tail,
      // but in the worst one, this node will be considered as already
      // processed, bailing out pretty quickly from the map index check
      oldScopes[aEnd] = newScopes[bEnd];
    }
    // map based fallback, "slow" path
    else {
      // the map requires an O(bEnd - bStart) operation once
      // to store all future nodes indexes for later purposes.
      // In the worst case scenario, this is oldKeys full O(N) cost,
      // and such scenario happens at least when all nodes are different,
      // but also if both first and last items of the lists are different
      if (!map) {
        map = new Map();
        let i = bStart;
        while (i < bEnd) map.set(newScopes[i], i++);
      }
      // if it's oldKeys future node, hence it needs some handling
      if (map.has(oldScopes[aStart])) {
        // grab the index of such node, 'cause it might have been processed
        const index = map.get(oldScopes[aStart])!;
        // if it's not already processed, look on demand for the next LCS
        if (bStart < index && index < bEnd) {
          let i = aStart;
          // counts the amount of nodes that are the same in the future
          let sequence = 1;
          while (
            ++i < aEnd &&
            i < bEnd &&
            map.get(oldScopes[i]) === index + sequence
          )
            sequence++;
          // effort decision here: if the sequence is longer than replaces
          // needed to reach such sequence, which would brings again this loop
          // to the fast path, prepend the difference before oldKeys sequence,
          // and move only the future list index forward, so that aStart
          // and bStart will be aligned again, hence on the fast path.
          // An example considering aStart and bStart are both 0:
          // oldKeys: [1, 2, 3, 4]
          // newKeys: [7, 1, 2, 3, 6]
          // this would place 7 before 1 and, from that time on, 1, 2, and 3
          // will be processed at zero cost
          if (sequence > index - bStart) {
            const node = oldScopes[aStart].___startNode;
            while (bStart < index)
              insertBefore(newScopes[bStart++], parent, node as Node | null);
          }
          // if the effort wasn't good enough, fallback to oldKeys replace,
          // moving both source and target indexes forward, hoping that some
          // similar node will be found later on, to go back to the fast path
          else {
            const oldNode = oldScopes[aStart++];
            insertBefore(
              newScopes[bStart++],
              oldNode.___startNode.parentNode!,
              oldNode.___startNode,
            );
            removeAndDestroyScope(oldNode);
          }
        }
        // otherwise move the source forward, 'cause there's nothing to do
        else aStart++;
      }
      // this node has no meaning in the future list, so it's more than safe
      // to remove it, and check the next live node out instead, meaning
      // that only the live list index should be forwarded
      else removeAndDestroyScope(oldScopes[aStart++]);
    }
  }
}
