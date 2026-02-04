export const $template = "<div></div><!><!>";
export const $walks = /* get, over(1), replace, over(2) */" b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__input_test_class = /* @__PURE__ */_._if_closure("#text/1", 0, $scope => _._attr_class($scope["#div/0"], $scope._.input_test_class));
const $if_content__setup = $scope => {
  $if_content__input_test_class._($scope);
  $if_content__input_test_content._($scope);
};
const $if_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
const $if_content__input_test_content = /* @__PURE__ */_._if_closure("#text/1", 0, $scope => $if_content__dynamicTag($scope, $scope._.input_test_content));
export const $input_class = ($scope, input_class) => _._attr_class($scope["#div/0"], input_class);
const $if = /* @__PURE__ */_._if("#text/1", "<div id=test><!></div>", /* get, next(1), replace, out(1) */" D%l", $if_content__setup);
export const $input_test = ($scope, input_test) => {
  $input_test_class($scope, input_test?.class);
  $input_test_content($scope, input_test?.content);
  $if($scope, input_test ? 0 : 1);
};
export const $input = ($scope, input) => {
  $input_class($scope, input.class);
  $input_test($scope, input.test);
};
const $input_test_class = /* @__PURE__ */_._const("input_test_class", $if_content__input_test_class);
const $input_test_content = /* @__PURE__ */_._const("input_test_content", $if_content__input_test_content);
export default /* @__PURE__ */_._template("__tests__/tags/custom-tag.marko", $template, $walks, $setup, $input);