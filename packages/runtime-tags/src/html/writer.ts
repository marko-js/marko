/* eslint-disable @typescript-eslint/no-this-alias */
import { forIn, forOf, forTo } from "../common/for";
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
import { forInBy, forOfBy, forToBy } from "./for";
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

export function setTagVar(
  parentScopeId: number,
  scopeOffsetAccessor: Accessor,
  childScopeId: number,
  registryId: string,
) {
  ensureScopeWithId(parentScopeId)[scopeOffsetAccessor] = nextScopeId();
  ensureScopeWithId(childScopeId)[AccessorProp.TagVariable] = register(
    {},
    registryId,
    parentScopeId,
  );
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
    "s" + $global.runtimeId + $global.renderId + (state.tagId++).toString(36)
  );
}

export function nextScopeId() {
  return $chunk.boundary.state.scopeId++;
}

export function peekNextScopeId() {
  return $chunk.boundary.state.scopeId;
}

export function getScopeById(scopeId: number | undefined) {
  if (scopeId !== undefined) {
    return $chunk.boundary.state.scopes.get(scopeId);
  }
}

export function serializeIf(
  condition: undefined | 1 | Record<string, 1>,
  key: string,
) {
  return condition && (condition === 1 || condition[key]) ? 1 : undefined;
}

export function serializeGuard(
  condition: undefined | 1 | Record<string, 1>,
  key: string,
) {
  return condition && (condition === 1 || condition[key]) ? 1 : 0;
}

export function markResumeNode(
  scopeId: number,
  accessor: Accessor,
  shouldResume?: 0 | 1,
) {
  if (shouldResume === 0) return "";

  const { state } = $chunk.boundary;
  state.needsMainRuntime = true;
  return state.mark(ResumeSymbol.Node, scopeId + " " + accessor);
}

export function commentSeparator(shouldResume: 0 | 1) {
  return shouldResume === 0 ? "" : "<!>";
}

export function nodeRef(scopeId: number, id?: string) {
  const getter = () => {
    if (MARKO_DEBUG) {
      throw new Error("Cannot read a node reference on the server.");
    }
  };

  return id ? register(getter, id, scopeId) : getter;
}

export function hoist(scopeId: number, id?: string) {
  const getter = () => {
    if (MARKO_DEBUG) {
      throw new Error("Cannot read a hoisted value on the server.");
    }
  };
  getter[Symbol.iterator] = getter;
  return id ? register(getter, id, scopeId) : getter;
}

export function resumeClosestBranch(scopeId: number) {
  const branchId = $chunk.context?.[branchIdKey];
  if (branchId !== undefined && branchId !== scopeId) {
    writeScope(scopeId, { [AccessorProp.ClosestBranchId]: branchId });
  }
}

const branchIdKey = Symbol();
export function withBranchId<T>(branchId: number, cb: () => T): T {
  return withContext(branchIdKey, branchId, cb);
}

export function resumeForOf(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  by: Falsy | ((item: unknown, index: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
): void {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker = serializeMarker !== 0;

  if (resumeBranch) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    forOf(list, (item, index) => {
      const branchId = peekNextScopeId();
      if (resumeMarker) {
        $chunk.writeHTML(
          $chunk.boundary.state.mark(
            ResumeSymbol.BranchStart,
            branchId + (index ? " " : ""),
          ),
        );
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

  if (resumeMarker) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        ResumeSymbol.BranchEnd,
        scopeId + " " + accessor,
      ),
    );
  }
}
export function resumeSingleNodeForOf(
  list: Falsy | Iterable<unknown>,
  cb: (item: unknown, index: number) => void,
  by: Falsy | ((item: unknown, index: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  onlyChildInParent?: 1,
): void {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker = serializeMarker !== 0;
  let branchIds = "";

  if (resumeBranch) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    forOf(list, (item, index) => {
      const branchId = peekNextScopeId();
      if (resumeMarker) {
        branchIds = " " + branchId + branchIds;
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

  if (resumeMarker) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        onlyChildInParent
          ? ResumeSymbol.BranchSingleNodeOnlyChildInParent
          : ResumeSymbol.BranchSingleNode,
        scopeId + " " + accessor + branchIds,
      ),
    );
  }
}

export function resumeForIn(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  by: Falsy | ((key: string, v: unknown) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
): void {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker = serializeMarker !== 0;

  if (resumeBranch) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    let sep = "";
    forIn(obj, (key, value) => {
      const branchId = peekNextScopeId();
      if (resumeMarker) {
        $chunk.writeHTML(
          $chunk.boundary.state.mark(ResumeSymbol.BranchStart, branchId + sep),
        );
        sep = " ";
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

  if (resumeMarker) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        ResumeSymbol.BranchEnd,
        scopeId + " " + accessor,
      ),
    );
  }
}
export function resumeSingleNodeForIn(
  obj: Falsy | {},
  cb: (key: string, value: unknown) => void,
  by: Falsy | ((key: string, v: unknown) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  onlyChildInParent?: 1,
): void {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker = serializeMarker !== 0;
  let branchIds = "";

  if (resumeBranch) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    forIn(obj, (key, value) => {
      const branchId = peekNextScopeId();
      if (resumeMarker) {
        branchIds = " " + branchId + branchIds;
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

  if (resumeMarker) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        onlyChildInParent
          ? ResumeSymbol.BranchSingleNodeOnlyChildInParent
          : ResumeSymbol.BranchSingleNode,
        scopeId + " " + accessor + branchIds,
      ),
    );
  }
}

export function resumeForTo(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
): void {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker = serializeMarker !== 0;

  if (resumeBranch) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    let sep = "";
    forTo(to, from, step, (i) => {
      const branchId = peekNextScopeId();
      if (resumeMarker) {
        $chunk.writeHTML(
          $chunk.boundary.state.mark(ResumeSymbol.BranchStart, branchId + sep),
        );
        sep = " ";
      }

      withBranchId(branchId, () => {
        cb(i);
        loopScopes.set(forToBy(by, i), writeScope(branchId, {}));
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

  if (resumeMarker) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        ResumeSymbol.BranchEnd,
        scopeId + " " + accessor,
      ),
    );
  }
}
export function resumeSingleNodeForTo(
  to: number,
  from: number | Falsy,
  step: number | Falsy,
  cb: (index: number) => void,
  by: Falsy | ((v: number) => unknown),
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  onlyChildInParent?: 1,
): void {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker = serializeMarker !== 0;
  let branchIds = "";

  if (resumeBranch) {
    const loopScopes = new Map<unknown, ScopeInternals>();
    forTo(to, from, step, (i) => {
      const branchId = peekNextScopeId();
      if (resumeMarker) {
        branchIds = " " + branchId + branchIds;
      }
      withBranchId(branchId, () => {
        cb(i);
        loopScopes.set(forToBy(by, i), writeScope(branchId, {}));
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

  if (resumeMarker) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        onlyChildInParent
          ? ResumeSymbol.BranchSingleNodeOnlyChildInParent
          : ResumeSymbol.BranchSingleNode,
        scopeId + " " + accessor + branchIds,
      ),
    );
  }
}

export function resumeConditional(
  cb: () => void | number,
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
) {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker = serializeMarker !== 0;
  const branchId = peekNextScopeId();
  if (resumeMarker && resumeBranch) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(ResumeSymbol.BranchStart, branchId + ""),
    );
  }

  const branchIndex = resumeBranch ? withBranchId(branchId, cb) : cb();
  const rendered = branchIndex !== undefined;

  if (resumeBranch && rendered) {
    writeScope(scopeId, {
      [AccessorPrefix.ConditionalRenderer + accessor]: resumeMarker
        ? branchIndex
        : undefined,
      [AccessorPrefix.ConditionalScope + accessor]: writeScope(branchId, {}),
    });
  }

  if (resumeMarker) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        ResumeSymbol.BranchEnd,
        scopeId + " " + accessor,
      ),
    );
  }
}

export function resumeSingleNodeConditional(
  cb: () => void | number,
  scopeId: number,
  accessor: Accessor,
  serializeBranch?: 0 | 1,
  serializeMarker?: 0 | 1,
  onlyChildInParent?: 1,
) {
  const resumeBranch = serializeBranch !== 0;
  const resumeMarker = serializeMarker !== 0;
  const branchId = peekNextScopeId();
  const branchIndex = resumeBranch ? withBranchId(branchId, cb) : cb();
  const shouldWriteBranch = resumeBranch && branchIndex !== undefined;

  if (shouldWriteBranch) {
    writeScope(scopeId, {
      [AccessorPrefix.ConditionalRenderer + accessor]: resumeMarker
        ? branchIndex
        : undefined,
      [AccessorPrefix.ConditionalScope + accessor]: writeScope(branchId, {}),
    });
  }

  if (resumeMarker) {
    $chunk.writeHTML(
      $chunk.boundary.state.mark(
        onlyChildInParent
          ? ResumeSymbol.BranchSingleNodeOnlyChildInParent
          : ResumeSymbol.BranchSingleNode,
        scopeId + " " + accessor + (shouldWriteBranch ? " " + branchId : ""),
      ),
    );
  }
}

let writeScope = (scopeId: number, partialScope: PartialScope) => {
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
  } else {
    state.writeScopes = { [scopeId]: scope };
  }

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

export { writeScope };

export function writeExistingScope(scopeId: number) {
  return writeScope(scopeId, ensureScopeWithId(scopeId));
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

export function fork<T>(
  scopeId: number,
  accessor: Accessor,
  promise: Promise<T> | T,
  content: (value: T) => void,
  serializeMarker?: 0 | 1,
) {
  const resumeMarker = serializeMarker !== 0;

  if (!isPromise(promise)) {
    if (resumeMarker) {
      const branchId = peekNextScopeId();
      $chunk.writeHTML(
        $chunk.boundary.state.mark(ResumeSymbol.BranchStart, branchId + ""),
      );
      content(promise);
      writeScope(scopeId, {
        [AccessorPrefix.ConditionalScope + accessor]: writeScope(branchId, {}),
      });
      $chunk.writeHTML(
        $chunk.boundary.state.mark(
          ResumeSymbol.BranchEnd,
          scopeId + " " + accessor,
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
              const branchId = peekNextScopeId();
              $chunk.writeHTML(
                $chunk.boundary.state.mark(
                  ResumeSymbol.BranchStart,
                  branchId + "",
                ),
              );
              content(value);
              boundary.state.serializer.writeAssign(
                writeScope(branchId, {}),
                ensureScopeWithId(scopeId),
                AccessorPrefix.ConditionalScope + accessor,
              );
              $chunk.writeHTML(
                $chunk.boundary.state.mark(
                  ResumeSymbol.BranchEnd,
                  scopeId + " " + accessor,
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

export function tryContent(
  scopeId: number,
  accessor: Accessor,
  content: () => void,
  input: {
    placeholder?: { content?(): void };
    catch?: { content?(err: unknown): void };
  },
) {
  const branchId = peekNextScopeId();
  $chunk.writeHTML(
    $chunk.boundary.state.mark(ResumeSymbol.BranchStart, branchId + ""),
  );

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
      scopeId + " " + accessor,
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
    const encodeChars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_0123456789";
    const encodeLen = encodeChars.length;
    const encodeStartLen = encodeLen - 10; // Avoids chars that cannot start a property name.
    let index = this.reorderId++;
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
      this.effects = concatEffects(
        this.effects,
        '"' + registryId + '",' + scopeId,
      );
    }
    this.lastEffect = registryId;
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
    flushSerializer(this.boundary);
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

    this.effects = state.resumes = "";
    this.html = html;
    this.scripts = scripts;
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

export function writeSubscribe(
  subscribers: Set<ScopeInternals>,
  scope: ScopeInternals,
) {
  $chunk.boundary.state.serializer.writeCall(scope, subscribers, "add");
  return scope;
}
