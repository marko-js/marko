export const $template = "<div> </div><!>";
export const $walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_y = _._resume("__tests__/template.marko_0_$hoisted_y/hoist", _._hoist("y"));
const $x = /* @__PURE__ */_._const("x", $scope => _._text($scope["#text/0"], $scope.x));
const $y = /* @__PURE__ */_._const("y", $scope => _._assert_hoist($scope.y));
const $hoisted_y2 = /* @__PURE__ */_._const("$hoisted_y", $scope => _._text($scope["#text/1"], $scope.$hoisted_y));
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 1);
  $hoisted_y2($scope, $get$hoisted_y($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);