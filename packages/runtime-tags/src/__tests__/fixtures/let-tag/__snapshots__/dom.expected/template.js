export const $template = "<button> </button><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(1) */" D l%b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_x_y_effect = _$.effect("__tests__/template.marko_0_x_y", ($scope, {
  x,
  y
}) => _$.on($scope["#button/0"], "click", () => $x($scope, $y($scope, x + y))));
const $expr_x_y = /* @__PURE__ */_$.intersection(5, $expr_x_y_effect);
const $y = /* @__PURE__ */_$.state("y/4", ($scope, y) => {
  _$.data($scope["#text/2"], y);
  $expr_x_y($scope);
});
const $x = /* @__PURE__ */_$.state("x/3", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $expr_x_y($scope);
});
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);