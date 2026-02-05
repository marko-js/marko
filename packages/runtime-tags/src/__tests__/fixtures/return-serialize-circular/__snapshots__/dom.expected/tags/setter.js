export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_value__OR__setter = /* @__PURE__ */_._or(5, $scope => _._return($scope, ($scope.input_value, $scope.setter)));
const $setter2 = /* @__PURE__ */_._const("setter", $input_value__OR__setter);
export const $input_valueChange = /* @__PURE__ */_._const("input_valueChange", $scope => $setter2($scope, $setter($scope)));
export const $input_value = /* @__PURE__ */_._const("input_value", $input_value__OR__setter);
export const $input = ($scope, input) => {
  $input_valueChange($scope, input.valueChange);
  $input_value($scope, input.value);
};
function $setter($scope) {
  return function () {
    $scope.input_valueChange(1);
  };
}
_._resume("__tests__/tags/setter.marko_0/setter", $setter);
export default /* @__PURE__ */_._template("__tests__/tags/setter.marko", $template, $walks, $setup, $input);