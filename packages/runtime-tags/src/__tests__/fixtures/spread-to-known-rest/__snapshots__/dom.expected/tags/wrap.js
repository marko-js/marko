export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input_value as _child_input_value, $input_class as _child_input_class, $template as _child_template, $walks as _child_walks } from "./child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
export const $value = ($scope, value) => _child_input_value($scope["#childScope/0"], value);
export const $rest_class = ($scope, rest_class) => _child_input_class($scope["#childScope/0"], rest_class);
export const $input = ($scope, input) => {
  (({
    value,
    ...rest
  }) => $rest($scope, rest))(input);
  $value($scope, input.value);
};
export const $rest = ($scope, rest) => $rest_class($scope, rest.class);
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);