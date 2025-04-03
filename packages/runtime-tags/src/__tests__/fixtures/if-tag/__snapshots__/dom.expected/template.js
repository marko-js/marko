export const $template = "<!><!><!><div></div>";
export const $walks = /* replace, over(1), replace, over(1), get, over(1) */"D%b%b b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $else_content = /* @__PURE__ */_$.createRenderer("C");
const $elseif_content = /* @__PURE__ */_$.createRenderer("B");
const $if_content3 = /* @__PURE__ */_$.createRenderer("A");
const $if_content2 = /* @__PURE__ */_$.createRenderer("World");
const $if_content = /* @__PURE__ */_$.createRenderer("Hello");
const $expr_input_x_input_y = /* @__PURE__ */_$.intersection(10, $scope => {
  const {
    input_x,
    input_y
  } = $scope;
  $if3($scope, input_x ? 0 : input_y ? 1 : 2);
});
const $expr_input_a_input_b = /* @__PURE__ */_$.intersection(7, $scope => {
  const {
    input_a,
    input_b
  } = $scope;
  $if($scope, input_a + input_b ? 0 : 1);
  $if2($scope, (input_a, input_b) ? 0 : 1);
});
const $if3 = /* @__PURE__ */_$.conditional("#div/2", $if_content3, $elseif_content, $else_content);
const $if2 = /* @__PURE__ */_$.conditional("#text/1", $if_content2);
const $if = /* @__PURE__ */_$.conditional("#text/0", $if_content);
export const $input_y = /* @__PURE__ */_$.value("input_y", $expr_input_x_input_y);
export const $input_x = /* @__PURE__ */_$.value("input_x", $expr_input_x_input_y);
export const $input_b = /* @__PURE__ */_$.value("input_b", $expr_input_a_input_b);
export const $input_a = /* @__PURE__ */_$.value("input_a", $expr_input_a_input_b);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_a($scope, input.a);
  $input_b($scope, input.b);
  $input_x($scope, input.x);
  $input_y($scope, input.y);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);