export const $template = "<div>B <!></div>";
export const $walks = /* get, next(1), over(1), replace, out(1) */" Db%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $className = /* @__PURE__ */_._const("className", $scope => _._attr_class($scope["#div/0"], $scope.className));
export const $other = /* @__PURE__ */_._const("other", $scope => _._attr($scope["#div/0"], "data-other", $scope.other));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $content = /* @__PURE__ */_._const("content", $scope => $dynamicTag($scope, $scope.content));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $className($scope, $scope.input.class);
  $other($scope, $scope.input.other);
  $content($scope, $scope.input.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/tag-b/index.marko", $template, $walks, $setup, $input);