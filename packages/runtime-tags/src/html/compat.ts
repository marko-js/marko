import {
  RENDER_BODY_ID,
  RENDERER_REGISTER_ID,
  SET_SCOPE_REGISTER_ID,
} from "../common/compat-meta";
import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import type { Scope } from "../common/types";
import { patchDynamicTag } from "./dynamic-tag";
import { getRegistered, register } from "./serializer";
import { isTemplate, type ServerRenderer } from "./template";
import {
  $global,
  Boundary,
  Chunk,
  fork,
  getChunk,
  getScopeId,
  isInResumedBranch,
  nextScopeId,
  peekNextScopeId,
  State,
  write,
  writeEffect,
  writeScope,
  writeScopeToState,
  writeScript,
} from "./writer";

const K_TAGS_API_STATE = Symbol();
const COMPAT_REGISTRY = new WeakMap<
  WeakKey,
  [registryId: string, scopeId: unknown]
>();

export const compat = {
  $global,
  fork,
  write,
  writeScript,
  nextScopeId,
  peekNextScopeId,
  isInResumedBranch,
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
    return !!fn.___id;
  },
  onFlush(fn: (chunk: Chunk) => void) {
    const { flushHTML } = Chunk.prototype;
    Chunk.prototype.flushHTML = function () {
      fn(this);
      return flushHTML.call(this);
    };
  },
  patchDynamicTag,
  writeSetScopeForComponent(branchId: number, m5c: string) {
    writeScope(branchId, { m5c });
    writeEffect(branchId, SET_SCOPE_REGISTER_ID);
  },
  toJSON(state: State) {
    return function toJSON(this: WeakKey) {
      let compatRegistered = COMPAT_REGISTRY.get(this);
      if (!compatRegistered) {
        const registered = getRegistered(this);
        if (registered) {
          const scopeId = getScopeId(registered.scope as Scope);
          if (scopeId !== undefined) {
            writeScopeToState(state, scopeId, {});
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
  render(
    renderer: ServerRenderer,
    willRerender: boolean,
    classAPIOut: any,
    component: any,
    input: any,
    completeChunks: Chunk[],
  ) {
    const boundary = new Boundary(this.ensureState(classAPIOut.global));
    let head = new Chunk(
      boundary,
      null,
      null /* TODO: this should grab the context from the previous chunk */,
    );
    let normalizedInput = input;
    if ("renderBody" in input) {
      normalizedInput = {};
      for (const key in input) {
        normalizedInput[key === "renderBody" ? "content" : key] = input[key];
      }
    }

    head.render(() => {
      if (willRerender) {
        const scopeId = peekNextScopeId();
        writeScope(scopeId, { m5c: component.id });
        writeEffect(scopeId, SET_SCOPE_REGISTER_ID);
      }

      if (isTemplate(renderer) && willRerender) {
        renderer(normalizedInput, 1);
      } else {
        renderer(normalizedInput);
      }

      const asyncOut = classAPIOut.beginAsync();
      (boundary.onNext = () => {
        if (boundary.signal.aborted) {
          asyncOut.error(boundary.signal.reason);
          boundary.onNext = NOOP;
        } else if (!boundary.count) {
          completeChunks.push((head = head.consume()));
          asyncOut.write(head.html);
          asyncOut.script(head.scripts);
          asyncOut.end();
          head.html = head.scripts = "";
        }
      })();
    });
  },
  registerRenderer(renderer: any, id: string) {
    return register(
      RENDERER_REGISTER_ID,
      renderer,
      register(id, () => {}),
    );
  },
  registerRenderBody(fn: any) {
    register(RENDER_BODY_ID, fn);
  },
};

function NOOP() {}
