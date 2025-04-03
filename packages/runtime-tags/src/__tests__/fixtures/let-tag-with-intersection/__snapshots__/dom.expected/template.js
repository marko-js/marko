export const $template = "<button> </button><!> <!> <!>";
export const $walks = /* get, next(1), get, out(1), replace, over(2), replace, over(2), replace, over(1) */" D l%c%c%b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_y_z = /* @__PURE__ */_$.intersection(8, $scope => {
  const {
    y,
    z
  } = $scope;
  $a($scope, y + z);
});
const $a = /* @__PURE__ */_$.value("a", ($scope, a) => _$.data($scope["#text/4"], a));
const $z = /* @__PURE__ */_$.value("z", ($scope, z) => {
  _$.data($scope["#text/3"], z);
  $expr_y_z($scope);
});
const $y = /* @__PURE__ */_$.value("y", ($scope, y) => {
  _$.data($scope["#text/2"], y);
  $expr_y_z($scope);
});
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/0"], "click", () => ($x($scope, x + 1), x)));
const $x = /* @__PURE__ */_$.state("x/5", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $y($scope, x + 1);
  $z($scope, x + 2);
  $x_effect($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);