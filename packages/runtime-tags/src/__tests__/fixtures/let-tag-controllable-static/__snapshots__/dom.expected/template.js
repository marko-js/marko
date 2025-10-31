export const $template = "<button><!>|<!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $y__script = _._script("__tests__/template.marko_0_y", $scope => _._on($scope["#button/0"], "click", function () {
  $y($scope, $scope.y + 1);
}));
const $y = /* @__PURE__ */_._let("y/4", $scope => {
  _._text($scope["#text/2"], $scope.y);
  $y__script($scope);
});
const $x = /* @__PURE__ */_._let("x/3", $scope => {
  _._text($scope["#text/1"], $scope.x);
  $y($scope, $scope.x, $valueChange($scope));
});
export function $setup($scope) {
  $x($scope, 1);
}
function $valueChange($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);