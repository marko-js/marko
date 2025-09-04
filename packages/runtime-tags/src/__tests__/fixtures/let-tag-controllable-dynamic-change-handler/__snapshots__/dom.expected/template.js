export const $template = "<button id=inc><!>|<!></button><button id=toggle>toggle</button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1), get, over(1) */" D%c%l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $y__script = _._script("__tests__/template.marko_0_y", ($scope, {
  y
}) => _._on($scope["#button/0"], "click", function () {
  $y($scope, ++y)
}));
const $y = /* @__PURE__ */_._let("y/7", ($scope, y) => {
  _._text($scope["#text/2"], y);
  $y__script($scope);
});
const $x__OR__yChange = /* @__PURE__ */_._or(6, $scope => {
  let {
    x,
    yChange
  } = $scope;
  $y($scope, x, yChange);
});
const $x = /* @__PURE__ */_._let("x/4", ($scope, x) => {
  _._text($scope["#text/1"], x);
  $x__OR__yChange($scope);
});
const $yChange2 = /* @__PURE__ */_._let("yChange/5", $x__OR__yChange);
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/3"], "click", function () {
  $yChange2($scope, null);
}));
export function $setup($scope) {
  $x($scope, 1);
  $yChange2($scope, $yChange($scope));
  $setup__script($scope);
}
function $yChange($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
_._resume("__tests__/template.marko_0/yChange", $yChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);