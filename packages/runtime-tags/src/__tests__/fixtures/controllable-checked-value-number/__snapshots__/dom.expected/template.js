export const $template = "<input type=radio><input type=radio><input type=radio><span> </span>";
export const $walks = /* get, over(1), get, over(1), get, over(1), next(1), get, out(1) */" b b bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $checked = /* @__PURE__ */_._let("checked/4", $scope => {
  _._attr_input_checkedValue($scope, "#input/0", $scope.checked + "", $checkedValueChange($scope), 0);
  _._attr_input_checkedValue($scope, "#input/1", $scope.checked, $checkedValueChange2($scope), "1");
  _._attr_input_checkedValue($scope, "#input/2", $scope.checked, $checkedValueChange3($scope), 2);
  _._text($scope["#text/3"], $scope.checked);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_input_checkedValue_script($scope, "#input/0");
  _._attr_input_checkedValue_script($scope, "#input/1");
  _._attr_input_checkedValue_script($scope, "#input/2");
});
export function $setup($scope) {
  $checked($scope, 0);
  $setup__script($scope);
}
function $checkedValueChange3($scope) {
  return function (v) {
    $checked($scope, +v);
  };
}
function $checkedValueChange2($scope) {
  return function (v) {
    $checked($scope, +v);
  };
}
function $checkedValueChange($scope) {
  return function (v) {
    $checked($scope, +v);
  };
}
_._resume("__tests__/template.marko_0/checkedValueChange3", $checkedValueChange3);
_._resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
_._resume("__tests__/template.marko_0/checkedValueChange", $checkedValueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);