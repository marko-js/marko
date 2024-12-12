import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  const checkedValue = ["a", "b"];
  _$.write(`<input${_$.controllable_input_checkedValue(_scope0_id, "#input/0", checkedValue, _$.register(_new_checkedValue => {
    checkedValue = _new_checkedValue;
  }, "__tests__/template.marko_0/checkedValueChange", _scope0_id), "a")} type=checkbox>${_$.markResumeNode(_scope0_id, "#input/0")}<input${_$.controllable_input_checkedValue(_scope0_id, "#input/1", checkedValue, _$.register(_new_checkedValue2 => {
    checkedValue = _new_checkedValue2;
  }, "__tests__/template.marko_0/checkedValueChange_0", _scope0_id), "b")} type=checkbox>${_$.markResumeNode(_scope0_id, "#input/1")}<input${_$.controllable_input_checkedValue(_scope0_id, "#input/2", checkedValue, _$.register(_new_checkedValue3 => {
    checkedValue = _new_checkedValue3;
  }, "__tests__/template.marko_0/checkedValueChange_0", _scope0_id), "c")} type=checkbox>${_$.markResumeNode(_scope0_id, "#input/2")}<span>${_$.escapeXML(checkedValue)}${_$.markResumeNode(_scope0_id, "#text/3")}</span>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    "checkedValue": checkedValue
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);