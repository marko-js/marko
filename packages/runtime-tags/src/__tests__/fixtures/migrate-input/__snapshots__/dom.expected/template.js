export const $template = "<div><span> </span></div>";
export const $walks = /* next(2), get, out(2) */"E m";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_x = /* @__PURE__ */_._const("input_x", ($scope, input_x) => _._text($scope["#text/0"], input_x));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_x($scope, input.x));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);