import { write as _write, escapeXML as _escapeXML, markResumeNode as _markResumeNode, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const arrA = [1, 2, 3];
  _write("<div>");
  for (const val of arrA) {
    const _scope1_id = _nextScopeId();
    _write(`<div>${_escapeXML(val)}${_markResumeNode(_scope1_id, "#text/0")}</div>`);
  }
  _write("</div><div>");
  for (const val of arrA) {
    const _scope2_id = _nextScopeId();
    _write(`<div>${_escapeXML(val)}${_markResumeNode(_scope2_id, "#text/0")}</div>`);
  }
  _write("<div></div></div>");
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/for-tag-siblings/template.marko");