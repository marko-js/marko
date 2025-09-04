export const $template = "<button> </button><!> <!> <!>";
export const $walks = /* get, next(1), get, out(1), replace, over(2), replace, over(2), replace, over(1) */" D l%c%c%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $a = /* @__PURE__ */_._const("a", ($scope, a) => _._text($scope["#text/4"], a));
const $y__OR__z = /* @__PURE__ */_._or(8, $scope => {
  let {
    y,
    z
  } = $scope;
  $a($scope, y + z);
});
const $y = /* @__PURE__ */_._const("y", ($scope, y) => {
  _._text($scope["#text/2"], y);
  $y__OR__z($scope);
});
const $z = /* @__PURE__ */_._const("z", ($scope, z) => {
  _._text($scope["#text/3"], z);
  $y__OR__z($scope);
});
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/0"], "click", () => ($x($scope, ++x), x - 1)));
const $x = /* @__PURE__ */_._let("x/5", ($scope, x) => {
  _._text($scope["#text/1"], x);
  $y($scope, x + 1);
  $z($scope, x + 2);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);