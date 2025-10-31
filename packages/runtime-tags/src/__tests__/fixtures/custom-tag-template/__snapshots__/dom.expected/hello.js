export const $template = "Hello <!>!";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_name = /* @__PURE__ */_._const("input_name", $scope => _._text($scope["#text/0"], $scope.input_name));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_name($scope, $scope.input.name));
export default /* @__PURE__ */_._template("__tests__/hello.marko", $template, $walks, $setup, $input);