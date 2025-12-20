export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__child_text = ($scope, child_text) => _._text($scope["#text/0"], child_text);
const $for_content__$params = ($scope, $params2) => $for_content__child($scope, $params2[0]);
const $for_content__child = ($scope, child) => $for_content__child_text($scope, child?.text);
const $for = /* @__PURE__ */_._for_of("#text/0", " ", /* get, over(1) */" b", 0, $for_content__$params);
export const $input_children = ($scope, input_children) => $for($scope, [input_children, function (c) {
  return c.id;
}]);
export const $input = ($scope, input) => $input_children($scope, input.children);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);