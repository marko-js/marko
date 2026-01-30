export const $template = "";
export const $walks = "";
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._return($scope, $_return);
}
function $_return() {
  return 1;
}
_._resume("__tests__/tags/source.marko_0/_return", $_return);
export default /* @__PURE__ */_._template("__tests__/tags/source.marko", $template, $walks, $setup);