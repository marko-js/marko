export const $template = "<span>child</span>";
export const $walks = /* over(1) */"b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__OR__y = /* @__PURE__ */_._or(2, $scope => _._return($scope, $scope.x + $scope.y));
const $x = /* @__PURE__ */_._let("x/0", $x__OR__y);
const $y = /* @__PURE__ */_._let("y/1", $x__OR__y);
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 2);
}
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup);