export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $if_content__content = /* @__PURE__ */_._if_closure("#text/0", 0, $scope => $if_content__dynamicTag($scope, $scope._.content));
const $if_content__setup = $if_content__content;
const $for_content__if = /* @__PURE__ */_._if("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $for_content__content = /* @__PURE__ */_._const("content", $scope => {
  $for_content__if($scope, $scope.content ? 0 : 1);
  $if_content__content($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__$temp($scope, $params2?.[0]);
const $for_content__$temp = ($scope, $temp) => $for_content__content($scope, $temp.content);
const $for = /* @__PURE__ */_._for_of("#text/0", "<!><!><!>", /* over(1), replace, over(2) */"b%c", 0, $for_content__$params);
export const $input_section = ($scope, input_section) => $for($scope, [input_section]);
export const $input = ($scope, input) => $input_section($scope, input.section);
export default /* @__PURE__ */_._template("__tests__/tags/sections.marko", $template, $walks, $setup, $input);