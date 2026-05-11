export const $template = /*@__PURE__*/(_w0 => `<!>${_w0}<!>`)(_outer_template);
export const $walks =
/*@__PURE__*/
/* over(1), <outer>, over(1) */
(_w0 => `b/${_w0}&b`)(_outer_walks);
import { $setup as _outer, $input_content as _outer_input_content, $template as _outer_template, $walks as _outer_walks } from "./tags/outer.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $outer_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<span>static</span>", /* over(1) */"b");
export function $setup($scope) {
  _outer($scope["#childScope/0"]);
  _outer_input_content($scope["#childScope/0"], $outer_content($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);