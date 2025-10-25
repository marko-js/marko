export const $template = "<button><!>:<!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_._const("$pattern", ($scope, $pattern) => {
  $foo2($scope, $pattern.foo);
  $fooChange2($scope, $pattern.fooChange);
});
const $bar = /* @__PURE__ */_._let("bar/3", ($scope, bar) => {
  _._text($scope["#text/2"], bar);
  $pattern2($scope, {
    foo: bar,
    fooChange: $foo($scope)
  });
});
export function $setup($scope) {
  $bar($scope, 0);
}
const $foo__OR__fooChange__script = _._script("__tests__/template.marko_0_foo_$fooChange", ($scope, {
  foo,
  $fooChange
}) => _._on($scope["#button/0"], "click", function () {
  $fooChange(++foo);
}));
const $foo__OR__fooChange = /* @__PURE__ */_._or(7, $foo__OR__fooChange__script);
const $foo2 = /* @__PURE__ */_._const("foo", ($scope, foo) => {
  _._text($scope["#text/1"], foo);
  $foo__OR__fooChange($scope);
});
const $fooChange2 = /* @__PURE__ */_._const("$fooChange", $foo__OR__fooChange);
function $foo($scope) {
  return function (v) {
    $bar($scope, v);
  };
}
_._resume("__tests__/template.marko_0/foo", $foo);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);