export const $template = "<button class=toggle>Toggle</button><button class=inc>Inc</button><!><!>";
export const $walks = /* get, over(1), get, over(1), replace, over(2) */" b b%c";
const Child = _._lazy_renderer("__tests__/child.marko", () => import("./child.marko"));
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/2");
const $show__OR__value = /* @__PURE__ */_._or(5, $scope => $dynamicTag($scope, $scope.show ? Child : null, () => ({
  label: "x",
  value: $scope.value
})));
const $show__script = _._script("__tests__/template.marko_0_show", $scope => _._on($scope["#button/0"], "click", function () {
  $show($scope, !$scope.show);
}));
const $show = /* @__PURE__ */_._let("show/3", $scope => {
  $show__OR__value($scope);
  $show__script($scope);
});
const $value__script = _._script("__tests__/template.marko_0_value", $scope => _._on($scope["#button/1"], "click", function () {
  $value($scope, $scope.value + 1);
}));
const $value = /* @__PURE__ */_._let("value/4", $scope => {
  $show__OR__value($scope);
  $value__script($scope);
});
export function $setup($scope) {
  $show($scope, true);
  $value($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);