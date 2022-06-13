import type { Scope } from "../common/types";
import { queue } from "./queue";

export type Signal<S extends Scope = Scope, V = unknown> = {
  ___mark: (scope: S) => void,
  ___apply: (scope: S, value?: V, stale?: boolean) => void
};

export type Source<S extends Scope = Scope, V = unknown> = [Signal<S, V>["___apply"], (scope: S, value: V) => void]

const enum SignalOffsets {
  VALUE = 0,
  MARK = 1,
  STALE = 2
}

// TODO: should sources always have a defaultMark of 1?
export function source<S extends Scope = Scope, V = unknown>(accessor: number, defaultMark: number, subscribers: Signal[], action?: (scope: S, value: V) => void): Source<S, V> {
  const signal = derivation<S, V>(accessor, defaultMark, subscribers, undefined, action);

  return [signal.___apply, (scope, value) => queue<S, V>(scope, signal, value)];
}

// TODO: should closures always have a defaultMark of 2? (maybe no because we can optimize it to be 1 in some cases?)
export function closure<S extends Scope = Scope, V = unknown>(valueAccessor: number, defaultMark: number, ownerLevel: number, ownerValueAccessor: number, subscribers: Signal[], action?: (scope: S, value: V) => void): Signal<S, V> {
  // TODO: consider passing a getter for the value instead of undefined
  const signal = derivation(valueAccessor, defaultMark, subscribers, undefined, action);
  const apply = signal.___apply;
  const markAccessor = valueAccessor + SignalOffsets.MARK;
  const ownerMarkAccessor = ownerValueAccessor + SignalOffsets.MARK;
  signal.___apply = (scope: S, value?: V, stale = true) => {
    let owner = scope._!;
    for(let i = 1; i < ownerLevel; i++) owner = owner._!;
    if (scope[markAccessor] === undefined) {
      const ownerMark = owner[ownerMarkAccessor];
      if ((ownerMark === undefined && !owner.___client) || ownerMark === 0) {
        // we hit this branch when we're creating a new scope that closes over a value that has already run.
        // (it could have run on the server, earlier in setup, in the current batch, or in a previous batch)
        // the defaultMark includes this value, so we decrement our mark since the value could not.
        // (this scope did not exist at the time the value ran)
        // decrementMark(scope, accessor + SignalOffsets.MARK, defaultMark);
        // TODO: if closure defaultMark is always 2,
        scope[markAccessor] = 1;
      }
    }
    apply(scope, owner[ownerValueAccessor] as V, stale);
  };
  return signal;
}

export function child<S extends Scope = Scope, V = unknown>(childAccessor: number, defaultMark: number, valueAccessor: number, subscribers: Signal[], compute?: (scope: Scope) => V, action?: (scope: Scope, value: V) => void): Signal<S, V> {
  const signal = derivation(valueAccessor, defaultMark, subscribers, compute, action);
  return {
    ___mark(scope: Scope) {
      signal.___mark(scope[childAccessor] as Scope);
    },
    ___apply(scope: Scope, value: unknown, stale: boolean) {
      signal.___apply(scope[childAccessor] as Scope, value, stale);
    }
  }
}

export function derivation<S extends Scope = Scope, V = unknown>(valueAccessor: number, defaultMark: number, subscribers: Signal[], compute?: (scope: S) => V, action?: (scope: S, value: V) => void): Signal<S, V> {
  const markAccessor = valueAccessor + SignalOffsets.MARK;
  const staleAccessor = valueAccessor + SignalOffsets.STALE;
  return {
    ___mark(scope) {
      const mark = scope[markAccessor] = (scope[markAccessor] as number || 0) + 1;
      if (mark === 1) {
        for (const subscriber of subscribers) {
          subscriber.___mark(scope);
        }
      }
    },
    ___apply(scope: S, value?: V, stale = true) {
      if (stale) {
        scope[staleAccessor] = true;
      }
      if (!decrementMark(scope, markAccessor, defaultMark)) {
        let downstreamStale = false;
        if (scope[staleAccessor]) {
          scope[staleAccessor] = false;
          value = compute ? compute(scope) : value;
          if (scope[valueAccessor] !== value) {
            scope[valueAccessor] = value;
            action?.(scope, value!);
            downstreamStale = true
          }
        }
        for (const subscriber of subscribers) {
          subscriber.___apply(scope, undefined, downstreamStale);
        }
      }
    }
  }
}

function decrementMark<S extends Scope = Scope>(scope: S, markAccessor: number, defaultMark: number): number {
  if (scope[markAccessor] === undefined) {
    scope[markAccessor] = defaultMark;
  }
  return --(scope[markAccessor] as number);
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

export function inChild(subscriber: Signal, getChildScope: (s: Scope) => Scope): Signal {
  return {
    ___mark(scope: Scope) {
      subscriber.___mark(getChildScope(scope));
    },
    ___apply(scope: Scope, value?: unknown, stale?: boolean) {
      subscriber.___apply(getChildScope(scope), value, stale);
    }
  }
}

export function inConditionalScope(subscriber: Signal, getConditionalScope: (s: Scope) => Scope | undefined /*, branch: Renderer */): Signal {
  return {
    ___mark(scope: Scope) {
      const conditionalScope = getConditionalScope(scope);
      if (conditionalScope) {
        subscriber.___mark(conditionalScope);
      }
    },
    ___apply(scope: Scope, value?: unknown, stale?: boolean) {
      const conditionalScope = getConditionalScope(scope);
      if (conditionalScope) {
        subscriber.___apply(conditionalScope, value, stale);
      }
    }
  }
}

export function inLoopScope(subscriber: Signal, getLoopScopes: (s: Scope) => Scope[]): Signal {
  return {
    ___mark(scope: Scope) {
      const loopScopes = getLoopScopes(scope) ?? [];
      for (const loopScope of loopScopes) {
        subscriber.___mark(loopScope);
      }
    },
    ___apply(scope: Scope, value?: unknown, stale?: boolean) {
      const loopScopes = getLoopScopes(scope) ?? [];
      for (const loopScope of loopScopes) {
        subscriber.___apply(loopScope, value, stale);
      }
    }
  }
}

export function inRenderBody(renderBodyIndex: number): Signal {
  return {
    ___mark(scope: Scope) {
      const { closures } = scope[renderBodyIndex] as { closures: Signal[] };
      for (const signal of closures) {
        signal.___mark(scope);
      }
    },
    ___apply(scope: Scope) {
      const { closures } = scope[renderBodyIndex] as { closures: Signal[] };
      for (const signal of closures) {
        signal.___apply(scope, false);
      }
    }
  }
}

// export function derivedSource(source:) {

// }

// export function controllableSource(source) {
  
// }