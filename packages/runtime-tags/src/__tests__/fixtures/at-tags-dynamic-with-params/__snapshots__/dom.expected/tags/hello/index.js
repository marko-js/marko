export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", 0, 0, 1);
export const $input_item = /* @__PURE__ */_$.value("input_item", ($scope, input_item) => $dynamicTag($scope, input_item, () => [1]));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_item($scope, input.item));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);