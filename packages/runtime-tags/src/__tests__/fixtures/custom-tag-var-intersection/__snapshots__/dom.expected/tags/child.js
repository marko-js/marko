export const $template = "<button class=inc> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_extra__OR__x = /* @__PURE__ */_._or(6, $scope => {
  let {
    input_extra,
    x
  } = $scope;
  _._return($scope, x + input_extra);
});
const $x__script = _._script("__tests__/tags/child.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/0"], "click", function () {
  $x($scope, ++x);
}));
const $x = /* @__PURE__ */_._let("x/5", ($scope, x) => {
  _._text($scope["#text/1"], x);
  $input_extra__OR__x($scope);
  $x__script($scope);
});
export function $setup($scope) {
  $x($scope, 0);
}
export const $input_extra = /* @__PURE__ */_._const("input_extra", $input_extra__OR__x);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_extra($scope, input.extra));
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);