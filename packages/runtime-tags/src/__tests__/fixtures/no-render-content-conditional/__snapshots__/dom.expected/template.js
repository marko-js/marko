export const $template = /*@__PURE__*/(_w0 => `<div></div>${_w0}`)(_child_template);
export const $walks =
/*@__PURE__*/
/* get, over(1), <child> */
(_w0 => ` b/${_w0}&`)(_child_walks);
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $output_getter = _._el("__tests__/template.marko_0_#div", "#div/0");
export function $setup($scope) {
  _child($scope["#childScope/1"]);
}
export const $input_foo = ($scope, input_foo) => _child_input($scope["#childScope/1"], {
  foo: input_foo,
  output: $output_getter($scope)
});
export const $input = ($scope, input) => $input_foo($scope, input.foo);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);