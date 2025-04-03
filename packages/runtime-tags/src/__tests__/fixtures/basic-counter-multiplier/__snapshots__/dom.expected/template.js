export const $template = "<button id=multiplier>increase multiplier (<!>)</button><button id=count>increase count</button><div> </div>";
export const $walks = /* get, next(1), over(1), replace, out(1), get, over(1), next(1), get, out(1) */" Db%l bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_count_multiplier = /* @__PURE__ */_$.intersection(6, $scope => {
  const {
    count,
    multiplier
  } = $scope;
  $multipliedCount($scope, count * multiplier);
});
const $multipliedCount = /* @__PURE__ */_$.value("multipliedCount", ($scope, multipliedCount) => _$.data($scope["#text/3"], multipliedCount));
const $multiplier_effect = _$.effect("__tests__/template.marko_0_multiplier", ($scope, {
  multiplier
}) => _$.on($scope["#button/0"], "click", function () {
  $multiplier($scope, multiplier + 1), multiplier;
}));
const $multiplier = /* @__PURE__ */_$.state("multiplier/5", ($scope, multiplier) => {
  _$.data($scope["#text/1"], multiplier);
  $expr_count_multiplier($scope);
  $multiplier_effect($scope);
});
const $count_effect = _$.effect("__tests__/template.marko_0_count", ($scope, {
  count
}) => _$.on($scope["#button/2"], "click", function () {
  $count($scope, count + 1), count;
}));
const $count = /* @__PURE__ */_$.state("count/4", $scope => {
  $expr_count_multiplier($scope);
  $count_effect($scope);
});
export function $setup($scope) {
  $count($scope, 0);
  $multiplier($scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);