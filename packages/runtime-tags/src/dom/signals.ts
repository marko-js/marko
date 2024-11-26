import { type Accessor, AccessorChar, type Scope } from "../common/types";
import { queueEffect, queueSource, rendering } from "./queue";
import type { Renderer } from "./renderer";
import { register } from "./resume";

export type Signal = ValueSignal | IntersectionSignal;

export const MARK: unique symbol = MARKO_DEBUG ? Symbol("mark") : ({} as any);
export const CLEAN: unique symbol = MARKO_DEBUG ? Symbol("clean") : ({} as any);
export const DIRTY: unique symbol = MARKO_DEBUG ? Symbol("dirty") : ({} as any);

export type SignalOp = typeof MARK | typeof CLEAN | typeof DIRTY;

export type SignalFn<T = unknown> = (scope: Scope, value: T) => void;

export type ValueSignal<T = unknown> = SignalFn<T | SignalOp>;

export type BoundValueSignal<T = unknown> = (valueOrOp: T | SignalOp) => void;

export type IntersectionSignal = SignalFn<SignalOp> & {
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

export type BoundIntersectionSignal = ((op?: SignalOp) => void) & {
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

export function state<T>(
  valueAccessor: Accessor,
  fn: ValueSignal<T>,
  getIntersection?: () => IntersectionSignal,
) {
  const valueSignal = value<T>(valueAccessor, fn, getIntersection);
  const markAccessor = valueAccessor + AccessorChar.Mark;

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
        valueIsOp || valueChange || scope[markAccessor] === undefined
          ? valueOrOp
          : CLEAN,
      );
    } else if (valueChange) {
      valueChange(valueOrOp as T);
    } else {
      queueSource(scope, valueSignal as ValueSignal, valueOrOp);
    }
    return valueOrOp;
  };
}

export function value<T>(
  valueAccessor: Accessor,
  fn: SignalFn<T> | 0,
  getIntersection?: () => IntersectionSignal,
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
  let intersection: IntersectionSignal | undefined =
    getIntersection &&
    ((scope, op) => (intersection = getIntersection!())(scope, op));

  return (scope, valueOrOp) => {
    if (valueOrOp === MARK) {
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
  getIntersection?: () => IntersectionSignal,
): IntersectionSignal {
  const dirtyAccessor = AccessorChar.Dynamic + accessorId++;
  const markAccessor = dirtyAccessor + AccessorChar.Mark;
  let intersection: IntersectionSignal | undefined =
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

const defaultGetOwnerScope = (scope: Scope) => scope._ as Scope;

export function closure<T>(
  ownerValueAccessor: Accessor | ((scope: Scope) => Accessor),
  fn: SignalFn<T> | 0,
  getOwnerScope: (scope: Scope) => Scope = defaultGetOwnerScope,
  getIntersection?: () => IntersectionSignal,
): IntersectionSignal {
  const dirtyAccessor = AccessorChar.Dynamic + accessorId++;
  const markAccessor = dirtyAccessor + 1;
  //const getOwnerScope = _getOwnerScope || defaultGetOwnerScope;
  const getOwnerValueAccessor =
    typeof ownerValueAccessor === "function"
      ? ownerValueAccessor
      : () => ownerValueAccessor as Accessor;
  let intersection: IntersectionSignal | undefined =
    getIntersection &&
    ((scope, op) => (intersection = getIntersection!())(scope, op));
  return (scope, op) => {
    if (op === MARK) {
      if ((scope[markAccessor] = (scope[markAccessor] ?? 0) + 1) === 1) {
        intersection?.(scope, MARK);
      }
    } else {
      let ownerScope, ownerValueAccessor;
      if (scope[markAccessor] === undefined) {
        ownerScope = getOwnerScope(scope);
        ownerValueAccessor = getOwnerValueAccessor(scope);
        const ownerMark = ownerScope[ownerValueAccessor + AccessorChar.Mark];
        const ownerHasRun =
          ownerMark === undefined ? !ownerScope.___client : ownerMark === 0;
        scope[markAccessor] = ownerHasRun ? 1 : 2;
        op = DIRTY;
      }
      if (--scope[markAccessor] === 0) {
        if (op === DIRTY || scope[dirtyAccessor]) {
          scope[dirtyAccessor] = false;
          ownerScope ||= getOwnerScope(scope);
          ownerValueAccessor ||= getOwnerValueAccessor(scope);
          fn && fn(scope, ownerScope[ownerValueAccessor]);
          intersection?.(scope, DIRTY);
        } else {
          intersection?.(scope, CLEAN);
        }
      } else {
        scope[dirtyAccessor] ||= op === DIRTY;
      }
    }
  };
}

export function dynamicClosure<T>(
  ownerValueAccessor: Accessor | ((scope: Scope) => Accessor),
  fn: ValueSignal<T> | 0,
  getOwnerScope: (scope: Scope) => Scope = defaultGetOwnerScope,
  getIntersection?: () => IntersectionSignal,
): IntersectionSignal {
  //const getOwnerScope = _getOwnerScope || defaultGetOwnerScope;
  const getOwnerValueAccessor =
    typeof ownerValueAccessor === "function"
      ? ownerValueAccessor
      : () => ownerValueAccessor as string;
  const signalFn = closure(
    getOwnerValueAccessor,
    fn,
    getOwnerScope,
    getIntersection,
  );
  const subscribeFns = new WeakMap<Scope, (value: SignalOp) => void>();
  signalFn.___subscribe = (scope: Scope) => {
    const subscribeFn = (value: SignalOp) => signalFn(scope, value);
    const ownerScope = getOwnerScope(scope);
    const providerSubscriptionsAccessor =
      getOwnerValueAccessor(scope) + AccessorChar.Subscribers;

    subscribeFns.set(scope, subscribeFn);
    (ownerScope[providerSubscriptionsAccessor] ||= new Set()).add(subscribeFn);
  };
  signalFn.___unsubscribe = (scope: Scope) => {
    const ownerScope = getOwnerScope(scope);
    const providerSubscriptionsAccessor =
      getOwnerValueAccessor(scope) + AccessorChar.Subscribers;
    ownerScope[providerSubscriptionsAccessor]?.delete(subscribeFns.get(scope));
    subscribeFns.delete(scope);
  };
  return signalFn;
}

export function childClosures(
  closureSignals: IntersectionSignal[],
  childAccessor: Accessor,
) {
  const signal = (scope: Scope, op: SignalOp) => {
    const childScope = scope[childAccessor] as Scope;
    for (const closureSignal of closureSignals) {
      closureSignal(childScope, op);
    }
  };
  signal.___subscribe = (scope: Scope) => {
    const childScope = scope[childAccessor] as Scope;
    for (const closureSignal of closureSignals) {
      closureSignal.___subscribe?.(childScope);
    }
  };
  signal.___unsubscribe = (scope: Scope) => {
    const childScope = scope[childAccessor] as Scope;
    for (const closureSignal of closureSignals) {
      closureSignal.___unsubscribe?.(childScope);
    }
  };
  return signal;
}

export function dynamicSubscribers(valueAccessor: Accessor) {
  const subscribersAccessor = valueAccessor + AccessorChar.Subscribers;
  return (scope: Scope, op: SignalOp) => {
    const subscribers = scope[
      subscribersAccessor
    ] as Set<BoundIntersectionSignal>;
    if (subscribers) {
      for (const subscriber of subscribers) {
        subscriber(op);
      }
    }
  };
}

export function setTagVar(
  scope: Scope,
  childAccessor: Accessor,
  tagVarSignal: ValueSignal,
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

export const renderBodyClosures = (
  renderBody: Renderer | string | undefined,
  childScope: Scope,
  op: SignalOp,
) => {
  const signals = (renderBody as unknown as Renderer)?.___closureSignals;
  if (signals) {
    for (const signal of signals) {
      signal(childScope, op);
    }
  }
};

export const inMany = (
  scopes: Scope[],
  op: SignalOp,
  signal: IntersectionSignal,
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

export function inChild(childAccessor: Accessor, signal: ValueSignal) {
  return (scope: Scope, valueOrOp: unknown | SignalOp) => {
    signal(scope[childAccessor] as Scope, valueOrOp);
  };
}

export function intersections(
  signals: IntersectionSignal[],
): IntersectionSignal {
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
