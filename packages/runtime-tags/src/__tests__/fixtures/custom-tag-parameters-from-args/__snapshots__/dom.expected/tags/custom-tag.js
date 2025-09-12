export const $template = "<button class=inc><!>,<!></button><!><!>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1), replace, over(2) */" D%c%l%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__OR__y__script = _._script("__tests__/tags/custom-tag.marko_0_x_y", ($scope, {
  x,
  y
}) => _._on($scope["#button/0"], "click", function () {
  $x($scope, ++x);
  $y($scope, ++y);
}));
const $x__OR__y = /* @__PURE__ */_._or(9, $x__OR__y__script);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/3", 0, 0, 1);
const $input_content__OR__x__OR__y = /* @__PURE__ */_._or(10, $scope => {
  let {
    input_content,
    x,
    y
  } = $scope;
  $dynamicTag($scope, input_content, () => [x, y]);
}, 2);
const $x = /* @__PURE__ */_._let("x/7", ($scope, x) => {
  _._text($scope["#text/1"], x);
  $x__OR__y($scope);
  $input_content__OR__x__OR__y($scope);
});
const $y = /* @__PURE__ */_._let("y/8", ($scope, y) => {
  _._text($scope["#text/2"], y);
  $x__OR__y($scope);
  $input_content__OR__x__OR__y($scope);
});
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 10);
}
export const $input_content = /* @__PURE__ */_._const("input_content", $input_content__OR__x__OR__y);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_content($scope, input.content));
export default /* @__PURE__ */_._template("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);