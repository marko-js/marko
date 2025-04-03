export const $template = "<body><!></body>";
export const $walks = /* next(1), replace, out(1) */"D%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const $content = /* @__PURE__ */_$.value("content", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $content($scope, input.content));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/layout.marko", $template, $walks, $setup, $input);