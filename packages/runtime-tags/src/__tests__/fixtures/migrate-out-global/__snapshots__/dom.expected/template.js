export const $template = "<div><span> </span></div>";
export const $walks = /* next(2), get, out(2) */"E m";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _$.data($scope["#text/0"], $scope.$global.x);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);