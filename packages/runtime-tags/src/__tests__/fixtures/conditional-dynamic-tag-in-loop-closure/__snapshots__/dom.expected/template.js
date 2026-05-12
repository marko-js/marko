export const $template = /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)(_sections_template);
export const $walks =
/*@__PURE__*/
/* over(1), <sections>, over(1) */
(_w0 => `b/${_w0}&b`)(_sections_walks);
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _sections, $input_section as _sections_input_section, $template as _sections_template, $walks as _sections_walks } from "./tags/sections.marko";
const $section_content__count = /* @__PURE__ */_._closure_get("count", $scope => _._text($scope["#text/0"], $scope._.count));
const $section_content__setup = $section_content__count;
const $section_content = _._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", $section_content__setup);
const $count__closure = /* @__PURE__ */_._closure($section_content__count);
const $count = /* @__PURE__ */_._let("count/1", $scope => {
  _sections_input_section($scope["#childScope/0"], _.attrTag({
    onClick: $onClick($scope),
    content: $section_content($scope)
  }));
  $count__closure($scope);
});
export function $setup($scope) {
  _sections($scope["#childScope/0"]);
  $count($scope, 0);
}
function $onClick($scope) {
  return function () {
    $count($scope, $scope.count + 1);
  };
}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);