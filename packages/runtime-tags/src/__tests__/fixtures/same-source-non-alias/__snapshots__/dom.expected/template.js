export const $template = "<button><!> <!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
function createWrapper(a) {
  return {
    a
  };
}
import * as _ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_._const("$pattern", $scope => $a($scope, $scope.$pattern.a));
const $count__script = _._script("__tests__/template.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/3", $scope => {
  $pattern2($scope, createWrapper($scope.count));
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
const $a = /* @__PURE__ */_._const("a", $scope => {
  _._text($scope["#text/1"], $scope.a);
  $b($scope, $scope.a);
});
const $b = $scope => {
  _._text($scope["#text/2"], $scope.a);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);