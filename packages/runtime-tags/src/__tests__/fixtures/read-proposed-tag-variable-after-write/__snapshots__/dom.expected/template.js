export const $template = "<div><button> </button><div></div><div></div></div>";
export const $walks = /* next(1), get, next(1), get, out(1), get, over(1), get, out(1) */"D D l b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $clickCount__script = _._script("__tests__/template.marko_0_clickCount", $scope => _._on($scope["#button/0"], "click", function () {
  _._el_read($scope["#div/2"]).innerHTML = $clickCount($scope, $scope.clickCount + 1) - 1;
  _._el_read($scope["#div/3"]).innerHTML = $scope.clickCount;
}));
const $clickCount = /* @__PURE__ */_._let("clickCount/4", $scope => {
  _._text($scope["#text/1"], $scope.clickCount);
  $clickCount__script($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);