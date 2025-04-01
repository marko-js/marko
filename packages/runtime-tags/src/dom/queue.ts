import type { BranchScope, Scope } from "../common/types";
import { renderCatch } from "./control-flow";
import { finishPendingScopes } from "./scope";
import type { Signal } from "./signals";

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;
type PendingRender = {
  ___key: number;
  ___scope: Scope;
  ___signal: Signal<any>;
  ___value: unknown;
};

let pendingRenders: PendingRender[] = [];
let pendingRendersLookup = new Map<number, PendingRender>();
export const caughtError = new WeakSet<unknown[]>();
export const placeholderShown = new WeakSet<unknown[]>();
export let pendingEffects: unknown[] = [];
export let rendering: undefined | 0 | 1;

const scopeKeyOffset = 1e3;
export function queueRender<T>(
  scope: Scope,
  signal: Signal<T>,
  signalKey: number,
  value?: T,
  scopeKey = scope.___id,
) {
  const key = scopeKey * scopeKeyOffset + signalKey;
  const existingRender = signalKey >= 0 && pendingRendersLookup.get(key);
  if (existingRender) {
    existingRender.___value = value;
  } else {
    const render: PendingRender = {
      ___key: key,
      ___scope: scope,
      ___signal: signal,
      ___value: value,
    };
    let i = pendingRenders.push(render) - 1;
    while (i) {
      const parentIndex = (i - 1) >> 1;
      const parent = pendingRenders[parentIndex];
      if (key - parent.___key >= 0) break;
      pendingRenders[i] = parent;
      i = parentIndex;
    }

    signalKey >= 0 && pendingRendersLookup.set(key, render);
    pendingRenders[i] = render;
  }
}

export function queueEffect<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
) {
  pendingEffects.push(fn, scope);
}

export function run() {
  const effects = pendingEffects;
  try {
    rendering = 1;
    runRenders();
  } finally {
    pendingRenders = [];
    pendingRendersLookup = new Map();
    pendingEffects = [];
    rendering = 0;
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
    rendering = 1;
    fn();
    runRenders();
  } finally {
    rendering = 0;
    pendingRenders = prevRenders;
    pendingRendersLookup = prevRendersLookup;
    pendingEffects = prevEffects;
  }
  return preparedEffects;
}

export let runEffects = (effects: unknown[]) => {
  for (let i = 0, scope: Scope; i < effects.length; ) {
    (effects[i++] as (a: Scope, b: Scope) => void)(
      (scope = effects[i++] as Scope),
      scope,
    );
  }
};

function runRenders() {
  while (pendingRenders.length) {
    const render = pendingRenders[0];
    const item = pendingRenders.pop()!;

    if (render !== item) {
      let i = 0;
      const mid = pendingRenders.length >> 1;
      const key = (pendingRenders[0] = item).___key;

      while (i < mid) {
        let bestChild = (i << 1) + 1;
        const right = bestChild + 1;

        if (
          right < pendingRenders.length &&
          pendingRenders[right].___key - pendingRenders[bestChild].___key < 0
        ) {
          bestChild = right;
        }

        if (pendingRenders[bestChild].___key - key >= 0) {
          break;
        } else {
          pendingRenders[i] = pendingRenders[bestChild];
          i = bestChild;
        }
      }

      pendingRenders[i] = item;
    }

    if (!render.___scope.___closestBranch?.___destroyed) {
      runRender(render);
    }
  }

  finishPendingScopes();
}

let runRender = (render: PendingRender) =>
  render.___signal(render.___scope, render.___value);

export let enableCatch = () => {
  enableCatch = () => {};
  const handlePendingTry = (
    fn: ExecFn,
    scope: Scope,
    branch: BranchScope | undefined,
  ) => {
    // walk up the branches to see if any have a ___pendingAsyncCount
    // if not, return false
    // if so, return true and push the fn to the pending async queue on the try branch
    while (branch) {
      if (branch.___pendingAsyncCount) {
        return (branch.___effects ||= []).push(fn, scope);
      }
      branch = branch.___parentBranch;
    }
  };
  runEffects = (
    (runEffects) =>
    (effects: unknown[], checkPending = placeholderShown.has(effects)) => {
      if (checkPending || caughtError.has(effects)) {
        let i = 0;
        let fn: ExecFn;
        let scope: Scope;
        let branch: BranchScope | undefined;
        for (; i < effects.length; ) {
          fn = effects[i++] as ExecFn;
          scope = effects[i++] as Scope;
          branch = scope.___closestBranch;
          if (
            !branch?.___destroyed &&
            !(checkPending && handlePendingTry(fn, scope, branch))
          ) {
            fn(scope, scope);
          }
        }
      } else {
        runEffects(effects);
      }
    }
  )(runEffects);
  runRender = ((runRender) => (render: PendingRender) => {
    try {
      runRender(render);
    } catch (error) {
      renderCatch(render.___scope, error);
    }
  })(runRender);
};
