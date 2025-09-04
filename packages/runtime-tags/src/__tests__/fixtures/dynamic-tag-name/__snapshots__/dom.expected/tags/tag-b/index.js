export const $template = "<div>B <!></div>";
export const $walks = /* get, next(1), over(1), replace, out(1) */" Db%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $className = /* @__PURE__ */_._const("className", ($scope, className) => _._attr_class($scope["#div/0"], className));
export const $other = /* @__PURE__ */_._const("other", ($scope, other) => _._attr($scope["#div/0"], "data-other", other));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $content = /* @__PURE__ */_._const("content", $dynamicTag);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $className($scope, input.class);
  $other($scope, input.other);
  $content($scope, input.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/tag-b/index.marko", $template, $walks, $setup, $input);