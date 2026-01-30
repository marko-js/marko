export const $template = "<div><!><!></div><!>";
export const $walks = /* next(1), replace, over(1), replace, out(1), replace, over(1) */"D%b%l%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $y_getter = _._hoist_resume("__tests__/template.marko_0_y/hoist", "y");
const $x = ($scope, x) => _._text($scope["#text/0"], x);
const $y2 = /* @__PURE__ */_._const("y", $scope => {
  _._text($scope["#text/1"], $scope.y());
  _._assert_hoist($scope.y);
});
export function $setup($scope) {
  _._text($scope["#text/2"], typeof $y_getter($scope));
  $x($scope, 1);
  $y2($scope, $y);
}
function $y() {
  return 1;
}
_._resume("__tests__/template.marko_0/y", $y);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);