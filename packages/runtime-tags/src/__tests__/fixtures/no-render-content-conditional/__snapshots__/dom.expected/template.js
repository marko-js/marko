export const $template = `<div></div>${_child_template}`;
export const $walks = /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
const $get_output = _$.nodeRef("__tests__/template.marko_0/#div", "Getter:#div/0");
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
export const $input_foo = /* @__PURE__ */_$.value("input_foo", ($scope, input_foo) => _child_input($scope["#childScope/1"], {
  foo: input_foo,
  output: $get_output($scope)
}));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_foo($scope, input.foo));
export function $setup($scope) {
  _child($scope["#childScope/1"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);