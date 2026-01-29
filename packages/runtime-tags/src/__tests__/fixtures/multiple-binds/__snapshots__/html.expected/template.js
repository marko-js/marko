import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let count = 0;
  const $valueChange = _._resume(_new_count => {
    count = _new_count;
  }, "__tests__/template.marko_0/valueChange2", $scope0_id);
  _._html(`<button><input${_._attr_input_value($scope0_id, "#input/1", count, $valueChange)}>${_._el_resume($scope0_id, "#input/1")}<input${_._attr_input_value($scope0_id, "#input/2", count, $valueChange)}>${_._el_resume($scope0_id, "#input/2")}</button>${_._el_resume($scope0_id, "#button/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._script($scope0_id, "__tests__/template.marko_0_count");
  _._scope($scope0_id, {
    count,
    $valueChange
  }, "__tests__/template.marko", 0, {
    count: "1:5",
    $valueChange: 0
  });
  _._resume_branch($scope0_id);
});