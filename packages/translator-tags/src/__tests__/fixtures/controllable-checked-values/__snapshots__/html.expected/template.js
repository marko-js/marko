import { register as _register, controllable_input_checkedValue as _controllable_input_checkedValue, markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const checkedValue = ["a", "b"];
  _write(`<input${_controllable_input_checkedValue(_scope0_id, "#input/0", checkedValue, _register(function (_new_checkedValue) {
    checkedValue = _new_checkedValue;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValueChange", _scope0_id), "a")} type=checkbox>${_markResumeNode(_scope0_id, "#input/0")}<input${_controllable_input_checkedValue(_scope0_id, "#input/1", checkedValue, _register(function (_new_checkedValue2) {
    checkedValue = _new_checkedValue2;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValueChange_0", _scope0_id), "b")} type=checkbox>${_markResumeNode(_scope0_id, "#input/1")}<input${_controllable_input_checkedValue(_scope0_id, "#input/2", checkedValue, _register(function (_new_checkedValue3) {
    checkedValue = _new_checkedValue3;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValueChange_0", _scope0_id), "c")} type=checkbox>${_markResumeNode(_scope0_id, "#input/2")}<span>${_escapeXML(checkedValue)}${_markResumeNode(_scope0_id, "#text/3")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0");
  _writeScope(_scope0_id, {
    "checkedValue": checkedValue
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko");