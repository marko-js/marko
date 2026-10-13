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
            return unionSorted(this.compare, a, b) as SortedOpt<U>;
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

  // Dropping items keeps the order; `data` itself when none drop, so `!==`
  // tells whether any did.
  filter<U extends NonNullable<T>>(
    data: SortedOpt<U>,
    cb: (item: U) => boolean,
  ): SortedOpt<U> {
    if (!Array.isArray(data)) {
      return data !== undefined && cb(data) ? data : undefined;
    }
    for (let i = 0; i < data.length; i++) {
      if (!cb(data[i])) {
        const kept: U[] = [];
        for (let j = 0; j < i; j++) kept.push(data[j]);
        while (++i < data.length) {
          if (cb(data[i])) kept.push(data[i]);
        }
        return (kept.length > 1 ? kept : kept[0]) as SortedOpt<U>;
      }
    }
    return data;
  }

  // The items whose key is before `bound`, found by binary search: `key` must
  // not decrease along the order, by `compareKeys`. `data` itself when all are.
  leadingRun<U extends NonNullable<T>, K>(
    data: SortedOpt<U>,
    key: (item: U) => K,
    compareKeys: Compare<K>,
    bound: K,
  ): SortedOpt<U> {
    return Array.isArray(data)
      ? slice(data, 0, partitionPoint(data, key, compareKeys, bound))
      : data !== undefined && compareKeys(key(data), bound) < 0
        ? data
        : undefined;
  }

  // The items whose key is `bound`, found by binary search to their start and
  // galloping to their end; `data` itself when all are.
  range<U extends NonNullable<T>, K>(
    data: SortedOpt<U>,
    key: (item: U) => K,
    compareKeys: Compare<K>,
    bound: K,
  ): SortedOpt<U> {
    if (!Array.isArray(data)) {
      return data !== undefined && compareKeys(key(data), bound) === 0
        ? data
        : undefined;
    }
    const start = partitionPoint(data, key, compareKeys, bound);
    return slice(data, start, gallop(data, start, key, compareKeys, bound));
  }

  // Calls `fn` with each run of items sharing a key, in order, galloping to its
  // end: `key` must not decrease along the order. One run is `data` itself.
  forEachRun<U extends NonNullable<T>, K>(
    data: SortedOpt<U>,
    key: (item: U) => K,
    compareKeys: Compare<K>,
    fn: (key: K, run: SortedOneMany<U>) => void,
  ) {
    if (!Array.isArray(data)) {
      if (data !== undefined) fn(key(data), data);
      return;
    }
    for (let start = 0, end; start < data.length; start = end) {
      const runKey = key(data[start]);
      end = gallop(data, start + 1, key, compareKeys, runKey);
      fn(runKey, slice(data, start, end)!);
    }
  }

  // `forEachRun` threading an accumulator: `fn` returns the next one.
  reduceRuns<U extends NonNullable<T>, K, R>(
    data: SortedOpt<U>,
    key: (item: U) => K,
    compareKeys: Compare<K>,
    fn: (acc: R, key: K, run: SortedOneMany<U>) => R,
    initial: R,
  ): R {
    if (!Array.isArray(data)) {
      return data !== undefined ? fn(initial, key(data), data) : initial;
    }
    let acc = initial;
    for (let start = 0, end; start < data.length; start = end) {
      const runKey = key(data[start]);
      end = gallop(data, start + 1, key, compareKeys, runKey);
      acc = fn(acc, runKey, slice(data, start, end)!);
    }
    return acc;
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
  // Whether any item is in both, by a merge walk, or by walking the shorter and
  // searching the longer when it is much longer.
  intersects<U extends NonNullable<T>>(a: SortedOpt<U>, b: SortedOpt<U>) {
    if (a === undefined || b === undefined) return false;
    if (!Array.isArray(a)) return this.findIndex(b, a) !== -1;
    if (!Array.isArray(b)) return this.findIndex(a, b) !== -1;
    const long = a.length < b.length ? b : a;
    const short = long === a ? b : a;
    if (isMuchLonger(long, short)) {
      for (let i = 0, j = 0; i < short.length && j < long.length; i++) {
        const found = findIndexSortedFrom(
          this.compare,
          long,
          j,
          short[i],
          short.length - i,
        );
        if (found >= 0) return true;
        j = ~found;
      }
    } else {
      for (let i = 0, j = 0; i < a.length && j < b.length;) {
        const delta = this.compare(a[i], b[j]);
        if (!delta) return true;
        if (delta < 0) i++;
        else j++;
      }
    }
    return false;
  }
  // Items of `a` not in `b`, walking as `intersects` does; `a` itself when none
  // drop.
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
    return differenceSorted(this.compare, a, b) as SortedOpt<U>;
  }
  // Whether every item of `subset` is in `superset`, walking as `intersects` does.
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

    if (!Array.isArray(superset) || subset.length > superset.length) {
      return false;
    }

    if (!isMuchLonger(superset, subset)) {
      let i = 0;
      for (let j = 0; i < subset.length && j < superset.length; j++) {
        const delta = this.compare(superset[j], subset[i]);
        if (delta > 0) return false;
        if (delta === 0) i++;
      }
      return i === subset.length;
    }

    for (let i = 0, j = 0; i < subset.length; i++) {
      const found = findIndexSortedFrom(
        this.compare,
        superset,
        j,
        subset[i],
        subset.length - i,
      );
      if (found < 0) return false;
      j = found + 1;
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

// The first index whose item's key is not before `bound`, by binary search.
function partitionPoint<T, K>(
  data: T[],
  key: (item: T) => K,
  compareKeys: Compare<K>,
  bound: K,
) {
  let max = data.length;
  let pos = 0;

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    if (compareKeys(key(data[mid]), bound) < 0) pos = mid + 1;
    else max = mid;
  }

  return pos;
}

// The first index from `start` whose item's key is past `bound`, probing 1, 2,
// 4, … items on, so a point `k` items on costs about 2·log2(k) key reads.
function gallop<T, K>(
  data: T[],
  start: number,
  key: (item: T) => K,
  compareKeys: Compare<K>,
  bound: K,
) {
  let pos = start;
  let max = start;
  for (
    let step = 1;
    max < data.length && compareKeys(key(data[max]), bound) <= 0;
    step *= 2
  ) {
    pos = max + 1;
    max += step;
  }
  if (max > data.length) max = data.length;

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    if (compareKeys(key(data[mid]), bound) <= 0) pos = mid + 1;
    else max = mid;
  }

  return pos;
}

// The index from `start` of the item equal to `item`, or `~` the index it would
// take, galloping as `gallop` does but stopping at an equal item.
function findIndexSortedFrom<T>(
  compare: Compare<T>,
  data: T[],
  start: number,
  item: T,
  left: number,
) {
  let pos = start;
  let max = start;
  // With `left` items to find, the next is about `rest / left` on: galloping costs
  // 2·log2 of that and binary searching the rest log2(rest), so few far ones skip it.
  if (left * left < data.length - start) {
    max = data.length;
  } else {
    for (let step = 1; max < data.length; step *= 2) {
      const compareResult = compare(data[max], item);
      if (compareResult === 0) return max;
      if (compareResult > 0) break;
      pos = max + 1;
      max += step;
    }
    if (max > data.length) max = data.length;
  }

  while (pos < max) {
    const mid = (pos + max) >>> 1;
    const compareResult = compare(data[mid], item);
    if (compareResult === 0) return mid;
    if (compareResult > 0) max = mid;
    else pos = mid + 1;
  }

  return ~pos;
}

// Items `start` up to `end` in the list's shape: the list itself when whole.
function slice<T>(
  data: SortedMany<T>,
  start: number,
  end: number,
): SortedOpt<T> {
  return end - start > 1
    ? end - start === data.length
      ? data
      : (data.slice(start, end) as SortedMany<T>)
    : end > start
      ? data[start]
      : undefined;
}

// Walks `a` stepping through `b`, or walks the shorter and searches the longer
// when it is much longer; `a` itself when none drop.
function differenceSorted<T>(compare: Compare<T>, a: Many<T>, b: Many<T>) {
  if (isMuchLonger(a, b)) {
    let kept: T[] | undefined;
    let from = 0;
    for (let j = 0, i = 0; j < b.length && i < a.length; j++) {
      const found = findIndexSortedFrom(compare, a, i, b[j], b.length - j);
      if (found >= 0) {
        if (kept) {
          while (from < found) kept.push(a[from++]);
        } else {
          kept = a.slice(0, found);
        }
        from = i = found + 1;
      } else {
        i = ~found;
      }
    }
    if (!kept) return a;
    while (from < a.length) kept.push(a[from++]);
    return kept;
  }
  let result: Opt<T>;
  if (isMuchLonger(b, a)) {
    for (let i = 0, j = 0; i < a.length; i++) {
      const found = findIndexSortedFrom(compare, b, j, a[i], a.length - i);
      if (found < 0) result = push(result, a[i]);
      j = found < 0 ? ~found : found + 1;
    }
  } else {
    for (let i = 0, j = 0; i < a.length; i++) {
      let delta = -1;
      while (j < b.length && (delta = compare(b[j], a[i])) < 0) j++;
      if (delta) result = push(result, a[i]);
    }
  }
  return size(result) === a.length ? a : result;
}

// Walks the shorter and searches the longer when it is much longer, copying the
// longer's items between; `a`'s item wins a tie.
function unionSorted<T>(compare: Compare<T>, a: Many<T>, b: Many<T>): Many<T> {
  const long = a.length < b.length ? b : a;
  const short = long === a ? b : a;
  if (!isMuchLonger(long, short)) return unionSortedRepeatable(compare, a, b);
  const result = [] as unknown as Many<T>;
  let from = 0;

  for (let i = 0; i < short.length; i++) {
    const item = short[i];
    const found = findIndexSortedFrom(
      compare,
      long,
      from,
      item,
      short.length - i,
    );
    const end = found < 0 ? ~found : found;
    while (from < end) result.push(long[from++]);
    if (found >= 0) {
      result.push(long === a ? long[from] : item);
      from++;
    } else {
      result.push(item);
    }
  }

  while (from < long.length) result.push(long[from++]);

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

// Searching the longer list beats a merge walk once it holds 4 times the
// shorter's items, as measured on the translator's lists.
function isMuchLonger(long: unknown[], short: unknown[]) {
  return long.length >= 4 * short.length;
}

function joinRepeatable<T>(compare: Compare<T>, a: T, b: T): OneMany<T> {
  const compareResult = compare(a, b);
  return compareResult === 0 ? a : compareResult < 0 ? [a, b] : [b, a];
}

export function at<T>(data: Opt<T>, index: number): T | undefined {
  return Array.isArray(data) ? data[index] : index ? undefined : data;
}

export function first<T>(data: OneMany<T>): T {
  return Array.isArray(data) ? data[0] : data;
}

export function last<T>(data: OneMany<T>): T {
  return Array.isArray(data) ? data[data.length - 1] : data;
}

// Everything after the first item, in the same shape.
export function rest<T>(data: OneMany<T>): Opt<T> {
  return Array.isArray(data)
    ? data.length === 2
      ? data[1]
      : (data.slice(1) as Opt<T>)
    : undefined;
}
