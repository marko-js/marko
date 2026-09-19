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
import { createAwaitCounter, dismissPlaceholder } from "./control-flow";
import {
  applyReadyPatch,
  deferApply,
  flushBinds,
  type ReadyGuard,
} from "./patch";
import "./patch-catch.feat";
import "./patch-child.feat";
import { getContent } from "./patch-shells";
import {
  pendingEffects,
  placeholderShown,
  queueEffect,
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
  patchers,
  patchRender,
  patchRun,
  patchScope,
  withCreating,
} from "./resume";
import { schedule } from "./schedule";
import {
  collectScopes,
  findBranchWithKey,
  insertBranchBefore,
  syncGen,
  tempDetachBranch,
} from "./scope";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Pending]: string | 0;
  }
}

// An await a flush settled, on its scope: a settle from an earlier response
// must not hide a later flush's pending UI.
function markSettled(scope: Scope, accessor: string) {
  scope[(AccessorPrefix.PatchSettled + accessor) as Accessor] = 1 as never;
}

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
  // A later pending await under the same boundary keeps the first's UI.
  if (awaitCounter.i++) return;

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
  } else if (!awaitCounter.m) {
    // A resumed counter is the document's: its reorder completes it.
    awaitCounter.i = 0;
  }
}

patchers[PatchKey.Pending] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.Pending.length);
  const link = (AccessorPrefix.BranchScopes + accessor) as Accessor;
  // The server now owns this await flush. Invalidate a promise started while
  // setting up a newly created parent body so its stale resolution drops.
  scope[(AccessorPrefix.Promise + accessor) as Accessor] = 0 as never;
  // A settle from an earlier response must not hide this flush's pending UI.
  scope[(AccessorPrefix.PatchSettled + accessor) as Accessor] = 0 as never;
  // A created scope has no live await branch: the entry's id names the body
  // content shell its flush shipped. Mirrors `_await_content`.
  if (typeof value === "string" && !scope[link]) {
    const renderer = getContent(value)!;
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
  // Same-flush settle (Promise.resolve) also writes Child; skip pending UI.
  // A document still streaming the body shows its own: the flush's pending
  // takes over when the body lands, unless the flush settled it by then or
  // a catch destroyed the try.
  (!scope[link] && (scope[AccessorProp.AwaitCounter] as AwaitCounter)?.m
    ? onStreamLanded
    : queueMicrotask)(
    () =>
      scope[AccessorProp.Gen] &&
      !scope[(AccessorPrefix.PatchSettled + accessor) as Accessor] &&
      beginAwaitPending(scope, accessor),
    scope,
  );
};

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
      withCreating(applyChildPartial);
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

// A boundary slot: `0` stays the elided sentinel; an id resolves its
// content (shipped shell or dom registration) against the try's owner.
function resolveBoundaryContent(id: string | 0, owner: Scope) {
  return id === 0 ? 0 : getContent(id, owner);
}

// A try the document is still streaming into: `fn` runs in the run after
// the reorder's script, once its walk has linked the body and replayed
// its closures. Queued on the owner, since the try's own effects park.
function onStreamLanded(fn: () => void, tryBranch: Scope) {
  const awaitCounter = tryBranch[AccessorProp.AwaitCounter] as AwaitCounter;
  const complete = awaitCounter.c;
  awaitCounter.c = () =>
    complete() || (queueEffect(tryBranch[AccessorProp.Owner]!, fn), schedule());
}
// The flush's body partial waits as a guard applied at landing (the await
// counts as settled: no pending UI takes over); a body that never came
// (the document rendered its catch) rejects the patch.
function holdForStream(
  scope: Scope,
  key: string,
  link: Accessor,
  accessor: string,
  value: Scope,
) {
  markSettled(scope, accessor);
  const guard: ReadyGuard = [
    { [key]: value } as Scope,
    scope,
    flushBinds,
    patchRun,
  ];
  const render = patchRender;
  deferApply(
    new Promise((resolve) =>
      onStreamLanded(
        () => resolve(scope[link] && applyReadyPatch(render, [guard])),
        scope,
      ),
    ),
  );
}

const applyChild = patchers[PatchKey.Child];
patchers[PatchKey.Child] = (scope, key, value) => {
  const link = key.slice(PatchKey.Child.length) as Accessor;
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  // Only a resumed counter carries the render's marker hook: the document
  // owns the pending UI, and its reorder completes the counter.
  if (!scope[link] && (scope[AccessorProp.AwaitCounter] as AwaitCounter)?.m) {
    holdForStream(scope, key, link, accessor, value as Scope);
    return;
  }
  // A boundary entry `[partial, contentId, catchId?, placeholderId?]`
  // creates a missing branch from its content id, then applies the partial.
  if (Array.isArray(value)) {
    const [partial, contentId, catchId, placeholderId] = value;
    value = partial;
    if (!scope[link]) {
      const renderer = getContent(contentId)!;
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
      insertBranchBefore(branch, parentNode, inside ? null : marker);
      scope[link] = branch as never;
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
      if (renderer[RendererProp.Shell]) {
        withCreating(() => patchScope(value as Scope, branch));
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
  // A newly created await body may itself initialize nested boundaries.
  // Run that setup before applying the settled child partial.
  if (!attachDetachedAwait(scope, accessor, apply)) {
    apply();
    endAwaitPending(scope, accessor);
  }
};
