export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._return($scope, $_return($scope));
}
function $_return($scope) {
  return (() => ({
    setHtml(value) {
      _._el_read($scope["#div/0"]).innerHTML = value;
    },
    addClass(value) {
      _._el_read($scope["#div/0"]).classList.add(value);
    }
  }));
}
_._resume("__tests__/tags/source.marko_0/_return", $_return);
export default /* @__PURE__ */_._template("__tests__/tags/source.marko", $template, $walks, $setup);