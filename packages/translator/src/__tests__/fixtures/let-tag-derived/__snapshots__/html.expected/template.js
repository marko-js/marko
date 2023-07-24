import { markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, register as _register, createRenderer as _createRenderer } from "@marko/runtime-fluurt/src/html";
const _renderer = _register((input, _tagVar, _scope0_) => {
  const _scope0_id = _nextScopeId();
  const {
    a
  } = input;
  const b = a * 2;
  _write(`<button>Increment</button>${_markResumeNode(_scope0_id, "#button/0")}${_escapeXML(a)}${_markResumeNode(_scope0_id, "#text/1")} <!>${_escapeXML(b)}${_markResumeNode(_scope0_id, "#text/2")}`);
  _writeEffect(_scope0_id, "packages/translator/src/__tests__/fixtures/let-tag-derived/template.marko_0_b");
  _writeScope(_scope0_id, {
    "b": b
  }, _scope0_);
}, "packages/translator/src/__tests__/fixtures/let-tag-derived/template.marko");
export default _renderer;
export const render = /* @__PURE__ */_createRenderer(_renderer);