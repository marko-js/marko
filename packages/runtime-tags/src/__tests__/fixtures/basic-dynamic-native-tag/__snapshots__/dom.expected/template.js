export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $tagName_content = _._content_resume("__tests__/template.marko_1_content", "Hello World", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $tagName_content);
export const $tagName = /* @__PURE__ */_._const("tagName", $scope => $dynamicTag($scope, $scope.tagName, () => ({
  class: ["a", "b"]
})));
export const $input = /* @__PURE__ */_._const("input", $scope => $tagName($scope, $scope.input.tagName));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);