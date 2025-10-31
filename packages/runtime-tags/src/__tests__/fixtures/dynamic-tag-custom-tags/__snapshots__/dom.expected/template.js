export const $template = "<!><!><button></button>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import child1 from "./tags/child1.marko";
import child2 from "./tags/child2.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $tagName__OR__val = /* @__PURE__ */_._or(4, $scope => $dynamicTag($scope, $scope.tagName, () => ({
  value: $scope.val
})));
const $tagName__script = _._script("__tests__/template.marko_0_tagName", $scope => _._on($scope["#button/1"], "click", function () {
  $tagName($scope, $scope.tagName === child1 ? child2 : child1);
}));
const $tagName = /* @__PURE__ */_._let("tagName/2", $scope => {
  $tagName__OR__val($scope);
  $tagName__script($scope);
});
const $val = /* @__PURE__ */_._let("val/3", $tagName__OR__val);
export function $setup($scope) {
  $tagName($scope, child1);
  $val($scope, 3);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);