export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $value__OR__dummy = /* @__PURE__ */_._or(5, $scope => _._text($scope["#text/0"], ($scope.dummy, $scope.value)));
const $dummy = /* @__PURE__ */_._let("dummy/4", $value__OR__dummy);
export function $setup($scope) {
  $dummy($scope, {});
}
export const $value = /* @__PURE__ */_._const("value", $value__OR__dummy);
export const $input = /* @__PURE__ */_._const("input", $scope => $value($scope, $scope.input.value));
export default /* @__PURE__ */_._template("__tests__/tags/display-intersection.marko", $template, $walks, $setup, $input);