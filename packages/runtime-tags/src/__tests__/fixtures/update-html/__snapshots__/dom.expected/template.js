export const $template = "<em>Testing</em> <!>";
export const $walks = /* over(2), replace, over(1) */"c%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $value = /* @__PURE__ */_._const("value", ($scope, value) => _._html($scope, value, "#text/0"));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $value($scope, input.value));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);