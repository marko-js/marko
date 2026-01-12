export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input_class as _child_input_class, $input_content as _child_input_content, $template as _child_template, $walks as _child_walks } from "./child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
export const $_class = ($scope, _class) => _child_input_class($scope["#childScope/0"], _class);
export const $rest_content = ($scope, rest_content) => _child_input_content($scope["#childScope/0"], rest_content);
export const $input = ($scope, input) => {
  (({
    class: $class,
    ...rest
  }) => $rest($scope, rest))(input);
  $_class($scope, input.class);
};
export const $rest = ($scope, rest) => $rest_content($scope, rest.content);
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/tags/wrap.marko", $template, $walks, $setup, $input);