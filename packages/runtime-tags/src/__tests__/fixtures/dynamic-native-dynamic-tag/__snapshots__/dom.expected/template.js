export const $template = "<!><!><button></button>";
export const $walks = /* replace, over(1), get, over(1) */"D%b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $tagName_content = _$.registerContent("__tests__/template.marko_1_renderer", "body content");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $tagName_content);
const $expr_tagName_className = /* @__PURE__ */_$.intersection(4, $scope => {
  const {
    tagName,
    className
  } = $scope;
  $dynamicTag($scope, tagName, () => ({
    class: className
  }));
});
const $tagName_effect = _$.effect("__tests__/template.marko_0_tagName", ($scope, {
  tagName
}) => _$.on($scope["#button/1"], "click", function () {
  $tagName($scope, tagName = tagName === "span" ? "div" : "span");
}));
const $tagName = /* @__PURE__ */_$.state("tagName/2", $scope => {
  $expr_tagName_className($scope);
  $tagName_effect($scope);
});
const $className = /* @__PURE__ */_$.state("className/3", $expr_tagName_className);
export function $setup($scope) {
  $tagName($scope, "span");
  $className($scope, "A");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);