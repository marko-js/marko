export const $template = "<div id=ref>0</div>";
export const $walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x_effect = _$.effect("__tests__/template.marko_0_x", ({
  x
}) => (document.getElementById("ref").textContent = x));
const $x = /* @__PURE__ */_$.state("x/0", $x_effect);
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);