export const $template = "<input><button> </button>";
export const $walks = /* get, over(1), get, next(1), get, out(1) */" b D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $disabled__script = _._script("__tests__/template.marko_0_disabled", $scope => _._on($scope["#button/1"], "click", function () {
  $disabled($scope, !$scope.disabled);
}));
const $disabled = /* @__PURE__ */_._let("disabled/3", $scope => {
  _._attr($scope["#input/0"], "disabled", $scope.disabled);
  _._text($scope["#text/2"], $scope.disabled ? "enable" : "disable");
  $disabled__script($scope);
});
export function $setup($scope) {
  $disabled($scope, true);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);