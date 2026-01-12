export const $template = _wrap_template;
export const $walks = /* <wrap> */`/${_wrap_walks}&`;
import { $setup as _wrap, $rest_option as _wrap_input_option, $_class as _wrap_input_class, $template as _wrap_template, $walks as _wrap_walks } from "./tags/wrap.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $option_content3 = _._content_resume("__tests__/template.marko_3_content", "Three", /* over(1) */"b");
const $option_content2 = _._content_resume("__tests__/template.marko_2_content", "Two", /* over(1) */"b");
const $option_content = _._content_resume("__tests__/template.marko_1_content", "One", /* over(1) */"b");
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input_option($scope["#childScope/0"], (_.attrTags(_.attrTags(_.attrTag({
    value: 1,
    content: $option_content($scope)
  }), {
    value: 2,
    content: $option_content2($scope)
  }), {
    value: 3,
    content: $option_content3($scope)
  })));
  _wrap_input_class($scope["#childScope/0"], "foo");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);