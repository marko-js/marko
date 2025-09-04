export const $template = `<div>${_child_template}</div>`;
export const $walks = /* next(1), beginChild, _child_walks, endChild, out(1) */`D/${_child_walks}&l`;
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);