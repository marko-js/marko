export type Many<T> = [T, T, ...T[]];
export type OneMany<T> = T | Many<T>;
export type Opt<T> = undefined | OneMany<T>;
export type Compare<T> = (a: T, b: T) => number;

// A list only a `Sorted` instance wrote, so its lookups can binary search;
// `push`/`concat` results are not one, and one element has no order yet.
declare const kSorted: unique symbol;
export type SortedMany<T> = Many<T> & { readonly [kSorted]: true };
export type SortedOneMany<T> = T | SortedMany<T>;
export type SortedOpt<T> = undefined | SortedOneMany<T>;

export class Sorted<T> {
  public compare: Compare<T>;
  constructor(compare: Compare<T>) {
    this.compare = compare;
  }
  add<U extends NonNullable<T>>(data: SortedOpt<U>, item: U): SortedOneMany<U> {
    return data !== undefined
      ? Array.isArray(data)
        ? (addSorted(this.compare, data, item) as SortedMany<U>)
        : (joinRepeatable(this.compare, data, item) as SortedOneMany<U>)
      : item;
  }

  union<U extends NonNullable<T>>(
    a: SortedOpt<U>,
    b: SortedOpt<U>,
  ): SortedOpt<U> {
    if (a !== undefined) {
      if (Array.isArray(a)) {
        if (b !== undefined) {
          if (Array.isArray(b)) {
            return unionSortedRepeatable(this.compare, a, b) as SortedOpt<U>;
          } else {
            return addSorted(this.compare, a, b) as SortedOneMany<U>;
          }
        }

        return a;
      }

      if (b !== undefined) {
        if (Array.isArray(b)) {
          return addSorted(this.compare, b, a) as SortedMany<U>;
        }

        return joinRepeatable(this.compare, b, a) as SortedOneMany<U>;
      }

      return a;
    }

    return b;
  }

  // Dropping items keeps the order.
  filter<U extends NonNullable<T>>(
    data: SortedOpt<U>,
    cb: (item: U) => boolean,
  ): SortedOpt<U> {
    return filter(data, cb) as SortedOpt<U>;
  }

  find<U extends NonNullable<T>>(data: SortedOpt<U>, item: U): U | undefined {
    if (data !== undefined) {
      if (Array.isArray(data)) {
        return findSorted(this.compare, data, item);
      } else if (this.compare(data, item) === 0) {
        return data;
      }
    }
  }
  has<U extends NonNullable<T>>(data: SortedOpt<U>, item: U): boolean {
    return this.findIndex(data, item) !== -1;
  }
  findIndex<U extends NonNullable<T>>(data: SortedOpt<U>, item: U) {
    if (data !== undefined) {
      if (Array.isArray(data)) {
        return findIndexSorted(this.compare, data, item);
      } else if (this.compare(data, item) === 0) {
        return 0;
      }
    }

    return -1;
  }
  groupBy<U extends NonNullable<T>, K>(
    data: SortedOpt<U>,
    cb: (item: U) => K,
  ): Map<K, SortedOneMany<U>> {
    const group = new Map<K, SortedOneMany<U>>();
    if (data !== undefined) {
      if (Array.isArray(data)) {
        for (const item of data) {
          const key = cb(item);
          group.set(key, this.union(group.get(key), item) as SortedOneMany<U>);
        }
      } else {
        group.set(cb(data), data);
      }
    }
    return group;
  }
  // Whether any item is in both, walking each once.
  intersects<U extends NonNullable<T>>(a: SortedOpt<U>, b: SortedOpt<U>) {
    if (a === undefined || b === undefined) return false;
    if (!Array.isArray(a)) return this.findIndex(b, a) !== -1;
    if (!Array.isArray(b)) return this.findIndex(a, b) !== -1;
    for (let i = 0, j = 0; i < a.length && j < b.length;) {
      const delta = this.compare(a[i], b[j]);
      if (!delta) return true;
      if (delta < 0) i++;
      else j++;
    }
    return false;
  }
  // Items of `a` not in `b`, walking each once; `a` itself when none drop.
  difference<U extends NonNullable<T>>(
    a: SortedOpt<U>,
    b: SortedOpt<U>,
  ): SortedOpt<U> {
    if (a === undefined || b === undefined) return a;
    if (!Array.isArray(a)) return this.findIndex(b, a) === -1 ? a : undefined;
    if (!Array.isArray(b)) {
      const index = findIndexSorted(this.compare, a, b);
      if (index === -1) return a;
      if (a.length === 2) return a[1 - index];
      const len = a.length - 1;
      const result = new Array(len) as SortedMany<U>;
      for (let i = 0; i < index; i++) result[i] = a[i];
      for (let i = index; i < len; i++) result[i] = a[i + 1];
      return result;
    }
    let result: Opt<U>;
    for (let i = 0, j = 0; i < a.length; i++) {
      let delta = -1;
      while (j < b.length && (delta = this.compare(b[j], a[i])) < 0) j++;
      if (delta) result = push(result, a[i]);
    }
    return (size(result) === a.length ? a : result) as SortedOpt<U>;
  }
  isSuperset<U extends NonNullable<T>>(
    superset: SortedOpt<U>,
    subset: SortedOpt<U>,
  ) {
    if (subset === undefined) {
      return true;
    }

    if (!Array.isArray(subset)) {
      return this.findIndex(superset, subset) !== -1;
    }

    if (!Array.isArray(superset)) {
      return false;
    }

    const subLen = subset.length;
    const supLen = superset.length;
    if (subLen > supLen) {
      return false;
    }

    for (let i = subLen; i--;) {
      // The i smaller subset items each need a distinct slot below `found`.
      const found = findIndexSorted(this.compare, superset, subset[i]);
      if (found < i) return false;
    }

    return true;
  }
}

export function push<T>(data: Opt<T>, item: T): OneMany<T> {
  if (data !== undefined) {
    if (Array.isArray(data)) {
      data.push(item);
      return data;
    }

    return [data, item];
  }

  return item;
}

export function concat<T>(a: Opt<T>, b: Opt<T>): Opt<T> {
  if (a !== undefined) {
    if (b !== undefined) {
      if (Array.isArray(a)) {
        return a.concat(b) as Many<T>;
      } else if (Array.isArray(b)) {
        return [a, ...b];
      } else {
        return [a, b];
      }
    }
    return a;
  }
  return b;
}

export function size<T>(data: Opt<T>) {
  return data !== undefined ? (Array.isArray(data) ? data.length : 1) : 0;
}

export function filter<T>(data: Opt<T>, cb: (item: T) => boolean): Opt<T> {
  if (data !== undefined) {
    if (Array.isArray(data)) {
      const len = data.length;
      let result: Opt<T>;
      let i = 0;

      while (i < len) {
        let item = data[i++];

        if (cb(item)) {
          result = item;

          while (i < len) {
            item = data[i++];

            if (cb(item)) {
              result = [result, item];

              while (i < len) {
                item = data[i++];

                if (cb(item)) {
                  result.push(item);
                }
              }

              return result;
            }
          }

          return result;
        }
      }

      return result;
    }

    if (cb(data)) {
      return data;
    }
  }
}

export function forEach<T>(
  data: Opt<T>,
  cb: (item: T, index: number) => void,
): void {
  if (data !== undefined) {
    if (Array.isArray(data)) {
      let i = 0;
      for (const item of data) {
        cb(item, i++);
      }
    } else {
      cb(data, 0);
    }
  }
}

export function fromIter<T>(data: Iterable<T>) {
  let one: T | undefined;
  let many: Many<T> | undefined;
  // Items are never falsy, so `one`/`many` truthiness distinguishes unset from set.
  for (const item of data) {
    if (many) {
      many.push(item);
    } else if (one) {
      many = [one, item];
    } else {
      one = item;
    }
  }

  return many || one;
}

export function find<T>(
  data: Opt<T>,
  cb: (item: T, index: number) => boolean,
): Opt<T> {
  if (data !== undefined) {
    if (Array.isArray(data)) {
      return data.find(cb);
    }

    if (cb(data, 0)) {
      return data;
    }
  }
}

export function some<T>(
  data: Opt<T>,
  cb: (item: T, index: number) => boolean,
): boolean {
  return data !== undefined
    ? Array.isArray(data)
      ? data.some(cb)
      : !!cb(data, 0)
    : false;
}

export function every<T>(
  data: Opt<T>,
  cb: (item: T, index: number) => boolean,
): boolean {
  return data !== undefined
    ? Array.isArray(data)
      ? data.every(cb)
      : !!cb(data, 0)
    : true;
}

export function reduce<T, R>(
  data: Opt<T>,
  cb: (acc: R | undefined, item: T, index: number) => R | undefined,
): R | undefined;
export function reduce<T, R>(
  data: Opt<T>,
  cb: (acc: R, item: T, index: number) => R,
  initial: R,
): R;
export function reduce<T, R>(
  data: Opt<T>,
  cb: (acc: R | undefined, item: T, index: number) => R | undefined,
  initial?: R,
): R | undefined {
  return data !== undefined
    ? Array.isArray(data)
      ? data.reduce(cb, initial)
      : cb(initial, data, 0)
    : initial;
}

export function toArray<T, R>(
  data: Opt<T>,
  cb: (item: T, index: number) => R,
): R[] {
  return data !== undefined
    ? Array.isArray(data)
      ? data.map(cb)
      : [cb(data, 0)]
    : [];
}

export function toSet<T>(data: Opt<T>): Set<T> {
  return data !== undefined
    ? Array.isArray(data)
      ? new Set(data)
      : new Set<T>().add(data)
    : new Set();
}

export function mapToString<T>(
  data: Opt<T>,
  sep: string,
  cb: (item: T, index: number) => string,
): string {
  if (data !== undefined) {
    if (Array.isArray(data)) {
      let str = "";
      let curSep = "";
      for (let i = 0; i < data.length; i++) {
        str += curSep + cb(data[i], i);
        curSep = sep;
      }
      return str;
    }

    return cb(data, 0);
  }
  return "";
}

export function findSorted<T>(
  compare: Compare<T>,
  data: T[],
  item: T,
): T | undefined {
  let max = data.length;
  let pos = 0;

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const cur = data[mid];
    const compareResult = compare(cur, item);
    if (compareResult === 0) return cur;
    if (compareResult > 0) max = mid;
    else pos = mid + 1;
  }
}

export function findIndexSorted<T>(
  compare: Compare<T>,
  data: T[],
  item: T,
): number {
  let max = data.length;
  let pos = 0;

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const compareResult = compare(data[mid], item);
    if (compareResult === 0) return mid;
    if (compareResult > 0) max = mid;
    else pos = mid + 1;
  }

  return -1;
}

export function addSorted<T, U extends T[]>(
  compare: Compare<T>,
  data: U,
  item: T,
): U {
  const len = data.length;
  let max = len;
  let pos = 0;

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const compareResult = compare(data[mid], item);
    if (compareResult === 0) return data;
    if (compareResult > 0) max = mid;
    else pos = mid + 1;
  }

  const result = new Array(len + 1) as U;
  for (let i = 0; i < pos; i++) {
    result[i] = data[i];
  }

  let cur = item;
  while (pos < len) {
    const next = cur;
    cur = data[pos];
    result[pos++] = next;
  }

  result[len] = cur;

  return result;
}

function unionSortedRepeatable<T>(
  compare: Compare<T>,
  a: Many<T>,
  b: Many<T>,
): Many<T> {
  const aLen = a.length;
  const bLen = b.length;
  const result = [] as unknown as Many<T>;
  let aIndex = 0;
  let bIndex = 0;
  let same = true;

  while (aIndex < aLen && bIndex < bLen) {
    const aValue = a[aIndex];
    const bValue = b[bIndex];
    const delta = compare(aValue, bValue);
    if (delta === 0) {
      aIndex++;
      bIndex++;
      result.push(aValue);
    } else if (delta < 0) {
      same = false;
      aIndex++;
      result.push(aValue);
    } else {
      same = false;
      bIndex++;
      result.push(bValue);
    }
  }

  if (same && aLen === bLen) {
    return a;
  }

  while (aIndex < aLen) {
    result.push(a[aIndex++]);
  }

  while (bIndex < bLen) {
    result.push(b[bIndex++]);
  }

  return result;
}

function joinRepeatable<T>(compare: Compare<T>, a: T, b: T): OneMany<T> {
  const compareResult = compare(a, b);
  return compareResult === 0 ? a : compareResult < 0 ? [a, b] : [b, a];
}

// Adds to an unordered set: the same value when already present, so a
// caller can tell by identity that nothing was added.
export function at<T>(data: Opt<T>, index: number): T | undefined {
  return Array.isArray(data) ? data[index] : index ? undefined : data;
}

export function first<T>(data: OneMany<T>): T {
  return Array.isArray(data) ? data[0] : data;
}

// Everything after the first item, in the same shape.
export function rest<T>(data: OneMany<T>): Opt<T> {
  return Array.isArray(data)
    ? data.length === 2
      ? data[1]
      : (data.slice(1) as Opt<T>)
    : undefined;
}
