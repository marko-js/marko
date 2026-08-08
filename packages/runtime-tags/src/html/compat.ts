import { RENDER_BODY_ID, SET_SCOPE_REGISTER_ID } from "../common/compat-meta";
import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import { RendererProp, type Scope } from "../common/types";
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
  _set_serialize_reason,
  $global,
  Boundary,
  Chunk,
  FlushStatus,
  getChunk,
  getScopeId,
  isInResumedBranch,
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
    Chunk.prototype.flushHTML = function () {
      fn(this);
      return flushHTML.call(this);
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
  createChunk($global: any) {
    const state = this.ensureState($global);
    return new Chunk(new Boundary(state), null, null, state);
  },
  flushScript($global: any, chunk?: Chunk) {
    chunk ||= this.createChunk($global);

    const { boundary } = chunk;
    switch (boundary.flush()) {
      case FlushStatus.aborted:
        throw boundary.signal.reason;
      case FlushStatus.continue:
        throw new Error(
          "Cannot serialize promise across tags/class compat layer.",
        );
    }

    return chunk.flushScript().scripts;
  },
  render(
    renderer: ServerRenderer,
    willRerender: boolean,
    classAPIOut: any,
    component: any,
    input: any,
    completeChunks: Chunk[],
    registerChildScope?: boolean,
  ) {
    const state = this.ensureState(classAPIOut.global);
    const boundary = new Boundary(state);
    let head = new Chunk(
      boundary,
      null,
      // Inherit the enclosing chunk's context so a Class under an async/lazy
      // Tags region keeps its branch association (`_resume_branch`/ClosestBranchId).
      getChunk()?.context ?? null,
      state,
    );
    let normalizedInput = input;
    if ("renderBody" in input) {
      normalizedInput = {};
      for (const key in input) {
        normalizedInput[key === "renderBody" ? "content" : key] = input[key];
      }
    }

    head.render(() => {
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

      _set_serialize_reason(willRerender ? 1 : 0);
      try {
        renderer(normalizedInput);
      } finally {
        _set_serialize_reason(undefined);
      }

      const asyncOut = classAPIOut.beginAsync({ last: true, timeout: -1 });
      classAPIOut.onLast((next: any) => {
        (boundary.onNext = () => {
          if (boundary.signal.aborted) {
            asyncOut.error(boundary.signal.reason);
            boundary.onNext = NOOP;
          } else if (!boundary.count) {
            boundary.onNext = NOOP;
            head = head.consume();
            asyncOut.write(head.html);
            asyncOut.script(head.scripts);
            asyncOut.end();
            head.html = head.scripts = "";
            completeChunks.push(head);
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
    for (const key in input) {
      const value = input[key];
      if (typeof value === "function" && !getRegistered(value)) {
        register(RENDER_BODY_ID, value);
      }
    }
  },
  // Emitted around a function nested in a class-to-tags attribute. The scope it
  // resumes through is only created once the render below starts, so it is held
  // on the render's $global until then rather than registered against nothing.
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

function NOOP() {}
