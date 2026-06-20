export { forIn, forOf, forTo, forUntil } from "../common/for";

import type { Falsy } from "../common/types";

export function forOfBy(
  by: Falsy | string | ((item: unknown, index: number) => unknown),
  item: unknown,
  index: number,
) {
  if (by) {
    const key =
      typeof by === "string"
        ? (item as Record<string, unknown>)[by]
        : by(item, index);
    if (MARKO_DEBUG && typeof key !== "string" && typeof key !== "number") {
      console.error(
        `A <for> tag's \`by\` attribute must return a string or number, but it returned:`,
        key,
      );
    }
    return key;
  }

  return index;
}

export function forInBy(
  by: Falsy | ((key: string, value: unknown) => unknown),
  name: string,
  value: unknown,
) {
  if (by) {
    const key = by(name, value);
    if (MARKO_DEBUG && typeof key !== "string" && typeof key !== "number") {
      console.error(
        `A <for> tag's \`by\` attribute must return a string or number, but it returned:`,
        key,
      );
    }
    return key;
  }

  return name;
}

export function forStepBy(
  by: Falsy | ((index: number) => unknown),
  index: number,
) {
  if (by) {
    const key = by(index);
    if (MARKO_DEBUG && typeof key !== "string" && typeof key !== "number") {
      console.error(
        `A <for> tag's \`by\` attribute must return a string or number, but it returned:`,
        key,
      );
    }
    return key;
  }

  return index;
}
