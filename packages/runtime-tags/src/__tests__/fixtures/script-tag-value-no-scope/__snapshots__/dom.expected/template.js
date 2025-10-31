export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $setText2__script = _._script("__tests__/template.marko_0_setText", $scope => $scope.setText());
const $setText2 = /* @__PURE__ */_._const("setText", $setText2__script);
export function $setup($scope) {
  $setText2($scope, $setText($scope));
}
function $setText($scope) {
  return function (arg) {
    if (arg) {
      debugger;
      throw new Error(`Expected no argument to be passed, but received "${typeof arg}".`);
    }
    _._el_read($scope["#div/0"]).textContent = typeof arg;
  };
}
_._resume("__tests__/template.marko_0/setText", $setText);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);