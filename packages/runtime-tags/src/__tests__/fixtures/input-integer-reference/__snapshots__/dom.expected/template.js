export const $template = "<!> <!>";
export const $walks = /* replace, over(2), replace, over(1) */"%c%b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $input_value_ = /* @__PURE__ */_$.value("input_value_0", ($scope, input_value_0) => _$.data($scope["#text/1"], input_value_0));
export const $input_value = /* @__PURE__ */_$.value("input_value", ($scope, input_value) => {
  _$.data($scope["#text/0"], input_value);
  $input_value_($scope, input_value?.[0]);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);