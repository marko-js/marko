export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_$.state("x/1", ($scope, x) => _$.data($scope["#text/0"], x));
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => $x($scope, 2));
export function $setup($scope) {
  $x($scope, 1);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);