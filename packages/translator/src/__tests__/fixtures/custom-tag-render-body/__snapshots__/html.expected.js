import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";

const _renderer = input => {
  _child({
    name: "World",

    renderBody() {
      _write("This is the body content");

      const _scope = _nextScopeId();
    }

  });

  const _scope = _nextScopeId();
};

export default _renderer;
export const render = _createRenderer(_renderer);