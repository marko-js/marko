import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, markHydrateNode as _markHydrateNode, nextScopeId as _nextScopeId, popContext as _popContext, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", 1);
  const _scope1_id = _nextScopeId();
  _write("<span>");
  const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");
  _write(`${_escapeXML(x)}${_markHydrateNode(_scope1_id, "#text/0")}</span>`);
  _popContext();
  _write("</div>");
}, "packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);