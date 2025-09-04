export const $template = "<div><span> </span></div>";
export const $walks = /* next(2), get, out(2) */"E m";
const x = 1;
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._text($scope["#text/0"], x);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);