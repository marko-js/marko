import _checkbox from "./tags/checkbox.marko";
import * as _ from "@marko/runtime-tags/debug/html";
export default _._template("__tests__/template.marko", input => {
  _._scope_reason();
  const $scope0_id = _._scope_id();
  let checkedValue = ["a", "b"];
  const $checkedValueChange = _._resume(_new_checkedValue => {
    checkedValue = _new_checkedValue;
  }, "__tests__/template.marko_0/checkedValueChange2", $scope0_id);
  const $childScope = _._peek_scope_id();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "a"
  });
  const $childScope2 = _._peek_scope_id();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "b"
  });
  const $childScope3 = _._peek_scope_id();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "c"
  });
  _._html(`<span>${_._escape(checkedValue)}${_._el_resume($scope0_id, "#text/3")}</span>`);
  _._scope($scope0_id, {
    $checkedValueChange,
    "#childScope/0": _._existing_scope($childScope),
    "#childScope/1": _._existing_scope($childScope2),
    "#childScope/2": _._existing_scope($childScope3)
  }, "__tests__/template.marko", 0, {
    $checkedValueChange: 0
  });
  _._resume_branch($scope0_id);
});