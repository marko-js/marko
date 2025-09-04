export const $template = `${_child_template}<div> </div>`;
export const $walks = /* beginChildWithVar, _child_walks, endChild, next(1), get, out(1) */`0${_child_walks}&D l`;
import { $setup as _child, $template as _child_template, $walks as _child_walks } from "./tags/child.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $data = _._var_resume("__tests__/template.marko_0_data/var", /* @__PURE__ */_._const("data", ($scope, data) => _._text($scope["#text/2"], data)));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $data);
  _child($scope["#childScope/0"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);