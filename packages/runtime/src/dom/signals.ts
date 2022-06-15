import type { Scope } from "../common/types";
import { queue } from "./queue";
import type { Renderer } from "./renderer";

export type Signal = {
  ___mark: (scope: Scope) => void,
  ___apply: (scope: Scope, value?: unknown, stale?: boolean) => void
};

export type Source = [Signal["___apply"], (scope: Scope, value: unknown) => void]

const enum SignalOffsets {
  VALUE = 0,
  MARK = 1,
  STALE = 2
}

// TODO: should sources always have a defaultMark of 1?
export function source<S extends Scope, V>(valueAccessor: string | number, defaultMark: number, subscribers: Signal[], action?: (scope: S, value: V) => void): Source {
  const signal = derivation(valueAccessor, defaultMark, subscribers, undefined, action);

  return [signal.___apply, (scope, value) => queue(scope, signal, value)];
}

// TODO: should closures always have a defaultMark of 2? (maybe no because we can optimize it to be 1 in some cases?)
export function closure<S extends Scope, V>(valueAccessor: string | number, defaultMark: number, ownerLevel: number, ownerValueAccessor: string | number, subscribers: Signal[], action?: (scope: S, value: V) => void): Signal {
  // TODO: consider passing a getter for the value instead of undefined
  const signal = derivation(valueAccessor, defaultMark, subscribers, undefined, action);
  const apply = signal.___apply;
  const markAccessor = valueAccessor as number + SignalOffsets.MARK;
  const ownerMarkAccessor = ownerValueAccessor as number + SignalOffsets.MARK;
  signal.___apply = (scope: Scope, value?: unknown, stale?: boolean) => {
    let owner = scope._!;
    for(let i = 1; i < ownerLevel; i++) owner = owner._!;
    if (scope[markAccessor] === undefined) {
      const ownerMark = owner[ownerMarkAccessor];
      if ((ownerMark === undefined && !owner.___client) || ownerMark === 0) {
        // we hit this branch when we're creating a new scope that closes over a value that has already run.
        // (it could have run on the server, earlier in setup, in the current batch, or in a previous batch)
        // the defaultMark includes this value, so we decrement our mark since the value could not.
        // (this scope did not exist at the time the value ran)
        scope[markAccessor] = 1;
      }
    }
    apply(scope, owner[ownerValueAccessor], stale);
  };
  return signal;
}

export function child<S extends Scope, V>(childAccessor: string | number, defaultMark: number, valueAccessor: number, subscribers: Signal[], compute?: (scope: S) => V, action?: (scope: S, value: V) => void): Signal {
  const signal = derivation(valueAccessor, defaultMark, subscribers, compute, action);
  return {
    ___mark(scope: Scope) {
      signal.___mark(scope[childAccessor] as Scope);
    },
    ___apply(scope: Scope, value?: unknown, stale?: boolean) {
      signal.___apply(scope[childAccessor] as Scope, value, stale);
    }
  }
}

export function derivation<S extends Scope, V>(valueAccessor: string | number, defaultMark: number, subscribers: Signal[], compute?: (scope: S) => V, action?: (scope: S, value: V) => void): Signal {
  const markAccessor = valueAccessor as number + SignalOffsets.MARK;
  const staleAccessor = valueAccessor as number + SignalOffsets.STALE;
  return {
    ___mark(scope) {
      const mark = scope[markAccessor] = (scope[markAccessor] as number || 0) + 1;
      if (mark === 1) {
        for (const subscriber of subscribers) {
          subscriber.___mark(scope);
        }
      }
    },
    ___apply(scope: Scope, value?: unknown, stale = true) {
      if (stale) {
        scope[staleAccessor] = true;
      }
      if (scope[markAccessor] === undefined) {
        scope[markAccessor] = defaultMark;
      }
      if (scope[markAccessor] === 1) {
        let downstreamStale = false;
        if (scope[staleAccessor]) {
          scope[staleAccessor] = false;
          value = compute ? compute(scope as S) : value;
          if (scope[valueAccessor] !== value) {
            scope[valueAccessor] = value;
            action?.(scope as S, value as V);
            downstreamStale = true
          }
        }
        for (const subscriber of subscribers) {
          subscriber.___apply(scope, undefined, downstreamStale);
        }
      }
      scope[markAccessor]--;
    }
  }
}

// const [_setCount, _queueCount] = source("count", [inDynamicScope(_apply$forBody_count, "for")]);
// const _apply_start = source("start", [inRenderBody("renderBody")], (scope, start) => {
//     setLoopFromTo(scope, "for", start, start+1)
// });
// const _apply$forBody_count = closure("forBody_count", 1, "count", [], (scope, count) => {
//     data(scope.spanText, count)
// });

// function setup(scope) {
//   _setCount(scope, 0);
// }

// const _forBody = renderer({
//   closures: [_apply$forBody_count]
// })

export function inChild<S extends Scope>(subscriber: Signal, getChildScope: (s: S) => Scope): Signal {
  return {
    ___mark(scope: Scope) {
      subscriber.___mark(getChildScope(scope as S));
    },
    ___apply(scope: Scope, value?: unknown, stale?: boolean) {
      subscriber.___apply(getChildScope(scope as S), value, stale);
    }
  }
}

export function inConditionalScope<S extends Scope>(subscriber: Signal, getConditionalScope: (s: S) => Scope | undefined /*, branch: Renderer */): Signal {
  return {
    ___mark(scope: Scope) {
      const conditionalScope = getConditionalScope(scope as S);
      if (conditionalScope) {
        subscriber.___mark(conditionalScope);
      }
    },
    ___apply(scope: Scope, value?: unknown, stale?: boolean) {
      const conditionalScope = getConditionalScope(scope as S);
      if (conditionalScope) {
        subscriber.___apply(conditionalScope, value, stale);
      }
    }
  }
}

export function inLoopScope<S extends Scope>(subscriber: Signal, getLoopScopes: (s: S) => Scope[]): Signal {
  return {
    ___mark(scope: Scope) {
      const loopScopes = getLoopScopes(scope as S) ?? [];
      for (const loopScope of loopScopes) {
        subscriber.___mark(loopScope);
      }
    },
    ___apply(scope: Scope, value?: unknown, stale?: boolean) {
      const loopScopes = getLoopScopes(scope as S) ?? [];
      for (const loopScope of loopScopes) {
        subscriber.___apply(loopScope, value, stale);
      }
    }
  }
}

export function inRenderBody(renderBodyIndex: number, childScopeAccessor: number): Signal {
  return {
    ___mark(scope: Scope) {
      const childScope = scope[childScopeAccessor] as Scope;
      const signals = (scope[renderBodyIndex] as Renderer)?.___closureSignals ?? [];
      for (const signal of signals) {
        signal.___mark(childScope);
      }
    },
    ___apply(scope: Scope) {
      const childScope = scope[childScopeAccessor] as Scope;
      const signals = (scope[renderBodyIndex] as Renderer)?.___closureSignals ?? [];
      for (const signal of signals) {
        signal.___apply(childScope, false);
      }
    }
  }
}

// export function derivedSource(source:) {

// }

// export function controllableSource(source) {
  
// }