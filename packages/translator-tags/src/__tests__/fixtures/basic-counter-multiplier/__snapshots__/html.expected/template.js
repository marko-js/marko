import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const multiplier = 1;
  const multipliedCount = count * multiplier;
  _write(`<button id=multiplier>increase multiplier (<!>${_escapeXML(multiplier)}${_markResumeNode(_scope0_id, "#text/1")})</button>${_markResumeNode(_scope0_id, "#button/0")}<button id=count>increase count</button>${_markResumeNode(_scope0_id, "#button/2")}<div>${_escapeXML(multipliedCount)}${_markResumeNode(_scope0_id, "#text/3")}</div>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_count");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_multiplier");
  _writeScope(_scope0_id, {
    "count": count,
    "multiplier": multiplier
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko");