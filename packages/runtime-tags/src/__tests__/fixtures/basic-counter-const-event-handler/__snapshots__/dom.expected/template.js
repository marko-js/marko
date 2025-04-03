export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $increment2_effect = _$.effect("__tests__/template.marko_0_increment", ($scope, {
  increment
}) => _$.on($scope["#button/0"], "click", increment));
const $increment2 = /* @__PURE__ */_$.value("increment", $increment2_effect);
const $clickCount = /* @__PURE__ */_$.state("clickCount/2", ($scope, clickCount) => {
  _$.data($scope["#text/1"], clickCount);
  $increment2($scope, $increment($scope));
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
function $increment($scope, {
  clickCount
} = $scope) {
  return function () {
    $clickCount($scope, clickCount + 1), clickCount;
  };
}
_$.register("__tests__/template.marko_0/increment", $increment);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);