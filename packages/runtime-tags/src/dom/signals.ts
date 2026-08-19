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
  KeyedScopesProp,
  type Scope,
} from "../common/types";
import { trackCleanup } from "./abort-signal";
import { queueEffect, queueRender, rendering, runId } from "./queue";
import { _resume } from "./resume";
import { schedule } from "./schedule";

export type SignalFn = (scope: Scope) => void;
export type Signal<T = unknown, U extends Scope = Scope> = (
  scope: U,
  value: T,
) => void;
type KeyedScopes = Map<unknown, BranchScope> & {
  [x: `${typeof KeyedScopesProp.PreviousKey}${string}`]: unknown;
};

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
  // The change handler owns the id after the value's.
  const valueChangeAccessor = MARKO_DEBUG
    ? AccessorPrefix.TagVariableChange + valueAccessor
    : decodeAccessor((id as number) + 1);
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

// Value signals for the page's live server/client intersections, keyed by
// `templateId:ordinal`. `_fill_join` rides each intersection, so tree-shaking
// keeps a registration exactly when a consuming join is retained; joins
// compose behind one guard and never displace a declaration-owned key.
export const patchFills: Record<string, Signal<unknown> & { _?: SignalFn }> =
  {};
function fillJoin<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  dispatch: SignalFn,
): T {
  const prev = patchFills[key];
  const prevFn = prev?._;
  // Never replace a fill-registered declaration: its downstream already
  // reaches every consumer a join could.
  if (!prev || prevFn) {
    const fn: SignalFn = prevFn
      ? (scope) => {
          prevFn(scope);
          dispatch(scope);
        }
      : dispatch;
    (patchFills[key] = _const(valueAccessor, fn) as Signal<unknown> & {
      _?: SignalFn;
    })._ = fn;
  }
  return join;
}
export function _fill_join<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  buildDispatch?: (join: SignalFn) => SignalFn,
): T {
  return fillJoin(
    key,
    valueAccessor,
    join,
    buildDispatch ? buildDispatch(join) : join,
  );
}
// Cross-section joins run against branch scopes: these register the
// owner-side dispatch, composed inward over trailing hop args (owner
// first); per-kind helpers keep branch-free bundles free of the other
// kind, and mixed chains ride `_fill_join`'s dispatch builder instead.
export function _fill_join_if<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  ...hops: (EncodedAccessor | number)[]
): T {
  let dispatch: SignalFn = join;
  for (let i = hops.length; i > 0; i -= 2) {
    dispatch = _if_closure(
      hops[i - 2] as EncodedAccessor,
      hops[i - 1] as number,
      dispatch,
    );
  }
  return fillJoin(key, valueAccessor, join, dispatch);
}
export function _fill_join_for<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  ...hops: EncodedAccessor[]
): T {
  let dispatch: SignalFn = join;
  for (let i = hops.length; i--;) {
    dispatch = _for_closure(hops[i], dispatch);
  }
  return fillJoin(key, valueAccessor, join, dispatch);
}

// Deep closure positions of one key reassemble the indexed composite:
// each registers at its compile-time index; one dispatcher selects per
// subscriber, and a shaken position is simply absent (nothing to update).
const closureFillJoins: Record<string, SignalFn[] & { d?: 1 }> = {};
export function _fill_join_closure<T extends SignalFn>(
  key: string,
  valueAccessor: EncodedAccessor,
  join: T,
  index: number,
): T {
  const signals = (closureFillJoins[key] ??= []);
  const closureJoin = join as T & {
    [ClosureSignalProp.ScopeInstancesAccessor]: string;
    [ClosureSignalProp.SignalIndexAccessor]: string;
    [ClosureSignalProp.Index]: number;
  };
  signals[index] = join;
  // Client-created positions stamp this index into their scope, keeping
  // it in agreement with what the server serialized.
  closureJoin[ClosureSignalProp.Index] = index;
  if (!signals.d) {
    signals.d = 1;
    fillJoin(key, valueAccessor, join, (scope) => {
      const instances = scope[
        closureJoin[ClosureSignalProp.ScopeInstancesAccessor]
      ] as Set<Scope> | undefined;
      if (instances) {
        const signalIndex = closureJoin[ClosureSignalProp.SignalIndexAccessor];
        for (const childScope of instances) {
          if (
            childScope[AccessorProp.Gen] > 0 &&
            childScope[AccessorProp.Gen] < runId
          ) {
            const sig = signals[(childScope[signalIndex] as number) || 0];
            if (sig) queueRender(childScope, sig, -1);
          }
        }
      }
    });
  }
  return join;
}

// A binding's declaration signal already writes + queues its downstream
// (closures included), so it registers as the fill directly, fused so
// compiled templates spend one call, not two.
function fill<T>(key: string, signal: Signal<unknown>) {
  patchFills[key] = signal;
  return signal as Signal<T>;
}
export function _fill_let<T>(key: string, id: EncodedAccessor, fn?: SignalFn) {
  return fill<T>(key, _let<T>(id, fn) as Signal<unknown>);
}
export function _fill_let_change<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
) {
  return fill<T>(key, _let_change<T>(id, fn) as Signal<unknown>);
}
export function _fill_const<T>(
  key: string,
  id: EncodedAccessor,
  fn?: SignalFn,
) {
  return fill<T>(key, _const<T>(id, fn) as Signal<unknown>);
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
      // Complemented keys cannot collide with the render slots at `id`.
      if ((~id) in scope) {
        if (!--scope[~id]) {
          fn(scope);
        }
      } else {
        scope[~id] = defaultPending;
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
  keyValueAccessor: EncodedAccessor,
  fn: SignalFn,
): SignalFn {
  if (!MARKO_DEBUG) {
    ownerLoopNodeAccessor = decodeAccessor(ownerLoopNodeAccessor as number);
    ownerValueAccessor = decodeAccessor(ownerValueAccessor as number);
    if (keyValueAccessor !== AccessorProp.LoopKey) {
      keyValueAccessor = decodeAccessor(keyValueAccessor as number);
    }
  }
  const scopeAccessor = AccessorPrefix.BranchScopes + ownerLoopNodeAccessor;
  const mapAccessor = AccessorPrefix.KeyedScopes + ownerLoopNodeAccessor;
  const prevKeyProp: `${typeof KeyedScopesProp.PreviousKey}${string}` = `${KeyedScopesProp.PreviousKey}${ownerValueAccessor as string}`;
  const ownerSignal = (ownerScope: Scope) => {
    const scopes = toArray(ownerScope[scopeAccessor] as BranchScope);
    if (ownerScope[AccessorProp.Gen] < runId && scopes.length) {
      const nextKey = ownerScope[ownerValueAccessor];
      queueRender(
        ownerScope,
        () => {
          const map = keyedScopes(
            ownerScope,
            scopeAccessor,
            mapAccessor,
            keyValueAccessor,
          );
          if (map && prevKeyProp in map) {
            const prevScope = map.get(map[prevKeyProp]);
            const nextScope = map.get(nextKey);
            if (prevScope !== nextScope) {
              runLiveBranch(prevScope, fn);
              runLiveBranch(nextScope, fn);
            }
          } else {
            for (const scope of toArray(
              ownerScope[scopeAccessor] as BranchScope,
            )) {
              runLiveBranch(scope, fn);
            }
          }
          if (map) map[prevKeyProp] = nextKey;
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

function keyedScopes(
  ownerScope: Scope,
  scopeAccessor: string,
  mapAccessor: string,
  keyValueAccessor: EncodedAccessor,
): KeyedScopes | null {
  const map = (ownerScope[mapAccessor] ||= new Map()) as KeyedScopes;
  if (!map.size) {
    for (const scope of toArray(ownerScope[scopeAccessor] as BranchScope)) {
      const key = scope[AccessorProp.LoopKey] ?? scope[keyValueAccessor];
      if (key === undefined) {
        return (ownerScope[mapAccessor] = null);
      }
      scope[AccessorProp.LoopKey] = key;
      map.set(key, scope);
    }
  }
  return map;
}

function runLiveBranch(scope: BranchScope | undefined, fn: SignalFn) {
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
  // Resume adopts the server's set already holding its subscribers, so those
  // register no unsubscribe: bounded, and `_closure` skips destroyed scopes.
  const { size } = subscribers;
  if (subscribers.add(scope).size !== size) trackCleanup(scope, subscribers);
}

export function _closure(...closureSignals: ReturnType<typeof _closure_get>[]) {
  const [firstSignal] = closureSignals;
  const scopeInstances = firstSignal[ClosureSignalProp.ScopeInstancesAccessor];
  const signalIndex = firstSignal[ClosureSignalProp.SignalIndexAccessor];
  for (let i = closureSignals.length; i--;) {
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
  // The closure accessor id is the scope instances key itself; the signal
  // index key keeps its letter to avoid colliding with the closing scopes.
  closureSignal[ClosureSignalProp.ScopeInstancesAccessor] = MARKO_DEBUG
    ? AccessorPrefix.ClosureScopes + valueAccessor
    : (valueAccessor as string);
  closureSignal[ClosureSignalProp.SignalIndexAccessor] =
    AccessorPrefix.ClosureSignalIndex + valueAccessor;

  resumeId && _resume(resumeId, closureSignal);

  return closureSignal;
}

// Construct INIT registration fused into the closure helpers: pure call
// sites let tree shaking drop signal and registration together (fail closed).
export function _init_closure_get(
  initId: string,
  valueAccessor: EncodedAccessor,
  fn: SignalFn,
  getOwnerScope?: (scope: Scope) => Scope,
  resumeId?: string,
) {
  return _resume(
    initId,
    _closure_get(valueAccessor, fn, getOwnerScope, resumeId),
  );
}
export function _init_if_closure(
  initId: string,
  ownerConditionalNodeAccessor: EncodedAccessor,
  branch: number,
  fn: SignalFn,
) {
  return _resume(initId, _if_closure(ownerConditionalNodeAccessor, branch, fn));
}
export function _init_for_closure(
  initId: string,
  ownerLoopNodeAccessor: EncodedAccessor,
  fn: SignalFn,
) {
  return _resume(initId, _for_closure(ownerLoopNodeAccessor, fn));
}
export function _init_for_selector(
  initId: string,
  ownerLoopNodeAccessor: EncodedAccessor,
  ownerValueAccessor: EncodedAccessor,
  keyValueAccessor: EncodedAccessor,
  fn: SignalFn,
) {
  return _resume(
    initId,
    _for_selector(
      ownerLoopNodeAccessor,
      ownerValueAccessor,
      keyValueAccessor,
      fn,
    ),
  );
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
  // Falsy stores `undefined` (not eg `false`) so `?.()` reads stay a no-op.
  scope[AccessorProp.TagVariableChange] = changeHandler || undefined;
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

const tagIdsByGlobal = new WeakMap<Scope[typeof AccessorProp.Global], number>();
// With `accessor`, the minted id memoizes on the scope so a keyed `<id>`'s
// nullish fallback stays stable across recomputes. The slot is deliberately
// not serialized: a resumed scope's first recompute simply mints again.
export function _id(scope: Scope, accessor?: Accessor) {
  let id = accessor !== undefined && (scope[accessor] as string | undefined);
  if (!id) {
    const $global = scope[AccessorProp.Global];
    const n = tagIdsByGlobal.get($global) || 0;
    tagIdsByGlobal.set($global, n + 1);
    id = "c" + $global.runtimeId + $global.renderId + n.toString(36);
    if (accessor !== undefined) scope[accessor] = id;
  }
  return id;
}

export function _script(id: string, fn: (scope: Scope) => void) {
  _resume(id, fn);
  // Queued in signal-graph (forward) order; hydration replays in reverse, so
  // mount-effect order is unspecified across the two paths (see translator).
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

type Hoistable<T> = (...args: unknown[]) => T;
type Hoisted<T> = Hoistable<T> & Iterable<T>;

function* traverse<T>(
  scope: Scope,
  path: Accessor[],
  args: unknown[],
  i: number = path.length - 1,
): IterableIterator<T> {
  if (MARKO_DEBUG && rendering) {
    _hoist_read_error();
  }
  if (scope) {
    if (Symbol.iterator in scope) {
      for (const childScope of scope.values() as Iterable<Scope>) {
        yield* traverse(childScope, path, args, i);
      }
    } else {
      const item = scope[path[i]];
      if (i) {
        yield* traverse(item, path, args, i - 1);
      } else {
        // Reading a hoist means calling it, so the caller's arguments have to
        // reach the value; with none this is the bare unwrap it has always been.
        yield typeof item === "function" ? item(...args) : item;
      }
    }
  }
}

export function _hoist<T>(...path: Accessor[]) {
  if (!MARKO_DEBUG)
    path = path.map((p) => (typeof p === "string" ? p : decodeAccessor(p)));
  return (scope: Scope) => {
    // Single reads intentionally share the iterable traversal: a dedicated
    // fast path costs more runtime bytes than its latency savings justify.
    const fn: Hoisted<T> = (...args) =>
      traverse<T>(scope, path, args).next().value as T;
    fn[Symbol.iterator] = () => traverse<T>(scope, path, []);
    return fn;
  };
}

export function _hoist_resume<T>(id: string, ...path: Accessor[]) {
  return _resume(id, _hoist<T>(...path));
}
