import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
import _counter from "./components/counter.marko";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  _write("<div>");
  _counter({
    renderBody() {
      const _scope = _nextScopeId();
    }
  });
  _write("</div>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);