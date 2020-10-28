import {
  Fragment,
  insertFragmentBefore,
  removeFragment,
  referenceStart
} from "./fragments";

const WRONG_POS = 2147483647;

export function reconcile(
  parent: Node & ParentNode,
  oldKeys: string[],
  oldNodes: Map<string, Fragment>,
  newKeys: string[],
  newNodes: Map<string, Fragment>,
  afterReference: Node | null
): void {
  let oldStart = 0;
  let newStart = 0;
  let oldEnd = oldKeys.length - 1;
  let newEnd = newKeys.length - 1;
  let oldStartKey = oldKeys[oldStart];
  let newStartKey = newKeys[newStart];
  let oldEndKey = oldKeys[oldEnd];
  let newEndKey = newKeys[newEnd];
  let i: number;
  let j: number | undefined;
  let k: number;
  let nextSibling: Node | null;
  let oldKey: string | null;
  let newKey: string;

  if (!newKeys.length && !afterReference) {
    for (i = 0; i < oldKeys.length; i++)
      oldNodes.get(oldKeys[i])!.___cleanup(true);
    parent.textContent = "";
    return;
  }

  // Step 1
  // tslint:disable-next-line: label-position
  outer: {
    // Skip nodes with the same key at the beginning.
    while (oldStartKey === newStartKey) {
      ++oldStart;
      ++newStart;
      if (oldStart > oldEnd || newStart > newEnd) {
        break outer;
      }
      oldStartKey = oldKeys[oldStart];
      newStartKey = newKeys[newStart];
    }

    // Skip nodes with the same key at the end.
    while (oldEndKey === newEndKey) {
      --oldEnd;
      --newEnd;
      if (oldStart > oldEnd || newStart > newEnd) {
        break outer;
      }
      oldEndKey = oldKeys[oldEnd];
      newEndKey = newKeys[newEnd];
    }
  }

  if (oldStart > oldEnd) {
    // All old nodes are in the correct place, insert the remaining new nodes.
    if (newStart <= newEnd) {
      k = newEnd + 1;
      nextSibling =
        k < newKeys.length
          ? referenceStart(newNodes.get(newKeys[k])!)
          : afterReference;
      do {
        insertFragmentBefore(
          parent,
          newNodes.get(newKeys[newStart++])!,
          nextSibling
        );
      } while (newStart <= newEnd);
    }
  } else if (newStart > newEnd) {
    // All new nodes are in the correct place, remove the remaining old nodes.
    do {
      removeFragment(oldNodes.get(oldKeys[oldStart++])!);
    } while (oldStart <= oldEnd);
  } else {
    // Step 2
    const oldLength = oldEnd - oldStart + 1;
    const newLength = newEnd - newStart + 1;

    const aNullable = oldKeys as Array<string | null>; // will be removed by js optimizing compilers.
    // Mark all nodes as inserted.
    const sources = new Array(newLength);
    for (i = 0; i < newLength; ++i) {
      sources[i] = -1;
    }

    // When pos === WRONG_POS, it means that one of the nodes in the wrong position.
    let pos = 0;
    let synced = 0;

    const keyIndex: Map<string, number> = new Map();
    for (j = newStart; j <= newEnd; ++j) {
      keyIndex.set(newKeys[j], j);
    }

    for (i = oldStart; i <= oldEnd && synced < newLength; ++i) {
      oldKey = oldKeys[i];
      j = keyIndex.get(oldKey);
      if (j !== undefined) {
        pos = pos > j ? WRONG_POS : j;
        ++synced;
        newKey = newKeys[j];
        sources[j - newStart] = i;
        aNullable[i] = null;
      }
    }

    if (oldLength === oldKeys.length && synced === 0) {
      // None of the newNodes already exist in the DOM
      // All newNodes need to be inserted
      for (; newStart < newLength; ++newStart) {
        insertFragmentBefore(parent, newNodes.get(newKeys[newStart])!, null);
      }
      // All oldNodes need to be removed
      for (; oldStart < oldLength; ++oldStart) {
        removeFragment(oldNodes.get(oldKeys[oldStart])!);
      }
    } else {
      i = oldLength - synced;
      while (i > 0) {
        oldKey = aNullable[oldStart++];
        if (oldKey !== null) {
          removeFragment(oldNodes.get(oldKey)!);
          i--;
        }
      }

      // Step 3
      if (pos === WRONG_POS) {
        const seq = longestIncreasingSubsequence(sources);
        j = seq.length - 1;
        k = newKeys.length;
        for (i = newLength - 1; i >= 0; --i) {
          if (sources[i] === -1) {
            pos = i + newStart;
            newKey = newKeys[pos++];
            nextSibling =
              pos < k
                ? referenceStart(newNodes.get(newKeys[pos])!)
                : afterReference;
            insertFragmentBefore(parent, newNodes.get(newKey)!, nextSibling);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + newStart;
              newKey = newKeys[pos++];
              nextSibling =
                pos < k
                  ? referenceStart(newNodes.get(newKeys[pos])!)
                  : afterReference;
              insertFragmentBefore(parent, newNodes.get(newKey)!, nextSibling);
            } else {
              --j;
            }
          }
        }
      } else if (synced !== newLength) {
        k = newKeys.length;
        for (i = newLength - 1; i >= 0; --i) {
          if (sources[i] === -1) {
            pos = i + newStart;
            newKey = newKeys[pos++];
            nextSibling =
              pos < k
                ? referenceStart(newNodes.get(newKeys[pos])!)
                : afterReference;
            insertFragmentBefore(parent, newNodes.get(newKey)!, nextSibling);
          }
        }
      }
    }
  }
}

function longestIncreasingSubsequence(a: number[]): number[] {
  const p = a.slice();
  const result: number[] = [];
  result.push(0);
  let u: number;
  let v: number;

  for (let i = 0, il = a.length; i < il; ++i) {
    if (a[i] === -1) {
      continue;
    }

    const j = result[result.length - 1];
    if (a[j] < a[i]) {
      p[i] = j;
      result.push(i);
      continue;
    }

    u = 0;
    v = result.length - 1;

    while (u < v) {
      // tslint:disable-next-line:no-bitwise
      const c = ((u + v) / 2) | 0;
      if (a[result[c]] < a[i]) {
        u = c + 1;
      } else {
        v = c;
      }
    }

    if (a[i] < a[result[u]]) {
      if (u > 0) {
        p[i] = result[u - 1];
      }
      result[u] = i;
    }
  }

  u = result.length;
  v = result[u - 1];

  while (u-- > 0) {
    result[u] = v;
    v = p[v];
  }

  return result;
}
