export const $template = `${_child_template}<!>`;
export const $walks = /* beginChild, _child_walks, endChild, over(1) */`/${_child_walks}&b`;
import { $setup as _child, $content as _child_input_content, $name as _child_input_name, $template as _child_template, $walks as _child_walks } from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $child_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "This is the body content", /* over(1) */"b");
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
  _child_input_name($scope["#childScope/0"], "World");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);