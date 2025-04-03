export const $template = "<div></div><div></div><button>Click</button>";
export const $walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $foo = /* @__PURE__ */_$.state("foo/3", ($scope, foo) => {
  _$.classAttr($scope["#div/0"], (foo, foo.class));
  _$.classAttr($scope["#div/1"], (foo, foo.class));
});
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/2"], "click", function () {
  $foo($scope, {
    class: "baz"
  });
}));
export function $setup($scope) {
  $foo($scope, {});
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);