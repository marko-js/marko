export const $template = "<button class=inc> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_extra__OR__x = /* @__PURE__ */_._or(6, $scope => _._return($scope, $scope.x + $scope.input_extra));
const $x__script = _._script("__tests__/tags/child.marko_0_x", $scope => _._on($scope["#button/0"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/5", $scope => {
  _._text($scope["#text/1"], $scope.x);
  $input_extra__OR__x($scope);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 0);
}
export const $input_extra = /* @__PURE__ */_._const("input_extra", $input_extra__OR__x);
export const $input = /* @__PURE__ */_._const("input", $scope => $input_extra($scope, $scope.input.extra));
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);