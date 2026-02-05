export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $input_foo__OR__input_bar = /* @__PURE__ */_._or(5, $scope => _._attr($scope["#div/0"], "nested", `a ${$scope.input_foo + ` nested ${$scope.input_bar}`} b`));
export const $input_foo = /* @__PURE__ */_._const("input_foo", $scope => {
  _._attr_class($scope["#div/0"], $scope.input_foo);
  _._attr($scope["#div/0"], "foo", ('a' + $scope.input_foo + 'b'));
  $input_foo__OR__input_bar($scope);
});
export const $input_bar = /* @__PURE__ */_._const("input_bar", $scope => {
  _._attr($scope["#div/0"], "bar", `a ${$scope.input_bar} b`);
  $input_foo__OR__input_bar($scope);
});
export const $input = ($scope, input) => {
  $input_foo($scope, input.foo);
  $input_bar($scope, input.bar);
};
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);