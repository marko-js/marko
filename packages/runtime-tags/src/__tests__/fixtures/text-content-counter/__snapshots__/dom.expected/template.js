export const $template = "<div><button id=button>0</button></div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $clickCount__script = _._script("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => {
  document.getElementById("button").textContent = clickCount;
  _._on($scope["#button/0"], "click", function () {
    $clickCount($scope, ++clickCount);
  });
});
const $clickCount = /* @__PURE__ */_._let("clickCount/1", $clickCount__script);
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);