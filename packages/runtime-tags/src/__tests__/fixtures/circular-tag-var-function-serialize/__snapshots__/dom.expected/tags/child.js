export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_valueChange__script = _._script("__tests__/tags/child.marko_0_input_valueChange", $scope => $scope.input_valueChange(1));
export const $input_valueChange = /* @__PURE__ */_._const("input_valueChange", $input_valueChange__script);
export const $input = ($scope, input) => $input_valueChange($scope, input.valueChange);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);