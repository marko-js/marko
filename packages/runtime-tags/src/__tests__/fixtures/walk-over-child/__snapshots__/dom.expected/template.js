export const _template = `<section>${_child_template}</section><div> </div>`;
export const _walks = /* next(1), beginChild, _child_walks, endChild, out(1), next(1), get, out(1) */`D/${_child_walks}&lD l`;
import { _setup as _child, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _count = /* @__PURE__ */_$.state("count/2", (_scope, count) => _$.data(_scope["#text/1"], count));
export function _setup(_scope) {
  _child(_scope["#childScope/0"]);
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);