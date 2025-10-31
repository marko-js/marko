export const $template = "<button><!></button>";
export const $walks = /* get, next(1), replace, out(1) */" D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $x__script = _._script("__tests__/tags/counter.marko_0_x", $scope => _._on($scope["#button/0"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/9", $scope => {
  _._attr($scope["#button/0"], "data-internal", $scope.x);
  $x__script($scope);
});
const $countChange__OR__count = /* @__PURE__ */_._or(8, $scope => $x($scope, $scope.count, $scope.$countChange));
export const $countChange2 = /* @__PURE__ */_._const("$countChange", $countChange__OR__count);
export const $count = /* @__PURE__ */_._const("count", $countChange__OR__count);
export const $input_id = /* @__PURE__ */_._const("input_id", $scope => _._attr($scope["#button/0"], "id", $scope.input_id));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_content = /* @__PURE__ */_._const("input_content", $scope => $dynamicTag($scope, $scope.input_content));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_id($scope, $scope.input.id);
  $input_content($scope, $scope.input.content);
  $countChange2($scope, $scope.input.countChange);
  $count($scope, $scope.input.count);
});
export default /* @__PURE__ */_._template("__tests__/tags/counter.marko", $template, $walks, $setup, $input);