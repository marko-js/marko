export const $template = "<div id=ref></div><button id=increment>Increment</button>";
export const $walks = /* over(1), get, over(1) */"b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => {
  _$.lifecycle($scope, "$lifecycle", {
    onMount: function () {
      this.onUpdate();
    },
    onUpdate: function () {
      document.getElementById("ref").textContent = `x=${x}, was=${this.cur}`;
      this.cur = x;
    }
  });
  _$.on($scope["#button/0"], "click", function () {
    $x($scope, ++x)
  });
});
const $x = /* @__PURE__ */_$.state("x/1", $x_effect);
export function $setup($scope) {
  $x($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);