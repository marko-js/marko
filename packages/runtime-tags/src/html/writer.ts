/* eslint-disable @typescript-eslint/no-this-alias */
import { forIn, forOf, forTo } from "../common/for";
import {
  type $Global,
  type Accessor,
  type Falsy,
  ResumeSymbol,
} from "../common/types";
import { escapeAttrValue } from "./attrs";
import { REORDER_RUNTIME_CODE, WALKER_RUNTIME_CODE } from "./inlined-runtimes";
import { register as serializerRegister, Serializer } from "./serializer";

export type PartialScope = Record<Accessor, unknown>;
type ScopeInternals = PartialScope & {
  [K_SCOPE_ID]?: number;
};

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

export function getScopeId(scope: unknown): number | undefined {
  return (scope as ScopeInternals)[K_SCOPE_ID];
}

export function write(html: string) {
  $chunk.writeHTML(html);
}

export function writeScript(script: string) {
  $chunk.writeScript(script);
}

export function writeEffect(scopeId: number, registryId: string) {
  $chunk.boundary.state.needsMainRuntime = true;
  $chunk.writeEffect(scopeId, registryId);
}

const kPendingContexts = Symbol("Pending Contexts");
export function withContext(key: PropertyKey, value: unknown, cb: () => void) {
  const ctx = ($chunk.context ||= { [kPendingContexts]: 0 } as any);
  const prev = ctx[key];
  ctx[kPendingContexts]++;
  ctx[key] = value;
  try {
    cb();
  } finally {
    ctx[kPendingContexts]--;
    ctx[key] = prev;
  }
}

export function register<T extends WeakKey>(
  val: T,
  id: string,
  scopeId?: number,
): T {
  return scopeId === undefined
    ? serializerRegister(id, val)
    : serializerRegister(id, val, ensureScopeWithId(scopeId));
}

export function nextTagId() {
  const state = $chunk.boundary.state;
  const { $global } = state;
  return (
    "s" + $global.runtimeId + $global.renderId + (state.tagIndex++).toString(36)
  );
}

export function nextScopeId() {
  return $chunk.boundary.state.scopeIndex++;
}

export function peekNextScopeId() {
  return $chunk.boundary.state.scopeIndex;
}

export function peekNextScope() {
  return ensureScopeWithId(peekNextScopeId());
}

export function getScopeById(scopeId: number | undefined) {
  if (scopeId !== undefined) {
    return $chunk.boundary.state.scopes.get(scopeId);
  }
}

export function markResumeNode(scopeId: number, accessor: Accessor) {
  const { state } = $chunk.boundary;
  state.needsMainRuntime = true;
  return state.mark(ResumeSymbol.Node, scopeId + " " + accessor);
}

export function nodeRef(scopeId: number, id?: string) {
  const getter = () => {
    if (MARKO_DEBUG) {
      throw new Error("Cannot read a node reference on the server.");
    }
  };

  return id ? register(getter, id, scopeId) : getter;
}

export function resumeClosestBranch(scopeId: number) {
  const branchId = $chunk.context?.[branchIdKey];
  if (branchId !== undefined && branchId !== scopeId) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(ResumeSymbol.ClosestBranch, "" + scopeId),
    );
  }
}

const branchIdKey = Symbol();

export function resumeForOf(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  scopeId: number,
  accessor: Accessor,
): void {
  forOf(list, (item, i) => {
    const branchId = peekNextScopeId();
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        ResumeSymbol.BranchStart,
        branchId + (i ? " " : ""),
      ),
    );

    withContext(branchIdKey, branchId, () => cb(item, i));
  });
  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor,
    ),
  );
}
export function resumeSingleNodeForOf(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  scopeId: number,
  accessor: Accessor,
): void {
  let branchIds = "";
  forOf(list, (item, index) => {
    const branchId = peekNextScopeId();
    branchIds = " " + branchId + branchIds;
    withContext(branchIdKey, branchId, () => cb(item, index));
  });
  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchSingleNode,
      scopeId + " " + accessor + branchIds,
    ),
  );
}

export function resumeForIn(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  scopeId: number,
  accessor: Accessor,
): void {
  let sep = "";
  forIn(obj, (key, value) => {
    const branchId = peekNextScopeId();
    $chunk.writeHTML(
      $chunk.boundary.state.mark(ResumeSymbol.BranchStart, branchId + sep),
    );
    sep = " ";
    withContext(branchIdKey, branchId, () => cb(key, value));
  });
  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor,
    ),
  );
}
export function resumeSingleNodeForIn(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  scopeId: number,
  accessor: Accessor,
): void {
  let branchIds = "";
  forIn(obj, (key, value) => {
    const branchId = peekNextScopeId();
    branchIds = " " + branchId + branchIds;
    withContext(branchIdKey, branchId, () => cb(key, value));
  });
  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchSingleNode,
      scopeId + " " + accessor + branchIds,
    ),
  );
}

export function resumeForTo(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  scopeId: number,
  accessor: Accessor,
): void {
  let sep = "";
  forTo(to, from, step, (index) => {
    const branchId = peekNextScopeId();
    $chunk.writeHTML(
      $chunk.boundary.state.mark(ResumeSymbol.BranchStart, branchId + sep),
    );
    sep = " ";
    withContext(branchIdKey, branchId, () => cb(index));
  });
  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor,
    ),
  );
}
export function resumeSingleNodeForTo(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  scopeId: number,
  accessor: Accessor,
): void {
  let branchIds = "";
  forTo(to, from, step, (index) => {
    const branchId = peekNextScopeId();
    branchIds = " " + branchId + branchIds;
    withContext(branchIdKey, branchId, () => cb(index));
  });
  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchSingleNode,
      scopeId + " " + accessor + branchIds,
    ),
  );
}

export function resumeConditional(
  cb: () => void | number,
  scopeId: number,
  accessor: Accessor,
) {
  const branchId = peekNextScopeId();
  $chunk.writeHTML(
    $chunk.boundary.state.mark(ResumeSymbol.BranchStart, branchId + ""),
  );
  withContext(branchIdKey, branchId, cb);

  const rendered = peekNextScopeId() !== branchId;
  if (rendered) {
    writeScope(branchId, {});
  } else {
    nextScopeId();
  }

  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchEnd,
      scopeId + " " + accessor,
    ),
  );
}

export function resumeSingleNodeConditional(
  cb: () => void | number,
  scopeId: number,
  accessor: Accessor,
) {
  const branchId = peekNextScopeId();
  withContext(branchIdKey, branchId, cb);

  const rendered = peekNextScopeId() !== branchId;
  if (rendered) {
    writeScope(branchId, {});
  } else {
    nextScopeId();
  }

  $chunk.writeHTML(
    $chunk.boundary.state.mark(
      ResumeSymbol.BranchSingleNode,
      scopeId + " " + accessor + (rendered ? " " + branchId : ""),
    ),
  );
}

export function writeScope(scopeId: number, partialScope: PartialScope) {
  const { state } = $chunk.boundary;
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
  } else if (state.hasGlobals) {
    state.writeScopes = { [scopeId]: scope };
  } else {
    state.hasGlobals = true;
    state.writeScopes = {
      $: getFilteredGlobals(state.$global),
      [scopeId]: scope,
    };
  }

  return scope;
}

export function writeExistingScope(scope: ScopeInternals) {
  return writeScope(scope[K_SCOPE_ID]!, scope);
}

export function ensureScopeWithId(scopeId: number) {
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

export function fork<T>(promise: Promise<T> | T, content: (value: T) => void) {
  if (!isPromise(promise)) {
    content(promise);
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
          chunk.render(content, value);
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

export function tryContent(input: {
  content?(): void;
  placeholder?: {
    content?(): void;
  };
  catch?: {
    content?(err: unknown): void;
  };
}) {
  const content = input.content;

  if (content) {
    const catchContent = input.catch?.content;
    const placeholderContent = input.placeholder?.content;
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
  }
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
            cur.scripts = cur.effects = "";
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
    } else if (catchBoundary.done) {
      boundary.endAsync();
    } else {
      boundary.onNext();
    }
  };
}

export class State {
  public tagIndex = 0;
  public scopeIndex = 0;
  public reorderIndex = 0;
  public hasGlobals = false;
  public needsMainRuntime = false;
  public hasMainRuntime = false;
  public hasReorderRuntime = false;
  public hasWrittenResume = false;
  public trailerHTML = "";
  public nonceAttr = "";
  public serializer = new Serializer();
  public writeReorders: Chunk[] | null = null;
  public scopes = new Map<number, PartialScope>();
  public writeScopes: null | (Record<number, PartialScope> & { $?: unknown }) =
    null;
  constructor(
    public $global: $Global & {
      renderId: string;
      runtimeId: string;
    },
  ) {
    this.$global = $global;
    if ($global.cspNonce) {
      this.nonceAttr = " " + escapeAttrValue($global.cspNonce + "");
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
    const encodeChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
    const encodeLen = encodeChars.length;
    const encodeStartLen = encodeLen - 10; // Avoids chars that cannot start a property name.
    let index = this.reorderIndex++;
    let mod = index % encodeStartLen;
    let id = encodeChars[mod];
    index = (index - mod) / encodeStartLen;

    while (index > 0) {
      mod = index % encodeLen;
      id += encodeChars[mod];
      index = (index - mod) / encodeLen;
    }

    return id;
  }

  mark(code: ResumeSymbol | Mark, str: string) {
    return "<!--" + this.commentPrefix + code + str + "-->";
  }
}

export class Boundary extends AbortController {
  public onNext = NOOP;
  private count = 0;
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

  get done() {
    return this.count === 0;
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
    this.effects = concatEffects(
      this.effects,
      scopeId + ',"' + registryId + '"',
    );
  }

  writeScript(script: string) {
    this.scripts = concatScripts(this.scripts, script);
  }

  append(chunk: Chunk) {
    this.html += chunk.html;
    this.effects = concatEffects(this.effects, chunk.effects);
    this.scripts = concatScripts(this.scripts, chunk.scripts);
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
      do {
        cur.flushPlaceholder();
        html += cur.html;
        effects = concatEffects(effects, cur.effects);
        scripts = concatScripts(scripts, cur.scripts);
        cur.consumed = true;
        cur = cur.next;
      } while (cur.next && !cur.async);

      cur.html = html + cur.html;
      cur.effects = concatEffects(effects, cur.effects);
      cur.scripts = concatScripts(scripts, cur.scripts);
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
}

export function prepareChunk(chunk: Chunk) {
  const head = chunk.consume();
  const { boundary, effects } = head;
  const { state } = boundary;
  const { $global, runtimePrefix, serializer, nonceAttr } = state;
  let { html, scripts } = head;
  let hasWalk = false;
  head.effects = "";

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

  let resumes = "";

  if (state.writeScopes || serializer.flushed) {
    resumes = state.serializer.stringify(state.writeScopes || {}, boundary);
    state.writeScopes = null;
  }

  if (effects) {
    hasWalk = true;
    resumes = resumes ? resumes + "," + effects : effects;
  }

  if (boundary.done && (resumes || state.hasWrittenResume)) {
    resumes = resumes ? resumes + ",0" : "0";
  }

  if (resumes) {
    if (state.hasWrittenResume) {
      scripts = concatScripts(
        scripts,
        runtimePrefix + RuntimeKey.Resume + ".push(" + resumes + ")",
      );
    } else {
      state.hasWrittenResume = true;
      scripts = concatScripts(
        scripts,
        runtimePrefix + RuntimeKey.Resume + "=[" + resumes + "]",
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
        const { next } = cur;
        cur.flushPlaceholder();
        cur.consumed = true;
        reorderHTML += cur.html;
        reorderEffects = concatEffects(reorderEffects, cur.effects);
        reorderScripts = concatScripts(reorderScripts, cur.scripts);

        if (cur.async) {
          reorderHTML += state.mark(
            Mark.ReorderMarker,
            (cur.reorderId = state.nextReorderId()),
          );
          cur.html = cur.effects = cur.scripts = "";
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

  head.html = html;
  head.scripts = scripts;
  return head;
}

export function flushChunk(head: Chunk, last: boolean) {
  const { boundary } = head;
  const { state } = boundary;
  const { html, scripts } = head;
  const { $global } = state;
  const { __flush__ } = $global;
  let result = html;
  head.html = head.scripts = "";

  if (scripts) {
    result += "<script" + state.nonceAttr + ">" + scripts + "</script>";
  }

  if (__flush__) {
    $global.__flush__ = undefined;
    result = __flush__($global, result);
  }

  if (last && state.trailerHTML) {
    result += state.trailerHTML;
  }

  return result;
}

export function writeTrailers(html: string) {
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
  if (!$global) return undefined;

  const serializedGlobals = $global.serializedGlobals as
    | string[]
    | Record<string, boolean>
    | undefined;

  if (!serializedGlobals) return undefined;

  let filtered: undefined | Record<string, unknown>;

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
