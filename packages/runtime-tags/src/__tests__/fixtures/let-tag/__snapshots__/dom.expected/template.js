export const $template = "<button> </button><!>";
export const $walks = /* get, next(1), get, out(1), replace, over(1) */" D l%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__OR__y__script = _._script("__tests__/template.marko_0_x_y", ($scope, {
  x,
  y
}) => _._on($scope["#button/0"], "click", () => $x($scope, x = $y($scope, y = x + y))));
const $x__OR__y = /* @__PURE__ */_._or(5, $x__OR__y__script);
const $x = /* @__PURE__ */_._let("x/3", ($scope, x) => {
  _._text($scope["#text/1"], x);
  $x__OR__y($scope);
});
const $y = /* @__PURE__ */_._let("y/4", ($scope, y) => {
  _._text($scope["#text/2"], y);
  $x__OR__y($scope);
});
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 1, false);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);