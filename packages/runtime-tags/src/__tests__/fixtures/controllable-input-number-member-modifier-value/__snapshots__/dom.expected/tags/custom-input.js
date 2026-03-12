export const $template = "<input type=number>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_value__OR__input_valueChange = /* @__PURE__ */_._or(5, $scope => _._attr_input_value($scope, "#input/0", $scope.input_value, $scope.input_valueChange && $valueChange($scope)));
export const $input_value = /* @__PURE__ */_._const("input_value", $input_value__OR__input_valueChange);
export const $input_valueChange = /* @__PURE__ */_._const("input_valueChange", $input_value__OR__input_valueChange);
const $setup__script = _._script("__tests__/tags/custom-input.marko_0", $scope => _._attr_input_value_script($scope, "#input/0"));
export const $setup = $setup__script;
export const $input = ($scope, input) => {
  $input_value($scope, input.value);
  $input_valueChange($scope, input.valueChange);
};
function $valueChange($scope) {
  return $next => {
    $scope.input_valueChange(parseInt($next));
  };
}
_._resume("__tests__/tags/custom-input.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/tags/custom-input.marko", $template, $walks, $setup, $input);