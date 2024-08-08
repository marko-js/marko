import {
  RENDERER_REGISTER_ID,
  SET_SCOPE_REGISTER_ID,
} from "../common/compat-meta";
import { DEFAULT_RENDER_ID, DEFAULT_RUNTIME_ID } from "../common/meta";
import type { Renderer, Scope } from "../common/types";
import { patchDynamicTag } from "./dynamic-tag";
import { getRegistered, register } from "./serializer";
import {
  Boundary,
  Chunk,
  fork,
  getChunk,
  getScopeId,
  nextScopeId,
  peekNextScopeId,
  prepareChunk,
  State,
  write,
  writeEffect,
  writeScope,
  writeScript,
} from "./writer";

const K_TAGS_API_STATE = Symbol();
const COMPAT_REGISTRY = new WeakMap<
  WeakKey,
  [registryId: string, scopeId: unknown]
>();

export const compat = {
  fork,
  write,
  writeScript,
  nextScopeId,
  patchDynamicTag,
  writeSetScopeForComponent(m5c: string) {
    const scopeId = nextScopeId();
    writeScope(scopeId, { m5c });
    writeEffect(scopeId, SET_SCOPE_REGISTER_ID);
  },
  toJSON(this: WeakKey) {
    let compatRegistered = COMPAT_REGISTRY.get(this);
    if (!compatRegistered) {
      const registered = getRegistered(this);
      if (registered) {
        const scopeId = getScopeId(registered.scope as Scope);
        if (scopeId !== undefined) {
          writeScope(scopeId, {});
        }
        COMPAT_REGISTRY.set(
          this,
          (compatRegistered = [registered.id, scopeId]),
        );
      }
    }

    return compatRegistered;
  },
  render(
    renderer: Renderer,
    willRerender: boolean,
    classAPIOut: any,
    component: any,
    input: any,
  ) {
    const $global = classAPIOut.global;
    let state: State | undefined = ($global[K_TAGS_API_STATE] ||=
      getChunk()?.boundary.state);
    if (!state) {
      $global.runtimeId ||= DEFAULT_RUNTIME_ID;
      $global.renderId ||= $global.componentIdPrefix || DEFAULT_RENDER_ID;
      $global[K_TAGS_API_STATE] = state = new State($global);
    }

    const boundary = new Boundary(state);
    let head = new Chunk(boundary, null);
    head.render(() => {
      if (willRerender) {
        const scopeId = peekNextScopeId();
        writeScope(scopeId, { m5c: component.id });
        writeEffect(scopeId, SET_SCOPE_REGISTER_ID);
      }

      renderer(input);
    });

    const asyncOut = classAPIOut.beginAsync();
    (boundary.onNext = () => {
      if (boundary.done) {
        if (boundary.signal.aborted) {
          asyncOut.error(boundary.signal.reason);
        } else {
          queueMicrotask(() => {
            const { scripts, html } = (head = prepareChunk(head));
            asyncOut.script(scripts);
            asyncOut.write(html);
            asyncOut.end();
            head.html = head.scripts = "";
          });
        }
      }
    })();
  },
  registerRenderer(renderer: any, id: string) {
    return register(
      RENDERER_REGISTER_ID,
      renderer,
      register(id, () => {}),
    );
  },
};
