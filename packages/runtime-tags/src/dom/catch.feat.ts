import {
  AccessorProp,
  type AwaitCounter,
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
  // Defer the fn onto its scope, listed on the nearest ancestor try branch still
  // awaiting, once per scope and fn; a truthy return means it was deferred.
  while (branch) {
    if (branch[AccessorProp.AwaitCounter]?.i) {
      // A resumed counter completes in the inline runtime, outside any flush,
      // so the try's first deferral makes it schedule one to release them.
      return (scope[AccessorProp.PendingEffects] ||=
        ((branch[AccessorProp.PendingEffectScopes] ||=
          (branch[AccessorProp.AwaitCounter].m &&
            ((complete: AwaitCounter["c"]) =>
              (branch[AccessorProp.AwaitCounter]!.c = () =>
                complete() ||
                queueAsyncRender(branch!, queueEffect, runPendingEffects)))(
              branch[AccessorProp.AwaitCounter].c,
            ),
          [])).push(scope),
        new Set())).add(fn);
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
