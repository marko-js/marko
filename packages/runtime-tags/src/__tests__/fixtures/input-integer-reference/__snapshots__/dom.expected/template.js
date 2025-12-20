export const $template = "<!> <!>";
export const $walks = /* replace, over(2), replace, over(1) */"%c%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_value = ($scope, input_value) => {
  _._text($scope["#text/0"], input_value);
  $input_value_($scope, input_value?.[0]);
};
const $input_value_ = ($scope, input_value_0) => _._text($scope["#text/1"], input_value_0);
export const $input = ($scope, input) => $input_value($scope, input.value);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);