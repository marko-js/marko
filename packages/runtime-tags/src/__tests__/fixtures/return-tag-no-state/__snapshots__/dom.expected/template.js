export const $template = /*@__PURE__*/(_w0 => `${_w0}<div>parent <!></div>`)(_child_template);
export const $walks =
/*@__PURE__*/
/* <child/var>, next(1), over(1), replace, out(1) */
(_w0 => `0${_w0}&Db%l`)(_child_walks);
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
const $value = _._var_resume("__tests__/template.marko_0_value/var", ($scope, value) => _._text($scope["#text/2"], value));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $value);
  _child($scope["#childScope/0"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);