export const $template = `<div><!>\` ${_child_template}</div>`;
export const $walks = /* next(1), replace, over(2), beginChild, _child_walks, endChild, out(1) */`D%c/${_child_walks}&l`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $count = /* @__PURE__ */_._let("count/2", ($scope, count) => _._text($scope["#text/0"], count));
export function $setup($scope) {
  _child($scope["#childScope/1"]);
  $count($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);