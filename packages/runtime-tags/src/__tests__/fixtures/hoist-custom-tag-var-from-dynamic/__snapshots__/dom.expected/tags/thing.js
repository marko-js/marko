export const $template = "<!><!><!><!>";
export const $walks = /* over(1), replace, over(1), replace, over(2) */"b%b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_content = /* @__PURE__ */_._const("input_content", $scope => {
  $dynamicTag($scope, $scope.input_content);
  $dynamicTag2($scope, $scope.input_content);
});
export const $input = /* @__PURE__ */_._const("input", $scope => $input_content($scope, $scope.input.content));
export default /* @__PURE__ */_._template("__tests__/tags/thing.marko", $template, $walks, $setup, $input);