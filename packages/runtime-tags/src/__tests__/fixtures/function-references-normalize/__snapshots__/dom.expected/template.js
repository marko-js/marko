export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $baz2__script = _._script("__tests__/template.marko_0_baz", $scope => (_._el_read($scope["#div/0"]).textContent = $scope.baz.bar()));
const $baz2 = /* @__PURE__ */_._const("baz", $baz2__script);
const $foo = /* @__PURE__ */_._let("foo/1", $scope => $baz2($scope, {
  foo: $scope.foo,
  bar: $baz($scope)
}));
export function $setup($scope) {
  $foo($scope, {
    bar: "bar"
  });
}
function $baz($scope) {
  return () => $scope.foo?.bar;
}
_._resume("__tests__/template.marko_0/baz", $baz);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);