export { forIn, forOf, forTo, forUntil } from "../common/for";

export function forOfBy(by: unknown, item: any, index: unknown) {
  if (by) {
    if (typeof by === "string") {
      return item[by];
    }

    return (by as any)(item, index);
  }

  return index;
}

export function forInBy(by: unknown, name: string, value: unknown) {
  if (by) {
    return (by as any)(name, value);
  }

  return name;
}

export function forStepBy(by: unknown, index: number) {
  if (by) {
    return (by as any)(index);
  }

  return index;
}
