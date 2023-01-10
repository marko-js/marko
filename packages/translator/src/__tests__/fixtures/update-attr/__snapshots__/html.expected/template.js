import { markHydrateNode as _markHydrateNode, attr as _attr, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`${_markHydrateNode(_scope, 0)}<div a=0${_attr("b", value)}></div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);