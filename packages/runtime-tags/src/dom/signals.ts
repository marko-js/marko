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
import { $signal } from "./abort-signal";
import { queueEffect, queueRender, rendering, runId } from "./queue";
import { _resume } from "./resume";
import { schedule } from "./schedule";

export type SignalFn = (scope: Scope) => void;
export type Signal<T = unknown, U extends Scope = Scope> = (
  scope: U,
  value: T,
) => void;
type KeyedScopes = Map<unknown, BranchScope> & {
  [x: `${KeyedScopesProp.PreviousKey}${string}`]: unknown;
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
  const prevKeyProp: `${KeyedScopesProp.PreviousKey}${string}` = `${KeyedScopesProp.PreviousKey}${ownerValueAccessor as string}`;
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
