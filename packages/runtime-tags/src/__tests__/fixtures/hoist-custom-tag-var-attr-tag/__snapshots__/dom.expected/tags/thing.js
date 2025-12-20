export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export const $input_what = ($scope, input_what) => $dynamicTag($scope, input_what);
export const $input = ($scope, input) => $input_what($scope, input.what);
export default /* @__PURE__ */_._template("__tests__/tags/thing.marko", $template, $walks, $setup, $input);