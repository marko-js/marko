export const _template_ = `${_child_template}<div> </div>`;
export const _walks_ = /* beginChildWithVar, _child_walks, endChild, next(1), get, out(1) */`0${_child_walks}&D l`;
import { _setup_ as _child, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _data = _$.registerBoundSignal("__tests__/template.marko_0_data/var", /* @__PURE__ */_$.value("data/3", (_scope, data) => _$.data(_scope["#text/2"], data)));
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _data);
  _child(_scope["#childScope/0"]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);