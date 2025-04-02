export const _template = `<div>${_child_template}</div>`;
export const _walks = /* next(1), beginChild, _child_walks, endChild, out(1) */`D/${_child_walks}&l`;
import { _setup as _child, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
export function _setup(_scope) {
  _child(_scope["#childScope/0"]);
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);