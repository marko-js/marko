export const $template = "<button>+</button><span><!> was <!></span>";
export const $walks = /* get, over(1), next(1), replace, over(2), replace, out(1) */" bD%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $clickCount_effect = _$.effect("__tests__/template.marko_0_clickCount", ($scope, {
  clickCount
}) => _$.on($scope["#button/0"], "click", function () {
  $lastClickCount($scope, clickCount);
  $clickCount($scope, clickCount + 1), clickCount;
}));
const $clickCount = /* @__PURE__ */_$.state("clickCount/3", ($scope, clickCount) => {
  _$.data($scope["#text/1"], clickCount);
  $clickCount_effect($scope);
});
const $lastClickCount = /* @__PURE__ */_$.state("lastClickCount/4", ($scope, lastClickCount) => _$.data($scope["#text/2"], lastClickCount));
export function $setup($scope) {
  $clickCount($scope, 0);
  $lastClickCount($scope, undefined);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);