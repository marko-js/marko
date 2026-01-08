export const $template = _child_template;
export const $walks = /* <child> */`/${_child_walks}&`;
import { $setup as _child, $buttons as _child_input_button, $htmlInput as _child_input_$rest, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $button_content = _._content_resume("__tests__/template.marko_1_content", "one", /* over(1) */"b");
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_button($scope["#childScope/0"], _.attrTag({
    onClick: $onClick,
    content: $button_content($scope)
  }));
  _child_input_$rest($scope["#childScope/0"], {});
}
function $onClick() {}
_._resume("__tests__/template.marko_0/onClick", $onClick);
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);