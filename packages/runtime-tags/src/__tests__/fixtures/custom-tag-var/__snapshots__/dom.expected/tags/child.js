export const $template = "<button class=inc> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__script = _._script("__tests__/tags/child.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/0"], "click", function () {
  $x($scope, ++x)
}));
const $x = /* @__PURE__ */_._let("x/2", ($scope, x) => {
  _._text($scope["#text/1"], x);
  _._return($scope, x);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup);