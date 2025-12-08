export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input_class as _child_input_class, $input_value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_class($scope["#childScope/0"]);
  _child_input_value($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export const $rest_class = /* @__PURE__ */_._const("rest_class", $scope => _child_input_class($scope["#childScope/0"], $scope.rest_class));
export const $rest_value = /* @__PURE__ */_._const("rest_value", $scope => _child_input_value($scope["#childScope/0"], $scope.rest_value));
export const $input = /* @__PURE__ */_._const("input", $scope => (({
  value,
  ...rest
}) => $rest($scope, rest))($scope.input));
export const $rest = /* @__PURE__ */_._const("rest", $scope => {
  $rest_class($scope, $scope.rest.class);
  $rest_value($scope, $scope.rest.value);
});
export default /* @__PURE__ */_._template("__tests__/tags/wrap-rest.marko", $template, $walks, $setup, $input);