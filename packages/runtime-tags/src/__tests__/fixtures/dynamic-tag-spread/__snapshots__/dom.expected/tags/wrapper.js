export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
_._resume_dynamic_tag();
const $inputAsdiv_content = _._content_resume("__tests__/tags/wrapper.marko_1_content", "hi", /* over(1) */"b");
const $dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", $inputAsdiv_content);
const $inputAs__OR__foo__OR__htmlInput = /* @__PURE__ */_._or(6, $scope => $dynamicTag($scope, $scope.inputAs || "div", () => ({
  ...$scope.htmlInput,
  "data-foo": $scope.foo
})), 2);
export const $inputAs = /* @__PURE__ */_._const("inputAs", $inputAs__OR__foo__OR__htmlInput);
export const $foo = /* @__PURE__ */_._const("foo", $inputAs__OR__foo__OR__htmlInput);
export const $htmlInput = /* @__PURE__ */_._const("htmlInput", $inputAs__OR__foo__OR__htmlInput);
export const $input = /* @__PURE__ */_._const("input", $scope => {
  (({
    as,
    foo,
    ...htmlInput
  }) => $htmlInput($scope, htmlInput))($scope.input);
  $inputAs($scope, $scope.input.as);
  $foo($scope, $scope.input.foo);
});
export default /* @__PURE__ */_._template("__tests__/tags/wrapper.marko", $template, $walks, $setup, $input);