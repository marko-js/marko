export const $template = "<div> </div><!>";
export const $walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $y_getter = _._hoist_resume("__tests__/template.marko_0_y/hoist", "y");
const $x = ($scope, x) => _._text($scope["#text/0"], x);
const $y = /* @__PURE__ */_._const("y", $scope => _._assert_hoist($scope.y));
export function $setup($scope) {
  _._text($scope["#text/1"], $y_getter($scope));
  $x($scope, _._id($scope));
  $y($scope, _._id($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);