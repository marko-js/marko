export const $template = "<!><!><!><div></div>";
export const $walks = /* over(1), replace, over(1), replace, over(1), get, over(1) */"b%b%b b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $else_content = /* @__PURE__ */_._content_branch("C", /* over(1) */"b");
const $elseif_content = /* @__PURE__ */_._content_branch("B", /* over(1) */"b");
const $if_content3 = /* @__PURE__ */_._content_branch("A", /* over(1) */"b");
const $if_content2 = /* @__PURE__ */_._content_branch("World", /* over(1) */"b");
const $if_content = /* @__PURE__ */_._content_branch("Hello", /* over(1) */"b");
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
const $if2 = /* @__PURE__ */_._if("#text/1", $if_content2);
const $input_a__OR__input_b = /* @__PURE__ */_._or(7, $scope => {
  $if($scope, $scope.input_a + $scope.input_b ? 0 : 1);
  $if2($scope, ($scope.input_a, $scope.input_b) ? 0 : 1);
});
export const $input_a = /* @__PURE__ */_._const("input_a", $input_a__OR__input_b);
export const $input_b = /* @__PURE__ */_._const("input_b", $input_a__OR__input_b);
const $if3 = /* @__PURE__ */_._if("#div/2", $if_content3, $elseif_content, $else_content);
const $input_x__OR__input_y = /* @__PURE__ */_._or(10, $scope => $if3($scope, $scope.input_x ? 0 : $scope.input_y ? 1 : 2));
export const $input_x = /* @__PURE__ */_._const("input_x", $input_x__OR__input_y);
export const $input_y = /* @__PURE__ */_._const("input_y", $input_x__OR__input_y);
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_a($scope, $scope.input.a);
  $input_b($scope, $scope.input.b);
  $input_x($scope, $scope.input.x);
  $input_y($scope, $scope.input.y);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);