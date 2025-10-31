export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => _._return($scope, $scope.input_value));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_value($scope, $scope.input.value));
export default /* @__PURE__ */_._template("__tests__/tags/my-const.marko", $template, $walks, $setup, $input);