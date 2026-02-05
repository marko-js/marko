export const $template = "<button class=inc> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__script = _._script("__tests__/tags/counter.marko_0_x", $scope => _._on($scope["#button/0"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/2", $scope => {
  _._text($scope["#text/1"], $scope.x);
  _._return($scope, $scope.x);
  $x__script($scope);
});
export function $setup($scope) {
  _._return_change($scope, $valueChange($scope));
  $x($scope, 1);
}
function $valueChange($scope) {
  return (_new_x => {
    $x($scope, _new_x);
  });
}
_._resume("__tests__/tags/counter.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/tags/counter.marko", $template, $walks, $setup);