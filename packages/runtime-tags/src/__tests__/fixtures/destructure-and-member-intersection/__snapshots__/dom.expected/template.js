export const $template = "<div><!><!></div>";
export const $walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $a__OR__b = /* @__PURE__ */_._or(6, $scope => _._text($scope["#text/1"], $scope.input_a + $scope.b));
export const $input_a = /* @__PURE__ */_._const("input_a", $scope => {
  _._text($scope["#text/0"], $scope.input_a);
  $a__OR__b($scope);
});
export const $b = /* @__PURE__ */_._const("b", $a__OR__b);
export const $input = ($scope, input) => {
  $input_a($scope, input.a);
  $b($scope, input.b);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);