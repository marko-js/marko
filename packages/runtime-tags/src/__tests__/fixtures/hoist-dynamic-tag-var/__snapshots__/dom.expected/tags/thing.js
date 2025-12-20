export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_value__script = _._script("__tests__/tags/thing.marko_0_input_value", $scope => $scope.input_value);
export const $input_value = /* @__PURE__ */_._const("input_value", $input_value__script);
export const $input = ($scope, input) => $input_value($scope, input.value);
export default /* @__PURE__ */_._template("__tests__/tags/thing.marko", $template, $walks, $setup, $input);