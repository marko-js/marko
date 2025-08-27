export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
export const $input_what = /* @__PURE__ */_$.value("input_what", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_what($scope, input.what));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/thing.marko", $template, $walks, $setup, $input);