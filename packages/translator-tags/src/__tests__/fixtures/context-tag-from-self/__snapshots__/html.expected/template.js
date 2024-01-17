import { write as _write, pushContext as _pushContext, getInContext as _getInContext, escapeXML as _escapeXML, markResumeNode as _markResumeNode, nextScopeId as _nextScopeId, popContext as _popContext, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div>");
  _pushContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko", 1);
  const _scope1_id = _nextScopeId();
  _write("<span>");
  const x = _getInContext("packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");
  _write(`${_escapeXML(x)}${_markResumeNode(_scope1_id, "#text/0")}</span>`);
  _popContext();
  _write("</div>");
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/context-tag-from-self/template.marko");