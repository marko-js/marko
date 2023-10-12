import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const x = 0;
  const prev = false;
  _write(`<div>x=<span>${_escapeXML(x)}${_markResumeNode(_scope0_id, "#text/0")}</span>, was=<!>${_escapeXML(prev)}${_markResumeNode(_scope0_id, "#text/1")}</div><button id=increment>Increment</button>${_markResumeNode(_scope0_id, "#button/2")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko_0_x");
  _writeScope(_scope0_id, {
    "x": x
  }, _scope0_);
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/lifecycle-tag-assignment/template.marko");