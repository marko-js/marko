export const $template = "<button><!>|<!></button><button><!>|<!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1), get, next(1), replace, over(2), replace, out(1) */" D%c%l D%c%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $state_effect = _$.effect("__tests__/tags/child.marko_0_state", ($scope, {
  state
}) => _$.on($scope["#button/0"], "click", function () {
  $state($scope, ++state)
}));
const $state = /* @__PURE__ */_$.state("state/11", ($scope, state) => {
  _$.data($scope["#text/2"], state);
  $state_effect($scope);
});
const $expr_input_value_input_valueChange = /* @__PURE__ */_$.intersection(10, $scope => {
  const {
    input_value,
    input_valueChange
  } = $scope;
  $state($scope, input_value, input_valueChange);
});
const $input_value = /* @__PURE__ */_$.value("input_value", ($scope, input_value) => {
  _$.data($scope["#text/1"], input_value);
  _$.data($scope["#text/4"], input_value);
  $expr_input_value_input_valueChange($scope);
});
const $input_valueChange = /* @__PURE__ */_$.value("input_valueChange", $expr_input_value_input_valueChange);
const $otherState_effect = _$.effect("__tests__/tags/child.marko_0_otherState", ($scope, {
  otherState
}) => _$.on($scope["#button/3"], "click", function () {
  $otherState($scope, ++otherState)
}));
const $otherState = /* @__PURE__ */_$.state("otherState/12", ($scope, otherState) => {
  _$.data($scope["#text/5"], otherState);
  $otherState_effect($scope);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_value($scope, input.value);
  $input_valueChange($scope, input.valueChange);
  $otherState($scope, input.value, input["value" + "Change"]);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);