export const $template = `${_getter_template}<div></div>`;
export const $walks = /* beginChildWithVar, _getter_walks, endChild, get, over(1) */`0${_getter_walks}& b`;
import { $setup as _getter, $template as _getter_template, $walks as _getter_walks } from "./tags/getter.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $get__script = _._script("__tests__/template.marko_0_get", ($scope, {
  get
}) => ($scope["#div/2"].textContent = get()));
const $get = _._var_resume("__tests__/template.marko_0_get/var", /* @__PURE__ */_._const("get", $get__script));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $get);
  _getter($scope["#childScope/0"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);