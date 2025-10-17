import { toForKey } from "../common/for";

export { forIn, forOf, forTo, forUntil } from "../common/for";

export function forOfBy(by: unknown, item: any, index: number) {
  if (by) {
    return toForKey(
      typeof by === "string" ? item[by] : (by as any)(item, index),
    );
  }

  return index;
}

export function forInBy(by: unknown, name: string, value: unknown) {
  if (by) {
    return toForKey((by as any)(name, value));
  }

  return name;
}

export function forStepBy(by: unknown, index: number) {
  if (by) {
    return toForKey((by as any)(index));
  }

  return index;
}
