export const $template = "<input>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => _._attr_input_value_default($scope, "#input/0", $scope.input_value));
export const $input_class = ($scope, input_class) => _._attr_class($scope["#input/0"], input_class);
export const $input = ($scope, input) => {
  $input_class($scope, input.class);
  $input_value($scope, input.value);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);