export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__child_text = /* @__PURE__ */_._const("child_text", $scope => _._text($scope["#text/0"], $scope.child_text));
const $for_content__$params = /* @__PURE__ */_._const("$params2", $scope => $for_content__child($scope, $scope.$params2[0]));
const $for_content__child = /* @__PURE__ */_._const("child", $scope => $for_content__child_text($scope, $scope.child?.text));
const $for_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
export const $input_children = /* @__PURE__ */_._const("input_children", $scope => $for($scope, [$scope.input_children, function (c) {
  return c.id;
}]));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_children($scope, $scope.input.children));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);