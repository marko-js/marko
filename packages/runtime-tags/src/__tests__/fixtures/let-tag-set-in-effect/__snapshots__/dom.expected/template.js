export const $template = "<span> </span><span> </span>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__script = _._script("__tests__/template.marko_0_x", $scope => {
  $y($scope, $scope.x);
  $x($scope, 2);
});
const $x = /* @__PURE__ */_._let("x/2", $scope => {
  _._text($scope["#text/0"], $scope.x);
  $x__script($scope);
});
const $y = /* @__PURE__ */_._let("y/3", $scope => _._text($scope["#text/1"], $scope.y));
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);