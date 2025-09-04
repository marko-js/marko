export const $template = "<button><!></button>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__script = _._script("__tests__/tags/counter.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/0"], "click", function () {
  $x($scope, ++x)
}));
const $x = /* @__PURE__ */_._let("x/9", ($scope, x) => {
  _._attr($scope["#button/0"], "data-internal", x);
  $x__script($scope);
});
const $countChange__OR__count = /* @__PURE__ */_._or(8, $scope => {
  let {
    $countChange,
    count
  } = $scope;
  $x($scope, count, $countChange);
});
export const $countChange2 = /* @__PURE__ */_._const("$countChange", $countChange__OR__count);
export const $count = /* @__PURE__ */_._const("count", $countChange__OR__count);
export const $input_id = /* @__PURE__ */_._const("input_id", ($scope, input_id) => _._attr($scope["#button/0"], "id", input_id));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_content = /* @__PURE__ */_._const("input_content", $dynamicTag);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_id($scope, input.id);
  $input_content($scope, input.content);
  $countChange2($scope, input.countChange);
  $count($scope, input.count);
});
export default /* @__PURE__ */_._template("__tests__/tags/counter.marko", $template, $walks, $setup, $input);