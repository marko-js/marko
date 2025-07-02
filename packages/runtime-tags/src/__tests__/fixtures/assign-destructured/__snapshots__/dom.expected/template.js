export const $template = "<button><!>:<!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_bar_$fooChange_effect = _$.effect("__tests__/template.marko_0_bar_$fooChange", ($scope, {
  bar,
  $fooChange
}) => _$.on($scope["#button/0"], "click", function () {
  $fooChange(bar + 1);
}));
const $expr_bar_$fooChange = /* @__PURE__ */_$.intersection(7, $expr_bar_$fooChange_effect);
const $bar = /* @__PURE__ */_$.state("bar/3", ($scope, bar) => {
  _$.data($scope["#text/2"], bar);
  $expr_bar_$fooChange($scope);
});
const $pattern2 = /* @__PURE__ */_$.value("$pattern", ($scope, $pattern) => {
  $foo2($scope, $pattern.foo);
  $fooChange2($scope, $pattern.fooChange);
});
export function $setup($scope) {
  $bar($scope, 0);
  $pattern2($scope, {
    foo: 1,
    fooChange: $foo($scope)
  });
}
const $foo2 = /* @__PURE__ */_$.value("foo", ($scope, foo) => _$.data($scope["#text/1"], foo));
const $fooChange2 = /* @__PURE__ */_$.value("$fooChange", $expr_bar_$fooChange);
function $foo($scope) {
  return function (v) {
    $bar($scope, v);
  };
}
_$.register("__tests__/template.marko_0/foo", $foo);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);