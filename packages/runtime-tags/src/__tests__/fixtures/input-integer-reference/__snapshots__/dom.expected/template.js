export const $template = "<!> <!>";
export const $walks = /* replace, over(2), replace, over(1) */"%c%b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => {
  _._text($scope["#text/0"], $scope.input_value);
  $input_value_($scope, $scope.input_value?.[0]);
});
const $input_value_ = /* @__PURE__ */_._const("input_value_0", $scope => _._text($scope["#text/1"], $scope.input_value_0));
export const $input = /* @__PURE__ */_._const("input", $scope => $input_value($scope, $scope.input.value));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);