export const $template = "<button><!></button>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x_effect = _$.effect("__tests__/tags/counter.marko_0_x", ($scope, {
  x
}) => _$.on($scope["#button/0"], "click", function () {
  $x($scope, ++x)
}));
const $x = /* @__PURE__ */_$.state("x/9", ($scope, x) => {
  _$.attr($scope["#button/0"], "data-internal", x);
  $x_effect($scope);
});
const $expr_$countChange_count = /* @__PURE__ */_$.intersection(8, $scope => {
  let {
    $countChange,
    count
  } = $scope;
  $x($scope, count, $countChange);
});
export const $countChange2 = /* @__PURE__ */_$.value("$countChange", $expr_$countChange_count);
export const $count = /* @__PURE__ */_$.value("count", $expr_$countChange_count);
export const $input_id = /* @__PURE__ */_$.value("input_id", ($scope, input_id) => _$.attr($scope["#button/0"], "id", input_id));
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const $input_content = /* @__PURE__ */_$.value("input_content", $dynamicTag);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_id($scope, input.id);
  $input_content($scope, input.content);
  $countChange2($scope, input.countChange);
  $count($scope, input.count);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", $template, $walks, $setup, $input);