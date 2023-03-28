import { Scope, AccessorChars, Accessor } from "../common/types";
import { bindFunction } from "./scope";
import type { RendererOrElementName } from "./renderer";

export type Signal = ValueSignal | IntersectionSignal;

export type ValueSignal<T = unknown> = (
  scope: Scope,
  value: T,
  dirty?: null | boolean
) => void;

export type BoundValueSignal<T = unknown> = (
  value: T,
  dirty?: null | boolean
) => void;

export type IntersectionSignal = ((
  scope: Scope,
  dirty?: null | boolean
) => void) & {
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

export type BoundIntersectionSignal = ((dirty?: null | boolean) => void) & {
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

export function value<T>(
  valueAccessor: Accessor,
  fn: ValueSignal<T>
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChars.MARK;
  const alwaysCall = fn.length === 3;
  return (scope, nextValue, dirty = true) => {
    let creation, currentMark;
    if (dirty === null) {
      currentMark = scope[markAccessor] = (scope[markAccessor] ?? 0) + 1;
    } else {
      creation = scope[markAccessor] === undefined;
      currentMark = scope[markAccessor] ||= 1;
    }
    if (currentMark === 1) {
      if (
        creation ||
        alwaysCall ||
        (dirty &&= scope[valueAccessor] !== nextValue)
      ) {
        scope[valueAccessor] = nextValue;
        fn(scope, nextValue, dirty);
      }
    }
    if (dirty !== null) {
      // closure needs this to be called after the fn
      // so it is marked until all downstream have been called
      scope[markAccessor]--;
    }
  };
}

let accessorId = 0;

export function intersection(
  count: number,
  fn: IntersectionSignal
): IntersectionSignal {
  const dirtyAccessor = AccessorChars.DYNAMIC + accessorId++;
  const markAccessor = dirtyAccessor + AccessorChars.MARK;
  const alwaysCall = fn.length === 2;
  return (scope, dirty = true) => {
    let currentMark;
    if (dirty === null) {
      currentMark = scope[markAccessor] = (scope[markAccessor] ?? 0) + 1;
    } else {
      if (scope[markAccessor] === undefined) {
        scope[markAccessor] = count - 1;
        scope[dirtyAccessor] = true;
      } else {
        currentMark = scope[markAccessor]--;
        dirty = scope[dirtyAccessor] ||= dirty;
      }
    }
    if (currentMark === 1) {
      if (dirty || alwaysCall) {
        scope[dirtyAccessor] = false;
        fn(scope, dirty);
      }
    }
  };
}

export function closure<T>(
  ownerValueAccessor: Accessor | ((scope: Scope) => Accessor),
  fn: ValueSignal<T>,
  getOwnerScope = (scope: Scope) => scope._!
): IntersectionSignal {
  const dirtyAccessor = AccessorChars.DYNAMIC + accessorId++;
  const markAccessor = dirtyAccessor + 1;
  const alwaysCall = fn.length === 3;
  const getOwnerValueAccessor =
    typeof ownerValueAccessor === "function"
      ? ownerValueAccessor
      : () => ownerValueAccessor as Accessor;
  return (scope, dirty = true) => {
    let ownerScope, ownerValueAccessor, currentMark;
    if (dirty === null) {
      currentMark = scope[markAccessor] = (scope[markAccessor] ?? 0) + 1;
    } else {
      if (scope[markAccessor] === undefined) {
        ownerScope = getOwnerScope(scope);
        ownerValueAccessor = getOwnerValueAccessor(scope);
        const ownerMark = ownerScope[ownerValueAccessor + AccessorChars.MARK];
        const ownerHasRun =
          ownerMark === undefined ? !ownerScope.___client : ownerMark === 0;
        scope[markAccessor] = (currentMark = ownerHasRun ? 1 : 2) - 1;
        scope[dirtyAccessor] = true;
      } else {
        currentMark = scope[markAccessor]--;
        dirty = scope[dirtyAccessor] ||= dirty;
      }
    }
    if (currentMark === 1) {
      if (dirty || alwaysCall) {
        scope[dirtyAccessor] = false;
        ownerScope ??= getOwnerScope(scope);
        ownerValueAccessor ??= getOwnerValueAccessor(scope);
        fn(scope, dirty && ownerScope[ownerValueAccessor], dirty);
      }
    }
  };
}

export function dynamicClosure<T>(
  ownerValueAccessor: Accessor | ((scope: Scope) => Accessor),
  fn: ValueSignal<T>,
  getOwnerScope = (scope: Scope) => scope._!
): IntersectionSignal {
  const getOwnerValueAccessor =
    typeof ownerValueAccessor === "function"
      ? ownerValueAccessor
      : () => ownerValueAccessor as string;
  const signalFn = closure(getOwnerValueAccessor, fn, getOwnerScope);
  return Object.assign(signalFn, {
    ___subscribe(scope: Scope) {
      const ownerScope = getOwnerScope(scope);
      const providerSubscriptionsAccessor =
        getOwnerValueAccessor(scope) + AccessorChars.SUBSCRIBERS;
      ownerScope[providerSubscriptionsAccessor] ??= new Set();
      ownerScope[providerSubscriptionsAccessor].add(
        bindFunction(scope, signalFn as any)
      );
    },
    ___unsubscribe(scope: Scope) {
      const ownerScope = getOwnerScope(scope);
      const providerSubscriptionsAccessor =
        getOwnerValueAccessor(scope) + AccessorChars.SUBSCRIBERS;
      ownerScope[providerSubscriptionsAccessor]?.delete(
        bindFunction(scope, signalFn as any)
      );
    },
  });
}

export function contextClosure<T>(
  valueAccessor: Accessor,
  contextKey: string,
  fn: ValueSignal<T>
) {
  // TODO: might be viable as a reliable way to get a unique id
  // const dirtyAccessor = valueAccessor - 2;
  return dynamicClosure(
    (scope) => scope.___context![contextKey][1],
    value(valueAccessor, fn),
    (scope) => scope.___context![contextKey][0]
  );
}

export function childClosures(
  closureSignals: IntersectionSignal[],
  childAccessor: Accessor
) {
  const signal = (scope: Scope, dirty = true) => {
    const childScope = scope[childAccessor] as Scope;
    for (const closureSignal of closureSignals) {
      closureSignal(childScope, dirty);
    }
  };
  return Object.assign(signal, {
    ___subscribe(scope: Scope) {
      const childScope = scope[childAccessor] as Scope;
      for (const closureSignal of closureSignals) {
        closureSignal.___subscribe?.(childScope);
      }
    },
    ___unsubscribe(scope: Scope) {
      const childScope = scope[childAccessor] as Scope;
      for (const closureSignal of closureSignals) {
        closureSignal.___unsubscribe?.(childScope);
      }
    },
  });
}

export function dynamicSubscribers(
  subscribers: BoundIntersectionSignal[],
  dirty = true
) {
  if (subscribers) {
    for (const subscriber of subscribers) {
      subscriber(dirty);
    }
  }
}

export function setTagVar(
  scope: Scope,
  childAccessor: Accessor,
  tagVarSignal: ValueSignal
) {
  scope[childAccessor][AccessorChars.TAG_VARIABLE] = bindFunction(
    scope,
    tagVarSignal as any
  ) as BoundValueSignal;
}

export const tagVarSignal = (scope: Scope, value: unknown, dirty = true) =>
  scope[AccessorChars.TAG_VARIABLE]?.(value, dirty);

export const renderBodyClosures = (
  renderBody: RendererOrElementName | undefined,
  childScope: Scope,
  dirty: null | boolean = true
) => {
  const signals = renderBody?.___closureSignals;
  if (signals) {
    for (const signal of signals) {
      signal(childScope, dirty);
    }
  }
};

export const inMany = (
  scopes: Scope[],
  dirty: null | boolean,
  signal: IntersectionSignal
) => {
  for (const scope of scopes) {
    signal(scope, dirty);
  }
};

let tagId = 0;
export function nextTagId() {
  return "c" + tagId++;
}
