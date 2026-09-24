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
  addAwaitCounter,
  createAwaitCounter,
  scheduleAwaitFrame,
} from "./control-flow";
import { applyDeferred, deferApply } from "./patch";
import "./patch-catch.feat";
import "./patch-loop-item";
import "./patch-try.feat";
import { getContent } from "./patch-shells";
import {
  pendingEffects,
  placeholderShown,
  queueEffect,
  queueRender,
  rendering,
} from "./queue";
import { _content, createBranch, type Renderer } from "./renderer";
import { patchers, patchRender, patchScope, withCreating } from "./resume";
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

// Pending UI a flush begins shows as a client render's does: the try's
// placeholder, else the detached await, a frame later.
function beginAwaitPending(scope: Scope, nodeAccessor: string) {
  const tryPlaceholder = findBranchWithKey(
    scope,
    AccessorProp.PlaceholderContent,
  );
  const awaitBranch = scope[
    AccessorPrefix.BranchScopes + nodeAccessor
  ] as BranchScope;
  if (tryPlaceholder) {
    addAwaitCounter(scope, tryPlaceholder);
  } else if (awaitBranch) {
    let awaitCounter = awaitBranch[AccessorProp.AwaitCounter] as
      | AwaitCounter
      | undefined;
    if (!awaitCounter?.i) {
      awaitCounter = createAwaitCounter(awaitBranch, () =>
        restoreDetached(scope, nodeAccessor),
      );
    }
    placeholderShown.add(pendingEffects);
    scheduleAwaitFrame(awaitCounter, scope, () => {
      if (!awaitBranch[AccessorProp.DetachedAwait]) {
        awaitBranch[AccessorProp.StartNode].parentNode!.insertBefore(
          scope[nodeAccessor] as Node,
          awaitBranch[AccessorProp.StartNode],
        );
        tempDetachBranch(awaitBranch);
      }
    });
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
    // Settled before its pending frame: complete outright, so the frame skips
    // and parked effects run (a resumed counter is the document's to finish).
    awaitCounter.i = 1;
    awaitCounter.c();
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
  const render = patchRender;
  const response = render.q;
  deferApply(
    new Promise((resolve) =>
      onStreamLanded(
        () =>
          resolve(
            // A later response superseded this one: settled as applied.
            response !== render.q ||
              (scope[link] &&
                applyDeferred(render, () =>
                  patchScope({ [key]: value } as Scope, scope),
                )),
          ),
        scope,
      ),
    ),
  );
}

const applyChild = patchers[PatchKey.Child]!;
patchers[PatchKey.Child] = (scope, key, value) => {
  const link = key.slice(PatchKey.Child.length) as Accessor;
  // A custom tag's child (no branch link) has nothing pending to settle.
  if (!link.startsWith(AccessorPrefix.BranchScopes)) {
    applyChild(scope, key, value);
    return;
  }
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  // Only a resumed counter carries the render's marker hook: the document
  // owns the pending UI, and its reorder completes the counter.
  if (!scope[link] && (scope[AccessorProp.AwaitCounter] as AwaitCounter)?.m) {
    holdForStream(scope, key, link, accessor, value as Scope);
    return;
  }
  // A boundary entry with its creation payload and no live branch creates
  // (`patch-try`); nothing is pending for it to settle.
  if (Array.isArray(value)) {
    if (!scope[link]) {
      applyChild(scope, key, value);
      return;
    }
    value = value[0];
  }
  const apply = () => {
    applyChild(scope, key, value);
    markSettled(scope, accessor);
  };
  // A newly created await body may itself initialize nested boundaries.
  // Run that setup before applying the settled child partial.
  if (!attachDetachedAwait(scope, accessor, apply)) {
    // Only an await a flush marked pending settles; a late write re-linking
    // through another boundary's body (a `<try>`) leaves its counter alone.
    const pending =
      scope[(AccessorPrefix.PatchSettled + accessor) as Accessor] === 0;
    apply();
    if (pending) endAwaitPending(scope, accessor);
  }
};
