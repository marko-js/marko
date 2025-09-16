export const $template = "<select><option value=a>A</option><option value=b>B</option><option value=c>C</option></select>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._attr_select_value($scope, "#select/0", "b");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);