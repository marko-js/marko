import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const a = 0;
  const b = 0;
  _write(`<div>${_escapeXML("" + a + b)}${_markResumeNode(_scope0_id, "#text/0")}</div>`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko_0_input");
  _writeScope(_scope0_id, {
    "input": input,
    "a": a,
    "b": b
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);