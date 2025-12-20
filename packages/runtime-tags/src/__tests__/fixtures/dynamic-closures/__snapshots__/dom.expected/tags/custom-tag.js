export const $template = "<div><!></div>";
export const $walks = /* next(1), replace, out(1) */"D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
export const $input = ($scope, input) => $input_content($scope, input.content);
export default /* @__PURE__ */_._template("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);