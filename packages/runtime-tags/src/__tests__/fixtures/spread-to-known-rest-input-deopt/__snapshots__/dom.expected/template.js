export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $_class as _child_input_class, $rest as _child_input_$rest, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input = /* @__PURE__ */_._const("input", $scope => {
  const $child_input_spread = {
    "data-foo": 1,
    ...$scope.input
  };
  _child_input_class($scope["#childScope/0"], $child_input_spread.class);
  _child_input_$rest($scope["#childScope/0"], (({
    class: $class,
    ...rest
  }) => rest)($child_input_spread));
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);