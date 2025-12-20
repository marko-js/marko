export const $template = "<button><!>:<!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $bar__OR__fooChange__script = _._script("__tests__/template.marko_0_bar_$fooChange", $scope => _._on($scope["#button/0"], "click", function () {
  $scope.$fooChange($scope.bar + 1);
}));
const $bar__OR__fooChange = /* @__PURE__ */_._or(7, $bar__OR__fooChange__script);
const $bar = /* @__PURE__ */_._let("bar/3", $scope => {
  _._text($scope["#text/2"], $scope.bar);
  $bar__OR__fooChange($scope);
});
const $pattern2 = ($scope, $pattern) => {
  $foo2($scope, $pattern.foo);
  $fooChange2($scope, $pattern.fooChange);
};
export function $setup($scope) {
  $bar($scope, 0);
  $pattern2($scope, {
    foo: 1,
    fooChange: $foo($scope)
  });
}
const $foo2 = ($scope, foo) => _._text($scope["#text/1"], foo);
const $fooChange2 = /* @__PURE__ */_._const("$fooChange", $bar__OR__fooChange);
function $foo($scope) {
  return function (v) {
    $bar($scope, v);
  };
}
_._resume("__tests__/template.marko_0/foo", $foo);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);