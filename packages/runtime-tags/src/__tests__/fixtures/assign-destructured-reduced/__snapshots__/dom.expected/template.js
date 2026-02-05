export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count = /* @__PURE__ */_._let("count/1", $scope => _child_input($scope["#childScope/0"], {
  value: $scope.count,
  valueChange: $valueChange($scope)
}));
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  $count($scope, 0);
}
function $valueChange($scope) {
  return _new_count => {
    $count($scope, _new_count);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);