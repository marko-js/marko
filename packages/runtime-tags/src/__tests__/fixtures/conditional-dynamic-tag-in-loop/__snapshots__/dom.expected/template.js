export const $template = /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)(_sections_template);
export const $walks =
/*@__PURE__*/
/* over(1), <sections>, over(1) */
(_w0 => `b/${_w0}&b`)(_sections_walks);
import { $setup as _sections, $input_section as _sections_input_section, $template as _sections_template, $walks as _sections_walks } from "./tags/sections.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $section_content2 = /* @__PURE__ */_._content("__tests__/template.marko_2_content", "<div>that never changes</div>", /* over(1) */"b");
const $section_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<div>static content</div>", /* over(1) */"b");
export function $setup($scope) {
  _sections($scope["#childScope/0"]);
  _sections_input_section($scope["#childScope/0"], (_.attrTags(_.attrTag({
    content: $section_content($scope)
  }), {
    content: $section_content2($scope)
  })));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);