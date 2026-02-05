export const $template = "<button> </button><!> <!> <!>";
export const $walks = /* get, next(1), get, out(1), replace, over(2), replace, over(2), replace, over(1) */" D l%c%c%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $a = ($scope, a) => _._text($scope["#text/4"], a);
const $y__OR__z = /* @__PURE__ */_._or(8, $scope => $a($scope, $scope.y + $scope.z));
const $y = /* @__PURE__ */_._const("y", $scope => {
  _._text($scope["#text/2"], $scope.y);
  $y__OR__z($scope);
});
const $z = /* @__PURE__ */_._const("z", $scope => {
  _._text($scope["#text/3"], $scope.z);
  $y__OR__z($scope);
});
const $x__script = _._script("__tests__/template.marko_0_x", $scope => _._on($scope["#button/0"], "click", (() => $x($scope, $scope.x + 1) - 1)));
const $x = /* @__PURE__ */_._let("x/5", $scope => {
  _._text($scope["#text/1"], $scope.x);
  $y($scope, $scope.x + 1);
  $z($scope, $scope.x + 2);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);