import { type Opt, toIter } from "./optional";

// A memo whose computation may re-ask itself through a cycle: a re-ask
// answers `cycleAnswer`, and a frame that consumed one does not cache.
export function createCyclicMemo<K extends object, R>(
  compute: (key: K) => R,
  cycleAnswer: R,
): (key: K) => R {
  const cache = new WeakMap<K, R>();
  const computing = new Map<K, number>();
  let provisionalAt = Infinity;
  return (key) => {
    if (cache.has(key)) return cache.get(key)!;
    const at = computing.get(key);
    if (at !== undefined) {
      if (at < provisionalAt) provisionalAt = at;
      return cycleAnswer;
    }
    const frame = computing.size;
    computing.set(key, frame);
    const outerProvisionalAt = provisionalAt;
    provisionalAt = Infinity;
    // The walk state outlives a compile (a diagnostic may throw
    // mid-walk), so every exit restores it.
    try {
      const result = compute(key);
      if (provisionalAt >= frame) cache.set(key, result);
      return result;
    } finally {
      computing.delete(key);
      if (provisionalAt >= frame || outerProvisionalAt < provisionalAt) {
        provisionalAt = outerProvisionalAt;
      }
    }
  };
}

// The same memo keyed by an object and a property path (`true` for every
// property): each path interns one key, so a value's answer per path
// shares one cycle protocol.
export type MemoPath = Opt<string> | true;
interface PathKeys<K> {
  value?: [K, MemoPath];
  all?: [K, MemoPath];
  props?: Map<string, PathKeys<K>>;
}
export function createCyclicPathMemo<K extends object, R>(
  compute: (key: K, path: MemoPath) => R,
  cycleAnswer: R,
): (key: K, path: MemoPath) => R {
  const keys = new WeakMap<K, PathKeys<K>>();
  const memo = createCyclicMemo(
    ([key, path]: [K, MemoPath]) => compute(key, path),
    cycleAnswer,
  );
  return (key, path) => {
    let node: PathKeys<K> | undefined = keys.get(key);
    if (!node) keys.set(key, (node = {}));
    if (path === true) return memo((node.all ??= [key, path]));
    for (const property of toIter(path)) {
      let next: PathKeys<K> | undefined = node.props?.get(property);
      if (!next) (node.props ??= new Map()).set(property, (next = {}));
      node = next;
    }
    return memo((node.value ??= [key, path]));
  };
}
