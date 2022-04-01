import { nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _hello from "./hello.marko";

const _renderer = input => {
  _hello({
    name: "Frank",

    renderBody() {
      const _scope = _nextScopeId();
    }

  });

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);