export const $template = "<input>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_class = /* @__PURE__ */_._const("input_class", $scope => _._attr_class($scope["#input/0"], $scope.input_class));
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => _._attr($scope["#input/0"], "value", $scope.input_value));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_class($scope, $scope.input.class);
  $input_value($scope, $scope.input.value);
});
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);