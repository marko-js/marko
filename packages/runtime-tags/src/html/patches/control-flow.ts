import { hasKeys } from "../../common/helpers";
import {
  type Accessor,
  AccessorPrefix,
  type EncodedAccessor,
  type Falsy,
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
  writeTryRenderers,
} from "../control-flow";
import type { ServerRenderer } from "../template";
import {
  type GroupMask,
  _peek_scope_id,
  _resume,
  _scope_id,
  applyBranchStart,
  deferBranchStart,
  getChunk,
  getState,
  withBranchId,
} from "../writer";
import {
  addSetupId,
  PatchRenderState,
  PatchUpdateState,
  _client_guard,
  entryKey,
  groupSources,
  inCreatable,
  keptRow,
  openScopePatch,
  pairBranch,
  ensureFills,
  patchNode,
  ensureScopePatch,
  shipShell,
  walkMarkers,
  withKeptBranchId,
  withUnpatched,
  writePatch,
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
  owned?: GroupMask,
  group?: number,
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
    const fills = ensureFills(scopeId, owned, group!);
    if (fills) {
      const entry: unknown[] = [display ? 1 : 0, node];
      if (start !== undefined) entry.push(start);
      if (end !== undefined) entry.push(end);
      fills[entryKey(PatchKey.Show, accessor)] = entry;
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
  owned?: GroupMask,
  group?: number,
) {
  const { state } = getChunk()!.boundary;
  if (state instanceof PatchUpdateState) {
    writeBranch(state, scopeId, accessor, cb, shellIds, owned, group);
    return;
  }
  // A patchable conditional's markers must resume even on a page with no
  // other client code: a patch pairs and creates through them.
  if (shellIds) walkMarkers(getState());
  // A shell-less branch, or one whose expression derives from a client-owned
  // group, is the resumed page's to render: no patch fills its reads.
  const render =
    state instanceof PatchRenderState &&
    (!shellIds || _client_guard(owned, group!))
      ? () => withUnpatched(cb)
      : cb;
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
  state: PatchUpdateState,
  scopeId: number,
  accessor: string,
  cb: () => number | undefined | void,
  shellIds?: string[],
  owned?: GroupMask,
  group?: number,
) {
  const sources = groupSources(owned, group!);
  // A branch whose expression derives from a client-owned group re-renders
  // on the resumed page: the patch skips it.
  if (sources & 1) return;
  // One whose expression derives from nothing request-derived, outside
  // structure a flush creates, keeps its branch: the entry ships only what its body fills.
  const kept = !sources && !inCreatable();
  const branchId = _peek_scope_id();
  (state.patchLinks ??= {})[branchId] = {
    parent: scopeId,
    link: entryKey(AccessorPrefix.BranchScopes, accessor),
  };
  const opened = openScopePatch(state, branchId);
  const branchIndex = (kept ? withKeptBranchId : withBranchId)(branchId, cb);
  const shellId =
    branchIndex === undefined || kept
      ? undefined
      : shipShell(state, shellIds?.[branchIndex]);
  if (kept && !hasKeys(opened)) {
    if (branchIndex === undefined) _scope_id();
    return;
  }
  // Shape-typed entry, densest form first: a bare number is the
  // branch index + 1 (`0` hides), and empty/zero members drop.
  const branchPatch =
    branchIndex === undefined || !hasKeys(opened) ? undefined : opened;
  writePatch(
    state,
    scopeId,
    entryKey(PatchKey.Branch, accessor),
    branchIndex === undefined
      ? 0
      : branchIndex
        ? branchPatch || shellId
          ? patchNode(
              state,
              shellId
                ? [branchIndex, branchPatch || patchNode(state, {}), shellId]
                : [branchIndex, branchPatch || patchNode(state, {})],
            )
          : branchIndex + 1
        : branchPatch
          ? patchNode(state, shellId ? [branchPatch, shellId] : [branchPatch])
          : shellId || 1,
  );
  if (branchIndex === undefined) {
    // Nothing rendered took the peeked id: consume it so no later scope
    // finds this branch's patch or link.
    _scope_id();
  }
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
  shellId?: string | 0,
  owned?: GroupMask,
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
    owned,
    group,
  );
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
  shellId?: string | 0,
  owned?: GroupMask,
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
    owned,
    group,
  );
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
  shellId?: string | 0,
  owned?: GroupMask,
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
    owned,
    group,
  );
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
  shellId?: string | 0,
  owned?: GroupMask,
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
    owned,
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
  owned: GroupMask,
  group: undefined | number,
) {
  const chunk = getChunk()!;
  const { state } = chunk.boundary;
  if (state instanceof PatchUpdateState) {
    writeLoop(state, by, cb, iterate, scopeId, accessor, shellId, owned, group);
    return;
  }
  // A patchable loop's markers must resume even on a page with no other
  // client code: a patch pairs and creates through them.
  if (shellId !== undefined) walkMarkers(state);
  forBranches(
    by,
    cb,
    state instanceof PatchRenderState &&
      (!shellId || _client_guard(owned, group!))
      ? (each) => withUnpatched(iterate, each)
      : iterate,
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
  state: PatchUpdateState,
  by: unknown,
  cb: (a: A, b: B) => void,
  iterate: LoopIterate<A, B>,
  scopeId: number,
  accessor: string,
  shellId?: string | 0,
  owned?: GroupMask,
  group?: number,
) {
  // A client-owned list or a kept one keeps its rows: its entry ships only
  // what the rows themselves fill.
  const sources = groupSources(owned, group!);
  const clientRows = sources & 1;
  const rowsKept = clientRows || (!sources && !inCreatable());
  const patches: object[] = [];
  const keys: unknown[] = [];
  let indexKeys = true;
  const row = rowsKept ? keptRow(cb) : cb;
  const iterateItems = MARKO_DEBUG && by ? checkLoopKeys(cb, iterate) : iterate;
  iterateItems((itemKey, sameAsIndex, a, b) => {
    indexKeys &&= sameAsIndex;
    // An item is found where it rendered, checked by key as the loop's
    // reconciler does (a client-owned list may since have moved it).
    const branchId = _peek_scope_id();
    (state.patchLinks ??= {})[branchId] = {
      parent: scopeId,
      link: [accessor, sameAsIndex ? keys.length : [keys.length, itemKey]],
    };
    keys.push(itemKey);
    // Opened here so an item settling after this flush re-links by its hop.
    patches.push(openScopePatch(state, branchId));
    withBranchId(branchId, row, a, b);
  });
  if (rowsKept && !patches.some(hasKeys)) return 1;
  if (clientRows) {
    // The rows are the client's: each patch applies to the row it still
    // holds under that key, and none is added or removed.
    const items: unknown[] = patchNode(state, []);
    for (let i = 0; i < patches.length; i++) {
      if (hasKeys(patches[i])) {
        items.push(indexKeys ? i : patchNode(state, [i, keys[i]]), patches[i]);
      }
    }
    if (items.length)
      writePatch(state, scopeId, entryKey(PatchKey.LoopItem, accessor), items);
    return 1;
  }
  // Kept rows are never created, so they need no shell.
  const sentShellId =
    patches.length && !rowsKept ? shipShell(state, shellId) : undefined;
  // Interleaved `[key, patch, …, shellId?]`: keys drop when every key
  // is its index, and the shell rides as a trailing string.
  const entry: unknown[] = patchNode(state, []);
  for (let i = 0; i < patches.length; i++) {
    if (!indexKeys) entry.push(keys[i]);
    entry.push(patches[i]);
  }
  if (sentShellId) entry.push(sentShellId);
  writePatch(state, scopeId, entryKey(PatchKey.Loop, accessor), entry);
  return 1 as const;
}

// A patch writes the await's pending entry up front, and its body pairs with
// the live branch once it settles.
export function _await<T>(
  scopeId: number,
  accessor: Accessor,
  promise: Promise<T> | T,
  content: (value: T) => void,
  markerGuard?: number,
  patchContent?: 0 | string,
  alwaysPairs?: 1,
) {
  const state = getState();
  if (!(state instanceof PatchUpdateState)) {
    return _base_await(scopeId, accessor, promise, content, markerGuard);
  }
  // `0`: a client-owned thenable, resolved by `_await_promise`. A string is
  // the body's content id, letting a created scope build the await branch.
  if (patchContent === 0) return;
  // A created scope builds the body from this shell, even when settled; an
  // always-pairing body outside creatable structure only pairs.
  const elide = alwaysPairs && !inCreatable();
  if (!elide) shipShell(state, patchContent);
  writePatch(
    state,
    scopeId,
    entryKey(PatchKey.Pending, accessor),
    (!elide && patchContent) || 1,
  );
  _base_await(scopeId, accessor, promise, (value: T) => {
    // The Child entry settles the pending UI the entry above opens: forced so
    // a body with no writes of its own still attaches it.
    const branchId = _peek_scope_id();
    pairBranch(state, scopeId, accessor, branchId);
    ensureScopePatch(state, branchId);
    content(value);
  });
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
  catchEffects?: string | 1,
) {
  const state = getState();
  if (!(state instanceof PatchUpdateState)) {
    return _base_try(
      scopeId,
      accessor,
      content,
      placeholderContent,
      catchContent && ((err) => withUnpatched(catchContent, err)),
      placeholderId,
      catchId,
    );
  }
  // The placeholder's branch id precedes the body's, as in a document.
  if (placeholderContent) _scope_id();
  const branchId = _peek_scope_id();
  // The entry carries the creation payload (body shell, slot ids) unless the
  // try always pairs outside divergent branches; one that only pairs still
  // names its catch, so a caught try leaves the entry.
  const create = !alwaysPairs || inCreatable();
  const slotIds =
    create && placeholderId ? [catchId, placeholderId] : [catchId];
  pairBranch(
    state,
    scopeId,
    accessor,
    branchId,
    create ? bodyId : undefined,
    create || catchId ? slotIds : undefined,
    scopeId,
  );
  // A try this flush may create needs its entry even when its body writes
  // nothing.
  if (create) ensureScopePatch(state, branchId);
  const chunk = getChunk()!;
  const beforeBranch = deferBranchStart(chunk);
  const renderers = (): void =>
    writeTryRenderers(
      branchId,
      catchContent && _resume(catchContent, catchId!),
      placeholderContent && _resume(placeholderContent, placeholderId!),
    );
  // A patch shows `@placeholder` from received client state and creates
  // `@catch` in its entry, so no document reorder rides the flush stream.
  const writesRenderers = catchContent
    ? tryBoundary(content, catchContent, branchId, renderers, (err) => {
        // A body that threw before claiming its id keeps it paired.
        if (_peek_scope_id() === branchId) _scope_id();
        // A catch no flush creates renders on the client from its error, sent
        // whole (as message and cause) where its code reads it.
        writePatch(
          state,
          scopeId,
          entryKey(PatchKey.Catch, accessor),
          typeof catchEffects === "string"
            ? writeCatch(
                state,
                scopeId,
                accessor,
                catchContent,
                err,
                catchId!,
                catchEffects,
              )
            : catchEffects
              ? [err]
              : [],
        );
      })
    : (content(), false);
  applyBranchStart(chunk, beforeBranch, true);
  if (!writesRenderers) renderers();
}

// The `@catch` renders as a branch the flush creates in the body's place, from
// its renderer and fills: only what client code reads of the error ships.
function writeCatch(
  state: PatchUpdateState,
  scopeId: number,
  accessor: Accessor,
  catchContent: ServerRenderer,
  err: unknown,
  catchId: string,
  effectIds: string,
) {
  const catchBranchId = _peek_scope_id();
  (state.patchLinks ??= {})[catchBranchId] = {
    parent: scopeId,
    link: entryKey(AccessorPrefix.BranchScopes, accessor),
  };
  const patch = openScopePatch(state, catchBranchId);
  withBranchId(catchBranchId, withUnpatched, catchContent, err);
  if (effectIds) addSetupId(state, catchBranchId, effectIds, 1);
  return patchNode(state, [patch, catchId]);
}
