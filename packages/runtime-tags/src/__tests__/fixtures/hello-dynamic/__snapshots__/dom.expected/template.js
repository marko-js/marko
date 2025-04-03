export const $template = "Hello <!>! Hello <!>! Hello <!>!";
export const $walks = /* over(1), replace, over(2), replace, over(2), replace, over(2) */"b%c%c%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $input_missing = /* @__PURE__ */_$.value("input_missing", ($scope, input_missing) => _$.html($scope, input_missing, "#text/2"));
export const $input_name = /* @__PURE__ */_$.value("input_name", ($scope, input_name) => {
  _$.data($scope["#text/0"], input_name);
  _$.html($scope, input_name, "#text/1");
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_name($scope, input.name);
  $input_missing($scope, input.missing);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);