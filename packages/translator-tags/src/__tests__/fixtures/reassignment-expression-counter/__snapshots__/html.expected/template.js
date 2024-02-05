import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const count = 0;
  _write(`<button id=addTwo>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")}<button id=triple>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/3")}</button>${_markResumeNode(_scope0_id, "#button/2")}<button id=cube>${_escapeXML(count)}${_markResumeNode(_scope0_id, "#text/5")}</button>${_markResumeNode(_scope0_id, "#button/4")}`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/reassignment-expression-counter/template.marko_0_count");
  _writeScope(_scope0_id, {
    "count": count
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/reassignment-expression-counter/template.marko");