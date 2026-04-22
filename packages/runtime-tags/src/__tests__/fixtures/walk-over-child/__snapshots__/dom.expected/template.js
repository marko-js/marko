export const $template = /*@__PURE__*/(_w0 => `<section>${_w0}</section><div> </div>`)(_child_template);
export const $walks =
/*@__PURE__*/
/* next(1), <child>, out(1), next(1), get, out(1) */
(_w0 => `D/${_w0}&lD l`)(_child_walks);
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $count = /* @__PURE__ */_._let("count/2", $scope => _._text($scope["#text/1"], $scope.count));
export function $setup($scope) {
  _child($scope["#childScope/0"]);
  $count($scope, 0);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);