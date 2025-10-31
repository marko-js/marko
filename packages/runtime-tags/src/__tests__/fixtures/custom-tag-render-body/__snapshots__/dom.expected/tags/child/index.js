export const $template = "<!><!><!>";
export const $walks = /* replace, over(1), replace, over(2) */"%b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $name = /* @__PURE__ */_._const("name", $scope => _._text($scope["#text/0"], $scope.name));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $content = /* @__PURE__ */_._const("content", $scope => $dynamicTag($scope, $scope.content));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $name($scope, $scope.input.name);
  $content($scope, $scope.input.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/child/index.marko", $template, $walks, $setup, $input);