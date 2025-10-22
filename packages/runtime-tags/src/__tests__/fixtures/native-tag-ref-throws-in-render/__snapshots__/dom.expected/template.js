export const $template = "<div></div><div> </div>";
export const $walks = /* get, over(1), next(1), get, out(1) */" bD l";
import * as _ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _._text($scope["#text/1"], _._el_read($scope["#div/0"]));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);