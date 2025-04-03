import _checkbox from "./tags/checkbox.marko";
import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let checkedValue = ["a", "b"];
  const $checkedValueChange = _$.register(_new_checkedValue => {
    checkedValue = _new_checkedValue;
  }, "__tests__/template.marko_0/checkedValueChange2", $scope0_id);
  const $childScope = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "a"
  });
  const $childScope2 = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "b"
  });
  const $childScope3 = _$.peekNextScope();
  _checkbox({
    checkedValue: checkedValue,
    checkedValueChange: $checkedValueChange,
    value: "c"
  });
  _$.write(`<span>${_$.escapeXML(checkedValue)}${_$.markResumeNode($scope0_id, "#text/3")}</span>`);
  _$.writeScope($scope0_id, {
    $checkedValueChange,
    "#childScope/0": _$.writeExistingScope($childScope),
    "#childScope/1": _$.writeExistingScope($childScope2),
    "#childScope/2": _$.writeExistingScope($childScope3)
  }, "__tests__/template.marko", 0, {
    $checkedValueChange: 0
  });
  _$.resumeClosestBranch($scope0_id);
});