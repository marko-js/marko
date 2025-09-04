export const $template = "<div> </div><!>";
export const $walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_._const("x", ($scope, x) => _._text($scope["#text/0"], x));
const $y = /* @__PURE__ */_._const("y", ($scope, y) => _._text($scope["#text/1"], y));
export function $setup($scope) {
  $x($scope, _._id($scope));
  $y($scope, _._id($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);