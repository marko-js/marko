export const $template = "<div>Child 2 has <!></div>";
export const $walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $value = /* @__PURE__ */_._const("value", ($scope, value) => _._text($scope["#text/0"], value));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $value($scope, input.value));
export default /* @__PURE__ */_._template("__tests__/tags/child2.marko", $template, $walks, $setup, $input);