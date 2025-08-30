export const $template = "<div><button class=a> </button> + <button class=b> </button> = <!></div>";
export const $walks = /* next(1), get, next(1), get, out(1), over(1), get, next(1), get, out(1), over(1), replace, out(1) */"D D lb D lb%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_a_b = /* @__PURE__ */_$.intersection(7, $scope => {
  let {
    a,
    b
  } = $scope;
  _$.data($scope["#text/4"], a + b);
});
const $a = /* @__PURE__ */_$.state("a/5", ($scope, a) => {
  _$.data($scope["#text/1"], a);
  $expr_a_b($scope);
});
const $b = /* @__PURE__ */_$.state("b/6", ($scope, b) => {
  _$.data($scope["#text/3"], b);
  $expr_a_b($scope);
});
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => {
  _$.on($scope["#button/0"], "click", function () {
    $a($scope, 10);
  });
  _$.on($scope["#button/2"], "click", function () {
    $b($scope, 5);
  });
});
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);