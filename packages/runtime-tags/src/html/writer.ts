/* eslint-disable @typescript-eslint/no-this-alias */
import { forIn, forOf, forTo, forUntil } from "../common/for";
import { normalizeDynamicRenderer } from "../common/helpers";
import {
  type $Global,
  type Accessor,
  AccessorPrefix,
  AccessorProp,
  type Falsy,
  ResumeSymbol,
} from "../common/types";
import { attrAssignment } from "./attrs";
import { forInBy, forOfBy, forStepBy } from "./for";
import { REORDER_RUNTIME_CODE, WALKER_RUNTIME_CODE } from "./inlined-runtimes";
import {
  register as serializerRegister,
  Serializer,
  setDebugInfo,
} from "./serializer";
import type { ServerRenderer } from "./template";

export type PartialScope = Record<Accessor, unknown>;
type ScopeInternals = PartialScope & { [K_SCOPE_ID]?: number };

let $chunk: Chunk;
const NOOP = () => {};
const K_SCOPE_ID = Symbol("Scope ID");

enum Mark {
  Placeholder = "!^",
  PlaceholderEnd = "!",
  ReorderMarker = "#",
}

enum RuntimeKey {
  Walk = ".w",
  Resume = ".r",
  Scripts = ".j",
  Done = ".d",
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

export function _script(scopeId: number, registryId: string) {
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
        [AccessorPrefix.ConditionalScope + nodeAccessor]: writeScope(
          branchId,
          {},
        ),
        [AccessorPrefix.ConditionalRenderer + nodeAccessor]: render?.___id,
      });
    }
  } else {
    _scope_id();
  }
}

export function normalizeServerRender(value: unknown) {
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
export function withContext<T>(key: PropertyKey, value: unknown, cb: () => T) {
  const ctx = ($chunk.context ||= { [kPendingContexts]: 0 } as any);
  const prev = ctx[key];
  ctx[kPendingContexts]++;
  ctx[key] = value;
  try {
    return cb();
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
) {
  _scope_with_id(parentScopeId)[scopeOffsetAccessor] = _scope_id();
  _scope_with_id(childScopeId)[AccessorProp.TagVariable] = _resume(
    {},
    registryId,
    parentScopeId,
  );
}

export function _resume<T extends WeakKey>(
  val: T,
  id: string,
  scopeId?: number,
): T {
  return scopeId === undefined
    ? serializerRegister(id, val)
    : serializerRegister(id, val, _scope_with_id(scopeId));
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

export function _el(scopeId: number, id?: string) {
  const getter = () => {
    if (MARKO_DEBUG) {
      throw new Error("Cannot read a node reference on the server.");
    }
  };

  return id ? _resume(getter, id, scopeId) : getter;
}

export function _hoist(scopeId: number, id?: string) {
  const getter = () => {
    if (MARKO_DEBUG) {
      throw new Error("Cannot read a hoisted value on the server.");
    }
  };
  getter[Symbol.iterator] = getter;
  return id ? _resume(getter, id, scopeId) : getter;
}

export function _resume_branch(scopeId: number) {
  const branchId = $chunk.context?.[branchIdKey];
  if (branchId !== undefined && branchId !== scopeId) {
    writeScope(scopeId, { [AccessorProp.ClosestBranchId]: branchId });
  }
}

const branchIdKey = Symbol();

export function isInResumedBranch() {
  return $chunk?.context?.[branchIdKey] !== undefined;
}

export function withBranchId<T>(branchId: number, cb: () => T): T {
  return withContext(branchIdKey, branchId, cb);
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
  const resumeMarker = serializeMarker !== 0;
  let flushBranchIds = "";

  if (serializeBranch !== 0) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    forOf(list, (item, index) => {
      const branchId = _peek_scope_id();
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
        loopScopes.set(forOfBy(by, item, index), writeScope(branchId, {}));
      });
    });

    if (loopScopes.size) {
      writeScope(scopeId, {
        [AccessorPrefix.LoopScopeMap + accessor]: loopScopes,
      });
    }
  } else {
    forOf(list, cb);
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    resumeMarker,
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
  const resumeMarker = serializeMarker !== 0;
  let flushBranchIds = "";

  if (serializeBranch !== 0) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    forIn(obj, (key, value) => {
      const branchId = _peek_scope_id();
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
        loopScopes.set(forInBy(by, key, value), writeScope(branchId, {}));
      });
    });

    if (loopScopes.size) {
      writeScope(scopeId, {
        [AccessorPrefix.LoopScopeMap + accessor]: loopScopes,
      });
    }
  } else {
    forIn(obj, cb);
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    resumeMarker,
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
  const resumeMarker = serializeMarker !== 0;
  let flushBranchIds = "";

  if (serializeBranch !== 0) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    forTo(to, from, step, (i) => {
      const branchId = _peek_scope_id();
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
        loopScopes.set(forStepBy(by, i), writeScope(branchId, {}));
      });
    });

    if (loopScopes.size) {
      writeScope(scopeId, {
        [AccessorPrefix.LoopScopeMap + accessor]: loopScopes,
      });
    }
  } else {
    forTo(to, from, step, cb);
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    resumeMarker,
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
  const resumeMarker = serializeMarker !== 0;
  let flushBranchIds = "";

  if (serializeBranch !== 0) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    forUntil(to, from, step, (i) => {
      const branchId = _peek_scope_id();
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
        loopScopes.set(forStepBy(by, i), writeScope(branchId, {}));
      });
    });

    if (loopScopes.size) {
      writeScope(scopeId, {
        [AccessorPrefix.LoopScopeMap + accessor]: loopScopes,
      });
    }
  } else {
    forUntil(to, from, step, cb);
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    resumeMarker,
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
  const resumeMarker = serializeMarker !== 0;
  const branchId = _peek_scope_id();
  if (resumeMarker && resumeBranch && !singleNode) {
    $chunk.writeHTML(state.mark(ResumeSymbol.BranchStart, ""));
  }

  const branchIndex = resumeBranch ? withBranchId(branchId, cb) : cb();
  const shouldWriteBranch = resumeBranch && branchIndex !== undefined;

  if (shouldWriteBranch) {
    writeScope(scopeId, {
      // TODO: technically conditional renderer should only be written when either the
      // condition is stateful, or if there are direct closures.
      // It may make sense to pass in another arg for this.
      [AccessorPrefix.ConditionalRenderer + accessor]: branchIndex || undefined, // we convert 0 to undefined since the runtime defaults branch to 0.
      [AccessorPrefix.ConditionalScope + accessor]: writeScope(branchId, {}),
    });
  }

  writeBranchEnd(
    scopeId,
    accessor,
    serializeStateful,
    resumeMarker,
    parentEndTag,
    singleNode,
    shouldWriteBranch ? " " + branchId : "",
  );
}

function writeBranchEnd(
  scopeId: number,
  accessor: Accessor,
  serializeStateful: undefined | 0 | 1,
  resumeMarker: boolean,
  parentEndTag: string | undefined | 0,
  singleNode?: 1,
  branchIds?: string,
) {
  const endTag = parentEndTag || "";
  if (resumeMarker) {
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
  return writeScopeToState($chunk.boundary.state, scopeId, partialScope);
};

export function writeScopeToState(
  state: State,
  scopeId: number,
  partialScope: PartialScope,
) {
  const { scopes } = state;
  let scope: ScopeInternals | undefined = scopes.get(scopeId);
  state.needsMainRuntime = true;

  if (scope) {
    Object.assign(scope, partialScope);
  } else {
    scope = partialScope;
    scope[K_SCOPE_ID] = scopeId;
    state.scopes.set(scopeId, scope);
  }

  if (state.writeScopes) {
    state.writeScopes[scopeId] = scope;
  } else {
    state.writeScopes = { [scopeId]: scope };
  }

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
  const { state } = $chunk.boundary;
  let scope = state.scopes.get(scopeId);
  if (!scope) {
    scope = { [K_SCOPE_ID]: scopeId };
    state.scopes.set(scopeId, scope);
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
      writeScope(scopeId, {
        [AccessorPrefix.ConditionalScope + accessor]: writeScope(branchId, {}),
      });
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
  chunk.next = $chunk = new Chunk(boundary, chunk.next, chunk.context);
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
              content(value);
              boundary.state.serializer.writeAssign(
                writeScope(branchId, {}),
                _scope_with_id(scopeId),
                AccessorPrefix.ConditionalScope + accessor,
              );
              $chunk.writeHTML(
                $chunk.boundary.state.mark(
                  ResumeSymbol.BranchEnd,
                  scopeId + " " + accessor + " " + branchId,
                ),
              );
            } else {
              content(value);
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

  const catchContent = normalizeDynamicRenderer(input.catch) as
    | ServerRenderer
    | undefined;
  const placeholderContent = normalizeDynamicRenderer(input.placeholder) as
    | ServerRenderer
    | undefined;

  if (catchContent) {
    tryCatch(
      placeholderContent
        ? () => tryPlaceholder(content, placeholderContent)
        : content,
      catchContent,
    );
  } else if (placeholderContent) {
    tryPlaceholder(content, placeholderContent);
  } else {
    content();
  }

  writeScope(branchId, {
    [AccessorProp.BranchAccessor]: accessor,
    [AccessorProp.CatchContent]: catchContent,
    [AccessorProp.PlaceholderContent]: placeholderContent,
  });
  writeScope(scopeId, {
    [AccessorPrefix.ConditionalScope + accessor]: getScopeById(branchId),
  });

  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor + " " + branchId,
    ),
  );
}

function tryPlaceholder(content: () => void, placeholder: () => void) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const body = new Chunk(boundary, null, chunk.context);

  if (body === body.render(content)) {
    chunk.append(body);
    return;
  }

  chunk.next = $chunk = new Chunk(boundary, chunk.next, body.context);
  chunk.placeholderBody = body;
  chunk.placeholderRender = placeholder;
}

function tryCatch(content: () => void, catchContent: (err: unknown) => void) {
  const chunk = $chunk;
  const { boundary } = chunk;
  const { state } = boundary;
  const catchBoundary = new Boundary(state);
  const body = new Chunk(catchBoundary, null, chunk.context);
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
  const bodyNext =
    (bodyEnd.next =
    $chunk =
      new Chunk(boundary, chunk.next, body.context));
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
            cur.html = endMarker;
            cur.scripts = cur.effects = cur.lastEffect = "";
            cur.placeholderBody = cur.placeholderRender = cur.reorderId = null;
          }

          cur = next;
        } while (cur !== bodyNext);
      }

      const catchChunk = new Chunk(boundary, null, chunk.context);
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

export class State {
  public tagId = 1;
  public scopeId = 1;
  public reorderId = 1;
  public lastSerializedScopeId = this.scopeId;
  public hasGlobals = false;
  public needsMainRuntime = false;
  public hasMainRuntime = false;
  public hasReorderRuntime = false;
  public hasWrittenResume = false;
  public walkOnNextFlush = false;
  public trailerHTML = "";
  public resumes = "";
  public nonceAttr = "";
  public serializer = new Serializer();
  public writeReorders: Chunk[] | null = null;
  public scopes = new Map<number, PartialScope>();
  public writeScopes: null | Record<number, PartialScope> = null;
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

  get done() {
    flushSerializer(this);
    return !this.count;
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
  public reorderId: string | null = null;
  public placeholderBody: Chunk | null = null;
  public placeholderRender: (() => void) | null = null;
  constructor(
    public boundary: Boundary,
    public next: Chunk | null,
    public context: Record<string | symbol, unknown> | null,
  ) {
    this.boundary = boundary;
    this.next = next;
    this.context = context;
  }

  writeHTML(html: string) {
    this.html += html;
  }

  writeEffect(scopeId: number, registryId: string) {
    if (this.lastEffect === registryId) {
      this.effects += "," + scopeId;
    } else {
      this.lastEffect = registryId;
      this.effects = concatEffects(
        this.effects,
        '"' + registryId + '",' + scopeId,
      );
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
  }
  flushPlaceholder() {
    if (this.placeholderBody) {
      const body = this.placeholderBody.consume();

      if (body.async) {
        const { state } = this.boundary;
        const reorderId = (body.reorderId = state.nextReorderId());
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

    if (cur.next && !cur.async) {
      let html = "";
      let effects = "";
      let scripts = "";
      let lastEffect = "";
      do {
        cur.flushPlaceholder();
        html += cur.html;
        effects = concatEffects(effects, cur.effects);
        scripts = concatScripts(scripts, cur.scripts);
        lastEffect = cur.lastEffect || lastEffect;
        cur.consumed = true;
        cur = cur.next;
      } while (cur.next && !cur.async);

      cur.html = html + cur.html;
      cur.effects = concatEffects(effects, cur.effects);
      cur.scripts = concatScripts(scripts, cur.scripts);
      cur.lastEffect = lastEffect;
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

  flushScript() {
    const { boundary, effects } = this;
    const { state } = boundary;
    const { $global, runtimePrefix, nonceAttr } = state;
    let { html, scripts } = this;
    let hasWalk = state.walkOnNextFlush;
    if (hasWalk) state.walkOnNextFlush = false;

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

    if (effects) {
      hasWalk = true;
      state.resumes = state.resumes ? state.resumes + "," + effects : effects;
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
      hasWalk = true;

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
          cur.consumed = true;
          reorderHTML += cur.html;
          reorderEffects = concatEffects(reorderEffects, cur.effects);
          reorderScripts = concatScripts(reorderScripts, cur.scripts);

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
            "_.push(" + reorderEffects + ")",
          );
        }

        scripts = concatScripts(
          scripts,
          reorderScripts &&
            runtimePrefix +
              RuntimeKey.Scripts +
              "." +
              reorderId +
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

    if (hasWalk) {
      scripts = concatScripts(scripts, runtimePrefix + RuntimeKey.Walk + "()");
    }

    this.html = html;
    this.scripts = scripts;
    this.effects = this.lastEffect = state.resumes = "";
    return this;
  }

  flushHTML() {
    this.flushScript();
    const { boundary, scripts } = this;
    const { state } = boundary;
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

function flushSerializer(boundary: Boundary) {
  const { state } = boundary;
  const { writeScopes, serializer } = state;
  const { flushed } = serializer;
  if (writeScopes || flushed) {
    const serializeData: [
      $global?: ReturnType<typeof getFilteredGlobals>,
      ...(number | PartialScope)[],
    ] = [];
    let { lastSerializedScopeId } = state;

    if (!state.hasGlobals) {
      state.hasGlobals = true;
      serializeData.push(getFilteredGlobals(state.$global));
    }

    for (const key in writeScopes) {
      const scope = writeScopes[key as unknown as number];
      const scopeId = getScopeId(scope)!;
      const scopeIdDelta = scopeId - lastSerializedScopeId;
      lastSerializedScopeId = scopeId + 1;
      if (scopeIdDelta) serializeData.push(scopeIdDelta);
      serializeData.push(scope);
    }

    state.resumes = concatEffects(
      state.resumes,
      serializer.stringify(serializeData, boundary),
    );
    state.lastSerializedScopeId = lastSerializedScopeId;
    state.writeScopes = null;
    if (flushed) {
      state.walkOnNextFlush = true;
    }
  }
}

export function _trailers(html: string) {
  $chunk.boundary.state.trailerHTML += html;
}

function concatEffects(a: string, b: string) {
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
  subscribers: Set<ScopeInternals>,
  scope: ScopeInternals,
) {
  $chunk.boundary.state.serializer.writeCall(scope, subscribers, "add");
  return scope;
}
