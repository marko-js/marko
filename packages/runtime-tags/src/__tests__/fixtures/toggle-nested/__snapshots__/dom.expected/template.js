export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content3__value = /* @__PURE__ */_._closure_get("value2", $scope => _._text($scope["#text/0"], $scope._._.value2), $scope => $scope._._);
const $if_content3__setup = $if_content3__value;
const $if_content2__value = /* @__PURE__ */_._closure_get("value1", $scope => _._text($scope["#text/0"], $scope._._.value1), $scope => $scope._._);
const $if_content2__setup = $if_content2__value;
const $if_content__if = /* @__PURE__ */_._if("#text/0", "<span> </span>", /* next(1), get, out(1) */"D l", $if_content2__setup);
const $if_content__value = /* @__PURE__ */_._if_closure("#div/0", 0, $scope => $if_content__if($scope, $scope._.value1 ? 0 : 1));
const $if_content__setup = $scope => {
  $if_content__value._($scope);
  $if_content__value2._($scope);
};
const $if_content__if2 = /* @__PURE__ */_._if("#text/1", "<span> </span>", /* next(1), get, out(1) */"D l", $if_content3__setup);
const $if_content__value2 = /* @__PURE__ */_._if_closure("#div/0", 0, $scope => $if_content__if2($scope, $scope._.value2 ? 0 : 1));
const $if = /* @__PURE__ */_._if("#div/0", "<!><!><!><!>", /* over(1), replace, over(1), replace, over(2) */"b%b%c", $if_content__setup);
export const $show = ($scope, show) => $if($scope, show ? 0 : 1);
export const $input = ($scope, input) => {
  $show($scope, input.show);
  $value($scope, input.value1);
  $value2($scope, input.value2);
};
const $value__closure = /* @__PURE__ */_._closure($if_content2__value);
export const $value = /* @__PURE__ */_._const("value1", $scope => {
  $if_content__value($scope);
  $value__closure($scope);
});
const $value2__closure = /* @__PURE__ */_._closure($if_content3__value);
export const $value2 = /* @__PURE__ */_._const("value2", $scope => {
  $if_content__value2($scope);
  $value2__closure($scope);
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);