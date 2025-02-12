import type { BranchScope } from "../common/types";
import { insertBranchBefore, removeAndDestroyBranch } from "./scope";

const WRONG_POS = 2147483647;

export function reconcile(
  parent: ParentNode,
  oldBranches: BranchScope[],
  newBranches: BranchScope[],
  afterReference: Node | null,
): void {
  let oldStart = 0;
  let newStart = 0;
  let oldEnd = oldBranches.length - 1;
  let newEnd = newBranches.length - 1;
  let oldStartBranch = oldBranches[oldStart];
  let newStartBranch = newBranches[newStart];
  let oldEndBranch = oldBranches[oldEnd];
  let newEndBranch = newBranches[newEnd];
  let i: number;
  let j: number | undefined;
  let k: number;
  let nextSibling: Node | null;
  let oldBranch: BranchScope | null;
  let newBranch: BranchScope;

  // Step 1
  // tslint:disable-next-line: label-position
  outer: {
    // Skip nodes with the same key at the beginning.
    while (oldStartBranch === newStartBranch) {
      ++oldStart;
      ++newStart;
      if (oldStart > oldEnd || newStart > newEnd) {
        break outer;
      }
      oldStartBranch = oldBranches[oldStart];
      newStartBranch = newBranches[newStart];
    }

    // Skip nodes with the same key at the end.
    while (oldEndBranch === newEndBranch) {
      --oldEnd;
      --newEnd;
      if (oldStart > oldEnd || newStart > newEnd) {
        break outer;
      }
      oldEndBranch = oldBranches[oldEnd];
      newEndBranch = newBranches[newEnd];
    }
  }

  if (oldStart > oldEnd) {
    // All old nodes are in the correct place, insert the remaining new nodes.
    if (newStart <= newEnd) {
      k = newEnd + 1;
      nextSibling =
        k < newBranches.length ? newBranches[k].___startNode : afterReference;
      do {
        insertBranchBefore(newBranches[newStart++], parent, nextSibling);
      } while (newStart <= newEnd);
    }
  } else if (newStart > newEnd) {
    // All new nodes are in the correct place, remove the remaining old nodes.
    do {
      removeAndDestroyBranch(oldBranches[oldStart++]);
    } while (oldStart <= oldEnd);
  } else {
    // Step 2
    const oldLength = oldEnd - oldStart + 1;
    const newLength = newEnd - newStart + 1;

    const aNullable = oldBranches as Array<BranchScope | null>; // will be removed by js optimizing compilers.
    // Mark all nodes as inserted.
    const sources = new Array(newLength);
    for (i = 0; i < newLength; ++i) {
      sources[i] = -1;
    }

    // When pos === WRONG_POS, it means that one of the nodes in the wrong position.
    let pos = 0;
    let synced = 0;

    const keyIndex: Map<unknown, number> = new Map();
    for (j = newStart; j <= newEnd; ++j) {
      keyIndex.set(newBranches[j], j);
    }

    for (i = oldStart; i <= oldEnd && synced < newLength; ++i) {
      oldBranch = oldBranches[i];
      j = keyIndex.get(oldBranch);
      if (j !== undefined) {
        pos = pos > j ? WRONG_POS : j;
        ++synced;
        newBranch = newBranches[j];
        sources[j - newStart] = i;
        aNullable[i] = null;
      }
    }

    if (oldLength === oldBranches.length && synced === 0) {
      // None of the newNodes already exist in the DOM
      // All newNodes need to be inserted
      for (; newStart < newLength; ++newStart) {
        insertBranchBefore(newBranches[newStart], parent, afterReference);
      }
      // All oldNodes need to be removed
      for (; oldStart < oldLength; ++oldStart) {
        removeAndDestroyBranch(oldBranches[oldStart]);
      }
    } else {
      i = oldLength - synced;
      while (i > 0) {
        oldBranch = aNullable[oldStart++];
        if (oldBranch !== null) {
          removeAndDestroyBranch(oldBranch);
          i--;
        }
      }

      // Step 3
      if (pos === WRONG_POS) {
        const seq = longestIncreasingSubsequence(sources);
        j = seq.length - 1;
        k = newBranches.length;
        for (i = newLength - 1; i >= 0; --i) {
          if (sources[i] === -1) {
            pos = i + newStart;
            newBranch = newBranches[pos++];
            nextSibling =
              pos < k ? newBranches[pos].___startNode : afterReference;
            insertBranchBefore(newBranch, parent, nextSibling);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + newStart;
              newBranch = newBranches[pos++];
              nextSibling =
                pos < k ? newBranches[pos].___startNode : afterReference;
              insertBranchBefore(newBranch, parent, nextSibling);
            } else {
              --j;
            }
          }
        }
      } else if (synced !== newLength) {
        k = newBranches.length;
        for (i = newLength - 1; i >= 0; --i) {
          if (sources[i] === -1) {
            pos = i + newStart;
            newBranch = newBranches[pos++];
            nextSibling =
              pos < k ? newBranches[pos].___startNode : afterReference;
            insertBranchBefore(newBranch, parent, nextSibling);
          }
        }
      }
    }
  }
}

function longestIncreasingSubsequence(a: number[]): number[] {
  const p = a.slice();
  const result: number[] = [0];
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
