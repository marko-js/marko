export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $define_content = /* @__PURE__ */_._content("__tests__/tags/my-tag.marko_1_content", "default", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $inputAs__OR__inputClass__OR__htmlInput__OR__content = /* @__PURE__ */_._or(9, $scope => {
  let {
    inputAs,
    inputClass,
    htmlInput,
    content
  } = $scope;
  $dynamicTag($scope, inputAs || "div", () => ({
    ...htmlInput,
    class: ["foo", inputClass],
    content: content
  }));
}, 3);
const $content = /* @__PURE__ */_._let("content/8", $inputAs__OR__inputClass__OR__htmlInput__OR__content);
const $startContent = /* @__PURE__ */_._const("startContent", $content);
export function $setup($scope) {
  $startContent($scope, {
    content: $define_content($scope)
  });
}
const $inputAs = /* @__PURE__ */_._const("inputAs", $inputAs__OR__inputClass__OR__htmlInput__OR__content);
const $inputClass = /* @__PURE__ */_._const("inputClass", $inputAs__OR__inputClass__OR__htmlInput__OR__content);
const $htmlInput = /* @__PURE__ */_._const("htmlInput", $inputAs__OR__inputClass__OR__htmlInput__OR__content);
const $inputContent__script = _._script("__tests__/tags/my-tag.marko_0_inputContent", ($scope, {
  inputContent
}) => $content($scope, inputContent));
const $inputContent = /* @__PURE__ */_._const("inputContent", $inputContent__script);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  (({
    as,
    class: $class,
    content,
    ...htmlInput
  }) => $htmlInput($scope, htmlInput))(input);
  $inputAs($scope, input.as);
  $inputClass($scope, input.class);
  $inputContent($scope, input.content);
});
export default /* @__PURE__ */_._template("__tests__/tags/my-tag.marko", $template, $walks, $setup, $input);