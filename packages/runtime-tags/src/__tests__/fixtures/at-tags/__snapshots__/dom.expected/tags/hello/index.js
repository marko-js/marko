export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export const $input_foo = /* @__PURE__ */_._const("input_foo", $dynamicTag);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_foo($scope, input.foo));
export default /* @__PURE__ */_._template("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);