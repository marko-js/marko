export const $template = "<button id=tags> </button>";
export const $walks = /* get, next(1), get, out(1) */" D l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/components/tags-counter.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/5", $scope => {
  _._text($scope["#text/1"], $scope.count);
  $count__script($scope);
});
export function $setup($scope) {
  $count($scope, 0);
}
export const $input_count = /* @__PURE__ */_._const("input_count", $scope => _._attr($scope["#button/0"], "data-parent", $scope.input_count));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_count($scope, $scope.input.count));
export default /* @__PURE__ */_._template("__tests__/components/tags-counter.marko", $template, $walks, $setup, $input);