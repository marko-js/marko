import {
  AccessorProp,
  type BranchScope,
  type Falsy,
  PendingRenderProp,
  type Scope,
} from "../common/types";
import { _enable_queued_flow, renderCatch } from "./control-flow";
import { _enable_queued_writes } from "./dom";
import { enableBranches } from "./resume";
import type { Signal, SignalFn } from "./signals";

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;
export type PendingRender = {
  [PendingRenderProp.Key]: number;
  [PendingRenderProp.Scope]: Scope;
  [PendingRenderProp.Signal]: Signal<any, any>;
  [PendingRenderProp.Value]: unknown;
  [PendingRenderProp.Gen]: number;
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
    if (render[PendingRenderProp.Gen] === runId) {
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
      // Defer the fn onto the nearest ancestor try branch still awaiting;
      // a truthy return means it was deferred.
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
        runRender(render);
      } catch (error) {
        renderCatch(render[PendingRenderProp.Scope], error);
      }
    })(runRender);
  }
}

// === Observable write queue & branch write states ===
//
// Signals mutate the DOM through the observable sink helpers (`_text`,
// `_attr`, the branch swap/reconcile commits, ...), each registered here
// through `_sink`. Sinks apply directly until `_enable_transition()` runs
// (emitted by the compiler only when an `<await>` promise expression has
// referenced bindings, i.e. can re-fire client side); it swaps every
// registered sink for a wrapper that routes through `queueWrite`, which
// dispatches on the write state of the target scope's branch:
//
// - `undefined` (attached, and anything predating the enable) and the
//   unobservable states `0` (created, not yet inserted) / `1` (detached):
//   the write applies immediately — renders run before paint, so direct
//   application is never user-visible mid-flush.
// - a `HoldStore` (held by a pending transition): the write is captured,
//   keyed on (scope, sink, accessor[, name]) with latest-args-wins
//   overwrite, so a hold spanning any number of flushes applies at most
//   one mutation per target when it settles.
//
// State transitions ride the branch primitives: creation stamps `0`,
// insertion adopts the parent branch's state, a transition freeze flips
// its region's attached branches to the hold store, and detaching drains
// the store into the now-unobservable DOM (so a held write can never
// clobber a later direct one) before stamping `1`.

export type HoldStore = {
  /** keyed entries, stride 6: fn, named, scope, accessor, c, d */
  e: unknown[];
  /** scope -> sink fn -> accessor -> entry index (or name -> entry index) */
  k: Map<Scope, Map<SinkFn, Map<unknown, number | Map<unknown, number>>>>;
};

type WriteState = HoldStore | 0 | 1 | undefined;

type SinkFn = (a?: any, b?: any, c?: any, d?: any) => void;

export function queueWrite(
  named: 0 | 1,
  fn: SinkFn,
  scope: Scope,
  b?: unknown,
  c?: unknown,
  d?: unknown,
) {
  const state = heldState(scope);
  if (state) {
    const { e, k } = state;
    let byFn = k.get(scope);
    if (!byFn) k.set(scope, (byFn = new Map()));
    let byAccessor = byFn.get(fn);
    if (!byAccessor) byFn.set(fn, (byAccessor = new Map()));
    let index = byAccessor.get(b);
    if (named) {
      let byName = index as Map<unknown, number> | undefined;
      if (!byName) byAccessor.set(b, (byName = new Map()));
      if ((index = byName.get(c)) === undefined) {
        byName.set(c, e.length);
      }
    } else if (index === undefined) {
      byAccessor.set(b, e.length);
    }
    if (index === undefined) {
      e.push(fn, named, scope, b, c, d);
    } else {
      // Last write wins: overwrite the captured args in place.
      e[(index as number) + 4] = c;
      e[(index as number) + 5] = d;
    }
  } else {
    fn(scope, b, c, d);
  }
}

// The store freezing writes to this scope's region, if any.
export function heldState(scope: Scope) {
  const state = scope[AccessorProp.ClosestBranch]?.[AccessorProp.WriteState];
  if (typeof state === "object") return state;
}

// === Branch write-state transitions ===
//
// No-op hooks until `_enable_transition` installs them, so branch
// primitives pay one dead call per branch event (never per write) while
// transitions are unused, and the machinery tree-shakes away when no
// template enables it.

export let onCreateBranch = (_branch: BranchScope) => {};
export let onInsertBranch = (_branch: BranchScope) => {};
export let onDetachBranch = (_branch: BranchScope) => {};
export let onAttachBranch = (_branch: BranchScope) => {};
export let holdRegion = (_branch: BranchScope | Falsy) => {};

// Feeds a settled transition's surviving held writes back through the
// gate after flipping the region to its parent context: released under an
// attached or detached parent they apply immediately, and under a
// still-held ancestor they cascade into its store. Entries whose
// producing scope's branch was destroyed while held are dropped.
export function releaseHold(branch: BranchScope | undefined) {
  const store = branch && branch[AccessorProp.WriteState];
  if (typeof store === "object") {
    setRegionState(
      branch as BranchScope,
      (branch as BranchScope)[AccessorProp.ParentBranch]?.[
        AccessorProp.WriteState
      ],
      store,
    );
    feedHold(store);
  }
}

function feedHold(store: HoldStore) {
  const { e } = store;
  for (let i = 0; i < e.length; i += 6) {
    if (
      (e[i + 2] as Scope)[AccessorProp.ClosestBranch]?.[AccessorProp.Gen] !== 0
    ) {
      queueWrite(
        e[i + 1] as 0 | 1,
        e[i] as SinkFn,
        e[i + 2] as Scope,
        e[i + 3],
        e[i + 4],
        e[i + 5],
      );
    }
  }
}

// Flips every branch in the region whose state is `from` (a released
// store) or detached to `to`, leaving created branches and independently
// held sub-regions to their own transitions.
function setRegionState(
  branch: BranchScope,
  to: WriteState,
  from: HoldStore | undefined,
) {
  const state = branch[AccessorProp.WriteState];
  if (state === 1 || (state === from && state !== to)) {
    branch[AccessorProp.WriteState] = to;
    branch[AccessorProp.BranchScopes]?.forEach((child) =>
      setRegionState(child, to, from),
    );
  }
}

let transitionsEnabled: undefined | 1;
export function _enable_transition() {
  if (!transitionsEnabled) {
    transitionsEnabled = 1;
    _enable_catch();
    _enable_queued_writes();
    _enable_queued_flow();
    onCreateBranch = (branch) => {
      branch[AccessorProp.WriteState] = 0;
    };
    onInsertBranch = (branch) => {
      if (branch[AccessorProp.WriteState] === 0) {
        attachCreated(
          branch,
          branch[AccessorProp.ParentBranch]?.[AccessorProp.WriteState],
        );
      }
    };
    onDetachBranch = (branch) => {
      let stores: Set<HoldStore> | undefined;
      (function detach(branch: BranchScope) {
        const state = branch[AccessorProp.WriteState];
        if (state === undefined || typeof state === "object") {
          if (typeof state === "object") (stores ||= new Set()).add(state);
          branch[AccessorProp.WriteState] = 1;
          branch[AccessorProp.BranchScopes]?.forEach(detach);
        }
      })(branch);
      // Draining after the flip lands the held writes on the detached
      // nodes immediately, so they can never clobber later direct writes.
      if (stores) {
        for (const store of stores) feedHold(store);
      }
    };
    onAttachBranch = (branch) => {
      setRegionState(
        branch,
        branch[AccessorProp.ParentBranch]?.[AccessorProp.WriteState],
        undefined,
      );
    };
    holdRegion = (branch) => {
      if (branch && branch[AccessorProp.WriteState] === undefined) {
        const store: HoldStore = { e: [], k: new Map() };
        (function hold(branch: BranchScope) {
          if (branch[AccessorProp.WriteState] === undefined) {
            branch[AccessorProp.WriteState] = store;
            branch[AccessorProp.BranchScopes]?.forEach(hold);
          }
        })(branch);
      }
    };
  }
}

function attachCreated(branch: BranchScope, to: WriteState) {
  branch[AccessorProp.WriteState] = to;
  branch[AccessorProp.BranchScopes]?.forEach((child) => {
    if (child[AccessorProp.WriteState] === 0) {
      attachCreated(child, to);
    }
  });
}
