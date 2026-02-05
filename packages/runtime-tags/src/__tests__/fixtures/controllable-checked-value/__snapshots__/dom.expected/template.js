export const $template = "<input type=radio><input type=radio><input type=radio><span> </span>";
export const $walks = /* get, over(1), get, over(1), get, over(1), next(1), get, out(1) */" b b bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $checkedValue__OR__checkedValueChange = /* @__PURE__ */_._or(6, $scope => {
  _._attr_input_checkedValue($scope, "#input/0", $scope.checkedValue, $scope.$checkedValueChange, "a");
  _._attr_input_checkedValue($scope, "#input/1", $scope.checkedValue, $scope.$checkedValueChange, "b");
  _._attr_input_checkedValue($scope, "#input/2", $scope.checkedValue, $scope.$checkedValueChange, "c");
});
const $checkedValue = /* @__PURE__ */_._let("checkedValue/4", $scope => {
  _._text($scope["#text/3"], $scope.checkedValue);
  $checkedValue__OR__checkedValueChange($scope);
});
const $checkedValueChange3 = /* @__PURE__ */_._const("$checkedValueChange", $checkedValue__OR__checkedValueChange);
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._attr_input_checkedValue_script($scope, "#input/0");
  _._attr_input_checkedValue_script($scope, "#input/1");
  _._attr_input_checkedValue_script($scope, "#input/2");
});
export function $setup($scope) {
  $checkedValue($scope, "a");
  $checkedValueChange3($scope, $checkedValueChange2($scope));
  $setup__script($scope);
}
function $checkedValueChange2($scope) {
  return (_new_checkedValue => {
    $checkedValue($scope, _new_checkedValue);
  });
}
_._resume("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);