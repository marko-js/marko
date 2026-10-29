import { hasKeys, isPromise } from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  type EncodedAccessor,
  type Falsy,
  IdHop,
  UpdatesFrom,
  PatchKey,
} from "../../common/types";
import {
  type LoopIterate,
  _await as _base_await,
  _if as _base_if,
  _show_end as _base_show_end,
  _try as _base_try,
  checkLoopKeys,
  forBranches,
  iterateForIn,
  iterateForOf,
  iterateForTo,
  iterateForUntil,
  tryBoundary,
  tryPlaceholder,
  writeTryRenderers,
} from "../control-flow";
import type { ServerRenderer } from "../template";
import {
  _resume,
  type GroupMask,
  _peek_scope_id,
  _scope_id,
  applyBranchStart,
  deferBranchStart,
  getChunk,
  getState,
  withBranchId,
} from "../writer";
import {
  PatchRenderState,
  _client_guard,
  getIds,
  getUpdatesFrom,
  inCreatable,
  keptBranch,
  openScopePatch,
  linkScopePatch,
  linkBranch,
  peekScopePatch,
  ensureFills,
  patchTreeNode,
  ensurePatchSetup,
  ensureScopePatch,
  popIdHop,
  pushIdHop,
  shipShell,
  walkMarkers,
  withKeptBranchId,
  withUnpatched,
  writePatchEntry,
} from "./writer";

// Main's helpers as a patch build runs them: a patch response writes its
// entries instead, and a patch page tracks the structure no patch fills.

// A `<show>`'s display: the client moves the body's range in or out, and
// the encoded accessors (`node` when patched) let a created scope find its markers.
export function _show_end(
  scopeId: number,
  accessor: Accessor,
  display: unknown,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1 | 0,
  node?: EncodedAccessor,
  start?: EncodedAccessor,
  end?: EncodedAccessor,
  mask?: GroupMask,
  group?: number,
  firstValue?: Accessor,
) {
  _base_show_end(
    scopeId,
    accessor,
    display,
    markerGuard,
    branchExprGuard,
    parentEndTag,
    singleNode,
  );
  if (node !== undefined) {
    const fills = ensureFills(scopeId, mask, group!, undefined, firstValue);
    if (fills) {
      const entry: unknown[] = [display ? 1 : 0, node];
      if (start !== undefined) entry.push(start);
      if (end !== undefined) entry.push(end);
      fills[PatchKey.Show + accessor] = entry;
    }
  }
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
  shellIds?: string[],
  mask?: GroupMask,
  group?: number,
) {
  const { state } = getChunk()!.boundary;
  if (state instanceof PatchRenderState) {
    // A chain with no shells is the resumed page's (unpatched): a patch skips it.
    if (shellIds)
      writeBranch(state, scopeId, accessor, cb, shellIds, mask, group);
    return;
  }
  // A patchable conditional's markers must resume even on a page with no
  // other client code: a patch pairs and creates through them.
  if (shellIds) walkMarkers(getState());
  // A shell-less branch, or one whose expression derives from a group updating
  // from the client, is the resumed page's to render: no patch fills its reads.
  const render =
    !shellIds || _client_guard(mask, group!) ? () => withUnpatched(cb) : cb;
  _base_if(
    render,
    scopeId,
    accessor,
    branchGuard,
    markerGuard,
    branchExprGuard,
    parentEndTag,
    singleNode,
  );
}

// Ships the branch index, patch, and (once per response) the shell
// so the client can create on divergence without bundling content.
export function writeBranch(
  state: PatchRenderState,
  scopeId: number,
  accessor: string,
  cb: () => number | undefined | void,
  shellIds: string[],
  mask?: GroupMask,
  group?: number,
) {
  const updatesFrom = getUpdatesFrom(mask, group!);
  // A branch whose expression derives from a group updating from the client
  // re-renders on the resumed page: the patch skips it.
  if (updatesFrom & UpdatesFrom.Client) return;
  // One whose expression derives from nothing request-derived, outside
  // structure a flush creates, keeps its branch: the entry ships only what its body fills.
  const kept = !updatesFrom && !inCreatable();
  const branchId = _peek_scope_id();
  state.patchLinks[branchId] = {
    parent: scopeId,
    hop: AccessorPrefix.BranchScopes + accessor,
  };
  const opened = openScopePatch(state, branchId);
  const branchIndex = (kept ? withKeptBranchId : withBranchId)(branchId, cb);
  const shellId =
    branchIndex === undefined || kept
      ? undefined
      : shipShell(state, shellIds[branchIndex]);
  if (kept && !hasKeys(opened)) {
    if (branchIndex === undefined) _scope_id();
    return;
  }
  // Shape-typed entry, densest form first: a bare number is the
  // branch index + 1 (`0` hides), and empty/zero members drop.
  const branchPatch =
    branchIndex === undefined || !hasKeys(opened) ? undefined : opened;
  writePatchEntry(
    state,
    scopeId,
    PatchKey.Branch + accessor,
    branchIndex === undefined
      ? 0
      : branchIndex
        ? branchPatch || shellId
          ? patchTreeNode(
              state,
              shellId
                ? [
                    branchIndex,
                    branchPatch || patchTreeNode(state, {}),
                    shellId,
                  ]
                : [branchIndex, branchPatch || patchTreeNode(state, {})],
            )
          : branchIndex + 1
        : branchPatch
          ? patchTreeNode(
              state,
              shellId ? [branchPatch, shellId] : [branchPatch],
            )
          : shellId || 1,
  );
  if (branchIndex === undefined) {
    // Nothing rendered took the peeked id: consume it so no later scope
    // finds this branch's patch or link.
    _scope_id();
  }
}

// Main's loops with no client rows: each row enters its index (a name for
// `forIn`), which an `<id>` names.
export function forOf(
  list: Parameters<typeof iterateForOf>[0],
  cb: Parameters<typeof iterateForOf>[1],
) {
  withRowHops(cb, iterateForOf(list, cb, 0))(0);
}

export function forIn(
  obj: Parameters<typeof iterateForIn>[0],
  cb: Parameters<typeof iterateForIn>[1],
) {
  withRowHops(cb, iterateForIn(obj, cb, 0))(0);
}

export function forTo(
  to: number,
  from: Falsy | number,
  step: Falsy | number,
  cb: Parameters<typeof iterateForTo>[3],
) {
  withRowHops(cb, iterateForTo(to, from, step, cb, 0))(0);
}

export function forUntil(
  until: number,
  from: Falsy | number,
  step: Falsy | number,
  cb: Parameters<typeof iterateForUntil>[3],
) {
  withRowHops(cb, iterateForUntil(until, from, step, cb, 0))(0);
}

export function _for_of(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  by: Falsy | ((item: unknown, index: number) => string | number),
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  shellId?: string | 0,
  mask?: GroupMask,
  group?: number,
) {
  patchLoop(
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
    shellId,
    mask,
    group,
  );
}

export function _for_in(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  by: Falsy | ((key: string, v: unknown) => string | number),
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  shellId?: string | 0,
  mask?: GroupMask,
  group?: number,
) {
  patchLoop(
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
    shellId,
    mask,
    group,
  );
}

export function _for_to(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => string | number),
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  shellId?: string | 0,
  mask?: GroupMask,
  group?: number,
) {
  patchLoop(
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
    shellId,
    mask,
    group,
  );
}

export function _for_until(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => string | number),
  scopeId: number,
  accessor: Accessor,
  branchGuard?: number,
  markerGuard?: number,
  branchExprGuard?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  shellId?: string | 0,
  mask?: GroupMask,
  group?: number,
) {
  patchLoop(
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
    shellId,
    mask,
    group,
  );
}

function patchLoop<A, B>(
  by: unknown,
  cb: (a: A, b: B) => void,
  iterate: LoopIterate<A, B>,
  scopeId: number,
  accessor: Accessor,
  branchGuard: undefined | number,
  markerGuard: undefined | number,
  branchExprGuard: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode: undefined | 1,
  shellId: undefined | string | 0,
  mask: GroupMask,
  group: undefined | number,
) {
  const chunk = getChunk()!;
  const { state } = chunk.boundary;
  if (state instanceof PatchRenderState) {
    // A loop with no shell slot is the resumed page's (unpatched): a patch skips it.
    if (shellId !== undefined) {
      writeLoop(
        state,
        by,
        cb,
        iterate,
        scopeId,
        accessor,
        shellId,
        mask,
        group,
      );
    }
    return;
  }
  // A patchable loop's markers must resume even on a page with no other
  // client code: a patch pairs and creates through them.
  if (shellId !== undefined) walkMarkers(state);
  const rows = withRowHops(cb, iterate);
  forBranches(
    by,
    cb,
    !shellId || _client_guard(mask, group!)
      ? (each) => withUnpatched(rows, each)
      : rows,
    scopeId,
    accessor,
    branchGuard,
    markerGuard,
    branchExprGuard,
    parentEndTag,
    singleNode,
  );
}

// Ships ordered item patches and keys: existing keys pair, new keys
// create from the shell, absent keys destroy.
export function writeLoop<A, B>(
  state: PatchRenderState,
  by: unknown,
  cb: (a: A, b: B) => void,
  iterate: LoopIterate<A, B>,
  scopeId: number,
  accessor: string,
  shellId: string | 0,
  mask?: GroupMask,
  group?: number,
) {
  // A list updating from the client, or a kept one, keeps its rows: its entry
  // ships only what the rows themselves fill.
  const updatesFrom = getUpdatesFrom(mask, group!);
  const clientRows = updatesFrom & UpdatesFrom.Client;
  const rowsKept = clientRows || (!updatesFrom && !inCreatable());
  const patches: object[] = [];
  const keys: (string | number)[] = [];
  let indexKeys = true;
  const row = rowsKept ? keptBranch(cb) : cb;
  const iterateItems = MARKO_DEBUG && by ? checkLoopKeys(cb, iterate) : iterate;
  iterateItems((itemKey, sameAsIndex, a, b) => {
    indexKeys &&= sameAsIndex;
    // An item is found where it rendered, checked by key as the loop's
    // reconciler does (the client may since have moved it).
    const branchId = _peek_scope_id();
    state.patchLinks[branchId] = {
      parent: scopeId,
      hop: [accessor, sameAsIndex ? keys.length : [keys.length, itemKey]],
    };
    keys.push(itemKey);
    // Opened here so an item settling after this flush re-links by its hop.
    patches.push(openScopePatch(state, branchId));
    pushIdHop(IdHop.Row, itemKey);
    withBranchId(branchId, row, a, b);
    popIdHop();
  });
  if (rowsKept && !patches.some(hasKeys)) return 1;
  if (clientRows) {
    // The rows are the client's: each patch applies to the row it still
    // holds under that key, and none is added or removed.
    const items: unknown[] = patchTreeNode(state, []);
    for (let i = 0; i < patches.length; i++) {
      if (hasKeys(patches[i])) {
        items.push(
          indexKeys ? i : patchTreeNode(state, [i, keys[i]]),
          patches[i],
        );
      }
    }
    if (items.length)
      writePatchEntry(state, scopeId, PatchKey.LoopItem + accessor, items);
    return 1;
  }
  // Kept rows are never created, so they need no shell.
  const sentShellId =
    patches.length && !rowsKept ? shipShell(state, shellId) : undefined;
  // Interleaved `[key, patch, …, shellId?]`: keys drop when every key
  // is its index, and the shell rides as a trailing string.
  const entry: unknown[] = patchTreeNode(state, []);
  for (let i = 0; i < patches.length; i++) {
    if (!indexKeys) entry.push(keys[i]);
    entry.push(patches[i]);
  }
  if (sentShellId) entry.push(sentShellId);
  writePatchEntry(state, scopeId, PatchKey.Loop + accessor, entry);
  return 1 as const;
}

// The value an `<await>`'s rejected server copy settles to: it renders nothing.
const skipped = Symbol();
const skip = (): typeof skipped => skipped;

// A patch writes the pending entry of an await whose promise it fills, and its
// body pairs with the live branch once it settles.
export function _await<T>(
  scopeId: number,
  accessor: Accessor,
  promise: Promise<T> | T,
  content: (value: T) => void,
  markerGuard?: number,
  shellId?: 0 | string,
  unfilled?: 1 | 2 | 3,
  alwaysPairs?: 1,
  mayWithhold?: 1,
) {
  const state = getState();
  // `0`: a thenable of client state, resolved by `_await_promise`. A string is
  // the body's content id, letting a created scope build the await branch.
  if (!(state instanceof PatchRenderState)) {
    // A body no patch renders is the resumed page's: no patch fills its reads.
    return _base_await(
      scopeId,
      accessor,
      promise,
      shellId === 0 ? (value: T) => withUnpatched(content, value) : content,
      markerGuard,
    );
  }
  if (shellId === 0) return;
  // No patch fills the promise: the client settles it, and the server's copy only
  // renders the body's holes as data. A rejected copy writes nothing.
  if (unfilled) {
    // A scope the flush creates builds the body from its shell (setup applies
    // only there); outside such structure the body is the client's branch.
    const creatable = inCreatable();
    if (creatable) {
      ensurePatchSetup(state, ensureScopePatch(state, scopeId))[
        PatchKey.Pending + accessor
      ] = shipShell(state, shellId);
    }
    // Caught even where nothing awaits it, so its rejection is never unhandled.
    const copy = isPromise(promise) ? promise.then(undefined, skip) : promise;
    // `2`: no render of the body writes what the client lacks; `3`: only a
    // created one's (setup work).
    if (unfilled > 2 ? !creatable : unfilled > 1) return;
    const settle = (value: T | typeof skipped) => {
      if (value !== skipped) {
        linkBranch(state, scopeId, accessor, _peek_scope_id());
        content(value);
      }
    };
    return _base_await(
      scopeId,
      accessor,
      copy,
      creatable ? settle : keptBranch<T | typeof skipped, void>(settle),
    );
  }
  // A created scope builds the body from this shell, even when settled; an
  // always-pairing body outside creatable structure only pairs, rendered kept.
  const elide = alwaysPairs && !inCreatable();
  if (!elide) shipShell(state, shellId);
  writePatchEntry(
    state,
    scopeId,
    PatchKey.Pending + accessor,
    (!elide && shellId) || 1,
  );
  // Until it settles, its body may keep content made before it for the
  // client (`_content_withheld`).
  if (mayWithhold) state.pendingAwaits.add(scopeId);
  const settle = (value: T) => {
    state.pendingAwaits.delete(scopeId);
    // The Child entry settles the pending UI the entry above opens: forced so
    // a body with no writes of its own still attaches it.
    const branchId = _peek_scope_id();
    linkBranch(state, scopeId, accessor, branchId);
    ensureScopePatch(state, branchId);
    content(value);
  };
  _base_await(
    scopeId,
    accessor,
    promise,
    elide ? keptBranch<T, void>(settle) : settle,
  );
}

// A patch pairs the try's body with the live branch (carrying its creation
// payload where a flush may create it) and a body that throws writes its catch.
export function _try(
  scopeId: number,
  accessor: Accessor,
  content: () => void,
  placeholderContent?: ServerRenderer,
  catchContent?: ServerRenderer,
  placeholderId?: string,
  catchId?: string,
  bodyId?: string,
  alwaysPairs?: 1,
  // Set where a flush creates the catch.
  createsCatch?: 1,
  // Content created from its shell, by id: 1 the catch, 2 the placeholder.
  shellContent?: number,
) {
  const state = getState();
  // Its catch renders at its depth: a throw skips the pops of the calls it
  // leaves.
  const depth = getIds().depth;
  if (!(state instanceof PatchRenderState)) {
    return _base_try(
      scopeId,
      accessor,
      content,
      placeholderContent,
      catchContent &&
        ((err) => {
          getIds().depth = depth;
          withUnpatched(catchContent, err);
        }),
      placeholderId,
      catchId,
      shellContent,
    );
  }
  // The placeholder's branch id precedes the body's, as in a document.
  const placeholderBranchId = placeholderContent ? _scope_id() : 0;
  const branchId = _peek_scope_id();
  // The entry carries the creation payload (body shell, slot ids) unless the try
  // always pairs here; one that only pairs still names its catch, so a caught try rejects its body.
  const create = !alwaysPairs || inCreatable();
  // Beside the patch: `[catchId, bodyId?, placeholderId?]`, the catch first.
  const slotIds = !create
    ? [catchId]
    : placeholderId
      ? [catchId, bodyId, placeholderId]
      : [catchId, bodyId];
  linkBranch(
    state,
    scopeId,
    accessor,
    branchId,
    create ? bodyId : undefined,
    create || catchId ? slotIds : undefined,
    scopeId,
  );
  const chunk = getChunk()!;
  const beforeBranch = deferBranchStart(chunk);
  // In its branch, the body's own setup rides its shell; it is creatable
  // only where the try's scope is.
  const branchContent = inCreatable()
    ? content
    : () => withKeptBranchId(branchId, content);
  // A flush that leaves the body pending ships the placeholder's shell, as a
  // document renders the placeholder.
  const bodyContent = placeholderContent
    ? () =>
        tryPlaceholder(
          branchContent,
          () => shipShell(state, placeholderId),
          branchId,
          scopeId,
          placeholderBranchId,
        )
    : branchContent;
  const renderers = (): void =>
    writeTryRenderers(
      branchId,
      catchContent &&
        (shellContent! & 1 ? catchId : _resume(catchContent, catchId!)),
      placeholderContent &&
        (shellContent! & 2
          ? placeholderId
          : _resume(placeholderContent, placeholderId!)),
    );
  // A patch shows `@placeholder` from received client state and creates
  // `@catch` in its entry, so no document reorder rides the flush stream.
  let writesRenderers = false;
  if (catchContent) {
    // Its entry goes out whenever the body renders, so a try the page caught
    // learns it; a body that throws leaves its patch out (or voids the entry).
    const body = openScopePatch(state, branchId);
    // Its shell ships ahead of those its body ships, as the entry leads them.
    if (create) shipShell(state, bodyId);
    let entry: unknown[] | undefined;
    let settled = false;
    writesRenderers = tryBoundary(
      bodyContent,
      catchContent,
      branchId,
      renderers,
      (err) => {
        getIds().depth = depth;
        settled = true;
        // A body that threw before claiming its id keeps it paired.
        if (_peek_scope_id() === branchId) _scope_id();
        if (!entry) {
          if (create) linkScopePatch(state, branchId, body)![0] = 0;
        } else if (peekScopePatch(state, branchId) === body) {
          // Still in the flush to go out (a flush sent it pending otherwise).
          if (create) {
            entry[0] = 0;
          } else {
            writePatchEntry(
              state,
              scopeId,
              PatchKey.Child + AccessorPrefix.BranchScopes + accessor,
              0,
            );
          }
        }
        // The client renders a catch no flush creates; one reading its error
        // sits where no patch renders its try (stateful or off the branch path).
        if (shellContent! & 1) shipShell(state, catchId);
        writePatchEntry(
          state,
          scopeId,
          PatchKey.Catch + accessor,
          createsCatch
            ? writeCatch(state, scopeId, accessor, catchContent, err, catchId!)
            : [],
        );
      },
      () => {
        settled = true;
        if (!entry) linkScopePatch(state, branchId, body);
      },
    );
    // A caught try rejects a body still pending here, even one that later throws.
    if (!settled) entry = linkScopePatch(state, branchId, body);
  } else {
    // A try this flush may create needs its entry even when its body writes
    // nothing.
    if (create) ensureScopePatch(state, branchId);
    withBranchId(branchId, bodyContent);
  }
  applyBranchStart(chunk, beforeBranch, true);
  if (!writesRenderers) renderers();
}

// The `@catch` renders as a branch the flush creates in the body's place, from its
// shell and holes; no later patch pairs it, so what reads a fill subscribes.
function writeCatch(
  state: PatchRenderState,
  scopeId: number,
  accessor: Accessor,
  catchContent: ServerRenderer,
  err: unknown,
  catchId: string,
) {
  const catchBranchId = _peek_scope_id();
  state.patchLinks[catchBranchId] = {
    parent: scopeId,
    hop: AccessorPrefix.BranchScopes + accessor,
  };
  const patch = openScopePatch(state, catchBranchId);
  withBranchId(catchBranchId, withUnpatched, catchContent, err);
  return patchTreeNode(state, [patch, catchId]);
}

// Each row enters its key, with no closure per loop: a loop renders its rows
// at once, and a row restores what a loop nested in it replaced.
function withRowHops<A, B>(
  cb: (a: A, b: B) => void,
  iterate: LoopIterate<A, B>,
): LoopIterate<A, B> {
  rowIterate = iterate as LoopIterate<unknown, unknown>;
  rowCb = cb as (a: unknown, b: unknown) => void;
  return iterateRowHops as LoopIterate<A, B>;
}

let rowIterate: LoopIterate<unknown, unknown>;
let rowCb: (a: unknown, b: unknown) => void;
let rowEach: Parameters<LoopIterate<unknown, unknown>>[0];
function iterateRowHops(each: Parameters<LoopIterate<unknown, unknown>>[0]) {
  rowEach = each;
  rowIterate(renderRowHop);
}

function renderRowHop(
  itemKey: string | number,
  sameAsIndex: boolean,
  a: unknown,
  b: unknown,
) {
  const each = rowEach;
  const cb = rowCb;
  pushIdHop(IdHop.Row, itemKey);
  if (each) each(itemKey, sameAsIndex, a, b);
  else cb(a, b);
  popIdHop();
  rowEach = each;
  rowCb = cb;
}
