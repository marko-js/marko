export const $template = "<div></div>";
export const $walks = /* get, over(1) */" b";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $value2$if$content = /* @__PURE__ */_$.dynamicClosureRead("value2", ($scope, value2) => _$.data($scope["#text/0"], value2), $scope => $scope._._);
const $if_content3 = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, $value2$if$content);
const $value1$if$content = /* @__PURE__ */_$.dynamicClosureRead("value1", ($scope, value1) => _$.data($scope["#text/0"], value1), $scope => $scope._._);
const $if_content2 = /* @__PURE__ */_$.createRenderer("<span> </span>", /* next(1), get */"D ", 0, 0, $value1$if$content);
const $if$if$content = /* @__PURE__ */_$.conditional("#text/0", $if_content2);
const $value1$if$content2 = /* @__PURE__ */_$.conditionalClosure("value1", "#div/0", 0, ($scope, value1) => $if$if$content($scope, value1 ? 0 : 1));
const $if$if$content2 = /* @__PURE__ */_$.conditional("#text/1", $if_content3);
const $value2$if$content2 = /* @__PURE__ */_$.conditionalClosure("value2", "#div/0", 0, ($scope, value2) => $if$if$content2($scope, value2 ? 0 : 1));
const $if_content = /* @__PURE__ */_$.createRenderer("<!><!><!><!>", /* replace, over(1), replace */"D%b%D", 0, 0, $scope => {
  $value1$if$content2._($scope);
  $value2$if$content2._($scope);
});
const $if = /* @__PURE__ */_$.conditional("#div/0", $if_content);
export const $show = /* @__PURE__ */_$.value("show", ($scope, show) => $if($scope, show ? 0 : 1));
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $show($scope, input.show);
  $value($scope, input.value1);
  $value2($scope, input.value2);
});
const $value_closure = /* @__PURE__ */_$.dynamicClosure($value1$if$content);
export const $value = /* @__PURE__ */_$.value("value1", $scope => {
  $value1$if$content2($scope);
  $value_closure($scope);
});
const $value2_closure = /* @__PURE__ */_$.dynamicClosure($value2$if$content);
export const $value2 = /* @__PURE__ */_$.value("value2", $scope => {
  $value2$if$content2($scope);
  $value2_closure($scope);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup, $input);