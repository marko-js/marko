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
  [PendingRenderProp.Signal]: Signal<any, any>;
  [PendingRenderProp.Value]: unknown;
  [PendingRenderProp.Gen]: number;
  [PendingRenderProp.Pending]?: 0 | 1;
};

export let rendering: undefined | 0 | 1;
export let runId = 2; // resumed scopes get `1`
export const caughtError = new WeakSet<unknown[]>();
export const placeholderShown = new WeakSet<unknown[]>();
export let pendingEffects: unknown[] = [];
let pendingRenders: PendingRender[] = [];

const scopeKeyOffset = 1e3;
export function queueRender<T, U extends Scope = Scope>(
  scope: U,
  signal: Signal<T, U>,
  signalKey: number,
  value?: T,
  scopeKey = scope[AccessorProp.Id],
) {
  let render: PendingRender | undefined;
  if (signalKey >= 0 && (render = scope[signalKey + scopeKeyOffset])) {
    render[PendingRenderProp.Value] = value;
    if (
      render[PendingRenderProp.Gen] === runId ||
      (catchEnabled && render[PendingRenderProp.Pending])
    ) {
      return;
    }
    render[PendingRenderProp.Gen] = runId;
  } else {
    render = {
      [PendingRenderProp.Key]: scopeKey * scopeKeyOffset + signalKey,
      [PendingRenderProp.Scope]: scope,
      [PendingRenderProp.Signal]: signal,
      [PendingRenderProp.Value]: value,
      [PendingRenderProp.Gen]: runId,
    };
    if (signalKey >= 0) scope[signalKey + scopeKeyOffset] = render;
  }
  queuePendingRender(render);
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
  try {
    rendering = 1;
    runRenders();
  } finally {
    runId++;
    rendering = 0;
    pendingRenders = [];
    pendingEffects = [];
  }
  runEffects(effects);
}

export function queueAsyncRender<T, U extends Scope = Scope>(
  scope: U,
  signal: Signal<T, U>,
  value?: T,
) {
  queueRender(scope, signal, -1, value);
  queueMicrotask(run);
}

export function prepareEffects(fn: () => void): unknown[] {
  const prevRenders = pendingRenders;
  const prevEffects = pendingEffects;
  const preparedEffects = (pendingEffects = []);
  pendingRenders = [];

  try {
    rendering = 1;
    fn();
    runRenders();
  } finally {
    runId++;
    rendering = 0;
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

    runRender(render);
  }
}

let runRender = (render: PendingRender) =>
  render[PendingRenderProp.Signal](
    render[PendingRenderProp.Scope],
    render[PendingRenderProp.Value],
  );

// Installed by `enableBranches` so apps without branches don't pay for
// the destroyed branch check.
export function skipDestroyedRenders() {
  runRender = ((runRender) => (render: PendingRender) => {
    if (
      render[PendingRenderProp.Scope][AccessorProp.ClosestBranch]?.[
        AccessorProp.Gen
      ] !== 0
    ) {
      runRender(render);
    }
  })(runRender);
}

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
            if (
              (branch = scope[AccessorProp.ClosestBranch])?.[
                AccessorProp.Gen
              ] !== 0 &&
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
            render[PendingRenderProp.Pending] = 1;
            return branch[AccessorProp.PendingRenders].push(render);
          }
          branch = branch![AccessorProp.ParentBranch];
        }
        render[PendingRenderProp.Pending] = 0;
        runRender(render);
      } catch (error) {
        renderCatch(render[PendingRenderProp.Scope], error);
      }
    })(runRender);
  }
}
