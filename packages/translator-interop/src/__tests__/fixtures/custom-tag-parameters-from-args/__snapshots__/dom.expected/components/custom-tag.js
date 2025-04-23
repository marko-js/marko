export const $template = "<button class=inc><!>,<!></button><!><!>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1), replace, over(1) */" D%c%l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_x_y_effect = _$.effect("__tests__/components/custom-tag.marko_0_x_y", ($scope, {
  x,
  y
}) => _$.on($scope["#button/0"], "click", function () {
  $x($scope, x + 1), x;
  $y($scope, y + 1), y;
}));
const $expr_x_y = /* @__PURE__ */_$.intersection(9, $expr_x_y_effect);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/3", 0, 0, 1);
const $expr_input_content_x_y = /* @__PURE__ */_$.intersection(10, $scope => {
  const {
    input_content,
    x,
    y
  } = $scope;
  $dynamicTag($scope, input_content, () => [x, y]);
}, 2);
const $x = /* @__PURE__ */_$.state("x/7", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $expr_x_y($scope);
  $expr_input_content_x_y($scope);
});
const $y = /* @__PURE__ */_$.state("y/8", ($scope, y) => {
  _$.data($scope["#text/2"], y);
  $expr_x_y($scope);
  $expr_input_content_x_y($scope);
});
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 10);
}
export const $input_content = /* @__PURE__ */_$.value("input_content", $expr_input_content_x_y);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_content($scope, input.content));
export default /* @__PURE__ */_$.createTemplate("__tests__/components/custom-tag.marko", $template, $walks, $setup, $input);