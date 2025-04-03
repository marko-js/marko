export const $template = "<div></div><div></div><div></div>";
export const $walks = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_input_value_a_effect = _$.effect("__tests__/template.marko_0_input_value_a", $scope => _$.attrsEvents($scope, "#div/1"));
const $expr_input_value_a = /* @__PURE__ */_$.intersection(7, $scope => {
  const {
    input_value,
    a
  } = $scope;
  _$.attrs($scope, "#div/1", {
    a: a,
    ...input_value
  });
  $expr_input_value_a_effect($scope);
});
const $a = /* @__PURE__ */_$.state("a/6", ($scope, a) => {
  _$.attr($scope["#div/2"], "a", a);
  $expr_input_value_a($scope);
});
const $input_value_effect = _$.effect("__tests__/template.marko_0_input_value", $scope => {
  _$.attrsEvents($scope, "#div/0");
  _$.attrsEvents($scope, "#div/2");
});
export const $input_value = /* @__PURE__ */_$.value("input_value", ($scope, input_value) => {
  _$.attrs($scope, "#div/0", input_value);
  _$.partialAttrs($scope, "#div/2", input_value, {
    a: 1
  });
  $expr_input_value_a($scope);
  $input_value_effect($scope);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
export function $setup($scope) {
  $a($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);