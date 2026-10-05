import { RENDER_BODY_ID, SET_SCOPE_REGISTER_ID } from "../common/compat-meta";
import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import { RendererProp, type Scope } from "../common/types";
import { writeLoadAsset } from "./assets";
import { patchDynamicTag } from "./dynamic-tag";
import { getRegistered, register } from "./serializer";
import type { ServerRenderer } from "./template";
import {
  _await,
  _html,
  _peek_scope_id,
  _scope,
  _scope_id,
  _script,
  _set_scope_reason,
  CLIENT_ALL,
  $global,
  Boundary,
  Chunk,
  FlushStatus,
  getChunk,
  getScopeId,
  isInResumedBranch,
  joinHeldEffects,
  State,
  withChunk,
  writeScript,
} from "./writer";

const K_TAGS_API_STATE = Symbol();
// Module-global is safe: a scope-bound serializable function is a fresh closure
// per render, so the same object is never reused (or re-scoped) across renders.
const COMPAT_REGISTRY = new WeakMap<
  WeakKey,
  [registryId: string, scopeId: unknown]
>();

export const compat = {
  $global,
  writeLoadAsset,
  fork: _await,
  write: _html,
  writeScript,
  nextScopeId: _scope_id,
  peekNextScopeId: _peek_scope_id,
  isInResumedBranch,
  withChunk,
  getChunk,
  ensureState($global: any) {
    let state: State | undefined = ($global[K_TAGS_API_STATE] ||=
      getChunk()?.boundary.state);
    if (!state) {
      $global.runtimeId ||= DEFAULT_RUNTIME_ID;
      $global.renderId ||=
        $global.componentIdPrefix ||
        $global.widgetIdPrefix ||
        DEFAULT_RENDER_ID;
      $global[K_TAGS_API_STATE] = state = new State($global);
    }

    return state;
  },
  isTagsAPI(fn: any) {
    return !!fn[RendererProp.Id];
  },
  onFlush(fn: (chunk: Chunk) => void) {
    const { flushHTML } = Chunk.prototype;
    Chunk.prototype.flushHTML = function (boundary) {
      const { state } = boundary;
      // The class content this flushes first leaves the page's reorders to the page's
      // own flush, which streams them and holds their effects while in-order content does.
      const reorders = swapReorders(state, null);
      fn(this);
      swapReorders(state, reorders);
      return flushHTML.call(this, boundary);
    };
  },
  patchDynamicTag,
  writeSetScopeForComponent(branchId: number, m5c: string, m5i: unknown) {
    _scope(branchId, { m5c, m5i });
    _script(branchId, SET_SCOPE_REGISTER_ID);
  },
  toJSON() {
    return function toJSON(this: WeakKey) {
      let compatRegistered = COMPAT_REGISTRY.get(this);
      if (!compatRegistered) {
        const registered = getRegistered(this);
        if (registered) {
          const scopeId = registered.scope
            ? getScopeId(registered.scope as Scope)
            : undefined;
          if (scopeId !== undefined) {
            _script(scopeId, SET_SCOPE_REGISTER_ID);
          }
          COMPAT_REGISTRY.set(
            this,
            (compatRegistered = [registered.id, scopeId]),
          );
        }
      }

      return compatRegistered;
    };
  },
  // Joins the chunks of class content to flush as one, dropping those a tags `@catch`
  // cut after they rendered, whose component scopes, effects and lazy content are dead.
  joinChunks(chunks: Chunk[]) {
    let joined: Chunk | undefined;
    for (const chunk of chunks) {
      if (chunk.boundary.aborted) continue;
      if (joined) joined.append(chunk);
      else joined = chunk;
    }
    return joined;
  },
  // Joins the tags content a class render's html carries to the chunk it streams
  // in, so its effects wait for and drop with the content around it.
  appendChunks(chunks: Chunk[]) {
    const chunk = getChunk()!;
    for (const part of chunks) {
      chunk.append(part);
      // Its effects now end the chunk's, so ids continue only from its last.
      if (part.effects) chunk.lastEffect = part.lastEffect;
    }
  },
  // Parks the reorders a class render's html carries just after the chunk it streams
  // in, so each queues once that html, holding the markers it replaces, streams.
  deferReorders(reorders: Chunk[]) {
    const chunk = getChunk()!;
    for (let i = reorders.length; i--;) {
      const carrier = chunk.fork(chunk.boundary, chunk.next);
      carrier.deferredReorder = reorders[i];
      chunk.next = carrier;
    }
  },
  createChunk($global: any) {
    const state = this.ensureState($global);
    return new Chunk(new Boundary(state), null, null, state);
  },
  // Flushes as `Chunk.flushHTML` does, with the reorders whose markers the class html
  // streams, but leaves their html (`<t>`s) and the scripts for the caller to write.
  flushScript(chunk: Chunk, reorders?: Chunk[]) {
    const { boundary } = chunk;
    const { state } = boundary;
    let html = "";
    let scripts = "";
    if (reorders) {
      for (const reorder of reorders) state.reorder(reorder);
    }
    if (boundary.flush() === FlushStatus.complete) {
      ({ html, scripts } = chunk.flushScript(boundary));
    }
    if (boundary.aborted) throw boundary.reason;
    if (boundary.count) {
      throw new Error(
        "Cannot serialize promise across tags/class compat layer.",
      );
    }
    return { html, scripts };
  },
  render(
    renderer: ServerRenderer,
    willRerender: boolean,
    classAPIOut: any,
    component: any,
    input: any,
    componentScopes: Chunk[],
    registerChildScope?: boolean,
    parentChunk?: Chunk,
  ) {
    // Class content settling after a tags `@catch` around it fired is cut with what
    // the catch replaced, so none of its tags content renders.
    if (parentChunk?.boundary.aborted) return;
    const state = this.ensureState(classAPIOut.global);
    // Part of the tags content around the class component, it aborts with it.
    const boundary = new Boundary(state, undefined, parentChunk?.boundary);
    // Inherit the enclosing chunk's context so a Class under an async/lazy
    // Tags region keeps its branch association (`_resume_branch`/ClosestBranchId).
    const context = getChunk()?.context ?? null;
    // The class template continues after this render, so its chunks end in one
    // standing for that content: an `<await>` ending them does not end the page.
    let head = new Chunk(
      boundary,
      new Chunk(boundary, null, context, state),
      context,
      state,
    );
    let normalizedInput = input;
    if ("renderBody" in input) {
      normalizedInput = {};
      for (const key in input) {
        normalizedInput[key === "renderBody" ? "content" : key] = input[key];
      }
    }

    // The scopes (`$C_s`) the class runtime binds components to as it inits, which
    // flush ahead of that init code, apart from the content's effects.
    const componentScope = new Chunk(boundary, null, context, state);
    componentScope.render(() => {
      // Handlers bind to a scope of their own: sharing the boundary scope would
      // pull whatever input the child was given through the serializer with them.
      if (this.hasPendingClassFunctions(classAPIOut.global)) {
        drainClassFunctions(classAPIOut.global, (hostId) => {
          const fnScopeId = _scope_id();
          const scope = _scope(fnScopeId, { m5c: component.id, m5h: hostId });
          _script(fnScopeId, SET_SCOPE_REGISTER_ID);
          return scope;
        });
      }

      if (willRerender || registerChildScope) {
        const scopeId = _peek_scope_id();
        _scope(scopeId, { m5c: component.id });
        _script(scopeId, SET_SCOPE_REGISTER_ID);
      }
    });

    head.render(() => {
      _set_scope_reason(willRerender ? CLIENT_ALL : 0);
      try {
        renderer(normalizedInput);
      } finally {
        _set_scope_reason(undefined);
      }

      const asyncOut = classAPIOut.beginAsync({ last: true, timeout: -1 });
      classAPIOut.onLast((next: any) => {
        (boundary.onNext = () => {
          if (boundary.aborted) {
            boundary.onNext = NOOP;
            if (parentChunk?.boundary.aborted) {
              // Cut with the tags content around it, the class output is discarded.
              asyncOut.end();
              next();
            } else {
              asyncOut.error(boundary.reason);
            }
          } else if (!boundary.count) {
            boundary.onNext = NOOP;
            // The reorders this pass queues travel with the html holding their
            // markers, which the class API may hold behind content still pending.
            const queued = swapReorders(state, null);
            head = head.consume(boundary);
            const reorders = swapReorders(state, queued);
            if (reorders) asyncOut.writer.get("reorders").push(...reorders);
            const heldEffects = head.takeHeldEffects();
            if (heldEffects) {
              // Settled whole, it joins what it holds to its own effects, which travel
              // with its html; ids restart after them.
              head.effects = joinHeldEffects(heldEffects, head.effects);
              head.lastEffect = "";
            }
            asyncOut.write(head.html);
            asyncOut.script(head.scripts);
            head.html = head.scripts = "";
            asyncOut.writer.get("chunks").push(head);
            asyncOut.end();
            componentScopes.push(componentScope);
            next();
          }
        })();
      });
    });
  },
  register,
  registerRenderBody(fn: any) {
    register(RENDER_BODY_ID, fn);
  },
  // A class closure has no browser identity, so it resumes as a noop; a parent
  // that rerenders replaces it with the live handler as it hydrates. Only the
  // top level is scanned: crawling every input would cost more than it serializes.
  registerClassFunctions(input: any) {
    // Own keys only: a nested closure resuming as a noop swallows its own clicks,
    // so leaving it to fail as unserializable reports the split parent instead.
    for (const key in input) {
      const value = input[key];
      if (typeof value === "function" && !getRegistered(value)) {
        register(RENDER_BODY_ID, value);
      }
    }
  },
  // Hold a direct class→tags handler until its resume scope is created below.
  registerClassFunction<T extends WeakKey>(
    $global: object,
    id: string,
    fn: T,
    hostId: string,
  ) {
    let pending = pendingClassFunctions.get($global);
    if (!pending) {
      pendingClassFunctions.set($global, (pending = []));
    }
    pending.push([id, fn, hostId]);
    return fn;
  },
  hasPendingClassFunctions($global: object) {
    return !!pendingClassFunctions.get($global)?.length;
  },
};

// Keyed by $global so an aborted render's entries die with it instead of
// bleeding into whichever class-to-tags render drains next.
const pendingClassFunctions = new WeakMap<
  object,
  [id: string, fn: WeakKey, hostId: string][]
>();

function drainClassFunctions(
  $global: object,
  writeScope: (hostId: string) => unknown,
) {
  const pending = pendingClassFunctions.get($global)!;
  const scopeByHost: Record<string, unknown> = {};
  for (const [id, fn, hostId] of pending) {
    register(id, fn, (scopeByHost[hostId] ||= writeScope(hostId)));
  }
  pending.length = 0;
}

function swapReorders(state: State, reorders: Chunk[] | null) {
  const { writeReorders } = state;
  state.writeReorders = reorders;
  return writeReorders;
}

function NOOP() {}
