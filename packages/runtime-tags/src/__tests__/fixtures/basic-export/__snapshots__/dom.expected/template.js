export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
export const $setup = () => {};
export const v = 123;
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $value = /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/0"], value));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $value($scope, input.value));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);