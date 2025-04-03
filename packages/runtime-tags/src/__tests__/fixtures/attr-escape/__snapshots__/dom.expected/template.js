export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_input_foo_input_bar = /* @__PURE__ */_$.intersection(5, $scope => {
  const {
    input_foo,
    input_bar
  } = $scope;
  _$.attr($scope["#div/0"], "nested", `a ${input_foo + ` nested ${input_bar}`} b`);
});
export const $input_bar = /* @__PURE__ */_$.value("input_bar", ($scope, input_bar) => {
  _$.attr($scope["#div/0"], "bar", `a ${input_bar} b`);
  $expr_input_foo_input_bar($scope);
});
export const $input_foo = /* @__PURE__ */_$.value("input_foo", ($scope, input_foo) => {
  _$.classAttr($scope["#div/0"], input_foo);
  _$.attr($scope["#div/0"], "foo", 'a' + input_foo + 'b');
  $expr_input_foo_input_bar($scope);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_foo($scope, input.foo);
  $input_bar($scope, input.bar);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);