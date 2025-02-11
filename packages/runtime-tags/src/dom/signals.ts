import { type Accessor, AccessorChar, type Scope } from "../common/types";
import { getAbortSignal } from "./abort-signal";
import { emptyMarkerArray } from "./control-flow";
import { queueEffect, queueSource, rendering } from "./queue";
import { register } from "./resume";
import { schedule } from "./schedule";

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
  fn: 0 | undefined | Signal<T>,
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
      schedule();
      queueSource(scope, valueSignal, valueOrOp as T);
    }
    return valueOrOp;
  };
}

export function value<T>(
  valueAccessor: Accessor,
  fn: 0 | undefined | SignalFn<T>,
  getIntersection?: () => Signal<never>,
): Signal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
  let intersection: undefined | Signal<never>;

  return (scope, valueOrOp) => {
    if (valueOrOp === MARK) {
      // TODO: this check is only necessary because `state` uses `value`
      if ((scope[markAccessor] = (scope[markAccessor] ?? 0) + 1) === 1) {
        getIntersection && (intersection ||= getIntersection())(scope, MARK);
      }
    } else if (valueOrOp !== DIRTY) {
      const existing = scope[markAccessor] !== undefined;
      if ((scope[markAccessor] ||= 1) === 1) {
        if (
          valueOrOp === CLEAN ||
          (existing && scope[valueAccessor] === valueOrOp)
        ) {
          getIntersection && (intersection ||= getIntersection())(scope, CLEAN);
        } else {
          scope[valueAccessor] = valueOrOp;
          fn && fn(scope, valueOrOp);
          getIntersection && (intersection ||= getIntersection())(scope, DIRTY);
        }
      }
      // closure needs this to be called after the fn
      // so it is marked until all downstream have been called
      scope[markAccessor]--; // TODO: still needed?
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
  let intersection: Signal<never> | undefined;

  return (scope, op) => {
    if (op === MARK) {
      if ((scope[markAccessor] = (scope[markAccessor] ?? 0) + 1) === 1) {
        getIntersection && (intersection ||= getIntersection())(scope, MARK);
      }
    } else if (scope[markAccessor] === undefined) {
      scope[markAccessor] = count - 1;
      scope[dirtyAccessor] = true;
    } else if (--scope[markAccessor] === 0) {
      if (op === DIRTY || scope[dirtyAccessor]) {
        scope[dirtyAccessor] = false;
        (fn as any)(scope);
        getIntersection && (intersection ||= getIntersection())(scope, DIRTY);
      } else {
        getIntersection && (intersection ||= getIntersection())(scope, CLEAN);
      }
    } else {
      scope[dirtyAccessor] ||= op === DIRTY;
    }
  };
}

export function loopClosure<T>(
  valueAccessor: Accessor,
  ownerLoopNodeAccessor: Accessor,
  fn: 0 | SignalFn<T>,
  getIntersection?: 0 | (() => Signal<never>),
): SignalFn<T> {
  const childSignal = closure(valueAccessor, fn, getIntersection);
  const loopScopeAccessor = ownerLoopNodeAccessor + AccessorChar.LoopScopeArray;
  const loopScopeMapAccessor =
    ownerLoopNodeAccessor + AccessorChar.LoopScopeMap;
  const ownerSignal = (ownerScope: Scope) => {
    const loopScopes =
      ownerScope[loopScopeAccessor] ??
      ownerScope[loopScopeMapAccessor]?.values() ??
      [];
    if (loopScopes !== emptyMarkerArray) {
      for (const scope of loopScopes) {
        if (!scope.___pending) {
          queueSource(scope, childSignal);
        }
      }
    }
  };
  ownerSignal._ = childSignal;
  return ownerSignal;
}

export function conditionalClosure<T>(
  valueAccessor: Accessor,
  ownerConditionalNodeAccessor: Accessor,
  branch: number,
  fn: 0 | SignalFn<T>,
  getIntersection?: 0 | (() => Signal<never>),
): SignalFn<T> {
  const childSignal = closure(valueAccessor, fn, getIntersection);
  const scopeAccessor =
    ownerConditionalNodeAccessor + AccessorChar.ConditionalScope;
  const branchAccessor =
    ownerConditionalNodeAccessor + AccessorChar.ConditionalRenderer;
  const ownerSignal = (scope: Scope) => {
    const ifScope = scope[scopeAccessor];
    if (ifScope && !ifScope.___pending && scope[branchAccessor] === branch) {
      queueSource(ifScope, childSignal);
    }
  };
  ownerSignal._ = childSignal;
  return ownerSignal;
}

export function dynamicClosure<T>(
  valueAccessor: Accessor,
  fn: 0 | Signal<T>,
  getIntersection?: 0 | (() => Signal<never>),
  getOwnerScope?: (scope: Scope) => Scope,
) {
  const subscribersAccessor = AccessorChar.Dynamic + accessorId++;
  const childSignal = closure(
    valueAccessor,
    fn,
    getIntersection,
    getOwnerScope,
  );
  const ownerSignal = (ownerScope: Scope) => {
    const subscribers = ownerScope[subscribersAccessor] as Set<Scope>;
    if (subscribers) {
      for (const subscriber of subscribers) {
        if (!subscriber.___pending) {
          queueSource(subscriber, childSignal);
        }
      }
    }
  };
  const subscribe = (scope: Scope) => {
    const owner = getOwnerScope ? getOwnerScope(scope) : scope._!;
    const subscribers = (owner[subscribersAccessor] ||= new Set());
    if (!subscribers.has(scope)) {
      subscribers.add(scope);
      getAbortSignal(scope, -1).addEventListener("abort", () =>
        owner[subscribersAccessor].delete(scope),
      );
    }
  };

  ownerSignal.___subscribe = subscribe;
  ownerSignal._ = (scope: Scope) => {
    childSignal(scope);
    subscribe(scope);
  };
  return ownerSignal;
}

export function registerDynamicClosure<T>(
  id: string,
  valueAccessor: Accessor,
  fn: 0 | Signal<T>,
  getIntersection?: 0 | (() => Signal<never>),
  getOwnerScope?: (scope: Scope) => Scope,
) {
  const signal = dynamicClosure(
    valueAccessor,
    fn,
    getIntersection,
    getOwnerScope,
  );
  register(id, signal.___subscribe);
  return signal;

  // TODO: we need to handle the async case - DO NOT REMOVE UNTIL WE DO
  // const ownerMarkAccessor = ownerValueAccessor + AccessorChars.MARK;
  // const ownerSubscribersAccessor =
  //   ownerValueAccessor + AccessorChars.SUBSCRIBERS;

  // register(id, (subscriberScope: Scope) => {
  //   const ownerScope = getOwnerScope(subscriberScope);
  //   const boundSignal = bindFunction(subscriberScope, signal);
  //   const ownerMark = ownerScope[ownerMarkAccessor];
  //   (ownerScope[ownerSubscribersAccessor] ||= new Set()).add(boundSignal);

  //   // TODO: if the mark is not undefined, it means the value was updated clientside
  //   // before this subscriber was flushed.
  //   if (ownerMark === 0) {
  //     // the value has finished updating
  //     // we should trigger an update to `signal`
  //   } else if (ownerMark >= 1) {
  //     // the value is queued for update
  //     // we should mark `signal` and let it be updated when the owner is updated
  //   }
  // });
}

function closure<T>(
  valueAccessor: Accessor,
  fn: 0 | undefined | SignalFn<T>,
  getIntersection: 0 | undefined | (() => Signal<never>),
  getOwnerScope?: (scope: Scope) => Scope,
): (scope: Scope, op?: SignalOp) => void {
  let intersection: Signal<never> | undefined;
  return (scope, op) => {
    op ||
      (fn &&
        fn(
          scope,
          (getOwnerScope ? getOwnerScope(scope) : scope._!)[valueAccessor],
        ));
    getIntersection &&
      (intersection ||= getIntersection())(scope, op ? MARK : DIRTY);
  };
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
