export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $a__OR__b__script = _._script("__tests__/template.marko_0_a_b", ($scope, {
  a,
  b
}) => _._on($scope["#button/0"], "click", function () {
  $a($scope, ++a)
  $b($scope, ++b)
}));
const $a__OR__b = /* @__PURE__ */_._or(4, $scope => {
  let {
    a,
    b
  } = $scope;
  _._text($scope["#text/1"], a + b);
  $a__OR__b__script($scope);
});
const $a = /* @__PURE__ */_._let("a/2", $a__OR__b);
const $b = /* @__PURE__ */_._let("b/3", $a__OR__b);
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);