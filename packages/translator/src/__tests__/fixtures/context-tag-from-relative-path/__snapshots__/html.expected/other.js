import { write as _write, dynamicTag as _dynamicTag, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _write("<set value=hello>");
  _dynamicTag(input.renderBody, null);
  _write("</set>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);