import { branchesEnabled, withBranches } from "../common/helpers";
import {
  type Accessor,
  AccessorProp,
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
  } finally {
    runId++;
    rendering = 0;
    pendingRenders = [];
    pendingEffects = [];
  }
  runEffects(effects);
}

// A patched render-effect helper queues its call instead of touching the DOM,
// so the write can be applied later at a defined commit point. The patching
// lives in `render-effects.feat`: it hands each module's `enable` the `held`
// factory below, so apps that never render a client `<await>` keep direct,
// branch-free helpers and none of this is retained.
export let runRenderEffects: undefined | (() => void);
let pendingRenderEffects: 0 | unknown[] = 0;
let useRenderEffectQueue: 0 | 1 = 1;

// Returns the queueing variant of a `(scope, accessor, ...args)` helper. The
// target node decides: only a connected node's write is observable and
// queues; a write into detached content applies eagerly, keeping it always
// current so its eventual attach -- held or not -- shows finished content.
// `isConnected` is transitive and, unlike any flag we could maintain, sees
// detaches done directly on the DOM (the SSR reorder runtime, the placeholder
// machinery). `always` is for structural records whose call site already
// decided the site is observable (branch retires/inserts, loop holds).
export function held<F extends (...args: any[]) => void>(fn: F, always?: 1): F {
  return ((
    scope: Scope,
    accessor: Accessor,
    a3?: unknown,
    a4?: unknown,
    a5?: unknown,
  ) => {
    if (
      useRenderEffectQueue &&
      (always || (scope[accessor] as ChildNode).isConnected)
    ) {
      (pendingRenderEffects ||= []).push(fn, scope, accessor, a3, a4, a5);
    } else {
      fn(scope, accessor, a3, a4, a5);
    }
  }) as F;
}

export function enableRenderEffectQueue() {
  runRenderEffects ||= () => {
    if (pendingRenderEffects) {
      const renderEffects = pendingRenderEffects;
      // Nested calls during replay (a composite reaching another helper, a
      // deferring control-flow site reached from a queued record) apply
      // immediately instead of re-queueing.
      pendingRenderEffects = useRenderEffectQueue = 0;
      try {
        // A single pass in queue order reproduces the eager sequence: records
        // exist only for connected targets, and a branch shown by a held
        // insert was populated eagerly while detached (or by records queued
        // before it). A batch only needs dedup once transitions let it span
        // drains, which is where it lands.
        for (let i = 0; i < renderEffects.length;) {
          (renderEffects[i++] as (...args: any[]) => void)(
            renderEffects[i++],
            renderEffects[i++],
            renderEffects[i++],
            renderEffects[i++],
            renderEffects[i++],
          );
        }
      } finally {
        useRenderEffectQueue = 1;
      }
      // Replaying can queue renders (a held content swap creates its branch at
      // commit, whose setup renders through `queueRender`); re-enter the drain,
      // which lands back here so their own held writes replay too.
      if (pendingRenders.length) {
        runRenders();
      }
    }
  };
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
  const prevRenderEffects = pendingRenderEffects;
  const preparedEffects = (pendingEffects = []);
  pendingRenders = [];
  pendingRenderEffects = 0;

  try {
    rendering = 1;
    fn();
    runRenders();
  } finally {
    runId++;
    rendering = 0;
    pendingRenders = prevRenders;
    pendingEffects = prevEffects;
    pendingRenderEffects = prevRenderEffects;
  }
  return preparedEffects;
}

export let runEffects = ((effects) => {
  for (let i = 0; i < effects.length;) {
    (effects[i++] as (scope: Scope) => void)(effects[i++] as Scope);
  }
}) as (effects: unknown[], checkPending?: boolean | 1) => void;

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

let catchEnabled: undefined | 1;
// The catch machinery lives in `catch.feat`; it installs by wrapping the
// plain dispatchers, which imported bindings cannot reassign directly.
export function installCatch(
  wrapEffects: (base: typeof runEffects) => typeof runEffects,
  wrapRender: (base: typeof runRender) => typeof runRender,
) {
  catchEnabled = 1;
  withBranches();
  runEffects = wrapEffects(runEffects);
  runRender = wrapRender(runRender);
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
  runRenderEffects?.();
}
