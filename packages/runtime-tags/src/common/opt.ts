export type OneMany<T> = T[] | T;
export type Opt<T> = OneMany<T> | undefined | null;

export function toArray<T>(oneMany: OneMany<T>): [T, ...T[]];
export function toArray<T>(opt: Opt<T>): T[];
export function toArray<T>(opt: Opt<T>) {
  return opt ? (Array.isArray(opt) ? opt : [opt]) : [];
}

export function forEach<T>(opt: Opt<T>, cb: (item: T) => void) {
  if (opt) {
    if (Array.isArray(opt)) {
      for (const item of opt) cb(item);
    } else {
      cb(opt);
    }
  }
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

export function concat<T>(opt: Opt<T>, other: Opt<T>): Opt<T> {
  if (!opt) return other;
  if (!other) return opt;
  if (Array.isArray(opt)) {
    if (Array.isArray(other)) {
      // Avoids spreading into push, which is capped by engine argument
      // limits for very large lists.
      for (const item of other) opt.push(item);
    } else {
      opt.push(other);
    }
    return opt;
  }
  return Array.isArray(other) ? [opt, ...other] : [opt, other];
}
