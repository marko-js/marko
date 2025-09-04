export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $inputAsdiv_content = _._content_resume("__tests__/tags/wrapper.marko_1_content", "hi", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $inputAsdiv_content);
const $inputAs__OR__htmlInput = /* @__PURE__ */_._or(5, $scope => {
  let {
    inputAs,
    htmlInput
  } = $scope;
  $dynamicTag($scope, inputAs || "div", () => htmlInput);
});
const $inputAs = /* @__PURE__ */_._const("inputAs", $inputAs__OR__htmlInput);
const $htmlInput = /* @__PURE__ */_._const("htmlInput", $inputAs__OR__htmlInput);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  (({
    as,
    ...htmlInput
  }) => $htmlInput($scope, htmlInput))(input);
  $inputAs($scope, input.as);
});
export default /* @__PURE__ */_._template("__tests__/tags/wrapper.marko", $template, $walks, $setup, $input);