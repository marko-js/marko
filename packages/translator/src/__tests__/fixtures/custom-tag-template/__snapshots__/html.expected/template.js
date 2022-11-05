import { nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./hello.marko";

const _renderer = input => {
  const _scope = _nextScopeId();

  _hello({
    name: "Frank",

    renderBody() {
      const _scope = _nextScopeId();
    }

  });
};

export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);