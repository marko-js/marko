export type OneMany<T> = T[] | T;
export type Opt<T> = OneMany<T> | undefined;

export function toArray<T>(oneMany: OneMany<T>): [T, ...T[]];
export function toArray<T>(opt: Opt<T>): T[];
export function toArray<T>(opt: Opt<T>) {
  return opt ? (Array.isArray(opt) ? opt : [opt]) : [];
}

export function push<T>(opt: Opt<T>, item: T): OneMany<T>;
export function push<T>(oneMany: OneMany<T>, item: T): T[];
export function push<T>(opt: Opt<T>, item: T): OneMany<T> {
  return opt
    ? Array.isArray(opt)
      ? (opt.push(item), opt)
      : [opt, item]
    : item;
}
