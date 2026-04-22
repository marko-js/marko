export const $template = /*@__PURE__*/(_w0 => `${_w0}source=<!>`)(_child_template);
export const $walks =
/*@__PURE__*/
/* <child>, over(1), replace, over(1) */
(_w0 => `/${_w0}&b%b`)(_child_walks);
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $source = /* @__PURE__ */_._let("source/2", $scope => {
  _child_input($scope["#childScope/0"], {
    value: $scope.source,
    valueChange: $valueChange($scope)
  });
  _._text($scope["#text/1"], $scope.source);
});
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  $source($scope, 1);
}
function $valueChange($scope) {
  return _new_source => {
    $source($scope, _new_source);
  };
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);