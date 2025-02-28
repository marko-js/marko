import type { Scope } from "../common/types";
import { finishPendingScopes } from "./scope";
import type { Signal } from "./signals";

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
  ___key: number;
};

let pendingRenders: PendingRender[] = [];
let pendingRendersLookup = new Map<number, PendingRender>();
export let pendingEffects: unknown[] = [];
export let rendering = false;

export const scopeKeyOffset = 1024;

export function queueRender<T>(
  scope: Scope,
  signal: Signal<T>,
  signalKey: number,
  value?: T,
  scopeKey = scope.___id,
) {
  const key = scopeKey * scopeKeyOffset + signalKey;
  const existingRender = signalKey !== -1 && pendingRendersLookup.get(key);

  if (existingRender) {
    existingRender.___value = value;
  } else {
    let i = pendingRenders.length;
    const render: PendingRender = {
      ___scope: scope,
      ___signal: signal,
      ___value: value,
      ___key: key,
    };

    pendingRendersLookup.set(key, render);
    pendingRenders.push(render);
    while (i) {
      const parentIndex = (i - 1) >> 1;
      const parent = pendingRenders[parentIndex];
      if (comparePendingRenders(render, parent) >= 0) break;
      pendingRenders[i] = parent;
      i = parentIndex;
    }

    pendingRenders[i] = render;
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
    pendingRenders = [];
    pendingRendersLookup = new Map();
    pendingEffects = [];
    rendering = false;
  }
  runEffects(effects);
}

export function prepareEffects(fn: () => void): unknown[] {
  const prevRenders = pendingRenders;
  const prevRendersLookup = pendingRendersLookup;
  const prevEffects = pendingEffects;
  const preparedEffects = (pendingEffects = []);
  pendingRenders = [];
  pendingRendersLookup = new Map();

  try {
    rendering = true;
    fn();
    runRenders();
  } finally {
    rendering = false;
    pendingRenders = prevRenders;
    pendingRendersLookup = prevRendersLookup;
    pendingEffects = prevEffects;
  }
  return preparedEffects;
}

export function runEffects(effects: unknown[]) {
  for (let i = 0; i < effects.length; i += PendingEffectOffset.Total) {
    const scope = effects[i] as Scope;
    const fn = effects[i + 1] as (a: Scope, b: Scope) => void;
    fn(scope, scope);
  }
}

function runRenders() {
  while (pendingRenders.length) {
    const render = pendingRenders[0];
    const next = pendingRenders.pop()!;

    if (render !== next) {
      let i = 0;
      const mid = pendingRenders.length >> 1;
      const item = (pendingRenders[0] = next);

      while (i < mid) {
        let bestChild = (i << 1) + 1;
        const right = bestChild + 1;

        if (
          right < pendingRenders.length &&
          comparePendingRenders(
            pendingRenders[right],
            pendingRenders[bestChild],
          ) < 0
        ) {
          bestChild = right;
        }

        if (comparePendingRenders(pendingRenders[bestChild], item) >= 0) {
          break;
        } else {
          pendingRenders[i] = pendingRenders[bestChild];
          i = bestChild;
        }
      }

      pendingRenders[i] = item;
    }

    if (!render.___scope.___closestBranch?.___destroyed) {
      render.___signal(render.___scope, render.___value);
    }
  }

  finishPendingScopes();
}

function comparePendingRenders(a: PendingRender, b: PendingRender) {
  return a.___key - b.___key;
}
