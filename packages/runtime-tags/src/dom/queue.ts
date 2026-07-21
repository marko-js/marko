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

// Orders pending renders across scopes; signal keys are per-section
// binding ids, so they always fit well below the offset.
const scopeKeyOffset = 1e6;
export function queueRender<T, U extends Scope = Scope>(
  scope: U,
  signal: Signal<T, U>,
  signalKey: number,
  value?: T,
  scopeKey = scope[AccessorProp.Id],
) {
  let render: PendingRender | undefined;
  // Slots live at the signal key (small indexes stay fast elements);
  // accessors are strings and pending counters use complemented keys.
  if (signalKey >= 0 && (render = scope[signalKey])) {
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
    if (signalKey >= 0) scope[signalKey] = render;
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
    flushEnd();
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
  const saved: [
    typeof pendingRenders,
    typeof pendingEffects,
    typeof renderEffects,
  ] = [pendingRenders, pendingEffects, renderEffects];
  const preparedEffects = (pendingEffects = []);
  pendingRenders = [];
  renderEffects = [];

  try {
    rendering = 1;
    fn();
    runRenders();
    flushEnd();
  } finally {
    runId++;
    rendering = 0;
    [pendingRenders, pendingEffects, renderEffects] = saved;
  }
  return preparedEffects;
}

export let runEffects = ((effects) => {
  for (let i = 0; i < effects.length;) {
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
          for (; i < effects.length;) {
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

// === Compiled render effects ===
//
// Observable DOM mutations are not applied inline during renders: compiled
// signals emit their DOM-write statements as hoisted "render effect"
// functions queued via `_render`, and structural helpers queue their DOM
// phase the same way. A render effect re-reads scope state when it runs, so
// running it once at the end of the flush yields the latest output.
//
// Until `_enable_transition()` runs (emitted by the compiler only when an
// `<await>` promise expression has referenced bindings, i.e. can re-fire
// client side), `_render` applies immediately — templates without
// client-updating awaits skip the queue entirely.

type RenderEffectFn = (scope: Scope, value?: unknown) => void;

let transitionsEnabled: undefined | 1;
// A no-op until `_enable_transition` installs the drain, so flushes pay
// nothing while render effects apply inline (and the machinery below
// tree-shakes away when no template enables it).
let flushEnd = () => {};
let renderEffects: unknown[] = []; // stride 3: fn, scope, value

// Wraps a compiled render effect as a signal-shaped fn; created once per
// effect at module init. Applies immediately until `_enable_transition()`
// swaps in the queueing implementation, so templates without
// client-updating awaits pay only the extra call.
export function _render(fn: RenderEffectFn): RenderEffectFn {
  return (scope, value) => queueRenderEffect(fn, scope, value);
}

// Also used directly by the structural helpers (their per-node apply fns
// are already stable identities).
export let queueRenderEffect = (
  fn: RenderEffectFn,
  scope: Scope,
  value?: unknown,
) => {
  fn(scope, value);
};

export function _enable_transition() {
  if (!transitionsEnabled) {
    transitionsEnabled = 1;
    flushEnd = flushRenderEffects;
    queueRenderEffect = (fn, scope, value?) => {
      renderEffects.push(fn, scope, value);
    };
  }
}

function flushRenderEffects() {
  // Applying render effects can queue more (a spread's dynamic content
  // swap); drain until quiet.
  while (renderEffects.length) {
    const next = renderEffects;
    renderEffects = [];
    runRenderEffectList(next);
  }
}

function runRenderEffectList(fx: unknown[]) {
  for (let i = 0; i < fx.length; i += 3) {
    const fn = fx[i] as RenderEffectFn;
    const scope = fx[i + 1] as Scope;
    if (scope[AccessorProp.ClosestBranch]?.[AccessorProp.Gen] !== 0) {
      try {
        fn(scope, fx[i + 2]);
      } catch (error) {
        renderCatch(scope, error);
      }
    }
  }
}
