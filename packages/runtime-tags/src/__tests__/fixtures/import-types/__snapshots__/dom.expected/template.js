export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $foo = /* @__PURE__ */_._const("foo", ($scope, foo) => _._text($scope["#text/0"], String(foo)));
export function $setup($scope) {
  $foo($scope, true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);