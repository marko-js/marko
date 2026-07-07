import { AccessorProp, PendingRenderProp, type Scope } from "../common/types";
import { _resume, enableBranches } from "./resume";
import type { Signal } from "./signals";

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
/**
 * Truthy while an update-render patch is being applied (set by
 * `dom/update`). Persisted builds guard state-free request-derived compute
 * invocations by reading the live binding directly (`if (!_updating)`):
 * their values are the patch's payload (computing them client-side is at
 * best redundant and at worst impossible -- the computation may live
 * behind a `server import`), so during an apply the signal graph skips the
 * compute and the merge delivers the server-computed value instead.
 * Client-state (and state-mixing) computations are unaffected. Lives here
 * (not with the applier in `dom/update`) because main persisted modules
 * import it -- hydration bundles must not drag the applier graph eagerly.
 */
export let updating: undefined | 0 | 1;
export { updating as _updating };
export function setUpdating(value: 0 | 1) {
  updating = value;
}

/**
 * Persisted builds' `_script`: identical to `_script`, except setup skips
 * queueing while an update patch applies — fresh-branch wiring comes from
 * the payload's effect entries instead (running both would double-bind).
 */
export function _script_update(id: string, fn: (scope: Scope) => void) {
  _resume(id, fn);
  return _script_shared(fn);
}

/**
 * The register build's `_script_update`: the same skip-queueing-while-
 * updating wrapper WITHOUT the registration — the main module already
 * registered the id, and payload effect entries must keep resolving the
 * main copies resume wired.
 */
export function _script_shared(fn: (scope: Scope) => void) {
  return (scope: Scope) => {
    if (!updating) queueEffect(scope, fn);
  };
}
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

export type RunRender = (render: PendingRender) => void;
export type RunEffects = typeof runEffects;

let catchEnabled: undefined | 1;
/**
 * Installed by `_enable_catch` (in `./catch` -- the wrappers need
 * `renderCatch`, and the queue must never import branch machinery: a module
 * is hosted in one chunk and the queue is eager in every bundle).
 */
export function enableCatchPending(
  wrapRunEffects: (original: RunEffects) => RunEffects,
  wrapRunRender: (original: RunRender) => RunRender,
) {
  if (!catchEnabled) {
    catchEnabled = 1;
    enableBranches();
    runEffects = wrapRunEffects(runEffects);
    runRender = wrapRunRender(runRender);
  }
}
