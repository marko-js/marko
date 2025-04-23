export const $template = "<div>x=<span> </span>, was=<!></div><button id=increment>Increment</button>";
export const $walks = /* next(1), over(1), next(1), get, out(1), over(1), replace, out(1), get, over(1) */"DbD lb%l b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x_effect = _$.effect("__tests__/template.marko_0_x", ($scope, {
  x
}) => {
  _$.lifecycle($scope, "$lifecycle", {
    onMount: function () {
      this.cur = x;
    },
    onUpdate: function () {
      $prev($scope, this.cur);
      this.cur = x;
    }
  });
  _$.on($scope["#button/2"], "click", function () {
    $x($scope, x + 1), x;
  });
});
const $x = /* @__PURE__ */_$.state("x/3", ($scope, x) => {
  _$.data($scope["#text/0"], x);
  $x_effect($scope);
});
const $prev = /* @__PURE__ */_$.state("prev/4", ($scope, prev) => _$.data($scope["#text/1"], prev));
export function $setup($scope) {
  $x($scope, 0);
  $prev($scope, false);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);