export const $template = "<!><!><button></button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x_content = _$.registerContent("__tests__/template.marko_1_renderer", "Body Content", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $x_content);
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/1"], "click", function () {
  $x($scope, x = x ? null : "div");
}));
const $x = /* @__PURE__ */_$.state("x/2", ($scope, x) => {
  $dynamicTag($scope, x);
  $x_effect($scope);
});
export function $setup($scope) {
  $x($scope, null);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);