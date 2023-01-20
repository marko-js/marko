import { getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, write as _write, nextScopeId as _nextScopeId, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope = _nextScopeId();
  const _$global = _getInContext("$");
  _write(`<div><span>${_escapeXML(_$global.x)}${_markHydrateNode(_scope, "#text/0")}</span></div>`);
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);