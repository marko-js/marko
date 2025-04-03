export const $template = "<div><!> <!></div>";
export const $walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $b = /* @__PURE__ */_$.state("b/6", ($scope, b) => _$.data($scope["#text/1"], b));
const $a = /* @__PURE__ */_$.state("a/5", ($scope, a) => _$.data($scope["#text/0"], a));
const $input_value_effect = _$.effect("__tests__/template.marko_0_input_value", ($scope, {
  input_value
}) => {
  {
    const previousValue = $a($scope, input_value + 1);
    _$.getAbortSignal($scope, 0).onabort = () => $b($scope, previousValue);
  }
});
export const $input_value = /* @__PURE__ */_$.value("input_value", $scope => {
  _$.resetAbortSignal($scope, 0);
  $input_value_effect($scope);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => $input_value($scope, input.value));
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);