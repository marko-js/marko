export const $template = _child_template;
export const $walks = /* beginChild, _child_walks, endChild */`/${_child_walks}&`;
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
export function $setup($scope) {
  _child($scope["#childScope/0"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);