export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $content as _child_input_content, $rest as _child_input_$rest, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $child_content__value = /* @__PURE__ */_._closure_get("value", $scope => _._text($scope["#text/0"], $scope._.value));
const $child_content__setup = $child_content__value;
const $child_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $child_content__setup);
const $value = /* @__PURE__ */_._const("value");
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
  _child_input_$rest($scope["#childScope/0"], {});
  $value($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);