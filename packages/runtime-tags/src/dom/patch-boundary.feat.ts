import { withBranches } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  PatchKey,
  type Scope,
} from "../common/types";
import { createAwaitCounter, dismissPlaceholder } from "./control-flow";
import { pendingEffects, placeholderShown } from "./queue";
import { createAndSetupBranch, type Renderer } from "./renderer";
import { patchers, walkScope } from "./resume";
import {
  findBranchWithKey,
  insertBranchBefore,
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

patchers[PatchKey.Pending] = (scope, key) => {
  const accessor = key.slice(PatchKey.Pending.length);
  // Same-frame settle (Promise.resolve) also writes Child; skip pending UI.
  queueMicrotask(() => {
    if (!settled.get(scope)?.has(accessor)) beginAwaitPending(scope, accessor);
  });
};

const applyChild = patchers[PatchKey.Child];
patchers[PatchKey.Child] = (scope, key, value) => {
  const link = key.slice(PatchKey.Child.length) as Accessor;
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  if (applyChild) applyChild(scope, key, value);
  else walkScope(value as Scope, scope[link] as Scope);
  (settled.get(scope) ?? settled.set(scope, new Set()).get(scope)!).add(
    accessor,
  );
  endAwaitPending(scope, accessor);
};
