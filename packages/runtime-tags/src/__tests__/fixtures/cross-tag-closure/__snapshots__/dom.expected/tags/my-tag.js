export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export const $input_content = /* @__PURE__ */_._const("input_content", $dynamicTag);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_content($scope, input.content));
export default /* @__PURE__ */_._template("__tests__/tags/my-tag.marko", $template, $walks, $setup, $input);