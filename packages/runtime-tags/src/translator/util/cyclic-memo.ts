import { type Opt, reduce } from "./optional";
import { createAnalysisState } from "./state";

// Every cyclic memo's running computations, outermost first, numbered as they start:
// a cycle may close through another memo, whose computations are then as provisional.
let computations = 0;
const running: number[] = [];
// The outermost and innermost depth in `running` of a computation whose cycle answer
// the current one took.
let provisionalAt = Infinity;
let provisionalTo = -1;

interface ProvisionalAnswer<R> {
  result: R;
  at: number;
  to: number;
  computation: number;
}

// A memo whose computation may re-ask itself through a cycle: a re-ask
// answers `cycleAnswer`, and a computation that consumed one does not cache.
export function createCyclicMemo<K extends object, R>(
  compute: (key: K) => R,
  cycleAnswer: R,
): (key: K) => R {
  const cache = new WeakMap<K, R>();
  const computing = new Map<K, number>();
  // Asked again while the computations it took cycle answers from run, a key's walk
  // meets the same ones, unless it took one from a computation of its own.
  const provisional = new WeakMap<K, ProvisionalAnswer<R>>();
  return (key) => {
    if (cache.has(key)) return cache.get(key)!;
    const at = computing.get(key);
    if (at !== undefined) {
      takeCycleAnswers(at, at);
      return cycleAnswer;
    }
    const answer = provisional.get(key);
    if (answer && running[answer.to] === answer.computation) {
      takeCycleAnswers(answer.at, answer.to);
      return answer.result;
    }
    const depth = running.push(computations++) - 1;
    computing.set(key, depth);
    const outerProvisionalAt = provisionalAt;
    const outerProvisionalTo = provisionalTo;
    provisionalAt = Infinity;
    provisionalTo = -1;
    // The walk state outlives a compile (a diagnostic may throw
    // mid-walk), so every exit restores it.
    try {
      const result = compute(key);
      if (provisionalAt >= depth) {
        cache.set(key, result);
      } else if (provisionalTo < depth) {
        provisional.set(key, {
          result,
          at: provisionalAt,
          to: provisionalTo,
          computation: running[provisionalTo],
        });
      }
      return result;
    } finally {
      computing.delete(key);
      running.pop();
      if (provisionalAt >= depth) {
        provisionalAt = outerProvisionalAt;
        provisionalTo = outerProvisionalTo;
      } else {
        takeCycleAnswers(outerProvisionalAt, outerProvisionalTo);
      }
    }
  };
}

function takeCycleAnswers(at: number, to: number) {
  if (at < provisionalAt) provisionalAt = at;
  if (to > provisionalTo) provisionalTo = to;
}

// The memo per analysis, whose answers every output reads; `reset` starts
// them afresh.
export function createAnalysisMemo<K extends object, R>(
  compute: (key: K) => R,
  cycleAnswer: R,
) {
  const create = () => createCyclicMemo(compute, cycleAnswer);
  // A reset drops the memo; the next ask makes one, so a pass that never asks makes none.
  const [getMemo, setMemo] = createAnalysisState<((key: K) => R) | null>(
    create,
  );
  return [
    (key: K) => {
      let memo = getMemo();
      if (!memo) setMemo((memo = create()));
      return memo(key);
    },
    () => setMemo(null),
  ] as const;
}

// Every pass memo's reset, which each solve pass runs.
const passResets: (() => void)[] = [];

// An analysis memo over the reasons of the moment: each solve pass asks it
// afresh.
export function createPassMemo<K extends object, R>(
  compute: (key: K) => R,
  cycleAnswer: R,
) {
  const [memo, reset] = createAnalysisMemo(compute, cycleAnswer);
  passResets.push(reset);
  return memo;
}

export function resetPassMemos() {
  for (const reset of passResets) reset();
}

// A pass memo keyed by an object and a property path (`true` for all):
// each path interns one key, so a path's answers share one cycle protocol.
type MemoPath = Opt<string> | true;
type PathKey<K> = [K, MemoPath];
interface PathKeys<K> {
  value: PathKey<K> | undefined;
  all: PathKey<K> | undefined;
  properties: Map<string, PathKeys<K>> | undefined;
}
export function createPassPathMemo<K extends object, R>(
  compute: (key: K, path: MemoPath) => R,
  cycleAnswer: R,
) {
  const getKey = createPathKeys<K>();
  const memo = createPassMemo(
    ([key, path]: PathKey<K>) => compute(key, path),
    cycleAnswer,
  );
  return (key: K, path: MemoPath) => memo(getKey(key, path));
}

// One key per object and property path, the same each time it is asked.
export function createPathKeys<K extends object>() {
  const keys = new WeakMap<K, PathKeys<K>>();
  return (key: K, path: MemoPath): PathKey<K> => {
    let pathKeys: PathKeys<K> | undefined = keys.get(key);
    if (!pathKeys) keys.set(key, (pathKeys = createPathKeysRecord()));
    return path === true
      ? (pathKeys.all ??= [key, path])
      : (reduce(path, ensurePropKeys<K>, pathKeys).value ??= [key, path]);
  };
}

// The keys under `property`, made on first use.
function ensurePropKeys<K>(pathKeys: PathKeys<K>, property: string) {
  let next = pathKeys.properties?.get(property);
  if (!next) {
    (pathKeys.properties ??= new Map()).set(
      property,
      (next = createPathKeysRecord()),
    );
  }
  return next;
}

// Every record starts with all its fields, so all share one object shape.
function createPathKeysRecord<K>(): PathKeys<K> {
  return { value: undefined, all: undefined, properties: undefined };
}
