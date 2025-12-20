export const $template = "";
export const $walks = "";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $list = /* @__PURE__ */_._let("list/3", $scope => _._return($scope, {
  list: $scope.list,
  listChange: $_return($scope),
  clear: $_return2($scope)
}));
export const $input_value = ($scope, input_value) => $list($scope, input_value);
export const $input = ($scope, input) => $input_value($scope, input.value);
function $_return2($scope) {
  return function () {
    $list($scope, []);
  };
}
function $_return($scope) {
  return function (v) {
    $list($scope, v);
  };
}
_._resume("__tests__/tags/store.marko_0/_return2", $_return2);
_._resume("__tests__/tags/store.marko_0/_return", $_return);
export default /* @__PURE__ */_._template("__tests__/tags/store.marko", $template, $walks, $setup, $input);