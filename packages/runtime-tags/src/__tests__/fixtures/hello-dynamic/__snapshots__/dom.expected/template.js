export const $template = "Hello <!>! Hello <!>! Hello <!>!";
export const $walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_name = ($scope, input_name) => {
  _._text($scope["#text/0"], input_name);
  _._html($scope, input_name, "#text/1");
};
export const $input_missing = ($scope, input_missing) => _._html($scope, input_missing, "#text/2");
export const $input = ($scope, input) => {
  $input_name($scope, input.name);
  $input_missing($scope, input.missing);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);