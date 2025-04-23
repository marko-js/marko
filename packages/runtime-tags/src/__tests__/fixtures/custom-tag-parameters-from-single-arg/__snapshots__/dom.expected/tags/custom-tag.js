export const $template = "<button class=inc> </button><!><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2", 0, 0, 1);
const $expr_input_content_x = /* @__PURE__ */_$.intersection(7, $scope => {
  const {
    input_content,
    x
  } = $scope;
  $dynamicTag($scope, input_content, () => [x]);
});
const $x_effect = _$.effect("__tests__/tags/custom-tag.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/0"], "click", function () {
  $x($scope, x + 1), x;
}));
const $x = /* @__PURE__ */_$.state("x/6", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $expr_input_content_x($scope);
  $x_effect($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export const $input_content = /* @__PURE__ */_$.value("input_content", $expr_input_content_x);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_content($scope, input.content));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);