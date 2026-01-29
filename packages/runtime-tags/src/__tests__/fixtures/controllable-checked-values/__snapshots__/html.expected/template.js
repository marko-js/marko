import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let checkedValue = ["a", "b"];
  const $checkedValueChange = _._resume(_new_checkedValue => {
    checkedValue = _new_checkedValue;
  }, "__tests__/template.marko_0/checkedValueChange2", $scope0_id);
  _._html(`<input${_._attr_input_checkedValue($scope0_id, "#input/0", checkedValue, $checkedValueChange, "a")} type=checkbox>${_._el_resume($scope0_id, "#input/0")}<input${_._attr_input_checkedValue($scope0_id, "#input/1", checkedValue, $checkedValueChange, "b")} type=checkbox>${_._el_resume($scope0_id, "#input/1")}<input${_._attr_input_checkedValue($scope0_id, "#input/2", checkedValue, $checkedValueChange, "c")} type=checkbox>${_._el_resume($scope0_id, "#input/2")}<span>${_._escape(checkedValue)}${_._el_resume($scope0_id, "#text/3")}</span>`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {
    checkedValue,
    $checkedValueChange
  }, "__tests__/template.marko", 0, {
    checkedValue: "1:6",
    $checkedValueChange: 0
  });
  _._resume_branch($scope0_id);
});