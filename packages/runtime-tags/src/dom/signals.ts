import { type Accessor, AccessorChar, type Scope } from "../common/types";
import type { RendererOrElementName } from "./renderer";
import { bindFunction } from "./scope";

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

export function initValue<T>(
  valueAccessor: Accessor,
  valueSignal: ValueSignal<T>,
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
  return (scope, valueOrOp) => {
    if (valueOrOp !== MARK && scope[markAccessor] === undefined) {
      valueSignal(scope, valueOrOp);
    }
  };
}

export function changeHandler<T>(
  valueAccessor: Accessor,
  fn: ValueSignal<T>,
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
  return (scope, valueOrOp) => {
    if (valueOrOp !== MARK && valueOrOp !== CLEAN && valueOrOp !== DIRTY) {
      if (valueOrOp != null && typeof valueOrOp !== "function") {
        throw new Error(
          `Invalid value ${valueOrOp} for change handler '${valueAccessor}'`,
        );
      } else if (scope[markAccessor] !== undefined) {
        const prevValue = scope[valueAccessor];
        if (prevValue && !valueOrOp) {
          throw new Error(
            `Change handler '${valueAccessor}' cannot change from a function to ${valueOrOp}`,
          );
        } else if (!prevValue && valueOrOp) {
          throw new Error(
            `Change handler '${valueAccessor}' cannot change from a nullish to a function`,
          );
        }
      }
    }
    fn(scope, valueOrOp);
  };
}

export function value<T>(
  valueAccessor: Accessor,
  fn?: SignalFn<T>,
  intersection?: IntersectionSignal,
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
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
          fn?.(scope, valueOrOp);
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
  intersection?: IntersectionSignal,
): IntersectionSignal {
  const dirtyAccessor = AccessorChar.Dynamic + accessorId++;
  const markAccessor = dirtyAccessor + AccessorChar.Mark;
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
  fn?: SignalFn<T>,
  _getOwnerScope?: (scope: Scope) => Scope,
  intersection?: IntersectionSignal,
): IntersectionSignal {
  const dirtyAccessor = AccessorChar.Dynamic + accessorId++;
  const markAccessor = dirtyAccessor + 1;
  const getOwnerScope = _getOwnerScope || defaultGetOwnerScope;
  const getOwnerValueAccessor =
    typeof ownerValueAccessor === "function"
      ? ownerValueAccessor
      : () => ownerValueAccessor as Accessor;
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
          ownerScope ??= getOwnerScope(scope);
          ownerValueAccessor ??= getOwnerValueAccessor(scope);
          fn?.(scope, ownerScope[ownerValueAccessor]);
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
  fn: ValueSignal<T>,
  _getOwnerScope?: (scope: Scope) => Scope,
  intersection?: IntersectionSignal,
): IntersectionSignal {
  const getOwnerScope = _getOwnerScope || defaultGetOwnerScope;
  const getOwnerValueAccessor =
    typeof ownerValueAccessor === "function"
      ? ownerValueAccessor
      : () => ownerValueAccessor as string;
  const signalFn = closure(
    getOwnerValueAccessor,
    fn,
    getOwnerScope,
    intersection,
  );
  signalFn.___subscribe = (scope: Scope) => {
    const ownerScope = getOwnerScope(scope);
    const providerSubscriptionsAccessor =
      getOwnerValueAccessor(scope) + AccessorChar.Subscribers;
    ownerScope[providerSubscriptionsAccessor] ??= new Set();
    ownerScope[providerSubscriptionsAccessor].add(
      bindFunction(scope, signalFn as any),
    );
  };
  signalFn.___unsubscribe = (scope: Scope) => {
    const ownerScope = getOwnerScope(scope);
    const providerSubscriptionsAccessor =
      getOwnerValueAccessor(scope) + AccessorChar.Subscribers;
    ownerScope[providerSubscriptionsAccessor]?.delete(
      bindFunction(scope, signalFn as any),
    );
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

export const renderBodyClosures = (
  renderBody: RendererOrElementName | undefined,
  childScope: Scope,
  op: SignalOp,
) => {
  const signals = renderBody?.___closureSignals;
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
