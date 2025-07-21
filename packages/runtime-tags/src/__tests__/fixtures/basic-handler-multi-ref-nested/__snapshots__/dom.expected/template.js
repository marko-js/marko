export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_a_b_effect = _$.effect("__tests__/template.marko_0_a_b", ($scope, {
  a,
  b
}) => _$.on($scope["#button/0"], "click", function () {
  $a($scope, a = a.map(a => b));
}));
const $expr_a_b = /* @__PURE__ */_$.intersection(4, $expr_a_b_effect);
const $a = /* @__PURE__ */_$.state("a/2", ($scope, a) => {
  _$.data($scope["#text/1"], a.join(""));
  $expr_a_b($scope);
});
const $b = /* @__PURE__ */_$.state("b/3", $expr_a_b);
export function $setup($scope) {
  $a($scope, [0]);
  $b($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);