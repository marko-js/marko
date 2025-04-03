export const $template = "<div><button id=button>0</button></div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => {
  document.getElementById("button").textContent = clickCount;
  _$.on($scope["#button/0"], "click", function () {
    $clickCount($scope, clickCount + 1), clickCount;
  });
});
const $clickCount = /* @__PURE__ */_$.state("clickCount/1", $clickCount_effect);
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);