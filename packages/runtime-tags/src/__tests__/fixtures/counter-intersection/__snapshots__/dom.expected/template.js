export const $template = "<div><button class=a> </button> + <button class=b> </button> = <!></div>";
export const $walks = /* next(1), get, next(1), get, out(1), over(1), get, next(1), get, out(1), over(1), replace, out(1) */"D D lb D lb%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $a__OR__b = /* @__PURE__ */_._or(7, $scope => _._text($scope["#text/4"], $scope.a + $scope.b));
const $a = /* @__PURE__ */_._let("a/5", $scope => {
  _._text($scope["#text/1"], $scope.a);
  $a__OR__b($scope);
});
const $b = /* @__PURE__ */_._let("b/6", $scope => {
  _._text($scope["#text/3"], $scope.b);
  $a__OR__b($scope);
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _._on($scope["#button/0"], "click", function () {
    $a($scope, 10);
  });
  _._on($scope["#button/2"], "click", function () {
    $b($scope, 5);
  });
});
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);