export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $startContent_content = /* @__PURE__ */_._content("__tests__/tags/my-tag.marko_1_content", "default", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $inputAs__OR__inputClass__OR__htmlInput__OR__content = /* @__PURE__ */_._or(9, $scope => $dynamicTag($scope, $scope.inputAs || "div", () => ({
  ...$scope.htmlInput,
  class: ["foo", $scope.inputClass],
  content: $scope.content
})), 3);
const $content = /* @__PURE__ */_._let("content/8", $inputAs__OR__inputClass__OR__htmlInput__OR__content);
const $startContent = /* @__PURE__ */_._const("startContent", $scope => $content($scope, $scope.startContent));
export function $setup($scope) {
  $startContent($scope, {
    content: $startContent_content($scope)
  });
}
const $inputAs = /* @__PURE__ */_._const("inputAs", $inputAs__OR__inputClass__OR__htmlInput__OR__content);
const $inputClass = /* @__PURE__ */_._const("inputClass", $inputAs__OR__inputClass__OR__htmlInput__OR__content);
const $htmlInput = /* @__PURE__ */_._const("htmlInput", $inputAs__OR__inputClass__OR__htmlInput__OR__content);
const $inputContent__script = _._script("__tests__/tags/my-tag.marko_0_inputContent", $scope => $content($scope, $scope.inputContent));
const $inputContent = /* @__PURE__ */_._const("inputContent", $inputContent__script);
export const $input = /* @__PURE__ */_._const("input", $scope => {
  (({
    as,
    class: $class,
    content,
    ...htmlInput
  }) => $htmlInput($scope, htmlInput))($scope.input);
  $inputAs($scope, $scope.input.as);
  $inputClass($scope, $scope.input.class);
  $inputContent($scope, $scope.input.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/my-tag.marko", $template, $walks, $setup, $input);