export const $template = "<div><!> <!></div>";
export const $walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_._const("x", ($scope, x) => _._text($scope["#text/0"], x));
const $y = /* @__PURE__ */_._const("y", ($scope, y) => _._text($scope["#text/1"], y));
export function $setup($scope) {
  $x($scope, _._id($scope));
  $y($scope, _._id($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);