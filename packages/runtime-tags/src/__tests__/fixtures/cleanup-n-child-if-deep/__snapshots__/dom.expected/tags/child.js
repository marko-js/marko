export const $template = "<div><!> a</div><span><!> a</span><p><!> a</p>";
export const $walks = /* next(1), replace, out(1), next(1), replace, out(1), next(1), replace, out(1) */"D%lD%lD%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $name__OR__write__script = _._script("__tests__/tags/child.marko_0_name_write", $scope => {
  $scope.write(`${$scope.name} mounted`);
  _.$signal($scope, 0).onabort = () => {
    $scope.write(`${$scope.name} destroyed`);
  };
});
const $name__OR__write = /* @__PURE__ */_._or(7, $scope => {
  _.$signalReset($scope, 0);
  $name__OR__write__script($scope);
});
export const $name = /* @__PURE__ */_._const("name", $scope => {
  _._text($scope["#text/0"], $scope.name);
  _._text($scope["#text/1"], $scope.name);
  _._text($scope["#text/2"], $scope.name);
  $name__OR__write($scope);
});
export const $write = /* @__PURE__ */_._const("write", $name__OR__write);
export const $input = ($scope, input) => {
  $name($scope, input.name);
  $write($scope, input.write);
};
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);