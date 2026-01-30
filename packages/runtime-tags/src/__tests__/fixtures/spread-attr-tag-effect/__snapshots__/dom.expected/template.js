export const $template = _wrap_template;
export const $walks = /* <wrap> */`/${_wrap_walks}&`;
import { $setup as _wrap, $input_option as _wrap_input_option, $template as _wrap_template, $walks as _wrap_walks } from "./tags/wrap.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $option_content = _._content_resume("__tests__/template.marko_1_content", "1", /* over(1) */"b");
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input_option($scope["#childScope/0"], _.attrTag({
    content: $option_content($scope)
  }));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);