export const $template = "Static <!>";
export const $walks = /* over(1), replace, over(1) */"b%b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $value = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);