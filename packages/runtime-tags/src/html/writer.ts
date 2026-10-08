import {
  _el_read_error,
  _hoist_read_error,
  assertValidLoopKey,
} from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import {
  hasKeys,
  isPromise,
  normalizeDynamicRenderer,
} from "../common/helpers";
import { PLACEHOLDER_DISMISS_REGISTER_ID, ROOT_SCOPE_ID } from "../common/meta";
/* eslint-disable @typescript-eslint/no-this-alias */
import { concat, type Opt, push, reduce } from "../common/opt";
import {
  type $Global,
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type Falsy,
  PatchKey,
  ResumeSymbol,
} from "../common/types";
import { RendererProp } from "../common/types";
import { attrAssignment } from "./attrs";
import * as FlushStatus from "./constants/flush-status";
import * as Mark from "./constants/mark";
import * as RuntimeKey from "./constants/runtime-key";
import { _escape, _unescaped } from "./content";
import { forInBy, forOfBy, forStepBy } from "./for";
import {
  REORDER_RUNTIME_CODE,
  WALKER_RUNTIME_CODE,
} from "./inlined-runtimes.debug";
import {
  K_SCOPE_ID,
  type Locals,
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

export interface SerializeState {
  readyId?: string;
  parent?: SerializeState;
  resumes: string;
  writeScopes: Record<number, PartialScope>;
  passiveScopes?: Record<number, PartialScope>;
  flushScopes: boolean;
}

export type ScopeInternals = PartialScope & {
  [K_SCOPE_ID]?: number;
};

let $chunk: Chunk;

export function getChunk(): Chunk | undefined {
  return $chunk;
}

export function withChunk<T>(chunk: Chunk, cb: () => T): T {
  const prev = $chunk;
  $chunk = chunk;
  try {
    return cb();
  } finally {
    $chunk = prev;
  }
}

export function getContext(key: keyof NonNullable<Chunk["context"]>) {
  return $chunk.context?.[key];
}

export function getState(): State {
  return $chunk.boundary.state;
}

// Mirrors `dom/control-flow.ts` › `rendererKey`: two instances of one content
// section share its id, so an owner-bound renderer is keyed by its owner too.
export function rendererKey(renderer: unknown) {
  return (renderer as ServerRenderer | undefined)?.[RendererProp.Owner] ===
    undefined
    ? (renderer as ServerRenderer | undefined)?.[RendererProp.Id] || renderer
    : (renderer as ServerRenderer)[RendererProp.Id] +
        " " +
        (renderer as ServerRenderer)[RendererProp.Owner];
}

// A patch render ran this content renderer, so the values inside it fill as
// it renders (`_content_withheld`).
export function markContentRendered(state: State, renderer: unknown) {
  const id = (renderer as ServerRenderer | undefined)?.[RendererProp.Id];
  if (id) state.withheldContents?.delete(id);
}

export function getScopeId(scope: unknown): number | undefined {
  return (scope as ScopeInternals)[K_SCOPE_ID];
}

export function getScopeById(scopeId: number | undefined) {
  if (scopeId !== undefined) {
    return $chunk.boundary.state.scopes.get(scopeId);
  }
}

export function $global() {
  return $chunk.boundary.state.$global;
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

// A chunk that renders later keeps the context values set at its position.
function captureContext(chunk: Chunk) {
  if (chunk.context?.[kPendingContexts]) {
    chunk.context = { ...chunk.context, [kPendingContexts]: 0 };
  }
}

const kBranchId = Symbol("Branch Id");
// Set while rendering structure patch renders skip (its branch expression
// derives from a client-owned group): the resumed page re-renders it, so no patch fills its reads.
const kUnpatched = Symbol("Unpatched");
export function inUnpatched() {
  return !!$chunk?.context?.[kUnpatched];
}
export function withUnpatched<T>(cb: () => T): T {
  return withContext(kUnpatched, 1, cb, undefined);
}

// The lazy modules a patch render is inside: a write there makes the flush
// wait for each of them.
const kReadyIds = Symbol("Ready Ids");
export function withPatchReadyId<T>(
  readyId: string,
  cb: (input: unknown) => T,
  input: unknown,
): T {
  return withContext(kReadyIds, [...getPatchReadyIds(), readyId], cb, input);
}

function getPatchReadyIds() {
  return ($chunk.context?.[kReadyIds] as string[] | undefined) || [];
}

const kIsAsync = Symbol("Is Async");

// Async content under `kIsAsync`: the owner `visit` an unmarked `<await>` writes
// after its content's `end` chunk once anything in it, or in `parent`'s, resumes.
interface AsyncContent {
  visit?: string;
  end?: Chunk;
  parent?: AsyncContent;
  resumed?: true;
}

export function isInResumedBranch() {
  return $chunk?.context?.[kBranchId] !== undefined;
}

// Set while a patch renders a body a `@catch` can replace: nothing under it
// is provably live on the client, so boundaries there ship their payload.
const kCaught = Symbol("Caught");
// The branch a patch renders whose expression nothing behind can change.
const kKeptBranch = Symbol("Kept Branch");

// Whether a flush may create the scopes rendering here: in a branch not kept
// (the client decides by divergence), or a body a `@catch` can replace.
export function inCreatable() {
  const context = $chunk?.context;
  return (
    (context?.[kBranchId] !== undefined &&
      context[kBranchId] !== context[kKeptBranch]) ||
    !!context?.[kCaught]
  );
}

// Renders a branch a flush pairs but never creates.
export function withKeptBranchId<T>(branchId: number, cb: () => T): T {
  return withContext(kKeptBranch, branchId, () => withBranchId(branchId, cb));
}

export function withBranchId<T>(branchId: number, cb: () => T): T;
export function withBranchId<T, U>(
  branchId: number,
  cb: (value: U) => T,
  cbValue: U,
): T;
export function withBranchId<T, U>(
  branchId: number,
  cb: (value?: U) => T,
  cbValue?: U,
): T {
  return withContext(kBranchId, branchId, cb, cbValue);
}

function withIsAsync<T, U>(
  async: AsyncContent,
  cb: (value: U) => T,
  value: U,
): T {
  return withContext(kIsAsync, async, cb, value);
}

export function _html(html: string) {
  $chunk.writeHTML(html);
}

export function writeScript(script: string) {
  $chunk.writeScript(script);
}

// The boundary whose `@catch` may drop what renders now before it streams.
export function catchableBoundary() {
  const { boundary } = $chunk;
  return boundary.withinCatch ? boundary : null;
}

// Whether something written under `written` may not reach the client while what
// renders now does: a boundary only it is in was caught, or still can be.
export function mayDrop(written: Boundary) {
  const { boundary } = $chunk;
  for (
    let cur: Boundary | undefined = written;
    cur && !isWithin(boundary, cur);
    cur = cur.parent
  ) {
    if (cur.aborted || cur.count) return true;
  }
  return false;
}

// Content that resumes apart from its enclosing branch's walk (lazy, async)
// links the scope, unless the section writes a marker the walker places it by.
export function _script(
  scopeId: number,
  registryId: string,
  markerGuard?: number,
) {
  if (
    markerGuard === 0 &&
    ($chunk.serializeState.readyId || $chunk.context?.[kIsAsync])
  ) {
    _resume_branch(scopeId);
  }
  $chunk.boundary.state.needsMainRuntime = true;
  $chunk.writeEffect(scopeId, registryId);
  // Paired scopes keep their effects and a branch's ride its shell; a scope
  // a creation below a branch (a child instance) mounts from setup.
  const { state } = $chunk.boundary;
  if (
    state.writesPatches &&
    inCreatable() &&
    $chunk.context?.[kBranchId] !== scopeId
  ) {
    addSetupId(scopeId, registryId, 1);
  }
}

// Setup ids share the shell grammar (`inits…!effects…`); each side
// dedupes so a closure several locals derive from arrives once.
export function addSetupId(scopeId: number, id: string, effect?: 1) {
  const { state } = $chunk.boundary;
  const setup = (scopePatch(state, scopeId)[PatchKey.Setup] ??= {}) as Record<
    string,
    string
  >;
  const [inits = "", effects = ""] = (setup[PatchKey.Init] || "").split("!");
  const side = effect ? effects : inits;
  if ((" " + side + " ").includes(" " + id + " ")) return;
  const added = side ? side + " " + id : id;
  const next = effect ? [inits, added] : [added, effects];
  setup[PatchKey.Init] = next[1] ? next[0] + "!" + next[1] : next[0];
}

export function _trailers(html: string) {
  $chunk.boundary.state.trailerHTML += html;
}

export function _resume<T extends WeakKey>(
  val: T,
  id: string,
  scopeId?: number,
  locals?: Locals,
): T {
  return serializerRegister(
    id,
    val,
    scopeId === undefined ? undefined : _scope_with_id(scopeId),
    locals,
  );
}

// Registers a function closing over render-only locals (attr tag control flow
// params), written into a dedicated scope with the section scope as its owner.
export function _resume_locals<T extends WeakKey>(
  val: T,
  id: string,
  locals: Record<string, unknown>,
  ownerScopeId?: number,
): T {
  if (ownerScopeId !== undefined) {
    locals[AccessorProp.Owner] = _scope_with_id(ownerScopeId);
  }
  return serializerRegister(id, val, writeScope(_scope_id(), locals));
}

export function _el(scopeId: number, id: string) {
  return _resume(() => _el_read_error(), id, scopeId);
}

export function _hoist(scopeId: number, id: string) {
  const getter = () => _hoist_read_error();
  getter[Symbol.iterator] = _hoist_read_error;
  return _resume(getter, id, scopeId);
}

export function _el_resume(
  scopeId: number,
  accessor: Accessor,
  shouldResume?: number,
) {
  if (shouldResume === 0) return "";

  const { state } = $chunk.boundary;
  state.needsMainRuntime = true;
  return state.mark(ResumeSymbol.Node, scopeId + " " + accessor);
}

export function _text_resume(
  scopeId: number,
  accessor: Accessor,
  val: unknown,
  shouldResume?: number,
) {
  return markText(scopeId, accessor, _escape(val), shouldResume);
}

export function _html_resume(
  scopeId: number,
  accessor: Accessor,
  val: unknown,
  shouldResume?: number,
) {
  const html = _unescaped(val);
  // Markup may parse to several nodes, so it is bracketed for resume to claim
  // the whole range; markup-free text is one node and uses the text encoding.
  if (shouldResume === 0 || !~html.indexOf("<")) {
    return markText(scopeId, accessor, html, shouldResume);
  }

  const { state } = $chunk.boundary;
  state.needsMainRuntime = true;
  return (
    state.mark(ResumeSymbol.HtmlStart, "") +
    html +
    state.mark(ResumeSymbol.HtmlEnd, scopeId + " " + accessor)
  );
}

// Empty text writes only an `EmptyText` marker for resume to create the node;
// `shouldResume` 2 also separates text from a mergeable preceding text node.
function markText(
  scopeId: number,
  accessor: Accessor,
  text: string,
  shouldResume?: number,
) {
  if (shouldResume === 0) return text;

  const { state } = $chunk.boundary;
  state.needsMainRuntime = true;
  return text
    ? (shouldResume === 2 ? "<!>" : "") +
        text +
        state.mark(ResumeSymbol.Node, scopeId + " " + accessor)
    : state.mark(ResumeSymbol.EmptyText, scopeId + " " + accessor);
}

// Structural patch entries hold their child patch objects, so the root
// patch IS the flush tree and one ordinary serializer flush emits it.
export function writePatch(scopeId: number, entries: Record<string, unknown>) {
  const patch = scopePatch($chunk.boundary.state, scopeId);
  for (const key in entries) {
    // `undefined` survives to the wire (`$`): it overwrites, never elides.
    patch[key] = entries[key];
  }
}

export function peekScopePatch(state: State, scopeId: number) {
  return state.patchTree?.[scopeId];
}

// A branch's patch opens detached before its render: the `Branch` entry
// embeds it, so no write inside links it to the parent first.
export function openScopePatch(state: State, scopeId: number) {
  return (patchTree(state)[scopeId] = {});
}

export function scopePatch(
  state: State,
  scopeId: number,
): Record<string, unknown> {
  for (const readyId of getPatchReadyIds()) patchWait(state, readyId);
  const patches = patchTree(state);
  let patch = patches[scopeId];
  if (!patch) {
    const link = state.patchLinks?.[scopeId];
    patch = patches[scopeId] = {};
    if (link) {
      // A scope writing after its parent's structural entry re-links through
      // it; a paired branch ignores the creation ids its child entry carries.
      const { parent, link: hop, content: contentId, slots: slotIds } = link;
      if (typeof hop === "string") {
        if (contentId) state.shipShell!(contentId);
        writePatch(parent, {
          [PatchKey.Child + hop]: contentId
            ? slotIds
              ? [patch, contentId, ...slotIds]
              : [patch, contentId]
            : patch,
        });
      } else {
        (
          (scopePatch(state, parent)[PatchKey.LoopItem + hop[0]] ??=
            []) as unknown[]
        ).push(hop[1], patch);
      }
    } else if (scopeId === ROOT_SCOPE_ID) {
      // Every other patch nests inside an ancestor's structural entry rooted
      // here (`writeScope` is patch-inert, so the root registers directly).
      writeScope(scopeId, patch);
      // A lazy module is named only by the frame that first needs it.
      state.patchFlushReadyIds = undefined;
      $chunk.serializeState.writeScopes[scopeId] = patch;
      $chunk.serializeState.flushScopes = true;
    }
  }
  return patch;
}

// The frame holding the current root names the lazy modules it is the first of
// the response to need (`PatchState.addResumes`); later frames wait behind it.
export function patchWait(state: State, readyId: string) {
  const readyIds = (state.readyIds ||= new Set());
  if (readyIds.has(readyId)) return;
  readyIds.add(readyId);
  // The root first (creating it starts the current root's ids afresh).
  scopePatch(state, ROOT_SCOPE_ID);
  (state.patchFlushReadyIds ??= new Set()).add(readyId);
}

// The flush's merge tree of patches by scope; `flushChunk` drops it.
function patchTree(state: State) {
  return (state.patchTree ??= {});
}

export function _resume_branch(scopeId: number) {
  const branchId = $chunk.context?.[kBranchId];
  if (branchId !== undefined && branchId !== scopeId) {
    writeScope(scopeId, { [AccessorProp.ClosestBranchId]: branchId });
  }
}

export function _attr_content(
  nodeAccessor: Accessor,
  scopeId: number,
  content: unknown,
  markerGuard?: number,
) {
  const shouldResume = markerGuard !== 0;
  const render = normalizeServerRender(content);
  const branchId = _peek_scope_id();
  const { state } = $chunk.boundary;
  if (state.writesPatches) {
    const renderer = normalizeDynamicRenderer<ServerRenderer>(content);
    if (render) {
      state.pairBranch!(
        scopeId,
        nodeAccessor,
        branchId,
        undefined,
        undefined,
        typeof renderer === "function"
          ? renderer[RendererProp.Owner]
          : undefined,
      );
    }
    markContentRendered(state, renderer);
  }
  if (render) {
    // The client may swap in another instance of this content, with its own
    // loop values, so the content resumes every input it reads.
    try {
      _set_scope_reason(shouldResume ? CLIENT_ALL : 0);
      if (shouldResume) {
        withBranchId(branchId, render);
      } else {
        render();
      }
    } finally {
      _set_scope_reason(undefined);
    }
  }

  const rendered = _peek_scope_id() !== branchId;
  if (rendered) {
    if (shouldResume) {
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + nodeAccessor]: writeScope(branchId, {}),
        [AccessorPrefix.ConditionalRenderer + nodeAccessor]:
          rendererKey(render),
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

export function _var(
  parentScopeId: number,
  scopeOffsetAccessor: Accessor,
  childScopeId: number,
  registryId: string,
  nodeAccessor?: Accessor,
) {
  writeScopePassive(parentScopeId, { [scopeOffsetAccessor]: _scope_id() });
  // TODO: if the return value is already registered, use that.
  const wiring = _resume({}, registryId, parentScopeId);
  // A created child gets the same wiring as a resumed one: a seed bound
  // to the parent's registration, so no separate init registers for it.
  const state = getState();
  if (state.writesPatches && inCreatable()) {
    (
      (scopePatch(state, childScopeId)[PatchKey.Setup] ??= {}) as Record<
        string,
        unknown
      >
    )[PatchKey.Var] = registryId;
  }
  const childScope = writeScopePassive(childScopeId, {
    [AccessorProp.TagVariable]: wiring,
  });
  if (nodeAccessor !== undefined) {
    writeScope(parentScopeId, {
      [AccessorPrefix.BranchScopes + nodeAccessor]: childScope,
    });
  }
}

function writeScopePassive(scopeId: number, partialScope: PartialScope) {
  const target = $chunk.serializeState;
  const scope = _scope_with_id(scopeId);
  Object.assign(scope, partialScope);
  // Passive resume props never ride a patch (see `writeScope`).
  if ($chunk.boundary.state.writesPatches) return scope;
  const passive = (target.passiveScopes ||= {});
  passive[scopeId] = Object.assign(passive[scopeId] || {}, partialScope);
  return scope;
}

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
  shellId?: string | 0,
  owned?: GroupMask,
  group?: number,
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

// Shared branch and scope writer for every `_for_*` loop variant.
function forBranches(
  by: unknown,
  iterate: (
    each:
      | 0
      | ((itemKey: unknown, sameAsIndex: boolean, render: () => void) => void),
  ) => void,
  scopeId: number,
  accessor: Accessor,
  branchGuard: undefined | number,
  markerGuard: undefined | number,
  branchExprGuard: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
  shellId?: string | 0,
  owned?: GroupMask,
  group?: number,
) {
  if (MARKO_DEBUG && by) {
    const run = iterate;
    const seenKeys = new Set<unknown>();
    iterate = (each) =>
      run((itemKey, sameAsIndex, render) => {
        assertValidLoopKey(itemKey, seenKeys);
        if (each) each(itemKey, sameAsIndex, render);
        else render();
      });
  }

  if (
    $chunk.boundary.state.writeLoop?.(
      iterate as Parameters<NonNullable<State["writeLoop"]>>[0],
      scopeId,
      accessor,
      shellId,
      owned,
      group,
    )
  )
    return;
  if (
    $chunk.boundary.state.patchPage &&
    (!shellId || _client_guard(owned, group!))
  ) {
    const run = iterate;
    iterate = (each) => withUnpatched(() => run(each));
  }
  // A patchable loop's markers must resume even on a page with no other
  // client code: a patch pairs and creates through them.
  if (shellId !== undefined) $chunk.needsWalk = true;

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

  iterate((itemKey, sameAsIndex, render) => {
    const branchId = _peek_scope_id();
    if (resumeMarker) {
      if (singleNode) {
        flushBranchIds = " " + branchId + flushBranchIds;
      } else {
        $chunk.writeHTML(state.mark(ResumeSymbol.BranchStart, flushBranchIds));
        flushBranchIds = branchId + "";
      }
    }

    withBranchId(branchId, () => {
      render();
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
  shellIds?: string[],
  owned?: GroupMask,
  group?: number,
) {
  if (
    $chunk.boundary.state.writeBranch?.(
      scopeId,
      accessor,
      cb,
      shellIds,
      owned,
      group,
    )
  )
    return;
  // A patchable conditional's markers must resume even on a page with no
  // other client code: a patch pairs and creates through them.
  if (shellIds) $chunk.needsWalk = true;
  // A shell-less branch, or one whose expression derives from a client-owned
  // group, is the resumed page's to render: no patch fills its reads.
  if (
    $chunk.boundary.state.patchPage &&
    (!shellIds || _client_guard(owned, group!))
  ) {
    const render = cb;
    cb = () => withUnpatched(render);
  }
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

// A branch start mark precedes its content but is only decided once that
// content has rendered, so the branch accumulates alone until `applyBranchStart`
// rejoins it. Resume pops a start only for an end carrying branch ids, so an
// unpaired one is consumed by the enclosing branch instead.
export function deferBranchStart(chunk: Chunk) {
  const beforeBranch = chunk.html;
  chunk.html = "";
  return beforeBranch;
}

// Splicing the mark in at a recorded offset would flatten `html` every time.
export function applyBranchStart(
  chunk: Chunk,
  beforeBranch: string,
  rendered: boolean,
) {
  chunk.html =
    beforeBranch +
    (rendered ? chunk.boundary.state.mark(ResumeSymbol.BranchStart, "") : "") +
    chunk.html;
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

let writeScope = (scopeId: number, partialScope: PartialScope) => {
  const { state } = $chunk.boundary;
  const target = $chunk.serializeState;
  const scope = scopeWithId(state, scopeId);
  const pending = target.writeScopes[scopeId];
  state.needsMainRuntime = true;
  countResumeWrite($chunk);
  Object.assign(scope, partialScope);

  // Nothing ever resumes a patch render's output, so resume writes stop at the
  // canonical scope (server reads); patch data flows through `writePatch`.
  if (state.writesPatches) return scope;

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

// Module-eval reassignment: must stay immediately after the `let writeScope`
// declaration above.
if (MARKO_DEBUG) {
  writeScope = (
    (writeScope) =>
    (
      scopeId: number,
      partialScope: PartialScope,
      file?: string,
      loc?: string | 0,
      vars?: Parameters<typeof setDebugInfo>[3],
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

// Lets passive props join an existing scope flush without forcing wire data.
export function _existing_scope(scopeId: number) {
  return writeScope(scopeId, {});
}

export function _scope_with_id(scopeId: number) {
  return scopeWithId($chunk.boundary.state, scopeId);
}

export function scopeWithId(state: State, scopeId: number) {
  const { scopes } = state;
  let scope = scopes.get(scopeId);
  if (!scope) {
    scopes.set(scopeId, (scope = { [K_SCOPE_ID]: scopeId }));
  }
  return scope;
}

export function _subscribe(
  subscribers: Set<ScopeInternals> | undefined,
  scope: ScopeInternals,
  resumeId?: string | 0,
  markerGuard?: number,
) {
  // A flush's scopes are live already (paired) or subscribe as they render
  // (created); a patch never records a subscription.
  const { boundary, serializeState } = $chunk;
  if (subscribers && !boundary.state.writesPatches) {
    const { serializer } = boundary.state;
    if (!serializeState.readyId && !serializer.written(subscribers)) {
      // An unflushed set carries its subscriber in the same payload.
      subscribers.add(scope);
    } else if (resumeId) {
      // Its owner resumes first and the client may change the closure before
      // this arrives, so the subscriber applies that and subscribes on resume.
      _script(scope[K_SCOPE_ID]!, resumeId, markerGuard);
    } else {
      // Flushed or lazy sets add subscribers through their gated channel.
      serializer.writeCall(scope, subscribers, "add", serializeState);
    }
    // Content a `@catch` may drop takes its subscriptions with it.
    if (boundary.withinCatch) {
      (boundary.subscribed ||= []).push(subscribers, scope, serializeState);
    }
  }
  return scope;
}

// A reason: two bits per param-reason group at `1 + 2 * group` (client and
// server contribute), a keyed object of group values, or none.
export type GroupMask = undefined | number | Partial<Record<string, number>>;

// A page render's resume payload rides this; a patch carries fills alone.
export function _page_render() {
  return $chunk.boundary.state.writesPatches ? undefined : 1;
}

// Every group client-sourced, or every group server-sourced, for a child whose groups
// the caller cannot see; bit 0, which no group uses, keeps them apart from any mask.
export const CLIENT_ALL = 0x2aaaaaab;
export const SERVER_ALL = 0x55555555;

// A group's 2-bit sources value; no mask is server-sourced (a write with no
// ownership args). A number packs groups 0-14; a later group makes it keyed.
export function maskGroup(mask: GroupMask, group: number) {
  return mask === undefined || mask === SERVER_ALL
    ? 2
    : mask === CLIENT_ALL
      ? 1
      : typeof mask === "number"
        ? group < 15
          ? (mask >>> (1 + 2 * group)) & 3
          : 0
        : ((mask as Partial<Record<number, number>>)[group] ?? 0);
}

export function _set_scope_reason(reason: GroupMask) {
  $chunk.boundary.state.scopeReason = reason;
}

// Whether the group is client-sourced (the low mask bit): the resumed page then
// owns whatever derives from the group.
export function _client_guard(mask: GroupMask, group: number) {
  return maskGroup(mask, group) & 1 ? 1 : 0;
}

export function _scope_reason() {
  const reason = $chunk.boundary.state.scopeReason;
  $chunk.boundary.state.scopeReason = undefined;
  return reason;
}

// Any contribution to the group means its resume data writes; no mask at all
// means the caller had nothing to write.
export function _write_if(condition: GroupMask, key: number) {
  return condition && maskGroup(condition, key) ? 1 : undefined;
}

export function _write_guard(condition: GroupMask, key: number) {
  return _write_if(condition, key) || 0;
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
  const bodyEnd = body.render(renderer, input);
  // A throw in the body ends the render around it too, instead of letting it
  // go on past dead content.
  if (boundary.aborted) throw boundary.reason;

  if (body === bodyEnd) {
    chunk.writeHTML(body.html);
    body.deferOwnReady();
    chunk.deferredReady = push(chunk.deferredReady, body);
  } else {
    // The remainder of the render continues after the async body in a chunk
    // that restores the parent serialize state.
    bodyEnd.next = $chunk = chunk.fork(boundary, chunk.next);
    chunk.next = body;
  }
}

export function _await<T>(
  scopeId: number,
  accessor: Accessor,
  promise: Promise<T> | T,
  content: (value: T) => void,
  markerGuard?: number,
  patchContent?: 0 | string,
  alwaysPairs?: 1,
) {
  const writesPatches = $chunk.boundary.state.writesPatches;
  // `0`: a client-owned thenable, resolved by `_await_promise`. A string is
  // the body's content id, letting a created scope build the await branch.
  if (writesPatches && patchContent === 0) return;
  const resumeMarker = markerGuard !== 0 || writesPatches;
  // A created scope builds the body from this shell, even when settled; an
  // always-pairing body outside creatable structure is built only by a rebuild.
  const { boundary } = $chunk;
  const writePending = () => {
    const elide = alwaysPairs && !inCreatable();
    if (!elide) $chunk.boundary.state.shipShell!(patchContent);
    writePatch(scopeId, {
      [PatchKey.Pending + accessor]: (!elide && patchContent) || 1,
    });
  };

  if (!isPromise(promise)) {
    if (resumeMarker) {
      const branchId = _peek_scope_id();
      $chunk.boundary.state.pairBranch?.(scopeId, accessor, branchId);
      if (writesPatches) {
        writePending();
        // The Child entry settles the pending UI the entry above opens.
        scopePatch(boundary.state, branchId);
      }
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
  const startId = _peek_scope_id();
  if (writesPatches) writePending();
  const after = (chunk.next = $chunk = chunk.fork(boundary, chunk.next));
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
              $chunk.boundary.state.pairBranch?.(scopeId, accessor, branchId);
              // The Child entry is the settle signal: force it so a body
              // with no writes of its own still attaches the pending UI.
              if (writesPatches) scopePatch(boundary.state, branchId);
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
  bodyId?: string,
  alwaysPairs?: 1,
  catchReadsError?: 1,
) {
  // The placeholder's branch id precedes the body's so the walker parents it
  // to the try's enclosing branch (a sibling of the try), as CSR does.
  const placeholderBranchId = placeholderContent ? _scope_id() : 0;
  const branchId = _peek_scope_id();
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  const { resumeWrites } = boundary;
  // A patch render shows `@placeholder`/`@catch` from received client state;
  // the document reorder/`<t hidden>` path must not ride the flush stream.
  const { writesPatches } = state;
  if (writesPatches) {
    // The entry carries the creation payload (body shell, slot ids) unless the
    // try always pairs: no catch, outside divergent branches and caught bodies.
    const create = !alwaysPairs || inCreatable();
    state.pairBranch!(
      scopeId,
      accessor,
      branchId,
      create ? bodyId : undefined,
      create
        ? placeholderId
          ? [catchId, placeholderId]
          : [catchId]
        : undefined,
      scopeId,
    );
    // A try this flush may create, or rebuild from its catch, needs its
    // entry even when its body writes nothing.
    if (create) scopePatch(state, branchId);
  }
  const beforeBranch = deferBranchStart(chunk);
  const renderers = (): void =>
    writeTryRenderers(
      branchId,
      catchContent && _resume(catchContent, catchId!),
      placeholderContent && _resume(placeholderContent, placeholderId!),
    );
  // Whether `tryBoundary` writes the renderers itself once the body settles,
  // or not at all once its `@catch` rendered.
  const renderersWritten = writesPatches
    ? catchContent
      ? tryBoundary(
          () => withContext(kCaught, 1, content),
          catchContent,
          branchId,
          renderers,
          (err) => {
            // A body that threw before claiming its id keeps it paired.
            if (_peek_scope_id() === branchId) _scope_id();
            // Only a `@catch` reading its error ships it, as a document does.
            writePatch(scopeId, {
              [PatchKey.Catch + accessor]: catchReadsError ? [err] : [],
            });
          },
        )
      : (content(), false)
    : tryBoundary(
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

  // Custom and dynamic tags hide from analysis whether the body resumes, so
  // its render decides; a patch page keeps every try's marks for a rebuild.
  const rendered =
    writesPatches ||
    (state.patchPage && !inUnpatched()) ||
    chunk !== $chunk ||
    boundary.resumeWrites !== resumeWrites;
  applyBranchStart(chunk, beforeBranch, rendered);
  if (!rendered) return;

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

  chunk.next = $chunk = chunk.fork(boundary, chunk.next);
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
function tryBoundary(
  content: () => void,
  catchContent: ServerRenderer | undefined,
  branchId: number,
  renderers: () => void,
  patchCatch?: (err: unknown) => void,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  // Aborts with its parent so a disconnected render strands pending body work;
  // the outer-aborted check in onNext keeps that from firing the catch.
  const catchBoundary = new Boundary(state, undefined, boundary);
  if (catchContent) catchBoundary.withinCatch = true;
  const body = chunk.fork(catchBoundary, null);
  // A patch body stays outside the branch id context: the patch writers
  // read it as "inside a divergent branch" (see isInResumedBranch).
  const bodyEnd = patchCatch
    ? body.render(content)
    : body.render(() => withBranchId(branchId, content));

  if (catchBoundary.aborted) {
    // Without a `@catch` the error ends the enclosing render, like any throw in it.
    if (!catchContent) throw catchBoundary.reason;
    // Sync error. The body's already-written scopes stay in the resume payload
    // as dead fills; a `@catch` firing is rare enough not to warrant dropping them.
    (patchCatch || catchContent)(catchBoundary.reason);
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
  const bodyNext = (bodyEnd.next = $chunk = chunk.fork(boundary, chunk.next));
  chunk.next = body;
  boundary.startAsync();

  // With a catch, markers let it take the body's place once the stream reaches
  // it pending (`markCatchRange`); a body settled or caught first needs none.
  const reorderId = catchContent && !patchCatch ? state.nextReorderId() : "";
  if (reorderId) {
    chunk.catchRange = { id: reorderId, end: bodyEnd };
    // The catch renders later, forked from this chunk.
    captureContext(chunk);
  }

  catchBoundary.onNext = () => {
    if (boundary.aborted) return;
    if (catchBoundary.aborted) {
      if (patchCatch) {
        // A patch's catch writes its own entry, so nothing of the body streams.
        if (!bodyEnd.consumed) {
          let cut = body;
          while (cut.consumed) cut = cut.next!;
          cut.async = false;
          cut.next = bodyNext;
          cut.html = cut.scripts = cut.effects = cut.lastEffect = "";
          cut.placeholder = cut.reorderId = cut.catchRange = null;
        }
        chunk.fork(boundary, null).render(patchCatch, catchBoundary.reason);
        boundary.endAsync();
        return;
      }
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
      // The catch replaced the body: a patch rebuilds the try.
      if (state.patchPage) {
        catchChunk.render(() =>
          writeScope(branchId, { [AccessorProp.CatchContent]: 0 }),
        );
      }

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

// The sections of a caught body are gone, so their closures no longer notify
// them: from a set still to flush directly, else through the set's channel.
function unsubscribe(subscribed: unknown[], serializer: Serializer) {
  for (let i = 0; i < subscribed.length; i += 3) {
    const subscribers = subscribed[i] as Set<ScopeInternals>;
    const scope = subscribed[i + 1] as ScopeInternals;
    if (!serializer.written(subscribers)) {
      subscribers.delete(scope);
    } else if (!serializer.dropCall(scope, subscribers, "add")) {
      serializer.writeCall(
        scope,
        subscribers,
        "delete",
        subscribed[i + 2] as SerializeState,
      );
    }
  }
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

function writeTryRenderers(
  branchId: number,
  catchContent: ServerRenderer | undefined,
  placeholderContent: ServerRenderer | undefined,
) {
  writeScope(branchId, {
    [AccessorProp.CatchContent]: catchContent,
    [AccessorProp.PlaceholderContent]: placeholderContent,
  });
}

const NOOP = () => {};

// Counted up the parent chain so an enclosing `<try>` sees writes from nested
// bodies, including ones reordered out of its own chunk chain.
function countResumeWrite(chunk: Chunk) {
  for (
    let boundary: Boundary | undefined = chunk.boundary;
    boundary;
    boundary = boundary.parent
  ) {
    boundary.resumeWrites++;
  }
  // Content settling later still owes each enclosing unmarked await its visit.
  for (
    let async = getAsyncContent(chunk);
    async && !async.resumed;
    async = async.parent
  ) {
    async.resumed = true;
    async.end?.writeHTML(async.visit!);
  }
}

function getAsyncContent(chunk: Chunk) {
  return chunk.context?.[kIsAsync] as AsyncContent | undefined;
}

type Mark = Mark.Value;

type RuntimeKey = RuntimeKey.Value;

// How a scope's patch reaches its parent's entry.
export interface PatchLink {
  parent: number;
  // A child accessor, or a loop item: its index, with its key when not that.
  link: string | [accessor: string, at: number | [index: number, key: unknown]];
  content?: string;
  slots?: (string | undefined)[];
  // A content body's owner (its client `_`) when not the rendering scope.
  owner?: number;
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
  declare writesPatches?: boolean;
  /** A render of a patch template (a page or a patch): structure tracks unpatched context. */
  declare patchPage?: true;
  // Patch rendering intercepts branch/loop writes; defined only by the patch
  // entry's State subclass so normal SSR bundles carry none of it.
  writeBranch?(
    scopeId: number,
    accessor: Accessor,
    cb: () => number | undefined | void,
    shellIds?: string[],
    owned?: GroupMask,
    group?: number,
  ): 1 | void;
  writeLoop?(
    iterate: (
      each: (
        itemKey: unknown,
        sameAsIndex: boolean,
        render: () => void,
      ) => void,
    ) => void,
    scopeId: number,
    accessor: Accessor,
    shellId?: string | 0,
    owned?: GroupMask,
    group?: number,
  ): 1 | void;
  shipShell?(shellId: string | 0 | undefined): string | undefined;
  // A boundary body or dynamic tag branch pairs with the live page's branch
  // scope: its patch nests under the owner, bind paths resolve through it.
  pairBranch?(
    scopeId: number,
    accessor: Accessor,
    branchId: number,
    contentId?: string,
    slotIds?: (string | undefined)[],
    ownerScopeId?: number,
  ): void;
  declare patchTree?: Record<number, Record<string, unknown>>;
  // The lazy templates the current root is the first in the response to name
  // (all it named are `readyIds`): its frame applies once all are resident.
  declare patchFlushReadyIds?: Set<string>;
  // How a scope hangs off its parent: a reference's path from the root walks
  // these, and a scope writing after its parent's entry re-links through one.
  declare patchLinks?: Record<number, PatchLink>;
  public writeReorders: Chunk[] | null = null;
  public scopes = new Map<number, ScopeInternals>();
  // A scope by id, for the locals of registered content once it is sent.
  public scope = (scopeId: number) => scopeWithId(this, scopeId);
  // Content renderers (by id) a patch render created and has not invoked
  // since: their consumer withheld them, so their values fill.
  declare withheldContents?: Set<string>;
  public flushScopes = false;
  public writeScopes: Record<number, PartialScope> = {};
  public readyIds: Set<string> | null = null;
  public scopeReason: GroupMask;
  public $global: $Global & { renderId: string; runtimeId: string };
  constructor($global: $Global & { renderId: string; runtimeId: string }) {
    this.$global = $global;
    if ($global.cspNonce) {
      this.nonceAttr = " nonce" + attrAssignment($global.cspNonce);
    }
  }

  flushChunk(html: string, scripts: string, pending: number) {
    const { $global, nonceAttr } = this;
    const { __flush__ } = $global;

    if (scripts) {
      html += "<script" + nonceAttr + ">" + scripts + "</script>";
    }

    if (__flush__) {
      $global.__flush__ = undefined;
      html = __flush__($global, html);
    }

    return pending ? html : html + this.trailerHTML;
  }

  walkScript() {
    return this.runtimePrefix + RuntimeKey.Walk + "()";
  }

  addResumes(serializeState: SerializeState, resumes: string) {
    serializeState.resumes = concatSequence(serializeState.resumes, resumes);
  }

  resumeScript(resumes: string) {
    if (this.hasWrittenResume) {
      return this.runtimePrefix + RuntimeKey.Resume + ".push(" + resumes + ")";
    }
    this.hasWrittenResume = true;
    return this.runtimePrefix + RuntimeKey.Resume + "=[" + resumes + "]";
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

type FlushStatus = FlushStatus.Value;
export { FlushStatus };

export class Boundary {
  public onNext = NOOP;
  public count = 0;
  // Scope and effect writes under it, so a `<try>` can tell whether anything
  // inside reaches the client.
  public resumeWrites = 0;
  public state: State;
  public parent?: Boundary;
  public aborted = false;
  public reason: unknown;
  // Closure subscriptions made under it, as set, scope and channel: the only
  // references live scopes hold into its content, undone once it aborts.
  public subscribed?: unknown[];
  // Its reorders whose markers streamed, each queued to stream once settled,
  // or all once it aborts so the reorder around them completes.
  public pendingReorders?: Set<Chunk>;
  // Boundaries nested in it, which abort with it.
  public children?: Boundary[];
  // In a `<try>` body with a `@catch`, which may remove what streamed of it.
  public withinCatch = false;
  constructor(state: State, signal?: AbortSignal, parent?: Boundary) {
    this.state = state;
    this.parent = parent;
    if (parent) {
      this.withinCatch = parent.withinCatch;
      if (parent.aborted) {
        this.abort(parent.reason);
      } else {
        (parent.children ||= []).push(this);
      }
    } else if (signal) {
      if (signal.aborted) {
        this.abort(signal.reason);
      } else {
        signal.addEventListener("abort", this);
      }
    }
  }

  abort(reason: unknown) {
    if (this.aborted) return;
    const { state } = this;
    this.aborted = true;
    this.reason = reason;
    if (this.subscribed) unsubscribe(this.subscribed, state.serializer);
    if (this.pendingReorders) {
      for (const reorder of this.pendingReorders) state.reorder(reorder);
      this.pendingReorders = undefined;
    }
    this.count = 0;
    // Content under it is told apart by this throwaway State from here on.
    this.state = new State(state.$global);
    // Nested boundaries abort first, so what is pending under them is queued
    // and told apart before handling this abort can flush.
    if (this.children) {
      for (const child of this.children) child.abort(reason);
    }
    this.onNext();
  }

  // Listens on the signal it was created with, so a settled render can detach.
  handleEvent(event: Event) {
    this.abort((event.target as AbortSignal).reason);
  }

  flush() {
    // A pending patch must not stringify until its flush is actually
    // emitted: the same patch objects keep receiving later writes.
    if (!this.aborted && !(this.count && this.state.writesPatches)) {
      flushSerializer(this, this.state);
    }

    return this.count
      ? FlushStatus.continue
      : this.aborted
        ? FlushStatus.aborted
        : FlushStatus.complete;
  }

  startAsync() {
    if (!this.aborted) {
      this.count++;
    }
  }

  endAsync() {
    if (!this.aborted) {
      if (MARKO_DEBUG && !this.count) {
        throw new Error("A boundary ended more async work than it started.");
      }
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
  public async = false;
  public consumed = false;
  // Markers a patch pairs through, walked even on a page with no client code.
  public needsWalk = false;
  public reorderId: string | null = null;
  // The branch its reorder's content joins when its id does not name it: a
  // `@catch`'s try branch, or the branch around a hole in another reorder.
  public reorderBranch = 0;
  public deferredReady: Opt<Chunk> = null;
  // Effects held for the in-order content this chunk heads, in stream order, on
  // chunks of the boundary each came from, so a `@catch` drops only its own.
  public heldEffects: Opt<Chunk> = null;
  // A reorder whose end marker this chunk writes, queued once the marker streams
  // so the client always walks the marker before the reorder that replaces it.
  public deferredReorder: Chunk | null = null;
  // The pending `<try>` body after this chunk, which its `@catch` may replace,
  // until the stream reaches it and writes the markers around it.
  public catchRange: { id: string; end: Chunk } | null = null;
  public placeholder: {
    body: Chunk;
    render: () => void;
    branchId: number;
    scopeId: number;
    // Reserved ahead of the body for the placeholder's own branch.
    placeholderBranchId: number;
  } | null = null;
  public boundary: Boundary;
  public next: Chunk | null;
  public context: Record<string | symbol, unknown> | null;
  public serializeState: SerializeState;
  constructor(
    boundary: Boundary,
    next: Chunk | null,
    context: Record<string | symbol, unknown> | null,
    serializeState: SerializeState,
  ) {
    this.boundary = boundary;
    this.next = next;
    this.context = context;
    this.serializeState = serializeState;
  }

  fork(boundary: Boundary, next: Chunk | null) {
    return new Chunk(boundary, next, this.context, this.serializeState);
  }

  writeHTML(html: string) {
    this.html += html;
  }

  writeEffect(scopeId: number, registryId: string) {
    // A patch never ships effects: paired scopes attached theirs when the
    // page resumed, and a freshly created scope attaches its shell's.
    if (this.boundary.state.writesPatches) return;
    countResumeWrite(this);
    if (this.lastEffect === registryId) {
      this.effects = concatEffects(this.effects, scopeId + "");
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
    this.needsWalk ||= chunk.needsWalk;
    this.effects = concatEffects(this.effects, chunk.effects);
    this.scripts = concatScripts(this.scripts, chunk.scripts);
    this.lastEffect = chunk.lastEffect || this.lastEffect;
    this.deferredReady = concat(this.deferredReady, chunk.takeDeferredReady());
  }

  takeHeldEffects() {
    const { heldEffects } = this;
    this.heldEffects = null;
    return heldEffects;
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
      // Own resume data precedes nested lazy content that may reference it.
      const deferred = this.fork(this.boundary, null);
      deferred.effects = this.effects;
      deferred.scripts = this.scripts;
      this.effects = this.scripts = this.lastEffect = "";
      this.deferredReady = concat<Chunk>(deferred, this.deferredReady);
    }
  }
  // Renders the `@placeholder`s the coming pass streams, in stream order, before
  // it folds anything; a `@catch` one fires cuts the chain, so the pass restarts.
  renderPlaceholders(boundary: Boundary) {
    const { state } = boundary;
    restart: for (;;) {
      let reorders: Chunk[] | null | false = null;
      for (let cur: Chunk = this; cur.next && !cur.async; cur = cur.next) {
        if (cur.renderPlaceholder(state)) {
          if (boundary.aborted) return;
          continue restart;
        }
        if (cur.deferredReorder) (reorders ||= []).push(cur.deferredReorder);
      }

      // Then the reorders the walk streams, in the order it takes them.
      if (state.writeReorders) {
        for (const reorder of state.writeReorders) {
          if (
            (reorders = renderReorderPlaceholders(reorder, reorders)) === false
          ) {
            if (boundary.aborted) return;
            continue restart;
          }
        }
      }
      for (let i = 0; reorders && i < reorders.length; i++) {
        if (
          (reorders = renderReorderPlaceholders(reorders[i], reorders)) ===
          false
        ) {
          if (boundary.aborted) return;
          continue restart;
        }
      }
      return;
    }
  }

  // Renders a pending body's `@placeholder`, or splices a settled body in its
  // place; returns whether the render aborted.
  renderPlaceholder(state: State) {
    const { placeholder } = this;
    if (!placeholder) return false;
    this.placeholder = null;
    // Nothing of a caught body streams.
    if (this.boundary.aborted) return false;
    // The body is left for the pass that streams it, after the markers written
    // here, so reorders nested in it queue behind its own.
    const { body } = placeholder;
    let end = body;
    while (end.next && !end.async) end = end.next;

    if (!end.async) {
      end.next = this.next;
      this.next = body;
      return false;
    }

    const { branchId, scopeId, placeholderBranchId } = placeholder;
    const reorderId = (body.reorderId = branchId + "");
    this.writeHTML(state.mark(Mark.Placeholder, reorderId));
    const { effects } = this;
    const beforeBranch = deferBranchStart(this);
    if (
      this.render(() =>
        withBranchId(placeholderBranchId, placeholder.render),
      ) !== this
    ) {
      // TODO: eventually this should be allowed.
      // Once it's allowed we'll need check if placeholder needs to be disposed once body complete.
      this.boundary.abort(
        new Error("An @placeholder cannot contain async content."),
      );
    }
    // An abort here fires the `@catch` that takes this chunk's place, or ends
    // the render.
    if (this.boundary.aborted) return true;
    // A placeholder with effects is a branch like the body: live while the body
    // streams, destroyed when the reorder swaps it in.
    const stateful = this.effects !== effects;
    applyBranchStart(this, beforeBranch, stateful);
    if (stateful) {
      this.render(() =>
        writeScope(branchId, {
          [AccessorProp.PlaceholderBranch]: scopeWithId(
            state,
            placeholderBranchId,
          ),
        }),
      );
      this.writeHTML(
        state.mark(
          ResumeSymbol.BranchEnd,
          scopeId +
            " " +
            (AccessorProp.PlaceholderBranch + branchId) +
            " " +
            placeholderBranchId,
        ),
      );
      // The body's flush ends the placeholder's life on the client.
      dismissChunk(end, body).writeEffect(
        branchId,
        PLACEHOLDER_DISMISS_REGISTER_ID,
      );
    }
    this.writeHTML(state.mark(Mark.PlaceholderEnd, reorderId));
    this.deferredReorder = body;
    return false;
  }

  // Writes the markers its `@catch` replaces around the pending body after it,
  // once the stream reaches it.
  markCatchRange() {
    const { catchRange } = this;
    if (catchRange) {
      const { state } = this.boundary;
      this.catchRange = null;
      this.writeHTML(state.mark(Mark.Placeholder, catchRange.id));
      catchRange.end.writeHTML(state.mark(Mark.PlaceholderEnd, catchRange.id));
    }
  }

  // Queued once the markers it replaces stream.
  queueDeferredReorder() {
    const { deferredReorder } = this;
    if (deferredReorder) {
      this.deferredReorder = null;
      deferredReorder.boundary.state.reorder(deferredReorder);
    }
  }

  // Takes the render's root boundary, as `flushScript` does: the head may be in a
  // `<try>` body, whose boundary a `@catch` leaves with a throwaway State.
  consume(boundary: Boundary) {
    this.renderPlaceholders(boundary);
    let cur: Chunk = this;
    let html = "";
    let effects = "";
    let scripts = "";
    // The chunk ending the effects of one boundary that `effects` holds.
    let effectsEnd: Chunk | undefined;
    let heldEffects = this.heldEffects;
    let needsWalk = false;
    let deferredReady: Opt<Chunk>;
    this.heldEffects = null;
    // Lazy content heading the stream, pending again or not, held its earlier
    // effects apart; its own data still goes ahead of the content nested in it.
    if (this.serializeState.readyId && this.effects) followHeldEffects(this);

    while (cur.next && !cur.async) {
      cur.markCatchRange();
      cur.queueDeferredReorder();
      needsWalk ||= cur.needsWalk;
      html += cur.html;
      if (cur.serializeState.readyId) {
        deferredReady = push(deferredReady, cur);
      } else {
        if (cur.effects) {
          if (effectsEnd && effectsEnd.boundary !== cur.boundary) {
            heldEffects = holdEffectsOn(heldEffects, effectsEnd, effects);
            effects = "";
          }
          effectsEnd = cur;
          effects = concatEffects(effects, cur.effects);
        }
        scripts = concatScripts(scripts, cur.scripts);
      }
      deferredReady = concat(deferredReady, cur.takeDeferredReady());
      cur.consumed = true;
      cur = cur.next;
    }

    cur.deferOwnReady();
    if (effects) {
      if (cur.serializeState.readyId) {
        // Lazy content never takes the page's effects.
        heldEffects = holdEffectsOn(heldEffects, effectsEnd!, effects);
      } else if (effectsEnd!.boundary !== cur.boundary) {
        // A `@catch` that cuts this chunk keeps what came before its body. Ids
        // compress across them only into a body that drops with them.
        heldEffects = holdEffectsOn(heldEffects, effectsEnd!, effects);
        if (isWithin(cur.boundary, effectsEnd!.boundary)) {
          cur.lastEffect ||= effectsEnd!.lastEffect;
        }
      } else {
        cur.effects = concatEffects(effects, cur.effects);
        cur.lastEffect ||= effectsEnd!.lastEffect;
      }
    }
    cur.heldEffects = heldEffects;
    cur.deferredReady = concat(deferredReady, cur.deferredReady);
    cur.needsWalk ||= needsWalk;
    cur.html = html + cur.html;
    cur.scripts = concatScripts(scripts, cur.scripts);
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

  flushReadyScripts(
    boundary: Boundary,
    reservations?: string[],
    holdEffects?: boolean,
  ) {
    const { serializeState } = this;
    const { readyId } = serializeState;
    let scripts = "";
    const held = this.takeDeferredReady();
    if (held) {
      for (const chunk of Array.isArray(held) ? held : [held]) {
        // A caught body's lazy content writes nothing.
        if (chunk.boundary.aborted) continue;
        scripts = concatScripts(
          scripts,
          chunk.flushReadyScripts(boundary, reservations, holdEffects),
        );
        // Effects held for in-order content flush with a later pass.
        if (chunk.effects || chunk.deferredReady) {
          this.deferredReady = push(this.deferredReady, chunk);
        }
      }
    }

    if (readyId && !this.async) {
      const { state } = boundary;
      flushSerializer(boundary, serializeState);
      const deps = state.serializer.takeChannelDeps();
      const effects = holdEffects ? "" : this.effects;
      const { resumes } = serializeState;
      const chunkScripts = this.scripts;
      serializeState.resumes = this.scripts = "";
      if (effects) this.effects = this.lastEffect = "";
      if (resumes || effects) {
        state.needsMainRuntime = true;
        const batch = concatSequence(
          depsMarker(deps),
          concatSequence(resumes, effects && `"${effects}"`),
        );
        if (reservations) {
          // Main-stream gates reserve ready-batch order until reorders arrive.
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
          scripts = concatScripts(scripts, state.writeReady(readyId, batch));
        }
      }
      scripts = concatScripts(scripts, chunkScripts);
    }

    return scripts;
  }

  // Takes the render's root boundary: a `<try>` body chunk's own may settle or
  // abort before the async values serialized in its flush do.
  flushScript(boundary: Boundary) {
    const { state } = boundary;
    const { $global, runtimePrefix } = state;
    let needsWalk = state.walkOnNextFlush || this.needsWalk;
    if (needsWalk) {
      state.walkOnNextFlush = this.needsWalk = false;
      // A walk with nothing else to resume (a patch lazy tag that only
      // records its node) still runs on the runtime.
      state.needsMainRuntime = true;
    }

    // Main-stream scopes the pass wrote (its placeholders) serialize before the
    // ready channels, so a value they share belongs to main, which all may read.
    flushSerializer(boundary, state);
    // Lazy content's effects wait on in-order content like the rest.
    let readyResumeScripts = this.flushReadyScripts(
      boundary,
      undefined,
      this.async,
    );
    // A channel that fails to serialize aborts and stays pending.
    for (
      let channel;
      !boundary.aborted && (channel = state.serializer.pendingReadyChannel());
    ) {
      const resumes = state.serializer.stringifyScopes([], boundary, channel);
      const deps = state.serializer.takeChannelDeps();
      state.needsMainRuntime = true;
      readyResumeScripts = concatScripts(
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

    // In-order content holds every effect until it completes: its nodes aren't
    // live yet, so nothing on the client may change while it streams.
    const effects = this.async
      ? ""
      : joinHeldEffects(this.takeHeldEffects(), this.effects);
    let { html, scripts } = this;
    // A reorder streamed before leaves its adoption open until here when the
    // client resumes after both; this content is not the reorder's.
    if (html && state.hasReorderRuntime) {
      html = state.mark(ResumeSymbol.ReorderStart, "") + html;
    }

    if (state.needsMainRuntime && !state.hasMainRuntime) {
      state.hasMainRuntime = true;
      scripts = concatScripts(
        scripts,
        WALKER_RUNTIME_CODE +
          '("' +
          $global.runtimeId +
          '")("' +
          $global.renderId +
          '")',
      );
    }

    scripts = concatScripts(scripts, readyResumeScripts);

    if (effects) {
      needsWalk = true;
      state.resumes = state.resumes
        ? state.resumes + ',"' + effects + '"'
        : '"' + effects + '"';
    }

    let reordered = "";

    let needsResumeArray = false;

    if (state.writeReorders) {
      for (const reorderedChunk of state.writeReorders) {
        needsWalk = true;

        if (!state.hasReorderRuntime) {
          state.hasReorderRuntime = true;
          scripts = concatScripts(
            scripts,
            REORDER_RUNTIME_CODE + "(" + runtimePrefix + ")",
          );
        }

        const { reorderId, reorderBranch } = reorderedChunk;
        // The client adopts what this reorder streams into this branch.
        const rootBranch = reorderBranch || +reorderId!;
        const readyReservations: string[] = [];
        let reorderHTML = "";
        let reorderEffects = "";
        // While in-order content holds them, one boundary's effects at a time.
        let effectsBoundary = reorderedChunk.boundary;
        let reorderScripts = "";
        // A caught one streams empty, so the reorder around it still completes.
        let cur: Chunk | null = reorderedChunk.boundary.aborted
          ? null
          : reorderedChunk;
        reorderedChunk.reorderId = null;

        while (cur) {
          cur.markCatchRange();
          cur.queueDeferredReorder();
          cur.deferOwnReady();
          const { next } = cur;
          // Reorder-ready batches fill slots reserved by the main stream.
          const readyResumeScripts = cur.flushReadyScripts(
            boundary,
            readyReservations,
            this.async,
          );
          this.deferredReady = concat(
            this.deferredReady,
            cur.takeDeferredReady(),
          );
          cur.consumed = true;
          reorderHTML += cur.html;
          if (this.async && cur.effects && cur.boundary !== effectsBoundary) {
            if (reorderEffects) {
              holdReorderEffects(this, effectsBoundary, reorderEffects);
              reorderEffects = "";
            }
            effectsBoundary = cur.boundary;
          }
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
            // A hole within a branch the reorder's content opened, which took a
            // later scope id than the reorder's own branch, names it for its content.
            const holeBranch = cur.context?.[kBranchId] as number;
            cur.reorderBranch =
              holeBranch > rootBranch ? holeBranch : reorderBranch;
            // It queues itself once settled, or once its boundary aborts.
            (cur.boundary.pendingReorders ||= new Set()).add(cur);
            cur.html = cur.effects = cur.scripts = cur.lastEffect = "";
            cur.next = null;
          }

          cur = next;
        }

        if (reorderEffects) {
          if (this.async) {
            holdReorderEffects(this, effectsBoundary, reorderEffects);
          } else {
            needsResumeArray = true;
            reorderScripts = concatScripts(
              reorderScripts,
              '_.push("' + reorderEffects + '")',
            );
          }
        }

        for (const reservation of readyReservations) {
          reordered = concatScripts(reordered, reservation);
        }

        reordered = concatScripts(
          reordered,
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
          (reorderBranch
            ? state.mark(ResumeSymbol.ReorderStart, reorderBranch + "")
            : "") +
          reorderHTML +
          "</t>";
      }

      state.writeReorders = null;
    }

    // A reordered chunk's script pushes its effects into the resume array,
    // so one opens even with nothing to resume yet.
    if (state.resumes || (needsResumeArray && !state.hasWrittenResume)) {
      scripts = concatScripts(scripts, state.resumeScript(state.resumes));
    }

    // Reordered scripts follow the resume data they push after.
    scripts = concatScripts(scripts, reordered);

    if (needsWalk) {
      scripts = concatScripts(scripts, state.walkScript());
    }

    this.html = html;
    this.scripts = scripts;
    if (!this.async) this.effects = this.lastEffect = "";
    state.resumes = "";
    return this;
  }

  flushHTML(boundary: Boundary) {
    const { state } = boundary;
    if (state.writesPatches && boundary.count) {
      flushSerializer(boundary, state);
    }
    this.flushScript(boundary);
    const { html, scripts } = this;
    this.html = this.scripts = "";
    return state.flushChunk(html, scripts, boundary.count);
  }
}

// Renders the placeholders of a settled reorder the coming pass streams,
// collecting the reorders it queues in turn; `false` once a render aborted.
function renderReorderPlaceholders(
  reorder: Chunk,
  reorders: Chunk[] | null,
): Chunk[] | null | false {
  if (!reorder.boundary.aborted) {
    for (let cur: Chunk | null = reorder; cur; cur = cur.next) {
      if (cur.renderPlaceholder(reorder.boundary.state)) return false;
      if (cur.deferredReorder) (reorders ||= []).push(cur.deferredReorder);
    }
  }
  return reorders;
}

// The body's first pending chunk, or its last when that one sits in a nested
// boundary, whose catch would drop the effect with it.
function dismissChunk(end: Chunk, body: Chunk) {
  if (end.boundary !== body.boundary) while (end.next) end = end.next;
  return end;
}

// Moves a lazy chunk's effects after those it held of its own content, onto
// a chunk that drops only with it.
function followHeldEffects(chunk: Chunk) {
  const held = reduce(chunk.deferredReady, lastHeldOf, chunk);
  if (held !== chunk) {
    held.effects = concatEffects(held.effects, chunk.effects);
    chunk.effects = "";
  }
}

// The later chunk when it is of the same lazy content and boundary.
function lastHeldOf(held: Chunk, cur: Chunk) {
  return cur.serializeState === held.serializeState &&
    cur.boundary === held.boundary
    ? cur
    : held;
}

// Holds one boundary's effects on the chunk ending them, after those before.
function holdEffectsOn(heldEffects: Opt<Chunk>, chunk: Chunk, effects: string) {
  chunk.effects = effects;
  return push(heldEffects, chunk);
}

// Whether a boundary is the other or nested in it.
function isWithin(boundary: Boundary | undefined, outer: Boundary) {
  while (boundary && boundary !== outer) boundary = boundary.parent;
  return !!boundary;
}

// Content reordered in while in-order content still streams waits with the
// effects that content holds, after the head's own, by boundary.
function holdReorderEffects(head: Chunk, boundary: Boundary, effects: string) {
  if (!head.serializeState.readyId) {
    if (head.effects) {
      head.heldEffects = holdEffectsOn(
        head.heldEffects,
        head.fork(head.boundary, null),
        head.effects,
      );
    }
    // The head's later ids can't continue effects held before these.
    head.effects = head.lastEffect = "";
  }
  head.heldEffects = holdEffectsOn(
    head.heldEffects,
    head.fork(boundary, null),
    effects,
  );
}

// The held effects in stream order, without those of caught bodies.
export function joinHeldEffects(heldEffects: Opt<Chunk>, effects: string) {
  return concatEffects(reduce(heldEffects, joinUncaught, ""), effects);
}

function joinUncaught(joined: string, held: Chunk) {
  return held.boundary.aborted ? joined : concatEffects(joined, held.effects);
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

    // Won't fix: globals snapshot once at the first flush; serialized `$global`
    // values assigned mid-render are dropped — mutation is unsupported by design.
    if (!isBlockingState && !state.hasGlobals) {
      state.hasGlobals = true;
      const globals = getFilteredGlobals(state.$global);
      // Globals become scope 0 so we can reference them as `_(0)`; scope 0
      // props written before this first flush ride the same record.
      if (globals) {
        flushes.push([0, globals, Object.assign(globals, writeScopes[0])]);
        delete writeScopes[0];
      }
    }

    for (const key in writeScopes) {
      const scopeId = +key;
      const props = writeScopes[scopeId];
      // Only props written by this state are transmitted; scopes that were
      // merely referenced are resolved by id wherever they are used.
      if (hasKeys(props)) {
        flushes.push([scopeId, state.scopes.get(scopeId)!, props]);
      }
    }

    if (flushes.length || pending) {
      if (isBlockingState && !state.hasGlobals) {
        // Globals serialize before ready data that may reference them.
        flushSerializerGlobals(boundary);
      }
      state.addResumes(
        serializeState,
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

// `all` keeps undefined-valued keys (a patch must overwrite them, where a resume
// elides) but not the nonce: the document's CSP decides the live page's.
export function getFilteredGlobals($global: Record<string, unknown>, all?: 1) {
  if (!$global) return 0;

  const serializedGlobals = $global.serializedGlobals as
    | string[]
    | Record<string, boolean>
    | undefined;

  if (!serializedGlobals) return 0;

  let filtered: 0 | Record<string, unknown> = 0;

  if (Array.isArray(serializedGlobals)) {
    for (const key of serializedGlobals) {
      const value = $global[key];
      if (all ? key !== "cspNonce" : value !== undefined) {
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
        if (all ? key !== "cspNonce" : value !== undefined) {
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

function concatEffects(a: string, b: string) {
  return a ? (b ? a + " " + b : a) : b;
}

function concatSequence(a: string, b: string) {
  return a ? (b ? a + "," + b : a) : b;
}

function concatScripts(a: string, b: string) {
  return a ? (b ? a + ";" + b : a) : b;
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
    try {
      cb(true);
    } catch (err) {
      // One render's throwing sink must not stall the queue's other renders.
      tick(() => {
        throw err;
      });
    }
  }
}
