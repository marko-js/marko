export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, 0, 1);
const $content__OR__value = /* @__PURE__ */_._or(5, $scope => {
  let {
    content,
    value
  } = $scope;
  $dynamicTag($scope, content, () => [value]);
});
export const $content = /* @__PURE__ */_._const("content", $content__OR__value);
export const $value = /* @__PURE__ */_._const("value", $content__OR__value);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $content($scope, input.content);
  $value($scope, input.value);
});
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);