export const $template = `<div id=known>${_child_template}</div><div id=dynamic><!></div>`;
export const $walks = /* next(1), <child>, out(1), next(1), replace, out(1) */`D/${_child_walks}&lD%l`;
import childTag from "./tags/child.marko";
const Child = childTag;
import { $setup as _child, $_class as _child_input_class, $rest as _child_input_$rest, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
_._resume_dynamic_tag();
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
const $input_class = ($scope, input_class) => _child_input_class($scope["#childScope/0"], input_class);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input = ($scope, input) => {
  _child_input_$rest($scope["#childScope/0"], input);
  $input_class($scope, input.class);
  $dynamicTag($scope, Child, () => input);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);