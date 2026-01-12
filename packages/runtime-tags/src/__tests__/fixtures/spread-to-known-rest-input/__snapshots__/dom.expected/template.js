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
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input = /* @__PURE__ */_._const("input", $scope => {
  _child_input_class($scope["#childScope/0"], $scope.input.class);
  _child_input_$rest($scope["#childScope/0"], (({
    class: $class,
    ...rest
  }) => rest)($scope.input));
  $dynamicTag($scope, Child, () => $scope.input);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);