import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let checked = 0;
  _._html(`<input${_._attr_input_checkedValue($scope0_id, "#input/0", checked + "", _._resume(function (v) {
    checked = +v;
  }, "__tests__/template.marko_0/checkedValueChange", $scope0_id), 0)} type=radio>${_._el_resume($scope0_id, "#input/0")}<input${_._attr_input_checkedValue($scope0_id, "#input/1", checked, _._resume(function (v) {
    checked = +v;
  }, "__tests__/template.marko_0/checkedValueChange2", $scope0_id), "1")} type=radio>${_._el_resume($scope0_id, "#input/1")}<input${_._attr_input_checkedValue($scope0_id, "#input/2", checked, _._resume(function (v) {
    checked = +v;
  }, "__tests__/template.marko_0/checkedValueChange3", $scope0_id), 2)} type=radio>${_._el_resume($scope0_id, "#input/2")}<span>${_._escape(checked)}${_._el_resume($scope0_id, "#text/3")}</span>`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});