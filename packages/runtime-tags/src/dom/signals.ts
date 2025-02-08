import { type Accessor, AccessorChar, type Scope } from "../common/types";
import { getAbortSignal } from "./abort-signal";
import { emptyMarkerArray } from "./control-flow";
import { queueEffect, queueSource, rendering } from "./queue";
import { register } from "./resume";

export const MARK: unique symbol = MARKO_DEBUG ? Symbol("mark") : ({} as any);
export const CLEAN: unique symbol = MARKO_DEBUG ? Symbol("clean") : ({} as any);
export const DIRTY: unique symbol = MARKO_DEBUG ? Symbol("dirty") : ({} as any);

export type SignalOp = typeof MARK | typeof CLEAN | typeof DIRTY;
export type SignalFn<T> = (scope: Scope, value: T) => void;
export type Signal<T> = ((scope: Scope, value: T | SignalOp) => void) & {
  ___subscribe?(scope: Scope): void;
};

export function state<T>(
  valueAccessor: Accessor,
  fn: Signal<T>,
  getIntersection?: () => Signal<never>,
) {
  const valueSignal = value<T>(valueAccessor, fn, getIntersection);
  const markAccessor = valueAccessor + AccessorChar.Mark;
  const valueChangeAccessor = valueAccessor + AccessorChar.TagVariableChange;

  return (
    scope: Scope,
    valueOrOp: T | SignalOp,
    valueChange?: (v: T) => void,
  ) => {
    if (rendering) {
      const valueIsOp =
        valueOrOp === MARK || valueOrOp === CLEAN || valueOrOp === DIRTY;
      valueSignal(
        scope,
        valueIsOp ||
          (scope[valueChangeAccessor] = valueChange) ||
          scope[markAccessor] === undefined
          ? valueOrOp
          : CLEAN,
      );
    } else if (scope[valueChangeAccessor]) {
      scope[valueChangeAccessor](valueOrOp as T);
    } else {
      queueSource(scope, valueSignal, valueOrOp as T);
    }
    return valueOrOp;
  };
}

export function value<T>(
  valueAccessor: Accessor,
  fn: SignalFn<T> | 0,
  getIntersection?: () => Signal<never>,
): Signal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
  let intersection: Signal<never> | undefined =
    getIntersection &&
    ((scope, op) => (intersection = getIntersection!())(scope, op));

  return (scope, valueOrOp) => {
    if (valueOrOp === MARK) {
      // TODO: this check is only necessary because `state` uses `value`
      if ((scope[markAccessor] = (scope[markAccessor] ?? 0) + 1) === 1) {
        intersection?.(scope, MARK);
      }
    } else if (valueOrOp !== DIRTY) {
      const existing = scope[markAccessor] !== undefined;
      if ((scope[markAccessor] ||= 1) === 1) {
        if (
          valueOrOp === CLEAN ||
          (existing && scope[valueAccessor] === valueOrOp)
        ) {
          intersection?.(scope, CLEAN);
        } else {
          scope[valueAccessor] = valueOrOp;
          fn && fn(scope, valueOrOp);
          intersection?.(scope, DIRTY);
        }
      }
      // closure needs this to be called after the fn
      // so it is marked until all downstream have been called
      scope[markAccessor]--;
    }
  };
}

let accessorId = 0;

export function intersection(
  count: number,
  fn: SignalFn<never>,
  getIntersection?: () => Signal<never>,
): Signal<never> {
  const dirtyAccessor = AccessorChar.Dynamic + accessorId++;
  const markAccessor = dirtyAccessor + AccessorChar.Mark;
  let intersection: Signal<never> | undefined =
    getIntersection &&
    ((scope, op) => (intersection = getIntersection!())(scope, op));

  return (scope, op) => {
    if (op === MARK) {
      if ((scope[markAccessor] = (scope[markAccessor] ?? 0) + 1) === 1) {
        intersection?.(scope, MARK);
      }
    } else if (scope[markAccessor] === undefined) {
      scope[markAccessor] = count - 1;
      scope[dirtyAccessor] = true;
    } else if (--scope[markAccessor] === 0) {
      if (op === DIRTY || scope[dirtyAccessor]) {
        scope[dirtyAccessor] = false;
        fn(scope, 0 as never);
        intersection?.(scope, DIRTY);
      } else {
        intersection?.(scope, CLEAN);
      }
    } else {
      scope[dirtyAccessor] ||= op === DIRTY;
    }
  };
}

export function closure<T>(
  fn: SignalFn<T> | 0,
  getIntersection?: () => Signal<never>,
): Signal<T> {
  let intersection: Signal<never> | undefined =
    getIntersection &&
    ((scope, op) => (intersection = getIntersection!())(scope, op));
  return (scope: Scope, valueOrOp: T | SignalOp) => {
    if (valueOrOp === MARK) {
      intersection?.(scope, MARK);
    } else {
      fn && fn(scope, valueOrOp as T);
      intersection?.(scope, DIRTY);
    }
  };
}

export function loopClosure<T>(
  ownerLoopNodeAccessor: Accessor,
  fn: SignalFn<T> | 0,
  getIntersection?: () => Signal<never>,
): SignalFn<T> {
  const signal = closure(fn, getIntersection);
  const loopScopeAccessor = ownerLoopNodeAccessor + AccessorChar.LoopScopeArray;
  const loopScopeMapAccessor =
    ownerLoopNodeAccessor + AccessorChar.LoopScopeMap;
  const helperSignal = (ownerScope: Scope, value: T) => {
    const loopScopes =
      ownerScope[loopScopeAccessor] ??
      ownerScope[loopScopeMapAccessor]?.values() ??
      [];
    if (loopScopes !== emptyMarkerArray) {
      for (const scope of loopScopes) {
        if (!scope.___pending) {
          queueSource(scope, signal, value);
        }
      }
    }
  };
  helperSignal._ = signal;
  return helperSignal;
}

export function conditionalClosure<T>(
  ownerConditionalNodeAccessor: Accessor,
  branch: number,
  fn: SignalFn<T> | 0,
  getIntersection?: () => Signal<never>,
): SignalFn<T> {
  const signal = closure(fn, getIntersection);
  const scopeAccessor =
    ownerConditionalNodeAccessor + AccessorChar.ConditionalScope;
  const branchAccessor =
    ownerConditionalNodeAccessor + AccessorChar.ConditionalRenderer;
  const helperSignal = (scope: Scope, value: T) => {
    const ifScope = scope[scopeAccessor];
    if (ifScope && !ifScope.___pending && scope[branchAccessor] === branch) {
      queueSource(ifScope, signal, value);
    }
  };
  helperSignal._ = signal;
  return helperSignal;
}

const defaultGetOwnerScope = (scope: Scope) => scope._ as Scope;

export function dynamicClosure<T>(
  fn: Signal<T> | 0,
  getOwnerScope: (scope: Scope) => Scope = defaultGetOwnerScope,
  getIntersection?: () => Signal<never>,
): SignalFn<T> {
  //const getOwnerScope = _getOwnerScope || defaultGetOwnerScope; // Use this instead of default params to support passing `0`
  const ownerSubscribersAccessor = AccessorChar.Dynamic + accessorId++;
  const _signal = closure(fn, getIntersection);
  const helperSignal = (ownerScope: Scope, value: T) => {
    const subscribers = ownerScope[ownerSubscribersAccessor] as Set<Scope>;
    if (subscribers) {
      for (const subscriber of subscribers) {
        if (!subscriber.___pending) {
          queueSource(subscriber, _signal, value);
        }
      }
    }
  };
  const setupSignal = (scope: Scope, value: T) => {
    _signal(scope, value);
    subscribe(scope);
  };
  const subscribe = (scope: Scope) => {
    (getOwnerScope(scope)[ownerSubscribersAccessor] ||= new Set()).add(scope);
    getAbortSignal(scope, -1).addEventListener("abort", () => {
      getOwnerScope(scope)[ownerSubscribersAccessor].delete(scope);
    });
  };
  helperSignal._ = setupSignal;
  helperSignal.___subscribe = subscribe;
  return helperSignal;
}

export function setTagVar(
  scope: Scope,
  childAccessor: Accessor,
  tagVarSignal: Signal<unknown>,
) {
  scope[childAccessor][AccessorChar.TagVariable] = (
    valueOrOp: unknown | SignalOp,
  ) => tagVarSignal(scope, valueOrOp);
}

export const tagVarSignal = (scope: Scope, valueOrOp: unknown | SignalOp) =>
  scope[AccessorChar.TagVariable]?.(valueOrOp);

export function setTagVarChange(
  scope: Scope,
  changeHandler: (value: unknown) => void,
) {
  scope[AccessorChar.TagVariableChange] = changeHandler;
}
export const tagVarSignalChange = (scope: Scope, value: unknown) =>
  scope[AccessorChar.TagVariableChange]?.(value);

export const inMany = (
  scopes: Scope[],
  op: SignalOp,
  signal: Signal<never>,
) => {
  for (const scope of scopes) {
    signal(scope, op);
  }
};

const tagIdsByGlobal = new WeakMap<Scope["___global"], number>();
export function nextTagId({ $global }: Scope) {
  const id = tagIdsByGlobal.get($global) || 0;
  tagIdsByGlobal.set($global, id + 1);
  return "c" + $global.runtimeId + $global.renderId + id.toString(36);
}

export function inChild(childAccessor: Accessor, signal: Signal<unknown>) {
  return (scope: Scope, valueOrOp: unknown | SignalOp) => {
    signal(scope[childAccessor] as Scope, valueOrOp);
  };
}

export function intersections(signals: Signal<never>[]): Signal<never> {
  return (scope, op) => {
    for (const signal of signals) {
      signal(scope, op);
    }
  };
}

export function effect(id: string, fn: (scope: Scope) => void) {
  register(id, fn);
  return (scope: Scope) => {
    queueEffect(scope, fn);
  };
}
