export const $template = "<!> <!>";
export const $walks = /* replace, over(2), replace, over(1) */"%c%b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $a = /* @__PURE__ */_$.value("a", ($scope, a) => _$.data($scope["#text/0"], a));
export const $b = /* @__PURE__ */_$.value("b", ($scope, b) => _$.data($scope["#text/1"], b));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $a($scope, input.a);
  $b($scope, input.b);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);