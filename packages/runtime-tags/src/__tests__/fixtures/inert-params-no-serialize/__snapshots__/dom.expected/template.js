export const $template = `<!>${_child_template}<!>`;
export const $walks = /* over(1), beginChild, _child_walks, endChild, over(1) */`b/${_child_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $input_content as _child_input_content, $input_value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $child_content__x = /* @__PURE__ */_._const("x", ($scope, x) => _._text($scope["#text/0"], x));
const $child_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $child_content__x($scope, $params2[0]));
const $child_content = _._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", 0, $child_content__$params);
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child_input_content($scope["#childScope/0"], $child_content($scope));
  _child_input_value($scope["#childScope/0"], "Hi");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);