import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let checkedValue = ["a", "b"];
  const _checkedValueChange = _$.register(_new_checkedValue => {
    checkedValue = _new_checkedValue;
  }, "__tests__/template.marko_0/_checkedValueChange", _scope0_id);
  _$.write(`<input${_$.controllable_input_checkedValue(_scope0_id, "#input/0", checkedValue, _checkedValueChange, "a")} type=checkbox>${_$.markResumeNode(_scope0_id, "#input/0")}<input${_$.controllable_input_checkedValue(_scope0_id, "#input/1", checkedValue, _checkedValueChange, "b")} type=checkbox>${_$.markResumeNode(_scope0_id, "#input/1")}<input${_$.controllable_input_checkedValue(_scope0_id, "#input/2", checkedValue, _checkedValueChange, "c")} type=checkbox>${_$.markResumeNode(_scope0_id, "#input/2")}<span>${_$.escapeXML(checkedValue)}${_$.markResumeNode(_scope0_id, "#text/3")}</span>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0");
  _$.writeScope(_scope0_id, {
    checkedValue,
    _checkedValueChange
  }, "__tests__/template.marko", 0, {
    checkedValue: "1:6",
    _checkedValueChange: 0
  });
  _$.resumeClosestBranch(_scope0_id);
});