export const $template = "<!><!><button></button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $tagName_content = _._content_resume("__tests__/template.marko_1_content", "body content", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $tagName_content);
const $tagName__OR__className = /* @__PURE__ */_._or(4, $scope => $dynamicTag($scope, $scope.tagName, () => ({
  class: $scope.className
})));
const $tagName__script = _._script("__tests__/template.marko_0_tagName", $scope => _._on($scope["#button/1"], "click", function () {
  $tagName($scope, $scope.tagName === "span" ? "div" : "span");
}));
const $tagName = /* @__PURE__ */_._let("tagName/2", $scope => {
  $tagName__OR__className($scope);
  $tagName__script($scope);
});
const $className = /* @__PURE__ */_._let("className/3", $tagName__OR__className);
export function $setup($scope) {
  $tagName($scope, "span");
  $className($scope, "A");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);