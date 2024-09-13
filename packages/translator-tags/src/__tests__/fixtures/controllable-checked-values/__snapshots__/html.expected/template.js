import { register as _register, controllable_input_checkedValues as _controllable_input_checkedValues, markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const checkedValues = ["a", "b"];
  _write(`<input${_controllable_input_checkedValues(_scope0_id, "#input/0", checkedValues, _register(function (_new_checkedValues) {
    checkedValues = _new_checkedValues;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange", _scope0_id), "a")} type=checkbox>${_markResumeNode(_scope0_id, "#input/0")}<input${_controllable_input_checkedValues(_scope0_id, "#input/1", checkedValues, _register(function (_new_checkedValues2) {
    checkedValues = _new_checkedValues2;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0", _scope0_id), "b")} type=checkbox>${_markResumeNode(_scope0_id, "#input/1")}<input${_controllable_input_checkedValues(_scope0_id, "#input/2", checkedValues, _register(function (_new_checkedValues3) {
    checkedValues = _new_checkedValues3;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0/checkedValuesChange_0", _scope0_id), "c")} type=checkbox>${_markResumeNode(_scope0_id, "#input/2")}<span>${_escapeXML(checkedValues)}${_markResumeNode(_scope0_id, "#text/3")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko_0");
  _writeScope(_scope0_id, {
    "checkedValues": checkedValues
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-values/template.marko");