import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, popContext as _popContext, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar) => {
  const _scope0_ = _nextScopeId();
  _write("<div>");
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", 1);
  const _scope1_ = _nextScopeId();
  _write("<span>");
  const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");
  _write(`${_escapeXML(x)}${_markHydrateNode(_scope1_, "#text/0")}</span>`);
  _popContext();
  _write("</div>");
};
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);