export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $clickCount_effect = _$.effect("__tests__/tags/counter.marko_0_clickCount", ($scope, {
  clickCount
}) => _$.on($scope["#button/0"], "click", function () {
  $clickCount($scope, ++clickCount)
}));
const $clickCount = /* @__PURE__ */_$.state("clickCount/2", ($scope, clickCount) => {
  _$.data($scope["#text/1"], clickCount);
  $clickCount_effect($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/counter.marko", $template, $walks, $setup);