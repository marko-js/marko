export const $template = "<!><!><button></button>";
export const $walks = /* replace, over(1), get, over(1) */"D%b b";
import child1 from "./tags/child1.marko";
import child2 from "./tags/child2.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const $expr_tagName_val = /* @__PURE__ */_$.intersection(4, $scope => {
  const {
    tagName,
    val
  } = $scope;
  $dynamicTag($scope, tagName, () => ({
    value: val
  }));
});
const $tagName_effect = _$.effect("__tests__/template.marko_0_tagName", ($scope, {
  tagName
}) => _$.on($scope["#button/1"], "click", function () {
  $tagName($scope, tagName = tagName === child1 ? child2 : child1);
}));
const $tagName = /* @__PURE__ */_$.state("tagName/2", $scope => {
  $expr_tagName_val($scope);
  $tagName_effect($scope);
});
const $val = /* @__PURE__ */_$.state("val/3", $expr_tagName_val);
export function $setup($scope) {
  $tagName($scope, child1);
  $val($scope, 3);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);