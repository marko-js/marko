import { AccessorChar, type Scope } from "../common/types";
import { setConditionalRenderer } from "./control-flow";
import { createAndSetupBranch } from "./renderer";
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
export let pendingEffects: unknown[] = [];
export let rendering = false;

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
  for (let i = 0, scope: Scope; i < effects.length; ) {
    (effects[i++] as (a: Scope, b: Scope) => void)(
      (scope = effects[i++] as Scope),
      scope,
    );
  }
}

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
  runRender = ((runRender) => (render: PendingRender) => {
    try {
      runRender(render);
    } catch (error) {
      let branch = render.___scope.___closestBranch;
      while (branch && !branch[AccessorChar.CatchContent])
        branch = branch.___parentBranch;
      if (!branch) {
        throw error;
      } else {
        setConditionalRenderer(
          branch._!,
          branch[AccessorChar.BranchAccessor],
          branch[AccessorChar.CatchContent],
          createAndSetupBranch,
        );
        branch[AccessorChar.CatchContent].___params?.(
          branch._![
            branch[AccessorChar.BranchAccessor] + AccessorChar.ConditionalScope
          ],
          [error],
        );
      }
    }
  })(runRender);
};
