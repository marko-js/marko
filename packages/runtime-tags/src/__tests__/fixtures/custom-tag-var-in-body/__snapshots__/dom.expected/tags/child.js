export const $template = "<!><!><div></div>";
export const $walks = /* over(1), replace, over(1), get, over(1) */"b%b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
export const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content);
export function $setup($scope) {
  _._return($scope, $_return($scope));
}
export const $input = ($scope, input) => $input_content($scope, input.content);
function $_return($scope) {
  return (() => html => _._el_read($scope["#div/1"]).innerHTML = html);
}
_._resume("__tests__/tags/child.marko_0/_return", $_return);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);