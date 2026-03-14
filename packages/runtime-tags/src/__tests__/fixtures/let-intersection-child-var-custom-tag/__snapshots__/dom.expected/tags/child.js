export const $template = "";
export const $walks = "";
import * as _ from "@marko/runtime-tags/debug/dom";
const $internal = /* @__PURE__ */_._let("internal/3", $scope => _._return($scope, $scope.internal));
export const $input_value = ($scope, input_value) => $internal($scope, input_value);
export function $setup($scope) {
  _._return_change($scope, $valueChange($scope));
}
export const $input = ($scope, input) => $input_value($scope, input.value);
function $valueChange($scope) {
  return _new_internal => {
    $internal($scope, _new_internal);
  };
}
_._resume("__tests__/tags/child.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);