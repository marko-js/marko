export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_fn = ($scope, input_fn) => _._text($scope["#text/0"], typeof input_fn);
export const $input = ($scope, input) => $input_fn($scope, input.fn);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);