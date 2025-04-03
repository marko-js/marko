export const $template = "<html><body><button>Toggle</button></body></html>";
export const $walks = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $toggle_effect = _$.effect("__tests__/template.marko_0_toggle", ($scope, {
  toggle
}) => _$.on($scope["#button/1"], "click", function () {
  $toggle($scope, !toggle);
}));
const $toggle = /* @__PURE__ */_$.state("toggle/2", ($scope, toggle) => {
  _$.attr($scope["#body/0"], "data-toggle", toggle);
  $toggle_effect($scope);
});
export function $setup($scope) {
  $toggle($scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);