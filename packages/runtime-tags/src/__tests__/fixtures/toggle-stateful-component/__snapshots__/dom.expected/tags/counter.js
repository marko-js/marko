export const $template = "<button> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_onCount__OR__clickCount__script = _._script("__tests__/tags/counter.marko_0_input_onCount_clickCount", $scope => _._on($scope["#button/0"], "click", function () {
  $scope.input_onCount($clickCount($scope, $scope.clickCount + 1));
}));
const $input_onCount__OR__clickCount = /* @__PURE__ */_._or(6, $input_onCount__OR__clickCount__script);
const $clickCount = /* @__PURE__ */_._let("clickCount/5", $scope => {
  _._text($scope["#text/1"], ((() => {
    if ($scope.clickCount > 0) throw new Error("This should not have executed since the parent removes this component when the count is greater than 0");
  })(), $scope.clickCount));
  $input_onCount__OR__clickCount($scope);
});
export function $setup($scope) {
  $clickCount($scope, 0);
}
export const $input_onCount = /* @__PURE__ */_._const("input_onCount", $input_onCount__OR__clickCount);
export const $input = /* @__PURE__ */_._const("input", $scope => $input_onCount($scope, $scope.input.onCount));
export default /* @__PURE__ */_._template("__tests__/tags/counter.marko", $template, $walks, $setup, $input);