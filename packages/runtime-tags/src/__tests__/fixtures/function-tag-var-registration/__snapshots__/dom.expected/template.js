export const $template = "<div> </div><button>before</button>";
export const $walks = /* next(1), get, out(1), get, over(1) */"D l b";
const updateText = $updateText;
import * as _ from "@marko/runtime-tags/debug/dom";
const $sum = /* @__PURE__ */_._const("sum", ($scope, sum) => _._text($scope["#text/0"], sum(1, 2)));
const $onClick__script = _._script("__tests__/template.marko_0_onClick", ($scope, {
  onClick
}) => _._on($scope["#button/1"], "click", onClick));
const $onClick = /* @__PURE__ */_._const("onClick", $onClick__script);
export function $setup($scope) {
  $sum($scope, function (a, b) {
    return a + b;
  });
  $onClick($scope, updateText);
}
function $updateText(ev) {
  ev.target.textContent = "after";
}
_._resume("__tests__/template.marko_0/updateText", $updateText);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);