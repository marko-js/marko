export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content2__hoist3_getter = _._hoist_resume("__tests__/template.marko_2_hoist3/hoist", "hoist3");
const $if_content2__setup = $scope => {
  $if_content2__input_value($scope);
  /* z */$if_content2__hoist3_getter($scope);
};
const $if_content2__hoist = /* @__PURE__ */_._const("hoist3", $scope => _._assert_hoist($scope.hoist3));
const $if_content2__input_value = /* @__PURE__ */_._closure_get("input_value", $scope => $if_content2__hoist($scope, $hoist2($scope)), $scope => $scope._._);
const $if_content__if = /* @__PURE__ */_._if("#text/0", 0, 0, $if_content2__setup);
const $if_content__setup = $scope => {
  $if_content__input_value._($scope);
  /* y */2;
  $if_content__if($scope, 1 ? 0 : 1);
};
const $if_content__input_value = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => /* hoist2 */() => $scope._.input_value);
const $hoist1_getter = _._hoist_resume("__tests__/template.marko_0_hoist1/hoist", "hoist1");
const $if = /* @__PURE__ */_._if("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
export function $setup($scope) {
  /* x */$hoist1_getter($scope);
  $if($scope, 1 ? 0 : 1);
}
const $hoist3 = /* @__PURE__ */_._const("hoist1", $scope => _._assert_hoist($scope.hoist1));
const $input_value__closure = /* @__PURE__ */_._closure($if_content2__input_value);
export const $input_value = /* @__PURE__ */_._const("input_value", $scope => {
  $hoist3($scope, $hoist($scope));
  $if_content__input_value($scope);
  $input_value__closure($scope);
});
export const $input = ($scope, input) => $input_value($scope, input.value);
function $hoist2($scope) {
  return () => $scope._._.input_value;
}
function $hoist($scope) {
  return () => $scope.input_value;
}
_._resume("__tests__/template.marko_2/hoist2", $hoist2);
_._resume("__tests__/template.marko_0/hoist", $hoist);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);