export const $template = "Static <!>";
export const $walks = /* over(1), replace, over(1) */"b%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $value = ($scope, value) => _._text($scope["#text/0"], value);
export const $input = ($scope, input) => $value($scope, input.value);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);