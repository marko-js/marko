import { encodeAccessor } from "../../common/helpers";
import {
  type Accessor,
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
import "./loop-item.feat";
import "./try.feat";
import {
  _content,
  createBranch,
  type Renderer,
  setupBranch,
} from "../renderer";
import { collectScopes, insertBranchBefore, syncGen } from "../scope";
import type { Signal } from "../signals";
import { applyInFrame, frameWait } from "./apply";
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

// The slot may hold the client's own promise instead, which has no resolve.
function settle(scope: Scope, accessor: string) {
  (
    scope[(AccessorPrefix.Promise + accessor) as Accessor] as
      | Partial<PatchPending>
      | undefined
  )?.[PatchPendingProp.Resolve]?.();
}

patchers[PatchKey.Pending] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.Pending.length);
  const link = (AccessorPrefix.BranchScopes + accessor) as Accessor;
  const promise = (AccessorPrefix.Promise + accessor) as Accessor;
  // The server now owns this await: its value supersedes a client one.
  const pend = () =>
    _await_promise(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
    )(scope, patchPending);
  if (!scope[link]) {
    // The walk has not reached this await: the document keeps its pending UI until
    // the body lands, as a deferred value would, unless a settle or a catch drops it.
    if (!scope[accessor as Accessor]) {
      const deferred = (scope[promise] = () =>
        deferred === scope[promise] && pend());
      return onStreamLanded(scope, deferred);
    }
    // A created scope has no live await branch: the entry's id names the body
    // content shell its flush shipped. Mirrors `_await_content`.
    if (typeof value === "string") {
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
  }
  pend();
};

function attachDetachedAwait(
  scope: Scope,
  accessor: string,
  applyChildPatch: () => void,
) {
  const awaitBranch = scope[
    AccessorPrefix.BranchScopes + accessor
  ] as BranchScope;
  const renderer = awaitBranch[AccessorProp.DetachedAwait] as Renderer;
  if (!renderer) return applyChildPatch();
  awaitBranch[AccessorProp.PendingScopes] =
    awaitBranch[AccessorProp.PendingScopes]?.forEach(syncGen);
  setupBranch(renderer, awaitBranch);
  // A shell content's walk created the body's scopes with no setup.
  if ((renderer as { [RendererProp.Shell]?: 1 })[RendererProp.Shell]) {
    withCreating(applyChildPatch);
  } else {
    applyChildPatch();
  }
  const anchor = scope[accessor] as ChildNode;
  insertBranchBefore(awaitBranch, anchor.parentNode!, anchor);
  anchor.remove();
  awaitBranch[AccessorProp.DetachedAwait] = 0;
}

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
  (tryBranch[AccessorProp.AwaitCounter] as AwaitCounter).c = () =>
    complete() || queueAsyncRender(scope, signal, value);
}
// The body's patch waits for the stream to land it, its await counted as
// settled; a catch the document rendered instead keeps the try, as applied.
function holdForStream(
  scope: Scope,
  key: string,
  link: Accessor,
  accessor: string,
  value: Scope,
) {
  scope[(AccessorPrefix.Promise + accessor) as Accessor] = 0;
  const render = patchRender;
  const response = render[RenderDataProp.PatchResponse];
  const wait = frameWait;
  const settle = wait();
  // A flush applies outside a run's renders, so in that run's effects.
  onStreamLanded(scope, queueEffect, () =>
    settle(
      // A later response superseded this one: settled as applied.
      response !== render[RenderDataProp.PatchResponse] ||
        !scope[link] ||
        applyInFrame(wait, render, () =>
          patchScope({ [key]: value } as Scope, scope),
        ),
    ),
  );
}

const applyChild = patchers[PatchKey.Child]!;
patchers[PatchKey.Child] = (scope, key, value) => {
  const link = key.slice(PatchKey.Child.length) as Accessor;
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  // A custom tag's child (no branch link) has nothing pending to settle, nor
  // has a try, whose entry carries its creation payload (`patches/try`).
  if (
    (MARKO_DEBUG
      ? !link.startsWith(AccessorPrefix.BranchScopes)
      : link[0] !== AccessorPrefix.BranchScopes) ||
    Array.isArray(value)
  ) {
    return applyChild(scope, key, value);
  }
  // An await the document has not linked yet still streams its body.
  if (!scope[link]) {
    return holdForStream(scope, key, link, accessor, value as Scope);
  }
  // A newly created await body may itself initialize nested boundaries.
  // Run that setup before applying the settled child patch.
  attachDetachedAwait(
    scope,
    accessor,
    () => (applyChild(scope, key, value), settle(scope, accessor)),
  );
};
