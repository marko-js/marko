export const $template = "<div></div><div></div><div></div>";
export const $walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_value__OR__a__script = _._script("__tests__/template.marko_0_input_value_a", $scope => _._attrs_script($scope, "#div/1"));
const $input_value__OR__a = /* @__PURE__ */_._or(7, $scope => {
  _._attrs_content($scope, "#div/1", {
    a: $scope.a,
    ...$scope.input_value
  });
  $input_value__OR__a__script($scope);
});
const $a = /* @__PURE__ */_._let("a/6", $scope => {
  _._attr($scope["#div/2"], "a", $scope.a);
  $input_value__OR__a($scope);
});
export function $setup($scope) {
  $a($scope, 0);
}
const $input_value__script = _._script("__tests__/template.marko_0_input_value", $scope => {
  _._attrs_script($scope, "#div/0");
  _._attrs_script($scope, "#div/2");
});
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => {
  _._attrs_content($scope, "#div/0", $scope.input_value);
  _._attrs_partial_content($scope, "#div/2", $scope.input_value, {
    a: 1
  });
  $input_value__OR__a($scope);
  $input_value__script($scope);
});
export const $input = /* @__PURE__ */_._const("input", $scope => $input_value($scope, $scope.input.value));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);