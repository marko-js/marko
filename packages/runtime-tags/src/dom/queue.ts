import { branchesEnabled, withBranches } from "../common/helpers";
import { AccessorProp, PendingRenderProp, type Scope } from "../common/types";
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
export let pendingEffects: unknown[] = [];
let pendingRenders: PendingRender[] = [];
// Debug only: the run each render last ran in.
const ranRenders = /*@__PURE__*/ new WeakMap<PendingRender, number>();

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
      if (
        MARKO_DEBUG &&
        !render[PendingRenderProp.Pending] &&
        ranRenders.get(render) === runId
      ) {
        console.error(
          "A render was queued again after it ran in this update, so its latest value is dropped. This is a bug in Marko.",
        );
      }
      return;
    }
    render[PendingRenderProp.Gen] = runId;
  } else {
    render = {
      // Orders pending renders across scopes; signal keys are per-section
      // binding ids, so they always fit well below the 1e6 scale.
      [PendingRenderProp.Key]: scopeKey * 1e6 + signalKey,
      [PendingRenderProp.Scope]: scope,
      [PendingRenderProp.Signal]: signal,
      [PendingRenderProp.Value]: value,
      [PendingRenderProp.Gen]: runId,
    };
    if (signalKey >= 0) scope[signalKey] = render;
  }
  queuePendingRender(render);
}

// `installBranchRenders` routes some renders into a branch's own heap.
export let queuePendingRender = (render: PendingRender) => {
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
};

// A dynamic tag's branch, or the scopes a lazy tag's module clones, come after
// the owner's walk and sort after the variable's readers; their renders run
// from a heap of their own instead, as one render where a static child's sort.
export function createBranchRenders(
  scope: Scope,
  scopeKey: number,
): PendingRender {
  return {
    // Just before the scope's own renders, as an unkeyed render sorts.
    [PendingRenderProp.Key]: scopeKey * 1e6 - 1,
    [PendingRenderProp.Scope]: scope,
    [PendingRenderProp.Signal]: runBranchRenders,
    [PendingRenderProp.Value]: [],
    [PendingRenderProp.Gen]: 0,
  };
}

export function installBranchRenders() {
  const queue = queuePendingRender;
  queuePendingRender = (render) => {
    const branchRenders =
      render[PendingRenderProp.Scope][AccessorProp.ClosestBranch]?.[
        AccessorProp.BranchRenders
      ];
    if (branchRenders) {
      // A heap a thrown update left is dropped like `pendingRenders`, unless
      // a pending `<try>` holds its render.
      if (
        branchRenders[PendingRenderProp.Gen] !== runId &&
        !branchRenders[PendingRenderProp.Pending]
      ) {
        branchRenders[PendingRenderProp.Value] = [];
      }
      branchRenders[PendingRenderProp.Gen] = runId;
      const renders = branchRenders[PendingRenderProp.Value] as PendingRender[];
      if (!renders.length) queuePendingRender(branchRenders);
      const prev = pendingRenders;
      pendingRenders = renders;
      queue(render);
      pendingRenders = prev;
    } else {
      queue(render);
    }
  };
}

function runBranchRenders(_scope: Scope, renders: PendingRender[]) {
  runRenders(renders);
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
}) as (effects: unknown[]) => void;

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
// The catch machinery lives in `catch.feat`; it installs by replacing the
// plain dispatchers, which imported bindings cannot reassign directly.
export function installCatch(
  catchEffects: typeof runEffects,
  wrapRender: (base: typeof runRender) => typeof runRender,
) {
  catchEnabled = 1;
  withBranches();
  runEffects = catchEffects;
  runRender = wrapRender(runRender);
}

export function runRenders(renders = pendingRenders) {
  while (renders.length) {
    const render = renders[0];
    const item = renders.pop()!;

    if (render !== item) {
      let i = 0;
      const mid = renders.length >> 1;
      const key = (renders[0] = item)[PendingRenderProp.Key];

      while (i < mid) {
        let bestChild = (i << 1) + 1;
        const right = bestChild + 1;

        if (
          right < renders.length &&
          renders[right][PendingRenderProp.Key] -
            renders[bestChild][PendingRenderProp.Key] <
            0
        ) {
          bestChild = right;
        }

        if (renders[bestChild][PendingRenderProp.Key] - key >= 0) {
          break;
        } else {
          renders[i] = renders[bestChild];
          i = bestChild;
        }
      }

      renders[i] = item;
    }

    if (MARKO_DEBUG) ranRenders.set(render, runId);
    runRender(render);
  }
}
