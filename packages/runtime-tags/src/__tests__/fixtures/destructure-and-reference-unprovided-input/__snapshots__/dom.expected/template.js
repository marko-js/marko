export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input as _child_input, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $child_content__value = /* @__PURE__ */_._closure_get("value", $scope => _._text($scope["#text/0"], $scope._.value));
const $child_content__setup = $child_content__value;
const $child_content = _._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $child_content__setup);
const $value = /* @__PURE__ */_._const("value");
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input($scope["#childScope/0"], {
    content: $child_content($scope)
  });
  $value($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);