import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  const count2 = 0;
  const count3 = 0;
  const count4 = 0;
  _write(`<div><button>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}<div><button>${_escapeXML(count2)}${_markResumeNode(_scope0_id, "#text/3")}</button>${_markResumeNode(_scope0_id, "#button/2")}<div><button>${_escapeXML(count3)}${_markResumeNode(_scope0_id, "#text/5")}</button>${_markResumeNode(_scope0_id, "#button/4")}</div></div></div><div><button>${_escapeXML(count4)}${_markResumeNode(_scope0_id, "#text/7")}</button>${_markResumeNode(_scope0_id, "#button/6")}</div>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count4");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count3");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count2");
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count,
    "count2": count2,
    "count3": count3,
    "count4": count4
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/shadow-same-scope/template.marko");