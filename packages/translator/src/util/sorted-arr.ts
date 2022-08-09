function insertInArray<T extends unknown[]>(
  compare: (a: T[number], b: T[number]) => number,
  arr: T,
  val: T[number]
): T {
  const len = arr.length;
  let max = len;
  let pos = 0;

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const compareResult = compare(arr[mid], val);
    if (compareResult === 0) return arr;
    if (compareResult > 0) max = mid;
    else pos = mid + 1;
  }

  let cur = val;
  while (pos < len) {
    const next = cur;
    cur = arr[pos];
    arr[pos++] = next;
  }

  arr[len] = cur;

  return arr;
}

export function findIndex<V>(
  compare: (a: V, b: V) => number,
  arr: V[],
  val: V
) {
  let max = arr.length;
  let pos = 0;

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const compareResult = compare(arr[mid], val);
    if (compareResult === 0) return mid;
    if (compareResult > 0) max = mid;
    else pos = mid + 1;
  }

  return -1;
}

export function createSortedCollection<V>(compare: (a: V, b: V) => number) {
  return {
    insert(data: undefined | V | V[], val: V, immutable = false): V | V[] {
      if (data) {
        if (Array.isArray(data)) {
          return insertInArray(compare, immutable ? [...data] : data, val);
        } else {
          const compareResult = compare(data, val);

          if (compareResult !== 0) {
            return compareResult < 0 ? [data, val] : [val, data];
          }
        }
      }
      return val;
    },
    find(data: undefined | V | V[], val: V) {
      if (data) {
        if (Array.isArray(data)) {
          return data[findIndex(compare, data, val)];
        } else {
          return data === val ? data : undefined;
        }
      }
    },
    count(data: undefined | V | V[]) {
      if (data === undefined) return 0;
      if (!Array.isArray(data)) return 1;
      return data.length;
    },
  };
}
