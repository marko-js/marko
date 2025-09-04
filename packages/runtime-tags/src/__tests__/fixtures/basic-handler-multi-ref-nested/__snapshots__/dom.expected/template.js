export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $a__OR__b__script = _._script("__tests__/template.marko_0_a_b", ($scope, {
  a,
  b
}) => _._on($scope["#button/0"], "click", function () {
  $a($scope, a = a.map(a => b));
}));
const $a__OR__b = /* @__PURE__ */_._or(4, $a__OR__b__script);
const $a = /* @__PURE__ */_._let("a/2", ($scope, a) => {
  _._text($scope["#text/1"], a.join(""));
  $a__OR__b($scope);
});
const $b = /* @__PURE__ */_._let("b/3", $a__OR__b);
export function $setup($scope) {
  $a($scope, [0]);
  $b($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);