import {
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  PendingRenderProp,
  RendererProp,
  type Scope,
} from "../common/types";
import {
  caughtError,
  enableCatchPending,
  pendingEffects,
  type PendingRender,
  placeholderShown,
} from "./queue";
import { createAndSetupBranch } from "./renderer";
import {
  destroyBranch,
  findBranchWithKey,
  setConditionalRenderer,
} from "./scope";

/**
 * Enables `<try>` catch/pending semantics: effects and renders check their
 * closest branch for pending awaits and caught errors. Lives in its own
 * module (not the queue, which only exposes the wrap hooks, and not
 * control-flow, which hosts branch construction plus its for/spread
 * imports) so an await/try page's slim hydration bundle pays only for the
 * catch machinery itself -- a module is hosted in one chunk and the queue
 * is eager in every bundle.
 */
export function _enable_catch() {
  enableCatchPending(
    (runEffects) =>
      (effects: unknown[], checkPending = placeholderShown.has(effects)) => {
        if (checkPending || caughtError.has(effects)) {
          let i = 0;
          let fn: (scope: Scope) => void;
          let scope: Scope;
          let branch: BranchScope | undefined;
          for (; i < effects.length; ) {
            fn = effects[i++] as (scope: Scope) => void;
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
      },
    (runRender) => (render: PendingRender) => {
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
    },
  );
}

// walk up the branches to see if any have an AwaitCounter with count (i) > 0
// if not, return false
// if so, return true and push the fn to the pending async queue on the try
// branch
function handlePendingTry(
  fn: (scope: Scope) => void,
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

export function renderCatch(scope: Scope, error: unknown) {
  const tryWithCatch = findBranchWithKey(scope, AccessorProp.CatchContent);
  if (!tryWithCatch) {
    throw error;
  } else {
    const owner = tryWithCatch[AccessorProp.Owner]!;
    const placeholderBranch = tryWithCatch[
      AccessorProp.PlaceholderBranch
    ] as BranchScope;
    if (placeholderBranch) {
      if (tryWithCatch[AccessorProp.AwaitCounter])
        (tryWithCatch[AccessorProp.AwaitCounter] as AwaitCounter).i = 0;
      owner[
        AccessorPrefix.BranchScopes + tryWithCatch[AccessorProp.BranchAccessor]
      ] = placeholderBranch;
      destroyBranch(tryWithCatch);
    }
    caughtError.add(pendingEffects);
    setConditionalRenderer(
      owner,
      tryWithCatch[AccessorProp.BranchAccessor],
      tryWithCatch[AccessorProp.CatchContent],
      createAndSetupBranch,
    );
    tryWithCatch[AccessorProp.CatchContent]?.[RendererProp.Params]?.(
      owner[
        AccessorPrefix.BranchScopes + tryWithCatch[AccessorProp.BranchAccessor]
      ],
      [error],
    );
  }
}
