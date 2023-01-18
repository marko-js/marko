import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  a,
  b,
  x,
  y
}, _tagVar) => {
  const _scope = _nextScopeId();
  if (a + b) {
    const _scope = _nextScopeId();
    _write("Hello");
  }
  if (a, b) {
    const _scope = _nextScopeId();
    _write("World");
  }
  _write("<div>");
  if (x) {
    const _scope = _nextScopeId();
    _write("A");
  } else if (y) {
    const _scope = _nextScopeId();
    _write("B");
  } else {
    const _scope = _nextScopeId();
    _write("C");
  }
  _write("</div>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);