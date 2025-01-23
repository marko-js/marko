import type { Scope } from "../common/types";
import { schedule } from "./schedule";
import { finishPendingScopes } from "./scope";
import { MARK, type Signal } from "./signals";

const enum PendingEffectOffset {
  Scope = 0,
  Function = 1,
  Total = 2,
}

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;
type PendingSignal = {
  ___scope: Scope;
  ___signal: Signal<any>;
  ___value: unknown;
  ___next: PendingSignal | undefined;
};

let pendingSignal: PendingSignal["___next"] = undefined;
export let pendingEffects: unknown[] = [];
export let rendering = false;

export function queueSource<T>(scope: Scope, signal: Signal<T>, value: T) {
  schedule();
  const prevRendering = rendering;
  rendering = true;
  signal(scope, MARK);
  rendering = prevRendering;
  queueRender(scope, signal, value);
  return value;
}

export function queueRender(
  scope: Scope,
  signal: Signal<any>,
  value?: unknown,
) {
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
    if (MARKO_DEBUG && rendering) {
      throw new Error(
        "attempted to queue a render before the currently executing render",
      );
    }
    nextSignal.___next = pendingSignal;
    pendingSignal = nextSignal;
  } else {
    let currentSignal = pendingSignal;
    while (
      currentSignal.___next &&
      sortScopeByDOMPosition(
        currentSignal.___next.___scope,
        nextSignal.___scope,
      ) >= 0
    ) {
      currentSignal = currentSignal.___next;
    }
    nextSignal.___next = currentSignal.___next;
    currentSignal.___next = nextSignal;
  }
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
    if (!pendingSignal.___scope.___closestBranch?.___destroyed) {
      pendingSignal.___signal(pendingSignal.___scope, pendingSignal.___value);
    }
    pendingSignal = pendingSignal.___next;
  }
  finishPendingScopes();
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
  return (scope.___closestBranch || scope).___startNode;
}
