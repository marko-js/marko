export const $template = "<div> </div><div> </div><button>before</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), get, over(1) */"D lD l b";
function sum(a, b) {
  return a + b;
}
const add1 = v => (0, sum)(1, v);
function updateText(ev) {
  ev.target.textContent = "after";
}
import * as _$ from "@marko/runtime-tags/debug/dom";
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/2"], "click", updateText));
export function $setup($scope) {
  _$.data($scope["#text/0"], sum(1, 2));
  _$.data($scope["#text/1"], add1(3));
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);