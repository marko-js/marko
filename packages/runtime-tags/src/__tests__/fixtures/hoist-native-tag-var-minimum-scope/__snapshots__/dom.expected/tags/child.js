export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => _._return($scope, $_return($scope)));
export const $input = ($scope, input) => $input_value($scope, input.value);
function $_return($scope) {
  return () => $scope.input_value;
}
_._resume("__tests__/tags/child.marko_0/_return", $_return);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);