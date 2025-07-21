export const $template = "<button id=inc><!>|<!></button><button id=toggle>toggle</button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1), get, over(1) */" D%c%l b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $y_effect = _$.effect("__tests__/template.marko_0_y", ($scope, {
  y
}) => _$.on($scope["#button/0"], "click", function () {
  $y($scope, ++y)
}));
const $y = /* @__PURE__ */_$.state("y/7", ($scope, y) => {
  _$.data($scope["#text/2"], y);
  $y_effect($scope);
});
const $expr_x_yChange = /* @__PURE__ */_$.intersection(6, $scope => {
  const {
    x,
    yChange
  } = $scope;
  $y($scope, x, yChange);
});
const $x = /* @__PURE__ */_$.state("x/4", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $expr_x_yChange($scope);
});
const $yChange2 = /* @__PURE__ */_$.state("yChange/5", $expr_x_yChange);
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/3"], "click", function () {
  $yChange2($scope, null);
}));
export function $setup($scope) {
  $x($scope, 1);
  $yChange2($scope, $yChange($scope));
  $setup_effect($scope);
}
function $yChange($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
_$.register("__tests__/template.marko_0/yChange", $yChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);