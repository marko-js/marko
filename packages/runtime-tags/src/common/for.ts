import type { Falsy } from "./types";

export function forIn(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
) {
  for (const key in obj as any) {
    cb(key, (obj as any)[key]);
  }
}

export function forOf(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
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

export function forUntil(
  until: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
) {
  const start = from || 0;
  const delta = step || 1;
  for (let steps = (until - start) / delta, i = 0; i < steps; i++) {
    cb(start + i * delta);
  }
}
