export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import * as _$ from "@marko/runtime-tags/debug/dom";
export function $setup($scope) {
  _$.tagVarSignal($scope, $_return($scope));
}
function $_return($scope) {
  return function (html) {
    $scope["#div/0"].innerHTML = html;
  };
}
_$.register("__tests__/tags/child.marko_0/_return", $_return);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup);