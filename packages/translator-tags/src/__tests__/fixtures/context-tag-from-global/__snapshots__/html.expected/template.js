import { write as _write, getInContext as _getInContext, escapeXML as _escapeXML, markResumeNode as _markResumeNode, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  _write("<div><span>");
  const {
    x
  } = _getInContext("$");
  _write(`${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/0")}</span></div>`);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/context-tag-from-global/template.marko");