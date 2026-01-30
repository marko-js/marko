export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_option__script = _._script("__tests__/tags/child.marko_0_input_option", $scope => console.log($scope.input_option));
export const $input_option = /* @__PURE__ */_._const("input_option", $input_option__script);
export const $input = ($scope, input) => $input_option($scope, input.option);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);