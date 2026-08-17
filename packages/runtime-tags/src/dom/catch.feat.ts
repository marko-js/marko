import { PLACEHOLDER_DISMISS_REGISTER_ID } from "../common/meta";
import {
  AccessorProp,
  type BranchScope,
  PendingRenderProp,
  type Scope,
} from "../common/types";
import { renderCatch } from "./control-flow";
import {
  caughtError,
  installCatch,
  type PendingRender,
  placeholderShown,
} from "./queue";
import { _resume } from "./resume";
import { destroyBranch } from "./scope";
import type { SignalFn } from "./signals";

// A resumed try's stateful placeholder is a live branch until the streamed
// body lands; the body's flush carries this effect on the try branch.
const destroyResumedPlaceholder = (tryBranch: BranchScope) => {
  const placeholderBranch = tryBranch[AccessorProp.PlaceholderBranch];
  if (placeholderBranch) {
    tryBranch[AccessorProp.PlaceholderBranch] = 0;
    destroyBranch(placeholderBranch);
  }
};
_resume(PLACEHOLDER_DISMISS_REGISTER_ID, destroyResumedPlaceholder);

const handlePendingTry = (
  fn: SignalFn,
  scope: Scope,
  branch: BranchScope | undefined,
) => {
  // Defer the fn onto the nearest ancestor try branch still awaiting;
  // a truthy return means it was deferred (or dropped).
  let parent: BranchScope | undefined;
  while (branch) {
    parent = branch[AccessorProp.ParentBranch];
    if (parent?.[AccessorProp.PlaceholderBranch] === branch) {
      // A resumed placeholder is live until its body swaps it out — dropped
      // when the swap beat its effects (the reorder runtime parked it).
      if (branch[AccessorProp.StartNode].isConnected) return;
      return (destroyResumedPlaceholder(parent), 1);
    }
    if (branch[AccessorProp.AwaitCounter]?.i) {
      return (branch[AccessorProp.PendingEffects] ||= []).push(fn, scope);
    }
    branch = parent;
  }
};

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program containing `<try>`, `<await>`, or lazy loading.
installCatch(
  // Deliberately no per-effect try/catch: an error thrown from a `<script>` or
  // `<lifecycle>` body escapes the flush instead of reaching `@catch`.
  (runEffects) =>
    (effects, checkPending = placeholderShown.has(effects)) => {
      if (checkPending || caughtError.has(effects)) {
        let i = 0;
        let fn: SignalFn;
        let scope: Scope;
        let branch: BranchScope | undefined;
        for (; i < effects.length;) {
          fn = effects[i++] as SignalFn;
          scope = effects[i++] as Scope;
          if (
            (branch = scope[AccessorProp.ClosestBranch])?.[AccessorProp.Gen] !==
              0 &&
            !(checkPending && handlePendingTry(fn, scope, branch))
          ) {
            fn(scope);
          }
        }
      } else {
        runEffects(effects);
      }
    },
  (runRender) => (render: PendingRender) => {
    try {
      let branch = render[PendingRenderProp.Scope][AccessorProp.ClosestBranch];
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
  },
);
