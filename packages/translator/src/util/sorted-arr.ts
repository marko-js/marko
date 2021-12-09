export function insert<T extends unknown[]>(
  arr: T,
  val: T[number],
  compare: (a: T[number], b: T[number]) => number
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
  arr: T,
  val: T[number],
  compare: (a: T[number], b: T[number]) => number
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
