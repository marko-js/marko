export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => _._text($scope["#text/0"], input));
export function $setup($scope) {
  _._return($scope, "hello from other");
}
export default /* @__PURE__ */_._template("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);