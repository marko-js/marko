export const $template = "<div><button> </button></div>";
export const $walks = /* next(1), get, next(1), get, out(2) */"D D m";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $unused_ = $scope => {};
const $unused_2 = $scope => {};
const $clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _$.on($scope["#button/0"], "click", function () {
  $clickCount($scope, ++clickCount)
}));
const $clickCount = /* @__PURE__ */_$.state("clickCount/2", ($scope, clickCount) => {
  _$.data($scope["#text/1"], clickCount);
  $clickCount_effect($scope);
});
export function $setup($scope) {
  $unused_($scope, 123);
  $unused_2($scope, 456);
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);