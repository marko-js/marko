type Falsy = undefined | null | false | 0 | "";
export function forIn<V extends {}>(
  obj: Falsy | V,
  cb: <K extends keyof V>(key: K, value: V[K]) => void,
) {
  for (const key in obj as V) {
    cb(key, (obj as V)[key]);
  }
}

export function forOf<T, V extends Iterable<T>>(
  list: Falsy | V,
  cb: (item: T, index: number) => void,
) {
  if (list) {
    let i = 0;
    for (const item of list) {
      cb(item, i++);
    }
  }
}

export function forTo(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
) {
  const start = from || 0;
  const delta = step || 1;
  for (let steps = (to - start) / delta, i = 0; i <= steps; i++) {
    cb(start + i * delta);
  }
}
