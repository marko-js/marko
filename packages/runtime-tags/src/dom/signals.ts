import { _el_read_error, _hoist_read_error } from "../common/errors";
import { decodeAccessor } from "../common/helpers";
import { toArray } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  ClosureSignalProp,
  type EncodedAccessor,
  type Scope,
} from "../common/types";
import { $signal } from "./abort-signal";
import { queueEffect, queueRender, rendering, runId } from "./queue";
import { _resume } from "./resume";
import { schedule } from "./schedule";

export type SignalFn = (scope: Scope) => void;
export type Signal<T = unknown, U extends Scope = Scope> = (
  scope: U,
  value: T,
) => void;

export function _let<T>(id: EncodedAccessor, fn?: SignalFn) {
  const valueAccessor = MARKO_DEBUG
    ? (id as string).slice(0, (id as string).lastIndexOf("/"))
    : decodeAccessor(id as number);

  if (MARKO_DEBUG) {
    id = +(id as string).slice((id as string).lastIndexOf("/") + 1);
  }

  return (scope: Scope, value: T) => {
    if (rendering) {
      if (scope[AccessorProp.Gen] === runId) {
        scope[valueAccessor] = value;
        fn?.(scope);
      }
    } else if (
      (scope[valueAccessor] !== value || !(valueAccessor in scope)) &&
      ((scope[valueAccessor] = value), fn)
    ) {
      schedule();
      queueRender(scope, fn, id as number);
    }
    return value;
  };
}

// The `<let>` with a change handler (`:=` / `valueChange=`); statically
// known per tag, so plain lets use the slim `_let` above.
export function _let_change<T>(id: EncodedAccessor, fn?: SignalFn) {
  const valueAccessor = MARKO_DEBUG
    ? (id as string).slice(0, (id as string).lastIndexOf("/"))
    : decodeAccessor(id as number);
  const valueChangeAccessor = AccessorPrefix.TagVariableChange + valueAccessor;
  const base = _let<T>(id, fn);

  return (scope: Scope, value: T, valueChange?: (v: T) => void) => {
    if (rendering) {
      if (
        (scope[valueChangeAccessor] = valueChange) &&
        (scope[valueAccessor] !== value || !(valueAccessor in scope))
      ) {
        scope[valueAccessor] = value;
        fn?.(scope);
      } else {
        base(scope, value);
      }
    } else if (scope[valueChangeAccessor]) {
      scope[valueChangeAccessor](value);
    } else {
      base(scope, value);
    }
    return value;
  };
}

export function _const<T>(
  valueAccessor: EncodedAccessor,
  fn?: SignalFn,
): Signal<T> {
  if (!MARKO_DEBUG) valueAccessor = decodeAccessor(valueAccessor as number);
  return ((scope: Scope, value: T | undefined) => {
    if (scope[valueAccessor] !== value || !(valueAccessor in scope)) {
      scope[valueAccessor] = value;
      fn?.(scope);
    }
  }) as Signal<T>;
}

export function _or(
  id: number,
  fn: SignalFn,
  defaultPending: number = 1,
  scopeIdAccessor: EncodedAccessor = AccessorProp.Id,
): Signal<never> {
  if (!MARKO_DEBUG && scopeIdAccessor !== AccessorProp.Id) {
    scopeIdAccessor = decodeAccessor(scopeIdAccessor as number);
  }

  return (scope) => {
    if (scope[AccessorProp.Gen] === runId) {
      if (id in scope) {
        if (!--scope[id]) {
          fn(scope);
        }
      } else {
        scope[id] = defaultPending;
      }
    } else {
      queueRender(scope, fn, id, 0, scope[scopeIdAccessor]);
    }
  };
}

export function _for_closure(
  ownerLoopNodeAccessor: EncodedAccessor,
  fn: SignalFn,
): SignalFn {
  if (!MARKO_DEBUG)
    ownerLoopNodeAccessor = decodeAccessor(ownerLoopNodeAccessor as number);
  const scopeAccessor = AccessorPrefix.BranchScopes + ownerLoopNodeAccessor;
  const ownerSignal = (ownerScope: Scope) => {
    const scopes = toArray(ownerScope[scopeAccessor] as BranchScope);
    if (scopes.length) {
      queueRender(
        ownerScope,
        () => {
          for (const scope of scopes as BranchScope[]) {
            if (
              scope[AccessorProp.Gen] > 0 &&
              scope[AccessorProp.Gen] < runId
            ) {
              fn(scope);
            }
          }
        },
        -1,
        0,
        scopes[0][AccessorProp.Id],
      );
    }
  };
  ownerSignal._ = fn;
  return ownerSignal;
}

export function _for_selector(
  ownerLoopNodeAccessor: EncodedAccessor,
  ownerValueAccessor: EncodedAccessor,
  fn: SignalFn,
): SignalFn {
  if (!MARKO_DEBUG) {
    ownerLoopNodeAccessor = decodeAccessor(ownerLoopNodeAccessor as number);
    ownerValueAccessor = decodeAccessor(ownerValueAccessor as number);
  }
  const scopeAccessor = AccessorPrefix.BranchScopes + ownerLoopNodeAccessor;
  const mapAccessor = AccessorPrefix.KeyedScopes + ownerLoopNodeAccessor;
  const lastKeyAccessor =
    AccessorPrefix.SelectorLastKey + ownerLoopNodeAccessor;
  const ownerSignal = (ownerScope: Scope) => {
    const nextKey = ownerScope[ownerValueAccessor];
    const prevKey = ownerScope[lastKeyAccessor];
    const canSelect = lastKeyAccessor in ownerScope;
    // Skip while the owner scope is still being created (`Gen === runId`); its
    // rows already render the binding on the create path. Only react to later
    // changes of the owner value.
    if (ownerScope[AccessorProp.Gen] < runId && prevKey !== nextKey) {
      const scopes = toArray(
        ownerScope[scopeAccessor] as BranchScope,
      ) as BranchScope[];
      if (scopes.length) {
        // Deferred like `_for_closure`: `fn` may write the DOM synchronously, so
        // it must run after any same-batch loop reconcile.
        queueRender(
          ownerScope,
          () => {
            // Build (and cache) the key map even on the first change, so it is
            // warm for subsequent O(1) selections. The first change has no
            // recorded previous key (`canSelect` false), so fan out for
            // correctness this once; the cache is now primed.
            const map = getKeyedScopes(ownerScope, scopeAccessor, mapAccessor);
            if (map && canSelect) {
              // O(1): re-run only the rows losing and gaining the key.
              runSelectorRow(map.get(prevKey), fn);
              runSelectorRow(map.get(nextKey), fn);
            } else {
              // No usable key map yet (a resumed loop before its first
              // reconcile), or first change: fan out, which is always correct.
              for (const scope of scopes) {
                runSelectorRow(scope, fn);
              }
            }
          },
          -1,
          0,
          scopes[0][AccessorProp.Id],
        );
      }
    }
    // Record the applied key (seeds it on create) for the next change.
    ownerScope[lastKeyAccessor] = nextKey;
  };
  ownerSignal._ = fn;
  return ownerSignal;
}

// Lazily build (and cache on the current branch collection) a key→branch lookup
// from the `LoopKey` each branch carries, so a selector resolves its rows in
// O(1). Each reconcile assigns a fresh branch collection, so stale maps are
// released with the previous branches. Returns undefined when a branch isn't
// keyed yet (e.g. a resumed loop before its first reconcile), so the caller fans
// out.
function getKeyedScopes(
  ownerScope: Scope,
  scopeAccessor: string,
  mapAccessor: string,
) {
  const branches = ownerScope[scopeAccessor];
  const cache = branches as
    | { [x: string]: Map<unknown, BranchScope> | undefined }
    | undefined;
  let map = cache?.[mapAccessor];
  if (!map) {
    map = new Map();
    for (const scope of toArray(branches as BranchScope) as BranchScope[]) {
      const key = scope[AccessorProp.LoopKey];
      if (key === undefined) return;
      map.set(key, scope);
    }
    if (cache) cache[mapAccessor] = map;
  }
  return map;
}

// Matches `_for_closure`'s row guard: skip an absent row (a `map.get` miss) and
// rows still being created (`Gen === runId`) or already destroyed (`Gen === 0`).
function runSelectorRow(scope: BranchScope | undefined, fn: SignalFn) {
  if (scope && scope[AccessorProp.Gen] > 0 && scope[AccessorProp.Gen] < runId) {
    fn(scope);
  }
}

export function _if_closure(
  ownerConditionalNodeAccessor: EncodedAccessor,
  branch: number,
  fn: SignalFn,
): SignalFn {
  if (!MARKO_DEBUG)
    ownerConditionalNodeAccessor = decodeAccessor(
      ownerConditionalNodeAccessor as number,
    );
  const scopeAccessor =
    AccessorPrefix.BranchScopes + ownerConditionalNodeAccessor;
  const branchAccessor =
    AccessorPrefix.ConditionalRenderer + ownerConditionalNodeAccessor;
  const ownerSignal = (scope: Scope) => {
    const ifScope = scope[scopeAccessor] as Scope | undefined;
    if (
      ifScope &&
      ifScope[AccessorProp.Gen] > 0 &&
      ifScope[AccessorProp.Gen] < runId &&
      (scope[branchAccessor] || 0) === branch
    ) {
      queueRender(ifScope, fn, -1);
    }
  };
  ownerSignal._ = fn;
  return ownerSignal;
}

export function subscribeToScopeSet(
  ownerScope: Scope,
  accessor: Accessor,
  scope: Scope,
) {
  const subscribers = (ownerScope[accessor] ||= new Set()) as Set<Scope>;
  if (!subscribers.has(scope)) {
    subscribers.add(scope);
    $signal(scope, -1).addEventListener("abort", () =>
      ownerScope[accessor].delete(scope),
    );
  }
}

export function _closure(...closureSignals: ReturnType<typeof _closure_get>[]) {
  const [firstSignal] = closureSignals;
  const scopeInstances = firstSignal[ClosureSignalProp.ScopeInstancesAccessor];
  const signalIndex = firstSignal[ClosureSignalProp.SignalIndexAccessor];
  for (let i = closureSignals.length; i--; ) {
    closureSignals[i][ClosureSignalProp.Index] = i;
  }

  return (scope: Scope) => {
    if (scope[scopeInstances]) {
      for (const childScope of scope[scopeInstances] as Set<Scope>) {
        if (
          childScope[AccessorProp.Gen] > 0 &&
          childScope[AccessorProp.Gen] < runId
        ) {
          queueRender(
            childScope,
            closureSignals[childScope[signalIndex] || 0],
            -1,
          );
        }
      }
    }
  };
}

export function _closure_get(
  valueAccessor: EncodedAccessor,
  fn: SignalFn,
  getOwnerScope?: (scope: Scope) => Scope,
  resumeId?: string,
) {
  if (!MARKO_DEBUG) valueAccessor = decodeAccessor(valueAccessor as number);
  const closureSignal = ((scope) => {
    scope[closureSignal[ClosureSignalProp.SignalIndexAccessor]] =
      closureSignal[ClosureSignalProp.Index];
    fn(scope);
    subscribeToScopeSet(
      getOwnerScope ? getOwnerScope(scope) : scope[AccessorProp.Owner]!,
      closureSignal[ClosureSignalProp.ScopeInstancesAccessor],
      scope,
    );
  }) as SignalFn & {
    [ClosureSignalProp.ScopeInstancesAccessor]: string;
    [ClosureSignalProp.SignalIndexAccessor]: string;
    [ClosureSignalProp.Index]: number;
  };
  closureSignal[ClosureSignalProp.ScopeInstancesAccessor] =
    AccessorPrefix.ClosureScopes + valueAccessor;
  closureSignal[ClosureSignalProp.SignalIndexAccessor] =
    AccessorPrefix.ClosureSignalIndex + valueAccessor;

  resumeId && _resume(resumeId, closureSignal);

  return closureSignal;
}

export function _child_setup(setup: Signal<never> & { _: Signal<Scope> }) {
  setup._ = (scope, owner) => {
    scope[AccessorProp.Owner] = owner;
    queueRender(scope, setup, -1);
  };
  return setup;
}

export function _var(
  scope: Scope,
  childAccessor: EncodedAccessor,
  signal: Signal<unknown>,
) {
  scope[MARKO_DEBUG ? childAccessor : decodeAccessor(childAccessor as number)][
    AccessorProp.TagVariable
  ] = (value: unknown) => signal(scope, value);
}

export const _return = (scope: Scope, value: unknown) =>
  scope[AccessorProp.TagVariable]?.(value);

export function _return_change(
  scope: Scope,
  changeHandler?: ((value: unknown) => void) | null | false,
) {
  if (changeHandler) {
    scope[AccessorProp.TagVariableChange] = changeHandler;
  }
}
export const _var_change = MARKO_DEBUG
  ? (scope: Scope, value: unknown, name: string = "This") => {
      if (typeof scope[AccessorProp.TagVariableChange] !== "function") {
        throw new TypeError(`${name} is a readonly tag variable.`);
      }

      scope[AccessorProp.TagVariableChange](value);
    }
  : (scope: Scope, value: unknown) =>
      scope[AccessorProp.TagVariableChange]?.(value);

const tagIdsByGlobal = new WeakMap<Scope[AccessorProp.Global], number>();
export function _id({ [AccessorProp.Global]: $global }: Scope) {
  const id = tagIdsByGlobal.get($global) || 0;
  tagIdsByGlobal.set($global, id + 1);
  return "c" + $global.runtimeId + $global.renderId + id.toString(36);
}

export function _script(id: string, fn: (scope: Scope) => void) {
  _resume(id, fn);
  return (scope: Scope) => {
    queueEffect(scope, fn);
  };
}

export function _el_read<T>(value: T): T {
  if (rendering) {
    _el_read_error();
  }
  return value;
}

type Hoistable<T> = () => T;
type Hoisted<T> = Hoistable<T> & Iterable<T>;

function* traverse<T>(
  scope: Scope,
  path: Accessor[],
  i: number = path.length - 1,
): IterableIterator<T> {
  if (MARKO_DEBUG && rendering) {
    _hoist_read_error();
  }
  if (scope) {
    if (Symbol.iterator in scope) {
      for (const childScope of scope.values() as Iterable<Scope>) {
        yield* traverse(childScope, path, i);
      }
    } else {
      const item = scope[path[i]];
      if (i) {
        yield* traverse(item, path, i - 1);
      } else {
        yield typeof item === "function" ? item() : item;
      }
    }
  }
}

export function _hoist<T>(...path: Accessor[]) {
  if (!MARKO_DEBUG)
    path = path.map((p) => (typeof p === "string" ? p : decodeAccessor(p)));
  return (scope: Scope) => {
    const fn: Hoisted<T> = () => traverse(scope, path).next().value;
    fn[Symbol.iterator] = () => traverse(scope, path);
    return fn;
  };
}

export function _hoist_resume<T>(id: string, ...path: Accessor[]) {
  return _resume(id, _hoist<T>(...path));
}
