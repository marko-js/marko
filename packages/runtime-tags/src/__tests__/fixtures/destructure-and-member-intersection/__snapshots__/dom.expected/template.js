export const $template = "<div><!><!></div>";
export const $walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_a_b = /* @__PURE__ */_$.intersection(7, $scope => {
  const {
    input_a: a,
    b
  } = $scope;
  _$.data($scope["#text/1"], a + b);
});
export const $input_a = /* @__PURE__ */_$.value("input_a", ($scope, input_a) => {
  _$.data($scope["#text/0"], input_a);
  $expr_a_b($scope);
});
export const $b = /* @__PURE__ */_$.value("b", $expr_a_b);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_a($scope, input.a);
  $b($scope, input.b);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);