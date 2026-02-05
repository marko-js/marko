export const $template = `${_child_template}source=<!>`;
export const $walks = /* <child>, over(1), replace, over(1) */`/${_child_walks}&b%b`;
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
  return (_new_source => {
    $source($scope, _new_source);
  });
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);