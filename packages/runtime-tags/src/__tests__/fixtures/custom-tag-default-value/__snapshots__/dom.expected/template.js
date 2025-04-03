export const $template = `${_child_template}${_child_template}`;
export const $walks = /* beginChild, _child_walks, endChild, beginChild, _child_walks, endChild */`/${_child_walks}&/${_child_walks}&`;
import { $setup as _child, $input_value as _child_input_value, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $x = /* @__PURE__ */_$.state("x/2", ($scope, x) => _child_input_value($scope["#childScope/1"], x));
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  _child($scope["#childScope/1"]);
  $x($scope, "y");
  _child_input_value($scope["#childScope/0"], 3);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);