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
import { getShellContent, shells } from "./patch-shells";
import "./patch-child.feat";
import {
  pendingEffects,
  placeholderShown,
  queueRender,
  rendering,
} from "./queue";
import {
  _content,
  createAndSetupBranch,
  createBranch,
  type Renderer,
} from "./renderer";
import {
  failPatch,
  getRegisteredWithScope,
  patchers,
  patchScope,
  withConstructing,
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
  // A settle from an earlier response must not hide this frame's pending UI.
  settled.get(scope)?.delete(accessor);
  // A construct has no live await branch: the entry's id delivers the body
  // content record its frame shipped. Mirrors `_await_content`.
  if (typeof value === "string" && !scope[link]) {
    const renderer = getShellContent(shells[value]);
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
    // A shell content's walk created the body's scopes with no setup.
    if ((renderer as { [RendererProp.Shell]?: 1 })[RendererProp.Shell]) {
      withConstructing(applyChildPartial);
    } else {
      applyChildPartial();
    }
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

// A boundary slot: `0` stays the elided sentinel; an id resolves through
// the shipped record or the dom registration against the try's owner.
function resolveBoundaryContent(id: string | 0, owner: Scope) {
  if (id === 0) return 0;
  const shell = shells[id];
  if (shell) return getShellContent(shell, id, owner);
  return (getRegisteredWithScope(id) as (owner: Scope) => unknown)(owner);
}

const applyChild = patchers[PatchKey.Child];
patchers[PatchKey.Child] = (scope, key, value) => {
  const link = key.slice(PatchKey.Child.length) as Accessor;
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  // A boundary entry `[partial, contentId, catchId?, placeholderId?]`
  // rebuilds a missing branch from its content id, then applies the partial.
  if (Array.isArray(value)) {
    const [partial, contentId, catchId, placeholderId] = value as [
      Scope,
      string,
      string | 0 | undefined,
      string | 0 | undefined,
    ];
    value = partial;
    if (!scope[link]) {
      const shell = shells[contentId];
      const renderer = ((shell && getShellContent(shell, contentId)) ||
        getRegisteredWithScope(contentId)) as Renderer;
      const marker = scope[accessor as Accessor] as ChildNode;
      const inside = marker.nodeType === 1;
      const parentNode = inside
        ? (marker as unknown as Element)
        : marker.parentNode!;
      const branch = createAndSetupBranch(
        scope[AccessorProp.Global],
        renderer,
        scope,
        parentNode,
      );
      branch[AccessorProp.BranchAccessor] = accessor as Accessor;
      if (catchId !== undefined) {
        branch[AccessorProp.CatchContent] = resolveBoundaryContent(
          catchId,
          scope,
        ) as never;
      }
      if (placeholderId !== undefined) {
        branch[AccessorProp.PlaceholderContent] = resolveBoundaryContent(
          placeholderId,
          scope,
        ) as never;
      }
      insertBranchBefore(branch, parentNode, inside ? null : marker);
      scope[link] = branch as never;
      if (shell) {
        withConstructing(() => patchScope(value as Scope, branch));
      } else {
        patchScope(value as Scope, branch);
      }
      return;
    }
  }
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
  // An elided catch slot (`0`) fills from the frame's server-rendered
  // html before the normal catch machinery runs; a frame without it (an
  // async catch body) rejects.
  const tryBranch = findBranchWithKey(scope, AccessorProp.CatchContent);
  if (tryBranch && (tryBranch[AccessorProp.CatchContent] as unknown) === 0) {
    const [err, html] = error as [unknown, string | 0];
    if (typeof html !== "string") failPatch();
    tryBranch[AccessorProp.CatchContent] = _content(
      "",
      html as string,
    )(tryBranch[AccessorProp.Owner]) as never;
    error = err;
  }
  markSettled(scope, accessor);
  endAwaitPending(scope, accessor);
  renderCatch(scope, error);
};
