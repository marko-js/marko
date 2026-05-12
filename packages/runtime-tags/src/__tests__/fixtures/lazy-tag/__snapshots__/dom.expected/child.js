export const $template = "<button><!>: <!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1) */" D%c%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/child.marko_0_count", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */_._let("count/7", $scope => {
  _._text($scope["#text/2"], $scope.count);
  $count__script($scope);
});
export const $input_value = ($scope, input_value) => $count($scope, input_value);
export const $input_label = ($scope, input_label) => _._text($scope["#text/1"], input_label);
export const $input = ($scope, input) => {
  $input_value($scope, input.value);
  $input_label($scope, input.label);
};
export default /* @__PURE__ */_._template("__tests__/child.marko", $template, $walks, $setup, $input);