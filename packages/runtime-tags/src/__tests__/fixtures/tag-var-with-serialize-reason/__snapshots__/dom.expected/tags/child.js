export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if = /* @__PURE__ */_._if("#text/0", "<span></span>", /* over(1) */"b");
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => $if($scope, $scope.input_value ? 0 : 1));
export function $setup($scope) {
  _._return($scope, 1);
}
export const $input = /* @__PURE__ */_._const("input", $scope => $input_value($scope, $scope.input.value));
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);