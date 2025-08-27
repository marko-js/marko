export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $inputAsdiv_content = _$.registerContent("__tests__/tags/wrapper.marko_1_renderer", "hi", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/0", $inputAsdiv_content);
const $expr_inputAs_htmlInput = /* @__PURE__ */_$.intersection(5, $scope => {
  const {
    inputAs,
    htmlInput
  } = $scope;
  $dynamicTag($scope, inputAs || "div", () => htmlInput);
});
const $inputAs = /* @__PURE__ */_$.value("inputAs", $expr_inputAs_htmlInput);
const $htmlInput = /* @__PURE__ */_$.value("htmlInput", $expr_inputAs_htmlInput);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  (({
    as,
    ...htmlInput
  }) => $htmlInput($scope, htmlInput))(input);
  $inputAs($scope, input.as);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/wrapper.marko", $template, $walks, $setup, $input);