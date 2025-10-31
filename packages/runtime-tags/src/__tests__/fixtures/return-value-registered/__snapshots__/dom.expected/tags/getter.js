export const $template = "";
export const $walks = "";
import * as _ from "@marko/runtime-tags/debug/dom";
const $getter2 = /* @__PURE__ */_._const("getter", $scope => _._return($scope, $scope.getter));
export function $setup($scope) {
  $getter2($scope, $getter);
}
function $getter() {
  return "hello";
}
_._resume("__tests__/tags/getter.marko_0/getter", $getter);
export default /* @__PURE__ */_._template("__tests__/tags/getter.marko", $template, $walks, $setup);