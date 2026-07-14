/* eslint-disable @typescript-eslint/no-this-alias */
import {
  _el_read_error,
  _hoist_read_error,
  assertValidLoopKey,
} from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import {
  encodePossessionSite,
  isPromise,
  normalizeDynamicRenderer,
} from "../common/helpers";
import { concat, forEach, type Opt, push } from "../common/opt";
import {
  type $Global,
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type Falsy,
  type PersistedPatch,
  type PersistedRender,
  ResumeSymbol,
} from "../common/types";
import { RendererProp } from "../common/types";
import { attrAssignment } from "./attrs";
import { forInBy, forOfBy, forStepBy } from "./for";
import {
  PERSISTED_REORDER_RUNTIME_CODE,
  PERSISTED_WALKER_RUNTIME_CODE,
  REORDER_RUNTIME_CODE,
  WALKER_RUNTIME_CODE,
} from "./inlined-runtimes.debug";
import {
  K_SCOPE_ID,
  quote,
  register as serializerRegister,
  type ScopeFlush,
  Serializer,
  setDebugInfo,
  toAccess,
  toObjectKey,
} from "./serializer";
import type { ServerRenderer } from "./template";

export type PartialScope = Record<Accessor, unknown>;

interface SerializeState {
  readyId?: string;
  parent?: SerializeState;
  resumes: string;
  writeScopes: Record<number, PartialScope>;
  passiveScopes?: Record<number, PartialScope>;
  flushScopes: boolean;
}

type ScopeInternals = PartialScope & {
  [K_SCOPE_ID]?: number;
};

let $chunk: Chunk;
const NOOP = () => {};

enum Mark {
  Placeholder = "!^",
  PlaceholderEnd = "!",
  ReorderMarker = "#",
}

enum RuntimeKey {
  Walk = ".w",
  Resume = ".r",
  Ready = ".b",
  Scripts = ".j",
}

// Build-stable per-site id a `<try>` placeholder boundary's possession echo
// reads, stashed on its parent scope under this reserved prefix ("T", not an
// AccessorPrefix member so it stays out of every client bundle) -- see
// common/accessor.ts and dom/update.ts's matching constant and `_have`.
// Persisted resume only.
const BOUNDARY_SITE_PREFIX = MARKO_DEBUG ? "BoundarySite:" : "T";

// Pending-boundary stash tombstone bookkeeping (see `Chunk.boundarySite`/
// `tryPlaceholder`): scope id, stash key ("" once tombstoned), and the
// boundary body's head chunk (the swap ships when it completes).
interface BoundarySite {
  s: number;
  k: string;
  b: Chunk;
}

export function getChunk(): Chunk | undefined {
  return $chunk;
}

export function getContext(key: keyof NonNullable<Chunk["context"]>) {
  return $chunk.context?.[key];
}

export function getState(): State {
  return $chunk.boundary.state;
}

export function getScopeId(scope: unknown): number | undefined {
  return (scope as ScopeInternals)[K_SCOPE_ID];
}

export function _html(html: string) {
  $chunk.writeHTML(html);
}

export function writeScript(script: string) {
  // Document-level scripts (asset loader/trigger injection) belong to the
  // served document. An update response has no document -- the live page runs
  // its own loaders, and a raw script statement would corrupt the frame
  // stream (frames are bare `[...]` lines).
  if (!$chunk.boundary.state.update) $chunk.writeScript(script);
}

export function writeWaitReady(
  readyId: string,
  renderer: ServerRenderer,
  input: unknown,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const body = new Chunk(boundary, null, chunk.context, {
    readyId,
    parent: chunk.serializeState,
    resumes: "",
    writeScopes: {},
    flushScopes: false,
  });
  // A lazy child inside fragment capture bakes into the fragment like any
  // content: markup captures (update-mode suppression restored as `fork`
  // does) and its scope ids join the entry's stamp list. Its resume DATA
  // still rides the ready channel -- `writeReady`'s update branch keys the
  // batch by this `readyId` and the applier parks it until the module
  // declares ready, mirroring the document's `.b` channel (see dom/update.ts).
  if (chunk.fragment) {
    body.fragment = true;
    body.fragmentAsync = chunk.fragmentAsync;
    body.writeHTML = Chunk.prototype.writeHTML;
  }
  const bodyEnd = body.render(renderer, input);

  if (body === bodyEnd) {
    chunk.writeHTML(body.html);
    // The body carried its own node-marker run register, so a same-scope
    // run on this chunk must not continue across its inlined markers -- the
    // walker's register now points at the body's last marked scope.
    chunk.lastNodeMarkScope = -1;
    body.deferOwnReady();
    chunk.deferredReady = push(chunk.deferredReady, body);
  } else {
    // The remainder of the render continues after the async body in a chunk
    // that restores the parent serialize state.
    bodyEnd.next = $chunk = chunk.fork(boundary, chunk.next);
    chunk.next = body;
  }
}

export function _script(scopeId: number, registryId: string) {
  // Update renders ship effects as data: the applier runs them only for
  // scopes it freshly created during the apply. A matched live scope's
  // effects already ran at mount (replaying would double-bind); a fresh
  // branch's wiring cannot come from setup, which persisted builds skip
  // request-derived computes in.
  if ($chunk.boundary.state.update) {
    $chunk.writeEffect(scopeId, registryId);
    return;
  }
  if ($chunk.serializeState.readyId || $chunk.context?.[kIsAsync]) {
    _resume_branch(scopeId);
  }
  $chunk.boundary.state.needsMainRuntime = true;
  $chunk.writeEffect(scopeId, registryId);
}

export function _attr_content(
  nodeAccessor: Accessor,
  scopeId: number,
  content: unknown,
  serializeReason?: number,
) {
  const shouldResume = serializeReason !== 0;
  const render = normalizeServerRender(content);
  const branchId = _peek_scope_id();
  if (render) {
    if (shouldResume) {
      withBranchId(branchId, render);
    } else {
      render();
    }
  }

  const rendered = _peek_scope_id() !== branchId;
  if (rendered) {
    if (shouldResume) {
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + nodeAccessor]: writeScope(branchId, {}),
        [AccessorPrefix.ConditionalRenderer + nodeAccessor]:
          render?.[RendererProp.Id],
      });
    }
  } else {
    _scope_id();
  }
}

function normalizeServerRender(value: unknown) {
  const renderer = normalizeDynamicRenderer<ServerRenderer>(value);
  if (renderer) {
    if (typeof renderer === "function") {
      return renderer;
    } else if (MARKO_DEBUG) {
      throw new Error(
        `Invalid \`content\` attribute. Received ${typeof value}`,
      );
    }
  }
}

const kPendingContexts = Symbol("Pending Contexts");
export function withContext<T>(
  key: PropertyKey,
  value: unknown,
  cb: () => T,
): T;
export function withContext<T, U>(
  key: PropertyKey,
  value: unknown,
  cb: (value: U) => T,
  cbValue: U,
): T;
export function withContext<T, U>(
  key: PropertyKey,
  value: unknown,
  cb: (value?: U) => T,
  cbValue?: U,
): T {
  const ctx = ($chunk.context ||= { [kPendingContexts]: 0 } as any);
  const prev = ctx[key];
  ctx[kPendingContexts]++;
  ctx[key] = value;
  try {
    return cb(cbValue);
  } finally {
    ctx[kPendingContexts]--;
    ctx[key] = prev;
  }
}

export function _var(
  parentScopeId: number,
  scopeOffsetAccessor: Accessor,
  childScopeId: number,
  registryId: string,
  nodeAccessor?: Accessor,
) {
  // Tag-variable wiring (scope offset + registered var ref) is resume-only;
  // update renders keep the structural child-scope link, but matched scopes
  // keep their live variables and fresh branches wire their own. Fragment
  // subtrees are resumes, not fresh constructions -- no setup runs, so the
  // wiring rides the serialized data as in a document.
  const resumeWiring = !$chunk.boundary.state.update || $chunk.fragment;
  if (resumeWiring) {
    writeScopePassive(parentScopeId, { [scopeOffsetAccessor]: _scope_id() });
  }
  // TODO: if the return value is already registered, use that.
  const childScope = writeScopePassive(
    childScopeId,
    resumeWiring
      ? { [AccessorProp.TagVariable]: _resume({}, registryId, parentScopeId) }
      : {},
  );
  if (nodeAccessor !== undefined) {
    writeScope(parentScopeId, {
      [AccessorPrefix.BranchScopes + nodeAccessor]: childScope,
    });
  }
}

function writeScopePassive(scopeId: number, partialScope: PartialScope) {
  const target = $chunk.serializeState;
  const scope = _scope_with_id(scopeId);
  const passive = (target.passiveScopes ||= {});
  // See the matching hook in `writeScope`: fragment-subtree scopes are
  // stamped from the entry's id list.
  if ($chunk.fragment) {
    const { state } = $chunk.boundary;
    (state.fragmentScopeIds ??= new Set()).add(scopeId);
  }
  Object.assign(scope, partialScope);
  passive[scopeId] = Object.assign(passive[scopeId] || {}, partialScope);
  return scope;
}

export function _resume<T extends WeakKey>(
  val: T,
  id: string,
  scopeId?: number,
): T {
  return serializerRegister(
    id,
    val,
    scopeId === undefined ? undefined : _scope_with_id(scopeId),
  );
}

export function _id() {
  const state = $chunk.boundary.state;
  const { $global } = state;
  return (
    "s" + $global.runtimeId + $global.renderId + (state.tagId++).toString(36)
  );
}

export function _scope_id() {
  return $chunk.boundary.state.scopeId++;
}

export function _peek_scope_id() {
  return $chunk.boundary.state.scopeId;
}

export function getScopeById(scopeId: number | undefined) {
  if (scopeId !== undefined) {
    return $chunk.boundary.state.scopes.get(scopeId);
  }
}

// A serialize reason is `1` (serialize everything), `0`/`undefined` (nothing),
// a bitmask of reason group indices offset by one bit (so group 0 alone is
// `2`, never colliding with the `1` sentinel), or an object keyed by group
// index when any group's guard is dynamic.
export type SerializeReasonValue =
  undefined | number | Partial<Record<string, 0 | 1>>;

export function _set_serialize_reason(reason: SerializeReasonValue) {
  $chunk.boundary.state.serializeReason = reason;
}

export function _scope_reason() {
  const reason = $chunk.boundary.state.serializeReason;
  $chunk.boundary.state.serializeReason = undefined;
  return reason;
}

// Guard for $global-sourced serialization (persisted compile option): reads
// the render's persisted flag directly, not the parent-threaded reason --
// `$global` is render-wide, so the stateful bit never applies and no reason
// record carries per-key entries for it.
export function _persisted_reason() {
  const { state } = $chunk.boundary;
  return state.update ? 3 : state.persisted ? 2 : 0;
}

// Value-class guards for persisted builds, split by compile-time source
// class: request-derived (state-free) values serialize in update renders
// (they are the payload); state-sourced values never do (the client owns
// them) but still serialize for normal stateful resume. Both return
// `undefined` (not 0) when inactive so `guard && value` collapses to
// undefined and the serializer skips the prop.
export function _update_reason() {
  return $chunk.boundary.state.update ? 1 : undefined;
}

export function _state_reason() {
  const { state } = $chunk.boundary;
  // Seed-mode update renders (cross-route navigations: the client creates
  // the target subtree fresh and cannot compute state seeded from
  // server-only expressions) serialize state values too; the client only
  // seeds them into scopes created during the apply, so matched scopes'
  // live state stays hostile-patch-proof.
  if (state.update) {
    if (!state.seed) return undefined;
    // Persisted navigation knows a fresh subtree server-side: seed values and
    // resume-only wiring narrow to the fragment's chunks and to
    // fills-path structural branch renders (fresh-by-patch loop items,
    // conditional branches, await bodies). Everything else is matched --
    // its seeds are dead bytes the client would discard.
    if (state.fragments && !$chunk.fragment && !state.freshBranchDepth) {
      return undefined;
    }
  }
  return 1;
}

export function _serialize_if(condition: SerializeReasonValue, key: number) {
  // Record entries carry the persisted bit lattice (bit 1 stateful, bit 2
  // persisted/request-derived), so the value gate masks the stateful bit;
  // packed numbers are pure stateful group masks and unaffected.
  return condition &&
    (condition === 1 ||
      (typeof condition === "number"
        ? (condition >>> (key + 1)) & 1
        : condition[key]! & 1))
    ? 1
    : undefined;
}

export function _serialize_guard(condition: SerializeReasonValue, key: number) {
  // The spine gate keeps the group's raw bits (records can carry the persisted
  // bit, which branch guards check via `& 2`) and ORs in the render-wide
  // persisted bits: persisted renders serialize every reason-carrying
  // marker/spine site regardless of what a stateful parent threaded.
  // Non-persisted renders get `_serialize_if || 0`.
  return (
    (condition &&
      (condition === 1
        ? 1
        : typeof condition === "number"
          ? (condition >>> (key + 1)) & 1
          : condition[key])) ||
    _persisted_reason()
  );
}

// Captures a computed hole value for update renders (persisted patch
// responses): expressions that inline into the HTML also write their value
// under the hole's patch key (`UpdateHole:<accessor>` /
// `UpdateAttr:<name>:<accessor>`, prefixed off the node-accessor namespace so
// fragment subtrees -- where patch and live scopes are one object -- never
// collide with bound node refs) for the compiled merge to place
// (`_text`/`_attr` against the live scope's bound node). Pass-through outside
// update mode. The guard is the hole's marker guard; 0 means this render's
// inputs cannot change the hole (sparse: absent means unchanged).
export function _hole_value<T>(
  scopeId: number,
  key: Accessor,
  value: T,
  guard?: number,
): T {
  // Fragment subtrees skip captures: their values are baked into the
  // fragment's markup and the applier resumes them, so re-shipping the
  // computed value would be redundant.
  const { state } = $chunk.boundary;
  if (guard && state.update && !$chunk.fragment) {
    writeScope(scopeId, { [key]: value });
  }
  return value;
}

/**
 * Serializes a parent -> child scope link under its typed update key
 * (`UpdateChild:<accessor>`) when the child template is update-generic: the
 * generic applier descends through the typed key with no compiled dispatch
 * line in the parent, letting server-only compositions drop their `?update`
 * modules transitively. Update renders only; fragment subtrees skip it like
 * hole captures (their merge self-applies through shared scope objects, so
 * there is nothing for the descent to place).
 */
export function _update_child(
  scopeId: number,
  key: Accessor,
  childScopeId: number,
) {
  const { state } = $chunk.boundary;
  if (state.update && !$chunk.fragment) {
    writeScope(scopeId, { [key]: scopeWithId(state, childScopeId) });
  }
}

/**
 * Renders a content-hop branch as a fragment frame (see
 * designs/persisted-pages-architecture.md, "Fragment frames"): the branch's
 * HTML -- markers, branch brackets, values baked in -- is captured rather
 * than suppressed, and rides the update frame as a
 * `[anchorScopeId, accessor, markerPrefix, html]` entry the applier inserts
 * at the hop's anchor and resumes. Scope data still rides the ordinary fills
 * (same id space); only construction material moves to HTML.
 *
 * Capture is a chunk property, not a splice: nothing else writes HTML in an
 * update render, so `fragment`-flagged chunks accumulate exactly the
 * fragment's markup and the flush machinery assembles it across forks
 * (`consume` merges the chain; `flushScript` emits the html as the pending
 * entry keyed by `state.fragmentAnchor`). Forks inherit the flag, so async
 * continuations (an awaited boundary body) keep capturing -- the body
 * flushes as its own boundary-body entry (see `flushPlaceholder`/`consume`).
 * Async content inside a fragment must sit behind a `<try>` placeholder
 * boundary; a bare await would hold the whole fragment (see `_await`).
 */
export function _fragment<T>(
  scopeId: number,
  accessor: Accessor,
  render: () => T,
): T {
  const start = $chunk;
  const { state } = start.boundary;

  if (state.fragmentTaken) {
    // A second (or later) same-route swap diverging in the same nav: the
    // main chain's single html blob + `fragmentAnchor` already belong to the
    // first capture, so render this one onto a DETACHED chunk with its own
    // anchor and collect it for a per-entry flush (see `flushScript`). The
    // main walk continues on `start` (writing nothing in update mode), so
    // this capture never enters `consume`.
    const capture = start.fork(start.boundary, null);
    capture.fragment = true;
    capture.fragmentAnchor = scopeId + "," + JSON.stringify(accessor);
    capture.writeHTML = Chunk.prototype.writeHTML;
    let out: T;
    capture.render(() => {
      out = render();
    });
    if (capture.async || capture.next) {
      // v1: additional fragments are sync-only. An async body would need the
      // detached capture wired through the reorder/endAsync channel (as the
      // first capture's already is) before its markup can assemble.
      // Unconditional -- skipping it in production would let an incomplete
      // capture ride the frame (see the flush-loop guard in `flushScript`).
      // Abort without pushing: a pending/forked capture must never reach
      // `state.writeFragments`, whichever boundary (nested `<try>` included)
      // aborts.
      start.boundary.abort(
        new Error(
          MARKO_DEBUG
            ? "multiple simultaneous fragments with async content are not supported yet"
            : "fragment diverged",
        ),
      );
    } else {
      (state.writeFragments ||= []).push(capture);
    }
    return out!;
  }

  state.fragmentTaken = true;
  state.fragmentAnchor = scopeId + "," + JSON.stringify(accessor);
  start.fragment = true;
  start.writeHTML = Chunk.prototype.writeHTML;
  try {
    return render();
  } finally {
    // End the capture: content after the hop renders into a fresh
    // non-fragment chunk (the fork inherits the flag; undo it), leaving
    // everything captured on the `start..end` run of the chain.
    const end = $chunk;
    end.next = $chunk = end.fork(end.boundary, end.next);
    $chunk.fragment = false;
    $chunk.writeHTML = noopWriteHTML;
  }
}

export function _el_resume(
  scopeId: number,
  accessor: Accessor,
  shouldResume?: number,
) {
  if (shouldResume === 0) return "";

  const { state } = $chunk.boundary;
  state.needsMainRuntime = true;
  // Persisted documents carry many more node markers (they are the patch
  // addresses), and consecutive markers usually share a scope, so runs use a
  // continuation form omitting the repeated scope id (`M_* <accessor>` vs
  // `M_*<id> <accessor>`; the walker keeps the mirror register). The leading
  // space is load-bearing: the inline walker registers every marker by its
  // post-symbol payload in the same lookup the reorder runtime resolves
  // anchors from, and a bare (numeric, optimized) accessor would collide with
  // a reorder id -- a space-leading key cannot. The register is per chunk:
  // reordered async content always opens with a full-form marker, so a
  // register carried across a boundary is overwritten before any continuation
  // is read. Non-persisted documents are byte-identical.
  if (state.persisted) {
    if ($chunk.fragment) {
      state.fragmentMarkerScopeIds += "," + scopeId + ",";
    }
    if ($chunk.lastNodeMarkScope === scopeId) {
      return state.mark(ResumeSymbol.Node, " " + accessor);
    }
    $chunk.lastNodeMarkScope = scopeId;
  }
  return state.mark(ResumeSymbol.Node, scopeId + " " + accessor);
}

// Branch/non-node resume markers reset the per-chunk node-marker run register
// so the next node marker re-emits its full scope id instead of a
// continuation; the client walker mirrors this on every non-node visit (see
// `_el_resume`). Exposed for `dynamic-tag.ts`, whose branch markers write to
// this same chunk through `_html`.
export function _reset_node_mark_run() {
  $chunk.lastNodeMarkScope = -1;
}

export function _sep(shouldResume: number) {
  return shouldResume === 0 ? "" : "<!>";
}

export function _el(scopeId: number, id: string) {
  return _resume(() => _el_read_error(), id, scopeId);
}

export function _hoist(scopeId: number, id: string) {
  const getter = () => _hoist_read_error();
  getter[Symbol.iterator] = _hoist_read_error;
  return _resume(getter, id, scopeId);
}

export function _resume_branch(scopeId: number) {
  const branchId = $chunk.context?.[kBranchId];
  if (
    branchId !== undefined &&
    branchId !== scopeId &&
    // Branch ownership is recovered structurally by update merges; the
    // resume-only backref would be dead weight in the patch.
    !$chunk.boundary.state.update
  ) {
    writeScope(scopeId, { [AccessorProp.ClosestBranchId]: branchId });
  }
}

const kBranchId = Symbol("Branch Id");
const kIsAsync = Symbol("Is Async");

export function isInResumedBranch() {
  return $chunk?.context?.[kBranchId] !== undefined;
}

export function withBranchId<T>(branchId: number, cb: () => T): T {
  return withContext(kBranchId, branchId, cb);
}

function withIsAsync<T, U>(cb: (value: U) => T, value: U): T {
  return withContext(kIsAsync, true, cb, value);
}

// A keyed `<for>`'s per-site id, stashed directly on each item branch scope
// (see `forBranches` below). Request-derived loops use their build-stable site
// id; ordinary keyed loops use the empty id, so both retain their key in the
// nested possession path. Mirrors `BOUNDARY_SITE_PREFIX`'s existence-only echo
// convention (dom/update-fragment.ts's `_have`).
const FOR_SITE_PREFIX = MARKO_DEBUG ? "ForSite:" : "F";

export function _for_of(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  by: Falsy | ((item: unknown, index: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
): void {
  forBranches(
    by,
    (each) =>
      each
        ? forOf(list, (item, index) => {
            const itemKey = forOfBy(by, item, index);
            each(itemKey, itemKey === index, () => cb(item, index));
          })
        : forOf(list, cb),
    scopeId,
    accessor,
    serializeBranch,
    serializeMarker,
    serializeStateful,
    parentEndTag,
    singleNode,
    siteId,
  );
}

export function _for_in(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  by: Falsy | ((key: string, v: unknown) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
): void {
  forBranches(
    by,
    (each) =>
      each
        ? forIn(obj, (key, value) => {
            // There is no positional index for `for...in`, so the loop key
            // is always serialized.
            each(forInBy(by, key, value), false, () => cb(key, value));
          })
        : forIn(obj, cb),
    scopeId,
    accessor,
    serializeBranch,
    serializeMarker,
    serializeStateful,
    parentEndTag,
    singleNode,
    siteId,
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
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
): void {
  forBranches(
    by,
    (each) => {
      let index = 0;
      return each
        ? forTo(to, from, step, (value) => {
            const itemKey = forStepBy(by, value);
            each(itemKey, itemKey === index++, () => cb(value));
          })
        : forTo(to, from, step, cb);
    },
    scopeId,
    accessor,
    serializeBranch,
    serializeMarker,
    serializeStateful,
    parentEndTag,
    singleNode,
    siteId,
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
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
): void {
  forBranches(
    by,
    (each) => {
      let index = 0;
      return each
        ? forUntil(to, from, step, (value) => {
            const itemKey = forStepBy(by, value);
            each(itemKey, itemKey === index++, () => cb(value));
          })
        : forUntil(to, from, step, cb);
    },
    scopeId,
    accessor,
    serializeBranch,
    serializeMarker,
    serializeStateful,
    parentEndTag,
    singleNode,
    siteId,
  );
}

// Shared driver for the `_for_*` loop variants: writes branch start/end
// markers, branch scopes (with the loop key when it differs from the
// positional index), and the branch scope list when markers are disabled.
// When the branch is not serialized, `iterate` runs the raw loop (still
// validating keys under MARKO_DEBUG when a `by` is present).
function forBranches(
  by: unknown,
  iterate: (
    each:
      | 0
      | ((itemKey: unknown, sameAsIndex: boolean, render: () => void) => void),
  ) => void,
  scopeId: number,
  accessor: Accessor,
  serializeBranch: undefined | number,
  serializeMarker: undefined | number,
  serializeStateful: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
  // Build-stable site id (see `FOR_SITE_PREFIX`), present only for a keyed
  // loop whose LIST ITSELF is request-derived: a genuinely new key ships as
  // a resumable fragment instead of a plain sparse merge.
  siteId?: string,
) {
  if (MARKO_DEBUG) {
    // eslint-disable-next-line no-var
    var seenKeys = new Set<unknown>();
  }

  if (serializeBranch === 0) {
    if (MARKO_DEBUG && by) {
      iterate((itemKey, _sameAsIndex, render) => {
        assertValidLoopKey(itemKey, seenKeys);
        render();
      });
    } else {
      iterate(0);
    }
    writeBranchEnd(
      scopeId,
      accessor,
      serializeStateful,
      serializeMarker,
      parentEndTag,
      singleNode,
      "",
    );
    return;
  }

  const { state } = $chunk.boundary;

  // Update renders (persisted patch responses) have no HTML to carry branch
  // markers, so the branch list, loop keys (even positional ones), and owner
  // refs serialize as scope props for the compiled merge to reconcile from.
  // State-driven loops (no persisted bit) are excluded: the server never
  // pairs into client-state-driven structure. Fragment subtrees fall through
  // to the initial-persisted path below, whose HTML carries real branch
  // brackets the fragment walker consumes.
  if (state.update && !$chunk.fragment && (serializeBranch as number) & 2) {
    const branchScopes: ScopeInternals[] = [];
    const possessed = state.possessed;
    // Patch-list branches may be created fresh client-side; their seed
    // data serializes even when fragment delivery narrows the page-wide seed.
    state.freshBranchDepth++;
    iterate((itemKey, sameAsIndex, render) => {
      const branchId = _peek_scope_id();
      if (MARKO_DEBUG && by) {
        assertValidLoopKey(itemKey, seenKeys);
      }
      withBranchId(branchId, () => {
        const prevLoopKey = state.loopKey;
        const prevLoopPath = state.loopPath;
        // Only expose the key when the client's live scope carries a matching
        // `LoopKey` (keyed loop); positional iterations share the site id and
        // collide in the possession echo (a client-side guard makes that safe
        // -- see the safety note in `_dynamic_tag`). Forced (not
        // `sameAsIndex`-gated) when THIS site needs unambiguous per-item
        // possession: an item whose key happens to equal its index must
        // still be distinguishable from its siblings in `_have`'s echo.
        state.loopKey =
          siteId !== undefined ? itemKey : sameAsIndex ? undefined : itemKey;
        const keyed = state.loopKey !== undefined;
        if (keyed) {
          state.loopPath = [
            ...(prevLoopPath || []),
            encodePossessionSite(siteId || "", state.loopKey),
          ];
        }
        const siteKey =
          siteId !== undefined
            ? "!" + (state.loopPath || []).join("/")
            : undefined;
        if (
          siteKey !== undefined &&
          (possessed === undefined || possessed[siteKey] !== "1")
        ) {
          // A genuinely new key: the client holds nothing to merge sparse
          // holes into, so this item's content ships as a resumable
          // fragment instead of client-registered construction material
          // (see `createFragmentBranch` in dom/update-fragment.ts).
          _fragment(branchId, accessor, render);
        } else {
          render();
        }
        state.loopKey = prevLoopKey;
        state.loopPath = prevLoopPath;
        branchScopes.push(
          writeScope(branchId, {
            [AccessorProp.LoopKey]: itemKey,
            [AccessorProp.Owner]: scopeWithId(state, scopeId),
            // Stashed unconditionally (matched or new) so the NEXT
            // navigation's echo can prove this exact item is now live.
            ...(keyed ? { [FOR_SITE_PREFIX + accessor]: siteId || "" } : null),
          }),
        );
      });
    });
    state.freshBranchDepth--;
    // Written even when empty: patch semantics are sparse (absence means
    // unchanged), so "now zero branches" must be an explicit empty list.
    writeScope(scopeId, {
      [AccessorPrefix.BranchScopes + accessor]: branchScopes,
    });
    writeBranchEnd(scopeId, accessor, serializeStateful, 0, parentEndTag);
    return;
  }

  const resumeKeys = serializeMarker !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
  let flushBranchIds = "";
  let loopScopes: Opt<ScopeInternals>;

  iterate((itemKey, sameAsIndex, render) => {
    const branchId = _peek_scope_id();
    if (MARKO_DEBUG && by) {
      assertValidLoopKey(itemKey, seenKeys);
    }
    if (resumeMarker) {
      if (singleNode) {
        flushBranchIds = " " + branchId + flushBranchIds;
      } else {
        // Branch markers bracket every async/structural boundary (where other
        // chunks' content interleaves in document order), so they reset the
        // node-marker run register; the walker mirrors the reset on every
        // non-node visit (see `_el_resume`).
        $chunk.lastNodeMarkScope = -1;
        $chunk.writeHTML(state.mark(ResumeSymbol.BranchStart, flushBranchIds));
        flushBranchIds = branchId + "";
      }
    }

    withBranchId(branchId, () => {
      const prevLoopKey = state.loopKey;
      const prevLoopPath = state.loopPath;
      // Matches `resumeKeys && !sameAsIndex` below: the possession key carries
      // the loop key exactly when the client's live scope serialized one.
      // Forced (not `sameAsIndex`-gated) for a site that needs unambiguous
      // per-item possession -- see the matching branch above.
      const keyed = siteId !== undefined || (resumeKeys && !sameAsIndex);
      state.loopKey = keyed ? itemKey : undefined;
      if (state.loopKey !== undefined) {
        state.loopPath = [
          ...(prevLoopPath || []),
          encodePossessionSite(siteId || "", state.loopKey),
        ];
      }
      render();
      state.loopKey = prevLoopKey;
      state.loopPath = prevLoopPath;
      const branchScope = writeScope(
        branchId,
        keyed
          ? {
              [AccessorProp.LoopKey]: itemKey,
              [FOR_SITE_PREFIX + accessor]: siteId || "",
            }
          : {},
      );
      if (!resumeMarker) {
        loopScopes = push(loopScopes, branchScope);
      }
    });
  });

  if (loopScopes) {
    writeScope(scopeId, {
      [AccessorPrefix.BranchScopes + accessor]: loopScopes,
    });
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    serializeMarker,
    parentEndTag,
    singleNode,
    singleNode ? flushBranchIds : flushBranchIds ? " " + flushBranchIds : "",
  );
}

// Build-stable per-site id a request-derived `<if>` stashes on its owner
// scope (`"Z"`, not an `AccessorPrefix` member so it stays out of every
// client bundle) so a later navigation's possession echo can name this
// site (mirrors html/dynamic-tag.ts's `HOP_SITE_PREFIX`; the two never
// collide because they key off disjoint node accessors). Persisted resume
// only.
const IF_SITE_PREFIX = MARKO_DEBUG ? "HopSite:" : "Z";

export function _if(
  cb: () => void | number,
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
  siteId?: string,
  branches?: ((() => void) | 0)[],
) {
  const { state } = $chunk.boundary;
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
  const branchId = _peek_scope_id();
  if (resumeMarker && resumeBranch && !singleNode) {
    $chunk.lastNodeMarkScope = -1;
    $chunk.writeHTML(state.mark(ResumeSymbol.BranchStart, ""));
  }

  // A patch-list branch may be created fresh client-side; its seed data
  // serializes even when fragment delivery narrows the page-wide seed.
  const updateStructural =
    state.update && !$chunk.fragment && (serializeBranch as number) & 2;
  let branchIndex: number | undefined;
  let takeFragment = false;

  if (branches) {
    // A request-derived conditional never client-constructs a branch (see
    // html/dynamic-tag.ts for the analogous hop): `cb` here only selects the
    // outcome -- rendering is deferred to `branches[branchIndex]` so a
    // possession mismatch (the client's last echo, `_have` in
    // dom/update-fragment.ts, names a different branch at this site) is
    // known BEFORE any of the branch's content -- which may not run
    // client-side -- renders, and can redirect that render into a resumable
    // fragment instead of a plain (client-replayed) patch.
    branchIndex = cb() as number | undefined;
    if (updateStructural) {
      const possessed = state.possessed;
      const siteKey =
        siteId !== undefined
          ? [...(state.loopPath || []), encodePossessionSite(siteId)].join("/")
          : undefined;
      const possessedBranch =
        possessed !== undefined && siteKey !== undefined
          ? possessed[siteKey]
          : undefined;
      takeFragment = possessedBranch !== (branchIndex ?? -1) + "";
    }
  }

  if (updateStructural) state.freshBranchDepth++;
  if (branches) {
    const render =
      branchIndex === undefined ? undefined : branches[branchIndex];
    if (render) {
      if (takeFragment) {
        _fragment(scopeId, accessor, () => withBranchId(branchId, render));
      } else if (resumeBranch) {
        withBranchId(branchId, render);
      } else {
        render();
      }
    }
  } else {
    branchIndex = (resumeBranch ? withBranchId(branchId, cb) : cb()) as
      number | undefined;
  }
  if (updateStructural) state.freshBranchDepth--;

  const shouldWriteBranch = resumeBranch && branchIndex !== undefined;

  // Update renders always write the conditional outcome (absence means
  // "unchanged", not "no branch"; -1 is the explicit no-branch index, out of
  // range for every conditional) plus the rendered branch scope, since there
  // is no HTML end-marker to carry it. State-driven conditionals (no persisted
  // bit) are excluded: the server never pairs into client-state-driven
  // structure.
  if (updateStructural) {
    writeScope(scopeId, {
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex ?? -1,
      [AccessorPrefix.BranchScopes + accessor]:
        branchIndex === undefined ? undefined : writeScope(branchId, {}),
      // Stashed unconditionally (not only on a fragment/mismatch) so the
      // NEXT navigation's echo can prove this one matched or diverged.
      ...(siteId !== undefined
        ? { [IF_SITE_PREFIX + accessor]: siteId }
        : null),
    });
    writeBranchEnd(scopeId, accessor, serializeStateful, 0, parentEndTag);
    return;
  }

  if (siteId !== undefined) {
    // A structural (request-derived) conditional stashes its outcome + site
    // id unconditionally (even a falsy/no-branch outcome the marker
    // optimization below would otherwise skip): a later navigation's
    // possession echo (`_have`, dom/update-fragment.ts) can only prove this
    // site MATCHED or DIVERGED if every render leaves a value to compare
    // against.
    writeScope(scopeId, {
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex ?? -1,
      [AccessorPrefix.BranchScopes + accessor]:
        shouldWriteBranch && !resumeMarker
          ? writeScope(branchId, {})
          : undefined,
      [IF_SITE_PREFIX + accessor]: siteId,
    });
  } else if (shouldWriteBranch && (branchIndex || !resumeMarker)) {
    writeScope(scopeId, {
      // TODO: technically conditional renderer should only be written when either the
      // condition is stateful, or if there are direct closures.
      // It may make sense to pass in another arg for this.
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex || undefined, // we convert 0 to undefined since the runtime defaults branch to 0.
      [AccessorPrefix.BranchScopes + accessor]: resumeMarker
        ? undefined
        : writeScope(branchId, {}),
    });
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    serializeMarker,
    parentEndTag,
    singleNode,
    shouldWriteBranch ? " " + branchId : "",
  );
}

function writeBranchEnd(
  scopeId: number,
  accessor: Accessor,
  serializeStateful: undefined | number,
  serializeMarker: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
  branchIds?: string,
) {
  const endTag = parentEndTag || "";
  if (serializeMarker !== 0) {
    if (!parentEndTag || serializeStateful !== 0) {
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
      // See the branch-start reset above: branch-end markers also bracket
      // interleave points.
      $chunk.lastNodeMarkScope = -1;
      $chunk.writeHTML(mark + endTag);
    } else {
      $chunk.writeHTML(endTag + _el_resume(scopeId, accessor));
    }
  } else {
    $chunk.writeHTML(endTag);
  }
}

// These bracket a `<show>` body's statements (rather than taking a content
// callback, so declarations in the body stay in the parent's scope) and write
// the marks tracking its node range. The body always renders so it resumes
// either way; hidden content is wrapped in a `<t hidden>` element, which
// unlike a `<template>` keeps its children reachable by the resume walker.
export function _show_start(display: unknown, mark?: unknown) {
  if (display) {
    // The wrapper is the range's single node, so the start mark is only
    // written (and its stack entry only popped) when the body renders in
    // place.
    if (mark) {
      // Branch markers reset the node-marker run register (see `_el_resume`).
      $chunk.lastNodeMarkScope = -1;
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
  serializeMarker?: number,
  serializeStateful?: number,
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
    serializeStateful,
    serializeMarker,
    parentEndTag,
    wrap || singleNode ? 1 : undefined,
    " " + branchId,
  );
}

let writeScope = (scopeId: number, partialScope: PartialScope) => {
  const { state } = $chunk.boundary;
  const target = $chunk.serializeState;
  const scope = scopeWithId(state, scopeId);
  const pending = target.writeScopes[scopeId];
  state.needsMainRuntime = true;
  // Scopes serialized while a fragment renders belong to its subtree; the
  // entry carries their ids so the applier can stamp them into the live tree.
  // Markers only reach scopes with DOM refs, but a dom-less scope (state +
  // tag-variable wiring only) still needs live identity ($global, effect
  // pairing).
  if ($chunk.fragment) {
    (state.fragmentScopeIds ??= new Set()).add(scopeId);
    if (state.loopKey !== undefined) state.fragmentKeyed = true;
  }
  Object.assign(scope, partialScope);

  // Each serialize state only flushes the props it wrote itself; the
  // canonical scope (above) accumulates everything for server side reads.
  if (pending && pending !== partialScope) {
    Object.assign(pending, partialScope);
  } else {
    target.writeScopes[scopeId] = partialScope;
  }
  target.flushScopes = true;

  return scope;
};

if (MARKO_DEBUG) {
  writeScope = (
    (writeScope) =>
    (
      scopeId: number,
      partialScope: PartialScope,
      file?: string,
      loc?: string | 0,
      vars?: Record<string, string>,
    ) => {
      const scope = writeScope(scopeId, partialScope);
      if (file && loc !== undefined) {
        setDebugInfo(scope, file, loc, vars);
      }
      return scope;
    }
  )(writeScope) as typeof writeScope;
}

export { writeScope as _scope };

// Marks the scope as flushing (without writing props itself) so that
// passive props (eg tag variables) ride along; the empty entry is elided
// from the wire when nothing else merges in.
export function _existing_scope(scopeId: number) {
  return writeScope(scopeId, {});
}

export function _scope_with_id(scopeId: number) {
  return scopeWithId($chunk.boundary.state, scopeId);
}

function scopeWithId(state: State, scopeId: number) {
  const { scopes } = state;
  let scope = scopes.get(scopeId);
  if (!scope) {
    scopes.set(scopeId, (scope = { [K_SCOPE_ID]: scopeId }));
  }
  return scope;
}

export function $global() {
  return $chunk.boundary.state.$global;
}

export function _await<T>(
  scopeId: number,
  accessor: Accessor,
  promise: Promise<T> | T,
  content: (value: T) => void,
  serializeMarker?: number,
) {
  const resumeMarker = serializeMarker !== 0;

  // Update renders have no HTML end-marker to carry the parent -> body branch
  // link, so it serializes as a scope prop (the same `BranchScopes:<accessor>`
  // key the live page stores its resolved branch under); the compiled merge
  // dispatches the body merge from it when the body's frame arrives. Every
  // await writes it: a fresh subtree's await is created detached (compute
  // skipped while a patch applies) and this link attaches it, even when the
  // body has nothing to fill. Fragment chunks fall through to the marker
  // paths below: their branch brackets ride the captured markup.
  const updateBranch = (render: () => void) => {
    const { state } = $chunk.boundary;
    if (state.update && !$chunk.fragment) {
      const branchId = _peek_scope_id();
      // The body may attach to a freshly created (detached) await branch
      // client-side; its seed data serializes even when fragment delivery
      // narrows the page-wide seed.
      state.freshBranchDepth++;
      withBranchId(branchId, render);
      state.freshBranchDepth--;
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + accessor]: writeScope(branchId, {}),
      });
      return true;
    }
  };

  if (!isPromise(promise)) {
    if (updateBranch(() => content(promise))) {
      // handled
    } else if (resumeMarker) {
      const branchId = _peek_scope_id();
      // Branch markers reset the node-marker run register (see `_el_resume`);
      // both brackets reset so a node marker on either side re-emits its id.
      $chunk.lastNodeMarkScope = -1;
      $chunk.writeHTML(
        $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
      );
      content(promise);
      $chunk.lastNodeMarkScope = -1;
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
  // A pending await on a fragment's main chain would hold the whole fragment
  // frame (its markup can't assemble until the await resolves) -- fragments
  // require async content behind a `<try>` placeholder boundary, where the
  // placeholder ships in the fragment and the body follows as its own
  // boundary-body entry. A real error in both modes: the router's fallback
  // ladder turns it into a full navigation.
  if (chunk.fragment && !chunk.fragmentAsync) {
    throw new Error(
      "async content inside a fragment frame requires a placeholder boundary",
    );
  }
  chunk.next = $chunk = chunk.fork(boundary, chunk.next);
  chunk.async = true;
  if (chunk.context?.[kPendingContexts]) {
    chunk.context = { ...chunk.context, [kPendingContexts]: 0 };
  }
  boundary.startAsync();
  promise.then(
    (value) => {
      if (chunk.async) {
        chunk.async = false;

        if (!boundary.signal.aborted) {
          chunk.render(() => {
            const site = chunk.boundarySite;
            if (site && site.k && !site.b.async) {
              // The body's HEAD segment just completed (an out-of-order later
              // segment leaves `site.b.async` set and skips -- its flush ships
              // no swap for this boundary): the flush this resolution triggers
              // carries the placeholder swap, so the "still pending" stash
              // flips falsy in the same drain (see `tryPlaceholder`/
              // `Chunk.boundarySite`).
              writeScope(site.s, { [site.k]: 0 });
              site.k = "";
            }
            if (updateBranch(() => withIsAsync(content, value))) {
              // handled -- the body flushes as its own frame in resolution
              // order; the serialized branch link lets the client attach it.
            } else if (resumeMarker) {
              const branchId = _peek_scope_id();
              // Branch markers reset the node-marker run register (see the
              // sync path above).
              $chunk.lastNodeMarkScope = -1;
              $chunk.writeHTML(
                $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
              );
              withIsAsync(content, value);
              $chunk.lastNodeMarkScope = -1;
              $chunk.writeHTML(
                $chunk.boundary.state.mark(
                  ResumeSymbol.BranchEnd,
                  scopeId + " " + accessor + " " + branchId,
                ),
              );
            } else {
              withIsAsync(content, value);
            }
          });
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
  input: {
    placeholder?: { content?(): void };
    catch?: { content?(err: unknown): void };
  },
  siteId?: string,
) {
  const branchId = _peek_scope_id();
  // Branch markers reset the node-marker run register (see `_el_resume`).
  $chunk.lastNodeMarkScope = -1;
  $chunk.writeHTML($chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""));

  const catchContent = input.catch
    ? (normalizeDynamicRenderer(input.catch) as ServerRenderer | undefined) || 0
    : undefined;
  const placeholderContent = normalizeDynamicRenderer(input.placeholder) as
    ServerRenderer | undefined;

  // A matched try whose site the client echoed as still showing its
  // placeholder (`x-marko-have`, the "!"-prefixed half -- see `_have` in
  // dom/update.ts): the client has no live branch to merge ordinary fills
  // into, so this update render delivers the body as markup -- a boundary-
  // body entry the applier swaps in where the placeholder sits, the same
  // two-frame channel fragment-delivered awaits use (see
  // designs/persisted-pages-roadmap.md, "Correctness").
  const { state } = $chunk.boundary;
  const possessed = state.possessed;
  const siteKey =
    siteId !== undefined
      ? [...(state.loopPath || []), encodePossessionSite(siteId)].join("/")
      : undefined;
  const echoed =
    possessed !== undefined && siteKey !== undefined
      ? possessed["!" + siteKey]
      : undefined;
  const pendingEcho = state.update && !$chunk.fragment && echoed === "1";
  if (pendingEcho) {
    const boundaryBody = () => tryBoundaryBody(content, branchId);
    if (catchContent !== undefined) {
      tryCatch(boundaryBody, catchContent || (() => {}));
    } else {
      boundaryBody();
    }
  } else if (catchContent !== undefined) {
    tryCatch(
      placeholderContent
        ? () =>
            tryPlaceholder(
              content,
              placeholderContent,
              branchId,
              scopeId,
              accessor,
              siteId,
            )
        : content,
      catchContent || (() => {}),
    );
  } else if (placeholderContent) {
    tryPlaceholder(
      content,
      placeholderContent,
      branchId,
      scopeId,
      accessor,
      siteId,
    );
  } else {
    content();
  }

  writeScope(branchId, {
    [AccessorProp.BranchAccessor]: accessor,
    [AccessorProp.CatchContent]: catchContent,
    [AccessorProp.PlaceholderContent]: placeholderContent,
  });

  // Update renders carry the parent -> body branch link as a scope prop (no
  // HTML end-marker); see `_await`. Fragment chunks skip it: the end mark
  // below is captured and the fragment walker binds the branch from it.
  if ($chunk.boundary.state.update && !$chunk.fragment) {
    writeScope(scopeId, {
      [AccessorPrefix.BranchScopes + accessor]: writeScope(branchId, {}),
    });
  }

  $chunk.lastNodeMarkScope = -1;
  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor + " " + branchId,
    ),
  );
}

// Captures a matched try's body as resumable markup instead of rendering it
// (suppressed in update mode) or dispatching fills into a live branch the
// client doesn't have. Reuses the fragment-capture gates (`Chunk.fragment`
// suppresses hole/structural fills, marks bake into the markup) on a
// dedicated fork, then rides the same reorder channel a fragment's pending
// boundary body uses (`state.reorder`/`Chunk.reorderId`, keyed by this try's
// branch id): resolved synchronously it flushes on this frame; still pending
// at flush, `flushScript`'s update reorder branch ships it on a later frame.
function tryBoundaryBody(content: () => void, branchId: number) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const root = chunk.fork(boundary, null);
  root.fragment = true;
  root.fragmentAsync = true;
  root.writeHTML = Chunk.prototype.writeHTML;
  root.render(content);
  const body = root.consume();
  if (body.async) {
    // v1: one pending await per pending-echoed boundary body -- a second
    // pending segment would need reorder-marker anchors in the entry's markup
    // for the applier to place it (the same limit `flushPlaceholder` enforces
    // for a fragment's pending boundary body). Unconditional -- skipping it in
    // production would silently ship an incomplete entry (see the flush-loop
    // guard in `flushScript`).
    for (let cur = body.next; cur; cur = cur.next) {
      if (cur.async) {
        boundary.abort(
          new Error(
            MARKO_DEBUG
              ? "multiple pending awaits inside one pending-echoed try are not supported yet"
              : "boundary diverged",
          ),
        );
      }
    }
  }
  body.reorderId = branchId + "";
  // Registered even while pending: the update branch of the reorder flush in
  // `flushScript` carries a still-async body to the flush its resolution
  // triggers (reordered chunks queue up front -- no completion-time
  // registration).
  boundary.state.reorder(body);
}

function tryPlaceholder(
  content: () => void,
  placeholder: () => void,
  branchId: number,
  scopeId: number,
  accessor: Accessor,
  siteId: string | undefined,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const body = chunk.fork(boundary, null);
  // Awaits under a placeholder boundary are fine inside a fragment: the
  // placeholder ships in the fragment frame and the body follows as its
  // own boundary-body entry (see `flushPlaceholder`).
  body.fragmentAsync = true;

  if (body === body.render(content)) {
    chunk.append(body);
    return;
  }

  chunk.next = $chunk = chunk.fork(boundary, chunk.next);
  chunk.placeholder = { body, render: placeholder, branchId };
  // Stash the boundary's build-stable site id (persisted document renders
  // only; `siteId` is undefined otherwise) now that its placeholder is
  // definitely shipping: the possession echo (`_have` in dom/update.ts) reads
  // its mere presence off the resumed parent scope as "this matched boundary
  // is still showing its placeholder" on a later navigation (see
  // designs/persisted-pages-roadmap.md, "Correctness"). Written here, not in
  // `flushPlaceholder`, so it lands in the SAME flush as the placeholder
  // markup: a scope write queued mid-`consume()` misses that cycle's
  // serializer drain and would surface only on a later flush this boundary
  // might never get.
  if (siteId !== undefined && !chunk.fragment && !boundary.state.update) {
    writeScope(scopeId, {
      [BOUNDARY_SITE_PREFIX + accessor]: siteId,
    });
    // The stash means "placeholder still showing", so it must flip falsy the
    // moment the body's first content ships (the reorder swap dismisses the
    // placeholder client-side, progressive delivery included). The shared ref
    // rides the body's forks; the HEAD segment's completion (`_await`'s
    // resolution render checks `!b.async`) writes the tombstone in the same
    // serializer drain as the flush that carries the swap. A body that
    // resolves before the first flush merges the tombstone over the un-drained
    // stash (`writeScope`'s pending merge), so only `…: 0` serializes for fast
    // awaits. A body with no await of its own (asyncness only from a nested
    // boundary) never fires this -- its placeholder is discarded at flush and
    // `flushPlaceholder`'s inline branch tombstones instead (the pending inner
    // boundary guarantees the later flush that carries it).
    chunk.placeholder.site = body.boundarySite = {
      s: scopeId,
      k: BOUNDARY_SITE_PREFIX + accessor,
      b: body,
    };
  }
}

function tryCatch(content: () => void, catchContent: (err: unknown) => void) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  const catchBoundary = new Boundary(state, undefined, boundary);
  const body = chunk.fork(catchBoundary, null);
  const bodyEnd = body.render(content);

  if (catchBoundary.signal.aborted) {
    // Sync error
    catchContent(catchBoundary.signal.reason);
    return;
  }

  if (body === bodyEnd) {
    // Sync success
    chunk.append(body);
    return;
  }

  // The async catch machinery below is reorder-based (placeholder marks,
  // out-of-order swap scripts) -- no update/fragment story yet.
  if (chunk.fragment) {
    throw new Error(
      "async content inside a fragment frame's <try> requires a placeholder (catch-only boundaries are not supported yet)",
    );
  }

  const reorderId = state.nextReorderId();
  const endMarker = state.mark(Mark.PlaceholderEnd, reorderId);
  const bodyNext = (bodyEnd.next = $chunk = body.fork(boundary, chunk.next));
  chunk.next = body;
  chunk.writeHTML(state.mark(Mark.Placeholder, reorderId));
  bodyEnd.writeHTML(endMarker);
  boundary.startAsync();
  catchBoundary.onNext = () => {
    if (boundary.signal.aborted) return;
    if (catchBoundary.signal.aborted) {
      if (!bodyEnd.consumed) {
        let cur: Chunk = body;
        let writeMarker = true;

        do {
          const next = cur.next!;

          if (cur.boundary !== catchBoundary) {
            cur.boundary.abort(catchBoundary.signal.reason);
          }

          if (writeMarker && !cur.consumed) {
            writeMarker = false;
            cur.async = false;
            cur.next = bodyNext;
            cur.needsWalk = true;
            cur.html = endMarker;
            cur.scripts = cur.effects = cur.lastEffect = "";
            cur.placeholder = cur.reorderId = cur.deferredReady = null;
          }

          cur = next;
        } while (cur !== bodyNext);
      }

      const catchChunk = chunk.fork(boundary, null);
      catchChunk.reorderId = reorderId;
      catchChunk.render(catchContent, catchBoundary.signal.reason);
      state.reorder(catchChunk);
      boundary.endAsync();
    } else if (!catchBoundary.count) {
      boundary.endAsync();
    } else {
      boundary.onNext();
    }
  };
}

export class State implements SerializeState {
  public tagId = 1;
  public scopeId = 1;
  public reorderId = 1;
  public readyGate = 1;
  public hasGlobals = false;
  public needsMainRuntime = false;
  public hasMainRuntime = false;
  public hasReadyRuntime = false;
  public hasReorderRuntime = false;
  public hasWrittenResume = false;
  public walkOnNextFlush = false;
  public trailerHTML = "";
  public resumes = "";
  public nonceAttr = "";
  public serializer = new Serializer();
  public writeReorders: Chunk[] | null = null;
  public scopes = new Map<number, ScopeInternals>();
  public flushScopes = false;
  public writeScopes: Record<number, PartialScope> = {};
  public readyIds: Set<string> | null = null;
  public serializeReason: SerializeReasonValue;
  public update = false;
  public seed = false;
  // Fragment frames (see designs/persisted-pages-architecture.md, "Fragment
  // frames"): update renders whose mode has `fragment` set render the first
  // content-hop branch as resumable HTML instead of a client-constructed
  // subtree. `fragments` enables the mode, `fragmentTaken` marks the FIRST
  // hop consumed, and `fragmentAnchor` holds that first entry's anchor
  // (`<scopeId>,"<accessor>"`) from capture start until `flushScript` emits
  // the markup. Capture is a chunk property (`Chunk.fragment`): while a
  // fragment chunk renders, markers and branch brackets emit as markup and
  // hole captures are skipped -- the values are baked in.
  //
  // The first capture rides the main chunk chain (markup collapses into the
  // flushed chunk's `html` via `consume`, emitted against `fragmentAnchor`).
  // Additional simultaneous same-route swaps (a keyed `<for>` with two rows
  // diverging in one nav) can't share that single blob/anchor, so each renders
  // onto its OWN detached chunk carrying its own `Chunk.fragmentAnchor`,
  // collected here and emitted one wire entry apiece at flush (mirroring the
  // boundary-body/reorder channel `writeReorders`). The applier keys fragments
  // by anchor, so N entries apply independently.
  public fragments = false;
  public fragmentTaken = false;
  public fragmentAnchor = "";
  public writeFragments: Chunk[] | null = null;
  // The possession echo (`x-marko-have`): what renderer the client currently
  // holds at each participating dynamic-hop site, so a same-route renderer
  // swap ships a fragment for exactly that hop instead of failing the apply.
  public possessed?: PersistedPatch["possessed"];
  // The nearest enclosing keyed-loop iteration's key while its body renders
  // (undefined outside a keyed loop) -- disambiguates the site ids of a
  // dynamic-tag hop repeated across loop iterations for the possession echo
  // (matches the client's per-iteration `LoopKey`). See `_dynamic_tag`.
  public loopKey: unknown;
  public loopPath?: string[];
  /** Ids of scopes serialized during fragment capture since the last
   * entry emission (see `writeScope`); keyed captures subtract ids reached
   * by node markers before the entry stamps dom-less scopes. */
  public fragmentScopeIds: Set<number> | null = null;
  // Node-marker scopes are already stamped by the fragment walker; keyed
  // captures only carry the remaining dom-less scope ids.
  public fragmentMarkerScopeIds = "";
  public fragmentKeyed = false;
  /** Depth of fills-path structural branch renders (update-mode loop
   * items, conditional branches, await bodies): content the client will
   * construct fresh from the patch, so seed-mode state and resume-only
   * wiring serialize for it even when fragment delivery narrows the
   * page-wide seed (see `_state_reason`). */
  public freshBranchDepth = 0;
  constructor(
    public $global: $Global & { renderId: string; runtimeId: string },
    // Persisted request facts, passed to `render()` (not smuggled through
    // `$global`); kept as the source of truth so a Boundary reset can rethread
    // them, with the hot-read flags below derived here. Absent = non-persisted.
    public persisted?: PersistedRender,
  ) {
    if ($global.cspNonce) {
      this.nonceAttr = " nonce" + attrAssignment($global.cspNonce);
    }
    if (persisted) {
      // Persisted renders are render-wide state, not a threaded reason: the
      // spine gates (`_serialize_guard`/`_persisted_reason`) read these cached
      // flags directly, so the network-as-parent needs no root reason seed
      // (threaded reasons stay pure stateful group masks). Patch renders
      // serialize request-derived values (the values ARE the payload) via the
      // source-classified `_update_reason`/`_state_reason` gates. The producer
      // The route identities are request facts; structural delivery is derived
      // here rather than exposed as another feature mode.
      const patch = persisted.patch;
      this.update = !!patch;
      this.seed = this.fragments =
        !!patch && patch.fromRoute !== patch.targetRoute;
      this.possessed = patch?.possessed;
      // Update responses carry no document: no walker bootstrap to emit.
      this.hasMainRuntime = !!patch;
    }
  }

  get runtimePrefix() {
    const { $global } = this;
    return $global.runtimeId + "." + $global.renderId;
  }

  get commentPrefix() {
    const { $global } = this;
    return $global.runtimeId + $global.renderId;
  }

  reorder(chunk: Chunk) {
    if (this.writeReorders) {
      this.writeReorders.push(chunk);
    } else {
      this.needsMainRuntime = true;
      this.writeReorders = [chunk];
    }
  }

  writeReady(id: string, resumes: string) {
    if (this.update) {
      // Update responses: a lazy module's resume batch rides its owning frame
      // as a KEYED entry (`["<readyId>", ...fills]` -- a string in slot 0 is
      // unambiguous; fragment and boundary-body entries start with a number).
      // The applier parks it until the module declares ready, then fires its
      // registered load trigger -- the data-driven equivalent of the
      // document's blocking `.b` channel plus injected trigger script (see
      // dom/update.ts).
      return "[" + quote(id, 0) + "," + resumes + "]";
    }
    const readyKey = toObjectKey(id);
    if (this.readyIds?.has(id)) {
      return this.readyAccess(readyKey) + ".push(" + resumes + ")";
    }

    (this.readyIds ||= new Set()).add(id);
    if (this.hasReadyRuntime) {
      return this.readyAccess(readyKey) + "=[" + resumes + "]";
    }

    this.hasReadyRuntime = true;
    return (
      this.runtimePrefix +
      RuntimeKey.Ready +
      "={" +
      readyKey +
      ":[" +
      resumes +
      "]}"
    );
  }

  readyAccess(readyKey: string) {
    return this.runtimePrefix + RuntimeKey.Ready + toAccess(readyKey);
  }

  nextReorderId() {
    const c =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
    let n = this.reorderId++;
    let r = c[n % 54]; // Avoids chars that cannot start a property name.
    for (n = (n / 54) | 0; n; n >>>= 6) {
      r += c[n & 63];
    }

    return r;
  }

  mark(code: ResumeSymbol | Mark, str: string) {
    return "<!--" + this.commentPrefix + code + str + "-->";
  }
}

export enum FlushStatus {
  complete,
  continue,
  aborted,
}

export class Boundary extends AbortController {
  public onNext = NOOP;
  public count = 0;
  constructor(
    public state: State,
    signal?: AbortSignal,
    public parent?: Boundary,
  ) {
    super();
    this.signal.addEventListener("abort", () => {
      this.count = 0;
      // Reset render progress for the retry but preserve the render mode.
      this.state = new State(this.state.$global, this.state.persisted);
      this.onNext();
    });

    if (signal) {
      if (signal.aborted) {
        this.abort(signal.reason);
      } else {
        signal.addEventListener("abort", () => {
          this.abort(signal.reason);
        });
      }
    }
  }

  flush() {
    if (!this.signal.aborted) {
      flushSerializer(this, this.state);
    }

    return this.count
      ? FlushStatus.continue
      : this.signal.aborted
        ? FlushStatus.aborted
        : FlushStatus.complete;
  }

  startAsync() {
    if (!this.signal.aborted) {
      this.count++;
    }
  }

  endAsync() {
    if (!this.signal.aborted && this.count) {
      this.count--;
      this.onNext();
    }
  }
}

export class Chunk {
  public html = "";
  public scripts = "";
  public effects = "";
  public lastEffect = "";
  /** Node-marker run register (see `_el_resume`); -1 = no marker yet. */
  public lastNodeMarkScope = -1;
  public async = false;
  public consumed = false;
  public needsWalk = false;
  /** Fragment capture (see `_fragment`): this chunk's html is fragment
   * markup. Inherited by forks so async continuations keep capturing. */
  public fragment = false;
  /** Anchor (`<scopeId>,"<accessor>"`) for a detached additional-fragment
   * capture that rides its own wire entry (see `State.writeFragments`);
   * empty on main-chain chunks, whose capture uses `State.fragmentAnchor`. */
  public fragmentAnchor = "";
  /** Awaits are allowed on this (fragment) chunk: it renders under a
   * `<try>` placeholder boundary, so its markup flushes as a
   * boundary-body entry instead of holding the fragment frame. */
  public fragmentAsync = false;
  /** Pending-boundary echo tombstone (see `tryPlaceholder`): the stash marking
   * a `<try>` placeholder "still showing" must flip falsy once the body's
   * first content ships (the reorder swap dismisses the placeholder). One
   * shared ref per boundary body, inherited by forks so whichever await
   * completes FIRST -- the completion that triggers the flush carrying the
   * swap -- writes `0` over the stash in the same drain (`_await`'s resolution
   * render), then clears the ref for its siblings. */
  public boundarySite: BoundarySite | null = null;
  public reorderId: string | null = null;
  public deferredReady: Opt<Chunk> = null;
  public placeholder: {
    body: Chunk;
    render: () => void;
    branchId: number;
    site?: BoundarySite;
  } | null = null;
  constructor(
    public boundary: Boundary,
    public next: Chunk | null,
    public context: Record<string | symbol, unknown> | null,
    public serializeState: SerializeState,
  ) {
    // Update responses are patch payloads: static HTML (content, markers,
    // reorder templates) is suppressed at the write; only resume scripts
    // flush. Expressions still evaluate, so scope ids, hole captures, and
    // structural writes are unaffected. (Fragment capture selectively restores
    // the write -- see `fork`/`_fragment`.)
    if (boundary.state.update) this.writeHTML = noopWriteHTML;
  }

  fork(boundary: Boundary, next: Chunk | null) {
    const chunk = new Chunk(boundary, next, this.context, this.serializeState);
    chunk.boundarySite = this.boundarySite;
    if (this.fragment) {
      chunk.fragment = true;
      chunk.fragmentAsync = this.fragmentAsync;
      chunk.writeHTML = Chunk.prototype.writeHTML;
    }
    return chunk;
  }

  writeHTML(html: string) {
    this.html += html;
  }

  writeEffect(scopeId: number, registryId: string) {
    if (this.lastEffect === registryId) {
      this.effects += " " + scopeId;
    } else {
      this.lastEffect = registryId;
      this.effects = concatEffects(this.effects, registryId + " " + scopeId);
    }
  }

  writeScript(script: string) {
    this.scripts = concatScripts(this.scripts, script);
  }

  append(chunk: Chunk) {
    this.html += chunk.html;
    this.effects = concatEffects(this.effects, chunk.effects);
    this.scripts = concatScripts(this.scripts, chunk.scripts);
    this.lastEffect = chunk.lastEffect || this.lastEffect;
    this.deferredReady = concat(this.deferredReady, chunk.takeDeferredReady());
  }

  takeDeferredReady() {
    const { deferredReady } = this;
    this.deferredReady = null;
    return deferredReady;
  }

  deferOwnReady() {
    if (
      this.serializeState.readyId &&
      (this.effects || this.scripts || this.serializeState.flushScopes)
    ) {
      // The chunk's own pending resume data is carried at the head of its
      // deferred list so it is flushed before any lazy content nested
      // within it (which may reference its data).
      const deferred = this.fork(this.boundary, null);
      deferred.effects = this.effects;
      deferred.scripts = this.scripts;
      this.effects = this.scripts = this.lastEffect = "";
      this.deferredReady = concat<Chunk>(deferred, this.deferredReady);
    }
  }
  flushPlaceholder() {
    const { placeholder } = this;
    if (placeholder) {
      const body = placeholder.body.consume();

      if (body.async && !this.boundary.state.update) {
        const { state } = this.boundary;
        const reorderId = (body.reorderId = placeholder.branchId
          ? placeholder.branchId + ""
          : state.nextReorderId());
        this.writeHTML(state.mark(Mark.Placeholder, reorderId));
        const after = this.render(placeholder.render);
        if (after !== this) {
          // TODO: eventually this should be allowed.
          // Once it's allowed we'll need check if placeholder needs to be disposed once body complete.
          this.boundary.abort(
            new Error("An @placeholder cannot contain async content."),
          );
        }
        after.writeHTML(state.mark(Mark.PlaceholderEnd, reorderId));
        state.reorder(body);
      } else if (body.async && this.fragment) {
        // Fragment frame + pending boundary body: the placeholder ships in the
        // fragment's markup, bracketed as the try branch's placeholder branch
        // (the "!" accessor token -- the fragment walker binds it to
        // `PlaceholderBranch` so the applier can swap it out), and the body
        // stays detached but queues on the reorder channel right away (its
        // reorder id IS the try branch id); `flushScript`'s update reorder
        // branch carries it while pending and emits it as a boundary-body
        // entry once it settles.
        const { state } = this.boundary;
        // v1: one pending await per boundary body -- a second pending
        // segment would need reorder-marker anchors in the entry's markup
        // for the applier to place it.
        for (let cur = body.next; cur; cur = cur.next) {
          if (cur.async) {
            this.boundary.abort(
              new Error(
                "multiple pending awaits inside one fragment placeholder boundary are not supported yet",
              ),
            );
          }
        }
        const placeholderBranchId = state.scopeId++;
        // Branch markers reset the node-marker run register (see `_el_resume`);
        // this is a chunk method, so the register is on `this`.
        this.lastNodeMarkScope = -1;
        this.writeHTML(state.mark(ResumeSymbol.BranchStart, ""));
        const after = this.render(placeholder.render);
        if (after !== this) {
          this.boundary.abort(
            new Error("An @placeholder cannot contain async content."),
          );
        }
        this.lastNodeMarkScope = -1;
        this.writeHTML(
          state.mark(
            ResumeSymbol.BranchEnd,
            placeholder.branchId + " ! " + placeholderBranchId,
          ),
        );
        body.reorderId = placeholder.branchId + "";
        // Registered eagerly: reordered chunks queue up front and
        // `flushScript` carries the still-pending ones until they settle.
        state.reorder(body);
      } else {
        // Placeholder never ships -- the body chain is inline-able (its own
        // awaits already resolved). If the eager stash is still live, the
        // body's asyncness came only from a NESTED boundary (the head-
        // completion tombstone never fired): tombstone here. This post-drain
        // write is safe because this shape guarantees a later flush -- the
        // pending inner boundary's own resolution carries it.
        const { site } = placeholder;
        if (site && site.k) {
          // (`writeScope` reads `$chunk`; `render` establishes it, exactly
          // as the shipping branch does for the placeholder's own render.)
          this.render(() => {
            writeScope(site.s, { [site.k]: 0 });
          });
          site.k = "";
        }
        body.next = this.next;
        this.next = body;
      }

      this.placeholder = null;
    }
  }

  consume() {
    let cur: Chunk = this;
    let html = "";
    let effects = "";
    let scripts = "";
    let lastEffect = "";
    let needsWalk = false;
    let deferredReady: Opt<Chunk>;

    while (cur.next && !cur.async) {
      cur.flushPlaceholder();
      needsWalk ||= cur.needsWalk;
      html += cur.html;
      if (cur.serializeState.readyId) {
        deferredReady = push(deferredReady, cur);
      } else {
        effects = concatEffects(effects, cur.effects);
        scripts = concatScripts(scripts, cur.scripts);
        lastEffect = cur.lastEffect || lastEffect;
      }
      deferredReady = concat(deferredReady, cur.takeDeferredReady());
      cur.consumed = true;
      cur = cur.next;
    }

    cur.deferOwnReady();
    cur.deferredReady = concat(deferredReady, cur.deferredReady);
    cur.needsWalk ||= needsWalk;
    cur.html = html + cur.html;
    cur.effects = concatEffects(effects, cur.effects);
    cur.scripts = concatScripts(scripts, cur.scripts);
    cur.lastEffect ||= lastEffect;
    return cur;
  }

  render(content: () => void): Chunk;
  render<T>(content: (val: T) => void, val: T): Chunk;
  render<T>(content: (val?: T) => void, val?: T): Chunk {
    const prev = $chunk;
    $chunk = this;
    try {
      content(val);
      return $chunk;
    } catch (err) {
      this.boundary.abort(err);
      return this;
    } finally {
      $chunk = prev;
    }
  }

  flushReadyScripts(reservations?: string[]) {
    const { boundary, serializeState } = this;
    const { readyId } = serializeState;
    // In an update render every ready-channel piece is a keyed entry
    // (`writeReady`'s update branch); entries join as a `,`-sequence and
    // `flushScript` folds them into the flush's frame (`state.resumes`) so a
    // lazy child's batch rides the SAME frame as the fragment or boundary-body
    // entry carrying its markup.
    const concat = boundary.state.update ? concatSequence : concatScripts;
    let scripts = "";
    forEach(this.takeDeferredReady(), (chunk) => {
      scripts = concat(scripts, chunk.flushReadyScripts(reservations));
    });

    if (readyId && !this.async) {
      const { state } = boundary;
      flushSerializer(boundary, serializeState);
      const deps = state.serializer.takeChannelDeps();
      const { effects } = this;
      const { resumes } = serializeState;
      const chunkScripts = this.scripts;
      serializeState.resumes = "";
      this.effects = this.scripts = "";
      this.lastEffect = "";
      if (resumes || effects) {
        state.needsMainRuntime = true;
        const batch = concatSequence(
          depsMarker(deps),
          concatSequence(resumes, effects && `"${effects}"`),
        );
        if (reservations) {
          // A ready batch written from a reorder script only executes once
          // its reordered content arrives, which can be after later
          // main-stream scripts run — inverting the stream's entry order.
          // Instead, the main-stream script (always ordered) reserves the
          // batch's slot with a numeric gate sentinel (a number is never an
          // effects string, deps marker, or payload, so the browser halts
          // the stream there), and the reorder script swaps the gate for
          // the batch when the content arrives.
          const gate = state.readyGate++;
          reservations.push(state.writeReady(readyId, gate + ""));
          scripts = concatScripts(
            scripts,
            "(b=>b.splice(b.indexOf(" +
              gate +
              "),1," +
              batch +
              "))(" +
              state.readyAccess(toObjectKey(readyId)) +
              ")",
          );
        } else {
          scripts = concat(scripts, state.writeReady(readyId, batch));
        }
      }
      scripts = concat(scripts, chunkScripts);
    }

    return scripts;
  }

  flushScript() {
    const { boundary } = this;
    const { state } = boundary;
    const { $global, runtimePrefix } = state;
    let needsWalk = state.walkOnNextFlush;
    if (needsWalk) state.walkOnNextFlush = false;

    // In an update render every script piece a flush produces is a bare frame,
    // one per line on the wire (see `concatFrames`) -- except ready pieces,
    // keyed entries folded into this flush's own frame (see
    // `flushReadyScripts`).
    const concat = state.update ? concatFrames : concatScripts;
    const concatReady = state.update ? concatSequence : concatScripts;
    let readyResumeScripts = this.flushReadyScripts();
    for (let channel; (channel = state.serializer.pendingReadyChannel());) {
      const resumes = state.serializer.stringifyScopes([], boundary, channel);
      const deps = state.serializer.takeChannelDeps();
      state.needsMainRuntime = true;
      readyResumeScripts = concatReady(
        readyResumeScripts,
        state.writeReady(
          channel.readyId!,
          concatSequence(depsMarker(deps), resumes),
        ),
      );
    }

    if (readyResumeScripts) {
      needsWalk = true;
    }

    // While the stream is blocked on in-order async content, the resume
    // markers for everything already rendered after that content have not
    // been written -- running effects now could cascade state updates into
    // scopes whose nodes aren't in the document yet. Hold effects on the
    // blocked chunk so they flush once its async content completes. Update
    // responses skip the hold: frames apply atomically and the applier runs
    // an effect only for scopes the same frame created, so effects must ride
    // that frame.
    const holdEffects = this.async && !state.update;
    const effects = holdEffects ? "" : this.effects;
    let { html, scripts } = this;

    if (state.update && html) {
      // The only html an update render accumulates is fragment capture
      // (every other write is suppressed at construction); `consume`
      // assembled it across the capture's forks. Divert it onto the frame
      // as the pending fragment entry.
      if (MARKO_DEBUG && !state.fragmentAnchor) {
        throw new Error(
          "an update render accumulated html outside a fragment capture",
        );
      }
      state.resumes = concatSequence(
        state.resumes,
        writeFragmentEntry(
          state,
          state.fragmentAnchor,
          html,
          takeFragmentScopeIds(state),
        ),
      );
      state.fragmentAnchor = "";
      html = "";
    }

    if (state.needsMainRuntime && !state.hasMainRuntime) {
      state.hasMainRuntime = true;
      scripts = concatScripts(
        scripts,
        (state.persisted
          ? PERSISTED_WALKER_RUNTIME_CODE
          : WALKER_RUNTIME_CODE) +
          '("' +
          $global.runtimeId +
          '")("' +
          $global.renderId +
          '")',
      );
    }

    // Update mode holds ready entries until every entry type has landed in
    // `state.resumes` (below), so they ride this flush's frame.
    if (!state.update) {
      scripts = concatScripts(scripts, readyResumeScripts);
      readyResumeScripts = "";
    }

    if (effects) {
      needsWalk = true;
      state.resumes = state.resumes
        ? state.resumes + ',"' + effects + '"'
        : '"' + effects + '"';
    }

    // Boundary bodies inside a fragment frame ride the reorder channel (see
    // `flushPlaceholder`): a completed body chain's markup becomes a
    // boundary-body entry `[tryBranchId, 0, prefix, html]` on this frame, its
    // effects appended so they run against the scopes the entry creates.
    if (state.update && state.writeReorders) {
      let carried: Chunk[] | null = null;
      for (const bodyChunk of state.writeReorders) {
        if (bodyChunk.async) {
          // Still-pending boundary body (bodies queue eagerly): not this
          // frame's payload. An aborted boundary strands it (drop -- the
          // update's error handling owns that); otherwise carry it to the
          // flush its resolution triggers.
          let aborted: Boundary | undefined = bodyChunk.boundary;
          while (aborted && !aborted.signal.aborted) {
            aborted = aborted.parent;
          }
          if (!aborted) {
            (carried ||= []).push(bodyChunk);
          }
          continue;
        }
        const branchId = bodyChunk.reorderId!;
        let bodyHTML = "";
        let bodyEffects = "";
        let cur: Chunk | null = bodyChunk;
        bodyChunk.reorderId = null;
        while (cur) {
          cur.flushPlaceholder();
          if (MARKO_DEBUG && cur.async) {
            // Guarded up front in `flushPlaceholder`; a pending segment
            // here means that guard has a hole.
            throw new Error(
              "a fragment boundary body flushed with a pending async segment",
            );
          }
          cur.consumed = true;
          bodyHTML += cur.html;
          bodyEffects = concatEffects(bodyEffects, cur.effects);
          // A lazy child in the body parked its resume batch on this
          // chunk's deferred-ready list; its keyed entry rides this frame.
          readyResumeScripts = concatReady(
            readyResumeScripts,
            cur.flushReadyScripts(),
          );
          cur.html = cur.effects = cur.lastEffect = "";
          cur = cur.next;
        }
        state.resumes = concatSequence(
          state.resumes,
          writeFragmentEntry(
            state,
            branchId + ",0",
            bodyHTML,
            takeFragmentScopeIds(state),
          ),
        );
        if (bodyEffects) {
          state.resumes = state.resumes + ',"' + bodyEffects + '"';
        }
      }
      state.writeReorders = carried;
    }

    // Additional simultaneous same-route swaps captured on detached chunks
    // (see `_fragment`): each rides its OWN wire entry keyed by its anchor,
    // like a first-capture entry -- the applier stashes every fragment by
    // anchor and applies them independently. Scope-id attribution is
    // idempotent (`stamp`), so the first-flushed entry may carry the union via
    // `takeFragmentScopeIds`; here it is empty.
    if (state.update && state.writeFragments) {
      for (const capture of state.writeFragments) {
        let fragHTML = "";
        let fragEffects = "";
        let cur: Chunk | null = capture;
        while (cur) {
          cur.flushPlaceholder();
          if (cur.async) {
            // Guarded at capture (see `_fragment`); async detached fragments
            // are not supported yet. Unconditional -- a hole here would
            // silently ship an incomplete fragment in production.
            throw new Error(
              MARKO_DEBUG
                ? "an additional fragment flushed with pending async content"
                : "fragment diverged",
            );
          }
          cur.consumed = true;
          fragHTML += cur.html;
          fragEffects = concatEffects(fragEffects, cur.effects);
          // Lazy-child resume batches captured on this detached chain ride
          // this frame as keyed entries, like the main capture's.
          readyResumeScripts = concatReady(
            readyResumeScripts,
            cur.flushReadyScripts(),
          );
          cur.html = cur.effects = cur.lastEffect = "";
          cur = cur.next;
        }
        state.resumes = concatSequence(
          state.resumes,
          writeFragmentEntry(
            state,
            capture.fragmentAnchor,
            fragHTML,
            takeFragmentScopeIds(state),
          ),
        );
        if (fragEffects) {
          state.resumes = state.resumes + ',"' + fragEffects + '"';
        }
      }
      state.writeFragments = null;
    }

    // Keyed lazy-module batches join the frame after the fragment and
    // boundary-body entries whose markup carries their subtrees -- the applier
    // parks them regardless of position, but same-frame delivery guarantees
    // the end-of-apply flush sees the walker-bound scopes.
    if (state.update && readyResumeScripts) {
      state.resumes = concatSequence(state.resumes, readyResumeScripts);
    }

    if (state.resumes) {
      if (state.update) {
        // Update responses are a newline-delimited stream of serializer
        // frames: each flush emits its resumes as a bare JS array (the same
        // fills a document render assigns to `<runtimeId>.<renderId>.r`),
        // one per line (the serializer escapes newlines in values). No
        // runtime prefix -- the client applier evaluates frames directly.
        scripts = concat(scripts, "[" + state.resumes + "]");
      } else if (state.hasWrittenResume) {
        scripts = concatScripts(
          scripts,
          runtimePrefix + RuntimeKey.Resume + ".push(" + state.resumes + ")",
        );
      } else {
        state.hasWrittenResume = true;
        scripts = concatScripts(
          scripts,
          runtimePrefix + RuntimeKey.Resume + "=[" + state.resumes + "]",
        );
      }
    }

    if (!state.update && state.writeReorders) {
      let carried: Chunk[] | null = null;

      for (const reorderedChunk of state.writeReorders) {
        // A chunk requeued when its reorder marker streamed delivers once
        // settled, or as an empty reorder once an aborted boundary strands it.
        if (reorderedChunk.async && reorderedChunk.consumed) {
          let aborted: Boundary | undefined = reorderedChunk.boundary;
          while (aborted && !aborted.signal.aborted) {
            aborted = aborted.parent;
          }

          if (!aborted) {
            (carried ||= []).push(reorderedChunk);
            continue;
          }

          reorderedChunk.async = false;
        }

        needsWalk = true;

        if (!state.hasReorderRuntime) {
          state.hasReorderRuntime = true;
          scripts = concatScripts(
            scripts,
            (state.persisted
              ? PERSISTED_REORDER_RUNTIME_CODE
              : REORDER_RUNTIME_CODE) +
              "(" +
              runtimePrefix +
              ")",
          );
        }

        const { reorderId } = reorderedChunk;
        const readyReservations: string[] = [];
        let reorderHTML = "";
        let reorderEffects = "";
        let reorderScripts = "";
        let cur = reorderedChunk;
        reorderedChunk.reorderId = null;

        for (;;) {
          cur.flushPlaceholder();
          cur.deferOwnReady();
          const { next } = cur;
          // These scripts execute when the reordered content arrives, which
          // may be after later main-stream scripts; ready batches written
          // here reserve their stream slot in the ordered main-stream
          // script (below) and only fill it in place.
          const readyResumeScripts = cur.flushReadyScripts(readyReservations);
          cur.consumed = true;
          reorderHTML += cur.html;
          reorderEffects = concatEffects(reorderEffects, cur.effects);
          reorderScripts = concatScripts(
            reorderScripts,
            concatScripts(readyResumeScripts, cur.scripts),
          );

          if (cur.async) {
            reorderHTML += state.mark(
              Mark.ReorderMarker,
              (cur.reorderId = state.nextReorderId()),
            );
            state.reorder(cur);
            cur.html = cur.effects = cur.scripts = cur.lastEffect = "";
            cur.next = null;
          }

          if (next) {
            cur = next;
          } else {
            break;
          }
        }

        if (reorderEffects) {
          if (!state.hasWrittenResume) {
            state.hasWrittenResume = true;
            scripts = concatScripts(
              scripts,
              runtimePrefix + RuntimeKey.Resume + "=[]",
            );
          }

          reorderScripts = concatScripts(
            reorderScripts,
            '_.push("' + reorderEffects + '")',
          );
        }

        for (const reservation of readyReservations) {
          scripts = concatScripts(scripts, reservation);
        }

        scripts = concatScripts(
          scripts,
          reorderScripts &&
            runtimePrefix +
              RuntimeKey.Scripts +
              toAccess(reorderId!) +
              "=_=>{" +
              reorderScripts +
              "}",
        );

        html +=
          "<t hidden " +
          state.commentPrefix +
          "=" +
          reorderId +
          ">" +
          reorderHTML +
          "</t>";
      }

      state.writeReorders = carried;
    }

    if (needsWalk && !state.update) {
      scripts = concatScripts(scripts, runtimePrefix + RuntimeKey.Walk + "()");
    }

    this.html = html;
    this.scripts = scripts;
    if (!holdEffects) this.effects = this.lastEffect = "";
    state.resumes = "";
    return this;
  }

  flushHTML() {
    const { boundary } = this;
    const { state } = boundary;
    if (this.needsWalk) {
      this.needsWalk = false;
      state.walkOnNextFlush = true;
    }

    this.flushScript();
    const { scripts } = this;

    if (state.update) {
      // Update responses: raw frames, one per line -- no script wrapper,
      // no asset flush, no trailer.
      this.html = this.scripts = "";
      return scripts ? scripts + "\n" : "";
    }

    const { $global, nonceAttr } = state;
    const { __flush__ } = $global;
    let { html } = this;
    this.html = this.scripts = "";

    if (scripts) {
      html += "<script" + nonceAttr + ">" + scripts + "</script>";
    }

    if (__flush__) {
      $global.__flush__ = undefined;
      html = __flush__($global, html);
    }

    if (!boundary.count) {
      html += state.trailerHTML;
    }

    return html;
  }
}

function noopWriteHTML() {}

// The scope ids serialized since the last fragment/boundary-body entry
// emission, encoded as the entry's trailing element (empty when only
// marker-reachable scopes serialized -- the walker stamps those anyway).
function takeFragmentScopeIds(state: State) {
  const ids = state.fragmentScopeIds;
  if (!ids) {
    state.fragmentMarkerScopeIds = "";
    state.fragmentKeyed = false;
    return "";
  }
  state.fragmentScopeIds = null;
  const markerIds = state.fragmentMarkerScopeIds;
  state.fragmentMarkerScopeIds = "";
  const unmarked = state.fragmentKeyed
    ? [...ids].filter((id) => !markerIds.includes("," + id + ","))
    : [...ids];
  state.fragmentKeyed = false;
  return unmarked.length ? ",[" + unmarked.join(",") + "]" : "";
}

function writeFragmentEntry(
  state: State,
  anchor: string,
  html: string,
  scopeIds: string,
) {
  return (
    "[" +
    anchor +
    "," +
    JSON.stringify(state.commentPrefix) +
    "," +
    JSON.stringify(html) +
    scopeIds +
    "]"
  );
}

function flushSerializer(boundary: Boundary, serializeState: SerializeState) {
  const { state } = boundary;
  const { serializer } = state;
  const pending = serializer.pending(serializeState);
  if (serializeState.flushScopes || pending) {
    const { writeScopes, passiveScopes } = serializeState;
    const isBlockingState = serializeState !== state;
    const flushes: ScopeFlush[] = [];

    if (passiveScopes) {
      // Passive props ride along with scopes this state is flushing anyway.
      for (const key in passiveScopes) {
        const props = writeScopes[key as unknown as number];
        if (props) {
          writeScopes[key as unknown as number] = Object.assign(
            passiveScopes[key as unknown as number],
            props,
          );
          delete passiveScopes[key as unknown as number];
        }
      }
    }

    if (!isBlockingState && !state.hasGlobals) {
      state.hasGlobals = true;
      const globals = getFilteredGlobals(state.$global);
      // Globals become scope 0 so we can reference them as `_(0)`.
      if (globals) flushes.push([0, globals, globals]);
    }

    for (const key in writeScopes) {
      const scopeId = +key;
      const props = writeScopes[scopeId];
      // Only props written by this state are transmitted; scopes that were
      // merely referenced are resolved by id wherever they are used.
      if (Object.getOwnPropertyNames(props).length) {
        flushes.push([scopeId, state.scopes.get(scopeId)!, props]);
      }
    }

    if (flushes.length || pending) {
      if (isBlockingState && !state.hasGlobals) {
        // Globals must be stringified before any ready data so that ready
        // data may reference them, never the reverse — ready data is only
        // deserialized in the browser once its module loads.
        flushSerializerGlobals(boundary);
      }
      serializeState.resumes = concatSequence(
        serializeState.resumes,
        serializer.stringifyScopes(flushes, boundary, serializeState),
      );
    }
    serializeState.writeScopes = {};
    serializeState.flushScopes = false;
    if (pending) {
      state.walkOnNextFlush = true;
    }
  }
}

function flushSerializerGlobals(boundary: Boundary) {
  const { state } = boundary;
  const globals = getFilteredGlobals(state.$global);
  if (globals) {
    state.hasGlobals = true;
    state.needsMainRuntime = true;
    state.resumes = concatSequence(
      state.resumes,
      state.serializer.stringifyScopes([[0, globals, globals]], boundary),
    );
  }
}

function depsMarker(deps: Set<string> | null) {
  let marker = "";
  if (deps) {
    for (const dep of deps) {
      marker += (marker ? "," : "[") + quote(dep, 0);
    }
    marker += "]";
  }
  return marker;
}

export function _trailers(html: string) {
  const { state } = $chunk.boundary;
  if (!state.update) state.trailerHTML += html;
}

function concatEffects(a: string, b: string) {
  return a ? (b ? a + " " + b : a) : b;
}

function concatSequence(a: string, b: string) {
  return a ? (b ? a + "," + b : a) : b;
}

function concatScripts(a: string, b: string) {
  return a ? (b ? a + ";" + b : a) : b;
}

// Update responses are newline-delimited bare `[...]` frames: the router
// parses one frame per line, so pieces join with a newline instead of `;`.
function concatFrames(a: string, b: string) {
  return a ? (b ? a + "\n" + b : a) : b;
}

type QueueCallback = (ticked: true) => void;
const tick =
  globalThis.setImmediate ||
  globalThis.setTimeout ||
  globalThis.queueMicrotask ||
  ((cb: () => void) => Promise.resolve().then(cb));
let tickQueue: Set<QueueCallback> | undefined;

export function queueTick(cb: QueueCallback) {
  if (tickQueue) {
    tickQueue.add(cb);
  } else {
    tickQueue = new Set([cb]);
    tick(flushTickQueue);
  }
}

export function offTick(cb: QueueCallback) {
  tickQueue?.delete(cb);
}

function flushTickQueue() {
  const queue = tickQueue!;
  tickQueue = undefined;

  for (const cb of queue) {
    cb(true);
  }
}
function getFilteredGlobals($global: Record<string, unknown>) {
  if (!$global) return 0;

  const serializedGlobals = $global.serializedGlobals as
    string[] | Record<string, boolean> | undefined;

  if (!serializedGlobals) return 0;

  let filtered: 0 | Record<string, unknown> = 0;

  if (Array.isArray(serializedGlobals)) {
    for (const key of serializedGlobals) {
      const value = $global[key];
      if (value !== undefined) {
        if (filtered) {
          filtered[key] = value;
        } else {
          filtered = { [key]: value };
        }
      }
    }
  } else {
    for (const key in serializedGlobals) {
      if (serializedGlobals[key]) {
        const value = $global[key];
        if (value !== undefined) {
          if (filtered) {
            filtered[key] = value;
          } else {
            filtered = { [key]: value };
          }
        }
      }
    }
  }

  return filtered;
}

export function _subscribe(
  subscribers: Set<ScopeInternals> | undefined,
  scope: ScopeInternals,
) {
  if (subscribers) {
    const { serializer } = $chunk.boundary.state;
    if (!$chunk.serializeState.readyId && !serializer.written(subscribers)) {
      // The subscriber rides the set's literal when it has not been
      // serialized yet (both deserialize in the same main payload, before
      // any effects run).
      subscribers.add(scope);
    } else {
      // Already flushed sets — and subscribers from lazy streams, which
      // must not be notified before their module loads and hydrates the
      // scope — are added through a channel gated call instead.
      serializer.writeCall(scope, subscribers, "add", $chunk.serializeState);
    }
  }
  return scope;
}
