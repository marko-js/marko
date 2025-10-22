export const $template = "<div><!><!></div><!>";
export const $walks = /* next(1), replace, over(1), replace, out(1), replace, over(1) */"D%b%l%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_y = _._resume("__tests__/template.marko_0_$hoisted_y/hoist", _._hoist("y"));
const $x = /* @__PURE__ */_._const("x", ($scope, x) => _._text($scope["#text/0"], x));
const $y2 = /* @__PURE__ */_._const("y", ($scope, y) => {
  _._text($scope["#text/1"], y());
  _._assert_hoist(y);
});
const $hoisted_y2 = /* @__PURE__ */_._const("$hoisted_y", ($scope, $hoisted_y) => _._text($scope["#text/2"], typeof $hoisted_y));
export function $setup($scope) {
  $x($scope, 1);
  $y2($scope, $y);
  $hoisted_y2($scope, $get$hoisted_y($scope));
}
function $y() {
  return 1;
}
_._resume("__tests__/template.marko_0/y", $y);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);