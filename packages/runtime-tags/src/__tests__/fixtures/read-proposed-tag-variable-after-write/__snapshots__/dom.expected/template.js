export const $template = "<div><button> </button><div></div><div></div></div>";
export const $walks = /* next(1), get, next(1), get, out(1), get, over(1), get, out(1) */"D D l b l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _$.on($scope["#button/0"], "click", function () {
  $scope["#div/2"].innerHTML = ($clickCount($scope, ++clickCount), clickCount - 1);
  $scope["#div/3"].innerHTML = clickCount;
}));
const $clickCount = /* @__PURE__ */_$.state("clickCount/4", ($scope, clickCount) => {
  _$.data($scope["#text/1"], clickCount);
  $clickCount_effect($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);