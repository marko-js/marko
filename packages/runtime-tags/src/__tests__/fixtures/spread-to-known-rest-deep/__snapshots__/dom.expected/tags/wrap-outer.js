export const $template = _wrap_template;
export const $walks = /* <wrap> */`/${_wrap_walks}&`;
import { $setup as _wrap, $value as _wrap_input_value, $rest_class as _wrap_input_class, $template as _wrap_template, $walks as _wrap_walks } from "./wrap.marko";
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input_value($scope["#childScope/0"], "abcd");
}
export const $rest_class = ($scope, rest_class) => _wrap_input_class($scope["#childScope/0"], rest_class);
export const $input = ($scope, input) => (({
  value,
  ...rest
}) => $rest($scope, rest))(input);
export const $rest = ($scope, rest) => $rest_class($scope, rest.class);
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/tags/wrap-outer.marko", $template, $walks, $setup, $input);