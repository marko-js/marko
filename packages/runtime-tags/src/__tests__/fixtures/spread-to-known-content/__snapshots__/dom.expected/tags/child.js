export const $template = "<p><!></p>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_class = ($scope, input_class) => _._attr_class($scope["#p/0"], input_class);
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
export const $input = ($scope, input) => {
  $input_class($scope, input.class);
  $input_content($scope, input.content);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);