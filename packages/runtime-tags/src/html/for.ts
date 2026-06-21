export { forIn, forOf, forTo, forUntil } from "../common/for";

import type { Falsy } from "../common/types";

export function forOfBy(
  by: Falsy | string | ((item: unknown, index: number) => unknown),
  item: unknown,
  index: number,
) {
  return by
    ? typeof by === "string"
      ? (item as Record<string, unknown>)[by]
      : by(item, index)
    : index;
}

export function forInBy(
  by: Falsy | ((key: string, value: unknown) => unknown),
  name: string,
  value: unknown,
) {
  return by ? by(name, value) : name;
}

export function forStepBy(
  by: Falsy | ((index: number) => unknown),
  index: number,
) {
  return by ? by(index) : index;
}
