export const $template = "<div></div><button></button><span>Overridden</span><output></output><strong></strong><p></p><em></em>";
export const $walks = /* get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1) */" b b b b b b b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $CustomContent_content = _._content_resume("__tests__/tags/my-div.marko_1_content", "Custom content", /* over(1) */"b");
const $input__OR__CustomContent_content__script = _._script("__tests__/tags/my-div.marko_0_input_CustomContent_content", $scope => _._attrs_script($scope, "#p/5"));
const $input__OR__CustomContent_content = /* @__PURE__ */_._or(11, $scope => {
  let {
    input,
    CustomContent_content
  } = $scope;
  _._attrs_content($scope, "#p/5", {
    content: CustomContent_content,
    ...input
  });
  $input__OR__CustomContent_content__script($scope);
});
const $input__script = _._script("__tests__/tags/my-div.marko_0_input", $scope => {
  _._attrs_script($scope, "#div/0");
  _._attrs_script($scope, "#button/1");
  _._attrs_script($scope, "#span/2");
  _._attrs_script($scope, "#output/3");
  _._attrs_script($scope, "#strong/4");
});
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  _._attrs_content($scope, "#div/0", input);
  _._attrs_content($scope, "#button/1", {
    foo: 1,
    ...input
  });
  _._attrs($scope, "#span/2", input);
  _._attrs($scope, "#output/3", input);
  _._attrs($scope, "#strong/4", input);
  $input__OR__CustomContent_content($scope);
  $input__script($scope);
});
const $CustomContent = /* @__PURE__ */_._const("CustomContent", ($scope, CustomContent) => {
  _._attr_content($scope, "#em/6", CustomContent);
  $CustomContent_content2($scope, CustomContent?.content);
});
export function $setup($scope) {
  _._attr_content($scope, "#output/3", undefined);
  $CustomContent($scope, {
    content: $CustomContent_content($scope)
  });
}
const $CustomContent_content2 = /* @__PURE__ */_._const("CustomContent_content", ($scope, CustomContent_content) => {
  _._attr_content($scope, "#strong/4", CustomContent_content);
  $input__OR__CustomContent_content($scope);
});
export default /* @__PURE__ */_._template("__tests__/tags/my-div.marko", $template, $walks, $setup, $input);