export { forIn, forOf, forTo, forUntil } from "../common/for";

import type { Falsy } from "../common/types";

export function forOfBy(
  by: Falsy | string | ((item: unknown, index: number) => unknown),
  item: unknown,
  index: number,
) {
  if (by) {
    if (typeof by === "string") {
      return (item as Record<string, unknown>)[by];
    }

    return by(item, index);
  }

  return index;
}

export function forInBy(
  by: Falsy | ((key: string, value: unknown) => unknown),
  name: string,
  value: unknown,
) {
  if (by) {
    return by(name, value);
  }

  return name;
}

export function forStepBy(
  by: Falsy | ((index: number) => unknown),
  index: number,
) {
  if (by) {
    return by(index);
  }

  return index;
}
