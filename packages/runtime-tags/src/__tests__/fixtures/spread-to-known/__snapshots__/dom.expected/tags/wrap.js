export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input_class as _child_input_class, $input_value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_class = /* @__PURE__ */_._const("input_class", $scope => _child_input_class($scope["#childScope/0"], $scope.input_class));
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => _child_input_value($scope["#childScope/0"], $scope.input_value));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_class($scope, $scope.input.class);
  $input_value($scope, $scope.input.value);
});
export default /* @__PURE__ */_._template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);