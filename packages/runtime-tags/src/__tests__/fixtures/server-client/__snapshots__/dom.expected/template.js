export const $template = "<div><span> </span></div>";
export const $walks = /* next(2), get, out(2) */"E m";
var server_x;
const client_x = 2;
const x = typeof server_x === "undefined" ? client_x : server_x;
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._text($scope["#text/0"], x);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);