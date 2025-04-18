export type Many<T> = [T, T, ...T[]];
export type OneMany<T> = T | Many<T>;
export type Opt<T> = undefined | OneMany<T>;
export type Compare<T> = (a: T, b: T) => number;
export class Sorted<T> {
  constructor(public compare: Compare<T>) {}
  add<U extends NonNullable<T>>(data: Opt<U>, item: U): OneMany<U> {
    return data
      ? Array.isArray(data)
        ? (addSorted(this.compare, data, item) as Many<U>)
        : joinRepeatable(this.compare, data, item)
      : item;
  }

  union<U extends NonNullable<T>>(a: Opt<U>, b: Opt<U>): Opt<U> {
    if (a) {
      if (Array.isArray(a)) {
        if (b) {
          if (Array.isArray(b)) {
            return unionSortedRepeatable(this.compare, a, b);
          } else {
            return addSorted(this.compare, a, b) as OneMany<U>;
          }
        }

        return a;
      }

      if (b) {
        if (Array.isArray(b)) {
          return addSorted(this.compare, b, a) as Many<U>;
        }

        return joinRepeatable(this.compare, b, a);
      }

      return a;
    }

    return b;
  }
  find<U extends NonNullable<T>>(data: Opt<U>, item: U): U | undefined {
    if (data) {
      if (Array.isArray(data)) {
        return findSorted(this.compare, data, item);
      } else if (this.compare(data, item) === 0) {
        return data;
      }
    }
  }
  findIndex<U extends NonNullable<T>>(data: Opt<U>, item: U) {
    if (data) {
      if (Array.isArray(data)) {
        return findIndexSorted(this.compare, data, item);
      } else if (this.compare(data, item) === 0) {
        return 0;
      }
    }

    return -1;
  }
  isSuperset<U extends NonNullable<T>>(superset: Opt<U>, subset: Opt<U>) {
    if (!subset) {
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

    for (let i = subLen; i--; ) {
      const supIndex = this.findIndex(superset, subset[i]);
      if (supIndex === -1 || supLen - supIndex <= i) return false;
    }

    return true;
  }
}

export function push<T>(data: Opt<T>, item: T): Opt<T> {
  if (data) {
    if (Array.isArray(data)) {
      data.push(item);
      return data;
    }

    return [data, item];
  }

  return item;
}

export function concat<T>(a: Opt<T>, b: Opt<T>): Opt<T> {
  if (a) {
    if (b) {
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
  return data ? (Array.isArray(data) ? data.length : 1) : 0;
}

export function filter<T>(data: Opt<T>, cb: (item: T) => boolean): Opt<T> {
  if (data) {
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

  return undefined;
}

export function forEach<T>(
  data: Opt<T>,
  cb: (item: T, index: number) => void,
): void {
  if (data) {
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
  if (data) {
    if (Array.isArray(data)) {
      return data.find(cb);
    }

    if (cb(data, 0)) {
      return data;
    }
  }
}

export function toArray<T, R>(
  data: Opt<T>,
  cb: (item: T, index: number) => R,
): R[] {
  return data ? (Array.isArray(data) ? data.map(cb) : [cb(data, 0)]) : [];
}

export function filterMap<T, R>(
  data: Opt<T>,
  cb: (item: T) => undefined | R,
): Opt<R> {
  if (data) {
    if (Array.isArray(data)) {
      const len = data.length;
      let result: Opt<R>;
      let i = 0;

      while (i < len) {
        let item = cb(data[i++]);

        if (item) {
          result = item;

          while (i < len) {
            item = cb(data[i++]);

            if (item) {
              result = [result, item];

              while (i < len) {
                item = cb(data[i++]);

                if (item) {
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
    } else {
      return cb(data);
    }
  }
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
  let aIndex = 0;
  let bIndex = 0;

  const result = [] as unknown as Many<T>;

  while (aIndex < aLen && bIndex < bLen) {
    const aValue = a[aIndex];
    const bValue = b[bIndex];
    const delta = compare(aValue, bValue);
    if (delta === 0) {
      aIndex++;
      bIndex++;
      result.push(aValue);
    } else if (delta < 0) {
      aIndex++;
      result.push(aValue);
    } else {
      bIndex++;
      result.push(bValue);
    }
  }

  if (aLen === bLen && aIndex === aLen) {
    // If the arrays are the same length and we consumed all of `a` then the data
    // is the same and we return `a` the original array.
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
