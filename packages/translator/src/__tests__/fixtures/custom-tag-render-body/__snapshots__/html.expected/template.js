import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _child from "./components/child/index.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _child({
    name: "World",
    renderBody() {
      const _scope = _nextScopeId();
      _write("This is the body content");
    }
  });
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);