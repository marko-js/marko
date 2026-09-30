import { encodeAccessor } from "../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type AwaitCounter,
  type BranchScope,
  type EncodedAccessor,
  PatchKey,
  RendererProp,
  type Scope,
} from "../common/types";
import { _await_promise } from "./control-flow";
import { applyDeferred, deferApply } from "./patch";
import "./patch-loop-item.feat";
import "./patch-try.feat";
import { getContent } from "./patch-shells";
import { queueEffect, queueRender, rendering } from "./queue";
import { _content, createBranch, type Renderer } from "./renderer";
import { patchers, patchRender, patchScope, withCreating } from "./resume";
import { schedule } from "./schedule";
import { collectScopes, insertBranchBefore, syncGen } from "./scope";

declare module "./resume" {
  interface PatchValues {
    [PatchKey.Pending]: string | 0;
  }
}

// A flush's pending value: the client awaits it as its own, through the
// same count, and the flush's settle resolves it within that flush's run.
type PatchPending = { r?: (value?: unknown) => void };
const patchPending = { then: (r: () => void): PatchPending => ({ r }) };

function settle(scope: Scope, accessor: string) {
  (
    scope[(AccessorPrefix.Promise + accessor) as Accessor] as
      | PatchPending
      | undefined
  )?.r?.();
}

patchers[PatchKey.Pending] = (scope, key, value) => {
  const accessor = key.slice(PatchKey.Pending.length);
  const link = (AccessorPrefix.BranchScopes + accessor) as Accessor;
  const promise = (AccessorPrefix.Promise + accessor) as Accessor;
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
  // The server now owns this await: its value supersedes a client one.
  const pend = () =>
    _await_promise(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
    )(scope, patchPending);
  // A streaming document keeps its own pending UI until the body lands, as a
  // deferred value would, unless a settle drops it or a catch destroyed the try.
  if (!scope[link] && (scope[AccessorProp.AwaitCounter] as AwaitCounter)?.m) {
    const deferred = (scope[promise] = () =>
      deferred === scope[promise] && scope[AccessorProp.Gen] && pend());
    onStreamLanded(deferred, scope);
  } else {
    pend();
  }
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
    settle(scope, accessor);
  };
  // Queued on the owner: the pending body holds its own renders until it settles.
  if (rendering) setupAndAttach();
  else queueRender(scope, setupAndAttach, -1);
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
// counts as settled: a deferred pending drops); a body that never came
// (the document rendered its catch) rejects the patch.
function holdForStream(
  scope: Scope,
  key: string,
  link: Accessor,
  accessor: string,
  value: Scope,
) {
  scope[(AccessorPrefix.Promise + accessor) as Accessor] = 0;
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
    return applyChild(scope, key, value);
  }
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  // Only a resumed counter carries the render's marker hook: the document
  // owns the pending UI, and its reorder completes the counter.
  if (!scope[link] && (scope[AccessorProp.AwaitCounter] as AwaitCounter)?.m) {
    return holdForStream(scope, key, link, accessor, value as Scope);
  }
  // A try's entry carries its creation payload (`patch-try`); a try has
  // nothing pending to settle.
  if (Array.isArray(value)) {
    return applyChild(scope, key, value);
  }
  const apply = () => applyChild(scope, key, value);
  // A newly created await body may itself initialize nested boundaries.
  // Run that setup before applying the settled child partial.
  if (!attachDetachedAwait(scope, accessor, apply)) {
    apply();
    settle(scope, accessor);
  }
};
