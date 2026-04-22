export const $template = /*@__PURE__*/(_w0 => `<div>${_w0}</div>`)(_child_template);
export const $walks =
/*@__PURE__*/
/* next(1), <child>, out(1) */
(_w0 => `D/${_w0}&l`)(_child_walks);
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);