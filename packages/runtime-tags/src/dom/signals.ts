import { type Accessor, AccessorChar, type Scope } from "../common/types";
import type { RendererOrElementName } from "./renderer";
import { bindFunction } from "./scope";

export type Signal = ValueSignal | IntersectionSignal;

export type ValueSignal<T = unknown> = (
  scope: Scope,
  value: T,
  clean?: 1 | boolean,
) => void;

export type BoundValueSignal<T = unknown> = (
  value: T,
  clean?: 1 | boolean,
) => void;

export type IntersectionSignal = ((
  scope: Scope,
  clean?: 1 | boolean,
) => void) & {
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

export type BoundIntersectionSignal = ((clean?: 1 | boolean) => void) & {
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

export function initValue<T>(
  valueAccessor: Accessor,
  fn: ValueSignal<T>,
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
  return (scope, nextValue, clean) => {
    if (clean !== 1 && scope[markAccessor] === undefined) {
      fn(scope, nextValue, clean);
    }
  };
}

export function value<T>(
  valueAccessor: Accessor,
  render?: ValueSignal<T>,
  intersection?: IntersectionSignal,
  valueWithIntersection?: ValueSignal<any>,
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChar.Mark;
  return (scope, nextValue, clean) => {
    let creation: boolean | undefined;
    let currentMark: number;

    if (clean === 1) {
      currentMark = scope[markAccessor] = (scope[markAccessor] ?? 0) + 1;
    } else {
      creation = scope[markAccessor] === undefined;
      currentMark = scope[markAccessor] ||= 1;
    }

    if (currentMark === 1) {
      if (
        clean !== 1 &&
        (creation || !(clean ||= scope[valueAccessor] === nextValue))
      ) {
        scope[valueAccessor] = nextValue;
        render?.(scope, nextValue);
      } else {
        valueWithIntersection?.(scope, 0, clean);
      }
      intersection?.(scope, clean);
    }

    // closure needs this to be called after the fn
    // so it is marked until all downstream have been called
    if (clean !== 1) {
      scope[markAccessor]--;
    }
  };
}

let accessorId = 0;

export function intersection(
  count: number,
  fn: IntersectionSignal,
  intersection?: IntersectionSignal,
  valueWithIntersection?: ValueSignal,
): IntersectionSignal {
  const cleanAccessor = AccessorChar.Dynamic + accessorId++;
  const markAccessor = cleanAccessor + AccessorChar.Mark;
  return (scope, clean) => {
    let currentMark;
    if (clean === 1) {
      currentMark = scope[markAccessor] = (scope[markAccessor] ?? 0) + 1;
    } else {
      if (scope[markAccessor] === undefined) {
        scope[markAccessor] = count - 1;
        clean = undefined;
      } else {
        currentMark = scope[markAccessor]--;
        clean = scope[cleanAccessor] &&= clean;
      }
    }
    if (currentMark === 1) {
      if (clean) {
        valueWithIntersection?.(scope, 0, clean);
      } else {
        scope[cleanAccessor] = true;
        fn(scope, clean);
      }
      intersection?.(scope, clean);
    }
  };
}

const defaultGetOwnerScope = (scope: Scope) => scope._!;

export function closure<T>(
  ownerValueAccessor: Accessor | ((scope: Scope) => Accessor),
  fn: ValueSignal<T>,
  _getOwnerScope?: (scope: Scope) => Scope,
  intersection?: IntersectionSignal,
  valueWithIntersection?: ValueSignal<any>,
): IntersectionSignal {
  const cleanAccessor = AccessorChar.Dynamic + accessorId++;
  const markAccessor = cleanAccessor + 1;
  const getOwnerScope = _getOwnerScope || defaultGetOwnerScope;
  const getOwnerValueAccessor =
    typeof ownerValueAccessor === "function"
      ? ownerValueAccessor
      : () => ownerValueAccessor as Accessor;
  return (scope, clean) => {
    let ownerScope, ownerValueAccessor, currentMark;
    if (clean === 1) {
      currentMark = scope[markAccessor] = (scope[markAccessor] ?? 0) + 1;
    } else {
      if (scope[markAccessor] === undefined) {
        ownerScope = getOwnerScope(scope);
        ownerValueAccessor = getOwnerValueAccessor(scope);
        const ownerMark = ownerScope[ownerValueAccessor + AccessorChar.Mark];
        const ownerHasRun =
          ownerMark === undefined ? !ownerScope.___client : ownerMark === 0;
        scope[markAccessor] = (currentMark = ownerHasRun ? 1 : 2) - 1;
        clean = undefined;
      } else {
        currentMark = scope[markAccessor]--;
        clean = scope[cleanAccessor] &&= clean;
      }
    }
    if (currentMark === 1) {
      if (clean) {
        valueWithIntersection?.(scope, 0, clean);
      } else {
        scope[cleanAccessor] = false;
        ownerScope ??= getOwnerScope(scope);
        ownerValueAccessor ??= getOwnerValueAccessor(scope);
        fn?.(scope, ownerScope[ownerValueAccessor]);
      }
      intersection?.(scope, clean);
    }
  };
}

export function dynamicClosure<T>(
  ownerValueAccessor: Accessor | ((scope: Scope) => Accessor),
  fn: ValueSignal<T>,
  _getOwnerScope?: (scope: Scope) => Scope,
  intersection?: IntersectionSignal,
  valueWithIntersection?: ValueSignal,
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
    valueWithIntersection,
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
  const signal = (scope: Scope, clean?: boolean | 1) => {
    const childScope = scope[childAccessor] as Scope;
    for (const closureSignal of closureSignals) {
      closureSignal(childScope, clean);
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
  return (scope: Scope, clean?: boolean | 1) => {
    const subscribers = scope[
      subscribersAccessor
    ] as Set<BoundIntersectionSignal>;
    if (subscribers) {
      for (const subscriber of subscribers) {
        subscriber(clean);
      }
    }
  };
}

export function setTagVar(
  scope: Scope,
  childAccessor: Accessor,
  tagVarSignal: ValueSignal,
) {
  scope[childAccessor][AccessorChar.TagVariable] = bindFunction(
    scope,
    tagVarSignal as any,
  ) as BoundValueSignal;
}

export const tagVarSignal = (
  scope: Scope,
  value: unknown,
  clean?: boolean | 1,
) => scope[AccessorChar.TagVariable]?.(value, clean);

export const renderBodyClosures = (
  renderBody: RendererOrElementName | undefined,
  childScope: Scope,
  clean?: 1 | boolean,
) => {
  const signals = renderBody?.___closureSignals;
  if (signals) {
    for (const signal of signals) {
      signal(childScope, clean);
    }
  }
};

export const inMany = (
  scopes: Scope[],
  clean: 1 | boolean | undefined,
  signal: IntersectionSignal,
) => {
  for (const scope of scopes) {
    signal(scope, clean);
  }
};

let tagId = 0;
export function nextTagId() {
  return "c" + tagId++;
}

export function inChild(childAccessor: Accessor, signal: ValueSignal) {
  return (scope: Scope, _: unknown, clean?: 1 | boolean) => {
    signal(scope[childAccessor] as Scope, _, clean);
  };
}

export function intersections(
  signals: IntersectionSignal[],
): IntersectionSignal {
  return (scope, clean) => {
    for (const signal of signals) {
      signal(scope, clean);
    }
  };
}

export function values(signals: ValueSignal[]): ValueSignal {
  return (scope, _, clean) => {
    for (const signal of signals) {
      signal(scope, _, clean);
    }
  };
}
