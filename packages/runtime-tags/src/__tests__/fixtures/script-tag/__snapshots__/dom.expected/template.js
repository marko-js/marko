export const $template = "<div id=ref>0</div>";
export const $walks = /* over(1) */"b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__script = _._script("__tests__/template.marko_0_x", ({
  x
}) => (document.getElementById("ref").textContent = x));
const $x = /* @__PURE__ */_._let("x/0", $x__script);
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);