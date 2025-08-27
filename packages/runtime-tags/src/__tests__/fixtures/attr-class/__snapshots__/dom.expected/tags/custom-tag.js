export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $input_test_class$if$content = /* @__PURE__ */_$.conditionalClosure("input_test_class", "#text/1", 0, ($scope, input_test_class) => _$.classAttr($scope["#div/0"], input_test_class));
const $dynamicTag$if$content = /* @__PURE__ */_$.dynamicTag("#text/1");
const $input_test_content$if$content = /* @__PURE__ */_$.conditionalClosure("input_test_content", "#text/1", 0, $dynamicTag$if$content);
const $setup$if$content = $scope => {
  $input_test_class$if$content._($scope);
  $input_test_content$if$content._($scope);
};
const $if_content = /* @__PURE__ */_$.createRenderer("<div id=test><!></div>", /* get, next(1), replace, out(1) */" D%l", $setup$if$content);
export const $input_class = /* @__PURE__ */_$.value("input_class", ($scope, input_class) => _$.classAttr($scope["#div/0"], input_class));
const $if = /* @__PURE__ */_$.conditional("#text/1", $if_content);
export const $input_test = /* @__PURE__ */_$.value("input_test", ($scope, input_test) => {
  $input_test_class($scope, input_test?.class);
  $input_test_content($scope, input_test?.content);
  $if($scope, input_test ? 0 : 1);
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $input_class($scope, input.class);
  $input_test($scope, input.test);
});
const $input_test_class = /* @__PURE__ */_$.value("input_test_class", $input_test_class$if$content);
const $input_test_content = /* @__PURE__ */_$.value("input_test_content", $input_test_content$if$content);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);