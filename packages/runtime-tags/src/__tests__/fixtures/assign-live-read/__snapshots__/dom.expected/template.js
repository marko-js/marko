export const $template = "<button> </button><button></button>";
export const $walks = /* get, next(1), get, out(1), get, over(1) */" D l b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $resetCount2__script = _._script("__tests__/template.marko_0_resetCount", $scope => _._on($scope["#button/2"], "click", $scope.resetCount));
const $resetCount2 = /* @__PURE__ */_._const("resetCount", $resetCount2__script);
const $count__script = _._script("__tests__/template.marko_0_count", $scope => {
  _._on($scope["#button/0"], "click", function () {
    $count($scope, $scope.count + 1);
    $count($scope, $scope.count + 1);
  });
  $scope.count;
});
const $count = /* @__PURE__ */_._let("count/3", $scope => {
  _._text($scope["#text/1"], $scope.count);
  $resetCount2($scope, $resetCount($scope));
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
function $resetCount($scope) {
  return function () {
    if ($scope.count > 0) {
      $count($scope, 0);
    }
  };
}
_._resume("__tests__/template.marko_0/resetCount", $resetCount);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);