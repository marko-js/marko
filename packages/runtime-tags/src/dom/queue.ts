import { branchesEnabled, withBranches } from "../common/helpers";
import {
  AccessorProp,
  type BranchScope,
  PendingRenderProp,
  type Scope,
} from "../common/types";
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
export let runId = 2; // resumed scopes get `1`
/** Effects queued in one run, flagged when that run showed a placeholder
 * (`p`) or caught an error (`c`), so running them checks their branches. */
export interface Effects extends Array<unknown> {
  p?: 1;
  c?: 1;
}
export let pendingEffects: Effects = [];
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
      (pendingEnabled && render[PendingRenderProp.Pending])
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
  // Existing pending work already owns a scheduled flush.
  if (!pendingRenders.length) queueMicrotask(run);
  queueRender(scope, signal, -1, value);
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
}) as (effects: Effects, checkPending?: boolean | 1) => void;

let runRender = (render: PendingRender) => {
  // Skip renders whose branch was destroyed; short-circuits to a single flag
  // check for apps without branches.
  if (
    !branchesEnabled ||
    render[PendingRenderProp.Scope][AccessorProp.ClosestBranch]?.[
      AccessorProp.Gen
    ] !== 0
  ) {
    render[PendingRenderProp.Signal](
      render[PendingRenderProp.Scope],
      render[PendingRenderProp.Value],
    );
  }
};

type RenderWrapper = (base: typeof runRender) => typeof runRender;

// Pending work latch (as `branchesEnabled`): only `withPending` writes it, so
// bundles without client `<await>` or lazy loading drop what it guards.
let pendingEnabled: undefined | 1;

// Definition-site wrapper for what starts client pending work: renders under
// a pending `<await>` hold, and effects under a shown placeholder defer.
export function withPending<T>(runtime: T) {
  pendingEnabled = 1;
  installCatch((runRender) => (render) => {
    let branch = render[PendingRenderProp.Scope][AccessorProp.ClosestBranch];
    while (branch) {
      if (branch[AccessorProp.PendingRenders]) {
        render[PendingRenderProp.Pending] = 1;
        return branch[AccessorProp.PendingRenders].push(render);
      }
      branch = branch[AccessorProp.ParentBranch];
    }
    render[PendingRenderProp.Pending] = 0;
    runRender(render);
  });
  return runtime;
}

// The `@catch` (`catch.feat`) and pending machinery install by wrapping the
// plain dispatchers, which imported bindings cannot reassign directly; with
// both, the outer effects guard handles what the inner one would.
export function installCatch(wrapRender: RenderWrapper) {
  const base = runEffects;
  withBranches();
  // Deliberately no per-effect try/catch: an error thrown from a `<script>` or
  // `<lifecycle>` body escapes the flush instead of reaching `@catch`.
  runEffects = (effects: Effects, checkPending = effects.p) => {
    if (checkPending || effects.c) {
      let i = 0;
      let fn: ExecFn;
      let scope: Scope;
      let branch: BranchScope | undefined;
      for (; i < effects.length;) {
        fn = effects[i++] as ExecFn;
        scope = effects[i++] as Scope;
        if (
          (branch = scope[AccessorProp.ClosestBranch])?.[AccessorProp.Gen] !==
            0 &&
          !(
            pendingEnabled &&
            checkPending &&
            deferPendingEffect(fn, scope, branch)
          )
        ) {
          fn(scope);
        }
      }
    } else {
      base(effects);
    }
  };
  runRender = wrapRender(runRender);
}

// Defers the fn onto the nearest ancestor try branch still awaiting; a truthy
// return means it was deferred.
function deferPendingEffect(
  fn: ExecFn,
  scope: Scope,
  branch: BranchScope | undefined,
) {
  while (branch) {
    if (branch[AccessorProp.AwaitCounter]?.i) {
      return (branch[AccessorProp.PendingEffects] ||= []).push(fn, scope);
    }
    branch = branch[AccessorProp.ParentBranch];
  }
}

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
