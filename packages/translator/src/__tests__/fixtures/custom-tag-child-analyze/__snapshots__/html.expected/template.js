import { write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _write("Hello Frank");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);