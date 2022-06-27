import type { Scope } from "../common/types";
import { write } from "./scope";
import type { Renderer } from "./renderer";

export type Signal = {
  ___mark(scope: Scope): void;
  ___notify(scope: Scope, stale: boolean): void;
  ___apply(scope: Scope, data?: unknown): void;
}

type Accessor = string | number;

function markSubscribers(scope: Scope, subscribers: Signal[]) {
  for (const subscriber of subscribers) {
    subscriber.___mark(scope);
  }
}
function notifySubscribers(scope: Scope, stale: boolean, subscribers: Signal[]) {
  for (const subscriber of subscribers) {
    subscriber.___notify(scope, stale);
  }
}

function applyValue<S extends Scope, V>(scope: S, value: V, valueAccessor: Accessor, subscribers: Signal[], action?:(scope: S, value: V) => void) {
  const stale = write(scope, valueAccessor as number, value);
  if (stale) {
    action?.(scope, value);
  }
  notifySubscribers(scope, stale as any as boolean, subscribers);
}

export function setSource(scope: Scope, signal: Signal, value: unknown) {
  signal.___apply(scope, value);
}

export function source<S extends Scope, V>(valueAccessor: Accessor, subscribers: Signal[], action?: (scope: S, value: V) => void): Signal {
  const markAccessor = valueAccessor as number + 1;
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
    }
  }
}

export function destructureSources<S extends Scope, V>(subscribers: Signal[], action?: (scope: S, value: V) => void): Signal {
  return {
    ___mark(scope) {
      markSubscribers(scope, subscribers);
    },
    ___notify(scope, stale) {
      if (!stale) {
        notifySubscribers(scope, stale, subscribers);
      }
    },
    ___apply: action as (scope: Scope, data: unknown) => void
  }
}

// export function derivedSource?() {
// }

// export function controllableSource() {
// }

function subscriber<S extends Scope>(markAccessor: Accessor, subscribers: Signal[], defaultMark: number | ((scope: S) => number), apply:(scope: S) => void): Signal {
  const staleAccessor: Accessor = markAccessor as number + 1;
  return {
    ___mark(scope) {
      const mark = scope[markAccessor] = (scope[markAccessor] || 0) + 1;
      if (mark === 1) {
        markSubscribers(scope, subscribers)
      }
    },
    ___notify(scope, stale) {
      if (stale) {
        scope[staleAccessor] = true;
      }
      if (scope[markAccessor] === undefined) {
        scope[markAccessor] = typeof defaultMark === "number" ? defaultMark : defaultMark(scope as S);
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
    }
  }
}

export function derivation<S extends Scope, V>(valueAccessor: Accessor, defaultMark: number, subscribers: Signal[], compute: (scope: S) => V, action?:(scope: S, value: V) => void): Signal {
  const markAccessor: Accessor = valueAccessor as number + 1;
  return subscriber(markAccessor, subscribers, defaultMark, (scope: S) => {
    applyValue(scope, compute(scope), valueAccessor, subscribers, action);
  });
}

export function child<S extends Scope, V>(childAccessor: Accessor, valueAccessor: Accessor, defaultMark: number, subscribers: Signal[], compute: (scope: S) => V, action?:(scope: S, value: V) => void): Signal {
  const childDerivation = derivation(valueAccessor, defaultMark, subscribers, compute, action);
  return inChild(childDerivation, (scope: Scope) => scope[childAccessor]);
}

export function closure<S extends Scope, V>(markAccessor: Accessor, ownerLevel: number, providerValueAccessor: string | number, subscribers: Signal[], action?: (scope: S, value: V) => void): Signal {
  const providerMarkAccessor = providerValueAccessor as number + 1;
  const getDefaultMark = (scope: Scope) => {
    const ownerScope = getOwnerScope(scope, ownerLevel);
    const providerMark = ownerScope[providerMarkAccessor];
    const providerHasRun = (providerMark === undefined && !ownerScope.___client) || providerMark === 0;
    // we hit this branch when we're creating a new scope that closes over a value that has already run.
    // (it could have run on the server, earlier in setup, in the current batch, or in a previous batch)
    // the defaultMark includes this value, so we decrement our mark since the value could not.
    // (this scope did not exist at the time the value ran)
    return providerHasRun ? 1 : 2;
  }
  const apply = (scope: Scope) => {
    action?.(scope as S, getOwnerScope(scope, ownerLevel)[providerValueAccessor]);
    notifySubscribers(scope, true, subscribers);
  }
  return subscriber(markAccessor, subscribers, getDefaultMark, apply);
}

function getOwnerScope(scope: Scope, level: number) {
  let ownerScope = scope._!;
  for(let i = 1; i++ < level;) ownerScope = ownerScope._!;
  return ownerScope;
}

// function getOwnerScope(scope: Scope, level: number) {
//   for(; level--;) scope = scope._!;
//   return scope;
// }

function wrapSignal(wrapper: (methodName: "___mark" | "___notify" | "___apply") => (scope: Scope, arg?: any) => void) {
  return {
    ___mark: wrapper("___mark"),
    ___notify: wrapper("___notify"),
    ___apply: wrapper("___apply"),
  }
}

export function inChild<S extends Scope>(subscriber: Signal, getChildScope: (s: S) => Scope): Signal {
  return wrapSignal(methodName => (scope, extraArg) => 
    subscriber[methodName](getChildScope(scope as S), extraArg)
  );
}

export function inConditionalScope<S extends Scope>(subscriber: Signal, getConditionalScope: (s: S) => Scope | undefined /*, branch: Renderer */): Signal {
  return wrapSignal(methodName => (scope, extraArg) => {
    const conditionalScope = getConditionalScope(scope as S);
    if (conditionalScope) {
      subscriber[methodName](conditionalScope, extraArg);
    }
  });
}

export function inLoopScope<S extends Scope>(subscriber: Signal, getLoopScopes: (s: S) => Scope[]): Signal {
  return wrapSignal(methodName => (scope, extraArg) => {
    const loopScopes = getLoopScopes(scope as S) ?? [];
    for (const loopScope of loopScopes) {
      subscriber[methodName](loopScope, extraArg);
    }
  });
}

export function inRenderBody(renderBodyIndex: number, childScopeAccessor: number): Signal {
  return wrapSignal(methodName => (scope, extraArg) => {
    const childScope = scope[childScopeAccessor] as Scope;
    const signals = (scope[renderBodyIndex] as Renderer)?.___closureSignals ?? [];
    for (const signal of signals) {
      signal[methodName](childScope, extraArg);
    }
  });
}
