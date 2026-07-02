import { type Opt, toArray } from "../common/opt";
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
  [PendingRenderProp.Roots]?: Opt<WriteRecord> | 0;
};

// A root write (`<let>` outside rendering) that initiated propagation this
// flush. Once a downstream `<await>` receives a new promise the record is
// entangled (`t` set) and everything fanned out from it is held.
export type WriteRecord = { t: Transition | 0 };

// Follows the AwaitCounter style of short single-letter properties:
// i = outstanding entangled awaits, m = merged-into forward pointer,
// u = held (scope, unit key) pairs in insertion order,
// a = resolved await appliers run at commit.
export type Transition = {
  i: number;
  m: Transition | 0;
  u: [Scope, unknown][];
  a: (() => void)[];
};

// o/e are the unit's latest logged ops/effects (replaced wholesale each time
// the unit re-runs while entangled — last-run-wins).
export type HeldUnit = { t: Transition; o: unknown[]; e: unknown[] };

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
  const roots = transitionsEnabled
    ? rendering
      ? currentRender && currentRender[PendingRenderProp.Roots]
      : nextRoot
    : 0;
  nextRoot = 0;
  if (signalKey >= 0 && (render = scope[signalKey + scopeKeyOffset])) {
    render[PendingRenderProp.Value] = value;
    if (
      render[PendingRenderProp.Gen] === runId ||
      (catchEnabled && render[PendingRenderProp.Pending])
    ) {
      if (roots) {
        render[PendingRenderProp.Roots] = mergeRoots(
          render[PendingRenderProp.Roots],
          roots,
        );
      }
      return;
    }
    render[PendingRenderProp.Gen] = runId;
    render[PendingRenderProp.Roots] = roots;
  } else {
    render = {
      [PendingRenderProp.Key]: scopeKey * scopeKeyOffset + signalKey,
      [PendingRenderProp.Scope]: scope,
      [PendingRenderProp.Signal]: signal,
      [PendingRenderProp.Value]: value,
      [PendingRenderProp.Gen]: runId,
      [PendingRenderProp.Roots]: roots,
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
    if (transitionsEnabled) {
      opLog = [];
      unitLog = [];
    }
    runRenders();
    if (transitionsEnabled) partitionAndApplyOps();
  } finally {
    runId++;
    rendering = 0;
    pendingRenders = [];
    pendingEffects = [];
    opLog = undefined;
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
  const prevOpLog = opLog;
  const prevUnitLog = unitLog;
  const preparedEffects = (pendingEffects = []);
  pendingRenders = [];
  if (transitionsEnabled) {
    opLog = [];
    unitLog = [];
  }

  try {
    rendering = 1;
    fn();
    runRenders();
    if (transitionsEnabled) partitionAndApplyOps();
  } finally {
    runId++;
    rendering = 0;
    pendingRenders = prevRenders;
    pendingEffects = prevEffects;
    opLog = prevOpLog;
    unitLog = prevUnitLog;
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

// === Async transitions ===
//
// When a state write feeds a new promise into a pending `<await>` that has
// committed content, the write's downstream observable work (DOM writes and
// effects) is held and the current UI stays in place until the promise
// settles. Values propagate eagerly exactly once; only the observable tail
// is deferred. See async-transitions-plan.md.
//
// While enabled, every flush records DOM writes into `opLog` (grouped per
// executed render via `unitLog`) instead of applying them; at the end of the
// flush the log is partitioned — entangled units move into their
// transition's hold buffer, everything else applies in order.

let transitionsEnabled: undefined | 1;
let currentRender: PendingRender | undefined;
let nextRoot: WriteRecord | 0 = 0;
export let opLog: unknown[] | undefined;
let unitLog: unknown[] = []; // stride 5: render, opStart, opEnd, fxStart, fxEnd

export function _enable_transition() {
  if (!transitionsEnabled) {
    transitionsEnabled = 1;
    runRender = ((runRender) => (render: PendingRender) => {
      const prevRender = currentRender;
      const opStart = opLog ? opLog.length : 0;
      const fxStart = pendingEffects.length;
      currentRender = render;
      try {
        runRender(render);
      } finally {
        currentRender = prevRender;
        if (
          opLog &&
          (opLog.length > opStart || pendingEffects.length > fxStart)
        ) {
          unitLog.push(
            render,
            opStart,
            opLog.length,
            fxStart,
            pendingEffects.length,
          );
        }
      }
    })(runRender);
  }
}

// Called by `_let` immediately before its `queueRender` so the queued render
// carries a fresh root record for this write.
export function setPendingRoot() {
  if (transitionsEnabled) nextRoot = { t: 0 };
}

export function logOp(fn: unknown, a?: unknown, b?: unknown, c?: unknown) {
  opLog!.push(fn, a, b, c);
}

export function applyOps(ops: unknown[]) {
  for (let i = 0; i < ops.length; ) {
    const fn = ops[i++] as ((a: unknown, b: unknown, c: unknown) => void) | 0;
    if (fn) {
      fn(ops[i++], ops[i++], ops[i++]);
    } else {
      i += 3;
    }
  }
}

// `push` mutates shared arrays, so inherited root sets may alias across
// renders; merging can then over-entangle a sibling render. That direction
// is safe (holding too much never tears), so aliasing is tolerated.
function mergeRoots(
  current: Opt<WriteRecord> | 0,
  added: Opt<WriteRecord> | 0,
): Opt<WriteRecord> | 0 {
  if (!current || current === added) return added;
  if (!added) return current;
  let result = current;
  for (const root of toArray(added)) {
    if (result !== root && !(Array.isArray(result) && result.includes(root))) {
      result = Array.isArray(result)
        ? (result.push(root), result)
        : [result as WriteRecord, root];
    }
  }
  return result;
}

export function resolveTransition(t: Transition): Transition {
  while (t.m) t = t.m;
  return t;
}

function mergeTransitions(a: Transition, b: Transition): Transition {
  b.m = a;
  a.i += b.i;
  a.u.push(...b.u);
  a.a.push(...b.a);
  return a;
}

// Called from `_await_promise` when it receives a new promise during a
// flush. Returns the (possibly merged) transition the current render's
// roots are now entangled with, or 0 when the update has no roots (not a
// state-write-driven update — e.g. initial render, resume).
export function entangleTransition(existing: Transition | 0): Transition | 0 {
  const roots = currentRender && currentRender[PendingRenderProp.Roots];
  if (!roots) return 0;
  let t: Transition | 0 = existing ? resolveTransition(existing) : 0;
  for (const root of toArray<WriteRecord>(roots)) {
    if (root.t) {
      const rootT = resolveTransition(root.t);
      t = t && t !== rootT ? mergeTransitions(t, rootT) : rootT;
    }
  }
  t ||= { i: 0, m: 0, u: [], a: [] };
  for (const root of toArray<WriteRecord>(roots)) root.t = t;
  if (!existing) t.i++;
  return t;
}

// An entangled await fulfilled: queue its resolution and commit once no
// other entangled awaits are outstanding.
export function fulfillTransition(t: Transition, resolve: () => void) {
  t = resolveTransition(t);
  t.a.push(resolve);
  if (t.i <= 1) {
    commitTransition(t);
  } else {
    t.i--;
  }
}

export function commitTransition(t: Transition) {
  t = resolveTransition(t);
  t.i = 0;
  const units = t.u;
  const resolves = t.a;
  t.u = [];
  t.a = [];
  for (const [scope, key] of units) {
    const marks = scope[AccessorProp.TransitionUnits] as
      | Map<unknown, HeldUnit>
      | undefined;
    const held = marks?.get(key);
    if (held && resolveTransition(held.t) === t) {
      marks!.delete(key);
      // Skip units whose branch was destroyed while held.
      if (scope[AccessorProp.ClosestBranch]?.[AccessorProp.Gen] !== 0) {
        applyOps(held.o);
        for (let i = 0; i < held.e.length; i += 2) {
          queueEffect(held.e[i + 1] as Scope, held.e[i] as ExecFn);
        }
      }
    }
  }
  for (const fn of resolves) fn();
}

function partitionAndApplyOps() {
  const log = opLog!;
  const units = unitLog;
  unitLog = [];
  for (let i = 0; i < units.length; ) {
    const render = units[i++] as PendingRender;
    const opStart = units[i++] as number;
    const opEnd = units[i++] as number;
    const fxStart = units[i++] as number;
    const fxEnd = units[i++] as number;
    const scope = render[PendingRenderProp.Scope];
    const signal = render[PendingRenderProp.Signal] as Signal<any, any> & {
      _?: unknown;
    };
    // Stable unit identity across re-runs: closure fan-out wrappers expose
    // their underlying signal as `_`.
    const key = signal._ || signal;
    const marks = scope[AccessorProp.TransitionUnits] as
      | Map<unknown, HeldUnit>
      | undefined;
    const held = marks?.get(key);
    let t: Transition | 0 = held ? resolveTransition(held.t) : 0;
    for (const root of toArray<WriteRecord>(
      render[PendingRenderProp.Roots] as Opt<WriteRecord>,
    )) {
      if (root.t) {
        const rootT = resolveTransition(root.t);
        t = t && t !== rootT ? mergeTransitions(t, rootT) : rootT;
      }
    }
    if (t) {
      const ops = log.slice(opStart, opEnd);
      const fx = pendingEffects.slice(fxStart, fxEnd);
      if (held) {
        held.t = t;
        held.o = ops;
        held.e = fx;
      } else {
        (
          (scope[AccessorProp.TransitionUnits] ||= new Map()) as Map<
            unknown,
            HeldUnit
          >
        ).set(key, { t, o: ops, e: fx });
        t.u.push([scope, key]);
      }
      for (let j = opStart; j < opEnd; j += 4) log[j] = 0;
      for (let j = fxStart; j < fxEnd; j += 2) pendingEffects[j] = 0;
    }
  }
  applyOps(log);
  // Compact held-out effects in place (callers alias `pendingEffects`).
  let write = 0;
  for (let read = 0; read < pendingEffects.length; read += 2) {
    if (pendingEffects[read]) {
      pendingEffects[write++] = pendingEffects[read];
      pendingEffects[write++] = pendingEffects[read + 1];
    }
  }
  pendingEffects.length = write;
}
