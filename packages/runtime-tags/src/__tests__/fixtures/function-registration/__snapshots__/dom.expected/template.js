export const $template = "<div> </div><div> </div>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1) */"D lD l";
function sum(a, b) {
  return a + b;
}
const add1 = v => (0, sum)(1, v);
import * as _$ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _$.data($scope["#text/0"], sum(1, 2));
  _$.data($scope["#text/1"], add1(3));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);