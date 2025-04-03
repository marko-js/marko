export const $template = "Hello <!>!";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $input_name = /* @__PURE__ */_$.value("input_name", ($scope, input_name) => _$.data($scope["#text/0"], input_name));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_name($scope, input.name));
export default /* @__PURE__ */_$.createTemplate("__tests__/hello.marko", $template, $walks, $setup, $input);