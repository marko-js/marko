export const $template = "<button><!>|<!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $y__script = _._script("__tests__/template.marko_0_y", $scope => _._on($scope["#button/0"], "click", function () {
  $y($scope, $scope.y + 1);
}));
const $y = /* @__PURE__ */_._let("y/6", $scope => {
  _._text($scope["#text/2"], $scope.y);
  $y__script($scope);
});
const $x__OR__handler = /* @__PURE__ */_._or(5, $scope => $y($scope, $scope.x, $scope.handler));
const $x = /* @__PURE__ */_._let("x/3", $scope => {
  _._text($scope["#text/1"], $scope.x);
  $x__OR__handler($scope);
});
const $handler2 = /* @__PURE__ */_._let("handler/4", $x__OR__handler);
export function $setup($scope) {
  $x($scope, 1);
  $handler2($scope, $handler($scope));
}
function $handler($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
_._resume("__tests__/template.marko_0/handler", $handler);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);