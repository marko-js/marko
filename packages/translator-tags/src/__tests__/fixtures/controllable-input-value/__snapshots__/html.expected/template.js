import { register as _register, controllable_input_value as _controllable_input_value, markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const value = "hello";
  _write(`<input${_controllable_input_value(_scope0_id, "#input/0", value, _register(function (_new_value) {
    value = _new_value;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-input-value/template.marko_0/valueChange", _scope0_id))} type=text>${_markResumeNode(_scope0_id, "#input/0")}<span>${_escapeXML(value)}${_markResumeNode(_scope0_id, "#text/1")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-input-value/template.marko_0");
  _writeScope(_scope0_id, {
    "value": value
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-input-value/template.marko");