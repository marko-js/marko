import { escapeXML as _escapeXML, markResumeNode as _markResumeNode, write as _write, nextScopeId as _nextScopeId, writeEffect as _writeEffect, writeScope as _writeScope, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/html";
const _renderer = (input, _tagVar, _scope0_) => {
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
};
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator/src/__tests__/fixtures/user-effect-cleanup/template.marko");