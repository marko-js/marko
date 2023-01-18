import { write as _write, dynamicTag as _dynamicTag, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  renderBody
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write("<body>");
  _dynamicTag(renderBody, null);
  _write("</body>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);