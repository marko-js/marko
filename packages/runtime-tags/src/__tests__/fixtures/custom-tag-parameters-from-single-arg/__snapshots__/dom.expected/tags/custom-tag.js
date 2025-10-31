export const $template = "<button class=inc> </button><!><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(2) */" D l%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2", 0, 0, 1);
const $input_content__OR__x = /* @__PURE__ */_._or(7, $scope => $dynamicTag($scope, $scope.input_content, () => [$scope.x]));
const $x__script = _._script("__tests__/tags/custom-tag.marko_0_x", $scope => _._on($scope["#button/0"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/6", $scope => {
  _._text($scope["#text/1"], $scope.x);
  $input_content__OR__x($scope);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export const $input_content = /* @__PURE__ */_._const("input_content", $input_content__OR__x);
export const $input = /* @__PURE__ */_._const("input", $scope => $input_content($scope, $scope.input.content));
export default /* @__PURE__ */_._template("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);