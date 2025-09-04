export const $template = "<div><!> <!></div>";
export const $walks = /* next(1), replace, over(2), replace, out(1) */"D%c%l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $a = /* @__PURE__ */_._let("a/5", ($scope, a) => _._text($scope["#text/0"], a));
const $b = /* @__PURE__ */_._let("b/6", ($scope, b) => _._text($scope["#text/1"], b));
export function $setup($scope) {
  $a($scope, 0);
  $b($scope, 0);
}
const $input_value__script = _._script("__tests__/template.marko_0_input_value", ($scope, {
  input_value
}) => {
  {
    const previousValue = $a($scope, input_value + 1);
    _.$signal($scope, 0).onabort = () => $b($scope, previousValue);
  }
});
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => {
  _.$signalReset($scope, 0);
  $input_value__script($scope);
});
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_value($scope, input.value));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);