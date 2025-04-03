export const $template = `<section>${_child_template}</section><div> </div>`;
export const $walks = /* next(1), beginChild, _child_walks, endChild, out(1), next(1), get, out(1) */`D/${_child_walks}&lD l`;
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $count = /* @__PURE__ */_$.state("count/2", ($scope, count) => _$.data($scope["#text/1"], count));
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  $count($scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);