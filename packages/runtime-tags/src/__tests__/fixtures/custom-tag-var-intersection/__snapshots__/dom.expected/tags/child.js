export const $template = "<button class=inc> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_input_extra_x = /* @__PURE__ */_$.intersection(6, $scope => {
  const {
    input_extra,
    x
  } = $scope;
  _$.tagVarSignal($scope, x + input_extra);
});
const $x_effect = _$.effect("__tests__/tags/child.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/0"], "click", function () {
  $x($scope, x + 1), x;
}));
const $x = /* @__PURE__ */_$.state("x/5", ($scope, x) => {
  _$.data($scope["#text/1"], x);
  $expr_input_extra_x($scope);
  $x_effect($scope);
});
export function $setup($scope) {
  $x($scope, 0);
}
export const $input_extra = /* @__PURE__ */_$.value("input_extra", $expr_input_extra_x);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_extra($scope, input.extra));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);