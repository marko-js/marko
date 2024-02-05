import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  const lastCount = 0;
  const lastCount2 = 0;
  _write(`<button>${_escapeXML(clickCount)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}used to be <span>${_escapeXML(lastCount)}${_markResumeNode(_scope0_id, "#text/2")}</span> which should be the same as <span>${_escapeXML(lastCount2)}${_markResumeNode(_scope0_id, "#text/3")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount");
  _writeScope(_scope0_id, {
    "clickCount": clickCount
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/nested-assignment-expression/template.marko");