export const $template = "<div><!>: <!></div>";
export const $walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_label = ($scope, input_label) => _._text($scope["#text/0"], input_label);
export const $input_value = ($scope, input_value) => _._text($scope["#text/1"], input_value);
export const $input = ($scope, input) => {
  $input_label($scope, input.label);
  $input_value($scope, input.value);
};
export default /* @__PURE__ */_._template("__tests__/child.marko", $template, $walks, $setup, $input);