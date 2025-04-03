export const $template = "<button class=inc> </button><!><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(1) */" D l%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_input_content_input_name_x = /* @__PURE__ */_$.intersection(8, $scope => {
  const {
    input_content,
    input_name,
    x
  } = $scope;
  $dynamicTag($scope, input_content, () => ({
    count: x,
    name: input_name
  }));
}, 2);
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/2");
const $x_effect = _$.effect("__tests__/tags/custom-tag.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/0"], "click", function () {
  $x($scope, x + 1), x;
}));
const $x = /* @__PURE__ */_$.state("x/7", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $expr_input_content_input_name_x($scope);
  $x_effect($scope);
});
export const $input_name = /* @__PURE__ */_$.value("input_name", $expr_input_content_input_name_x);
export const $input_content = /* @__PURE__ */_$.value("input_content", $expr_input_content_input_name_x);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_content($scope, input.content);
  $input_name($scope, input.name);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);