import { assertValidLoopKey } from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import { isPromise } from "../common/helpers";
import { type Opt, push } from "../common/opt";
import {
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type Falsy,
  ResumeSymbol,
} from "../common/types";
import * as Mark from "./constants/mark";
import { forInBy, forOfBy, forStepBy } from "./for";
import type { ServerRenderer } from "./template";
import {
  $chunk,
  _el_resume,
  _peek_scope_id,
  _resume,
  _scope as writeScope,
  _scope_id,
  _scope_with_id,
  applyBranchStart,
  type AsyncContent,
  Boundary,
  captureContext,
  Chunk,
  deferBranchStart,
  getAsyncContent,
  type ScopeInternals,
  withBranchId,
  withIsAsync,
} from "./writer";

// `<show>` always renders; hidden ranges use `<t>` so the walker reaches them.
// The start takes its end's guards, as a range resumes by its marker or not.
export function _show_start(
  display: unknown,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
) {
  if (display) {
    // The wrapper itself is the range's single node.
    if (resumesMarker(markerGuard, branchExprGuard, parentEndTag)) {
      $chunk.writeHTML(
        $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
      );
    }
  } else {
    $chunk.writeHTML("<t hidden>");
  }
}

export function _show_end(
  scopeId: number,
  accessor: Accessor,
  display: unknown,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1 | 0,
) {
  // Consume a scope id for the range holder the resume marks create.
  const branchId = _scope_id();
  const wrap = !display;

  if (wrap) $chunk.writeHTML("</t>");

  writeBranchEnd(
    scopeId,
    accessor,
    branchExprGuard,
    markerGuard,
    parentEndTag,
    wrap || singleNode ? 1 : undefined,
    " " + branchId,
  );
}

export function _for_of(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  by: Falsy | ((item: unknown, index: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
): void {
  forBranches(
    by,
    cb,
    iterateForOf(list, cb, by),
    scopeId,
    accessor,
    branchGuard,
    markerGuard,
    branchExprGuard,
    parentEndTag,
    singleNode,
  );
}

export function iterateForOf(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  by: Falsy | ((item: unknown, index: number) => unknown),
): LoopIterate<unknown, number> {
  return (each) =>
    each
      ? forOf(list, (item, index) => {
          const itemKey = forOfBy(by, item, index);
          each(itemKey, itemKey === index, item, index);
        })
      : forOf(list, cb);
}

export function _for_in(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  by: Falsy | ((key: string, v: unknown) => unknown),
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
): void {
  forBranches(
    by,
    cb,
    iterateForIn(obj, cb, by),
    scopeId,
    accessor,
    branchGuard,
    markerGuard,
    branchExprGuard,
    parentEndTag,
    singleNode,
  );
}

export function iterateForIn(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  by: Falsy | ((key: string, v: unknown) => unknown),
): LoopIterate<string, unknown> {
  return (each) =>
    each
      ? forIn(obj, (key, value) => {
          // A key is a property name, never the row's index (which the client
          // assumes for a row with no key), so every row stores its key.
          each(forInBy(by, key, value), false, key, value);
        })
      : forIn(obj, cb);
}

export function _for_to(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
): void {
  forBranches(
    by,
    cb,
    iterateForTo(to, from, step, cb, by),
    scopeId,
    accessor,
    branchGuard,
    markerGuard,
    branchExprGuard,
    parentEndTag,
    singleNode,
  );
}

export function iterateForTo(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
): LoopIterate<number> {
  return (each) => {
    let index = 0;
    return each
      ? forTo(to, from, step, (value) => {
          const itemKey = forStepBy(by, value);
          each(itemKey, itemKey === index++, value);
        })
      : forTo(to, from, step, cb);
  };
}

export function _for_until(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
): void {
  forBranches(
    by,
    cb,
    iterateForUntil(to, from, step, cb, by),
    scopeId,
    accessor,
    branchGuard,
    markerGuard,
    branchExprGuard,
    parentEndTag,
    singleNode,
  );
}

export function iterateForUntil(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
): LoopIterate<number> {
  return (each) => {
    let index = 0;
    return each
      ? forUntil(to, from, step, (value) => {
          const itemKey = forStepBy(by, value);
          each(itemKey, itemKey === index++, value);
        })
      : forUntil(to, from, step, cb);
  };
}

// A loop's iteration: each row's key and `cb` arguments, where its branches
// resume (`each`).
export type LoopIterate<A, B = void> = (
  each: 0 | ((itemKey: unknown, sameAsIndex: boolean, a: A, b: B) => void),
) => void;

// Asserts, in debug builds, that a keyed loop's keys are unique.
export function checkLoopKeys<A, B>(
  cb: (a: A, b: B) => void,
  iterate: LoopIterate<A, B>,
): LoopIterate<A, B> {
  const seenKeys = new Set<unknown>();
  return (each) =>
    iterate((itemKey, sameAsIndex, a, b) => {
      assertValidLoopKey(itemKey, seenKeys);
      if (each) each(itemKey, sameAsIndex, a, b);
      else cb(a, b);
    });
}

// Shared branch and scope writer for every `_for_*` loop variant: `each`
// takes a row's `cb` arguments, so no row needs a closure of its own.
export function forBranches<A, B = void>(
  by: unknown,
  cb: (a: A, b: B) => void,
  iterate: LoopIterate<A, B>,
  scopeId: number,
  accessor: Accessor,
  branchGuard: undefined | number,
  markerGuard: undefined | number,
  branchExprGuard: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
) {
  if (MARKO_DEBUG && by) iterate = checkLoopKeys(cb, iterate);

  if (branchGuard === 0) {
    iterate(0);
    writeBranchEnd(
      scopeId,
      accessor,
      branchExprGuard,
      markerGuard,
      parentEndTag,
      singleNode,
      "",
    );
    return;
  }

  const { state } = $chunk.boundary;
  const resumeKeys = markerGuard !== 0;
  const resumeMarker = resumesMarker(
    markerGuard,
    branchExprGuard,
    parentEndTag,
  );
  let flushBranchIds = "";
  let loopScopes: Opt<ScopeInternals>;

  iterate((itemKey, sameAsIndex, a, b) => {
    const branchId = _peek_scope_id();
    if (resumeMarker) {
      if (singleNode) {
        flushBranchIds = " " + branchId + flushBranchIds;
      } else {
        $chunk.writeHTML(state.mark(ResumeSymbol.BranchStart, flushBranchIds));
        flushBranchIds = branchId + "";
      }
    }

    withBranchId(branchId, cb, a, b);
    // Empty for an unkeyed branch, but the scope it returns is what the
    // parent's branch list holds and what passive props flush through.
    const branchScope = writeScope(
      branchId,
      resumeKeys && !sameAsIndex ? { [AccessorProp.LoopKey]: itemKey } : {},
    );
    if (!resumeMarker) {
      loopScopes = push(loopScopes, branchScope);
    }
  });

  if (loopScopes) {
    writeScope(scopeId, {
      [AccessorPrefix.BranchScopes + accessor]: loopScopes,
    });
  }

  writeBranchEnd(
    scopeId,
    accessor,
    branchExprGuard,
    markerGuard,
    parentEndTag,
    singleNode,
    singleNode ? flushBranchIds : flushBranchIds ? " " + flushBranchIds : "",
  );
}

export function _if(
  cb: () => void | number,
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
) {
  const resumeBranch = branchGuard !== 0;
  const resumeMarker = resumesMarker(
    markerGuard,
    branchExprGuard,
    parentEndTag,
  );
  const branchId = _peek_scope_id();
  const chunk = $chunk;
  const beforeBranch =
    resumeMarker && resumeBranch && !singleNode
      ? deferBranchStart(chunk)
      : undefined;

  const branchIndex = resumeBranch ? withBranchId(branchId, cb) : cb();
  const shouldWriteBranch = resumeBranch && branchIndex !== undefined;

  if (beforeBranch !== undefined) {
    applyBranchStart(chunk, beforeBranch, shouldWriteBranch);
  }

  if (shouldWriteBranch && (branchIndex || !resumeMarker)) {
    writeScope(scopeId, {
      // Also written for a hoist-only branch past index 0, which doesn't need it;
      // skipping that rare case would take another `_if` argument at every call.
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex || undefined, // we convert 0 to undefined since the runtime defaults branch to 0.
      [AccessorPrefix.BranchScopes + accessor]: resumeMarker
        ? undefined
        : writeScope(branchId, {}),
    });
  }

  writeBranchEnd(
    scopeId,
    accessor,
    branchExprGuard,
    markerGuard,
    parentEndTag,
    singleNode,
    shouldWriteBranch ? " " + branchId : "",
  );
}

// A branch resumes by its marker unless guarded off; an element's only child
// does only while its branch expression is guarded on too.
function resumesMarker(
  markerGuard: undefined | number,
  branchExprGuard: undefined | number,
  parentEndTag: string | undefined | 0,
) {
  return markerGuard !== 0 && (!parentEndTag || branchExprGuard !== 0);
}

function writeBranchEnd(
  scopeId: number,
  accessor: Accessor,
  branchExprGuard: undefined | number,
  markerGuard: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
  branchIds?: string,
) {
  const endTag = parentEndTag || "";
  if (resumesMarker(markerGuard, branchExprGuard, parentEndTag)) {
    const { state } = $chunk.boundary;
    const mark = singleNode
      ? state.mark(
          parentEndTag
            ? ResumeSymbol.BranchEndSingleNodeOnlyChildInParent
            : ResumeSymbol.BranchEndSingleNode,
          scopeId + " " + accessor + (branchIds || ""),
        )
      : state.mark(
          parentEndTag
            ? ResumeSymbol.BranchEndOnlyChildInParent
            : ResumeSymbol.BranchEnd,
          scopeId + " " + accessor + (branchIds || ""),
        );
    $chunk.writeHTML(mark + endTag);
  } else if (markerGuard !== 0) {
    $chunk.writeHTML(endTag + _el_resume(scopeId, accessor));
  } else {
    $chunk.writeHTML(endTag);
  }
}

export function _await<T>(
  scopeId: number,
  accessor: Accessor,
  promise: Promise<T> | T,
  content: (value: T) => void,
  markerGuard?: number,
) {
  const resumeMarker = markerGuard !== 0;

  if (!isPromise(promise)) {
    if (resumeMarker) {
      const branchId = _peek_scope_id();
      $chunk.writeHTML(
        $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
      );
      withBranchId(branchId, content, promise);
      $chunk.writeHTML(
        $chunk.boundary.state.mark(
          ResumeSymbol.BranchEnd,
          scopeId + " " + accessor + " " + branchId,
        ),
      );
    } else {
      content(promise);
    }
    return;
  }

  const chunk = $chunk;
  const { boundary } = chunk;
  const startId = _peek_scope_id();
  const after = (chunk.next = chunk.forkRest(boundary));
  chunk.async = true;
  captureContext(chunk);
  boundary.startAsync();
  // Won't fix: a thenable that calls back synchronously settles before a `<try>`
  // waits on it; adopting it through `Promise.resolve` would cost another promise.
  promise.then(
    (value) => {
      if (chunk.async) {
        chunk.async = false;

        if (!boundary.aborted) {
          const { state } = boundary;
          chunk.render(() => {
            if (resumeMarker) {
              const branchId = _peek_scope_id();
              $chunk.writeHTML(
                $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
              );
              withBranchId(branchId, () =>
                withIsAsync({ parent: getAsyncContent(chunk) }, content, value),
              );
              $chunk.writeHTML(
                $chunk.boundary.state.mark(
                  ResumeSymbol.BranchEnd,
                  scopeId + " " + accessor + " " + branchId,
                ),
              );
            } else {
              const renderedSince = _peek_scope_id() !== startId;
              const async: AsyncContent = { parent: getAsyncContent(chunk) };
              withIsAsync(async, content, value);
              // Branches rendered after it while it waited took smaller ids and would adopt
              // its scopes; nothing follows content ending the page or a reordered `<try>` body.
              async.visit =
                renderedSince && (after.html || after.next)
                  ? $chunk.boundary.state.mark(
                      ResumeSymbol.BranchEnd,
                      scopeId + " " + accessor,
                    )
                  : "";
              if (async.resumed) $chunk.writeHTML(async.visit);
              async.end = $chunk;
            }
          });
          // Part of a reorder whose marker streamed, it streams once settled,
          // unless what rendered in it awaits again or aborted and queued it.
          if (!chunk.async && boundary.pendingReorders?.delete(chunk)) {
            state.reorder(chunk);
          }
          boundary.endAsync();
        }
      }
    },
    (err) => {
      chunk.async = false;
      boundary.abort(err);
    },
  );
}

export function _try(
  scopeId: number,
  accessor: Accessor,
  content: () => void,
  placeholderContent?: ServerRenderer,
  catchContent?: ServerRenderer,
  placeholderId?: string,
  catchId?: string,
) {
  // The placeholder's branch id precedes the body's so the walker parents it
  // to the try's enclosing branch (a sibling of the try), as CSR does.
  const placeholderBranchId = placeholderContent ? _scope_id() : 0;
  const branchId = _peek_scope_id();
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  const { resumeWrites } = boundary;
  const beforeBranch = deferBranchStart(chunk);
  const renderers = (): void =>
    writeTryRenderers(
      branchId,
      catchContent && _resume(catchContent, catchId!),
      placeholderContent && _resume(placeholderContent, placeholderId!),
    );
  // Whether `tryBoundary` writes the renderers itself once the body settles,
  // or not at all once its `@catch` rendered.
  const renderersWritten = tryBoundary(
    placeholderContent
      ? () =>
          tryPlaceholder(
            content,
            placeholderContent,
            branchId,
            scopeId,
            placeholderBranchId,
          )
      : content,
    catchContent,
    branchId,
    renderers,
  );

  const keepsMarks = state.keepsTryMarks(chunk, resumeWrites);
  applyBranchStart(chunk, beforeBranch, keepsMarks);
  if (!keepsMarks) return;

  if (!renderersWritten) renderers();
  $chunk.writeHTML(
    state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor + " " + branchId,
    ),
  );
}

function tryPlaceholder(
  content: () => void,
  placeholder: () => void,
  branchId: number,
  scopeId: number,
  placeholderBranchId: number,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const body = chunk.fork(boundary, null);

  if (body === body.render(content)) {
    chunk.append(body);
    return;
  }

  chunk.next = chunk.forkRest(boundary);
  captureContext(chunk);
  chunk.placeholder = {
    body,
    render: placeholder,
    branchId,
    scopeId,
    placeholderBranchId,
  };
}

// Returns whether it writes the renderers itself: a body whose sync part wrote
// nothing resumable cannot re-run client side while streaming, so they follow
// at settle, and only if the settled body (or a fired catch) resumes at all.
export function tryBoundary(
  content: () => void,
  catchContent: ServerRenderer | undefined,
  branchId: number,
  renderers: () => void,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  // Aborts with its parent so a disconnected render strands pending body work;
  // the outer-aborted check in onNext keeps that from firing the catch.
  const catchBoundary = new Boundary(state, undefined, boundary);
  if (catchContent) catchBoundary.withinCatch = true;
  const body = chunk.fork(catchBoundary, null);
  const bodyEnd = body.render(withBranchId, branchId, content);

  if (catchBoundary.aborted) {
    // Without a `@catch` the error ends the enclosing render, like any throw in it.
    if (!catchContent) throw catchBoundary.reason;
    // Sync error. The body's already-written scopes stay in the resume payload
    // unused; a `@catch` firing is rare enough not to warrant dropping them.
    catchContent(catchBoundary.reason);
    // A rendered `@catch` is not a try, as on the client: it gets no renderers.
    return true;
  }

  if (body === bodyEnd) {
    // Sync success
    chunk.append(body);
    return false;
  }

  const renderersAtSettle = !catchBoundary.resumeWrites;
  // Forked from the try's chunk: an `_await` in the body replaces the body's
  // context with a copy, on which the branch id would never restore.
  const bodyNext = (bodyEnd.next = chunk.forkRest(boundary));
  chunk.next = body;
  boundary.startAsync();

  // With a catch, markers let it take the body's place once the stream reaches
  // it pending (`markCatchRange`); a body settled or caught first needs none.
  const reorderId = catchContent ? state.nextReorderId() : "";
  if (reorderId) {
    chunk.catchRange = { id: reorderId, end: bodyEnd };
    // The catch renders later, forked from this chunk.
    captureContext(chunk);
  }

  catchBoundary.onNext = () => {
    if (boundary.aborted) return;
    if (catchBoundary.aborted) {
      if (!reorderId) {
        boundary.abort(catchBoundary.reason);
        return;
      }

      const streamed = !chunk.catchRange;
      const catchChunk = chunk.fork(boundary, null);
      chunk.catchRange = null;
      if (!renderersAtSettle) catchChunk.render(clearTryRenderers, branchId);
      // Sync, the catch streams in order where the body was; with content of
      // its own to wait on, it streams as a reorder so nothing after it waits.
      const inOrder =
        catchChunk === catchChunk.render(catchContent!, catchBoundary.reason);
      // A throw in the catch reached the enclosing `<try>`, whose catch cut this one.
      if (boundary.aborted) return;
      // A reordered catch names the try's branch for the client to adopt it into.
      if (bodyEnd.consumed || !inOrder) catchChunk.reorderBranch = branchId;

      if (bodyEnd.consumed) {
        catchChunk.reorderId = reorderId;
        state.reorder(catchChunk);
      } else {
        // Once the start marker streamed, a reorder removes what streamed of
        // the body: the catch's own, or an empty one ahead of an in-order catch.
        let reorder: Chunk | null = null;
        if (!inOrder) {
          reorder = catchChunk;
        } else if (streamed) {
          reorder = chunk.fork(boundary, null);
        }
        if (reorder) reorder.reorderId = reorderId;
        const endMarker = state.mark(Mark.PlaceholderEnd, reorderId);

        // The body's end is still to stream, so the cut is at it or before.
        let cut = body;
        while (cut.consumed) cut = cut.next!;
        cut.async = false;
        cut.next = inOrder ? catchChunk : bodyNext;
        cut.html = streamed
          ? endMarker
          : inOrder
            ? ""
            : state.mark(Mark.Placeholder, reorderId) + endMarker;
        cut.scripts = cut.effects = cut.lastEffect = "";
        cut.placeholder = cut.reorderId = cut.catchRange = null;
        cut.deferredReorder = reorder;
        if (inOrder) catchChunk.next = bodyNext;
      }

      boundary.endAsync();
    } else if (!catchBoundary.count) {
      if (renderersAtSettle && catchBoundary.resumeWrites) {
        bodyEnd.render(renderers);
      }
      chunk.catchRange = null;
      boundary.endAsync();
    } else {
      boundary.onNext();
    }
  };
  return renderersAtSettle;
}

// A rendered `@catch` is not a try, as on the client, so renderers the try
// streamed before it fired are cleared.
function clearTryRenderers(branchId: number) {
  writeScope(branchId, {
    [AccessorProp.CatchContent]: 0,
    [AccessorProp.PlaceholderContent]:
      _scope_with_id(branchId)[AccessorProp.PlaceholderContent] && 0,
  });
}

export function writeTryRenderers(
  branchId: number,
  catchContent: ServerRenderer | undefined,
  placeholderContent: ServerRenderer | undefined,
) {
  writeScope(branchId, {
    [AccessorProp.CatchContent]: catchContent,
    [AccessorProp.PlaceholderContent]: placeholderContent,
  });
}
