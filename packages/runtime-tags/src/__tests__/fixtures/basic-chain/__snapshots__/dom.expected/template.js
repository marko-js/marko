export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $z = /* @__PURE__ */_$.value("z", ($scope, z) => _$.data($scope["#text/0"], z));
const $y = /* @__PURE__ */_$.value("y", ($scope, y) => $z($scope, y * 3));
const $x = /* @__PURE__ */_$.state("x/1", ($scope, x) => $y($scope, x * 2));
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);