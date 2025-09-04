export const $template = "<div> </div><div> </div><button>before</button>";
export const $walks = /* next(1), get, out(1), next(1), get, out(1), get, over(1) */"D lD l b";
function sum(a, b) {
  return a + b;
}
const add1 = v => (0, sum)(1, v);
function updateText(ev) {
  ev.target.textContent = "after";
}
import * as _ from "@marko/runtime-tags/debug/dom";
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/2"], "click", updateText));
export function $setup($scope) {
  _._text($scope["#text/0"], sum(1, 2));
  _._text($scope["#text/1"], add1(3));
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);