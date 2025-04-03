export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_content_value = /* @__PURE__ */_$.intersection(5, $scope => {
  const {
    content,
    value
  } = $scope;
  $dynamicTag($scope, content, () => [value]);
});
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, 0, 1);
export const $value = /* @__PURE__ */_$.value("value", $expr_content_value);
export const $content = /* @__PURE__ */_$.value("content", $expr_content_value);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $content($scope, input.content);
  $value($scope, input.value);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);