export const $template = "<html><body><button>Toggle</button></body></html>";
export const $walks = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _ from "@marko/runtime-tags/debug/dom";
const $toggle__script = _._script("__tests__/template.marko_0_toggle", ($scope, {
  toggle
}) => _._on($scope["#button/1"], "click", function () {
  $toggle($scope, toggle = !toggle);
}));
const $toggle = /* @__PURE__ */_._let("toggle/2", ($scope, toggle) => {
  _._attr($scope["#body/0"], "data-toggle", toggle);
  $toggle__script($scope);
});
export function $setup($scope) {
  $toggle($scope, false);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);