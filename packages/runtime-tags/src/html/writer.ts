/* eslint-disable @typescript-eslint/no-this-alias */
import { _el_read_error, _hoist_read_error } from "../common/errors";
import { forIn, forOf, forTo, forUntil } from "../common/for";
import { normalizeDynamicRenderer } from "../common/helpers";
import { type Opt, push } from "../common/opt";
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
import { forInBy, forOfBy, forStepBy } from "./for";
import {
  REORDER_RUNTIME_CODE,
  WALKER_RUNTIME_CODE,
} from "./inlined-runtimes.debug";
import {
  register as serializerRegister,
  Serializer,
  setDebugInfo,
  toAccess,
  toObjectKey,
} from "./serializer";
import type { ServerRenderer } from "./template";

export type PartialScope = Record<Accessor, unknown>;
type DeferredResume = Chunk | Chunk[];

interface SerializeState {
  readyId?: string;
  scopes: Map<number, ScopeInternals>;
  lastSerializedScopeId: number;
  resumes: string;
  writeScopes: Record<number, PartialScope>;
  flushScopes: boolean;
}

type ScopeInternals = PartialScope & {
  [K_SCOPE_ID]?: number;
  [K_SCOPE_REFERENCED]?: 1;
};

let $chunk: Chunk;
const NOOP = () => {};
const K_SCOPE_ID = Symbol("Scope ID");
const K_SCOPE_REFERENCED = Symbol("Scope Referenced");

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
  $chunk.writeScript(script);
}

export function writeWaitReady(
  readyId: string,
  renderer: ServerRenderer,
  input: unknown,
) {
  return $chunk.renderWaitReady(readyId, renderer, input);
}

export function _script(scopeId: number, registryId: string) {
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
  serializeReason?: 1 | 0,
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
        [AccessorPrefix.BranchScopes + nodeAccessor]: referenceScope(
          writeScope(branchId, {}),
        ),
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
  _scope_with_id(parentScopeId)[scopeOffsetAccessor] = _scope_id();
  // TODO: if the return value is already registered, use that.
  const childScope = _scope_with_id(childScopeId);
  childScope[AccessorProp.TagVariable] = _resume({}, registryId, parentScopeId);
  if (nodeAccessor !== undefined) {
    writeScope(parentScopeId, {
      [AccessorPrefix.BranchScopes + nodeAccessor]: childScope,
    });
  }
}

export function _resume<T extends WeakKey>(
  val: T,
  id: string,
  scopeId?: number,
): T {
  return scopeId === undefined
    ? serializerRegister(id, val)
    : $chunk.boundary.state.serializer.register(
        id,
        val,
        _scope_with_id(scopeId),
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

export function _set_serialize_reason(reason: undefined | 0 | 1) {
  $chunk.boundary.state.serializeReason = reason;
}

export function _scope_reason() {
  const reason = $chunk.boundary.state.serializeReason;
  $chunk.boundary.state.serializeReason = undefined;
  return reason;
}

export function _serialize_if(
  condition: undefined | 1 | Record<string, 1>,
  key: string,
) {
  return condition && (condition === 1 || condition[key]) ? 1 : undefined;
}

export function _serialize_guard(
  condition: undefined | 1 | Record<string, 1>,
  key: string,
) {
  return condition && (condition === 1 || condition[key]) ? 1 : 0;
}

export function _el_resume(
  scopeId: number,
  accessor: Accessor,
  shouldResume?: 0 | 1,
) {
  if (shouldResume === 0) return "";

  const { state } = $chunk.boundary;
  state.needsMainRuntime = true;
  return state.mark(ResumeSymbol.Node, scopeId + " " + accessor);
}

export function _sep(shouldResume: 0 | 1) {
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
  if (branchId !== undefined && branchId !== scopeId) {
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

export function _for_of(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  by: Falsy | ((item: unknown, index: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  serializeStateful?: 0 | 1,
  parentEndTag?: string | 0,
  singleNode?: 1,
): void {
  const { state } = $chunk.boundary;
  const resumeKeys = serializeMarker !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
  let flushBranchIds = "";

  if (serializeBranch !== 0) {
    let loopScopes: Opt<ScopeInternals>;
    if (MARKO_DEBUG) {
      // eslint-disable-next-line no-var
      var seenKeys = new Set<unknown>();
    }
    forOf(list, (item, index) => {
      const branchId = _peek_scope_id();
      const itemKey = forOfBy(by, item, index);
      if (MARKO_DEBUG) {
        if (by) {
          if (seenKeys.has(itemKey)) {
            console.error(
              `A <for> tag's \`by\` attribute must return a unique value for each item, but a duplicate was found matching:`,
              itemKey,
            );
          }
          seenKeys.add(itemKey);
        }
      }
      if (resumeMarker) {
        if (singleNode) {
          flushBranchIds = " " + branchId + flushBranchIds;
        } else {
          $chunk.writeHTML(
            state.mark(ResumeSymbol.BranchStart, flushBranchIds),
          );
          flushBranchIds = branchId + "";
        }
      }

      withBranchId(branchId, () => {
        cb(item, index);
        const branchScope = writeScope(branchId, {});
        if (resumeKeys && itemKey !== index) {
          branchScope[AccessorProp.LoopKey] = itemKey;
        }
        if (!resumeMarker) {
          loopScopes = push(loopScopes, referenceScope(branchScope));
        }
      });
    });

    if (loopScopes) {
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + accessor]: loopScopes,
      });
    }
  } else {
    forOf(list, cb);
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

export function _for_in(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  by: Falsy | ((key: string, v: unknown) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  serializeStateful?: 0 | 1,
  parentEndTag?: string | 0,
  singleNode?: 1,
): void {
  const { state } = $chunk.boundary;
  const resumeKeys = serializeMarker !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
  let flushBranchIds = "";

  if (serializeBranch !== 0) {
    let loopScopes: Opt<ScopeInternals>;
    if (MARKO_DEBUG) {
      // eslint-disable-next-line no-var
      var seenKeys = new Set<unknown>();
    }
    forIn(obj, (key, value) => {
      const branchId = _peek_scope_id();
      const itemKey = forInBy(by, key, value);
      if (MARKO_DEBUG) {
        if (by) {
          if (seenKeys.has(itemKey)) {
            console.error(
              `A <for> tag's \`by\` attribute must return a unique value for each item, but a duplicate was found matching:`,
              itemKey,
            );
          }
          seenKeys.add(itemKey);
        }
      }
      if (resumeMarker) {
        if (singleNode) {
          flushBranchIds = " " + branchId + flushBranchIds;
        } else {
          $chunk.writeHTML(
            state.mark(ResumeSymbol.BranchStart, flushBranchIds),
          );
          flushBranchIds = branchId + "";
        }
      }

      withBranchId(branchId, () => {
        cb(key, value);
        const branchScope = writeScope(branchId, {});
        if (resumeKeys) {
          branchScope[AccessorProp.LoopKey] = itemKey;
        }
        if (!resumeMarker) {
          loopScopes = push(loopScopes, referenceScope(branchScope));
        }
      });
    });

    if (loopScopes) {
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + accessor]: loopScopes,
      });
    }
  } else {
    forIn(obj, cb);
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

export function _for_to(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  serializeStateful?: 0 | 1,
  parentEndTag?: string | 0,
  singleNode?: 1,
): void {
  const { state } = $chunk.boundary;
  const resumeKeys = serializeMarker !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
  let flushBranchIds = "";

  if (serializeBranch !== 0) {
    let loopScopes: Opt<ScopeInternals>;
    if (MARKO_DEBUG) {
      // eslint-disable-next-line no-var
      var seenKeys = new Set<unknown>();
    }
    forTo(to, from, step, (i) => {
      const branchId = _peek_scope_id();
      const itemKey = forStepBy(by, i);
      if (MARKO_DEBUG) {
        if (by) {
          if (seenKeys.has(itemKey)) {
            console.error(
              `A <for> tag's \`by\` attribute must return a unique value for each item, but a duplicate was found matching:`,
              itemKey,
            );
          }
          seenKeys.add(itemKey);
        }
      }
      if (resumeMarker) {
        if (singleNode) {
          flushBranchIds = " " + branchId + flushBranchIds;
        } else {
          $chunk.writeHTML(
            state.mark(ResumeSymbol.BranchStart, flushBranchIds),
          );
          flushBranchIds = branchId + "";
        }
      }

      withBranchId(branchId, () => {
        cb(i);
        const branchScope = writeScope(branchId, {});
        if (resumeKeys && itemKey !== i) {
          branchScope[AccessorProp.LoopKey] = itemKey;
        }
        if (!resumeMarker) {
          loopScopes = push(loopScopes, referenceScope(branchScope));
        }
      });
    });

    if (loopScopes) {
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + accessor]: loopScopes,
      });
    }
  } else {
    forTo(to, from, step, cb);
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

export function _for_until(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  serializeStateful?: 0 | 1,
  parentEndTag?: string | 0,
  singleNode?: 1,
): void {
  const { state } = $chunk.boundary;
  const resumeKeys = serializeMarker !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
  let flushBranchIds = "";

  if (serializeBranch !== 0) {
    let loopScopes: Opt<ScopeInternals>;
    if (MARKO_DEBUG) {
      // eslint-disable-next-line no-var
      var seenKeys = new Set<unknown>();
    }
    forUntil(to, from, step, (i) => {
      const branchId = _peek_scope_id();
      const itemKey = forStepBy(by, i);
      if (MARKO_DEBUG) {
        if (by) {
          if (seenKeys.has(itemKey)) {
            console.error(
              `A <for> tag's \`by\` attribute must return a unique value for each item, but a duplicate was found matching:`,
              itemKey,
            );
          }
          seenKeys.add(itemKey);
        }
      }

      if (resumeMarker) {
        if (singleNode) {
          flushBranchIds = " " + branchId + flushBranchIds;
        } else {
          $chunk.writeHTML(
            state.mark(ResumeSymbol.BranchStart, flushBranchIds),
          );
          flushBranchIds = branchId + "";
        }
      }

      withBranchId(branchId, () => {
        cb(i);
        const branchScope = writeScope(branchId, {});
        if (resumeKeys && itemKey !== i) {
          branchScope[AccessorProp.LoopKey] = itemKey;
        }
        if (!resumeMarker) {
          loopScopes = push(loopScopes, referenceScope(branchScope));
        }
      });
    });

    if (loopScopes) {
      writeScope(scopeId, {
        [AccessorPrefix.BranchScopes + accessor]: loopScopes,
      });
    }
  } else {
    forUntil(to, from, step, cb);
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
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  serializeStateful?: 0 | 1,
  parentEndTag?: string | 0,
  singleNode?: 1,
) {
  const { state } = $chunk.boundary;
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker =
    serializeMarker !== 0 && (!parentEndTag || serializeStateful !== 0);
  const branchId = _peek_scope_id();
  if (resumeMarker && resumeBranch && !singleNode) {
    $chunk.writeHTML(state.mark(ResumeSymbol.BranchStart, ""));
  }

  const branchIndex = resumeBranch ? withBranchId(branchId, cb) : cb();
  const shouldWriteBranch = resumeBranch && branchIndex !== undefined;

  if (shouldWriteBranch && (branchIndex || !resumeMarker)) {
    writeScope(scopeId, {
      // TODO: technically conditional renderer should only be written when either the
      // condition is stateful, or if there are direct closures.
      // It may make sense to pass in another arg for this.
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex || undefined, // we convert 0 to undefined since the runtime defaults branch to 0.
      [AccessorPrefix.BranchScopes + accessor]: resumeMarker
        ? undefined
        : referenceScope(writeScope(branchId, {})),
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
  serializeStateful: undefined | 0 | 1,
  serializeMarker: undefined | 0 | 1,
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

function scopeHasReference(scope: PartialScope) {
  return !!(scope as ScopeInternals)[K_SCOPE_REFERENCED];
}

function referenceScope(scope: ScopeInternals) {
  scope[K_SCOPE_REFERENCED] = 1;
  return scope;
}

let writeScope = (scopeId: number, partialScope: PartialScope) => {
  return writeScopeToState($chunk.boundary.state, scopeId, partialScope);
};

export function writeScopeToState(
  state: State,
  scopeId: number,
  partialScope: PartialScope,
) {
  const target = $chunk.serializeState;
  const { scopes } = target;
  let scope: ScopeInternals | undefined = scopes.get(scopeId);
  state.needsMainRuntime = true;

  if (scope) {
    Object.assign(scope, partialScope);
  } else {
    scope = partialScope;
    scope[K_SCOPE_ID] = scopeId;
    scopes.set(scopeId, scope);
  }

  target.writeScopes[scopeId] = scope;
  target.flushScopes = true;

  return scope;
}

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

export function _existing_scope(scopeId: number) {
  return writeScope(scopeId, _scope_with_id(scopeId));
}

export function _scope_with_id(scopeId: number) {
  const target = $chunk.serializeState;
  let scope = target.scopes.get(scopeId);
  if (!scope) {
    scope = { [K_SCOPE_ID]: scopeId };
    target.scopes.set(scopeId, scope);
  }
  return referenceScope(scope);
}

export function $global() {
  return $chunk.boundary.state.$global;
}

export function _await<T>(
  scopeId: number,
  accessor: Accessor,
  promise: Promise<T> | T,
  content: (value: T) => void,
  serializeMarker?: 0 | 1,
) {
  const resumeMarker = serializeMarker !== 0;

  if (!isPromise(promise)) {
    if (resumeMarker) {
      const branchId = _peek_scope_id();
      $chunk.writeHTML(
        $chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""),
      );
      content(promise);
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
              withIsAsync(content, value);
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
          boundary.endAsync(chunk);
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
  const branchId = _peek_scope_id();
  $chunk.writeHTML($chunk.boundary.state.mark(ResumeSymbol.BranchStart, ""));

  const catchContent = input.catch
    ? (normalizeDynamicRenderer(input.catch) as ServerRenderer | undefined) || 0
    : undefined;
  const placeholderContent = normalizeDynamicRenderer(input.placeholder) as
    | ServerRenderer
    | undefined;

  if (catchContent !== undefined) {
    tryCatch(
      placeholderContent
        ? () => tryPlaceholder(content, placeholderContent, branchId)
        : content,
      catchContent || (() => {}),
    );
  } else if (placeholderContent) {
    tryPlaceholder(content, placeholderContent, branchId);
  } else {
    content();
  }

  writeScope(branchId, {
    [AccessorProp.BranchAccessor]: accessor,
    [AccessorProp.CatchContent]: catchContent,
    [AccessorProp.PlaceholderContent]: placeholderContent,
  });

  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor + " " + branchId,
    ),
  );
}

function tryPlaceholder(
  content: () => void,
  placeholder: () => void,
  branchId: number,
) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const body = chunk.fork(boundary, null);

  if (body === body.render(content)) {
    chunk.append(body);
    return;
  }

  chunk.next = $chunk = chunk.fork(boundary, chunk.next);
  chunk.placeholderBody = body;
  chunk.placeholderRender = placeholder;
  chunk.placeholderBranchId = branchId;
}

function tryCatch(content: () => void, catchContent: (err: unknown) => void) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  const catchBoundary = new Boundary(state);
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
            cur.placeholderBody = cur.placeholderRender = cur.reorderId = null;
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
  public lastSerializedScopeId = this.scopeId;
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
  public firstScopeId = this.scopeId;
  public readyScopeIds: Record<string, number> | null = null;
  public writeScopes: Record<number, PartialScope> = {};
  public readyIds: Set<string> | null = null;
  public serializeReason: undefined | 0 | 1;
  constructor(
    public $global: $Global & { renderId: string; runtimeId: string },
  ) {
    this.$global = $global;
    if ($global.cspNonce) {
      this.nonceAttr = " nonce" + attrAssignment($global.cspNonce);
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
    const readyKey = toObjectKey(id);
    const readyObj = this.runtimePrefix + RuntimeKey.Ready + toAccess(readyKey);
    if (this.readyIds?.has(id)) {
      return readyObj + ".push(" + resumes + ")";
    }

    (this.readyIds ||= new Set()).add(id);
    if (this.hasReadyRuntime) {
      return readyObj + "=[" + resumes + "]";
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
    parent?: AbortSignal,
  ) {
    super();
    this.state = state;
    this.signal.addEventListener("abort", () => {
      this.count = 0;
      this.state = new State(this.state.$global);
      this.onNext();
    });

    if (parent) {
      if (parent.aborted) {
        this.abort(parent.reason);
      } else {
        parent.addEventListener("abort", () => {
          this.abort(parent.reason);
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

  endAsync(chunk?: Chunk) {
    if (!this.signal.aborted && this.count) {
      this.count--;

      if (chunk?.reorderId) {
        this.state.reorder(chunk);
      }

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
  public deferredResume: DeferredResume | null = null;
  public placeholderBody: Chunk | null = null;
  public placeholderRender: (() => void) | null = null;
  public placeholderBranchId: number | null = null;
  constructor(
    public boundary: Boundary,
    public next: Chunk | null,
    public context: Record<string | symbol, unknown> | null,
    public serializeState: SerializeState,
  ) {
    this.boundary = boundary;
    this.next = next;
    this.context = context;
    this.serializeState = serializeState;
  }

  fork(boundary: Boundary, next: Chunk | null) {
    return new Chunk(boundary, next, this.context, this.serializeState);
  }

  renderWaitReady(readyId: string, renderer: ServerRenderer, input: unknown) {
    const { boundary } = this;
    const { state } = boundary;
    const body = new Chunk(boundary, null, this.context, {
      readyId,
      scopes: new Map(),
      lastSerializedScopeId:
        state.readyScopeIds?.[readyId] ?? state.firstScopeId,
      resumes: "",
      writeScopes: {},
      flushScopes: false,
    });
    const bodyEnd = body.render(renderer, input);

    if (body === bodyEnd) {
      this.writeHTML(body.html);
      this.deferResume(body);
      this.needsWalk ||= body.needsWalk;
    } else {
      bodyEnd.next = bodyEnd.fork(boundary, this.next);
      this.next = body;
    }
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

  deferResume(chunk: Chunk) {
    this.deferredResume = appendDeferredResume(this.deferredResume, chunk);
  }

  append(chunk: Chunk) {
    this.html += chunk.html;
    this.effects = concatEffects(this.effects, chunk.effects);
    this.scripts = concatScripts(this.scripts, chunk.scripts);
    this.lastEffect = chunk.lastEffect || this.lastEffect;
    this.appendDeferredResume(chunk.takeDeferredResume());
  }

  appendDeferredResume(deferredResume: DeferredResume | null) {
    this.deferredResume = appendDeferredResume(
      this.deferredResume,
      deferredResume,
    );
  }

  takeDeferredResume() {
    const { deferredResume } = this;
    this.deferredResume = null;
    return deferredResume;
  }
  flushPlaceholder() {
    if (this.placeholderBody) {
      const body = this.placeholderBody.consume();

      if (body.async) {
        const { state } = this.boundary;
        const reorderId = (body.reorderId = this.placeholderBranchId
          ? this.placeholderBranchId + ""
          : state.nextReorderId());
        this.placeholderBranchId = null;
        this.writeHTML(state.mark(Mark.Placeholder, reorderId));
        const after = this.render(this.placeholderRender!);
        if (after !== this) {
          // TODO: eventually this should be allowed.
          // Once it's allowed we'll need check if placeholder needs to be disposed once body complete.
          this.boundary.abort(
            new Error("An @placeholder cannot contain async content."),
          );
        }
        after.writeHTML(state.mark(Mark.PlaceholderEnd, reorderId));
        state.reorder(body);
      } else {
        body.next = this.next;
        this.next = body;
      }

      this.placeholderRender = this.placeholderBody = null;
    }
  }

  consume() {
    let cur: Chunk = this;
    let needsWalk = cur.needsWalk;

    if (cur.next && !cur.async) {
      let html = "";
      let effects = "";
      let scripts = "";
      let lastEffect = "";
      let deferredResume: DeferredResume | null = null;
      do {
        cur.flushPlaceholder();
        needsWalk ||= cur.needsWalk;
        html += cur.html;
        if (cur.serializeState.readyId) {
          deferredResume = appendDeferredResume(deferredResume, cur);
        } else {
          effects = concatEffects(effects, cur.effects);
          scripts = concatScripts(scripts, cur.scripts);
          lastEffect = cur.lastEffect || lastEffect;
        }
        deferredResume = appendDeferredResume(
          deferredResume,
          cur.takeDeferredResume(),
        );
        cur.consumed = true;
        cur = cur.next;
      } while (cur.next && !cur.async);

      cur.needsWalk = needsWalk;
      cur.html = html + cur.html;
      cur.effects = concatEffects(effects, cur.effects);
      cur.scripts = concatScripts(scripts, cur.scripts);
      cur.lastEffect = lastEffect;
      cur.appendDeferredResume(deferredResume);
    }

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

  flushReadyResumeScripts() {
    const { boundary, serializeState } = this;
    const { readyId } = serializeState;
    let scripts = "";
    const deferredResume = this.takeDeferredResume();
    if (Array.isArray(deferredResume)) {
      for (const chunk of deferredResume) {
        scripts = concatScripts(scripts, chunk.flushReadyResumeScripts());
      }
    } else if (deferredResume) {
      scripts = deferredResume.flushReadyResumeScripts();
    }

    if (readyId && !this.async) {
      const { state } = boundary;
      flushSerializer(boundary, serializeState);
      const { effects } = this;
      const { resumes } = serializeState;
      const chunkScripts = this.scripts;
      serializeState.resumes = "";
      this.effects = this.scripts = "";
      this.lastEffect = "";
      if (resumes || effects) {
        state.needsMainRuntime = true;
        scripts = concatScripts(
          scripts,
          boundary.state.writeReady(
            readyId,
            concatSequence(resumes, effects && `"${effects}"`),
          ),
        );
      }
      scripts = concatScripts(scripts, chunkScripts);
    }

    return scripts;
  }

  flushScript() {
    const { boundary, effects } = this;
    const { state } = boundary;
    const { $global, runtimePrefix, nonceAttr } = state;
    let { html, scripts } = this;
    let needsWalk = state.walkOnNextFlush;
    if (needsWalk) state.walkOnNextFlush = false;

    const readyResumeScripts = this.flushReadyResumeScripts();
    if (readyResumeScripts) {
      needsWalk = true;
      if (!state.hasGlobals) {
        flushSerializerGlobals(boundary);
      }
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
    }

    if (state.writeReorders) {
      needsWalk = true;

      if (!state.hasReorderRuntime) {
        state.hasReorderRuntime = true;
        html +=
          "<style " +
          state.commentPrefix +
          nonceAttr +
          ">t{display:none}</style>";
        scripts = concatScripts(
          scripts,
          REORDER_RUNTIME_CODE + "(" + runtimePrefix + ")",
        );
      }

      for (const reorderedChunk of state.writeReorders) {
        const { reorderId } = reorderedChunk;
        let reorderHTML = "";
        let reorderEffects = "";
        let reorderScripts = "";
        let cur = reorderedChunk;
        reorderedChunk.reorderId = null;

        for (;;) {
          cur.flushPlaceholder();
          const { next } = cur;
          const readyResumeScripts = cur.flushReadyResumeScripts();
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
          "<t " +
          state.commentPrefix +
          "=" +
          reorderId +
          ">" +
          reorderHTML +
          "</t>";
      }

      state.writeReorders = null;
    }

    if (needsWalk) {
      scripts = concatScripts(scripts, runtimePrefix + RuntimeKey.Walk + "()");
    }

    this.html = html;
    this.scripts = scripts;
    this.effects = this.lastEffect = state.resumes = "";
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

function flushSerializer(boundary: Boundary, serializeState: SerializeState) {
  const { state } = boundary;
  const { serializer } = state;
  const { flushed } = serializer;
  if (serializeState.flushScopes || flushed) {
    const { writeScopes } = serializeState;
    let shouldSerialize = false;
    const serializeData: [
      $global?: ReturnType<typeof getFilteredGlobals>,
      ...(number | PartialScope)[],
    ] = [];
    const globals = getFilteredGlobals(state.$global);
    const isBlockingState = serializeState !== state;
    let needsDefaultGlobal =
      isBlockingState && !serializeState.resumes && !globals;
    let { lastSerializedScopeId } = serializeState;

    if (!isBlockingState) {
      if (!state.hasGlobals) {
        state.hasGlobals = true;
        serializeData.push(globals);
        shouldSerialize = true;
      }
    }

    for (const key in writeScopes) {
      const scope = writeScopes[key as unknown as number];
      if (
        scopeHasReference(scope) ||
        Object.getOwnPropertyNames(scope).length
      ) {
        const scopeId = getScopeId(scope)!;
        const scopeIdDelta = scopeId - lastSerializedScopeId;
        lastSerializedScopeId = scopeId + 1;
        if (needsDefaultGlobal) {
          needsDefaultGlobal = false;
          serializeData.push(0);
        }
        if (scopeIdDelta) serializeData.push(scopeIdDelta);
        serializeData.push(scope);
        shouldSerialize = true;
      }
    }

    if (shouldSerialize) {
      serializeState.resumes = concatSequence(
        serializeState.resumes,
        serializer.stringify(serializeData, boundary),
      );
    }
    serializeState.lastSerializedScopeId = lastSerializedScopeId;
    if (serializeState.readyId) {
      (state.readyScopeIds ||= {})[serializeState.readyId] =
        lastSerializedScopeId;
    }
    serializeState.writeScopes = {};
    serializeState.flushScopes = false;
    if (flushed) {
      state.walkOnNextFlush = true;
    }
  }
}

function flushSerializerGlobals(boundary: Boundary) {
  const { state } = boundary;
  const globals = getFilteredGlobals(state.$global);
  state.hasGlobals = true;
  if (globals) {
    state.needsMainRuntime = true;
    state.resumes = concatSequence(
      state.resumes,
      state.serializer.stringify([globals], boundary),
    );
  }
}

function appendDeferredResume(
  current: DeferredResume | null,
  next: DeferredResume | null,
): DeferredResume | null {
  if (!next) return current;
  if (!current) return next;
  if (Array.isArray(current)) {
    if (Array.isArray(next)) {
      current.push(...next);
    } else {
      current.push(next);
    }
    return current;
  }

  return Array.isArray(next) ? [current, ...next] : [current, next];
}

export function _trailers(html: string) {
  $chunk.boundary.state.trailerHTML += html;
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
    cb(true);
  }
}

function isPromise(value: unknown): value is Promise<unknown> {
  return (
    value != null && typeof (value as Promise<unknown>).then === "function"
  );
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

export function _subscribe(
  subscribers: Set<ScopeInternals> | undefined,
  scope: ScopeInternals,
) {
  if (subscribers) {
    $chunk.boundary.state.serializer.writeCall(scope, subscribers, "add");
  }
  return referenceScope(scope);
}
