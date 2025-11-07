export type OneMany<T> = T[] | T;
export type Opt<T> = OneMany<T> | undefined;

export function toArray<T>(opt: Opt<T>): T[] {
  return opt ? (Array.isArray(opt) ? opt : [opt]) : [];
}

export function push<T>(opt: Opt<T>, item: T): OneMany<T> {
  return opt
    ? Array.isArray(opt)
      ? (opt.push(item), opt)
      : [opt, item]
    : item;
}
