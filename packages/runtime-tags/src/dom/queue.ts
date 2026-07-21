import {
  AccessorPrefix,
  AccessorProp,
  type BranchScope,
  PendingRenderProp,
  type Scope,
} from "../common/types";
import { enableAwaitTransition, renderCatch } from "./control-flow";
import { enableBranches } from "./resume";
import { schedule } from "./schedule";
import type { Signal, SignalFn } from "./signals";

type ExecFn<S extends Scope = Scope> = (scope: S, arg?: any) => void;
export type PendingRender = {
  [PendingRenderProp.Key]: number;
  [PendingRenderProp.Scope]: Scope;
  [PendingRenderProp.Signal]: Signal<any, any>;
  [PendingRenderProp.Value]: unknown;
  [PendingRenderProp.Gen]: number;
  [PendingRenderProp.Pending]?: 0 | 1;
  [PendingRenderProp.Eager]?: 0 | 1;
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
      // Eagerness is sticky within a flush: an eager re-queue upgrades a
      // render already queued normally.
      if (inEager) render[PendingRenderProp.Eager] = 1;
      return;
    }
    render[PendingRenderProp.Gen] = runId;
    render[PendingRenderProp.Eager] = inEager;
  } else {
    render = {
      [PendingRenderProp.Key]: scopeKey * scopeKeyOffset + signalKey,
      [PendingRenderProp.Scope]: scope,
      [PendingRenderProp.Signal]: signal,
      [PendingRenderProp.Value]: value,
      [PendingRenderProp.Gen]: runId,
      [PendingRenderProp.Eager]: inEager,
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

// Swapped to the eager list while an eager render runs, so neither path
// branches per call.
export let queueEffect: <S extends Scope>(scope: S, fn: ExecFn<S>) => void = (
  scope,
  fn,
) => {
  pendingEffects.push(fn, scope);
};
const doQueueEffect = queueEffect;

// Replays effects parked while their region was pending (a placeholder
// release or a transition commit), skipping any the release itself queued
// fresh — a new run of the same unit supersedes its parked wiring.
export function replayEffects(parked: unknown[]) {
  const end = pendingEffects.length;
  outer: for (let i = 0; i < parked.length; i += 2) {
    for (let j = 0; j < end; j += 2) {
      if (
        pendingEffects[j] === parked[i] &&
        pendingEffects[j + 1] === parked[i + 1]
      ) {
        continue outer;
      }
    }
    queueEffect(parked[i + 1] as Scope, parked[i] as ExecFn);
  }
}

// Queues a render whose observable output must apply this flush even if the
// flush's other output is held by a transition (used by eager sources such as
// draft values and pending indicators). Renders and render effects queued
// while an eager render runs inherit the eagerness.
export function queueEagerRender<T, U extends Scope = Scope>(
  scope: U,
  signal: Signal<T, U>,
  signalKey: number,
  value?: T,
) {
  const prev = inEager;
  inEager = 1;
  queueRender(scope, signal, signalKey, value);
  inEager = prev;
}

export function run() {
  const effects = pendingEffects;
  try {
    rendering = 1;
    flushStart();
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
    typeof eagerRenderEffects,
    typeof eagerEffects,
    typeof pendingWrites,
    typeof flushTransition,
  ] = [
    pendingRenders,
    pendingEffects,
    renderEffects,
    eagerRenderEffects,
    eagerEffects,
    pendingWrites,
    flushTransition,
  ];
  const preparedEffects = (pendingEffects = []);
  pendingRenders = [];
  renderEffects = [];
  eagerRenderEffects = [];
  eagerEffects = [];
  pendingWrites = [];
  flushTransition = 0;

  try {
    rendering = 1;
    flushStart();
    fn();
    runRenders();
    flushEnd();
  } finally {
    runId++;
    rendering = 0;
    [
      pendingRenders,
      pendingEffects,
      renderEffects,
      eagerRenderEffects,
      eagerEffects,
      pendingWrites,
      flushTransition,
    ] = saved;
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

// === Async transitions (compiled render effects) ===
//
// Observable DOM mutations are not applied inline during renders: compiled
// signals emit their DOM-write statements as hoisted "render effect"
// functions queued via `_render`, and structural helpers queue their DOM
// phase the same way. A render effect re-reads scope state when it runs, so
// holding one needs no buffered values — running it once at the end (or at a
// transition commit) yields the latest output.
//
// When a state write feeds a new promise into an `<await>` with committed
// content, the flush's lazily-created transition becomes pending: that
// flush's render effects and plain effects are held wholesale, and re-runs
// of held render effects in later flushes stay held (membership in a hold
// set IS the entanglement test — no per-render provenance is tracked).
// Writes batched into the same flush therefore hold together; unrelated
// flushes commit normally. The transition commits when its last pending
// await settles (or its region is destroyed).
//
// Until `_enable_transition()` runs (emitted by the compiler only when an
// `<await>` promise expression has referenced bindings, i.e. can re-fire
// client side), `_render` applies immediately — templates without
// client-updating awaits skip the queue entirely.

export type Transition = {
  // Outstanding participating awaits; the transition commits when the last
  // one settles (resolves, rejects, or is removed).
  pendingAwaits: number;
  mergedInto: Transition | 0;
  // Terminal: a committed transition never holds or commits again; late
  // settlements run their callbacks immediately.
  committed: 0 | 1;
  // Held (scope, fn) render-effect pairs in queue order.
  heldRenderEffects: unknown[];
  heldEffects: unknown[];
  // Deferred settlement appliers (resolved awaits' reveals and rejected
  // awaits' catch callbacks), run at commit in settlement order.
  resolves: (() => void)[];
};

// The latest queued value only matters for param-driven render effects;
// scope-reading effects ignore it.
type HeldRender = { transition: Transition; value: unknown };

// A value written by an entangling flush. While the transition is pending
// the still-displayed value (`prev`) rests on the scope property — render
// effects, plain effects, and event handlers all observe what the document
// shows — and the latest parks in a companion slot, swapped onto the
// property only for the render phase of each flush so computation and
// promise expressions stay eager on the newest state. The commit makes the
// latest the plain value again. Everything stays a plain data property;
// scopes keep their shape.
type ValueMark = {
  scope: Scope;
  accessor: string;
  transition: Transition;
  prev: unknown;
  released: 0 | 1;
};

type RenderEffectFn = (scope: Scope, value?: unknown) => void;

let transitionsEnabled: undefined | 1;
let inEager: undefined | 0 | 1;
// No-ops until `_enable_transition` installs the world-state switch and
// `flushRenderEffects`, so flushes pay nothing while transitions are
// unused (and the whole subsystem below tree-shakes away when no template
// enables it).
let flushStart = () => {};
let flushEnd = () => {};
let renderEffects: unknown[] = []; // stride 3: fn, scope, value
let eagerRenderEffects: unknown[] = []; // stride 3: fn, scope, value
let eagerEffects: unknown[] = []; // stride 2: fn, scope
let pendingWrites: unknown[] = []; // stride 3: scope, accessor, prev
let flushTransition: Transition | 0 = 0;
const eagerQueueEffect: typeof queueEffect = (scope, fn) => {
  eagerEffects.push(fn, scope);
};
// The per-scope map of held units (render effects and effects alike, keyed
// by their stable fns), shared by every membership check below.
const heldMap = (scope: Scope) =>
  scope[AccessorProp.TransitionUnits] as Map<unknown, HeldRender> | undefined;
const ensureHeldMap = (scope: Scope) =>
  (scope[AccessorProp.TransitionUnits] ||= new Map()) as Map<
    unknown,
    HeldRender
  >;
const heldEntry = (scope: Scope, fn: unknown) => heldMap(scope)?.get(fn);
// Swapped in while an eager render (or the eager drain) runs: its writes
// never record, and its effects go to the always-applied list.
const enterEager = () => {
  inEager = 1;
  recordWrite = noRecordWrite;
  queueEffect = eagerQueueEffect;
};
const exitEager = () => {
  inEager = 0;
  recordWrite = doRecordWrite;
  queueEffect = doQueueEffect;
};
// Held effects awaiting their commit's flush end, where every fresh
// queueing of this flush (including ones deferred through queued renders)
// has landed and the replay can dedupe against them.
const parkedEffects: unknown[] = [];
const activeMarks: ValueMark[] = [];
let displayedMarks = 0; // live marks whose displayed value is on the scope
// Render effects that ran while values were swapped (so they wrote
// displayed values), re-applied at commit; deduped (fn, scope, value).
const loggedRenders: unknown[] = [];

// Wraps a compiled render effect as a signal-shaped fn; created once per
// effect at module init, so the inner fn is the stable identity used by the
// hold set. Applies immediately until `_enable_transition()` swaps in the
// queueing implementation, so templates without client-updating awaits pay
// only the extra call.
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

// Structural output that must reach the screen at this flush's end even
// while a transition holds other output (placeholder dismissal, detached
// await re-attachment).
export let queueEagerRenderEffect: <S extends Scope>(
  fn: (scope: S) => void,
  scope: S,
) => void = (fn, scope) => {
  fn(scope);
};

export function _enable_transition() {
  if (!transitionsEnabled) {
    transitionsEnabled = 1;
    flushStart = showLatestValues;
    flushEnd = flushRenderEffects;
    enableAwaitTransition();
    writeSignal = (scope, accessor, value, fn, id) => {
      const prev = scope[accessor];
      // Dirty-check against the pending latest of a marked value — the
      // state the world is heading toward — so an equal write re-fires
      // nothing while a revert to the displayed value still supersedes.
      if (
        (displayedMarks && findMark(scope, accessor)
          ? scope[AccessorPrefix.TransitionValue + accessor]
          : prev) !== value ||
        !(accessor in scope)
      ) {
        scope[accessor] = value;
        if (fn) {
          schedule();
          recordWrite(scope, accessor, prev);
          queueRender(scope, fn, id);
        }
      } else if (prev !== value) {
        // The pending world already holds this value: it stays visible for
        // the tick (read-your-writes) with no downstream re-run, and the
        // scheduled flush's end re-rests the displayed value.
        scope[accessor] = value;
        schedule();
      }
    };
    recordWrite = doRecordWrite = (scope, accessor, prev) => {
      pendingWrites.push(scope, accessor, prev);
      // A write while displayed values are up lands on the plain property
      // (read-your-writes); sync a marked value's parked latest so the next
      // render phase shows this write instead of the stale latest.
      if (displayedMarks && findMark(scope, accessor)) {
        scope[AccessorPrefix.TransitionValue + accessor] = scope[accessor];
      }
    };
    queueRenderEffect = (fn, scope, value?) => {
      const entry = heldEntry(scope, fn);
      // Already held by a pending transition: stays held (it will run at
      // commit and read the then-current state); just keep the latest value.
      // An eager queue additionally applies now, without releasing the hold.
      if (entry) {
        entry.value = value;
        if (!inEager) return;
      }
      (inEager ? eagerRenderEffects : renderEffects).push(fn, scope, value);
    };
    queueEagerRenderEffect = (fn, scope) => {
      eagerRenderEffects.push(fn, scope, 0);
    };
    // Renders queued by an eager render inherit its eagerness, and its
    // writes go unrecorded: they are defined as never participating in
    // holds, so their output stays live even when the write lands in an
    // entangling flush.
    runRender = ((runRender) => (render: PendingRender) => {
      if (render[PendingRenderProp.Eager]) {
        enterEager();
        try {
          runRender(render);
        } finally {
          exitEager();
        }
      } else {
        runRender(render);
      }
    })(runRender);
  }
}

// The out-of-render `_let` write path, swappable so `_enable_transition`
// can dirty-check against a marked value's parked latest instead of the
// displayed value (and absorb writes the pending world already contains)
// without templates that never enable transitions paying for it.
export let writeSignal: (
  scope: Scope,
  accessor: string,
  value: unknown,
  fn: SignalFn | undefined,
  id: number,
) => void = (scope, accessor, value, fn, id) => {
  const prev = scope[accessor];
  if (
    (prev !== value || !(accessor in scope)) &&
    ((scope[accessor] = value), fn)
  ) {
    schedule();
    queueRender(scope, fn, id);
  }
};

// `_let` (before its queueRender) and `_const` record writes so the values
// written by an entangling flush can be marked. `prev` is the displayed
// value before the write. A no-op until `_enable_transition`, and swapped
// back to one while an eager render runs, so the write path never branches.
const noRecordWrite: typeof recordWrite = () => {};
export let recordWrite: (
  scope: Scope,
  accessor: string,
  prev: unknown,
) => void = noRecordWrite;
let doRecordWrite = noRecordWrite;

function flushRenderEffects() {
  const fx = renderEffects;
  const writes = pendingWrites;
  const t = flushTransition;
  renderEffects = [];
  pendingWrites = [];
  flushTransition = 0;
  if (t) {
    for (let i = 0; i < writes.length; i += 3) {
      markValue(writes[i] as Scope, writes[i + 1] as string, writes[i + 2], t);
    }
    for (let i = 0; i < fx.length; i += 3) {
      const fn = fx[i] as RenderEffectFn;
      const scope = fx[i + 1] as Scope;
      const held = ensureHeldMap(scope);
      const entry = held.get(fn);
      if (entry) {
        entry.value = fx[i + 2];
      } else {
        held.set(fn, { transition: t, value: fx[i + 2] });
        t.heldRenderEffects.push(scope, fn);
      }
    }
    // Hold this flush's plain effects, registering each in the scope's
    // held map so re-queues while pending stay held (and dedupe here).
    for (let i = 0; i < pendingEffects.length; i += 2) {
      const fn = pendingEffects[i];
      const scope = pendingEffects[i + 1] as Scope;
      const held = ensureHeldMap(scope);
      if (!held.has(fn)) {
        held.set(fn, { transition: t, value: 0 });
        t.heldEffects.push(fn, scope);
      }
    }
    pendingEffects.length = 0;
  } else if (pendingEffects.length && wroteMarkedValues(writes)) {
    // A flush that re-writes entangled state without reaching the await
    // belongs to the pending transition: its re-queues of held effects stay
    // held. (Re-queues from genuinely unrelated flushes run now — a fresh
    // observation of the displayed world — and still replay at commit.)
    let live = 0;
    for (let i = 0; i < pendingEffects.length; i += 2) {
      if (!heldEntry(pendingEffects[i + 1] as Scope, pendingEffects[i])) {
        pendingEffects[live++] = pendingEffects[i];
        pendingEffects[live++] = pendingEffects[i + 1];
      }
    }
    pendingEffects.length = live;
  }
  showDisplayedValues();
  if (!t) runRenderEffectList(fx);
  // Applying render effects can queue more: a spread's dynamic content
  // swap, a mid-drain commit re-applying held output, and eager entries —
  // which apply even when this flush's own output was held. Drain until
  // quiet.
  while (renderEffects.length || eagerRenderEffects.length) {
    if (renderEffects.length) {
      const next = renderEffects;
      renderEffects = [];
      runRenderEffectList(next);
    }
    if (eagerRenderEffects.length) {
      enterEager();
      const next = eagerRenderEffects;
      eagerRenderEffects = [];
      runRenderEffectList(next);
      exitEager();
    }
  }
  // Displayed values stay on the properties past the flush: everything
  // outside a render phase — render effects, plain effects, event
  // handlers — observes what the document shows until the commit.
  // Effects a commit released replay now, when every fresh queueing of the
  // flush (including ones deferred through queued renders) has landed and
  // the dedupe is complete.
  if (parkedEffects.length) {
    const replay: unknown[] = [];
    for (let i = 0; i < parkedEffects.length; i += 2) {
      const fn = parkedEffects[i];
      const scope = parkedEffects[i + 1] as Scope;
      if (heldEntry(scope, fn)) {
        heldMap(scope)!.delete(fn);
        replay.push(fn, scope);
      }
    }
    parkedEffects.length = 0;
    replayEffects(replay);
  }
  // Eager plain effects rejoin this flush's effect list past any hold.
  if (eagerEffects.length) {
    for (const item of eagerEffects) pendingEffects.push(item);
    eagerEffects.length = 0;
  }
}

// The two world states are idempotent transitions, so a nested flush from
// any phase lands in a consistent state: displayed values rest on the
// properties (with the latest parked in companion slots) everywhere except
// the render phase of a flush, where the latest is shown for eager
// computation and promise expressions. Released marks compact away when
// the displayed state is entered.
function showDisplayedValues() {
  if (!displayedMarks) {
    let live = 0;
    for (const mark of activeMarks) {
      if (!mark.released) {
        activeMarks[live++] = mark;
        const { scope, accessor } = mark;
        scope[AccessorPrefix.TransitionValue + accessor] = scope[accessor];
        scope[accessor] = mark.prev;
      }
    }
    displayedMarks = activeMarks.length = live;
  }
}

function showLatestValues() {
  if (displayedMarks) {
    displayedMarks = 0;
    for (const mark of activeMarks) {
      if (!mark.released) {
        mark.scope[mark.accessor] =
          mark.scope[AccessorPrefix.TransitionValue + mark.accessor];
      }
    }
  }
}

function runRenderEffectList(fx: unknown[]) {
  for (let i = 0; i < fx.length; i += 3) {
    const fn = fx[i] as RenderEffectFn;
    const scope = fx[i + 1] as Scope;
    if (scope[AccessorProp.ClosestBranch]?.[AccessorProp.Gen] !== 0) {
      // Effects running while values are swapped wrote displayed values, so
      // they are remembered to re-apply at commit — except held effects,
      // which their transition re-applies anyway.
      if (displayedMarks && !heldEntry(scope, fn)) {
        logRender: {
          for (let j = 0; j < loggedRenders.length; j += 3) {
            if (loggedRenders[j] === fn && loggedRenders[j + 1] === scope) {
              loggedRenders[j + 2] = fx[i + 2];
              break logRender;
            }
          }
          loggedRenders.push(fn, scope, fx[i + 2]);
        }
      }
      try {
        fn(scope, fx[i + 2]);
      } catch (error) {
        renderCatch(scope, error);
      }
    }
  }
}

function findMark(scope: unknown, accessor: unknown) {
  for (const mark of activeMarks) {
    if (!mark.released && mark.scope === scope && mark.accessor === accessor) {
      return mark;
    }
  }
}

function wroteMarkedValues(writes: unknown[]) {
  if (activeMarks.length) {
    for (let i = 0; i < writes.length; i += 3) {
      if (findMark(writes[i], writes[i + 1])) return 1;
    }
  }
}

function markValue(
  scope: Scope,
  accessor: string,
  prev: unknown,
  t: Transition,
) {
  const mark = findMark(scope, accessor);
  if (mark) {
    // Keep the first `prev` — it is what the DOM still displays; the
    // newest transition to write the value owns its release.
    mark.transition = t;
  } else {
    activeMarks.push({ scope, accessor, transition: t, prev, released: 0 });
  }
}

export function resolveTransition(t: Transition): Transition {
  while (t.mergedInto) t = t.mergedInto;
  return t;
}

function mergeTransitions(a: Transition, b: Transition): Transition {
  if (MARKO_DEBUG && (a.committed || b.committed)) {
    throw new Error("Merged a committed transition");
  }
  b.mergedInto = a;
  a.pendingAwaits += b.pendingAwaits;
  for (const item of b.heldRenderEffects) a.heldRenderEffects.push(item);
  for (const item of b.heldEffects) a.heldEffects.push(item);
  a.resolves.push(...b.resolves);
  return a;
}

// Called from `_await_promise` when a new promise arrives during a flush
// for an await with committed content. The flush's transition is created
// lazily and shared by everything batched into the same flush.
export function entangleTransition(existing: Transition | 0): Transition {
  let t: Transition | 0 = existing ? resolveTransition(existing) : 0;
  const flushT: Transition | 0 = flushTransition
    ? resolveTransition(flushTransition)
    : 0;
  if (flushT && t && flushT !== t) {
    t = mergeTransitions(t, flushT);
  } else {
    t ||= flushT || {
      pendingAwaits: 0,
      mergedInto: 0,
      committed: 0,
      heldRenderEffects: [],
      heldEffects: [],
      resolves: [],
    };
  }
  flushTransition = t;
  if (!existing) t.pendingAwaits++;
  return t;
}

// Settles one participating await — resolution, rejection, and removal all
// alike. The callback (a resolved await's reveal, or a rejected await's
// catch) is deferred until the final participant settles, when the commit
// runs every callback in settlement order. Settling an already-committed
// transition runs the callback immediately instead: a late settlement never
// re-holds or re-commits.
export function settleTransition(t: Transition, apply?: () => void) {
  t = resolveTransition(t);
  if (t.committed) {
    apply?.();
  } else {
    if (MARKO_DEBUG && t.pendingAwaits < 1) {
      throw new Error("Transition settled more times than it has awaits");
    }
    if (apply) t.resolves.push(apply);
    if (t.pendingAwaits > 1) {
      t.pendingAwaits--;
    } else {
      commitTransition(t);
    }
  }
}

function commitTransition(t: Transition) {
  t.committed = 1;
  t.pendingAwaits = 0;
  const held = t.heldRenderEffects;
  const resolves = t.resolves;
  const heldEffects = t.heldEffects;
  t.heldRenderEffects = [];
  t.resolves = [];
  t.heldEffects = [];
  // Release this transition's values: the latest value becomes (or stays)
  // the live property, and the companion slot settles on a copy of it.
  for (const mark of activeMarks) {
    if (!mark.released && resolveTransition(mark.transition) === t) {
      mark.released = 1;
      const { scope, accessor } = mark;
      const slot = AccessorPrefix.TransitionValue + accessor;
      if (displayedMarks) {
        scope[accessor] = scope[slot];
        displayedMarks--;
      } else {
        scope[slot] = scope[accessor];
      }
    }
  }
  // Re-queue held output for this flush's drain, where it reads the
  // released (latest) state; other transitions' values stay swapped there,
  // so a held effect that also read one of those still writes what that
  // transition displays.
  for (let i = 0; i < held.length; i += 2) {
    const scope = held[i] as Scope;
    const fn = held[i + 1] as RenderEffectFn;
    const entry = heldEntry(scope, fn);
    if (entry && resolveTransition(entry.transition) === t) {
      heldMap(scope)!.delete(fn);
      renderEffects.push(fn, scope, entry.value);
    }
  }
  for (const fn of resolves) fn();
  // Re-queue render effects that wrote since-released values; ones that
  // still read another pending transition's value re-log during the drain.
  for (const item of loggedRenders) renderEffects.push(item);
  loggedRenders.length = 0;
  // Held effects release at this flush's end: their held-map entries stay
  // in place until then so any queueing the commit causes (directly or
  // through a queued render) is skipped, and the release runs each exactly
  // once with the dedupe complete.
  for (const item of heldEffects) parkedEffects.push(item);
}
