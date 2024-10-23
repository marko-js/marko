import { register as _register, checkedValueAttr as _checkedValueAttr, markResumeNode as _markResumeNode, escapeXML as _escapeXML, write as _write, writeEffect as _writeEffect, writeScope as _writeScope, nextScopeId as _nextScopeId, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_createRenderer((input, _tagVar) => {
  const _scope0_id = _nextScopeId();
  const checkedValue = "a";
  _write(`<input type=radio${_checkedValueAttr(checkedValue, _register(function (_new_checkedValue) {
    checkedValue = _new_checkedValue;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange", _scope0_id), "a", _scope0_id, "#input/0")} value=a>${_markResumeNode(_scope0_id, "#input/0")}<input type=radio${_checkedValueAttr(checkedValue, _register(function (_new_checkedValue2) {
    checkedValue = _new_checkedValue2;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0", _scope0_id), "b", _scope0_id, "#input/1")} value=b>${_markResumeNode(_scope0_id, "#input/1")}<input type=radio${_checkedValueAttr(checkedValue, _register(function (_new_checkedValue3) {
    checkedValue = _new_checkedValue3;
  }, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0/checkedValueChange_0", _scope0_id), "c", _scope0_id, "#input/2")} value=c>${_markResumeNode(_scope0_id, "#input/2")}<span>${_escapeXML(checkedValue)}${_markResumeNode(_scope0_id, "#text/3")}</span>`);
  _writeEffect(_scope0_id, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko_0");
  _writeScope(_scope0_id, {
    "checkedValue": checkedValue
  });
});
export default /* @__PURE__ */_createTemplate(_renderer, "packages/translator-tags/src/__tests__/fixtures/controllable-checked-value/template.marko");