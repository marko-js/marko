export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input_class as _child_input_class, $rest as _child_input_$rest, $template as _child_template, $walks as _child_walks } from "./child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
export const $_class = ($scope, _class) => _child_input_class($scope["#childScope/0"], _class);
export const $rest = ($scope, rest) => _child_input_$rest($scope["#childScope/0"], (({
  class: $class,
  ...rest
}) => rest)(rest));
export const $input = ($scope, input) => {
  (({
    class: $class2,
    ...rest
  }) => $rest($scope, rest))(input);
  $_class($scope, input.class);
};
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);