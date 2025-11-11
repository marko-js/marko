export const $template = `${_child_template}${_child_template}`;
export const $walks = /* <child>, <child> */`/${_child_walks}&/${_child_walks}&`;
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child($scope["#childScope/1"]);
}
import * as _ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);