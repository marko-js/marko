export const $template = "<div><span> </span></div>";
export const $walks = /* next(2), get, out(2) */"E m";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
export const $input_x = /* @__PURE__ */_$.value("input_x", ($scope, input_x) => _$.data($scope["#text/0"], input_x));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_x($scope, input.x));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);