export const $template = "<button>before</button>";
export const $walks = /* get, over(1) */" b";
const updateText = $updateText;
import * as _ from "@marko/runtime-tags/debug/dom";
const $pattern2 = /* @__PURE__ */_._const("$pattern", $scope => $onClick2($scope, $scope.$pattern.onClick));
const $onClick3__script = _._script("__tests__/template.marko_0_onClick", $scope => _._on($scope["#button/0"], "click", $scope.onClick));
const $onClick3 = /* @__PURE__ */_._const("onClick", $onClick3__script);
const $onClick2 = /* @__PURE__ */_._const("$onClick", $scope => $onClick3($scope, void 0 !== $scope.$onClick ? $scope.$onClick : updateText));
export function $setup($scope) {
  $pattern2($scope, {});
}
function $updateText(ev) {
  ev.target.textContent = "after";
}
_._resume("__tests__/template.marko_0/updateText", $updateText);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);