import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let value = "a";
  _._html(`<input value=a><input${_._attr_input_value($scope0_id, "#input/0", value)}>${_._el_resume($scope0_id, "#input/0")}<input${_._attr_input_value($scope0_id, "#input/1", value, undefined)}>${_._el_resume($scope0_id, "#input/1")}<button>Update</button>${_._el_resume($scope0_id, "#button/2")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
  _._resume_branch($scope0_id);
}, 1);