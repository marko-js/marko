export const $template = "";
export const $walks = "";
export const $setup = () => {};
const subsByKey = {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $value = /* @__PURE__ */_._let("value/3", $scope => _._return($scope, $scope.value));
const $input_value__script = _._script("__tests__/tags/let-global.marko_0_input_value", $scope => {
  {
    const subs = subsByKey[$scope.input_value] ??= new Set();
    const sub = () => $value($scope, $scope.$global[$scope.input_value]);
    _.$signal($scope, 0).onabort = () => subs.delete(sub);
    subs.add(sub);
  }
});
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => {
  _.$signalReset($scope, 0);
  _._return_change($scope, $valueChange($scope));
  $value($scope, $scope.$global[$scope.input_value]);
  $input_value__script($scope);
});
export const $input = ($scope, input) => $input_value($scope, input.value);
function $valueChange($scope) {
  return function (next) {
    $scope.$global[$scope.input_value] = next;
    subsByKey[$scope.input_value]?.forEach(cb => cb());
  };
}
_._resume("__tests__/tags/let-global.marko_0/valueChange", $valueChange);
export default /* @__PURE__ */_._template("__tests__/tags/let-global.marko", $template, $walks, $setup, $input);