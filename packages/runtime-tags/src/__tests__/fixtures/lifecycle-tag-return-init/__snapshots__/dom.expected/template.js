export const $template = "<div id=ref></div><button id=increment>Increment</button>";
export const $walks = /* over(1), get, over(1) */"b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__script = _._script("__tests__/template.marko_0_x", $scope => {
  _._lifecycle($scope, "$lifecycle", {
    x: $scope.x,
    onMount: function () {
      this.w = 1;
      return {
        y: this.x,
        u: 5
      };
    },
    onUpdate: function () {
      document.getElementById("ref").textContent = JSON.stringify(this);
    }
  });
  _._on($scope["#button/0"], "click", function () {
    $x($scope, $scope.x + 1);
  });
});
const $x = /* @__PURE__ */_._let("x/1", $x__script);
export function $setup($scope) {
  $x($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);