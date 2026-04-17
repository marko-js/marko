export const $template = "<script></script>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $injection = /* @__PURE__ */_._let("injection/1", $scope => _._text_content($scope["#script/0"], `var x = '${_._to_text($scope.injection)}'`));
export function $setup($scope) {
  _._attr_nonce($scope, "#script/0");
  $injection($scope, "</SCRIPT>");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);