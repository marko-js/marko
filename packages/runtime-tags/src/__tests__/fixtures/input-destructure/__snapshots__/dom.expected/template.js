export const $template = "<!> <!>";
export const $walks = /* replace, over(2), replace, over(1) */"%c%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $a = ($scope, a) => _._text($scope["#text/0"], a);
export const $b = ($scope, b) => _._text($scope["#text/1"], b);
export const $input = ($scope, input) => {
  $a($scope, input.a);
  $b($scope, input.b);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);