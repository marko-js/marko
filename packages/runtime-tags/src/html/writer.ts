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
import { PLACEHOLDER_DISMISS_REGISTER_ID } from "../common/meta";
/* eslint-disable @typescript-eslint/no-this-alias */
import { concat, type Opt, push, reduce } from "../common/opt";
import {
  type $Global,
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type Falsy,
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
  dropMutation,
  hasMatchingMutations,
  pendingReadyChannel,
  type ScopeFlush,
  SerializerState,
  setDebugInfo,
  stringifyScopes,
  takeChannelDeps,
  toAccess,
  toObjectKey,
  writeMutation,
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
export function withContext<T, U, V>(
  key: PropertyKey,
  value: unknown,
  cb: (value: U, value2: V) => T,
  cbValue: U,
  cbValue2: V,
): T;
export function withContext<T, U, V>(
  key: PropertyKey,
  value: unknown,
  cb: (value?: U, value2?: V) => T,
  cbValue?: U,
  cbValue2?: V,
): T {
  const ctx = ($chunk.context ||= { [kPendingContexts]: 0 } as any);
  const prev = ctx[key];
  ctx[kPendingContexts]++;
  ctx[key] = value;
  try {
    return cb(cbValue, cbValue2);
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

export const kBranchId = Symbol("Branch Id");

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

export function withBranchId<T>(branchId: number, cb: () => T): T;
export function withBranchId<T, U>(
  branchId: number,
  cb: (value: U) => T,
  cbValue: U,
): T;
export function withBranchId<T, U, V>(
  branchId: number,
  cb: (value: U, value2: V) => T,
  cbValue: U,
  cbValue2: V,
): T;
export function withBranchId<T, U, V>(
  branchId: number,
  cb: (value?: U, value2?: V) => T,
  cbValue?: U,
  cbValue2?: V,
): T {
  return withContext(kBranchId, branchId, cb, cbValue, cbValue2);
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
  $chunk.boundary.state.queueEffect(scopeId, registryId);
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
  const childScope = writeScopePassive(childScopeId, {
    [AccessorProp.TagVariable]: _resume({}, registryId, parentScopeId),
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
  $chunk.boundary.state.queuePassiveScope(target, scopeId, partialScope);
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
  state.needsMainRuntime = true;
  countResumeWrite($chunk);
  Object.assign(scope, partialScope);

  state.queueScope(target, scopeId, partialScope);
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

function scopeWithId(state: State, scopeId: number) {
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
  resumeId?: string,
  markerGuard?: number,
) {
  if (subscribers) {
    const { boundary, serializeState } = $chunk;
    const { serializer } = boundary.state;
    if (!serializeState.readyId && !serializer.refs.has(subscribers)) {
      // An unflushed set carries its subscriber in the same payload.
      subscribers.add(scope);
    } else if (resumeId) {
      // Its owner resumes first and the client may change the closure before
      // this arrives, so the subscriber applies that and subscribes on resume.
      _script(scope[K_SCOPE_ID]!, resumeId, markerGuard);
    } else {
      // Flushed or lazy sets add subscribers through their gated channel.
      writeMutation(serializer, scope, subscribers, "add", serializeState);
    }
    // Content a `@catch` may drop takes its subscriptions with it.
    if (boundary.withinCatch) {
      (boundary.subscribed ||= []).push(subscribers, scope, serializeState);
    }
  }
  return scope;
}

// A reason: two bits per param-reason group at `1 + 2 * group` (the low
// bit says the group serializes), a keyed object of group values, or none.
export type GroupMask = undefined | number | Partial<Record<string, number>>;

// Every group serializes: for a child whose groups the caller cannot see.
// Bit 0 is never a group's, so no encoded mask equals it.
export const CLIENT_ALL = 0x2aaaaaab;

// A group's 2-bit value. A number packs groups 0-14 (a later group makes the
// reason keyed), except the all sentinel, which covers every group.
export function maskGroup(mask: GroupMask, group: number) {
  return mask === CLIENT_ALL
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

export function _scope_reason() {
  const reason = $chunk.boundary.state.scopeReason;
  $chunk.boundary.state.scopeReason = undefined;
  return reason;
}

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
  const bodyNext = (bodyEnd.next = $chunk = chunk.fork(boundary, chunk.next));
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

// The sections of a caught body are gone, so their closures no longer notify
// them: from a set still to flush directly, else through the set's channel.
function unsubscribe(subscribed: unknown[], serializer: SerializerState) {
  for (let i = 0; i < subscribed.length; i += 3) {
    const subscribers = subscribed[i] as Set<ScopeInternals>;
    const scope = subscribed[i + 1] as ScopeInternals;
    if (!serializer.refs.has(subscribers)) {
      subscribers.delete(scope);
    } else if (!dropMutation(serializer, scope, subscribers, "add")) {
      writeMutation(
        serializer,
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
  public serializer = new SerializerState();
  public writeReorders: Chunk[] | null = null;
  public scopes = new Map<number, ScopeInternals>();
  // A scope by id, for the locals of registered content once it is sent.
  public scope = (scopeId: number) => scopeWithId(this, scopeId);
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

  // Each serialize state only flushes the props it wrote itself; the
  // canonical scope accumulates everything for server side reads.
  queueScope(
    target: SerializeState,
    scopeId: number,
    partialScope: PartialScope,
  ) {
    const pending = target.writeScopes[scopeId];
    if (pending && pending !== partialScope) {
      Object.assign(pending, partialScope);
    } else {
      target.writeScopes[scopeId] = partialScope;
    }
    target.flushScopes = true;
  }

  queuePassiveScope(
    target: SerializeState,
    scopeId: number,
    partialScope: PartialScope,
  ) {
    const passive = (target.passiveScopes ||= {});
    passive[scopeId] = Object.assign(passive[scopeId] || {}, partialScope);
  }

  queueEffect(scopeId: number, registryId: string) {
    this.needsMainRuntime = true;
    $chunk.writeEffect(scopeId, registryId);
  }

  serializeFlush(boundary: Boundary) {
    flushSerializer(boundary, this);
  }

  // Installs the walker runtime and opens this render's data.
  runtimeScript() {
    return (
      WALKER_RUNTIME_CODE +
      '("' +
      this.$global.runtimeId +
      '")("' +
      this.$global.renderId +
      '")'
    );
  }

  // Custom and dynamic tags hide from analysis whether a try's body resumes, so
  // its render decides: an async or resumable body keeps its marks.
  keepsTryMarks(chunk: Chunk, resumeWrites: number) {
    return chunk !== $chunk || chunk.boundary.resumeWrites !== resumeWrites;
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
    if (!this.aborted) {
      this.state.serializeFlush(this);
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
      this.render(withBranchId, placeholderBranchId, placeholder.render) !==
      this
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
      this.render(writeScope, branchId, {
        [AccessorProp.PlaceholderBranch]: scopeWithId(
          state,
          placeholderBranchId,
        ),
      });
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
    let deferredReady: Opt<Chunk>;
    this.heldEffects = null;
    // Lazy content heading the stream, pending again or not, held its earlier
    // effects apart; its own data still goes ahead of the content nested in it.
    if (this.serializeState.readyId && this.effects) followHeldEffects(this);

    while (cur.next && !cur.async) {
      cur.markCatchRange();
      cur.queueDeferredReorder();
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
    cur.html = html + cur.html;
    cur.scripts = concatScripts(scripts, cur.scripts);
    return cur;
  }

  render(content: () => void): Chunk;
  render<T>(content: (val: T) => void, val: T): Chunk;
  render<T, U>(content: (val: T, val2: U) => void, val: T, val2: U): Chunk;
  render<T, U>(content: (val?: T, val2?: U) => void, val?: T, val2?: U): Chunk {
    const prev = $chunk;
    $chunk = this;
    try {
      content(val, val2);
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
      const deps = takeChannelDeps(state.serializer);
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
    const { runtimePrefix } = state;
    let needsWalk = state.walkOnNextFlush;
    if (needsWalk) state.walkOnNextFlush = false;

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
      !boundary.aborted && (channel = pendingReadyChannel(state.serializer));
    ) {
      const resumes = stringifyScopes(state.serializer, [], boundary, channel);
      const deps = takeChannelDeps(state.serializer);
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
      scripts = concatScripts(scripts, state.runtimeScript());
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
  const pending = hasMatchingMutations(serializer, serializeState.readyId);
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
      // Globals become scope 0 so we can reference them as `_(0)`.
      if (globals) flushes.push([0, globals, globals]);
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
      serializeState.resumes = concatSequence(
        serializeState.resumes,
        stringifyScopes(serializer, flushes, boundary, serializeState),
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
      stringifyScopes(state.serializer, [[0, globals, globals]], boundary),
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

function getFilteredGlobals($global: Record<string, unknown>) {
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
