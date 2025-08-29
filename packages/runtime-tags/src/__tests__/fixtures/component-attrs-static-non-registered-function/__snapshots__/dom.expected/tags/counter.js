export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_input_count = /* @__PURE__ */_$.intersection(5, $scope => {
  const {
    input,
    count
  } = $scope;
  _$.data($scope["#text/1"], input.format(count));
});
const $count_effect = _$.effect("__tests__/tags/counter.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, ++count)
}));
const $count = /* @__PURE__ */_$.state("count/4", $scope => {
  $expr_input_count($scope);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export const $input = /* @__PURE__ */_$.value("input", $expr_input_count);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", $template, $walks, $setup, $input);