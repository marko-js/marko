import { register as _register, escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const clickCount = 0;
  const increment = _register(function () {
    clickCount++;
  }, "packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko_0/increment", _scope0_id);
  _write(`<button>${_escapeXML(clickCount)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko_0_increment");
  _writeScope(_scope0_id, {
    "increment": increment,
    "clickCount": clickCount
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-counter-const-event-handler/template.marko");