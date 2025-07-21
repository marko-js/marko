export const $template = "<button><!>|<!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $y_effect = _$.effect("__tests__/template.marko_0_y", ($scope, {
  y
}) => _$.on($scope["#button/0"], "click", function () {
  $y($scope, ++y)
}));
const $y = /* @__PURE__ */_$.state("y/4", ($scope, y) => {
  _$.data($scope["#text/2"], y);
  $y_effect($scope);
});
const $x = /* @__PURE__ */_$.state("x/3", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $y($scope, x, $valueChange($scope));
});
export function $setup($scope) {
  $x($scope, 1);
}
function $valueChange($scope) {
  return function (newValue) {
    $x($scope, newValue + 1);
  };
}
_$.register("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);