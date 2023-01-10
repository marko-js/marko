import { markHydrateNode as _markHydrateNode, write as _write, escapeXML as _escapeXML, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write(`<div>${_markHydrateNode(_scope, 0)}`);
  if (value) {
    const _scope = _nextScopeId();
    _write(`<span>${_markHydrateNode(_scope, 0)}${_escapeXML(value)}</span>`);
  }
  _write("<span></span><span></span></div>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);