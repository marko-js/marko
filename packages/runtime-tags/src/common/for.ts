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
  for (let steps = countSteps(to, start, delta), i = 0; i <= steps; i++) {
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
  for (let steps = countSteps(until, start, delta), i = 0; i < steps; i++) {
    cb(start + i * delta);
  }
}

// Snap a near-integer step count back to the integer to undo IEEE-754 error
// (e.g. (0.3 - 0) / 0.1 === 2.999…), which would otherwise drop an inclusive
// endpoint or include an exclusive one.
function countSteps(to: number, start: number, delta: number) {
  const steps = (to - start) / delta;
  const rounded = Math.round(steps);
  return Math.abs(steps - rounded) < 1e-9 ? rounded : steps;
}
