export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__input_test_style = /* @__PURE__ */_._if_closure("#text/1", 0, $scope => _._attr_style($scope["#div/0"], $scope._.input_test_style));
const $if_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $if_content__input_test_content = /* @__PURE__ */_._if_closure("#text/1", 0, $scope => $if_content__dynamicTag($scope, $scope._.input_test_content));
const $if_content__setup = $scope => {
  $if_content__input_test_style._($scope);
  $if_content__input_test_content._($scope);
};
const $if_content = /* @__PURE__ */_._content_branch("<div id=test><!></div>", /* get, next(1), replace, out(1) */" D%l", $if_content__setup);
export const $input_style = /* @__PURE__ */_._const("input_style", $scope => _._attr_style($scope["#div/0"], $scope.input_style));
const $if = /* @__PURE__ */_._if("#text/1", $if_content);
export const $input_test = /* @__PURE__ */_._const("input_test", $scope => {
  $input_test_style($scope, $scope.input_test?.style);
  $input_test_content($scope, $scope.input_test?.content);
  $if($scope, $scope.input_test ? 0 : 1);
});
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_style($scope, $scope.input.style);
  $input_test($scope, $scope.input.test);
});
const $input_test_style = /* @__PURE__ */_._const("input_test_style", $if_content__input_test_style);
const $input_test_content = /* @__PURE__ */_._const("input_test_content", $if_content__input_test_content);
export default /* @__PURE__ */_._template("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);