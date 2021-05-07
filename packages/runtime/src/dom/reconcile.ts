import { Scope } from "./scope";

const WRONG_POS = 2147483647;

export function reconcile(
  parent: Node & ParentNode,
  oldScopes: Scope[],
  newScopes: Scope[],
  afterReference: Node | null
): void {
  let oldStart = 0;
  let newStart = 0;
  let oldEnd = oldScopes.length - 1;
  let newEnd = newScopes.length - 1;
  let oldStartScope = oldScopes[oldStart];
  let newStartScope = newScopes[newStart];
  let oldEndScope = oldScopes[oldEnd];
  let newEndScope = newScopes[newEnd];
  let i: number;
  let j: number | undefined;
  let k: number;
  let nextSibling: Node | null;
  let oldScope: Scope | null;
  let newScope: Scope;

  if (!newScopes.length && !afterReference) {
    for (i = 0; i < oldScopes.length; i++) {
      // TODO: oldKeys[i].___cleanup(true);
    }
    parent.textContent = "";
    return;
  }

  // Step 1
  // tslint:disable-next-line: label-position
  outer: {
    // Skip nodes with the same key at the beginning.
    while (oldStartScope === newStartScope) {
      ++oldStart;
      ++newStart;
      if (oldStart > oldEnd || newStart > newEnd) {
        break outer;
      }
      oldStartScope = oldScopes[oldStart];
      newStartScope = newScopes[newStart];
    }

    // Skip nodes with the same key at the end.
    while (oldEndScope === newEndScope) {
      --oldEnd;
      --newEnd;
      if (oldStart > oldEnd || newStart > newEnd) {
        break outer;
      }
      oldEndScope = oldScopes[oldEnd];
      newEndScope = newScopes[newEnd];
    }
  }

  if (oldStart > oldEnd) {
    // All old nodes are in the correct place, insert the remaining new nodes.
    if (newStart <= newEnd) {
      k = newEnd + 1;
      nextSibling =
        k < newScopes.length ? newScopes[k].___getFirstNode() : afterReference;
      do {
        newScopes[newStart++].___insertBefore(parent, nextSibling);
      } while (newStart <= newEnd);
    }
  } else if (newStart > newEnd) {
    // All new nodes are in the correct place, remove the remaining old nodes.
    do {
      oldScopes[oldStart++].___remove();
    } while (oldStart <= oldEnd);
  } else {
    // Step 2
    const oldLength = oldEnd - oldStart + 1;
    const newLength = newEnd - newStart + 1;

    const aNullable = oldScopes as Array<Scope | null>; // will be removed by js optimizing compilers.
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
      keyIndex.set(newScopes[j], j);
    }

    for (i = oldStart; i <= oldEnd && synced < newLength; ++i) {
      oldScope = oldScopes[i];
      j = keyIndex.get(oldScope);
      if (j !== undefined) {
        pos = pos > j ? WRONG_POS : j;
        ++synced;
        newScope = newScopes[j];
        sources[j - newStart] = i;
        aNullable[i] = null;
      }
    }

    if (oldLength === oldScopes.length && synced === 0) {
      // None of the newNodes already exist in the DOM
      // All newNodes need to be inserted
      for (; newStart < newLength; ++newStart) {
        newScopes[newStart].___insertBefore(parent, null);
      }
      // All oldNodes need to be removed
      for (; oldStart < oldLength; ++oldStart) {
        oldScopes[oldStart].___remove();
      }
    } else {
      i = oldLength - synced;
      while (i > 0) {
        oldScope = aNullable[oldStart++];
        if (oldScope !== null) {
          oldScope.___remove();
          i--;
        }
      }

      // Step 3
      if (pos === WRONG_POS) {
        const seq = longestIncreasingSubsequence(sources);
        j = seq.length - 1;
        k = newScopes.length;
        for (i = newLength - 1; i >= 0; --i) {
          if (sources[i] === -1) {
            pos = i + newStart;
            newScope = newScopes[pos++];
            nextSibling =
              pos < k ? newScopes[pos].___getFirstNode() : afterReference;
            newScope.___insertBefore(parent, nextSibling);
          } else {
            if (j < 0 || i !== seq[j]) {
              pos = i + newStart;
              newScope = newScopes[pos++];
              nextSibling =
                pos < k ? newScopes[pos].___getFirstNode() : afterReference;
              newScope.___insertBefore(parent, nextSibling);
            } else {
              --j;
            }
          }
        }
      } else if (synced !== newLength) {
        k = newScopes.length;
        for (i = newLength - 1; i >= 0; --i) {
          if (sources[i] === -1) {
            pos = i + newStart;
            newScope = newScopes[pos++];
            nextSibling =
              pos < k ? newScopes[pos].___getFirstNode() : afterReference;
            newScope.___insertBefore(parent, nextSibling);
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
