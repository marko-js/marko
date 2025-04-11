export const $template = `${_child_template}<div>parent <!></div>`;
export const $walks = /* beginChildWithVar, _child_walks, endChild, next(1), over(1), replace, out(1) */`0${_child_walks}&Db%l`;
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $value = _$.registerBoundSignal("__tests__/template.marko_0_value/var", /* @__PURE__ */_$.value("value", ($scope, value) => _$.data($scope["#text/2"], value)));
export function $setup($scope) {
  _$.setTagVar($scope, "#childScope/0", $value);
  _child($scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);