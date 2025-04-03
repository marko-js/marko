export const $template = "<div> </div><!>";
export const $walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $y = /* @__PURE__ */_$.value("y", ($scope, y) => _$.data($scope["#text/1"], y));
const $x = /* @__PURE__ */_$.value("x", ($scope, x) => _$.data($scope["#text/0"], x));
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);