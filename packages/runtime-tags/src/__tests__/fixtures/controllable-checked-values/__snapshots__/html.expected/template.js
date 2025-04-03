import * as _$ from "@marko/runtime-tags/debug/html";
export default _$.createTemplate("__tests__/template.marko", input => {
  const $scope0_id = _$.nextScopeId();
  let checkedValue = ["a", "b"];
  const $checkedValueChange = _$.register(_new_checkedValue => {
    checkedValue = _new_checkedValue;
  }, "__tests__/template.marko_0/checkedValueChange2", $scope0_id);
  _$.write(`<input${_$.controllable_input_checkedValue($scope0_id, "#input/0", checkedValue, $checkedValueChange, "a")} type=checkbox>${_$.markResumeNode($scope0_id, "#input/0")}<input${_$.controllable_input_checkedValue($scope0_id, "#input/1", checkedValue, $checkedValueChange, "b")} type=checkbox>${_$.markResumeNode($scope0_id, "#input/1")}<input${_$.controllable_input_checkedValue($scope0_id, "#input/2", checkedValue, $checkedValueChange, "c")} type=checkbox>${_$.markResumeNode($scope0_id, "#input/2")}<span>${_$.escapeXML(checkedValue)}${_$.markResumeNode($scope0_id, "#text/3")}</span>`);
  _$.writeEffect($scope0_id, "__tests__/template.marko_0");
  _$.writeScope($scope0_id, {
    checkedValue,
    $checkedValueChange
  }, "__tests__/template.marko", 0, {
    checkedValue: "1:6",
    $checkedValueChange: 0
  });
  _$.resumeClosestBranch($scope0_id);
});