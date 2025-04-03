export const $template = "<span>child</span>";
export const $walks = /* over(1) */"b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_$.state("x/0", _$.tagVarSignal);
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup);