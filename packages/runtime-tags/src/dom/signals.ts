import { type Accessor, AccessorChar, type Scope } from "../common/types";
import { queueEffect, queueSource } from "./queue";
import type { Renderer } from "./renderer";
import { register } from "./resume";
import { $scope, withScope } from "./scope";

export type Signal = ValueSignal | IntersectionSignal;

export const MARK: unique symbol = MARKO_DEBUG ? Symbol("mark") : ({} as any);
export const CLEAN: unique symbol = MARKO_DEBUG ? Symbol("clean") : ({} as any);
export const DIRTY: unique symbol = MARKO_DEBUG ? Symbol("dirty") : ({} as any);

export type SignalOp = typeof MARK | typeof CLEAN | typeof DIRTY;

export type SignalFn<T = unknown> = (value: T) => void;

export type ValueSignal<T = unknown> = SignalFn<T | SignalOp>;

export type ParamSignal<T = unknown> = SignalFn<T | SignalOp>;

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
  // ) {
  //   const valueSignal = stateControllable<T>(valueAccessor, fn, getIntersection);

  //   return (valueOrOp: T | SignalOp, assignedScope?: Scope) =>
  //     valueSignal(valueOrOp, undefined, assignedScope);
  // }

  // export function stateControllable<T>(
  //   valueAccessor: Accessor,
  //   fn: ValueSignal<T>,
  //   getIntersection?: () => IntersectionSignal,
) {
  const valueSignal = value<T>(valueAccessor, fn, getIntersection);
  const markAccessor = valueAccessor + AccessorChar.Mark;

  return (
    valueOrOp: T | SignalOp,
    valueChange: ((v: T) => void) | undefined,
    assignedScope?: Scope,
  ) => {
    if (assignedScope) {
      if (valueChange) {
        valueChange(valueOrOp as T);
      } else {
        queueSource(assignedScope, valueSignal as ValueSignal, valueOrOp);
      }
    } else {
      const valueIsOp =
        valueOrOp === MARK || valueOrOp === CLEAN || valueOrOp === DIRTY;
      valueSignal(
        valueIsOp || valueChange || $scope[markAccessor] === undefined
          ? valueOrOp
          : CLEAN,
      );
    }
    return valueOrOp;
  };
}

export function param<T>(
  valueAccessor: Accessor,
  fn: ParamSignal<T>,
  getIntersection?: () => IntersectionSignal,
) {
  const valueSignal = value<T>(valueAccessor, fn, getIntersection);
  return (valueOrOp: T | SignalOp, accessor?: Accessor) => {
    if (accessor) {
      withScope($scope[accessor] as Scope, valueSignal, valueOrOp);
    } else {
      valueSignal(valueOrOp);
    }
  };
}

export function value<T>(
  valueAccessor: Accessor,
  fn: SignalFn<T> | 0,
  getIntersection?: () => IntersectionSignal,
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
  let intersection: IntersectionSignal | undefined =
    getIntersection && ((op) => (intersection = getIntersection!())(op));

  return (valueOrOp) => {
    if (valueOrOp === MARK) {
      if (($scope[markAccessor] = ($scope[markAccessor] ?? 0) + 1) === 1) {
        intersection?.(MARK);
      }
    } else if (valueOrOp !== DIRTY) {
      const existing = $scope[markAccessor] !== undefined;
      if (($scope[markAccessor] ||= 1) === 1) {
        if (
          valueOrOp === CLEAN ||
          (existing && $scope[valueAccessor] === valueOrOp)
        ) {
          intersection?.(CLEAN);
        } else {
          $scope[valueAccessor] = valueOrOp;
          fn && fn(valueOrOp);
          intersection?.(DIRTY);
        }
      }
      // closure needs this to be called after the fn
      // so it is marked until all downstream have been called
      $scope[markAccessor]--;
    }
  };
}

let accessorId = 0;

export function intersection(
  count: number,
  fn: SignalFn<Scope>,
  getIntersection?: () => IntersectionSignal,
): IntersectionSignal {
  const dirtyAccessor = AccessorChar.Dynamic + accessorId++;
  const markAccessor = dirtyAccessor + AccessorChar.Mark;
  let intersection: IntersectionSignal | undefined =
    getIntersection && ((op) => (intersection = getIntersection!())(op));

  return (op) => {
    if (op === MARK) {
      if (($scope[markAccessor] = ($scope[markAccessor] ?? 0) + 1) === 1) {
        intersection?.(MARK);
      }
    } else if ($scope[markAccessor] === undefined) {
      $scope[markAccessor] = count - 1;
      $scope[dirtyAccessor] = true;
    } else if (--$scope[markAccessor] === 0) {
      if (op === DIRTY || $scope[dirtyAccessor]) {
        $scope[dirtyAccessor] = false;
        fn($scope);
        intersection?.(DIRTY);
      } else {
        intersection?.(CLEAN);
      }
    } else {
      $scope[dirtyAccessor] ||= op === DIRTY;
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
    getIntersection && ((op) => (intersection = getIntersection!())(op));
  return (op) => {
    if (op === MARK) {
      if (($scope[markAccessor] = ($scope[markAccessor] ?? 0) + 1) === 1) {
        intersection?.(MARK);
      }
    } else {
      let ownerScope, ownerValueAccessor;
      if ($scope[markAccessor] === undefined) {
        ownerScope = getOwnerScope($scope);
        ownerValueAccessor = getOwnerValueAccessor($scope);
        const ownerMark = ownerScope[ownerValueAccessor + AccessorChar.Mark];
        const ownerHasRun =
          ownerMark === undefined ? !ownerScope.___client : ownerMark === 0;
        $scope[markAccessor] = ownerHasRun ? 1 : 2;
        op = DIRTY;
      }
      if (--$scope[markAccessor] === 0) {
        if (op === DIRTY || $scope[dirtyAccessor]) {
          $scope[dirtyAccessor] = false;
          ownerScope ||= getOwnerScope($scope);
          ownerValueAccessor ||= getOwnerValueAccessor($scope);
          fn && fn(ownerScope[ownerValueAccessor]);
          intersection?.(DIRTY);
        } else {
          intersection?.(CLEAN);
        }
      } else {
        $scope[dirtyAccessor] ||= op === DIRTY;
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
    const subscribeFn = (value: SignalOp) => withScope(scope, signalFn, value);
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
  const signal = (op: SignalOp) => {
    const childScope = $scope[childAccessor] as Scope;
    withScope(childScope, () => {
      for (const closureSignal of closureSignals) {
        closureSignal(op);
      }
    });
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
  return (op: SignalOp) => {
    const subscribers = $scope[
      subscribersAccessor
    ] as Set<BoundIntersectionSignal>;
    if (subscribers) {
      for (const subscriber of subscribers) {
        subscriber(op);
      }
    }
  };
}

export function setTagVar(childAccessor: Accessor, tagVarSignal: ValueSignal) {
  const scope = $scope;
  $scope[childAccessor][AccessorChar.TagVariable] = (
    valueOrOp: unknown | SignalOp,
  ) => withScope(scope, tagVarSignal, valueOrOp);
}

export const tagVarSignal = (valueOrOp: unknown | SignalOp) =>
  $scope[AccessorChar.TagVariable]?.(valueOrOp);

export const renderBodyClosures = (
  renderBody: Renderer | string | undefined,
  childScope: Scope,
  op: SignalOp,
) => {
  const signals = (renderBody as unknown as Renderer)?.___closureSignals;
  if (signals) {
    withScope(childScope, () => {
      for (const signal of signals) {
        signal(op);
      }
    });
  }
};

export const inMany = (
  scopes: Scope[],
  op: SignalOp,
  signal: IntersectionSignal,
) => {
  for (const scope of scopes) {
    withScope(scope, signal, op);
  }
};

const tagIdsByGlobal = new WeakMap<Scope["___global"], number>();
export function nextTagId({ $global }: Scope) {
  const id = tagIdsByGlobal.get($global) || 0;
  tagIdsByGlobal.set($global, id + 1);
  return "c" + $global.runtimeId + $global.renderId + id.toString(36);
}

export function inChild(childAccessor: Accessor, signal: ValueSignal) {
  return (valueOrOp: unknown | SignalOp) => {
    withScope($scope[childAccessor] as Scope, signal, valueOrOp);
  };
}

export function intersections(
  signals: IntersectionSignal[],
): IntersectionSignal {
  return (op) => {
    for (const signal of signals) {
      signal(op);
    }
  };
}

export function effect(
  id: string,
  fn: (scope: Scope, scopeAgain: Scope) => void,
) {
  register(id, fn);
  return () => queueEffect(fn);
}

export function setup(fn: (scope: Scope) => void) {
  return (
    accessor?: Accessor,
    scope = accessor ? $scope[accessor] : $scope,
  ) => {
    withScope(scope, fn, scope);
  };
}
