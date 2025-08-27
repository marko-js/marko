export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $tagName_content = _$.registerContent("__tests__/template.marko_1_renderer", "Hello World", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $tagName_content);
export const $tagName = /* @__PURE__ */_$.value("tagName", ($scope, tagName) => $dynamicTag($scope, tagName, () => ({
  class: ["a", "b"]
})));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $tagName($scope, input.tagName));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);