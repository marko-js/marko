import { type Opt, reduce } from "./optional";
import { createAnalysisState } from "./state";

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

// The memo per analysis, whose answers every output reads; `reset` starts
// them afresh.
export function createAnalysisMemo<K extends object, R>(
  compute: (key: K) => R,
  cycleAnswer: R,
) {
  const create = () => createCyclicMemo(compute, cycleAnswer);
  const [getMemo, setMemo] = createAnalysisState(create);
  return [(key: K) => getMemo()(key), () => setMemo(create())] as const;
}

// The same memo keyed by an object and a property path (`true` for every
// property): each path interns one key, so a value's answer per path
// shares one cycle protocol.
type MemoPath = Opt<string> | true;
interface PathKeys<K> {
  value?: [K, MemoPath];
  all?: [K, MemoPath];
  props?: Map<string, PathKeys<K>>;
}
export function createAnalysisPathMemo<K extends object, R>(
  compute: (key: K, path: MemoPath) => R,
  cycleAnswer: R,
) {
  const keys = new WeakMap<K, PathKeys<K>>();
  const [memo, reset] = createAnalysisMemo(
    ([key, path]: [K, MemoPath]) => compute(key, path),
    cycleAnswer,
  );
  return [
    (key: K, path: MemoPath) => {
      let pathKeys: PathKeys<K> | undefined = keys.get(key);
      if (!pathKeys) keys.set(key, (pathKeys = {}));
      if (path === true) return memo((pathKeys.all ??= [key, path]));
      return memo(
        (reduce(path, ensurePropKeys<K>, pathKeys).value ??= [key, path]),
      );
    },
    reset,
  ] as const;
}

// The keys under `property`, made on first use.
function ensurePropKeys<K>(pathKeys: PathKeys<K>, property: string) {
  let next = pathKeys.props?.get(property);
  if (!next) (pathKeys.props ??= new Map()).set(property, (next = {}));
  return next;
}
