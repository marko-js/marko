import { Scope, AccessorChars, Accessor } from "../common/types";
import { bindFunction } from "./scope";
import type { RendererOrElementName } from "./renderer";

export type Signal = ValueSignal | IntersectionSignal;

export type ValueSignal<T = unknown> = (
  scope: Scope,
  value: T,
  clean?: 1 | boolean
) => void;

export type BoundValueSignal<T = unknown> = (
  value: T,
  clean?: 1 | boolean
) => void;

export type IntersectionSignal = ((
  scope: Scope,
  clean?: 1 | boolean
) => void) & {
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

export type BoundIntersectionSignal = ((clean?: 1 | boolean) => void) & {
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

export function value<T>(
  valueAccessor: Accessor,
  render?: ValueSignal<T>,
  intersection?: IntersectionSignal,
  valueWithIntersection?: ValueSignal<any>
): ValueSignal<T> {
  const markAccessor = valueAccessor + AccessorChars.MARK;
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
        (creation || !(clean &&= scope[valueAccessor] === nextValue))
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
  valueWithIntersection?: ValueSignal
): IntersectionSignal {
  const cleanAccessor = AccessorChars.DYNAMIC + accessorId++;
  const markAccessor = cleanAccessor + AccessorChars.MARK;
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
  valueWithIntersection?: ValueSignal<any>
): IntersectionSignal {
  const cleanAccessor = AccessorChars.DYNAMIC + accessorId++;
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
        const ownerMark = ownerScope[ownerValueAccessor + AccessorChars.MARK];
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
  valueWithIntersection?: ValueSignal
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
    valueWithIntersection
  );
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
  fn: ValueSignal<T>,
  intersection?: IntersectionSignal,
  valueWithIntersection?: ValueSignal
) {
  // TODO: might be viable as a reliable way to get a unique id
  // const dirtyAccessor = valueAccessor - 2;
  return dynamicClosure(
    (scope) => scope.___context![contextKey][1],
    value(valueAccessor, fn),
    (scope) => scope.___context![contextKey][0],
    intersection,
    valueWithIntersection
  );
}

export function childClosures(
  closureSignals: IntersectionSignal[],
  childAccessor: Accessor
) {
  const signal = (scope: Scope, clean?: boolean | 1) => {
    const childScope = scope[childAccessor] as Scope;
    for (const closureSignal of closureSignals) {
      closureSignal(childScope, clean);
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

export function dynamicSubscribers(valueAccessor: Accessor) {
  const subscribersAccessor = valueAccessor + AccessorChars.SUBSCRIBERS;
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
  tagVarSignal: ValueSignal
) {
  scope[childAccessor][AccessorChars.TAG_VARIABLE] = bindFunction(
    scope,
    tagVarSignal as any
  ) as BoundValueSignal;
}

export const tagVarSignal = (
  scope: Scope,
  value: unknown,
  clean?: boolean | 1
) => scope[AccessorChars.TAG_VARIABLE]?.(value, clean);

export const renderBodyClosures = (
  renderBody: RendererOrElementName | undefined,
  childScope: Scope,
  clean?: 1 | boolean
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
  signal: IntersectionSignal
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
  signals: IntersectionSignal[]
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
