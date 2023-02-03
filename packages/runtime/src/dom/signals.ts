import { Scope, AccessorChars, Accessor } from "../common/types";
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
  isCreate: boolean,
  action?: (scope: S, value: V) => void
) {
  const stale = write(scope, valueAccessor as number, value);
  if (stale || isCreate) {
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
  const signal: Signal = {
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
      const isCreate = scope[markAccessor] === undefined;
      scope[markAccessor] = 1;
      applyValue(
        scope as S,
        data as V,
        valueAccessor,
        subscribers,
        isCreate,
        action
      );
      scope[markAccessor] = 0;
    },
  };

  if (MARKO_DEBUG) {
    setDebugInfo(signal, "source", {
      valueAccessor,
      markAccessor,
      subscribers,
      action,
    });
  }

  return signal;
}

export function destructureSources<S extends Scope, V>(
  subscribers: Signal[],
  action?: (scope: S, value: V) => void
): Signal {
  const signal: Signal = {
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

  if (MARKO_DEBUG) {
    setDebugInfo(signal, "destructureSources", { subscribers, action });
  }

  return signal;
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
  const signal: Signal = {
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

  if (MARKO_DEBUG) {
    setDebugInfo(signal, "baseSubscriber", {
      accessorId,
      markAccessor,
      staleAccessor,
      subscribers,
      defaultMark,
      apply,
    });
  }

  return signal;
}

export function subscriber<S extends Scope>(
  subscribers: Signal[],
  defaultMark: number,
  apply: (scope: S) => void
): Signal {
  const signal: Signal = baseSubscriber(
    AccessorChars.DYNAMIC + accessorId++,
    subscribers,
    defaultMark,
    apply
  );

  if (MARKO_DEBUG) {
    setDebugInfo(signal, "subscriber", { subscribers, defaultMark, apply });
  }

  return signal;
}

export function derivation<S extends Scope, V>(
  valueAccessor: Accessor,
  defaultMark: number,
  subscribers: Signal[],
  compute: (scope: S) => V,
  action?: (scope: S, value: V) => void
): Signal {
  const signal = baseSubscriber(
    valueAccessor,
    subscribers,
    defaultMark,
    (scope: S) => {
      applyValue(
        scope,
        compute(scope),
        valueAccessor,
        subscribers,
        false, // TODO: This should be true on creation
        action
      );
    }
  );
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "derivation", {
      valueAccessor,
      defaultMark,
      subscribers,
      compute,
      action,
    });
  }
  return signal;
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
  const signal: Signal = inChild(childDerivation, childAccessor);
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "child", {
      childAccessor,
      valueAccessor,
      defaultMark,
      subscribers,
      compute,
      action,
    });
  }
  return signal;
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
  const signal: Signal = baseSubscriber(
    AccessorChars.DYNAMIC + accessorId++,
    subscribers,
    getDefaultMark,
    apply
  );

  if (MARKO_DEBUG) {
    setDebugInfo(signal, "closure", {
      ownerLevel,
      providerAccessor,
      subscribers,
      action,
    });
  }
  return signal;
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

  if (MARKO_DEBUG) {
    setDebugInfo(signal, "derivation", {
      ownerLevel,
      providerAccessor,
      subscribers,
      action,
    });
  }

  return signal;
}

export function dynamicSubscribers(valueAccessor: Accessor) {
  const subscriptionsAccessor = valueAccessor + AccessorChars.SUBSCRIBERS;
  const signal: Signal = wrapSignal((methodName) => (scope, extraArg) => {
    const subscribers = scope[subscriptionsAccessor];
    if (subscribers) {
      for (const subscriber of subscribers) {
        subscriber[methodName](scope, extraArg);
      }
    }
  });
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "dynamicSubscribers", {
      valueAccessor,
      subscriptionsAccessor,
    });
  }
  return signal;
}

export function contextClosure<S extends Scope, V>(
  valueAccessor: Accessor,
  contextKey: string,
  subscribers: Signal[],
  action?: (scope: S, value: V) => void
): Signal {
  const signal: Signal = dynamicClosure(
    (scope) => scope.___context![contextKey][0],
    (scope) => scope.___context![contextKey][1],
    subscribers,
    (scope: Scope, value: V) => {
      scope[valueAccessor] = value;
      action?.(scope as S, value);
    }
  );
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "contextClosure", {
      valueAccessor,
      contextKey,
      subscribers,
      action,
    });
  }
  return signal;
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
  const signal: Signal = {
    ___mark: wrapper("___mark"),
    ___notify: wrapper("___notify"),
    ___apply: wrapper("___apply"),
  };
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "wrapSignal", { wrapper });
  }
  return signal;
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

if (MARKO_DEBUG) {
  setDebugInfo(tagVarSignal, "tagVar", {});
}

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
  const signal: Signal = {
    ...wrapSignal(wrapper),
    ___subscribe: wrapper("___subscribe"),
    ___unsubscribe: wrapper("___unsubscribe"),
  };
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "wrapSignalWithSubscription", { wrapper });
  }
  return signal;
}

export function inChild(
  subscriber: Signal,
  childScopeAccessor: Accessor
): Signal {
  const signal: Signal = wrapSignal(
    (methodName) => (scope, extraArg) =>
      subscriber[methodName](scope[childScopeAccessor], extraArg)
  );
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "inChild", { subscriber, childScopeAccessor });
  }
  return signal;
}

export function inChildMany(
  subscribers: Signal[],
  childScopeAccessor: Accessor
): Signal {
  const signal: Signal = wrapSignalWithSubscription(
    (methodName) => (scope, extraArg) => {
      const childScope = scope[childScopeAccessor] as Scope;
      for (const signal of subscribers) {
        signal[methodName]?.(childScope, extraArg);
      }
    }
  );
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "inChildMany", { subscribers, childScopeAccessor });
  }
  return signal;
}

export function inRenderBody(
  renderBodyIndex: Accessor,
  childScopeAccessor: Accessor
): Signal {
  const signal: Signal = wrapSignal((methodName) => (scope, extraArg) => {
    const childScope = scope[childScopeAccessor] as Scope;
    const signals =
      (scope[renderBodyIndex] as Renderer)?.___closureSignals ?? [];
    for (const signal of signals) {
      signal[methodName](childScope, extraArg);
    }
  });
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "inRenderBody", {
      renderBodyIndex,
      childScopeAccessor,
    });
  }
  return signal;
}

export function dynamicAttrsProxy(nodeAccessor: Accessor): Signal {
  const signal: Signal = wrapSignal((methodName) => (scope, extraArg) => {
    const renderer = scope[nodeAccessor + AccessorChars.COND_RENDERER] as
      | Renderer
      | undefined;
    const childScope = scope[nodeAccessor + AccessorChars.COND_SCOPE] as Scope;

    renderer?.___attrs?.[methodName](childScope, extraArg);
  });
  if (MARKO_DEBUG) {
    setDebugInfo(signal, "dynamicAttrsProxy", {
      nodeAccessor,
    });
  }
  return signal;
}

let tagId = 0;
export function nextTagId() {
  return "c" + tagId++;
}

function setDebugInfo(
  signal: Signal,
  type: string,
  data: Record<string, unknown>
) {
  const signalCopy = { ...signal };
  for (const key in signal) {
    delete (signal as any)[key];
  }
  Object.setPrototypeOf(
    signal,
    new Function(`return new (class ${type} {})()`)()
  );
  Object.assign(signal, data, signalCopy, data);
}
