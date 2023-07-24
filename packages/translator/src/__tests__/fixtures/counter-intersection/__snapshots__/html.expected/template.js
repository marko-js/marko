import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  const b = 0;
  _write(`<div><button class=a>${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/1")}</button>${_markResumeNode(_scope0_id, "#button/0")} + <button class=b>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/3")}</button>${_markResumeNode(_scope0_id, "#button/2")} = <!>${_escapeXML(a + b)}${_markResumeNode(_scope0_id, "#text/4")}</div>`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/counter-intersection/template.marko_0");
  _writeScope(_scope0_id, {
    "a": a,
    "b": b
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/counter-intersection/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);