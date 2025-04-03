export const $template = "<div>Child 2 has <!></div>";
export const $walks = /* next(1), over(1), replace, out(1) */"Db%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $value = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child2.marko", $template, $walks, $setup, $input);