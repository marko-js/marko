export const $template = "<div></div><button></button><span>Overridden</span><output></output><strong></strong><p></p><em></em>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */" b b b b b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $define_content = _$.registerContent("__tests__/tags/my-div.marko_1_renderer", "Custom content", /* over(1) */"b");
const $expr_input_CustomContent_content_effect = _$.effect("__tests__/tags/my-div.marko_0_input_CustomContent_content", $scope => _$.attrsEvents($scope, "#p/5"));
const $expr_input_CustomContent_content = /* @__PURE__ */_$.intersection(11, $scope => {
  let {
    input,
    CustomContent_content
  } = $scope;
  _$.attrsAndContent($scope, "#p/5", {
    content: CustomContent_content,
    ...input
  });
  $expr_input_CustomContent_content_effect($scope);
});
const $input_effect = _$.effect("__tests__/tags/my-div.marko_0_input", $scope => {
  _$.attrsEvents($scope, "#div/0");
  _$.attrsEvents($scope, "#button/1");
  _$.attrsEvents($scope, "#span/2");
  _$.attrsEvents($scope, "#output/3");
  _$.attrsEvents($scope, "#strong/4");
});
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  _$.attrsAndContent($scope, "#div/0", input);
  _$.attrsAndContent($scope, "#button/1", {
    foo: 1,
    ...input
  });
  _$.attrs($scope, "#span/2", input);
  _$.attrs($scope, "#output/3", input);
  _$.attrs($scope, "#strong/4", input);
  $expr_input_CustomContent_content($scope);
  $input_effect($scope);
});
const $CustomContent = /* @__PURE__ */_$.value("CustomContent", ($scope, CustomContent) => {
  _$.insertContent($scope, "#em/6", CustomContent);
  $CustomContent_content($scope, CustomContent?.content);
});
export function $setup($scope) {
  _$.insertContent($scope, "#output/3", undefined);
  $CustomContent($scope, {
    content: $define_content($scope)
  });
}
const $CustomContent_content = /* @__PURE__ */_$.value("CustomContent_content", ($scope, CustomContent_content) => {
  _$.insertContent($scope, "#strong/4", CustomContent_content);
  $expr_input_CustomContent_content($scope);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-div.marko", $template, $walks, $setup, $input);