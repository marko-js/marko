export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $input_value = /* @__PURE__ */_$.value("input_value", _$.tagVarSignal);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-const.marko", $template, $walks, $setup, $input);