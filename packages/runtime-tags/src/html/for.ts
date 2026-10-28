export { forIn, forOf, forTo, forUntil } from "../common/for";

import type { Falsy } from "../common/types";

export function forOfBy(
  by: Falsy | string | ((item: unknown, index: number) => string | number),
  item: unknown,
  index: number,
) {
  return by
    ? typeof by === "string"
      ? (item as Record<string, string | number>)[by]
      : by(item, index)
    : index;
}

export function forInBy(
  by: Falsy | ((key: string, value: unknown) => string | number),
  name: string,
  value: unknown,
) {
  return by ? by(name, value) : name;
}

export function forStepBy(
  by: Falsy | ((index: number) => string | number),
  index: number,
) {
  return by ? by(index) : index;
}
