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
import "./child.feat";
// A row's await settling after its loop's flush, in any template below the
// loop, re-links the row by key.
import "./loop-item.feat";
import { createBranch, setupBranch } from "../renderer";
import { collectScopes, syncGen } from "../scope";
import { applyInFlush, flushWait } from "./apply";
import {
  patchers,
  patchRender,
  patchScope,
  setupPatchers,
  withCreating,
} from "./apply";
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
      const deferred = (scope[AccessorPrefix.Promise + accessor] = {
        [PatchPendingProp.Resolve]: (_?: never) =>
          (scope[AccessorPrefix.Promise + accessor] = 0),
      });
      return onStreamLanded(
        scope,
        (_?: never) =>
          deferred === scope[AccessorPrefix.Promise + accessor] && pend(),
      );
    }
    // A created scope has no live await branch: the entry's id names the body
    // content shell its flush shipped.
    if (typeof value === "string") createAwaitBranch(scope, accessor, value);
  }
  // A settle deferred behind a pending body applies this patch too (pending again
  // settles twice), so a streamed value shows the earlier patch's until it lands.
  if (
    !scope[AccessorPrefix.TryBranch + accessor] ||
    scope[AccessorPrefix.Promise + accessor]
  ) {
    pend();
  }
};

// A scope this flush created builds the body of an `<await>` the client settles,
// before its shell's renders run the client's promise.
setupPatchers[PatchKey.Pending] = createAwaitBranch;

// Mirrors `_await_content`: the body stays detached until its value settles.
function createAwaitBranch(scope: Scope, accessor: Accessor, id: string | 0) {
  const link = AccessorPrefix.BranchScopes + accessor;
  const renderer = getContent(id as string)!;
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

// Queues `render` once the reorder's walk links the body of the streaming try
// holding `scope`, after those queued before it.
function onStreamLanded(scope: Scope, render: () => void) {
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
  const awaitCounter = tryBranch[AccessorProp.AwaitCounter] as AwaitCounter;
  if (!awaitCounter.l) {
    const complete = awaitCounter.c;
    const landed = (awaitCounter.l = []);
    awaitCounter.c = (_?: never) =>
      complete() || queueAsyncRender(tryBranch, runLanded, landed);
  }
  awaitCounter.l.push(render);
}

// One render runs them in the order the flushes queued them: renders queued on
// one scope run in no set order.
function runLanded(_: Scope, landed: (() => void)[]) {
  for (const render of landed) render();
  landed.length = 0;
}

// A created body's setup ran as its patch applied: `resolveAwait` only inserts it.
const setUp = {};
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
    // An unlinked await still streams its body, which the patch waits for; a value
    // the client deferred runs as it lands, and a rendered catch keeps the try.
    (
      scope[AccessorPrefix.Promise + accessor] as
        | Partial<PatchPending>
        | undefined
    )?.[PatchPendingProp.Resolve]?.();
    const render = patchRender;
    const stop = render[RenderDataProp.StopPatch];
    const wait = flushWait;
    const settle = wait();
    // A flush applies outside a run's renders, so in that run's effects.
    onStreamLanded(scope, (_?: never) =>
      queueEffect(scope, (_: Scope) =>
        settle(
          // A later response superseded this one: settled as applied.
          stop !== render[RenderDataProp.StopPatch] ||
            !scope[link] ||
            applyInFlush(wait, render, (_?: never) =>
              patchScope({ [PatchKey.Child + link]: value } as Scope, scope),
            ),
        ),
      ),
    );
  } else {
    // A created await body sets up before its patch applies, which may start
    // nested boundaries, and inserts as its value settles (`resolveAwait`).
    const awaitBranch = scope[link] as BranchScope;
    const renderer = awaitBranch[AccessorProp.DetachedAwait];
    const apply = (_?: never) => {
      applyChild(scope, link, value);
      (
        scope[AccessorPrefix.Promise + accessor] as
          | Partial<PatchPending>
          | undefined
      )?.[PatchPendingProp.Resolve]?.();
    };
    if (renderer) {
      // Kept for `resolveAwait`: the client's value gives the body's `<let>`s
      // their first value, as main's does.
      awaitBranch[AccessorProp.PendingScopes]?.forEach(syncGen);
      setupBranch(renderer, awaitBranch);
      awaitBranch[AccessorProp.DetachedAwait] = setUp;
      // A shell content's walk created the body's scopes with no setup.
      if ((renderer as { [RendererProp.Shell]?: 1 })[RendererProp.Shell]) {
        withCreating(apply);
      } else {
        apply();
      }
    } else {
      apply();
    }
  }
};
