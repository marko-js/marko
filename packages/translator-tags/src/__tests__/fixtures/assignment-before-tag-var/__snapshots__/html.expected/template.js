import { markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  const lastClickCount = undefined;
  _write(`<button>+</button>${_markResumeNode(_scope0_id, "#button/0")}<span>${_escapeXML(clickCount)}${_markResumeNode(_scope0_id, "#text/1")} was <!>${_escapeXML(lastClickCount)}${_markResumeNode(_scope0_id, "#text/2")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko_0_clickCount");
  _writeScope(_scope0_id, {
    "clickCount": clickCount
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko");