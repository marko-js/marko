import { write as _write, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = ({
  value
}, _tagVar) => {
  const _scope = _nextScopeId();
  _write("<div>");
  if (value) {
    const _scope = _nextScopeId();
    _write(`<span>${_escapeXML(value)}${_markHydrateNode(_scope, "#text/0")}</span>`);
  }
  _write("<span></span><span></span></div>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);