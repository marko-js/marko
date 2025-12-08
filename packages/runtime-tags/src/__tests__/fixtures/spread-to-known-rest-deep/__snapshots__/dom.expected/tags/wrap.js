export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input_value as _child_input_value, $input_class as _child_input_class, $template as _child_template, $walks as _child_walks } from "./child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export const $value = /* @__PURE__ */_._const("value", $scope => _child_input_value($scope["#childScope/0"], $scope.value));
export const $rest_class = /* @__PURE__ */_._const("rest_class", $scope => _child_input_class($scope["#childScope/0"], $scope.rest_class));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  (({
    value,
    ...rest
  }) => $rest($scope, rest))($scope.input);
  $value($scope, $scope.input.value);
});
export const $rest = /* @__PURE__ */_._const("rest", $scope => $rest_class($scope, $scope.rest.class));
export default /* @__PURE__ */_._template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);