export const $template = "<button>before</button>";
export const $walks = /* get, over(1) */" b";
function updateText(ev) {
  ev.target.textContent = "after";
}
import * as _$ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_$.value("$pattern", ($scope, $pattern) => $onClick($scope, $pattern.onClick));
const $onClick_effect = _$.effect("__tests__/template.marko_0_onClick", ($scope, {
  onClick
}) => _$.on($scope["#button/0"], "click", onClick));
const $onClick = /* @__PURE__ */_$.value("onClick", $onClick_effect);
export function $setup($scope) {
  $pattern2($scope, {});
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);