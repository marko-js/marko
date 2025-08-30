export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $define_content = /* @__PURE__ */_$.createContent("__tests__/tags/my-tag.marko_1_renderer", "default", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0");
const $expr_inputAs_inputClass_htmlInput_content = /* @__PURE__ */_$.intersection(9, $scope => {
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
const $content = /* @__PURE__ */_$.state("content/8", $expr_inputAs_inputClass_htmlInput_content);
const $startContent = /* @__PURE__ */_$.value("startContent", $content);
export function $setup($scope) {
  $startContent($scope, {
    content: $define_content($scope)
  });
}
const $inputAs = /* @__PURE__ */_$.value("inputAs", $expr_inputAs_inputClass_htmlInput_content);
const $inputClass = /* @__PURE__ */_$.value("inputClass", $expr_inputAs_inputClass_htmlInput_content);
const $htmlInput = /* @__PURE__ */_$.value("htmlInput", $expr_inputAs_inputClass_htmlInput_content);
const $inputContent_effect = _$.effect("__tests__/tags/my-tag.marko_0_inputContent", ($scope, {
  inputContent
}) => $content($scope, inputContent));
const $inputContent = /* @__PURE__ */_$.value("inputContent", $inputContent_effect);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
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
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/my-tag.marko", $template, $walks, $setup, $input);