export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $get$hoisted_hoist = _._resume("__tests__/template.marko_2_$hoisted_hoist2/hoist", _._hoist("hoist3"));
const $if_content2__$hoisted_hoist = /* @__PURE__ */_._const("$hoisted_hoist2", ($scope, $hoisted_hoist2) => /* z */$hoisted_hoist2);
const $if_content2__hoist = /* @__PURE__ */_._const("hoist3", ($scope, hoist3) => _._assert_hoist(hoist3));
const $if_content2__input_value = /* @__PURE__ */_._closure_get("input_value", ($scope, input_value) => $if_content2__hoist($scope, $hoist2($scope)), $scope => $scope._._);
const $if_content2__setup = $scope => {
  $if_content2__input_value($scope);
  $if_content2__$hoisted_hoist($scope, $get$hoisted_hoist($scope));
};
const $if_content2 = /* @__PURE__ */_._content_branch(0, 0, $if_content2__setup);
const $if_content__if = /* @__PURE__ */_._if("#text/0", $if_content2);
const $if_content__setup = $scope => {
  $if_content__input_value._($scope);
  /* y */2;
  $if_content__if($scope, 1 ? 0 : 1);
};
const $if_content__input_value = /* @__PURE__ */_._if_closure("input_value", "#text/0", 0, ($scope, input_value) => /* hoist2 */() => input_value);
const $if_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $get$hoisted_hoist2 = _._resume("__tests__/template.marko_0_$hoisted_hoist/hoist", _._hoist("hoist1"));
const $hoisted_hoist3 = /* @__PURE__ */_._const("$hoisted_hoist", ($scope, $hoisted_hoist) => /* x */$hoisted_hoist);
const $hoist3 = /* @__PURE__ */_._const("hoist1", ($scope, hoist1) => _._assert_hoist(hoist1));
const $input_value__closure = /* @__PURE__ */_._closure($if_content2__input_value);
export const $input_value = /* @__PURE__ */_._const("input_value", ($scope, input_value) => {
  $hoist3($scope, $hoist($scope));
  $if_content__input_value($scope);
  $input_value__closure($scope);
});
const $if = /* @__PURE__ */_._if("#text/0", $if_content);
export function $setup($scope) {
  $if($scope, 1 ? 0 : 1);
  $hoisted_hoist3($scope, $get$hoisted_hoist2($scope));
}
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_value($scope, input.value));
function $hoist2({
  _: {
    _: {
      input_value
    }
  }
}) {
  return () => input_value;
}
function $hoist({
  input_value
}) {
  return () => input_value;
}
_._resume("__tests__/template.marko_2/hoist2", $hoist2);
_._resume("__tests__/template.marko_0/hoist", $hoist);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);