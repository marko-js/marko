export const $template = "<button> </button><button> </button>";
export const $walks = /* get, next(1), get, out(1), get, next(1), get, out(1) */" D l D l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count_effect = _$.effect("__tests__/tags/2counters.marko_0_count1", ($scope, {
  count1
}) => _$.on($scope["#button/0"], "click", function () {
  $count($scope, ++count1)
}));
const $count = /* @__PURE__ */_$.state("count1/12", ($scope, count1) => {
  _$.data($scope["#text/1"], count1);
  $count_effect($scope);
});
const $expr_input_count1_input_count1Change = /* @__PURE__ */_$.intersection(8, $scope => {
  const {
    input_count1,
    input_count1Change
  } = $scope;
  $count($scope, input_count1, input_count1Change);
});
export const $input_count = /* @__PURE__ */_$.value("input_count1", $expr_input_count1_input_count1Change);
export const $input_count1Change = /* @__PURE__ */_$.value("input_count1Change", $expr_input_count1_input_count1Change);
const $count2_effect = _$.effect("__tests__/tags/2counters.marko_0_count2", ($scope, {
  count2
}) => _$.on($scope["#button/2"], "click", function () {
  $count2($scope, ++count2)
}));
const $count2 = /* @__PURE__ */_$.state("count2/13", ($scope, count2) => {
  _$.data($scope["#text/3"], count2);
  $count2_effect($scope);
});
const $expr_input_count2_input_count2Change = /* @__PURE__ */_$.intersection(11, $scope => {
  const {
    input_count2,
    input_count2Change
  } = $scope;
  $count2($scope, input_count2, input_count2Change);
});
export const $input_count2 = /* @__PURE__ */_$.value("input_count2", $expr_input_count2_input_count2Change);
export const $input_count2Change = /* @__PURE__ */_$.value("input_count2Change", $expr_input_count2_input_count2Change);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_count($scope, input.count1);
  $input_count1Change($scope, input.count1Change);
  $input_count2($scope, input.count2);
  $input_count2Change($scope, input.count2Change);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/2counters.marko", $template, $walks, $setup, $input);