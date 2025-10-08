export const $template = "<div><!><!></div>";
export const $walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $a__OR__b = /* @__PURE__ */_._or(6, $scope => {
  let {
    input_a: a,
    b
  } = $scope;
  _._text($scope["#text/1"], a + b);
});
export const $input_a = /* @__PURE__ */_._const("input_a", ($scope, input_a) => {
  _._text($scope["#text/0"], input_a);
  $a__OR__b($scope);
});
export const $b = /* @__PURE__ */_._const("b", $a__OR__b);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_a($scope, input.a);
  $b($scope, input.b);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);