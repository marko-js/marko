export const $template = "Static <!>";
export const $walks = /* over(1), replace, over(1) */"b%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $value = /* @__PURE__ */_._const("value", $scope => _._text($scope["#text/0"], $scope.value));
export const $input = /* @__PURE__ */_._const("input", $scope => $value($scope, $scope.input.value));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);