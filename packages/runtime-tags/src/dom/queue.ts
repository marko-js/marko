import {
  AccessorProp,
  type BranchScope,
  PendingRenderProp,
  type Scope,
} from "../common/types";
import { renderCatch } from "./control-flow";
import { enableBranches } from "./resume";
import type { Signal, SignalFn } from "./signals";

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;
export type PendingRender = {
  [PendingRenderProp.Key]: number;
  [PendingRenderProp.Scope]: Scope;
  [PendingRenderProp.Signal]: Signal<any>;
  [PendingRenderProp.Value]: unknown;
};

let pendingRenders: PendingRender[] = [];
let pendingRendersLookup = new Map<number, PendingRender>();
let asyncRendersLookup: typeof pendingRendersLookup | undefined | 0;
export const caughtError = new WeakSet<unknown[]>();
export const placeholderShown = new WeakSet<unknown[]>();
export let pendingEffects: unknown[] = [];
export let pendingScopes: Scope[] = [];
export let rendering: undefined | 0 | 1;

const scopeKeyOffset = 1e3;
export function queueRender<T>(
  scope: Scope,
  signal: Signal<T>,
  signalKey: number,
  value?: T,
  scopeKey = scope[AccessorProp.Id],
) {
  const key = scopeKey * scopeKeyOffset + signalKey;
  let render = signalKey >= 0 && pendingRendersLookup.get(key);
  if (render) {
    render[PendingRenderProp.Value] = value;
  } else {
    queuePendingRender(
      (render = {
        [PendingRenderProp.Key]: key,
        [PendingRenderProp.Scope]: scope,
        [PendingRenderProp.Signal]: signal,
        [PendingRenderProp.Value]: value,
      }),
    );
    signalKey >= 0 && pendingRendersLookup.set(key, render);
  }
}

export function queuePendingRender(render: PendingRender) {
  let i = pendingRenders.push(render) - 1;
  while (i) {
    const parentIndex = (i - 1) >> 1;
    const parent = pendingRenders[parentIndex];
    if (render[PendingRenderProp.Key] - parent[PendingRenderProp.Key] >= 0)
      break;
    pendingRenders[i] = parent;
    i = parentIndex;
  }
  pendingRenders[i] = render;
}

export function queueEffect<S extends Scope, T extends ExecFn<S>>(
  scope: S,
  fn: T,
) {
  pendingEffects.push(fn, scope);
}

export function run() {
  const effects = pendingEffects;
  asyncRendersLookup = new Map();
  try {
    rendering = 1;
    runRenders();
  } finally {
    pendingRendersLookup = asyncRendersLookup;
    asyncRendersLookup = rendering = 0;
    pendingRenders = [];
    pendingEffects = [];
  }
  runEffects(effects);
}

export function prepareEffects(fn: () => void): unknown[] {
  const prevRenders = pendingRenders;
  const prevEffects = pendingEffects;
  const prevLookup = asyncRendersLookup;
  const preparedEffects = (pendingEffects = []);
  pendingRenders = [];
  asyncRendersLookup = pendingRendersLookup;
  pendingRendersLookup = new Map();

  try {
    rendering = 1;
    fn();
    runRenders();
  } finally {
    rendering = 0;
    pendingRendersLookup = asyncRendersLookup;
    asyncRendersLookup = prevLookup;
    pendingRenders = prevRenders;
    pendingEffects = prevEffects;
  }
  return preparedEffects;
}

export let runEffects = ((effects) => {
  for (let i = 0; i < effects.length; ) {
    (effects[i++] as (scope: Scope) => void)(effects[i++] as Scope);
  }
}) as (effects: unknown[], checkPending?: boolean | 1) => void;

function runRenders() {
  while (pendingRenders.length) {
    const render = pendingRenders[0];
    const item = pendingRenders.pop()!;

    if (render !== item) {
      let i = 0;
      const mid = pendingRenders.length >> 1;
      const key = (pendingRenders[0] = item)[PendingRenderProp.Key];

      while (i < mid) {
        let bestChild = (i << 1) + 1;
        const right = bestChild + 1;

        if (
          right < pendingRenders.length &&
          pendingRenders[right][PendingRenderProp.Key] -
            pendingRenders[bestChild][PendingRenderProp.Key] <
            0
        ) {
          bestChild = right;
        }

        if (pendingRenders[bestChild][PendingRenderProp.Key] - key >= 0) {
          break;
        } else {
          pendingRenders[i] = pendingRenders[bestChild];
          i = bestChild;
        }
      }

      pendingRenders[i] = item;
    }

    if (
      !render[PendingRenderProp.Scope][AccessorProp.ClosestBranch]?.[
        AccessorProp.Destroyed
      ]
    ) {
      runRender(render);
    }
  }

  for (const scope of pendingScopes) {
    scope[AccessorProp.Creating] = 0;
  }

  pendingScopes = [];
}

let runRender = (render: PendingRender) =>
  render[PendingRenderProp.Signal](
    render[PendingRenderProp.Scope],
    render[PendingRenderProp.Value],
  );

let catchEnabled: undefined | 1;
export function _enable_catch() {
  if (!catchEnabled) {
    catchEnabled = 1;
    enableBranches();
    const handlePendingTry = (
      fn: ExecFn,
      scope: Scope,
      branch: BranchScope | undefined,
    ) => {
      // walk up the branches to see if any have an AwaitCounter with count (i) > 0
      // if not, return false
      // if so, return true and push the fn to the pending async queue on the try branch
      while (branch) {
        if (branch[AccessorProp.AwaitCounter]?.i) {
          return (branch[AccessorProp.PendingEffects] ||= []).push(fn, scope);
        }
        branch = branch[AccessorProp.ParentBranch];
      }
    };
    runEffects = (
      (runEffects) =>
      (effects: unknown[], checkPending = placeholderShown.has(effects)) => {
        if (checkPending || caughtError.has(effects)) {
          let i = 0;
          let fn: SignalFn;
          let scope: Scope;
          let branch: BranchScope | undefined;
          for (; i < effects.length; ) {
            fn = effects[i++] as SignalFn;
            scope = effects[i++] as Scope;
            branch = scope[AccessorProp.ClosestBranch];
            if (
              !branch?.[AccessorProp.Destroyed] &&
              !(checkPending && handlePendingTry(fn, scope, branch))
            ) {
              fn(scope);
            }
          }
        } else {
          runEffects(effects);
        }
      }
    )(runEffects);
    runRender = ((runRender) => (render: PendingRender) => {
      try {
        let branch =
          render[PendingRenderProp.Scope][AccessorProp.ClosestBranch];
        while (branch) {
          if (branch[AccessorProp.PendingRenders]) {
            (asyncRendersLookup as typeof pendingRendersLookup).set(
              render[PendingRenderProp.Key],
              render,
            );
            return branch[AccessorProp.PendingRenders].push(render);
          }
          branch = branch![AccessorProp.ParentBranch];
        }
        runRender(render);
      } catch (error) {
        renderCatch(render[PendingRenderProp.Scope], error);
      }
    })(runRender);
  }
}
