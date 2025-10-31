export const $template = "<!> ";
export const $walks = /* replace, over(2) */"%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._const("value", $scope => _._text($scope["#text/0"], $scope.value));
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => $value($scope, $scope.input_value));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_value($scope, $scope.input.value));
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);