export const $template = "<button><!>|<!></button><button><!>|<!></button>";
export const $walks = /* get, next(1), replace, over(2), replace, out(1), get, next(1), replace, over(2), replace, out(1) */" D%c%l D%c%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $state__script = _._script("__tests__/tags/child.marko_0_state", $scope => _._on($scope["#button/0"], "click", function () {
  $state($scope, $scope.state + 1);
}));
const $state = /* @__PURE__ */_._let("state/11", $scope => {
  _._text($scope["#text/2"], $scope.state);
  $state__script($scope);
});
const $input_value__OR__input_valueChange = /* @__PURE__ */_._or(10, $scope => $state($scope, $scope.input_value, $scope.input_valueChange));
const $input_value = /* @__PURE__ */_._const("input_value", $scope => {
  _._text($scope["#text/1"], $scope.input_value);
  _._text($scope["#text/4"], $scope.input_value);
  $input_value__OR__input_valueChange($scope);
});
const $input_valueChange = /* @__PURE__ */_._const("input_valueChange", $input_value__OR__input_valueChange);
const $otherState__script = _._script("__tests__/tags/child.marko_0_otherState", $scope => _._on($scope["#button/3"], "click", function () {
  $otherState($scope, $scope.otherState + 1);
}));
const $otherState = /* @__PURE__ */_._let("otherState/12", $scope => {
  _._text($scope["#text/5"], $scope.otherState);
  $otherState__script($scope);
});
export const $input = ($scope, input) => {
  $input_value($scope, input.value);
  $input_valueChange($scope, input.valueChange);
  $otherState($scope, input["value"], input["value" + "Change"]);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);