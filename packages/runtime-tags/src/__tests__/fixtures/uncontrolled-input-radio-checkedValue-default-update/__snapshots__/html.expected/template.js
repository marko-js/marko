import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "a";
  _._html(`<input${_._attr_input_checkedValue($scope0_id, "#input/0", "a", void 0, "a")} type=radio><input${_._attr_input_checkedValue($scope0_id, "#input/1", "a", void 0, "b")} type=radio><input${_._attr_input_checkedValue($scope0_id, "#input/2", value, void 0, "b")} type=radio>${_._el_resume($scope0_id, "#input/2")}<input${_._attr_input_checkedValue($scope0_id, "#input/3", value, undefined, "b")} type=radio>${_._el_resume($scope0_id, "#input/3")}<button>Update</button>${_._el_resume($scope0_id, "#button/4")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
});