export const $template = "<div> </div><div> </div>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_a = ($scope, input_a) => _._text($scope["#text/0"], input_a);
export const $input_b = ($scope, input_b) => _._text($scope["#text/1"], input_b);
export const $input = ($scope, input) => {
  $input_a($scope, input.a);
  $input_b($scope, input.b);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);