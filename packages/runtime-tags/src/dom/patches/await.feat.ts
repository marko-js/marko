import { encodeAccessor } from "../../common/helpers";
import {
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  type EncodedAccessor,
  PatchKey,
  PatchPendingProp,
  RenderDataProp,
  RendererProp,
  type Scope,
} from "../../common/types";
import { _await_promise, findTryWithPlaceholder } from "../control-flow";
import { queueAsyncRender, queueEffect } from "../queue";
import "./child.feat";
// A row's await settling after its loop's flush, in any template below the
// loop, re-links the row by key.
import "./loop-item.feat";
import {
  _content,
  createBranch,
  type Renderer,
  setupBranch,
} from "../renderer";
import { collectScopes, insertBranchBefore, syncGen } from "../scope";
import type { Signal } from "../signals";
import { applyInFlush, flushWait } from "./apply";
import { patchers, patchRender, patchScope, withCreating } from "./apply";
import { getContent } from "./shells";

declare module "./apply" {
  interface PatchValues {
    [PatchKey.Pending]: string | 0;
  }
}

// A flush's pending value: the client awaits it as its own, through the
// same count, and the flush's settle resolves it within that flush's run.
type PatchPending = { [PatchPendingProp.Resolve]: () => void };
const patchPending = {
  then: (resolve: () => void): PatchPending => ({
    [PatchPendingProp.Resolve]: resolve,
  }),
};

patchers[PatchKey.Pending] = (scope, accessor, value) => {
  const link = AccessorPrefix.BranchScopes + accessor;
  // The server now owns this await: its value supersedes a client one.
  const pend = (_?: never) =>
    _await_promise(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
    )(scope, patchPending);
  if (!scope[link]) {
    // The walk has not reached this await: the document keeps its pending UI until
    // the body lands, as a deferred value would, unless a settle or a catch drops it.
    if (!scope[accessor]) {
      const deferred = (scope[AccessorPrefix.Promise + accessor] = (_: Scope) =>
        deferred === scope[AccessorPrefix.Promise + accessor] && pend());
      return onStreamLanded(scope, deferred);
    }
    // A created scope has no live await branch: the entry's id names the body
    // content shell its flush shipped. Mirrors `_await_content`.
    if (typeof value === "string") {
      const renderer = getContent(value)!;
      const pendingScopes = collectScopes(
        (_?: never) =>
          ((
            (scope[link] = createBranch(
              scope[AccessorProp.Global],
              renderer,
              scope,
              (scope[accessor] as ChildNode).parentNode!,
            )) as BranchScope
          )[AccessorProp.DetachedAwait] = renderer),
      );
      (scope[link] as BranchScope)[AccessorProp.PendingScopes] = pendingScopes;
    }
  }
  pend();
};

// Queues `signal` as a render once the reorder's walk links the body of the
// streaming try holding `scope`, as `_await_promise` does a deferred value.
function onStreamLanded<T>(scope: Scope, signal: Signal<T>, value?: T) {
  // A custom tag's child the walk has not reached links to its branch only
  // through its owners.
  while (!scope[AccessorProp.ClosestBranch]) {
    if (MARKO_DEBUG && !scope[AccessorProp.Owner]) break;
    scope = scope[AccessorProp.Owner]!;
  }
  const tryBranch = findTryWithPlaceholder(scope)!;
  if (MARKO_DEBUG && !tryBranch) {
    throw new Error(
      "A patch reached an `<await>` whose in-order content is still streaming. Start patches from an effect, which in-order content holds until it completes (RESUMABILITY.md, Timing).",
    );
  }
  const complete = (tryBranch[AccessorProp.AwaitCounter] as AwaitCounter).c;
  (tryBranch[AccessorProp.AwaitCounter] as AwaitCounter).c = (_?: never) =>
    complete() || queueAsyncRender(scope, signal, value);
}

const applyChild = patchers[PatchKey.Child]!;
patchers[PatchKey.Child] = (scope, link, value) => {
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  // A custom tag's child (no branch link) has nothing pending to settle, nor
  // has a try, whose entry carries its creation payload (`patches/try`).
  if (
    (MARKO_DEBUG
      ? !link.startsWith(AccessorPrefix.BranchScopes)
      : link[0] !== AccessorPrefix.BranchScopes) ||
    Array.isArray(value)
  ) {
    applyChild(scope, link, value);
  } else if (!scope[link]) {
    // An await the document has not linked still streams its body, which the
    // patch waits for, the await settled; a rendered catch keeps the try.
    scope[AccessorPrefix.Promise + accessor] = 0;
    const render = patchRender;
    const stop = render[RenderDataProp.StopPatch];
    const wait = flushWait;
    const settle = wait();
    // A flush applies outside a run's renders, so in that run's effects.
    onStreamLanded(scope, queueEffect, (_: Scope) =>
      settle(
        // A later response superseded this one: settled as applied.
        stop !== render[RenderDataProp.StopPatch] ||
          !scope[link] ||
          applyInFlush(wait, render, (_?: never) =>
            patchScope({ [PatchKey.Child + link]: value } as Scope, scope),
          ),
      ),
    );
  } else {
    // A newly created await body may itself initialize nested boundaries.
    // Run that setup before applying the settled child patch.
    const awaitBranch = scope[link] as BranchScope;
    const renderer = awaitBranch[AccessorProp.DetachedAwait] as Renderer;
    const apply = (_?: never) => {
      applyChild(scope, link, value);
      // The slot may hold the client's promise instead, which has no resolve.
      (
        scope[AccessorPrefix.Promise + accessor] as
          | Partial<PatchPending>
          | undefined
      )?.[PatchPendingProp.Resolve]?.();
    };
    if (renderer) {
      awaitBranch[AccessorProp.PendingScopes] =
        awaitBranch[AccessorProp.PendingScopes]?.forEach(syncGen);
      setupBranch(renderer, awaitBranch);
      // A shell content's walk created the body's scopes with no setup.
      if ((renderer as { [RendererProp.Shell]?: 1 })[RendererProp.Shell]) {
        withCreating(apply);
      } else {
        apply();
      }
      const anchor = scope[accessor] as ChildNode;
      insertBranchBefore(awaitBranch, anchor.parentNode!, anchor);
      anchor.remove();
      awaitBranch[AccessorProp.DetachedAwait] = 0;
    } else {
      apply();
    }
  }
};
