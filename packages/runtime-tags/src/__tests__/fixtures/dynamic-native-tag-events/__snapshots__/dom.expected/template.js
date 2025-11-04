export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
_._resume_dynamic_tag();
const $tagName_content = _._content_resume("__tests__/template.marko_1_content", "body content", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $tagName_content);
const $tagName = /* @__PURE__ */_._let("tagName/1", $scope => $dynamicTag($scope, $scope.tagName, () => ({
  class: "A",
  onClick: $onClick($scope)
})));
export function $setup($scope) {
  $tagName($scope, "span");
}
function $onClick($scope) {
  return function () {
    $tagName($scope, $scope.tagName === "span" ? "div" : "span");
  };
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);