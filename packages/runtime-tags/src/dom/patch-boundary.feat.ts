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
import { applyFlush, deferApply } from "./patch";
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
  // The server now owns this await: its value supersedes a client one.
  const pend = () =>
    _await_promise(
      (MARKO_DEBUG ? accessor : encodeAccessor(accessor)) as EncodedAccessor,
    )(scope, patchPending);
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
  applyChildPatch: () => void,
) {
  const awaitBranch = scope[
    AccessorPrefix.BranchScopes + accessor
  ] as BranchScope;
  const renderer = awaitBranch?.[AccessorProp.DetachedAwait] as Renderer;
  if (!renderer) return applyChildPatch();
  awaitBranch[AccessorProp.PendingScopes] =
    awaitBranch[AccessorProp.PendingScopes]?.forEach(syncGen);
  const setupAndAttach = () => {
    renderer[RendererProp.Setup]?.(awaitBranch);
    // A shell content's walk created the body's scopes with no setup.
    if ((renderer as { [RendererProp.Shell]?: 1 })[RendererProp.Shell]) {
      withCreating(applyChildPatch);
    } else {
      applyChildPatch();
    }
    const anchor = scope[accessor] as ChildNode;
    insertBranchBefore(awaitBranch, anchor.parentNode!, anchor);
    anchor.remove();
  };
  // Queued on the owner: the pending body holds its own renders until it settles.
  if (rendering) setupAndAttach();
  else queueRender(scope, setupAndAttach, -1);
  awaitBranch[AccessorProp.DetachedAwait] = 0;
}

// Runs `fn` after the reorder's walk links a streaming try's body and runs
// its closures; queued on the owner, since the try's own effects park.
function onStreamLanded(fn: () => void, tryBranch: Scope) {
  const complete = (tryBranch[AccessorProp.AwaitCounter] as AwaitCounter).c;
  (tryBranch[AccessorProp.AwaitCounter] as AwaitCounter).c = () =>
    complete() || (queueEffect(tryBranch[AccessorProp.Owner]!, fn), schedule());
}
// The body's patch waits for the stream to land it, its await counted as
// settled; if the document rendered the catch instead, it rejects.
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
                applyFlush(render, () =>
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
  const accessor = link.slice(AccessorPrefix.BranchScopes.length);
  // A custom tag's child (no branch link) has nothing pending to settle.
  if (
    MARKO_DEBUG
      ? !link.startsWith(AccessorPrefix.BranchScopes)
      : link[0] !== AccessorPrefix.BranchScopes
  ) {
    return applyChild(scope, key, value);
  }
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
  // A newly created await body may itself initialize nested boundaries.
  // Run that setup before applying the settled child patch.
  attachDetachedAwait(
    scope,
    accessor,
    () => (applyChild(scope, key, value), settle(scope, accessor)),
  );
};
