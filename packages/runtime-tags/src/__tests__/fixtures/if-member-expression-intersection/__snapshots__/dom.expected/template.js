export const $template = /*@__PURE__*/((_w0, _w1) => `${_w0}${_w1}`)(_child_template, _child_template);
export const $walks =
/*@__PURE__*/
/* <child>, <child> */
((_w0, _w1) => `/${_w0}&/${_w1}&`)(_child_walks, _child_walks);
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child($scope["#childScope/1"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);