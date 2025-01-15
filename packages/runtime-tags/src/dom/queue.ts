import type { Scope } from "../common/types";
import { schedule } from "./schedule";
import { MARK, type ValueSignal } from "./signals";

const enum PendingEffectOffset {
  Scope = 0,
  Function = 1,
  Total = 2,
}

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;
type PendingSignal = {
  ___scope: Scope;
  ___signal: ValueSignal;
  ___value: unknown;
  ___next: PendingSignal | undefined;
};

let pendingSignal: PendingSignal["___next"] = undefined;
let pendingEffects: unknown[] = [];
export let rendering = false;

export function queueSource<T>(scope: Scope, signal: ValueSignal, value: T) {
  schedule();
  rendering = true;
  signal(scope, MARK);
  rendering = false;

  const nextSignal: PendingSignal = {
    ___scope: scope,
    ___signal: signal,
    ___value: value,
    ___next: undefined,
  };

  if (!pendingSignal) {
    pendingSignal = nextSignal;
  } else if (
    sortScopeByDOMPosition(pendingSignal.___scope, nextSignal.___scope) < 0
  ) {
    nextSignal.___next = pendingSignal;
    pendingSignal = nextSignal;
  } else {
    let currentSignal = pendingSignal;
    while (
      currentSignal.___next &&
      sortScopeByDOMPosition(
        currentSignal.___next.___scope,
        nextSignal.___scope,
      ) <= 0
    ) {
      currentSignal = currentSignal.___next;
    }
    nextSignal.___next = currentSignal.___next;
    currentSignal.___next = nextSignal;
  }
  return value;
}

export function queueEffect<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
) {
  pendingEffects.push(scope, fn);
}

export function run() {
  const effects = pendingEffects;
  try {
    rendering = true;
    runSignals();
  } finally {
    pendingSignal = undefined;
    rendering = false;
  }
  pendingEffects = [];
  runEffects(effects);
}

export function prepareEffects(fn: () => void): unknown[] {
  const prevSignals = pendingSignal;
  const prevEffects = pendingEffects;
  const preparedEffects = (pendingEffects = []);
  try {
    rendering = true;
    pendingSignal = undefined;
    fn();
    runSignals();
  } finally {
    rendering = false;
    pendingSignal = prevSignals;
    pendingEffects = prevEffects;
  }
  return preparedEffects;
}

export function runEffects(effects: unknown[] = pendingEffects) {
  for (let i = 0; i < effects.length; i += PendingEffectOffset.Total) {
    const scope = effects[i] as Scope;
    const fn = effects[i + 1] as (a: Scope, b: Scope) => void;
    fn(scope, scope);
  }
}

function runSignals() {
  while (pendingSignal) {
    if (scopeIsConnected(pendingSignal.___scope)) {
      pendingSignal.___signal(pendingSignal.___scope, pendingSignal.___value);
    }
    pendingSignal = pendingSignal.___next;
  }
}

function scopeIsConnected(scope: Scope) {
  const start = ownerStartNode(scope);
  return start ? start.isConnected : true;
}

function sortScopeByDOMPosition(a: Scope, b: Scope) {
  const aStart = ownerStartNode(a);
  const bStart = ownerStartNode(b);
  return aStart === bStart
    ? 0
    : aStart
      ? bStart
        ? aStart.compareDocumentPosition(bStart) &
          2 /* Node.DOCUMENT_POSITION_PRECEDING */
          ? -1
          : 1
        : -1
      : 1;
}

function ownerStartNode(scope: Scope): (Node & ChildNode) | undefined {
  return (scope.___cleanupOwner || scope).___startNode;
}
