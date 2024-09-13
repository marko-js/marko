import { register as _register, controllable_select_value as _controllable_select_value, write as _write, optionValueAttr as _optionValueAttr, withSelectedValue as _withSelectedValue, markResumeNode as _markResumeNode, escapeXML as _escapeXML, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const value = "b";
  _write(`<select${_controllable_select_value(_scope0_id, "#select/0", value, _register(function (v) {
    value = v;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0/valueChange", _scope0_id))}>`);
  _withSelectedValue(value, () => {
    _write(`<option${_optionValueAttr("a")}>A</option><option${_optionValueAttr("b")}>B</option><option${_optionValueAttr("c")}>C</option>`);
  });
  _write(`</select>${_markResumeNode(_scope0_id, "#select/0")}<span>${_escapeXML(value)}${_markResumeNode(_scope0_id, "#text/1")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko_0");
  _writeScope(_scope0_id, {
    "value": value
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-select/template.marko");