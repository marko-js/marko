export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $valueChange2 as _child_input_valueChange, $rest as _child_input_$rest, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $child_content__value = /* @__PURE__ */_._closure_get("value", $scope => _._text($scope["#text/0"], $scope._.value));
const $child_content__setup = $child_content__value;
const $child_content = _._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $child_content__setup);
const $value__closure = /* @__PURE__ */_._closure($child_content__value);
const $value = /* @__PURE__ */_._let("value/1", $value__closure);
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_valueChange($scope["#childScope/0"], $valueChange($scope));
  _child_input_$rest($scope["#childScope/0"], {
    content: $child_content($scope)
  });
  $value($scope, 1);
}
function $valueChange($scope) {
  return (_new_value => {
    $value($scope, _new_value);
  });
}
_._resume("__tests__/template.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);