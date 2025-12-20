export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, 0, 1);
export const $input_item = ($scope, input_item) => $dynamicTag($scope, input_item, () => [1]);
export const $input = ($scope, input) => $input_item($scope, input.item);
export default /* @__PURE__ */_._template("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);