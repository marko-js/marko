import {
  AccessorProp,
  type BranchScope,
  PendingRenderProp,
  type Scope,
} from "../common/types";
import { renderCatch, runPendingEffects } from "./control-flow";
import {
  installCatch,
  type PendingRender,
  queueAsyncRender,
  queueEffect,
} from "./queue";
import type { SignalFn } from "./signals";

const handlePendingTry = (
  fn: SignalFn,
  scope: Scope,
  branch: BranchScope | undefined,
) => {
  // Defer the fn onto the nearest ancestor try branch still awaiting, at most
  // once per scope; a truthy return means it was deferred.
  while (branch) {
    const awaitCounter = branch[AccessorProp.AwaitCounter];
    if (awaitCounter?.i) {
      let pending = branch[AccessorProp.PendingEffects];
      if (!pending) {
        pending = branch[AccessorProp.PendingEffects] = new Map();
        if (awaitCounter.m) {
          // A resumed counter completes in the inline runtime, outside any
          // flush, so it schedules one to release what waited on it.
          const complete = awaitCounter.c;
          awaitCounter.c = () =>
            complete() ||
            queueAsyncRender(branch!, queueEffect, runPendingEffects);
        }
      }
      return (
        pending.get(scope) || pending.set(scope, new Set()).get(scope)!
      ).add(fn);
    }
    branch = branch[AccessorProp.ParentBranch];
  }
};

// Module evaluation is the enablement: the compiler injects this side-effect
// import once per program containing `<try>`, `<await>`, or lazy loading.
installCatch(
  // Deliberately no per-effect try/catch: an error thrown from a `<script>` or
  // `<lifecycle>` body escapes the flush instead of reaching `@catch`.
  (effects) => {
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
        !handlePendingTry(fn, scope, branch)
      ) {
        fn(scope);
      }
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
