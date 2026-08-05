import {
  _el_read_error,
  _hoist_read_error,
  assertValidLoopKey,
} from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import {
  isPromise,
  normalizeAttrValue,
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
  PatchKey,
  ResumeSymbol,
} from "../common/types";
import { RendererProp } from "../common/types";
import { attrAssignment } from "./attrs";
import * as FlushStatus from "./constants/flush-status";
import * as Mark from "./constants/mark";
import * as RuntimeKey from "./constants/runtime-key";
import { _escape, _to_text, _unescaped } from "./content";
import { forInBy, forOfBy, forStepBy } from "./for";
import {
  REORDER_RUNTIME_CODE,
  WALKER_RUNTIME_CODE,
} from "./inlined-runtimes.debug";
import {
  K_SCOPE_ID,
  quote,
  getRegistered,
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

// Patch rendering (persisted pages) intercepts branch writes; registered by
// the patch entry so normal SSR bundles carry none of it.
export let onWriteBranch:
  | ((
      scopeId: number,
      accessor: Accessor,
      cb: () => number | undefined | void,
      shellIds?: string[],
    ) => 1 | void)
  | undefined;
export const _patch_branch_writes = (
  handler: NonNullable<typeof onWriteBranch>,
) => (onWriteBranch = handler);
export let onWriteLoop:
  | ((
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
    ) => 1 | void)
  | undefined;
export const _patch_loop_writes = (handler: NonNullable<typeof onWriteLoop>) =>
  (onWriteLoop = handler);

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

const kBranchId = Symbol("Branch Id");

const kIsAsync = Symbol("Is Async");

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

function withIsAsync<T, U>(cb: (value: U) => T, value: U): T {
  return withContext(kIsAsync, true, cb, value);
}

export function _html(html: string) {
  $chunk.writeHTML(html);
}

export function writeScript(script: string) {
  $chunk.writeScript(script);
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
): T {
  return serializerRegister(
    id,
    val,
    scopeId === undefined ? undefined : _scope_with_id(scopeId),
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

// Structural patch entries hold their child partial objects, so the root
// partial IS the frame tree and one ordinary serializer flush emits it.
export function writePatch(scopeId: number, entries: Record<string, unknown>) {
  if (MARKO_DEBUG && $chunk.boundary.state.patchFlushed) {
    throw new Error(
      "A persisted patch cannot write after its frame flushed (async patch content is not supported).",
    );
  }
  const partial = patchPartial($chunk.boundary.state, scopeId);
  for (const key in entries) {
    // `undefined` survives to the wire (`$`): it overwrites, never elides.
    partial[key] = entries[key];
  }
}

export function patchPartial(state: State, scopeId: number) {
  const partials = (state.patchPartials ??= {});
  let partial = partials[scopeId];
  if (!partial) {
    partial = partials[scopeId] = {};
    const pending = state.patchPending?.[scopeId];
    if (pending) {
      // A child scope links into its parent's entry only on its first
      // write, so an untouched child subtree never reaches the wire.
      writePatch(pending[0], { [pending[1]]: partial });
    } else if (scopeId === state.rootScopeId) {
      // Every other partial reaches the wire nested inside a structural
      // entry of an ancestor, rooted here (`writeScope` is patch-inert, so
      // the root also registers with the serialize state directly).
      writeScope(scopeId, partial);
      $chunk.serializeState.writeScopes[scopeId] = partial;
      $chunk.serializeState.flushScopes = true;
    }
  }
  return partial;
}

export function _patch_attr(
  scopeId: number,
  accessor: Accessor,
  name: string,
  value: unknown,
) {
  const { state } = $chunk.boundary;
  if (state.writesPatches) {
    // `0` is the removal sentinel: normalized values are always strings and
    // `undefined` entries are dropped entirely.
    writePatch(scopeId, {
      [PatchKey.Attr + accessor + " " + name]: normalizeAttrValue(value) ?? 0,
    });
  } else {
    $chunk.needsWalk = true;
  }

  return "";
}

// Links a child scope into its parent's entry: immediately when already
// written (tag-variable children render first), else on its first write.
export function _patch_child(
  scopeId: number,
  accessor: Accessor,
  childScopeId: number,
) {
  const { state } = $chunk.boundary;
  if (state.writesPatches) {
    (state.patchParents ??= {})[childScopeId] = [scopeId, accessor];
    const partial = state.patchPartials?.[childScopeId];
    if (partial) {
      writePatch(scopeId, {
        [PatchKey.Child + accessor]: partial,
      });
    } else {
      (state.patchPending ??= {})[childScopeId] = [
        scopeId,
        PatchKey.Child + accessor,
      ];
    }
  }
}

// Emitted as the scope reason's complement (`$reason || _patch_value(...)`):
// a page render serializes the value through the reason-gated scope write,
// so only a patch (the falsy persisted reason) ever reaches here.
export function _patch_value(
  scopeId: number,
  key: string,
  value: unknown,
  fresh?: 1,
) {
  if ($chunk.boundary.state.writesPatches) {
    if (fresh) {
      if (MARKO_DEBUG && $chunk.boundary.state.patchFlushed) {
        throw new Error(
          "A persisted patch cannot write after its frame flushed (async patch content is not supported).",
        );
      }
      // Fresh entries nest under `f`: the client applies them only to
      // freshly constructed scopes, via the shell content's setup.
      const partial = patchPartial($chunk.boundary.state, scopeId);
      ((partial[PatchKey.Fresh] ??= {}) as Record<string, unknown>)[
        PatchKey.Value + key
      ] = value;
    } else {
      writePatch(scopeId, {
        [PatchKey.Value + key]: value,
      });
    }
  }
  return "";
}

// A control entry: the kind (a `ControlledType` digit) rides the key
// ahead of the node accessor, and the kind's registered helper applies
// the value against the frame's final handler slot.
export function _patch_control(
  scopeId: number,
  accessor: Accessor,
  type: number,
  value: unknown,
) {
  if ($chunk.boundary.state.writesPatches) {
    writePatch(scopeId, { [PatchKey.Control + type + accessor]: value });
  }
  return "";
}

// Handler wiring: a scope-bound registration ships as a bind entry, any
// other value rides the construct seeds as a plain write.
export function _patch_bind(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
) {
  const { state } = $chunk.boundary;
  if (state.writesPatches) {
    const registered = !!value && getRegistered(value as WeakKey);
    const bound =
      registered && (registered.scope as ScopeInternals | undefined);
    if (bound) {
      // A scope-bound registration installs the way CSR setup does: the
      // entry anchors at the scope this instance was registered against
      // and names the child-link path down to the slot, so the factory
      // receives its own live scope. A target the bound scope cannot
      // reach through recorded links poisons (`0`): reject, never
      // install a silently broken handler.
      const boundId = bound[K_SCOPE_ID]!;
      let depth = 0;
      let cur: number | undefined = scopeId;
      let link;
      while (cur !== undefined && cur !== boundId) {
        link = state.patchParents?.[cur];
        if (!link?.[1]) {
          cur = undefined;
        } else {
          depth++;
          cur = link[0];
        }
      }
      let entry: 0 | unknown[] = 0;
      if (cur !== undefined) {
        entry = new Array(depth + 2);
        entry[0] = registered.id;
        entry[depth + 1] = accessor;
        for (let i = depth, scope = scopeId; i; i--) {
          link = state.patchParents![scope]!;
          entry[i] = link[1];
          scope = link[0];
        }
      }
      writePatch(cur ?? scopeId, {
        [PatchKey.Bind + (state.patchBinds = (state.patchBinds || 0) + 1)]:
          entry,
      });
    } else {
      // Both forms where a construct is possible: the plain write reaches
      // PAIRED scopes (a handler removed between frames clears its live
      // slot), while the fresh entry lands after a construct's seeds — a
      // seed's first-render write resets the change slot, so walk-time
      // installs cannot last.
      const partial = patchPartial(state, scopeId);
      partial[PatchKey.Write + accessor] = value;
      if (isInResumedBranch()) {
        ((partial[PatchKey.Fresh] ??= {}) as Record<string, unknown>)[
          PatchKey.Write + accessor
        ] = value;
      }
    }
  }
  return "";
}

// A patched scope write: fresh entries nest under `f` AFTER the seeds, so
// a controllable seed cannot clobber its handler.
export function _patch_write(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
  fresh?: 1,
) {
  if ($chunk.boundary.state.writesPatches) {
    if (fresh) {
      const partial = patchPartial($chunk.boundary.state, scopeId);
      ((partial[PatchKey.Fresh] ??= {}) as Record<string, unknown>)[
        PatchKey.Write + accessor
      ] = value;
    } else {
      writePatch(scopeId, {
        [PatchKey.Write + accessor]: value,
      });
    }
  }
  return "";
}

export function _patch_effect(
  scopeId: number,
  registerId: string,
  accessors: string,
) {
  if ($chunk.boundary.state.writesPatches) {
    writePatch(scopeId, {
      [PatchKey.Effect + registerId]: accessors,
    });
  }
  return "";
}

export function _patch_text(
  scopeId: number,
  accessor: Accessor,
  value: unknown,
) {
  const { state } = $chunk.boundary;
  if (state.writesPatches) {
    writePatch(scopeId, {
      [PatchKey.Text + accessor]: _to_text(value),
    });
  } else {
    $chunk.needsWalk = true;
  }

  return "";
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
  const scope = scopeWithId($chunk.boundary.state, scopeId);
  Object.assign(scope, partialScope);
  // Passive resume props never ride a patch (see `writeScope`).
  if ($chunk.boundary.state.writesPatches) return scope;
  const passive = (target.passiveScopes ||= {});
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
  shellId?: string | 0,
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
    shellId,
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
  shellId?: string | 0,
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
    shellId,
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
  shellId?: string | 0,
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
    shellId,
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
  shellId?: string | 0,
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
    shellId,
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
  shellId?: string | 0,
) {
  if (
    onWriteLoop?.(
      iterate as Parameters<typeof onWriteLoop>[0],
      scopeId,
      accessor,
      shellId,
    )
  )
    return;
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
  const resumeKeys = serializeMarker !== 0;
  const resumeMarker = resumeKeys && (!parentEndTag || serializeStateful !== 0);
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
  shellIds?: string[],
) {
  if (onWriteBranch?.(scopeId, accessor, cb, shellIds)) return;
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
      // TODO: Write the renderer only for stateful conditions or direct closures.
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
  countResumeWrite($chunk.boundary);
  Object.assign(scope, partialScope);

  // Nothing ever resumes a patch's output, so resume writes stop at the
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
  return $chunk.boundary.state.scopeRef(scopeId);
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
) {
  if (subscribers) {
    const { serializer } = $chunk.boundary.state;
    if (!$chunk.serializeState.readyId && !serializer.written(subscribers)) {
      // An unflushed set carries its subscriber in the same payload.
      subscribers.add(scope);
    } else {
      // Flushed or lazy sets add subscribers through their gated channel.
      serializer.writeCall(scope, subscribers, "add", $chunk.serializeState);
    }
  }
  return scope;
}

// A reason is 1, empty, an offset group bitmask, or a keyed dynamic guard.
export type SerializeReasonValue =
  | undefined
  | number
  | Partial<Record<string, 0 | 1>>;

export function _set_serialize_reason(reason: SerializeReasonValue) {
  $chunk.boundary.state.serializeReason = reason;
}

// Compiled into persisted templates in place of `_scope_reason`: a page
// render serializes everything while a patch serializes nothing beyond its
// own fills.
export function _persisted_reason() {
  const { state } = $chunk.boundary;
  state.serializeReason = undefined;
  if (state.writesPatches) {
    // The first persisted template of the render is the page root, about to
    // allocate the next id — the frame names it as the walk's entry pair.
    if (!state.rootScopeId) {
      state.rootScopeId = _peek_scope_id();
      // Globals re-ship with every frame (undefined included) so the live
      // page's global object never reads stale.
      const globals = getFilteredGlobals(state.$global, 1);
      if (globals) {
        patchPartial(state, state.rootScopeId)[PatchKey.Globals] = globals;
      }
    }
    return undefined;
  }
  return 1;
}

export function _scope_reason() {
  const reason = $chunk.boundary.state.serializeReason;
  $chunk.boundary.state.serializeReason = undefined;
  return reason;
}

export function _serialize_if(condition: SerializeReasonValue, key: number) {
  return condition &&
    (condition === 1 ||
      (typeof condition === "number"
        ? (condition >>> (key + 1)) & 1
        : condition[key]))
    ? 1
    : undefined;
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
    resumes: "",
    writeScopes: {},
    flushScopes: false,
  });
  const bodyEnd = body.render(renderer, input);

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
            if (resumeMarker) {
              const branchId = _peek_scope_id();
              $chunk.writeHTML(
                $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
              );
              withBranchId(branchId, () => withIsAsync(content, value));
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
) {
  const catchContent = input.catch
    ? (normalizeDynamicRenderer(input.catch) as ServerRenderer | undefined) || 0
    : undefined;
  const placeholderContent = normalizeDynamicRenderer(input.placeholder) as
    | ServerRenderer
    | undefined;
  // The placeholder's branch id precedes the body's so the walker parents it
  // to the try's enclosing branch (a sibling of the try), as CSR does.
  const placeholderBranchId = placeholderContent ? _scope_id() : 0;
  const branchId = _peek_scope_id();
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  const { resumeWrites } = boundary;
  const beforeBranch = deferBranchStart(chunk);
  // Whether `tryBoundary` writes the catch and placeholder renderers itself
  // once the body settles.
  let renderersAtSettle = false;

  if (catchContent !== undefined || placeholderContent) {
    renderersAtSettle = tryBoundary(
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
      placeholderContent,
      branchId,
    );
  } else {
    withBranchId(branchId, content);
  }

  // An async body's start mark has already streamed and must pair with an end;
  // a sync body that wrote nothing resumable keeps the boundary off the wire.
  const rendered = chunk !== $chunk || boundary.resumeWrites !== resumeWrites;
  applyBranchStart(chunk, beforeBranch, rendered);
  if (!rendered) return;

  if (!renderersAtSettle) {
    writeTryRenderers(branchId, catchContent, placeholderContent);
  }
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
  catchContent: ServerRenderer | 0 | undefined,
  placeholderContent: ServerRenderer | undefined,
  branchId: number,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  // Shares the parent's signal so a disconnected render strands pending body
  // work; the outer-aborted check in onNext keeps that from firing the catch.
  const catchBoundary = new Boundary(state, boundary.signal, boundary);
  const body = chunk.fork(catchBoundary, null);
  const bodyEnd = withBranchId(branchId, () => body.render(content));

  if (catchBoundary.signal.aborted) {
    // Sync error. The body's already-written scopes stay in the resume payload
    // as dead fills; a `@catch` firing is rare enough not to warrant dropping them.
    if (catchContent === undefined) {
      boundary.abort(catchBoundary.signal.reason);
    } else if (catchContent) {
      catchContent(catchBoundary.signal.reason);
    }
    return false;
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

  // With a catch, markers let it take the body's place in the stream.
  const reorderId = catchContent === undefined ? "" : state.nextReorderId();
  const endMarker = reorderId && state.mark(Mark.PlaceholderEnd, reorderId);
  if (reorderId) {
    chunk.writeHTML(state.mark(Mark.Placeholder, reorderId));
    bodyEnd.writeHTML(endMarker);
  }

  catchBoundary.onNext = () => {
    if (boundary.signal.aborted) return;
    if (catchBoundary.signal.aborted) {
      if (!reorderId) {
        boundary.abort(catchBoundary.signal.reason);
        return;
      }

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
      const { resumeWrites } = boundary;
      catchChunk.reorderId = reorderId;
      // The body is discarded, so only a catch that itself resumes needs them.
      if (
        (catchChunk.render(
          catchContent || NOOP,
          catchBoundary.signal.reason,
        ) !== catchChunk ||
          boundary.resumeWrites !== resumeWrites) &&
        renderersAtSettle
      ) {
        catchChunk.render(() =>
          writeTryRenderers(branchId, catchContent, placeholderContent),
        );
      }
      state.reorder(catchChunk);
      boundary.endAsync();
    } else if (!catchBoundary.count) {
      if (renderersAtSettle && catchBoundary.resumeWrites) {
        bodyEnd.render(() =>
          writeTryRenderers(branchId, catchContent, placeholderContent),
        );
      }
      boundary.endAsync();
    } else {
      boundary.onNext();
    }
  };
  return renderersAtSettle;
}

function writeTryRenderers(
  branchId: number,
  catchContent: ServerRenderer | 0 | undefined,
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
function countResumeWrite(boundary: Boundary | undefined) {
  for (; boundary; boundary = boundary.parent) boundary.resumeWrites++;
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
  public serializer = new Serializer();
  declare writesPatches?: boolean;
  declare rootScopeId?: number;
  declare patchPartials?: Record<number, Record<string, unknown>>;
  declare patchBinds?: number;
  declare patchParents?: Record<number, [parentScopeId: number, link: string]>;
  declare patchPending?: Record<number, [parentScopeId: number, key: string]>;
  declare patchFlushed?: 1;
  declare patchDeferred?: 1;
  public writeReorders: Chunk[] | null = null;
  public scopes = new Map<number, ScopeInternals>();
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

  walkScript() {
    return this.runtimePrefix + RuntimeKey.Walk + "()";
  }

  resumeScript(resumes: string) {
    if (this.hasWrittenResume) {
      return this.runtimePrefix + RuntimeKey.Resume + ".push(" + resumes + ")";
    }
    this.hasWrittenResume = true;
    return this.runtimePrefix + RuntimeKey.Resume + "=[" + resumes + "]";
  }

  scopeRef(scopeId: number): ScopeInternals | undefined {
    return scopeWithId(this, scopeId);
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

export class Boundary extends AbortController {
  public onNext = NOOP;
  public count = 0;
  // Scope and effect writes under it, so a `<try>` can tell whether anything
  // inside reaches the client.
  public resumeWrites = 0;
  public state: State;
  public parent?: Boundary;
  constructor(state: State, signal?: AbortSignal, parent?: Boundary) {
    super();
    this.state = state;
    this.parent = parent;
    this.signal.addEventListener("abort", () => {
      this.count = 0;
      this.state = new State(this.state.$global);
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
  public async = false;
  public consumed = false;
  public needsWalk = false;
  public reorderId: string | null = null;
  public deferredReady: Opt<Chunk> = null;
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
    // page resumed, and a fresh construct attaches its shell's.
    if (this.boundary.state.writesPatches) return;
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
      // Own resume data precedes nested lazy content that may reference it.
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

      if (body.async) {
        const { state } = this.boundary;
        const { branchId, scopeId, placeholderBranchId } = placeholder;
        const reorderId = (body.reorderId = branchId
          ? branchId + ""
          : state.nextReorderId());
        this.writeHTML(state.mark(Mark.Placeholder, reorderId));
        const { effects } = this;
        const beforeBranch = deferBranchStart(this);
        const after = this.render(() =>
          withBranchId(placeholderBranchId, placeholder.render),
        );
        // A placeholder with effects is a branch like the body: live while
        // the body streams, destroyed when the reorder swaps it in.
        const stateful = after === this && this.effects !== effects;
        applyBranchStart(this, beforeBranch, stateful);
        if (after !== this) {
          // TODO: eventually this should be allowed.
          // Once it's allowed we'll need check if placeholder needs to be disposed once body complete.
          this.boundary.abort(
            new Error("An @placeholder cannot contain async content."),
          );
        } else if (stateful) {
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
          body.writeEffect(branchId, PLACEHOLDER_DISMISS_REGISTER_ID);
        }
        this.writeHTML(state.mark(Mark.PlaceholderEnd, reorderId));
        state.reorder(body);
      } else {
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
    let scripts = "";
    forEach(this.takeDeferredReady(), (chunk) => {
      scripts = concatScripts(scripts, chunk.flushReadyScripts(reservations));
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

  flushScript() {
    const { boundary } = this;
    const { state } = boundary;
    const { $global, runtimePrefix } = state;
    let needsWalk = state.walkOnNextFlush;
    if (needsWalk) state.walkOnNextFlush = false;

    let readyResumeScripts = this.flushReadyScripts();
    for (let channel; (channel = state.serializer.pendingReadyChannel());) {
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

    // A chunk blocked on in-order async content holds its effects until it
    // completes: running them now could update scopes whose nodes aren't live.
    const effects = this.async ? "" : this.effects;
    let { html, scripts } = this;

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
            REORDER_RUNTIME_CODE + "(" + runtimePrefix + ")",
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
          // Reorder-ready batches fill slots reserved by the main stream.
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
          needsResumeArray = true;
          reorderScripts = concatScripts(
            reorderScripts,
            '_.push("' + reorderEffects + '")',
          );
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
          reorderHTML +
          "</t>";
      }

      state.writeReorders = carried;
    }

    // Placeholders render during this pass; their scopes go out with it.
    flushSerializer(boundary, state);
    if (state.resumes) {
      if (state.hasWrittenResume) {
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
    } else if (needsResumeArray && !state.hasWrittenResume) {
      // A reordered chunk's script pushes its effects into the resume array.
      state.hasWrittenResume = true;
      scripts = concatScripts(
        scripts,
        runtimePrefix + RuntimeKey.Resume + "=[]",
      );
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

  flushHTML() {
    const { boundary } = this;
    const { state } = boundary;
    if (this.needsWalk) {
      this.needsWalk = false;
      state.walkOnNextFlush = true;
    }

    this.flushScript();
    const { html, scripts } = this;
    this.html = this.scripts = "";
    return state.flushChunk(html, scripts, boundary.count);
  }
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
        // Globals serialize before ready data that may reference them.
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

// `all` keeps undefined-valued keys: a patch must overwrite them, where a
// resume elides.
function getFilteredGlobals($global: Record<string, unknown>, all?: 1) {
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
      if (all || value !== undefined) {
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
        if (all || value !== undefined) {
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
