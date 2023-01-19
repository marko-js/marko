import { Scope, AccessorChars } from "../common/types";
import { bindSignal, getOwnerScope, write } from "./scope";
import type { Renderer } from "./renderer";

export type Signal = {
  ___mark(scope: Scope): void;
  ___notify(scope: Scope, stale: boolean): void;
  ___apply(scope: Scope, data?: unknown): void;
  ___subscribe?(scope: Scope): void;
  ___unsubscribe?(scope: Scope): void;
};

let accessorId = 0;

type Accessor = string | number;

function markSubscribers(scope: Scope, subscribers: Signal[]) {
  for (const subscriber of subscribers) {
    subscriber.___mark(scope);
  }
}
function notifySubscribers(
  scope: Scope,
  stale: boolean,
  subscribers: Signal[]
) {
  for (const subscriber of subscribers) {
    subscriber.___notify(scope, stale);
  }
}

function applyValue<S extends Scope, V>(
  scope: S,
  value: V,
  valueAccessor: Accessor,
  subscribers: Signal[],
  action?: (scope: S, value: V) => void
) {
  const stale = write(scope, valueAccessor as number, value);
  if (stale) {
    action?.(scope, value);
  }
  notifySubscribers(scope, stale as any as boolean, subscribers);
}

export function setSource(scope: Scope, signal: Signal, value: unknown) {
  signal.___apply(scope, value);
}

export function notifySignal(scope: Scope, signal: Signal) {
  signal.___notify(scope, true);
}

export function source<S extends Scope, V>(
  valueAccessor: Accessor,
  subscribers: Signal[],
  action?: (scope: S, value: V) => void
): Signal {
  const markAccessor = valueAccessor + AccessorChars.MARK;
  return {
    ___mark(scope) {
      scope[markAccessor] = 1;
      markSubscribers(scope, subscribers);
    },
    ___notify(scope, stale) {
      if (!stale) {
        notifySubscribers(scope, stale, subscribers);
      }
    },
    ___apply(scope, data) {
      scope[markAccessor] = 1;
      applyValue(scope as S, data as V, valueAccessor, subscribers, action);
      scope[markAccessor] = 0;
    },
  };
}

export function destructureSources<S extends Scope, V>(
  subscribers: Signal[],
  action?: (scope: S, value: V) => void
): Signal {
  return {
    ___mark(scope) {
      markSubscribers(scope, subscribers);
    },
    ___notify(scope, stale) {
      if (!stale) {
        notifySubscribers(scope, stale, subscribers);
      }
    },
    ___apply: action as (scope: Scope, data: unknown) => void,
  };
}

// export function derivedSource?() {
// }

// export function controllableSource() {
// }

function baseSubscriber<S extends Scope>(
  accessorId: Accessor,
  subscribers: Signal[],
  defaultMark: number | ((scope: S) => number),
  apply: (scope: S) => void
): Signal {
  const markAccessor: Accessor = accessorId + AccessorChars.MARK;
  const staleAccessor: Accessor = accessorId + AccessorChars.STALE;
  return {
    ___mark(scope) {
      const mark = (scope[markAccessor] = (scope[markAccessor] || 0) + 1);
      if (mark === 1) {
        markSubscribers(scope, subscribers);
      }
    },
    ___notify(scope, stale) {
      if (stale) {
        scope[staleAccessor] = true;
      }
      if (scope[markAccessor] === undefined) {
        scope[markAccessor] =
          typeof defaultMark === "number"
            ? defaultMark
            : defaultMark(scope as S);
        scope[staleAccessor] = true; // TODO: figure out if this helps for closures
      }
      if (scope[markAccessor] === 1) {
        if (scope[staleAccessor]) {
          scope[staleAccessor] = false;
          apply(scope as S);
        } else {
          notifySubscribers(scope, false, subscribers);
        }
      }
      scope[markAccessor]--;
    },
    ___apply() {
      if (MARKO_DEBUG) {
        throw new Error("Derivations should not be directly applied");
      }
    },
  };
}

export function subscriber<S extends Scope>(
  subscribers: Signal[],
  defaultMark: number,
  apply: (scope: S) => void
): Signal {
  return baseSubscriber(
    AccessorChars.DYNAMIC + accessorId++,
    subscribers,
    defaultMark,
    apply
  );
}

export function derivation<S extends Scope, V>(
  valueAccessor: Accessor,
  defaultMark: number,
  subscribers: Signal[],
  compute: (scope: S) => V,
  action?: (scope: S, value: V) => void
): Signal {
  return baseSubscriber(valueAccessor, subscribers, defaultMark, (scope: S) => {
    applyValue(scope, compute(scope), valueAccessor, subscribers, action);
  });
}

export function child<S extends Scope, V>(
  childAccessor: Accessor,
  valueAccessor: Accessor,
  defaultMark: number,
  subscribers: Signal[],
  compute: (scope: S) => V,
  action?: (scope: S, value: V) => void
): Signal {
  const childDerivation = derivation(
    valueAccessor,
    defaultMark,
    subscribers,
    compute,
    action
  );
  return inChild(childDerivation, childAccessor);
}

export function closure<S extends Scope, V>(
  ownerLevel: number | ((scope: Scope) => Scope),
  providerAccessor: Accessor | ((scope: Scope) => Accessor),
  subscribers: Signal[],
  action?: (scope: S, value: V) => void
): Signal {
  const getOwner =
    typeof ownerLevel === "function"
      ? ownerLevel
      : (scope: Scope) => getOwnerScope(scope, ownerLevel);
  const getProviderAccessor =
    typeof providerAccessor === "function"
      ? providerAccessor
      : () => providerAccessor;

  const getDefaultMark = (scope: Scope) => {
    const ownerScope = getOwner(scope);
    const providerMarkAccessor =
      getProviderAccessor(scope) + AccessorChars.MARK;
    const providerMark = ownerScope[providerMarkAccessor];
    const providerHasRun =
      (providerMark === undefined && !ownerScope.___client) ||
      providerMark === 0;
    // we hit this branch when we're creating a new scope that closes over a value that has already run.
    // (it could have run on the server, earlier in setup, in the current batch, or in a previous batch)
    // the defaultMark includes this value, so we decrement our mark since the value could not.
    // (this scope did not exist at the time the value ran)
    return providerHasRun ? 1 : 2;
  };
  const apply = (scope: Scope) => {
    const ownerScope = getOwner(scope);
    const providerValueAccessor = getProviderAccessor(scope);
    action?.(scope as S, ownerScope[providerValueAccessor]);
    notifySubscribers(scope, true, subscribers);
  };
  return baseSubscriber(
    AccessorChars.DYNAMIC + accessorId++,
    subscribers,
    getDefaultMark,
    apply
  );
}

export function dynamicClosure<S extends Scope, V>(
  ownerLevel: number | ((scope: Scope) => Scope),
  providerAccessor: Accessor | ((scope: Scope) => Accessor),
  subscribers: Signal[],
  action?: (scope: S, value: V) => void
): Signal {
  const getOwner =
    typeof ownerLevel === "function"
      ? ownerLevel
      : (scope: Scope) => getOwnerScope(scope, ownerLevel);
  const getProviderAccessor =
    typeof providerAccessor === "function"
      ? providerAccessor
      : () => providerAccessor;

  const signal = {
    ...closure(ownerLevel, providerAccessor, subscribers, action),
    ___subscribe(scope: Scope) {
      const ownerScope = getOwner(scope);
      const providerSubscriptionsAccessor =
        getProviderAccessor(scope) + AccessorChars.SUBSCRIBERS;
      ownerScope[providerSubscriptionsAccessor] ??= new Set();
      ownerScope[providerSubscriptionsAccessor].add(bindSignal(scope, signal));
    },
    ___unsubscribe(scope: Scope) {
      const ownerScope = getOwner(scope);
      const providerSubscriptionsAccessor =
        getProviderAccessor(scope) + AccessorChars.SUBSCRIBERS;
      (ownerScope[providerSubscriptionsAccessor] as Set<Signal>)?.delete(
        bindSignal(scope, signal)
      );
    },
  };

  return signal;
}

export function dynamicSubscribers(valueAccessor: Accessor) {
  const subscriptionsAccessor = valueAccessor + AccessorChars.SUBSCRIBERS;
  return wrapSignal((methodName) => (scope, extraArg) => {
    const subscribers = scope[subscriptionsAccessor];
    if (subscribers) {
      for (const subscriber of subscribers) {
        subscriber[methodName](scope, extraArg);
      }
    }
  });
}

export function contextClosure<S extends Scope, V>(
  valueAccessor: Accessor,
  contextKey: string,
  subscribers: Signal[],
  action?: (scope: S, value: V) => void
): Signal {
  return dynamicClosure(
    (scope) => scope.___context![contextKey][0],
    (scope) => scope.___context![contextKey][1],
    subscribers,
    (scope: Scope, value: V) => {
      scope[valueAccessor] = value;
      action?.(scope as S, value);
    }
  );
}

// function getOwnerScope(scope: Scope, level: number) {
//   for(; level--;) scope = scope._!;
//   return scope;
// }

export function wrapSignal(
  wrapper: (
    methodName: "___mark" | "___notify" | "___apply"
  ) => (scope: Scope, arg?: any) => void
) {
  return {
    ___mark: wrapper("___mark"),
    ___notify: wrapper("___notify"),
    ___apply: wrapper("___apply"),
  };
}

export function setTagVar(
  scope: Scope,
  childAccessor: Accessor,
  tagVarSignal: Signal
) {
  scope[childAccessor][AccessorChars.TAG_VARIABLE] = bindSignal(
    scope,
    tagVarSignal
  );
}

export const tagVarSignal = wrapSignal(
  (methodName) => (scope, extraArg) =>
    scope[AccessorChars.TAG_VARIABLE]?.[methodName](null, extraArg)
);

export function wrapSignalWithSubscription(
  wrapper: (
    methodName:
      | "___mark"
      | "___notify"
      | "___apply"
      | "___subscribe"
      | "___unsubscribe"
  ) => (scope: Scope, arg?: any) => void
) {
  return {
    ...wrapSignal(wrapper),
    ___subscribe: wrapper("___subscribe"),
    ___unsubscribe: wrapper("___unsubscribe"),
  };
}

export function inChild(
  subscriber: Signal,
  childScopeAccessor: Accessor
): Signal {
  return wrapSignal(
    (methodName) => (scope, extraArg) =>
      subscriber[methodName](scope[childScopeAccessor], extraArg)
  );
}

export function inChildMany(
  subscribers: Signal[],
  childScopeAccessor: Accessor
): Signal {
  return wrapSignalWithSubscription((methodName) => (scope, extraArg) => {
    const childScope = scope[childScopeAccessor] as Scope;
    for (const signal of subscribers) {
      signal[methodName]?.(childScope, extraArg);
    }
  });
}

export function inRenderBody(
  renderBodyIndex: Accessor,
  childScopeAccessor: Accessor
): Signal {
  return wrapSignal((methodName) => (scope, extraArg) => {
    const childScope = scope[childScopeAccessor] as Scope;
    const signals =
      (scope[renderBodyIndex] as Renderer)?.___closureSignals ?? [];
    for (const signal of signals) {
      signal[methodName](childScope, extraArg);
    }
  });
}

let tagId = 0;
export function nextTagId() {
  return "c" + tagId++;
}
