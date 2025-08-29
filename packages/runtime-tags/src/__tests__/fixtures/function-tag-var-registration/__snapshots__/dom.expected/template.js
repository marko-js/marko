export const $template = "<div> </div><button>before</button>";
export const $walks = /* next(1), get, out(1), get, over(1) */"D l b";
const updateText = $updateText;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $sum = /* @__PURE__ */_$.value("sum", ($scope, sum) => _$.data($scope["#text/0"], sum(1, 2)));
const $onClick_effect = _$.effect("__tests__/template.marko_0_onClick", ($scope, {
  onClick
}) => _$.on($scope["#button/1"], "click", onClick));
const $onClick = /* @__PURE__ */_$.value("onClick", $onClick_effect);
export function $setup($scope) {
  $sum($scope, function (a, b) {
    return a + b;
  });
  $onClick($scope, updateText);
}
function $updateText(ev) {
  ev.target.textContent = "after";
}
_$.register("__tests__/template.marko_0/updateText", $updateText);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);