export const $template = "<input type=radio><input type=radio><input type=radio><span> </span>";
export const $walks = /* get, over(1), get, over(1), get, over(1), next(1), get, out(1) */" b b bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_checkedValue_$checkedValueChange = /* @__PURE__ */_$.intersection(6, $scope => {
  const {
    checkedValue,
    $checkedValueChange
  } = $scope;
  _$.controllable_input_checkedValue($scope, "#input/0", checkedValue, $checkedValueChange, "a");
  _$.controllable_input_checkedValue($scope, "#input/1", checkedValue, $checkedValueChange, "b");
  _$.controllable_input_checkedValue($scope, "#input/2", checkedValue, $checkedValueChange, "c");
});
const $checkedValue = /* @__PURE__ */_$.state("checkedValue/4", ($scope, checkedValue) => {
  _$.data($scope["#text/3"], checkedValue);
  $expr_checkedValue_$checkedValueChange($scope);
});
const $checkedValueChange3 = /* @__PURE__ */_$.value("$checkedValueChange", $expr_checkedValue_$checkedValueChange);
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  _$.controllable_input_checkedValue_effect($scope, "#input/0");
  _$.controllable_input_checkedValue_effect($scope, "#input/1");
  _$.controllable_input_checkedValue_effect($scope, "#input/2");
});
export function $setup($scope) {
  $checkedValue($scope, "a");
  $checkedValueChange3($scope, $checkedValueChange2($scope));
  $setup_effect($scope);
}
function $checkedValueChange2($scope) {
  return _new_checkedValue => {
    $checkedValue($scope, _new_checkedValue);
  };
}
_$.register("__tests__/template.marko_0/checkedValueChange2", $checkedValueChange2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);