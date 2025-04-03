export const $template = "<em>Testing</em> <!>";
export const $walks = /* over(2), replace, over(1) */"c%b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $value = /* @__PURE__ */_$.value("value", ($scope, value) => _$.html($scope, value, "#text/0"));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);