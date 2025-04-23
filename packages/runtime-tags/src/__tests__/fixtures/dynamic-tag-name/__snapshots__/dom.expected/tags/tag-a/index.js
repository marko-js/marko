export const $template = "<div>A <!></div>";
export const $walks = /* get, next(1), over(1), replace, out(1) */" Db%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $className = /* @__PURE__ */_$.value("className", ($scope, className) => _$.classAttr($scope["#div/0"], className));
export const $other = /* @__PURE__ */_$.value("other", ($scope, other) => _$.attr($scope["#div/0"], "data-other", other));
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const $content = /* @__PURE__ */_$.value("content", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $className($scope, input.class);
  $other($scope, input.other);
  $content($scope, input.content);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/tag-a/index.marko", $template, $walks, $setup, $input);