export type Many<T> = [T, T, ...T[]];
export type OneMany<T> = T | Many<T>;
export type Opt<T> = undefined | OneMany<T>;
export type Compare<T> = (a: T, b: T) => number;
export class Sorted<T> {
  constructor(public compare: Compare<T>) {}
  add(data: Opt<T>, item: T): OneMany<T> {
    return data
      ? Array.isArray(data)
        ? (addSorted(this.compare, data, item) as Many<T>)
        : joinRepeatable(this.compare, data, item)
      : item;
  }

  union(a: Opt<T>, b: Opt<T>): Opt<T> {
    if (a) {
      if (Array.isArray(a)) {
        if (b) {
          if (Array.isArray(b)) {
            return unionSortedRepeatable(this.compare, a, b);
          } else {
            return addSorted(this.compare, a, b) as OneMany<T>;
          }
        }

        return a;
      }

      if (b) {
        if (Array.isArray(b)) {
          return addSorted(this.compare, [...b], a) as Many<T>;
        }

        return joinRepeatable(this.compare, b, a);
      }

      return a;
    }

    return b;
  }
  find(data: Opt<T>, item: T): T | undefined {
    if (data) {
      if (Array.isArray(data)) {
        return findSorted(this.compare, data, item);
      } else if (this.compare(data, item) === 0) {
        return data;
      }
    }
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

export function forEach<T>(data: Opt<T>, cb: (item: T) => void): void {
  if (data) {
    if (Array.isArray(data)) {
      for (const item of data) {
        cb(item);
      }
    } else {
      cb(data);
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

export function addSorted<T>(compare: Compare<T>, data: T[], item: T): T[] {
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

  const result = new Array(len + 1) as Many<T>;
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

export function pop<T>(data: Opt<T>): [Opt<T>, T] {
  if (Array.isArray(data)) {
    const len = data.length;
    if (len === 2) {
      return [data[0], data[1]];
    }
    return [data.slice(0, len - 1) as Many<T>, data[len - 1]];
  }
  return [undefined, data as T];
}
