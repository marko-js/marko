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
  runId,
} from "./queue";
import type { SignalFn } from "./signals";

const handlePendingTry = (
  fn: SignalFn,
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

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program containing `<try>`, `<await>`, or lazy loading.
installCatch(
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
          // Doomed matches destroyed here: a replayed effect must not
          // observe a branch its own batch already retired.
          if (
            (branch = scope[AccessorProp.ClosestBranch])?.[AccessorProp.Gen] !==
              0 &&
            branch?.[AccessorProp.Doomed] !== runId &&
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
      // A render whose target sits inside a branch this same batch retired
      // is skipped outright: the batch's state must not be observable in the
      // outgoing branch, only via the committed swap. Dooming is recursive,
      // so one hop suffices. (Doomed branches stay fully viable for any
      // *other* batch until the retire applies.)
      if (branch?.[AccessorProp.Doomed] === runId) return;
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
