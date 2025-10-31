export const $template = "<div>x=<span> </span>, was=<!></div><button id=increment>Increment</button>";
export const $walks = /* next(1), over(1), next(1), get, out(1), over(1), replace, out(1), get, over(1) */"DbD lb%l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__script = _._script("__tests__/template.marko_0_x", $scope => {
  _._lifecycle($scope, "$lifecycle", {
    onMount: function () {
      this.cur = $scope.x;
    },
    onUpdate: function () {
      $prev($scope, this.cur);
      this.cur = $scope.x;
    }
  });
  _._on($scope["#button/2"], "click", function () {
    $x($scope, $scope.x + 1);
  });
});
const $x = /* @__PURE__ */_._let("x/3", $scope => {
  _._text($scope["#text/0"], $scope.x);
  $x__script($scope);
});
const $prev = /* @__PURE__ */_._let("prev/4", $scope => _._text($scope["#text/1"], $scope.prev));
export function $setup($scope) {
  $x($scope, 0);
  $prev($scope, false);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);