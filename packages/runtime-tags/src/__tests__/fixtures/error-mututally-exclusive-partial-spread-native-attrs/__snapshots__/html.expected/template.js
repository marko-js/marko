import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  _._html(`<input${_._attrs({
    type: "checkbox",
    checkedValue: 1,
    ...{
      checkedChange: _._resume(function () {}, "__tests__/template.marko_0/checkedChange")
    }
  }, "#input/0", $scope0_id, "input")}>${_._el_resume($scope0_id, "#input/0")}`);
  _._script($scope0_id, "__tests__/template.marko_0");
  _._scope($scope0_id, {}, "__tests__/template.marko", 0);
});