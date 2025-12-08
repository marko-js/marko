export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input_class as _child_input_class, $input_value as _child_input_value, $input_a as _child_input_a, $template as _child_template, $walks as _child_walks } from "./child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input = /* @__PURE__ */_._const("input", $scope => {
  const $child_input_spread = {
    ...$scope.input,
    ...{
      a: 1
    }
  };
  _child_input_class($scope["#childScope/0"], $child_input_spread.class);
  _child_input_value($scope["#childScope/0"], $child_input_spread.value);
  _child_input_a($scope["#childScope/0"], $child_input_spread.a);
});
export default /* @__PURE__ */_._template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);