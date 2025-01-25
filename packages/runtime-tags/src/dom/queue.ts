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
type PendingRender = {
  ___scope: Scope;
  ___signal: Signal<any>;
  ___value: unknown;
  ___next: PendingRender | undefined;
};

let pendingRender: PendingRender | undefined;
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
  const nextRender: PendingRender = {
    ___scope: scope,
    ___signal: signal,
    ___value: value,
    ___next: undefined,
  };

  if (!pendingRender) {
    pendingRender = nextRender;
  } else if (comparePendingRenders(pendingRender, nextRender) < 0) {
    if (MARKO_DEBUG && rendering) {
      throw new Error(
        "attempted to queue a render before the currently executing render",
      );
    }
    nextRender.___next = pendingRender;
    pendingRender = nextRender;
  } else {
    let curRender = pendingRender;
    while (
      curRender.___next &&
      comparePendingRenders(curRender.___next, nextRender) >= 0
    ) {
      curRender = curRender.___next;
    }
    nextRender.___next = curRender.___next;
    curRender.___next = nextRender;
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
    runRenders();
  } finally {
    pendingRender = undefined;
    rendering = false;
  }
  pendingEffects = [];
  runEffects(effects);
}

export function prepareEffects(fn: () => void): unknown[] {
  const prevRender = pendingRender;
  const prevEffects = pendingEffects;
  const preparedEffects = (pendingEffects = []);
  pendingRender = undefined;

  try {
    rendering = true;
    fn();
    runRenders();
  } finally {
    rendering = false;
    pendingRender = prevRender;
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

function runRenders() {
  while (pendingRender) {
    if (!pendingRender.___scope.___closestBranch?.___destroyed) {
      pendingRender.___signal(pendingRender.___scope, pendingRender.___value);
    }
    pendingRender = pendingRender.___next;
  }
  finishPendingScopes();
}

function comparePendingRenders(a: PendingRender, b: PendingRender) {
  const aStart = ownerStartNode(a.___scope);
  const bStart = ownerStartNode(b.___scope);
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
