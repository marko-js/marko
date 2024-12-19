export const _template_ = `<section>${_child_template}</section><div> </div>`;
export const _walks_ = /* next(1), beginChild, _child_walks, endChild, out(1), next(1), get, out(1) */`D/${_child_walks}&lD l`;
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _$.data(_scope["#text/1"], count));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);