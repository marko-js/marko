export const $template = "<div></div><div></div><button>Click</button>";
export const $walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $foo = /* @__PURE__ */_._let("foo/3", $scope => {
  _._attr_class($scope["#div/0"], ($scope.foo, $scope.foo.class));
  _._attr_class($scope["#div/1"], ($scope.foo, $scope.foo.class));
});
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/2"], "click", function () {
  $foo($scope, {
    class: "baz"
  });
}));
export function $setup($scope) {
  $foo($scope, {});
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);