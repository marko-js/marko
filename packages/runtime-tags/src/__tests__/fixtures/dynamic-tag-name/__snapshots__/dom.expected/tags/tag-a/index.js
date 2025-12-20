export const $template = "<div>A <!></div>";
export const $walks = /* get, next(1), over(1), replace, out(1) */" Db%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $className = ($scope, className) => _._attr_class($scope["#div/0"], className);
export const $other = ($scope, other) => _._attr($scope["#div/0"], "data-other", other);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $content = ($scope, content) => $dynamicTag($scope, content);
export const $input = ($scope, input) => {
  $className($scope, input.class);
  $other($scope, input.other);
  $content($scope, input.content);
};
export default /* @__PURE__ */_._template("__tests__/tags/tag-a/index.marko", $template, $walks, $setup, $input);