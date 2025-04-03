export const $template = "<span> </span><span> </span>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $y = /* @__PURE__ */_$.state("y/3", ($scope, y) => _$.data($scope["#text/1"], y));
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => {
  $y($scope, x);
  $x($scope, 2);
});
const $x = /* @__PURE__ */_$.state("x/2", ($scope, x) => {
  _$.data($scope["#text/0"], x);
  $x_effect($scope);
});
export function $setup($scope) {
  $x($scope, 1);
  $y($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);