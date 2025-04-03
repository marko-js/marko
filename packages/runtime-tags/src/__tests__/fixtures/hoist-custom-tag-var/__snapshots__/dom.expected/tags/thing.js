export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $input_value_effect = _$.effect("__tests__/tags/thing.marko_0_input_value", ({
  input_value
}) => input_value);
export const $input_value = /* @__PURE__ */_$.value("input_value", $input_value_effect);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", $template, $walks, $setup, $input);