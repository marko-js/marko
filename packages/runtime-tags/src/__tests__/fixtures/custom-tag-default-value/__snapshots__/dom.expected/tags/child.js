export const $template = "<!> ";
export const $walks = /* replace, over(2) */"%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
export const $input_value = /* @__PURE__ */_$.value("input_value", $value);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);