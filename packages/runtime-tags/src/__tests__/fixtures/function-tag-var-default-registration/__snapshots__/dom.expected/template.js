export const $template = "<button>before</button>";
export const $walks = /* get, over(1) */" b";
function updateText(ev) {
  ev.target.textContent = "after";
}
import * as _ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_._const("$pattern", ($scope, $pattern) => $onClick($scope, $pattern.onClick));
const $onClick__script = _._script("__tests__/template.marko_0_onClick", ($scope, {
  onClick
}) => _._on($scope["#button/0"], "click", onClick));
const $onClick = /* @__PURE__ */_._const("onClick", $onClick__script);
export function $setup($scope) {
  $pattern2($scope, {});
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);