export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
export function getAnswer() {
  return 42;
}
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._text($scope["#text/0"], getAnswer());
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);