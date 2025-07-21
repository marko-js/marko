export const $template = "<button>Increment</button><!> <!>";
export const $walks = /* get, over(1), replace, over(2), replace, over(1) */" b%c%b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $b_effect = _$.effect("__tests__/template.marko_0_b", ($scope, {
  b
}) => _$.on($scope["#button/0"], "click", () => ($b($scope, ++b), b - 1)));
const $b = /* @__PURE__ */_$.state("b/6", ($scope, b) => {
  _$.data($scope["#text/2"], b);
  $b_effect($scope);
});
export const $a = /* @__PURE__ */_$.value("a", ($scope, a) => {
  _$.data($scope["#text/1"], a);
  $b($scope, a * 2);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $a($scope, input.a));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);