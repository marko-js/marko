export const $template = "<div></div><div></div><div></div>";
export const $walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $a2__script = _._script("__tests__/template.marko_0_a", $scope => (_._el_read($scope["#div/0"]).textContent = $scope.a.bar() || "missing a"));
const $a2 = /* @__PURE__ */_._const("a", $a2__script);
const $b2__script = _._script("__tests__/template.marko_0_b", $scope => (_._el_read($scope["#div/1"]).textContent = $scope.b.baz() || "missing b"));
const $b2 = /* @__PURE__ */_._const("b", $b2__script);
const $foo = /* @__PURE__ */_._let("foo/3", $scope => {
  $foo_bar($scope, $scope.foo?.bar);
  $a2($scope, {
    foo: $scope.foo,
    bar: $a($scope)
  });
  $b2($scope, {
    foo: $scope.foo,
    baz: $b($scope)
  });
});
const $c2__script = _._script("__tests__/template.marko_0_c", $scope => (_._el_read($scope["#div/2"]).textContent = $scope.c.baz() || "missing c"));
const $c2 = /* @__PURE__ */_._const("c", $c2__script);
const $foo_bar = /* @__PURE__ */_._const("foo_bar", $scope => $c2($scope, {
  foo: $scope.foo_bar,
  baz: $c($scope)
}));
export function $setup($scope) {
  $foo($scope, undefined);
}
function $a($scope) {
  return () => $scope.foo?.bar;
}
function $b($scope) {
  return () => $scope.foo?.bar.baz;
}
function $c($scope) {
  return () => $scope.foo_bar?.baz;
}
_._resume("__tests__/template.marko_0/a", $a);
_._resume("__tests__/template.marko_0/b", $b);
_._resume("__tests__/template.marko_0/c", $c);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);