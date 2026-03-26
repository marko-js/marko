export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, 0, 1);
const $input_content__OR__input_value = /* @__PURE__ */_._or(5, $scope => $dynamicTag($scope, $scope.content, () => [$scope.value]));
export const $content = /* @__PURE__ */_._const("content", $input_content__OR__input_value);
export const $value = /* @__PURE__ */_._const("value", $input_content__OR__input_value);
export const $input = ($scope, input) => {
  $content($scope, input.content);
  $value($scope, input.value);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);