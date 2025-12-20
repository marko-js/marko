export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
export const $setup = () => {};
export const v = 123;
import * as _ from "@marko/runtime-tags/debug/dom";
export const $value = ($scope, value) => _._text($scope["#text/0"], value);
export const $input = ($scope, input) => $value($scope, input.value);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);