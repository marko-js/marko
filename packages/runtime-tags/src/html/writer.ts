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
import { concat, forEach, type Opt, push } from "../common/opt";
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
import * as ChunkStatus from "./constants/chunk-status";
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

interface SerializeState {
  readyId?: string;
  parent?: SerializeState;
  writeScopes: Record<number, PartialScope>;
  passiveScopes?: Record<number, PartialScope>;
  flushScopes: boolean;
}

type ScopeInternals = PartialScope & {
  [K_SCOPE_ID]?: number;
};

interface Asset {
  html: string;
  scripts: string;
  boundary: Boundary | null;
}

let $chunk: Chunk;
// Set while a pass walks the chunk list, which nothing else may change meanwhile.
let walking = false;

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

// Asset html and scripts load the page's code rather than the content around them,
// so a `@catch` that replaces that content sends them again.
export function writeAssets(html: string) {
  $chunk.writeHTML(html);
  if (html) keepAsset(html, "");
}

export function writeAssetScript(script: string) {
  $chunk.writeScript(script);
  keepAsset("", script);
}

function keepAsset(html: string, scripts: string) {
  const { boundary } = $chunk;
  (boundary.state.assets ||= []).push({ html, scripts, boundary });
}

// Content that resumes apart from its enclosing branch's walk (lazy, async)
// links the scope, unless the section writes a marker the walker places it by.
export function _script(
  scopeId: number,
  registryId: string,
  serializeMarker?: number,
) {
  if (
    serializeMarker === 0 &&
    ($chunk.serializeState.readyId || $chunk.context?.[kIsAsync])
  ) {
    _resume_branch(scopeId);
  }
  $chunk.boundary.state.needsMainRuntime = true;
  $chunk.writeEffect(scopeId, registryId);
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
  const passive = (target.passiveScopes ||= {});
  Object.assign(scope, partialScope);
  passive[scopeId] = Object.assign(passive[scopeId] || {}, partialScope);
  return scope;
}

// `<show>` always renders; hidden ranges use `<t>` so the walker reaches them.
export function _show_start(display: unknown, mark?: unknown) {
  if (display) {
    // The wrapper itself is the range's single node.
    if (mark) {
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
  serializeBranch: undefined | number,
  serializeMarker: undefined | number,
  serializeStateful: undefined | number,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
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

  if (serializeBranch === 0) {
    iterate(0);
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
  const resumeKeys = serializeMarker !== 0;
  const resumeMarker = resumeKeys && (!parentEndTag || serializeStateful !== 0);
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
    serializeStateful,
    serializeMarker,
    parentEndTag,
    singleNode,
    singleNode ? flushBranchIds : flushBranchIds ? " " + flushBranchIds : "",
  );
}

export function _if(
  cb: () => void | number,
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: number,
  serializeMarker?: number,
  serializeStateful?: number,
  parentEndTag?: string | 0,
  singleNode?: 1,
) {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
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
    serializeStateful,
    serializeMarker,
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
      $chunk.writeHTML(mark + endTag);
    } else {
      $chunk.writeHTML(endTag + _el_resume(scopeId, accessor));
    }
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
      assertNotAborted($chunk.boundary);
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
  serializeMarker?: number,
) {
  if (subscribers) {
    const { serializer } = $chunk.boundary.state;
    if (!$chunk.serializeState.readyId && !serializer.written(subscribers)) {
      // An unflushed set carries its subscriber in the same payload.
      subscribers.add(scope);
      // Recorded on each enclosing `<try>` body, for a `@catch` replacing it to undo.
      for (
        let boundary = $chunk.boundary;
        boundary.parent;
        boundary = boundary.parent
      ) {
        (boundary.subscriptions ||= []).push([subscribers, scope]);
      }
    } else if (resumeId) {
      // Its owner resumes first and the client may change the closure before
      // this arrives, so the subscriber applies that and subscribes on resume.
      _script(scope[K_SCOPE_ID]!, resumeId, serializeMarker);
    } else {
      // Flushed or lazy sets add subscribers through their gated channel.
      serializer.writeCall(scope, subscribers, "add", $chunk.serializeState);
    }
  }
  return scope;
}

// A reason: two bits per param-reason group at `1 + 2 * group` (the low
// bit says the group serializes), a keyed object of group values, or none.
export type SerializeReasonValue =
  | undefined
  | number
  | Partial<Record<string, number>>;

// Every group serializes: for a child whose groups the caller cannot see.
// Bit 0 is never a group's, so no encoded mask equals it.
export const CLIENT_ALL = 0x2aaaaaab;

// A group's 2-bit value. A number packs groups 0-14 (a later group makes the
// reason keyed), except the all sentinel, which covers every group.
export function maskGroup(mask: SerializeReasonValue, group: number) {
  return mask === CLIENT_ALL
    ? 1
    : typeof mask === "number"
      ? group < 15
        ? (mask >>> (1 + 2 * group)) & 3
        : 0
      : ((mask as Partial<Record<number, number>>)[group] ?? 0);
}

export function _set_serialize_reason(reason: SerializeReasonValue) {
  $chunk.boundary.state.serializeReason = reason;
}

export function _scope_reason() {
  const reason = $chunk.boundary.state.serializeReason;
  $chunk.boundary.state.serializeReason = undefined;
  return reason;
}

export function _serialize_if(condition: SerializeReasonValue, key: number) {
  return condition && maskGroup(condition, key) ? 1 : undefined;
}

export function _serialize_guard(condition: SerializeReasonValue, key: number) {
  return _serialize_if(condition, key) || 0;
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
    writeScopes: {},
    flushScopes: false,
  });
  // Rendered as part of the content around the tag, so a throw in it ends that
  // render too, as one beside the tag would.
  let bodyEnd: Chunk;
  $chunk = body;
  try {
    renderer(input);
  } finally {
    bodyEnd = $chunk;
    $chunk = chunk;
  }

  if (body === bodyEnd) {
    chunk.writeHTML(body.html);
    chunk.lazyContent = concat(push(chunk.lazyContent, body), body.lazyContent);
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
  serializeMarker?: number,
) {
  const resumeMarker = serializeMarker !== 0;

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
  chunk.status = ChunkStatus.Pending;
  captureContext(chunk);
  boundary.startAsync();
  // Won't fix: a thenable that calls back synchronously settles before a `<try>`
  // waits on it; adopting it through `Promise.resolve` would cost another promise.
  promise.then(
    (value) => {
      const { status } = chunk;
      if (status === ChunkStatus.Pending || status === ChunkStatus.Requeued) {
        // A requeued chunk stays so while it renders, for a pass its abort runs.
        if (status === ChunkStatus.Pending) chunk.status = ChunkStatus.Open;
        if (!boundary.signal.aborted) {
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
        }
        if (status === ChunkStatus.Requeued) settleRequeued(chunk);
        boundary.endAsync();
      }
    },
    (err) => {
      if (chunk.status === ChunkStatus.Pending) chunk.status = ChunkStatus.Open;
      if (chunk.status === ChunkStatus.Requeued) settleRequeued(chunk);
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

  // Custom and dynamic tags hide from analysis whether the body resumes, so its
  // render decides: an async or resumable body keeps its marks, others drop them.
  const rendered = chunk !== $chunk || boundary.resumeWrites !== resumeWrites;
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
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  // Aborts with its parent so a disconnected render strands pending body work;
  // the outer-aborted check in onNext keeps that from firing the catch.
  const catchBoundary = new Boundary(state, boundary.signal, boundary);
  const body = chunk.fork(catchBoundary, null);
  const bodyEnd = body.render(() => withBranchId(branchId, content));

  if (catchBoundary.signal.aborted) {
    // Sync error. The body's already-written scopes stay in the resume payload
    // as dead fills; a `@catch` firing is rare enough not to warrant dropping them.
    if (catchContent) {
      unsubscribeBody(catchBoundary, state.serializer);
      resendAssets(catchBoundary);
      catchContent(catchBoundary.signal.reason);
    } else {
      // Without a `@catch`, the error ends the render around the try, as if
      // thrown there.
      throw catchBoundary.signal.reason;
    }
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
  boundary.startAsync();

  // With a catch, markers let it take the body's place in the stream, and both
  // drop if the body settles first. The start's own chunk shows whether any of
  // the try streamed; the end marker stays last in the body's end chunk.
  const reorderId = catchContent ? state.nextReorderId() : "";
  const endMarker = reorderId && state.mark(Mark.PlaceholderEnd, reorderId);
  const bodyEndHTML = bodyEnd.html;
  let bodyStart = (chunk.next = body);
  if (reorderId) {
    bodyStart = chunk.next = chunk.fork(catchBoundary, body);
    bodyStart.writeHTML(state.mark(Mark.Placeholder, reorderId));
    bodyEnd.writeHTML(endMarker);
    // A body with nothing to send before its first `<await>` holds the in-order
    // stream at its start, so the markers go out only if some of it streams.
    if (sendsNothing(body)) bodyStart.status = ChunkStatus.Gated;
    // The catch renders later, forked from this chunk.
    captureContext(chunk);
  }

  catchBoundary.onNext = () => {
    if (boundary.signal.aborted) return;
    if (catchBoundary.signal.aborted) {
      if (!reorderId) {
        boundary.abort(catchBoundary.signal.reason);
        return;
      }

      unsubscribeBody(catchBoundary, state.serializer);
      resendAssets(catchBoundary);
      const catchChunk = chunk.fork(boundary, null);
      if (!renderersAtSettle) {
        // A rendered `@catch` is not a try, as on the client, so renderers sent
        // before it fired are cleared.
        catchChunk.render(clearTryRenderers, branchId);
      }
      const { count } = boundary;
      catchChunk.render(catchContent!, catchBoundary.signal.reason);
      // A throw in the catch reached the enclosing `<try>`, whose catch cut this one.
      if (boundary.signal.aborted) return;

      if (bodyEnd.status !== ChunkStatus.Streamed && boundary.count === count) {
        // Complete once rendered, the catch takes the body's place in order. Once the
        // start marker streamed, an empty reorder removes what streamed of the body.
        let reorder: Chunk | null = null;
        if (bodyStart.status === ChunkStatus.Streamed) {
          reorder = chunk.fork(boundary, null);
          reorder.reorderId = reorderId;
        }
        bodyEnd.next = catchChunk;
        catchChunk.next = bodyNext;
        bodyStart.truncate(catchChunk, reorder ? endMarker : "", reorder);
      } else {
        // Past the body's end marker, or waiting on content of its own, the catch
        // streams as a reorder, so nothing after it waits.
        catchChunk.reorderId = reorderId;
        if (bodyEnd.status === ChunkStatus.Streamed) {
          queueReorder(catchChunk);
        } else {
          // The reorder replaces the markers' range, so they stream.
          if (bodyStart.status === ChunkStatus.Gated) {
            bodyStart.status = ChunkStatus.Open;
          }
          body.truncate(bodyNext, endMarker, catchChunk);
        }
      }
      boundary.endAsync();
    } else if (!catchBoundary.count) {
      if (renderersAtSettle && catchBoundary.resumeWrites) {
        bodyEnd.render(renderers);
      }
      // Settled before any of it streamed, the body can no longer be caught, so
      // its markers have nothing to mark.
      if (reorderId && bodyStart.status !== ChunkStatus.Streamed) {
        if (MARKO_DEBUG && bodyEnd.html !== bodyEndHTML + endMarker) {
          throw new Error("Content was written after a try body's end marker.");
        }
        bodyStart.html = "";
        bodyEnd.html = bodyEndHTML;
        bodyStart.status = ChunkStatus.Open;
      }
      boundary.endAsync();
    } else {
      // Once its start has something to send, the body may stream while pending.
      if (bodyStart.status === ChunkStatus.Gated && !sendsNothing(body)) {
        bodyStart.status = ChunkStatus.Open;
      }
      boundary.onNext();
    }
  };
  return renderersAtSettle;
}

// Whether the stream has nothing from `chunk` on to send before it waits.
function sendsNothing(chunk: Chunk) {
  for (
    let cur: Chunk | null = chunk;
    cur &&
    !(
      cur.html ||
      cur.scripts ||
      cur.lazyContent ||
      cur.reorders ||
      cur.placeholder
    );
    cur = cur.next
  ) {
    if (cur.status === ChunkStatus.Pending) return true;
  }
  return false;
}

// A body a `@catch` replaced leaves no subscriber for a closure change to reach,
// in the set if it has not streamed yet, else through a call after it.
function unsubscribeBody(catchBoundary: Boundary, serializer: Serializer) {
  const { subscriptions } = catchBoundary;
  if (subscriptions) {
    for (const [subscribers, scope] of subscriptions) {
      if (serializer.written(subscribers)) {
        serializer.writeCall(scope, subscribers, "delete");
      } else {
        subscribers.delete(scope);
      }
    }
  }
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

function clearTryRenderers(branchId: number) {
  writeScope(branchId, {
    [AccessorProp.CatchContent]: 0,
    [AccessorProp.PlaceholderContent]:
      _scope_with_id(branchId)[AccessorProp.PlaceholderContent] && 0,
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
  // Content settling later still owes each enclosing unmarked await its visit,
  // unless its end streamed in a reorder, whose start visit parents it instead.
  for (
    let async = getAsyncContent(chunk);
    async && !async.resumed;
    async = async.parent
  ) {
    async.resumed = true;
    if (async.end && async.end.status !== ChunkStatus.Streamed) {
      async.end.writeHTML(async.visit!);
    }
  }
}

function getAsyncContent(chunk: Chunk) {
  return chunk.context?.[kIsAsync] as AsyncContent | undefined;
}

type ChunkStatus = ChunkStatus.Value;

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
  // Asset html and scripts, each with the boundary whose range holds them; `null`
  // once a `@catch` removed them, until the next pass sends them again past it.
  public assets: Asset[] | null = null;
  public resendsAssets = false;
  public nonceAttr = "";
  public serializer = new Serializer();
  public writeReorders: Chunk[] | null = null;
  // How many of `writeReorders`' first chunks were requeued once their marker
  // streamed to wait on an `<await>`, and how many of those have since settled.
  public requeued = 0;
  public settled = 0;
  // A boundary aborted since the requeued chunks were checked, so some may have stranded.
  public stranded = false;
  public scopes = new Map<number, ScopeInternals>();
  // A scope by id, for the locals of registered content once it is sent.
  public scope = (scopeId: number) => scopeWithId(this, scopeId);
  public flushScopes = false;
  public writeScopes: Record<number, PartialScope> = {};
  public readyIds: Set<string> | null = null;
  public serializeReason: SerializeReasonValue;
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

  // A flush's script, in the order the client runs it: scripts written with its
  // content, runtimes, ready batches, the main resume data, reorders, the walk.
  encode(flush: Flush) {
    const { $global, runtimePrefix } = this;
    let scripts = flush.scripts;

    if (this.needsMainRuntime && !this.hasMainRuntime) {
      this.hasMainRuntime = true;
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

    scripts = concatScripts(scripts, flush.ready);

    if (flush.reorders && !this.hasReorderRuntime) {
      this.hasReorderRuntime = true;
      scripts = concatScripts(
        scripts,
        REORDER_RUNTIME_CODE + "(" + runtimePrefix + ")",
      );
    }

    // A reorder's script pushes its effects into the resume array, so one
    // opens even with nothing to resume yet.
    if (flush.resumes || (flush.reorderEffects && !this.hasWrittenResume)) {
      scripts = concatScripts(
        scripts,
        runtimePrefix +
          RuntimeKey.Resume +
          (this.hasWrittenResume
            ? ".push(" + flush.resumes + ")"
            : "=[" + flush.resumes + "]"),
      );
      this.hasWrittenResume = true;
    }

    // Reordered scripts follow the resume data they push after.
    scripts = concatScripts(scripts, flush.reorderScripts);
    return flush.walk
      ? concatScripts(scripts, runtimePrefix + RuntimeKey.Walk + "()")
      : scripts;
  }

  get runtimePrefix() {
    const { $global } = this;
    return $global.runtimeId + "." + $global.renderId;
  }

  get commentPrefix() {
    const { $global } = this;
    return $global.runtimeId + $global.renderId;
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

// What one flush sends; `State.encode` decides its script.
export class Flush {
  // In-order content, and the scripts written with it.
  public html = "";
  public scripts = "";
  // Lazy parts streamed in order, whose ready batches follow the whole walk.
  public lazy: Opt<Chunk> = null;
  public ready = "";
  // The main stream's resume data, in serialized batches.
  public resumes = "";
  // Reordered content, after the markers it replaces, and its scripts.
  public reorders = "";
  public reorderScripts = "";
  // A reorder's script pushes effects into the main stream's resume data.
  public reorderEffects = false;
  public walk = false;
}

export class Boundary extends AbortController {
  public onNext = NOOP;
  public count = 0;
  // Scope and effect writes under it, so a `<try>` can tell whether anything
  // inside reaches the client.
  public resumeWrites = 0;
  // Closure subscriptions under a `<try>` body, for its `@catch` to undo.
  public subscriptions?: [Set<ScopeInternals>, ScopeInternals][];
  // The boundaries of `<try>` bodies nested in it, which abort with it.
  public nested: Opt<Boundary> = null;
  public readonly state: State;
  public parent?: Boundary;
  constructor(state: State, signal?: AbortSignal, parent?: Boundary) {
    super();
    this.state = state;
    this.parent = parent;
    this.signal.addEventListener("abort", () => {
      this.count = 0;
      this.state.stranded = true;
      // First, so none of them looks live while this boundary's `@catch` renders.
      forEach(this.nested, (nested) => nested.abort(this.signal.reason));
      this.onNext();
    });

    if (signal) {
      if (signal.aborted) {
        this.abort(signal.reason);
      } else if (parent) {
        // A listener each on its signal would scan the others as it was added.
        parent.nested = push(parent.nested, this);
      } else {
        signal.addEventListener("abort", this);
      }
    }
  }

  // Listens on the signal the render was given, so a settled render can detach.
  handleEvent(event: Event) {
    this.abort((event.target as AbortSignal).reason);
  }

  // Serializing waits for the pass that writes, whose caller rechecks `count` after
  // it: a serialized promise adds async work.
  flush() {
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
    if (!this.signal.aborted) {
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
  public status: ChunkStatus = ChunkStatus.Open;
  public reorderId: string | null = null;
  // Lazy content this chunk's html streams, whose ready batches follow its own.
  public lazyContent: Opt<Chunk> = null;
  // Lazy parts streamed before this chunk whose held effects wait on it.
  public heldLazy: Opt<Chunk> = null;
  // Reorders whose markers this chunk streams, queued for the pass that streams it
  // so the client always walks a marker before the reorder that replaces it.
  public reorders: Opt<Chunk> = null;
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
    if (MARKO_DEBUG) {
      assertNotStreamed(this);
      assertNotAborted(this.boundary);
    }
    this.html += html;
  }

  writeEffect(scopeId: number, registryId: string) {
    if (MARKO_DEBUG) assertNotAborted(this.boundary);
    countResumeWrite(this);
    if (this.lastEffect === registryId) {
      this.effects += " " + scopeId;
    } else {
      this.lastEffect = registryId;
      this.effects = concatEffects(this.effects, registryId + " " + scopeId);
    }
  }

  writeScript(script: string) {
    if (MARKO_DEBUG) {
      assertNotStreamed(this);
      assertNotAborted(this.boundary);
    }
    this.scripts = concatScripts(this.scripts, script);
  }

  append(chunk: Chunk) {
    this.html += chunk.html;
    this.effects = concatEffects(this.effects, chunk.effects);
    this.scripts = concatScripts(this.scripts, chunk.scripts);
    this.lastEffect = chunk.lastEffect || this.lastEffect;
    this.lazyContent = concat(this.lazyContent, chunk.lazyContent);
  }

  // Cuts a caught body, this chunk up to `next`, out of the stream: what it holds drops,
  // and it ends at its first unstreamed chunk with the marker `reorder` replaces.
  truncate(next: Chunk | null, endMarker: string, reorder: Chunk | null) {
    if (MARKO_DEBUG) assertNotWalking();
    let cur: Chunk = this;
    let end: Chunk | undefined;
    for (;;) {
      const after = cur.next;
      cur.effects = cur.lastEffect = "";
      if (cur.status !== ChunkStatus.Streamed) {
        if (!end) {
          end = cur;
          cur.status = ChunkStatus.Open;
          cur.next = next;
          cur.html = endMarker;
          cur.scripts = "";
          cur.placeholder = null;
          cur.reorders = reorder;
        }
      }
      cur.heldLazy = cur.lazyContent = null;
      if (after === next) break;
      cur = after!;
    }
  }

  // Renders every `@placeholder` this pass streams, in the order its walk reaches them,
  // and queues the reorders it walks, so no content renders while the walk runs.
  renderPlaceholders(streamsReorders: boolean) {
    const { boundary } = this;
    const { state } = boundary;
    let queued: Chunk[];
    // A `@catch` a placeholder fires cuts the list, so the pass starts over on the rest.
    restart: for (;;) {
      queued = [];
      for (let cur: Chunk = this; ; cur = cur.next!) {
        if (cur.renderPlaceholder()) {
          if (boundary.signal.aborted) return;
          continue restart;
        }
        queueLive(queued, cur.reorders);
        if (
          !cur.next ||
          cur.status === ChunkStatus.Pending ||
          cur.status === ChunkStatus.Gated
        ) {
          break;
        }
      }
      const queue = state.writeReorders;
      if (streamsReorders && queue) {
        // Settled ones queued themselves; the rest are checked only once one may have
        // stranded, or once most have settled and the list is worth compacting.
        if (state.stranded || state.settled * 2 > state.requeued) {
          sweepRequeued(state, queue);
        }
        for (let i = state.requeued; i < queue.length; i++) {
          if (renderReorderPlaceholders(queue[i], queued)) {
            if (boundary.signal.aborted) return;
            continue restart;
          }
        }
      }
      for (let i = 0; streamsReorders && i < queued.length; i++) {
        if (renderReorderPlaceholders(queued[i], queued)) {
          if (boundary.signal.aborted) return;
          continue restart;
        }
      }
      break;
    }
    for (const reorder of queued) queueReorder(reorder);
  }

  // Renders the `@placeholder` of a body still pending, whose reorder then replaces
  // it, or streams a settled body in its place. Returns whether rendering aborted.
  renderPlaceholder() {
    const { placeholder } = this;
    if (!placeholder) return false;
    this.placeholder = null;
    // The body is left for the walk that streams it, after the markers written
    // here, so reorders nested in it queue behind its own.
    const { body } = placeholder;
    let end = body;
    while (end.next && end.status !== ChunkStatus.Pending) end = end.next;

    if (end.status !== ChunkStatus.Pending) {
      end.next = this.next;
      this.next = body;
      return false;
    }

    const { state } = this.boundary;
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
    if (this.boundary.signal.aborted) return true;
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
      end.writeEffect(branchId, PLACEHOLDER_DISMISS_REGISTER_ID);
    }
    this.writeHTML(state.mark(Mark.PlaceholderEnd, reorderId));
    this.reorders = push(this.reorders, body);
    return false;
  }

  // Streams in order up to the first pending chunk, leaving lazy parts for after the
  // walk; runs of effects held before it stay linked, the first heading the next pass.
  consume(flush: Flush) {
    let cur: Chunk = this;
    let run: Chunk = this;
    let head: Chunk | null = null;
    let held: Chunk | null = null;
    let heldParts: Opt<Chunk> = null;
    let html = "";
    let effects = "";
    let scripts = "";
    let lastEffect = "";

    if (MARKO_DEBUG) walking = true;
    while (
      cur.next &&
      cur.status !== ChunkStatus.Pending &&
      cur.status !== ChunkStatus.Gated
    ) {
      // Its reorders were queued for this pass before the walk.
      cur.reorders = null;
      html += cur.html;
      if (!cur.serializeState.readyId) {
        // Entering a `<try>` body holds the run before it apart, so its catch
        // drops only its own; a body streamed through joins the run around it.
        if (!holds(cur, run)) {
          held = run.hold(held, effects, lastEffect, heldParts);
          head ||= held;
          heldParts = null;
          effects = lastEffect = "";
        }
        run = cur;
        effects = concatEffects(effects, cur.effects);
        scripts = concatScripts(scripts, cur.scripts);
        lastEffect = cur.lastEffect || lastEffect;
      }
      const parts = readyParts(cur);
      flush.lazy = concat(flush.lazy, parts);
      heldParts = concat(heldParts, holding(parts));
      cur.status = ChunkStatus.Streamed;
      cur = cur.next;
    }

    cur.reorders = null;
    const gated = cur.status === ChunkStatus.Gated;
    if (gated || cur.status === ChunkStatus.Pending) {
      if (!holds(cur, run)) {
        // Lazy parts the pending chunk encloses (all, at the root) wait on it, so a
        // `@catch` of a body begun in lazy content drops them; the run holds the rest.
        const outside = cur.boundary.parent
          ? heldBy(cur, heldParts, false)
          : null;
        held = run.hold(held, effects, lastEffect, outside);
        head ||= held;
        if (outside) heldParts = heldBy(cur, heldParts, true);
        effects = lastEffect = "";
      }
      if (held) held.next = cur;
      // Held here, a pending chunk keeps what it wrote so far and its lazy
      // content in place, behind the held parts streamed before it.
      const { serializeState } = cur;
      const own =
        serializeState.readyId &&
        (cur.effects || cur.scripts || serializeState.flushScopes)
          ? cur
          : null;
      flush.lazy = concat(
        concat(concat(flush.lazy, cur.heldLazy), own),
        cur.lazyContent,
      );
      cur.heldLazy = concat(heldParts, holding(cur.heldLazy));
      cur.lazyContent = holding(cur.lazyContent);
    } else {
      let released = "";
      for (; head; head = head === held ? null : head.next) {
        released = concatEffects(released, head.effects);
      }
      effects = concatEffects(released, effects);
      flush.lazy = concat(flush.lazy, readyParts(cur));
    }

    cur.effects = concatEffects(effects, cur.effects);
    cur.lastEffect ||= lastEffect;
    head ||= cur;
    if (gated) {
      flush.html = html;
    } else {
      flush.html = html + cur.html;
      cur.html = "";
    }
    if (cur.serializeState.readyId) {
      flush.scripts = scripts;
    } else {
      flush.scripts = concatScripts(scripts, cur.scripts);
      cur.scripts = "";
    }
    const { state } = cur.boundary;
    if (state.resendsAssets) {
      // Past any range a `@catch` replaces, within the one the pass stopped in.
      const boundary = gated ? cur.boundary.parent! : cur.boundary;
      state.resendsAssets = false;
      for (const asset of state.assets!) {
        if (!asset.boundary) {
          asset.boundary = boundary;
          flush.html += asset.html;
          flush.scripts = concatScripts(flush.scripts, asset.scripts);
        }
      }
    }
    if (MARKO_DEBUG) walking = false;
    return head;
  }

  // Streams a reorder into `flush`, walking past each pending chunk to requeue it
  // behind a marker; its lazy parts flush as it passes and its effects form one run.
  flushReorder(head: Chunk, flush: Flush, held: boolean) {
    const { state } = this.boundary;
    let heldParts: Opt<Chunk> = null;
    const { reorderId } = this;
    const readyReservations: string[] = [];
    let reorderHTML = "";
    let reorderEffects = "";
    let reorderLastEffect = "";
    let reorderScripts = "";
    let cur: Chunk = this;
    this.reorderId = null;

    for (;;) {
      const { next } = cur;
      cur.reorders = null;
      const parts = readyParts(cur);
      const readyScripts = flushReadyParts(
        parts,
        flush,
        held,
        readyReservations,
      );
      heldParts = concat(heldParts, holding(parts));
      reorderHTML += cur.html;
      if (!cur.serializeState.readyId) {
        reorderEffects = concatEffects(reorderEffects, cur.effects);
        reorderLastEffect = cur.lastEffect || reorderLastEffect;
      }
      reorderScripts = concatScripts(
        reorderScripts,
        concatScripts(readyScripts, cur.scripts),
      );

      // A pending chunk of an aborted boundary never renders, so it needs no marker.
      if (waits(cur)) {
        reorderHTML += state.mark(
          Mark.ReorderMarker,
          (cur.reorderId = state.nextReorderId()),
        );
        // Waits behind the marker until its `<await>` settles.
        (state.writeReorders ||= []).push(cur);
        cur.html = cur.effects = cur.scripts = cur.lastEffect = "";
        cur.next = null;
        cur.status = ChunkStatus.Requeued;
      } else {
        cur.status = ChunkStatus.Streamed;
      }

      if (next) {
        cur = next;
      } else {
        break;
      }
    }

    if (reorderEffects) {
      if (held) {
        // Content reordered in while in-order content still streams waits
        // with the held run of the boundary it swaps into.
        const holder = heldFor(head, this);
        holder.effects = concatEffects(holder.effects, reorderEffects);
        holder.lastEffect = reorderLastEffect;
      } else {
        flush.reorderEffects = true;
        reorderScripts = concatScripts(
          reorderScripts,
          '_.push("' + reorderEffects + '")',
        );
      }
    }

    for (const reservation of readyReservations) {
      flush.reorderScripts = concatScripts(flush.reorderScripts, reservation);
    }

    flush.reorderScripts = concatScripts(
      flush.reorderScripts,
      reorderScripts &&
        state.runtimePrefix +
          RuntimeKey.Scripts +
          toAccess(reorderId!) +
          "=_=>{" +
          reorderScripts +
          "}",
    );

    flush.reorders +=
      "<t hidden " +
      state.commentPrefix +
      "=" +
      reorderId +
      ">" +
      reorderHTML +
      "</t>";
    return heldParts;
  }

  // Stays linked after `held` to hold a run of effects, and the lazy parts held
  // since the last one, until in-order content completes.
  hold(
    held: Chunk | null,
    effects: string,
    lastEffect: string,
    heldLazy: Opt<Chunk>,
  ) {
    if (held) held.next = this;
    this.html = this.scripts = "";
    this.effects = effects;
    this.lastEffect = lastEffect;
    this.heldLazy = heldLazy;
    return this;
  }

  render(content: () => void): Chunk;
  render<T>(content: (val: T) => void, val: T): Chunk;
  render<T>(content: (val?: T) => void, val?: T): Chunk {
    if (MARKO_DEBUG) {
      assertNotWalking();
      assertNotAborted(this.boundary);
    }
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

  // Streams this lazy part's ready batch: its channel's new resume data and, unless
  // held, its effects, then its scripts. In a reorder it fills a main-stream gate.
  flushReady(flush: Flush, held: boolean, reservations?: string[]) {
    const { boundary, serializeState } = this;
    const { state } = boundary;
    const readyId = serializeState.readyId!;
    let scripts = "";
    const resumes = flushSerializer(boundary, serializeState, flush);
    const deps = state.serializer.takeChannelDeps();
    // A caught body's effects never run, even parts gathered before its catch fired.
    if (boundary.parent && isAborted(boundary)) {
      this.effects = this.lastEffect = "";
    }
    const effects = held ? "" : this.effects;
    const chunkScripts = this.scripts;
    this.scripts = "";
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
        scripts =
          "(b=>b.splice(b.indexOf(" +
          gate +
          "),1," +
          batch +
          "))(" +
          state.readyAccess(toObjectKey(readyId)) +
          ")";
      } else {
        scripts = state.writeReady(readyId, batch);
      }
    }

    return concatScripts(scripts, chunkScripts);
  }

  // Runs on the chunk `consume` returned, always in the render's root boundary:
  // a pass starts there and holds the run before each `<try>` body it enters.
  flushScript(flush: Flush) {
    const { boundary } = this;
    const { state } = boundary;
    // Serialized only in a pass that writes, what rendered since the last one goes
    // out in one batch, ahead of lazy content's.
    flush.resumes = concatSequence(
      flush.resumes,
      flushSerializer(boundary, state, flush),
    );
    let needsWalk = state.walkOnNextFlush;
    if (needsWalk) state.walkOnNextFlush = false;
    // In-order content still pending, where the pass stopped, holds every effect
    // until it completes: its nodes aren't live yet, so nothing on the client may
    // change while it streams.
    const held = !!this.next || this.status === ChunkStatus.Pending;

    // Lazy content's effects wait on in-order content like the rest.
    flush.ready = flushReadyParts(flush.lazy, flush, held);
    // A channel that fails to serialize aborts and stays pending.
    for (
      let channel;
      !boundary.signal.aborted &&
      (channel = state.serializer.pendingReadyChannel());
    ) {
      const resumes = state.serializer.stringifyScopes([], boundary, channel);
      const deps = state.serializer.takeChannelDeps();
      state.needsMainRuntime = true;
      flush.ready = concatScripts(
        flush.ready,
        state.writeReady(
          channel.readyId!,
          concatSequence(depsMarker(deps), resumes),
        ),
      );
    }

    if (flush.ready) {
      needsWalk = true;
    }

    const effects = held ? "" : this.effects;

    if (effects) {
      needsWalk = true;
      flush.resumes = concatSequence(flush.resumes, '"' + effects + '"');
    }

    let heldParts: Opt<Chunk> = null;
    const reorders = state.writeReorders;
    if (reorders) {
      // Chunks requeued in an earlier pass wait at the front; the walk streams the
      // rest, and the ones it requeues wait behind them.
      const { requeued } = state;
      const { length } = reorders;
      if (MARKO_DEBUG) walking = true;
      for (let i = requeued; i < length; i++) {
        heldParts = concat(
          heldParts,
          reorders[i].flushReorder(this, flush, held),
        );
      }
      if (MARKO_DEBUG) walking = false;
      reorders.copyWithin(requeued, length);
      reorders.length = state.requeued = reorders.length - length + requeued;
      if (!reorders.length) state.writeReorders = null;
    }

    if (flush.reorders) {
      needsWalk = true;
    }

    // A reorder's held lazy effects wait with the held run it swaps into.
    forEach(heldParts, (part) => {
      const holder = heldFor(this, part);
      holder.heldLazy = push(holder.heldLazy, part);
    });

    flush.walk = needsWalk;
    if (!held) this.effects = this.lastEffect = "";
    return flush;
  }

  flushHTML(flush: Flush) {
    const { boundary } = this;
    const { state } = boundary;
    this.flushScript(flush);
    return state.flushChunk(
      flush.html + flush.reorders,
      state.encode(flush),
      boundary.count,
    );
  }
}

// Serializes what `serializeState` wrote since it last flushed into a batch, first
// adding the globals it may reference to the main stream's batches in `flush`.
function flushSerializer(
  boundary: Boundary,
  serializeState: SerializeState,
  flush: Flush,
) {
  const { state } = boundary;
  const { serializer } = state;
  const pending = serializer.pending(serializeState);
  let resumes = "";
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
        flushSerializerGlobals(boundary, flush);
      }
      resumes = serializer.stringifyScopes(flushes, boundary, serializeState);
    }
    serializeState.writeScopes = {};
    serializeState.flushScopes = false;
    if (pending) {
      state.walkOnNextFlush = true;
    }
  }
  return resumes;
}

function flushSerializerGlobals(boundary: Boundary, flush: Flush) {
  const { state } = boundary;
  const globals = getFilteredGlobals(state.$global);
  if (globals) {
    state.hasGlobals = true;
    state.needsMainRuntime = true;
    const resumes = state.serializer.stringifyScopes(
      [[0, globals, globals]],
      boundary,
    );
    flush.resumes = concatSequence(flush.resumes, resumes);
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

function queueReorder(chunk: Chunk) {
  if (MARKO_DEBUG) assertNotWalking();
  const { state } = chunk.boundary;
  if (state.writeReorders) {
    state.writeReorders.push(chunk);
  } else {
    state.needsMainRuntime = true;
    state.writeReorders = [chunk];
  }
}

// A `@catch` replaces the range of the body it catches, with the assets that streamed
// there or would have; the next pass sends each again, past it.
function resendAssets(boundary: Boundary) {
  const { state } = boundary;
  for (const asset of state.assets || []) {
    if (asset.boundary && encloses(boundary, asset.boundary)) {
      asset.boundary = null;
      state.resendsAssets = true;
    }
  }
}

// Queues the reorders of a boundary still live; an aborted one's are dead, and no
// marker streamed for them.
function queueLive(queued: Chunk[], reorders: Opt<Chunk>) {
  if (Array.isArray(reorders)) {
    for (const reorder of reorders) queueLive(queued, reorder);
  } else if (reorders && !reorders.boundary.signal.aborted) {
    queued.push(reorders);
  }
}

// Renders the placeholders of a reorder's chain, queuing the reorders it streams.
// Returns whether a render aborted.
function renderReorderPlaceholders(reorder: Chunk, queued: Chunk[]) {
  // What a caught body rendered into its awaits after their markers streamed is
  // cut, but each still streams, as the reorder holding its marker waits on it.
  if (isAborted(reorder.boundary)) {
    reorder.truncate(null, "", null);
    return false;
  }
  for (let cur: Chunk | null = reorder; cur; cur = cur.next) {
    if (cur.renderPlaceholder()) return true;
    queueLive(queued, cur.reorders);
  }
  return false;
}

// A requeued chunk streams in the next pass, unless an `<await>` in what it rendered
// left it pending again, or a pass that rendering ran already swept it.
function settleRequeued(chunk: Chunk) {
  if (chunk.status === ChunkStatus.Pending) {
    chunk.status = ChunkStatus.Requeued;
  } else if (chunk.status === ChunkStatus.Requeued) {
    chunk.status = ChunkStatus.Open;
    chunk.boundary.state.settled++;
    queueReorder(chunk);
  }
}

// Keeps the requeued chunks still waiting at the front of `queue`, and moves those an
// abort left to stream as an empty reorder, which the reorder holding its marker waits on.
function sweepRequeued(state: State, queue: Chunk[]) {
  const { requeued } = state;
  let stranded: Opt<Chunk> = null;
  let waiting = 0;
  for (let i = 0; i < requeued; i++) {
    const chunk = queue[i];
    // Pending only while what it rendered as it settled awaits again.
    if (
      chunk.status !== ChunkStatus.Requeued &&
      chunk.status !== ChunkStatus.Pending
    ) {
      continue;
    }
    if (isAborted(chunk.boundary)) {
      chunk.status = ChunkStatus.Open;
      stranded = push(stranded, chunk);
    } else {
      queue[waiting++] = chunk;
    }
  }
  state.requeued = waiting;
  state.settled = 0;
  state.stranded = false;
  forEach(stranded, (chunk) => (queue[waiting++] = chunk));
  queue.copyWithin(waiting, requeued);
  queue.length -= requeued - waiting;
}

// Whether a chunk a reorder reaches waits behind a marker on its `<await>`, which
// an aborted boundary's never renders.
function waits(chunk: Chunk) {
  return chunk.status === ChunkStatus.Pending && !isAborted(chunk.boundary);
}

function assertNotWalking() {
  if (walking) {
    throw new Error("Cannot render or cut chunks while a pass walks them.");
  }
}

// Content written after its chunk streamed would never be sent.
function assertNotStreamed(chunk: Chunk) {
  if (chunk.status === ChunkStatus.Streamed) {
    throw new Error("Cannot write content into a chunk that already streamed.");
  }
}

// An aborted boundary's content is cut, but what it writes would still reach the
// render's shared state, and through it the client.
function assertNotAborted(boundary: Boundary) {
  if (isAborted(boundary)) {
    throw new Error("Cannot render or write under an aborted boundary.");
  }
}

// Also true while an ancestor's abort is still reaching its descendants.
function isAborted(boundary: Boundary | undefined) {
  while (boundary && !boundary.signal.aborted) boundary = boundary.parent;
  return !!boundary;
}

// Lazy parts streaming with `chunk`: held ones before it, its own, then its lazy
// content's. A reorder requeues a pending chunk, so what it wrote so far splits off.
function readyParts(chunk: Chunk) {
  const { serializeState } = chunk;
  let parts: Opt<Chunk> = chunk.heldLazy;
  if (serializeState.readyId) {
    if (chunk.status !== ChunkStatus.Pending) {
      parts = push(parts, chunk);
    } else if (chunk.effects || chunk.scripts || serializeState.flushScopes) {
      const part = chunk.fork(chunk.boundary, null);
      part.effects = chunk.effects;
      part.scripts = chunk.scripts;
      chunk.effects = chunk.scripts = chunk.lastEffect = "";
      parts = push(parts, part);
    }
  }
  parts = concat(parts, chunk.lazyContent);
  chunk.heldLazy = chunk.lazyContent = null;
  return parts;
}

// Streams each part's ready batch in order; in a reorder, they fill main-stream gates.
function flushReadyParts(
  parts: Opt<Chunk>,
  flush: Flush,
  held: boolean,
  reservations?: string[],
) {
  if (!Array.isArray(parts)) {
    return parts ? parts.flushReady(flush, held, reservations) : "";
  }
  let scripts = "";
  for (const part of parts) {
    scripts = concatScripts(
      scripts,
      part.flushReady(flush, held, reservations),
    );
  }
  return scripts;
}

// The parts still holding effects.
function holding(parts: Opt<Chunk>) {
  let held: Opt<Chunk> = null;
  if (Array.isArray(parts)) {
    for (const part of parts) {
      if (part.effects) held = push(held, part);
    }
  } else if (parts && parts.effects) {
    held = parts;
  }
  return held;
}

// The last held chunk that may hold `chunk`'s effects.
function heldFor(head: Chunk, chunk: Chunk) {
  let held = head;
  for (let cur = head; cur.status !== ChunkStatus.Pending;) {
    cur = cur.next!;
    if (holds(cur, chunk)) held = cur;
  }
  return held;
}

// The parts `holder` holds, or the ones it doesn't.
function heldBy(holder: Chunk, parts: Opt<Chunk>, held: boolean) {
  let result: Opt<Chunk> = null;
  if (Array.isArray(parts)) {
    for (const part of parts) {
      if (holds(holder, part) === held) result = push(result, part);
    }
  } else if (parts && holds(holder, parts) === held) {
    result = parts;
  }
  return result;
}

// Whether `holder` may hold `chunk`'s effects: within its boundary, so a caught
// `<try>` drops them only with its body; main-stream effects never wait in lazy content.
function holds(holder: Chunk, chunk: Chunk) {
  return (
    (chunk.serializeState.readyId || !holder.serializeState.readyId) &&
    encloses(holder.boundary, chunk.boundary)
  );
}

function encloses(boundary: Boundary, inner: Boundary | undefined) {
  while (inner && inner !== boundary) inner = inner.parent;
  return inner === boundary;
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
