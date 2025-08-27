export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $input_test_style$if$content = /* @__PURE__ */_$.conditionalClosure("input_test_style", "#text/1", 0, ($scope, input_test_style) => _$.styleAttr($scope["#div/0"], input_test_style));
const $dynamicTag$if$content = /* @__PURE__ */_$.dynamicTag("#text/1");
const $input_test_content$if$content = /* @__PURE__ */_$.conditionalClosure("input_test_content", "#text/1", 0, $dynamicTag$if$content);
const $setup$if$content = $scope => {
  $input_test_style$if$content._($scope);
  $input_test_content$if$content._($scope);
};
const $if_content = /* @__PURE__ */_$.createRenderer("<div id=test><!></div>", /* get, next(1), replace, out(1) */" D%l", $setup$if$content);
export const $input_style = /* @__PURE__ */_$.value("input_style", ($scope, input_style) => _$.styleAttr($scope["#div/0"], input_style));
const $if = /* @__PURE__ */_$.conditional("#text/1", $if_content);
export const $input_test = /* @__PURE__ */_$.value("input_test", ($scope, input_test) => {
  $input_test_style($scope, input_test?.style);
  $input_test_content($scope, input_test?.content);
  $if($scope, input_test ? 0 : 1);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_style($scope, input.style);
  $input_test($scope, input.test);
});
const $input_test_style = /* @__PURE__ */_$.value("input_test_style", $input_test_style$if$content);
const $input_test_content = /* @__PURE__ */_$.value("input_test_content", $input_test_content$if$content);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);