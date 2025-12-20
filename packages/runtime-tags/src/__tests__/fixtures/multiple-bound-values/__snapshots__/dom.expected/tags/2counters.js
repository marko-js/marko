export const $template = "<button> </button><button> </button>";
export const $walks = /* get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $count__script = _._script("__tests__/tags/2counters.marko_0_count1", $scope => _._on($scope["#button/0"], "click", function () {
  $count($scope, $scope.count1 + 1);
}));
const $count = /* @__PURE__ */_._let("count1/12", $scope => {
  _._text($scope["#text/1"], $scope.count1);
  $count__script($scope);
});
const $input_count1__OR__input_count1Change = /* @__PURE__ */_._or(8, $scope => $count($scope, $scope.input_count1, $scope.input_count1Change));
export const $input_count = /* @__PURE__ */_._const("input_count1", $input_count1__OR__input_count1Change);
export const $input_count1Change = /* @__PURE__ */_._const("input_count1Change", $input_count1__OR__input_count1Change);
const $count2__script = _._script("__tests__/tags/2counters.marko_0_count2", $scope => _._on($scope["#button/2"], "click", function () {
  $count2($scope, $scope.count2 + 1);
}));
const $count2 = /* @__PURE__ */_._let("count2/13", $scope => {
  _._text($scope["#text/3"], $scope.count2);
  $count2__script($scope);
});
const $input_count2__OR__input_count2Change = /* @__PURE__ */_._or(11, $scope => $count2($scope, $scope.input_count2, $scope.input_count2Change));
export const $input_count2 = /* @__PURE__ */_._const("input_count2", $input_count2__OR__input_count2Change);
export const $input_count2Change = /* @__PURE__ */_._const("input_count2Change", $input_count2__OR__input_count2Change);
export const $input = ($scope, input) => {
  $input_count($scope, input.count1);
  $input_count1Change($scope, input.count1Change);
  $input_count2($scope, input.count2);
  $input_count2Change($scope, input.count2Change);
};
export default /* @__PURE__ */_._template("__tests__/tags/2counters.marko", $template, $walks, $setup, $input);