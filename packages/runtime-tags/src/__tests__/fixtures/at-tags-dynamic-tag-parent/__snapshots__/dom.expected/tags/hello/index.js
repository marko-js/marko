export const $template = "<header><!></header><main><!></main><footer><!></footer>";
export const $walks = /* get, next(1), replace, out(1), next(1), replace, out(1), get, next(1), replace, out(1) */" D%lD%l D%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
export const $input_header_class = /* @__PURE__ */_._const("input_header_class", $scope => _._attr_class($scope["#header/0"], $scope.input_header_class));
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/1");
export const $input_header_content = /* @__PURE__ */_._const("input_header_content", $scope => $dynamicTag($scope, $scope.input_header_content));
const $dynamicTag2 = /* @__PURE__ */_._dynamic_tag("#text/2");
export const $input_content = /* @__PURE__ */_._const("input_content", $scope => $dynamicTag2($scope, $scope.input_content));
export const $input_footer_class = /* @__PURE__ */_._const("input_footer_class", $scope => _._attr_class($scope["#footer/3"], $scope.input_footer_class));
const $dynamicTag3 = /* @__PURE__ */_._dynamic_tag("#text/4");
export const $input_footer_content = /* @__PURE__ */_._const("input_footer_content", $scope => $dynamicTag3($scope, $scope.input_footer_content));
export const $input = /* @__PURE__ */_._const("input", $scope => {
  $input_header($scope, $scope.input.header);
  $input_content($scope, $scope.input.content);
  $input_footer($scope, $scope.input.footer);
});
export const $input_header = /* @__PURE__ */_._const("input_header", $scope => {
  $input_header_class($scope, $scope.input_header?.class);
  $input_header_content($scope, $scope.input_header?.content);
});
export const $input_footer = /* @__PURE__ */_._const("input_footer", $scope => {
  $input_footer_class($scope, $scope.input_footer?.class);
  $input_footer_content($scope, $scope.input_footer?.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/hello/index.marko", $template, $walks, $setup, $input);