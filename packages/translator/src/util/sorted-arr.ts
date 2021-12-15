export function insert<T extends unknown[]>(
  compare: (a: T[number], b: T[number]) => number,
  arr: T,
  val: T[number]
) {
  const len = arr.length;
  let max = len;
  let pos = 0;

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const compareResult = compare(arr[mid], val);
    if (compareResult === 0) return;
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
}

export function findIndex<T extends unknown[]>(
  compare: (a: T[number], b: T[number]) => number,
  arr: T,
  val: T[number]
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

type KeysWithValueType<T, M> = keyof {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : T[K] extends undefined | M | M[]
    ? K
    : never]: never;
};

export function insertProp<
  V,
  T extends Record<string, unknown>,
  K extends string extends K ? keyof T : KeysWithValueType<T, V>
>(compare: (a: V, b: V) => number, data: T, key: K & keyof T, val: V) {
  const cur = data[key] as undefined | V | V[];
  if (cur) {
    if (Array.isArray(cur)) {
      insert(compare, cur, val);
    } else {
      const compareResult = compare(cur, val);

      if (compareResult !== 0) {
        (data[key] as V[]) = compareResult > 0 ? [cur, val] : [val, cur];
      }
    }
  } else {
    (data[key] as V) = val;
  }
}
