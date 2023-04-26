export type Repeatable<T> = undefined | T | T[];
export type Compare<T> = (a: T, b: T) => number;
export class SortedRepeatable<T> {
  constructor(public compare: Compare<T>) {}
  add(data: undefined, item: T): T;
  add(data: T | T[], item: T): T[];
  add(data: Repeatable<T>, item: T): T | T[] {
    return data
      ? Array.isArray(data)
        ? insertSorted(this.compare, data, item)
        : joinItems(this.compare, data, item)
      : item;
  }
  addAll(data: Repeatable<T>, items: Repeatable<T>): Repeatable<T> {
    if (data) {
      if (Array.isArray(data)) {
        if (items) {
          if (Array.isArray(items)) {
            for (const item of items) {
              insertSorted(this.compare, data, item);
            }
          } else {
            insertSorted(this.compare, data, items);
          }
        }

        return data;
      }

      if (items) {
        if (Array.isArray(items)) {
          return insertSorted(this.compare, [...items], data);
        }

        return joinItems(this.compare, items, data);
      }

      return data;
    }

    if (Array.isArray(items)) {
      return [...items];
    }

    return items;
  }
  find(data: Repeatable<T>, item: T) {
    if (data) {
      if (Array.isArray(data)) {
        let max = data.length;
        let pos = 0;

        while (pos < max) {
          const mid = (pos + max) >>> 1;
          const cur = data[mid];
          const compareResult = this.compare(cur, item);
          if (compareResult === 0) return cur;
          if (compareResult > 0) max = mid;
          else pos = mid + 1;
        }
      } else {
        return this.compare(data, item) === 0 ? data : undefined;
      }
    }
  }
  clone<Item extends Repeatable<T>>(item: Item): Item {
    return (Array.isArray(item) ? [...item] : item) as Item;
  }
  size(data: Repeatable<T>) {
    return data ? (Array.isArray(data) ? data.length : 1) : 0;
  }
  toArray<V = T>(data: Repeatable<T>, map: (item: T) => V): V[] {
    if (data) {
      if (Array.isArray(data)) {
        return data.map(map);
      }

      return [map(data)];
    }

    return [];
  }
}

function joinItems<T>(compare: Compare<T>, a: T, b: T): T | T[] {
  const compareResult = compare(a, b);
  return compareResult === 0 ? a : compareResult < 0 ? [a, b] : [b, a];
}

function insertSorted<T>(compare: Compare<T>, data: T[], item: T) {
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

  let cur = item;
  while (pos < len) {
    const next = cur;
    cur = data[pos];
    data[pos++] = next;
  }

  data[len] = cur;

  return data;
}
