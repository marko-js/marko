export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const $input_content = /* @__PURE__ */_$.value("input_content", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_content($scope, input.content));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-tag.marko", $template, $walks, $setup, $input);