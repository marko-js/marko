import { withBranches } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  PatchKey,
  RendererProp,
  type Scope,
} from "../common/types";
import {
  createAwaitCounter,
  dismissPlaceholder,
  renderCatch,
} from "./control-flow";
import { getShellContent, shells } from "./patch-branch.feat";
import {
  pendingEffects,
  placeholderShown,
  queueRender,
  rendering,
} from "./queue";
import { createAndSetupBranch, createBranch, type Renderer } from "./renderer";
import {
  failPatch,
  getRegisteredWithScope,
  patchers,
  patchScope,
} from "./resume";
import {
  collectScopes,
  findBranchWithKey,
  insertBranchBefore,
  syncGen,
  tempDetachBranch,
} from "./scope";

// Await/try bodies resume as branches on pages that never load control-flow.
withBranches();

function beginAwaitPending(scope: Scope, nodeAccessor: string) {
  const awaitBranch = scope[
    AccessorPrefix.BranchScopes + nodeAccessor
  ] as BranchScope;
  const tryPlaceholder = findBranchWithKey(
    scope,
    AccessorProp.PlaceholderContent,
  );
  const tryBranch = tryPlaceholder || awaitBranch;
  if (!tryBranch) return;

  placeholderShown.add(pendingEffects);
  let awaitCounter = tryBranch[AccessorProp.AwaitCounter] as
    | AwaitCounter
    | undefined;
  if (!awaitCounter?.i) {
    awaitCounter = createAwaitCounter(tryBranch, () =>
      tryPlaceholder
        ? dismissPlaceholder(tryPlaceholder)
        : restoreDetached(scope, nodeAccessor),
    );
  }
  awaitCounter.i++;

  if (tryPlaceholder) {
    insertBranchBefore(
      (tryPlaceholder[AccessorProp.PlaceholderBranch] = createAndSetupBranch(
        tryPlaceholder[AccessorProp.Global],
        tryPlaceholder[AccessorProp.PlaceholderContent] as Renderer,
        tryPlaceholder[AccessorProp.Owner]!,
        tryPlaceholder[AccessorProp.StartNode].parentNode!,
      )),
      tryPlaceholder[AccessorProp.StartNode].parentNode!,
      tryPlaceholder[AccessorProp.StartNode],
    );
    tempDetachBranch(tryPlaceholder);
  } else if (awaitBranch && !awaitBranch[AccessorProp.DetachedAwait]) {
    awaitBranch[AccessorProp.StartNode].parentNode!.insertBefore(
      scope[nodeAccessor] as Node,
      awaitBranch[AccessorProp.StartNode],
    );
    tempDetachBranch(tryBranch);
  }
}

function restoreDetached(scope: Scope, nodeAccessor: string) {
  const anchor = scope[nodeAccessor] as ChildNode;
  if (!anchor.parentNode) return;
  const detachedParent = (
    scope[AccessorPrefix.BranchScopes + nodeAccessor] as BranchScope
  )[AccessorProp.StartNode].parentNode!;
  if (detachedParent === anchor.parentNode) anchor.remove();
  else anchor.replaceWith(detachedParent);
}

function endAwaitPending(scope: Scope, nodeAccessor: string) {
  const awaitBranch = scope[
    AccessorPrefix.BranchScopes + nodeAccessor
  ] as BranchScope;
  const tryPlaceholder = findBranchWithKey(
    scope,
    AccessorProp.PlaceholderContent,
  );
  const tryBranch = tryPlaceholder || awaitBranch;
  const awaitCounter = tryBranch?.[AccessorProp.AwaitCounter] as
    | AwaitCounter
    | undefined;
  if (!awaitCounter?.i) return;

  if (tryPlaceholder) {
    awaitCounter.c();
    return;
  }

  const anchor = scope[nodeAccessor] as ChildNode | undefined;
  const detachedParent = awaitBranch?.[AccessorProp.StartNode]?.parentNode;
  if (
    anchor?.parentNode &&
    detachedParent &&
    detachedParent !== anchor.parentNode
  ) {
    awaitCounter.c();
  } else {
    awaitCounter.i = 0;
  }
}

const settled = new WeakMap<Scope, Set<string>>();

patchers[PatchKey.Pending] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.Pending.length);
  const link = (AccessorPrefix.BranchScopes + accessor) as Accessor;
  // The server now owns this await frame. Invalidate a promise started while
  // setting up a newly constructed parent body so its stale resolution drops.
  scope[(AccessorPrefix.Promise + accessor) as Accessor] = 0 as never;
  // A construct has no live await branch, so the entry's id delivers the
  // body's content: a shipped record on scriptless pages (no dom module),
  // a dom-module registration otherwise. Mirrors `_await_content`.
  if (typeof value === "string" && !scope[link]) {
    const shell = shells[value];
    if (shell) {
      const renderer = getShellContent(shell);
      const pendingScopes = collectScopes(
        () =>
          ((
            (scope[link] = createBranch(
              scope[AccessorProp.Global],
              renderer,
              scope,
              (scope[accessor as Accessor] as ChildNode).parentNode!,
            )) as BranchScope
          )[AccessorProp.DetachedAwait] = renderer),
      );
      (scope[link] as BranchScope)[AccessorProp.PendingScopes] = pendingScopes;
    } else {
      (
        (getRegisteredWithScope(value) || failPatch()) as (scope: Scope) => void
      )(scope);
    }
  }
  // Same-frame settle (Promise.resolve) also writes Child; skip pending UI.
  queueMicrotask(() => {
    if (!settled.get(scope)?.has(accessor)) beginAwaitPending(scope, accessor);
  });
};

function markSettled(scope: Scope, accessor: string) {
  (settled.get(scope) ?? settled.set(scope, new Set()).get(scope)!).add(
    accessor,
  );
}

function attachDetachedAwait(
  scope: Scope,
  accessor: string,
  applyChildPartial: () => void,
) {
  const awaitBranch = scope[
    AccessorPrefix.BranchScopes + accessor
  ] as BranchScope;
  if (!awaitBranch?.[AccessorProp.DetachedAwait]) return false;
  awaitBranch[AccessorProp.PendingScopes] =
    awaitBranch[AccessorProp.PendingScopes]?.forEach(syncGen);
  const renderer = awaitBranch[AccessorProp.DetachedAwait] as Renderer;
  const setupAndAttach = () => {
    renderer[RendererProp.Setup]?.(awaitBranch);
    applyChildPartial();
    const anchor = scope[accessor] as ChildNode;
    insertBranchBefore(awaitBranch, anchor.parentNode!, anchor);
    anchor.remove();
    endAwaitPending(scope, accessor);
  };
  if (rendering) setupAndAttach();
  else queueRender(awaitBranch, setupAndAttach, -1);
  awaitBranch[AccessorProp.DetachedAwait] = 0;
  return true;
}

const applyChild = patchers[PatchKey.Child];
patchers[PatchKey.Child] = (scope, key, value) => {
  const link = key.slice(PatchKey.Child.length) as Accessor;
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  const apply = () => {
    if (applyChild) applyChild(scope, key, value);
    else patchScope(value as Scope, scope[link] as Scope);
    markSettled(scope, accessor);
  };
  // A newly constructed await body may itself initialize nested boundaries.
  // Run that setup before applying the settled child partial.
  if (!attachDetachedAwait(scope, accessor, apply)) {
    apply();
    endAwaitPending(scope, accessor);
  }
};

patchers[PatchKey.Catch] = (scope, key, error) => {
  const accessor = key.slice(PatchKey.Catch.length);
  markSettled(scope, accessor);
  endAwaitPending(scope, accessor);
  renderCatch(scope, error);
};
