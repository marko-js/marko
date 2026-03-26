export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input__OR__input_valueChange__script = _._script("__tests__/tags/child.marko_0_input_$valueChange", $scope => {
  $scope.input;
  if (_._call($scope.$valueChange, 2) !== 2) {
    // Assignments always return their value.
    throw new Error(`Expected value to be 2`);
  }
});
const $input__OR__input_valueChange = /* @__PURE__ */_._or(3, $input__OR__input_valueChange__script);
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_valueChange($scope, $scope.input.valueChange);
  $input__OR__input_valueChange($scope);
});
const $input_valueChange = /* @__PURE__ */_._const("$valueChange", $input__OR__input_valueChange);
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);