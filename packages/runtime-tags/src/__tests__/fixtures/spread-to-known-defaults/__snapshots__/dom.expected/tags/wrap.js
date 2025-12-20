export const $template = `${_child_template}${_child_template}`;
export const $walks = /* <child>, <child> */`/${_child_walks}&/${_child_walks}&`;
import { $setup as _child, $input_value as _child_input_value, $input_class as _child_input_class, $template as _child_template, $walks as _child_walks } from "./child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_value($scope["#childScope/0"], "override");
  _child($scope["#childScope/1"]);
}
const $input_class = ($scope, input_class) => _child_input_class($scope["#childScope/0"], input_class);
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input = /* @__PURE__ */_._const("input", $scope => {
  const $child_input_spread = {
    value: "default",
    ...$scope.input
  };
  _child_input_class($scope["#childScope/1"], $child_input_spread.class);
  _child_input_value($scope["#childScope/1"], $child_input_spread.value);
  $input_class($scope, $scope.input.class);
});
export default /* @__PURE__ */_._template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);